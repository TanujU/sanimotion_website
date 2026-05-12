-- Patient auth setup for Sanimotion Kunden app.
-- Run once in Supabase SQL Editor.

-- ───────────────────────────────────────────────────────────────────────────
-- 1. Tables
-- ───────────────────────────────────────────────────────────────────────────

create table if not exists public.patient_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  vorname text,
  nachname text,
  geburtsdatum date,
  telefon text,
  email text,
  adresse text,
  krankenkasse text,
  versicherungsnummer text,
  versicherungstyp text check (versicherungstyp in ('gesetzlich','privat')),
  caretaker_name text,
  caretaker_beziehung text,
  caretaker_telefon text,
  caretaker_email text,
  profile_picture_path text,
  auf_id text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists patient_profiles_auf_id_idx
  on public.patient_profiles (auf_id);

create table if not exists public.app_memberships (
  user_id uuid references auth.users(id) on delete cascade,
  app_key text not null,
  role    text not null default 'patient',
  created_at timestamptz default now(),
  primary key (user_id, app_key)
);

create index if not exists app_memberships_app_key_idx
  on public.app_memberships (app_key);

-- ───────────────────────────────────────────────────────────────────────────
-- 2. Trigger — seed patient_profiles + app_memberships on patient signup.
--    Scoped by app_key so business-app signups are a no-op.
--    Also pulls auf_id from signup metadata (set by the QR register flow).
-- ───────────────────────────────────────────────────────────────────────────

create or replace function public.handle_new_patient_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.raw_user_meta_data->>'app_key' = 'sanimotion_kunden' then
    insert into public.patient_profiles
      (user_id, vorname, nachname, geburtsdatum, telefon, email, auf_id)
    values (
      new.id,
      new.raw_user_meta_data->>'vorname',
      new.raw_user_meta_data->>'nachname',
      nullif(new.raw_user_meta_data->>'geburtsdatum','')::date,
      new.raw_user_meta_data->>'telefon',
      new.email,
      nullif(new.raw_user_meta_data->>'auf_id','')
    );
    insert into public.app_memberships (user_id, app_key)
      values (new.id, 'sanimotion_kunden')
      on conflict do nothing;
  end if;
  return new;
exception
  when others then
    raise warning 'handle_new_patient_user failed: %', sqlerrm;
    return new;
end;
$$;

drop trigger if exists on_auth_user_created_patient on auth.users;
create trigger on_auth_user_created_patient
  after insert on auth.users
  for each row execute function public.handle_new_patient_user();

-- ───────────────────────────────────────────────────────────────────────────
-- 3. Row-level security
-- ───────────────────────────────────────────────────────────────────────────

alter table public.patient_profiles enable row level security;
alter table public.app_memberships  enable row level security;

drop policy if exists "patient reads own profile"   on public.patient_profiles;
drop policy if exists "patient updates own profile" on public.patient_profiles;
drop policy if exists "user reads own memberships"  on public.app_memberships;

create policy "patient reads own profile"
  on public.patient_profiles for select
  using (
    user_id = auth.uid()
    and exists (
      select 1 from public.app_memberships
      where user_id = auth.uid() and app_key = 'sanimotion_kunden'
    )
  );

create policy "patient updates own profile"
  on public.patient_profiles for update
  using (
    user_id = auth.uid()
    and exists (
      select 1 from public.app_memberships
      where user_id = auth.uid() and app_key = 'sanimotion_kunden'
    )
  );

create policy "user reads own memberships"
  on public.app_memberships for select
  using (user_id = auth.uid());

-- ───────────────────────────────────────────────────────────────────────────
-- 4. Storage bucket for profile pictures
-- ───────────────────────────────────────────────────────────────────────────

insert into storage.buckets (id, name, public)
  values ('patient-avatars','patient-avatars', false)
  on conflict (id) do nothing;

drop policy if exists "patient reads own avatar"   on storage.objects;
drop policy if exists "patient writes own avatar"  on storage.objects;
drop policy if exists "patient updates own avatar" on storage.objects;

create policy "patient reads own avatar"
  on storage.objects for select
  using (
    bucket_id = 'patient-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "patient writes own avatar"
  on storage.objects for insert
  with check (
    bucket_id = 'patient-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "patient updates own avatar"
  on storage.objects for update
  using (
    bucket_id = 'patient-avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

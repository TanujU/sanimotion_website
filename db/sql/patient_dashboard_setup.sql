-- Dashboard rewrite — additive, non-destructive.
-- Run once in Supabase SQL Editor.

-- ───────────────────────────────────────────────────────────────────────────
-- 1. qr_feedback_responses — add user_id link (nullable, backfilled by app)
-- ───────────────────────────────────────────────────────────────────────────
-- Existing anonymous QR submissions stay valid (user_id NULL).
-- After login, the dashboard upserts the user_id onto the row matching auf_id.

alter table public.qr_feedback_responses
  add column if not exists user_id uuid references auth.users(id) on delete set null;

create index if not exists qr_feedback_responses_user_id_idx
  on public.qr_feedback_responses (user_id);

create index if not exists qr_feedback_responses_auf_id_idx
  on public.qr_feedback_responses (auf_id);

-- ───────────────────────────────────────────────────────────────────────────
-- 2. patient_documents — replaces patient_demo_documents.
--    Stores file metadata + storage path; file bytes live in the bucket.
-- ───────────────────────────────────────────────────────────────────────────

create table if not exists public.patient_documents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  kind text not null default 'Sonstiges'
    check (kind in ('Rezept','Arztbrief','Versicherung','Sonstiges')),
  mime_type text,
  size_bytes bigint,
  storage_path text not null,            -- patient-documents/<user_id>/<uuid>.<ext>
  uploaded_at timestamptz default now()
);

create index if not exists patient_documents_user_id_idx
  on public.patient_documents (user_id);

alter table public.patient_documents enable row level security;

drop policy if exists "patient reads own documents"   on public.patient_documents;
drop policy if exists "patient inserts own documents" on public.patient_documents;
drop policy if exists "patient deletes own documents" on public.patient_documents;

create policy "patient reads own documents"
  on public.patient_documents for select
  using (
    user_id = auth.uid()
    and exists (
      select 1 from public.app_memberships
      where user_id = auth.uid() and app_key = 'sanimotion_kunden'
    )
  );

create policy "patient inserts own documents"
  on public.patient_documents for insert
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.app_memberships
      where user_id = auth.uid() and app_key = 'sanimotion_kunden'
    )
  );

create policy "patient deletes own documents"
  on public.patient_documents for delete
  using (
    user_id = auth.uid()
    and exists (
      select 1 from public.app_memberships
      where user_id = auth.uid() and app_key = 'sanimotion_kunden'
    )
  );

-- ───────────────────────────────────────────────────────────────────────────
-- 3. Storage bucket for documents
-- ───────────────────────────────────────────────────────────────────────────

insert into storage.buckets (id, name, public)
  values ('patient-documents','patient-documents', false)
  on conflict (id) do nothing;

drop policy if exists "patient reads own document files"   on storage.objects;
drop policy if exists "patient writes own document files"  on storage.objects;
drop policy if exists "patient deletes own document files" on storage.objects;

create policy "patient reads own document files"
  on storage.objects for select
  using (
    bucket_id = 'patient-documents'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "patient writes own document files"
  on storage.objects for insert
  with check (
    bucket_id = 'patient-documents'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

create policy "patient deletes own document files"
  on storage.objects for delete
  using (
    bucket_id = 'patient-documents'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

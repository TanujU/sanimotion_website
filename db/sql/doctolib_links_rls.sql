-- ============================================
-- Grant read access to doctolib_links
-- ============================================
-- The patient dashboard (and FeedbackPage) need to SELECT this table to
-- resolve doctor → Doctolib URL. Without a policy, RLS silently filters
-- everything to an empty array.
-- ============================================

alter table public.doctolib_links enable row level security;

drop policy if exists "doctolib_links readable by all" on public.doctolib_links;

create policy "doctolib_links readable by all"
  on public.doctolib_links
  for select
  to anon, authenticated
  using (true);

-- Sanity check
select count(*) as total_rows from public.doctolib_links;

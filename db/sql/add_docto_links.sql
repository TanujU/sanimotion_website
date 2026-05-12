-- ============================================
-- Add docto_links column to Sanimotion_join and Sani_grouped
-- ============================================
-- Prerequisites:
--   - doctolib_links table exists with columns: id, doctor_name, link
--   - One row in doctolib_links has doctor_name = 'others' (the fallback link)
-- ============================================


-- ============================================
-- STEP 1: Add docto_links column to Sanimotion_join
-- ============================================

ALTER TABLE "Sanimotion_join"
  ADD COLUMN IF NOT EXISTS docto_links TEXT;


-- ============================================
-- STEP 2: Populate docto_links in Sanimotion_join
--   - Matched rows: use the link for the matching doctor_name
--   - Unmatched rows: fall back to the 'other' record's link
-- ============================================

UPDATE "Sanimotion_join" sj
SET docto_links = COALESCE(
  -- exact match on doctor name
  (SELECT dl.link FROM doctolib_links dl WHERE dl.doctor_name = sj."Arzt" LIMIT 1),
  -- fallback: the 'others' record
  (SELECT dl.link FROM doctolib_links dl WHERE dl.doctor_name = 'others' LIMIT 1)
);


-- ============================================
-- STEP 3: Add docto_links column to Sani_grouped
-- ============================================

ALTER TABLE "Sani_grouped"
  ADD COLUMN IF NOT EXISTS docto_links TEXT;


-- ============================================
-- STEP 4: Populate docto_links in Sani_grouped
--   Synced from Sanimotion_join using the shared Auf.ID
-- ============================================

UPDATE "Sani_grouped" sg
SET docto_links = sj.docto_links
FROM "Sanimotion_join" sj
WHERE sg."Auf.ID" = sj."Auf.ID";


-- ============================================
-- STEP 5: Verify
-- ============================================

SELECT
  COUNT(*)                                            AS total_sanimotion,
  COUNT(docto_links)                                  AS with_link,
  COUNT(*) FILTER (WHERE docto_links IS NULL)         AS missing_link
FROM "Sanimotion_join";

SELECT
  COUNT(*)                                            AS total_sani_grouped,
  COUNT(docto_links)                                  AS with_link,
  COUNT(*) FILTER (WHERE docto_links IS NULL)         AS missing_link
FROM "Sani_grouped";

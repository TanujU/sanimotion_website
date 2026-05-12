/*
 * Patient lookup against the Sani_grouped table.
 *
 * Sani_grouped is the consolidated, one-row-per-patient table. Each row
 * has a representative `Auf.ID` that downstream tools (the Vercel
 * dashboard at sanimotion-wiedervorlage.vercel.app) key on.
 *
 * Why match here and not `Sanimotion_Kunden`? The latter holds one row
 * per Auftrag, so a single patient may appear 1..N times with different
 * Auf.IDs — picking one would be arbitrary. Sani_grouped is already the
 * deduped patient view.
 */
import { supabase } from "~/lib/supabase";

const DASHBOARD_URL =
  (import.meta.env.VITE_PATIENT_DASHBOARD_URL as string | undefined) ??
  "https://sanimotion-wiedervorlage.vercel.app/patients/dashboard";

/* "1992-05-09" → "09.05.1992". Returns null for malformed input. */
function isoToDeDate(iso: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return null;
  return `${m[3]}.${m[2]}.${m[1]}`;
}

export type PatientMatch = {
  aufId: string;
  saniGroupedId: number;
};

/*
 * Try to find a patient row matching first name + last name + DOB.
 * Names are matched case-insensitively (ilike); DOB is matched exact
 * after format conversion. Returns null if nothing matches or if the
 * Supabase client isn't configured.
 *
 * If multiple rows happen to match (rare — Sani_grouped is deduped), the
 * caller gets the most recently created one.
 */
export async function findPatient(input: {
  firstName: string;
  lastName: string;
  dob: string;
}): Promise<PatientMatch | null> {
  if (!supabase) return null;

  const first = input.firstName.trim();
  const last = input.lastName.trim();
  const dob = isoToDeDate(input.dob);
  if (!first || !last || !dob) return null;

  const { data, error } = await supabase
    .from("Sani_grouped")
    .select('id, "Auf.ID", Erstelldatum')
    .ilike("Vorname", first)
    .ilike("Nachname", last)
    .eq("Geburtsdatum", dob)
    .limit(5);

  if (error || !data || data.length === 0) return null;

  // Prefer the row with the largest id (latest record).
  const best = data.reduce((acc, row) =>
    (row as { id: number }).id > (acc as { id: number }).id ? row : acc,
  ) as { id: number; "Auf.ID": string };

  return { aufId: best["Auf.ID"], saniGroupedId: best.id };
}

/* Build the dashboard URL for a given auf_id. */
export function dashboardUrl(aufId: string): string {
  const url = new URL(DASHBOARD_URL);
  url.searchParams.set("auf_id", aufId);
  return url.toString();
}

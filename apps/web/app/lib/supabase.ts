/*
 * Supabase browser client.
 *
 * Reads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from import.meta.env.
 * The anon key is safe to ship to the browser — it only grants access
 * allowed by Row-Level Security policies.
 *
 * Returns `null` if env vars are missing so SSR / first-paint never throws;
 * call sites should guard with `if (!supabase) …` and surface a clear
 * configuration error to the user.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null =
  url && anonKey
    ? createClient(url, anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      })
    : null;

export const isSupabaseConfigured = (): boolean => supabase !== null;

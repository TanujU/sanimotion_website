import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { cookieOptions, getSupabaseEnv } from "./config";

let cached: SupabaseClient | null | undefined;

export function getBrowserClient(): SupabaseClient | null {
  if (cached !== undefined) return cached;
  const { url, anonKey } = getSupabaseEnv();
  if (!url || !anonKey) {
    cached = null;
    return null;
  }
  cached = createBrowserClient(url, anonKey, { cookieOptions });
  return cached;
}

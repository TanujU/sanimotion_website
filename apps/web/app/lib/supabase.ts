/*
 * Supabase browser client.
 *
 * Thin re-export from @sanimotion/auth. The shared package owns the cookie
 * config (domain .sanimotion.com in prod) so the session this app reads is
 * the same one kunden.sanimotion.com will write at login.
 *
 * `supabase` is nullable when env vars are missing so SSR / first-paint never
 * throws; call sites guard with `if (!supabase) …`.
 */
import { getBrowserClient } from "@sanimotion/auth";

export const supabase = getBrowserClient();
export const isSupabaseConfigured = (): boolean => supabase !== null;

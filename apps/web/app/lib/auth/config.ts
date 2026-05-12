const isProd = import.meta.env.PROD;

// Shared cookie config for both the browser client (@supabase/ssr writes
// these on signIn / refresh) and the server client (loaders forward Set-Cookie
// to the response). Domain ".sanimotion.com" is the linchpin: it's what makes
// the session readable on both sanimotion.com and kunden.sanimotion.com.
export const cookieOptions = {
  name: "sb-sanimotion",
  domain: isProd ? ".sanimotion.com" : undefined,
  path: "/",
  sameSite: "lax" as const,
  secure: isProd,
  maxAge: 60 * 60 * 24 * 7,
};

export function getSupabaseEnv() {
  return {
    url: import.meta.env.VITE_SUPABASE_URL as string | undefined,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
  };
}

import {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
  type CookieMethodsServer,
} from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "react-router";
import { cookieOptions, getSupabaseEnv } from "./config";

// Builds a Supabase client backed by request cookies + a response Headers
// object. Cookie mutations from Supabase (refresh, signOut) get appended to
// `headers` so the caller can return them on the loader's Response.
export function getServerClient(
  request: Request,
  headers: Headers,
): SupabaseClient | null {
  const { url, anonKey } = getSupabaseEnv();
  if (!url || !anonKey) return null;

  const cookies: CookieMethodsServer = {
    getAll() {
      return parseCookieHeader(request.headers.get("Cookie") ?? "").map(
        ({ name, value }) => ({ name, value: value ?? "" }),
      );
    },
    setAll(cookiesToSet) {
      for (const { name, value, options } of cookiesToSet) {
        headers.append(
          "Set-Cookie",
          serializeCookieHeader(name, value, {
            ...cookieOptions,
            ...options,
          }),
        );
      }
    },
  };

  return createServerClient(url, anonKey, { cookies, cookieOptions });
}

// Throws a redirect to /anmelden (preserving the current path as return_to)
// if there's no authenticated user. Returns { user, supabase, headers } on
// success so the caller can keep querying with the same client and forward
// any refreshed cookies on the response.
export async function requireUser(request: Request) {
  const headers = new Headers();
  const supabase = getServerClient(request, headers);
  if (!supabase) throw redirect("/anmelden", { headers });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const url = new URL(request.url);
    const returnTo = url.pathname + url.search;
    throw redirect(
      `/anmelden?return_to=${encodeURIComponent(returnTo)}`,
      { headers },
    );
  }

  return { user, supabase, headers };
}

// Same as requireUser, plus a check that the user has a row in
// app_memberships for the given app_key. This is the security boundary for
// the /mein-bereich route — the client-side check in AuthProvider is UX only.
export async function requireMembership(request: Request, appKey: string) {
  const ctx = await requireUser(request);
  const { data, error } = await ctx.supabase
    .from("app_memberships")
    .select("app_key")
    .eq("user_id", ctx.user.id)
    .eq("app_key", appKey)
    .maybeSingle();

  if (error || !data) {
    throw redirect("/anmelden?error=no_access", { headers: ctx.headers });
  }

  return ctx;
}

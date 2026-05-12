/*
 * Auth hook — thin React wrapper around Supabase auth state.
 *
 * What: Subscribes to `supabase.auth.onAuthStateChange` and exposes
 *   { user, status } so any component can react to sign-in / sign-out.
 *   Status flows: "loading" → "authenticated" | "anonymous".
 *
 * Why: Components shouldn't each set up their own listener. One module
 *   owns the subscription and re-renders consumers via React state.
 *
 * SSR note: Supabase v2 reads localStorage on construction, so during SSR
 *   `user` is always null and `status` is "loading". Components must
 *   render a stable "signed-out" shell until the client hydrates.
 */
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "~/lib/supabase";

export type AuthStatus = "loading" | "authenticated" | "anonymous";

export function useAuth(): { user: User | null; status: AuthStatus } {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    if (!supabase) {
      setStatus("anonymous");
      return;
    }

    let cancelled = false;

    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return;
      setUser(data.session?.user ?? null);
      setStatus(data.session?.user ? "authenticated" : "anonymous");
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setStatus(session?.user ? "authenticated" : "anonymous");
    });

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { user, status };
}

export async function signOut(): Promise<void> {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export function displayName(user: User | null): string {
  if (!user) return "";
  const meta = user.user_metadata ?? {};
  const first = (meta.first_name as string | undefined)?.trim();
  if (first) return first;
  const full = (meta.full_name as string | undefined)?.trim();
  if (full) return full.split(" ")[0];
  return user.email ?? "";
}

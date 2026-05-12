/*
 * Auth context — mirrors the feedback-app contract.
 *
 * A user is `authed` only if they have a row in `app_memberships` with
 * `app_key = 'sanimotion_kunden'`. Any signed-in user without that row is
 * `no-access` (e.g. signed up via a different app, or pre-existed before
 * the membership trigger ran).
 *
 * `supabase` is nullable on this site (SSR / missing env) — when it's null
 * the provider settles on `unauthed` so route gating still works.
 */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "~/lib/supabase";

export type AuthStatus = "loading" | "unauthed" | "no-access" | "authed";

interface AuthState {
  status: AuthStatus;
  session: Session | null;
  user: User | null;
}

const AuthContext = createContext<AuthState>({
  status: "loading",
  session: null,
  user: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  useEffect(() => {
    if (!supabase) {
      setStatus("unauthed");
      return;
    }
    let cancelled = false;

    supabase.auth.getSession().then(({ data }) => {
      if (cancelled) return;
      setSession(data.session);
      void resolveStatus(data.session);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      void resolveStatus(newSession);
    });

    async function resolveStatus(s: Session | null) {
      if (!s?.user) {
        if (!cancelled) setStatus("unauthed");
        return;
      }
      if (!supabase) return;
      const { data, error } = await supabase
        .from("app_memberships")
        .select("app_key")
        .eq("user_id", s.user.id)
        .eq("app_key", "sanimotion_kunden")
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) setStatus("no-access");
      else setStatus("authed");
    }

    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      status,
      session,
      user: session?.user ?? null,
    }),
    [status, session],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

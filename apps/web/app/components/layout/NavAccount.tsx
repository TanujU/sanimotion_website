/*
 * NavAccount — account control rendered next to the primary CTA.
 *
 * Signed out → "Anmelden" link to /anmelden.
 * Signed in  → user-icon button that opens a small menu with the user's
 *              email and a "Abmelden" action.
 *
 * During the auth-status "loading" window (Supabase still rehydrating
 * the session) we render the signed-out variant so the chrome doesn't
 * jump. This is the same trade-off RR7 makes for SSR hydration.
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { User as UserIcon, LogOut } from "lucide-react";
import { SmartLink } from "~/components/primitives/SmartLink";
import { cn } from "~/lib/cn";
import { useAuth, signOut, displayName } from "~/stores/auth";
import { getNavAccountStrings } from "~/content/pages/auth";
import { useLocale } from "~/i18n/locale";

export function NavAccount({ invert = false }: { invert?: boolean }) {
  const locale = useLocale();
  const strings = getNavAccountStrings(locale);
  const { user, status } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (status !== "authenticated" || !user) {
    const portalUrl = import.meta.env.VITE_PORTAL_URL as string | undefined;
    const loginHref = portalUrl ? `${portalUrl}/anmelden` : "/anmelden";
    const linkClass = cn(
      "rounded-pill inline-flex h-9 items-center gap-2 px-4 text-caption font-medium tracking-wide transition-colors",
      invert ? "text-canvas hover:bg-canvas/10" : "text-ink hover:bg-muted",
    );

    // When the portal is on another origin, open in a new tab.
    if (portalUrl) {
      return (
        <a
          href={loginHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={strings.signedOutLabel}
        >
          <UserIcon size={16} strokeWidth={1.75} aria-hidden />
          <span>{strings.signedOutLabel}</span>
        </a>
      );
    }

    return (
      <SmartLink href={loginHref} className={linkClass} aria-label={strings.signedOutLabel}>
        <UserIcon size={16} strokeWidth={1.75} aria-hidden />
        <span>{strings.signedOutLabel}</span>
      </SmartLink>
    );
  }

  const name = displayName(user);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "rounded-pill inline-flex h-9 max-w-[12rem] items-center gap-2 px-4 text-caption font-medium tracking-wide transition-colors",
          invert
            ? "text-canvas hover:bg-canvas/10"
            : "text-ink hover:bg-muted",
        )}
      >
        <UserIcon size={16} strokeWidth={1.75} aria-hidden />
        <span className="truncate">{strings.signedInLabel(name)}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="border-hairline bg-canvas rounded-card absolute right-0 z-50 mt-2 w-64 border p-2 shadow-lg"
        >
          <div className="px-3 py-2">
            <p className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
              {strings.myAccount}
            </p>
            <p className="text-body-md text-ink mt-1 truncate">
              {user.email}
            </p>
          </div>
          <div className="bg-hairline my-1 h-px" />
          <button
            type="button"
            role="menuitem"
            onClick={async () => {
              setOpen(false);
              await signOut();
            }}
            className="text-body-md text-ink hover:bg-muted flex w-full items-center gap-2 rounded-md px-3 py-2 text-left transition-colors"
          >
            <LogOut size={16} strokeWidth={1.75} aria-hidden />
            <span>{strings.signOut}</span>
          </button>
        </div>
      )}
    </div>
  );
}

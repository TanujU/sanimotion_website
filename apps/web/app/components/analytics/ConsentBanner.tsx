/*
 * ConsentBanner — GDPR cookie/analytics consent prompt.
 *
 * Renders a fixed bottom card with Accept / Decline. Visible only when
 * the consent status is "unset". Either choice persists via the
 * consent store and removes the banner.
 *
 * Client-only render guard (`mounted`) avoids the SSR/CSR flicker:
 * the server has no access to localStorage, so we hold render until
 * after hydration when the persisted status is known.
 */
import { useEffect, useState } from "react";
import { Button } from "~/components/primitives/Button";
import { useLocale } from "~/i18n/locale";
import { useConsentStore } from "~/lib/consent";

const copy = {
  de: {
    title: "Cookies & Analyse",
    body: "Wir nutzen Google Analytics, um die Nutzung dieser Website zu verstehen und sie zu verbessern. Sie können jederzeit zustimmen oder ablehnen.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    privacy: "Datenschutz",
  },
  en: {
    title: "Cookies & analytics",
    body: "We use Google Analytics to understand how this site is used and to improve it. You can accept or decline at any time.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy",
  },
} as const;

export function ConsentBanner() {
  const locale = useLocale();
  const status = useConsentStore((s) => s.status);
  const setStatus = useConsentStore((s) => s.setStatus);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || status !== "unset") return null;

  const t = copy[locale];

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="rounded-card bg-ink text-canvas fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl p-6 shadow-2xl md:inset-x-auto md:right-6 md:bottom-6 md:left-auto md:w-[28rem]"
    >
      <h2 className="text-body-lg font-semibold">{t.title}</h2>
      <p className="text-body-sm text-canvas/80 mt-2">
        {t.body}{" "}
        <a href="/datenschutz" className="underline underline-offset-2">
          {t.privacy}
        </a>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button
          size="sm"
          variant="primary"
          invert
          onClick={() => setStatus("granted")}
        >
          {t.accept}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          invert
          onClick={() => setStatus("denied")}
        >
          {t.decline}
        </Button>
      </div>
    </div>
  );
}

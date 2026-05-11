/*
 * LocaleSwitcher — minimal DE / EN toggle.
 *
 * Two text buttons with a hairline separator. Active locale renders in
 * full ink, inactive in muted ink. Updates the locale store, which is
 * persisted to localStorage and re-renders consumers via useLocale().
 */
"use client";
import { LOCALES, useLocaleStore, type Locale } from "~/i18n/locale";
import { getStrings } from "~/i18n/strings";
import { cn } from "~/lib/cn";

const labelOf: Record<Locale, string> = {
  de: "DE",
  en: "EN",
};

type Variant = "default" | "muted";

type LocaleSwitcherProps = {
  className?: string;
  variant?: Variant;
};

export function LocaleSwitcher({
  className,
  variant = "default",
}: LocaleSwitcherProps) {
  const current = useLocaleStore((s) => s.locale);
  const setLocale = useLocaleStore((s) => s.setLocale);
  const strings = getStrings(current);

  return (
    <div
      role="group"
      aria-label={strings.selectLanguage}
      className={cn(
        "text-caption inline-flex items-center gap-2 font-mono tracking-widest uppercase",
        variant === "muted" ? "text-ink-subtle" : "text-ink-muted",
        className,
      )}
    >
      {LOCALES.map((locale, i) => (
        <span key={locale} className="inline-flex items-center gap-2">
          {i > 0 && (
            <span aria-hidden className="text-ink-subtle/60">
              ·
            </span>
          )}
          <button
            type="button"
            aria-pressed={current === locale}
            aria-label={labelOf[locale]}
            onClick={() => setLocale(locale)}
            className={cn(
              "duration-fast hover:text-ink rounded-sm px-1 transition-colors",
              current === locale && "text-ink",
            )}
          >
            {labelOf[locale]}
          </button>
        </span>
      ))}
    </div>
  );
}

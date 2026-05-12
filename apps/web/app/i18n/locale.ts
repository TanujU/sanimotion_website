/*
 * Locale store — DE (default) and EN.
 *
 * Persisted in localStorage so the user's choice survives reloads. SSR
 * always renders DE; on hydration the store reads localStorage and the
 * UI re-renders if the user previously picked EN. This brief flicker is
 * acceptable for a v1 marketing site — switching to URL-prefixed locales
 * (/en/...) is the next upgrade.
 */
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const LOCALES = ["de", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "de";

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: DEFAULT_LOCALE,
      setLocale: (locale) => set({ locale }),
    }),
    { name: "sanimotion-locale" },
  ),
);

/* Convenience selector hook — components only need the current locale. */
export const useLocale = (): Locale => useLocaleStore((s) => s.locale);

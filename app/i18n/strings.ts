/*
 * Small UI strings dictionary — labels that aren't part of long-form
 * content modules. For aria labels, micro-copy (e.g. "Menü öffnen"),
 * skip links, switcher labels.
 *
 * Long-form page copy lives in app/content/<page>.ts and is keyed by
 * locale at the source.
 */
import type { Locale } from "./locale";

type Strings = {
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  primaryNav: string;
  primaryNavMobile: string;
  brandHome: string; // "<Brand> — Home"
  language: string;
  selectLanguage: string;
  footer: string;
  backToTop: string;
  cookieSettings: string;
};

const dictionaries: Record<Locale, Strings> = {
  de: {
    skipToContent: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    primaryNav: "Hauptnavigation",
    primaryNavMobile: "Hauptnavigation (mobil)",
    brandHome: "Startseite",
    language: "Sprache",
    selectLanguage: "Sprache wählen",
    footer: "Footer",
    backToTop: "Nach oben",
    cookieSettings: "Cookie-Einstellungen",
  },
  en: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    primaryNav: "Primary navigation",
    primaryNavMobile: "Primary navigation (mobile)",
    brandHome: "Home",
    language: "Language",
    selectLanguage: "Select language",
    footer: "Footer",
    backToTop: "Back to top",
    cookieSettings: "Cookie settings",
  },
};

export const getStrings = (locale: Locale): Strings => dictionaries[locale];

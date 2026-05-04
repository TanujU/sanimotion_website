/*
 * Site-wide content — brand, navigation, primary CTA, footer.
 *
 * What: A single typed object validated against siteSchema. Consumed by
 * the Navbar, MobileMenu, and Footer so all chrome stays in sync. Sourced
 * from sanimotion.com's public homepage on 2026-04-30.
 *
 * Why: Keeping nav and footer copy in one place prevents drift and is the
 * natural shape for a future CMS to mirror.
 *
 * Voice: German, formal "Sie" — per Locked Decision D1.
 */
import { siteSchema, type SiteContent } from "~/schemas/content";

const data: SiteContent = {
  brand: {
    name: "Sanimotion",
    tagline: "Alles für Ihre Gesundheit.",
  },
  // Top navigation — mirrors the structure on sanimotion.com.
  // Onlineshop omitted from primary chrome since it's a separate property
  // (would be an external link); we expose it in the footer instead.
  nav: [
    { label: "Standorte", href: "/standorte" },
    { label: "Produkte", href: "/produkte" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Jobs", href: "/jobs" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  primaryCta: {
    label: "Termin buchen",
    href: "/kontakt",
    ariaLabel: "Termin in einem Sanimotion-Sanitätshaus buchen",
  },
  secondaryCta: {
    label: "Rezept einlösen",
    href: "/kontakt#rezept",
    ariaLabel: "Rezept online einlösen",
  },
  footer: {
    columns: [
      {
        title: "Menü",
        links: [
          { label: "Standorte", href: "/standorte" },
          { label: "Produkte", href: "/produkte" },
          { label: "Onlineshop", href: "/onlineshop" },
          { label: "FAQ", href: "/faq" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "Jobs", href: "/jobs" },
          { label: "Kontakt", href: "/kontakt" },
        ],
      },
      {
        title: "Produkte",
        links: [
          {
            label: "Orthopädische Einlagen",
            href: "/produkte#einlagen",
          },
          {
            label: "Orthopädische Schuhe",
            href: "/produkte#schuhe",
          },
          {
            label: "Kompressionsstrümpfe",
            href: "/produkte#kompression",
          },
          { label: "Orthesen", href: "/produkte#orthesen" },
          { label: "Prothesen", href: "/produkte#prothesen" },
          {
            label: "Medizinische Bandagen",
            href: "/produkte#bandagen",
          },
        ],
      },
      {
        title: "Standorte",
        links: [
          { label: "Kreuzberg", href: "/standorte#kreuzberg" },
          { label: "Spandau", href: "/standorte#spandau" },
          { label: "Zehlendorf", href: "/standorte#zehlendorf" },
          {
            label: "Königs Wusterhausen",
            href: "/standorte#koenigs-wusterhausen",
          },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" },
        ],
      },
    ],
    legal: "© 2026 Sanimotion · Sanitätshaus Berlin",
  },
};

// Parse at module load — invalid content fails the build.
export const site = siteSchema.parse(data);

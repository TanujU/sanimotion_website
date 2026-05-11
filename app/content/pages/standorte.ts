/*
 * Locations page content — DE + EN.
 *
 * Four physical Sanimotion stores. Addresses, phone numbers, and the
 * per-store opening hours mirror the data on each store's dedicated
 * page (see `sanitatshaus.ts`). Each location also carries a Doctolib
 * booking URL for the "Termin buchen" CTA on the card.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";
import { ctaSchema } from "~/schemas/content";

export const locationSchema = z.object({
  slug: z.string(),
  name: z.string(),
  address: z.object({
    line1: z.string(),
    postalCode: z.string(),
    city: z.string(),
  }),
  phone: z.object({ label: z.string(), href: z.string() }),
  hours: z.array(z.object({ days: z.string(), time: z.string() })),
  // Highlights — short bullets that distinguish this store (e.g. "Werkstatt vor Ort").
  highlights: z.array(z.string()),
  // Map link (Google Maps search URL).
  mapHref: z.string(),
  // Public transport summary.
  transit: z.string(),
  // Doctolib booking URL for this store.
  bookingHref: z.string(),
});
export type LocationItem = z.infer<typeof locationSchema>;

export const standortePageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
  }),
  locations: z.array(locationSchema).length(4),
  // Header for the directions block under each card.
  labels: z.object({
    address: z.string(),
    phone: z.string(),
    hours: z.string(),
    highlights: z.string(),
    transit: z.string(),
    directions: z.string(),
    callCta: z.string(),
    bookCta: z.string(),
  }),
  closing: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    cta: ctaSchema,
  }),
});
export type StandortePageContent = z.infer<typeof standortePageSchema>;

const de: StandortePageContent = {
  meta: {
    title: "Standorte — Sanimotion",
    description:
      "Vier Sanimotion-Sanitätshäuser im Großraum Berlin: Kreuzberg, Spandau, Zehlendorf und Königs Wusterhausen. Adressen, Öffnungszeiten und Anfahrt.",
  },
  hero: {
    eyebrow: "Standorte",
    titleLead: "Vier Häuser.",
    titleTail: "Eine Versorgung.",
    lede: "Persönliche Beratung in unseren Berliner Sanitätshäusern — von Kreuzberg bis Königs Wusterhausen. Kommen Sie vorbei oder lassen Sie sich bei sich zu Hause beraten.",
  },
  locations: [
    {
      slug: "kreuzberg",
      name: "Kreuzberg",
      address: {
        line1: "Blücherstraße 22",
        postalCode: "10961",
        city: "Berlin-Kreuzberg",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mo. – Do.", time: "08:00 – 17:00 Uhr" },
        { days: "Fr.", time: "08:00 – 15:00 Uhr" },
      ],
      highlights: [
        "Zentrale & Werkstatt vor Ort",
        "Maßanfertigung Schuhe und Einlagen",
        "Persönliche Beratung mit Termin",
      ],
      mapHref:
        "https://www.google.com/maps/search/Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin",
      transit: "U6/U7 Mehringdamm · 5 Min. zu Fuß",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "spandau",
      name: "Spandau",
      address: {
        line1: "Adamstraße 3",
        postalCode: "13595",
        city: "Berlin-Spandau",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mo. – Do.", time: "09:00 – 16:00 Uhr" },
        { days: "Fr.", time: "09:00 – 15:00 Uhr" },
      ],
      highlights: [
        "Anpassung Kompressionsstrümpfe",
        "Reha-Technik & Mobilitätshilfen",
        "Hausbesuche im Berliner Westen",
      ],
      mapHref:
        "https://www.google.com/maps/search/Adamstra%C3%9Fe+3,+13595+Berlin",
      transit: "U7 Altstadt Spandau · 3 Min. zu Fuß",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "zehlendorf",
      name: "Zehlendorf",
      address: {
        line1: "Martin-Buber-Str. 12",
        postalCode: "14163",
        city: "Berlin-Zehlendorf",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mo. – Do.", time: "09:00 – 18:00 Uhr" },
        { days: "Fr.", time: "09:00 – 15:00 Uhr" },
      ],
      highlights: [
        "Bandagen & Orthesen",
        "Persönliche Beratung mit Termin",
        "Hausbesuche im Berliner Süden",
      ],
      mapHref:
        "https://www.google.com/maps/search/Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin",
      transit: "S1 Zehlendorf · 6 Min. zu Fuß",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "koenigs-wusterhausen",
      name: "Königs Wusterhausen",
      address: {
        line1: "Karl-Marx-Straße 3",
        postalCode: "15711",
        city: "Königs Wusterhausen",
      },
      phone: { label: "03375 9237540", href: "tel:+4933759237540" },
      hours: [
        { days: "Mo. – Di.", time: "08:30 – 13:30 · 14:00 – 18:00 Uhr" },
        { days: "Mi. – Do.", time: "08:30 – 13:30 · 14:00 – 17:00 Uhr" },
        { days: "Fr.", time: "08:30 – 14:30 Uhr" },
      ],
      highlights: [
        "Brandenburger Standort",
        "Komplettsortiment Sanitätshaus",
        "Hausbesuche im Süden Berlins / Dahme-Spreewald",
      ],
      mapHref:
        "https://www.google.com/maps/search/Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen",
      transit: "RE2/RE7/S46 Königs Wusterhausen · 4 Min. zu Fuß",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
  ],
  labels: {
    address: "Adresse",
    phone: "Telefon",
    hours: "Öffnungszeiten",
    highlights: "Vor Ort",
    transit: "Anfahrt",
    directions: "Auf Karte ansehen",
    callCta: "Anrufen",
    bookCta: "Termin buchen",
  },
  closing: {
    eyebrow: "Hausbesuch",
    title: "Wir kommen auch zu Ihnen.",
    body: "Wenn der Weg ins Sanitätshaus zu beschwerlich ist, beraten wir Sie bei Ihnen zu Hause — kostenfrei und in ganz Berlin.",
    cta: { label: "Hausbesuch anfragen", href: "/kontakt#hausbesuch" },
  },
};

const en: StandortePageContent = {
  meta: {
    title: "Locations — Sanimotion",
    description:
      "Four Sanimotion medical supply stores across greater Berlin: Kreuzberg, Spandau, Zehlendorf and Königs Wusterhausen. Addresses, opening hours, directions.",
  },
  hero: {
    eyebrow: "Locations",
    titleLead: "Four stores.",
    titleTail: "One care.",
    lede: "Personal consultation across our Berlin stores — from Kreuzberg to Königs Wusterhausen. Drop in or have us come to you.",
  },
  locations: [
    {
      slug: "kreuzberg",
      name: "Kreuzberg",
      address: {
        line1: "Blücherstraße 22",
        postalCode: "10961",
        city: "Berlin-Kreuzberg",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mon – Thu", time: "8:00 – 17:00" },
        { days: "Fri", time: "8:00 – 15:00" },
      ],
      highlights: [
        "Headquarters & in-house workshop",
        "Custom-made shoes and insoles",
        "Personal consultation by appointment",
      ],
      mapHref:
        "https://www.google.com/maps/search/Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin",
      transit: "U6/U7 Mehringdamm · 5 min walk",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "spandau",
      name: "Spandau",
      address: {
        line1: "Adamstraße 3",
        postalCode: "13595",
        city: "Berlin-Spandau",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mon – Thu", time: "9:00 – 16:00" },
        { days: "Fri", time: "9:00 – 15:00" },
      ],
      highlights: [
        "Compression stocking fitting",
        "Rehab equipment & mobility aids",
        "Home visits in west Berlin",
      ],
      mapHref:
        "https://www.google.com/maps/search/Adamstra%C3%9Fe+3,+13595+Berlin",
      transit: "U7 Altstadt Spandau · 3 min walk",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "zehlendorf",
      name: "Zehlendorf",
      address: {
        line1: "Martin-Buber-Str. 12",
        postalCode: "14163",
        city: "Berlin-Zehlendorf",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      hours: [
        { days: "Mon – Thu", time: "9:00 – 18:00" },
        { days: "Fri", time: "9:00 – 15:00" },
      ],
      highlights: [
        "Bandages & orthoses",
        "Personal consultation by appointment",
        "Home visits in south Berlin",
      ],
      mapHref:
        "https://www.google.com/maps/search/Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin",
      transit: "S1 Zehlendorf · 6 min walk",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    {
      slug: "koenigs-wusterhausen",
      name: "Königs Wusterhausen",
      address: {
        line1: "Karl-Marx-Straße 3",
        postalCode: "15711",
        city: "Königs Wusterhausen",
      },
      phone: { label: "03375 9237540", href: "tel:+4933759237540" },
      hours: [
        { days: "Mon – Tue", time: "8:30 – 13:30 · 14:00 – 18:00" },
        { days: "Wed – Thu", time: "8:30 – 13:30 · 14:00 – 17:00" },
        { days: "Fri", time: "8:30 – 14:30" },
      ],
      highlights: [
        "Brandenburg location",
        "Full medical supply assortment",
        "Home visits across south Berlin / Dahme-Spreewald",
      ],
      mapHref:
        "https://www.google.com/maps/search/Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen",
      transit: "RE2/RE7/S46 Königs Wusterhausen · 4 min walk",
      bookingHref:
        "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
  ],
  labels: {
    address: "Address",
    phone: "Phone",
    hours: "Opening hours",
    highlights: "On site",
    transit: "Getting there",
    directions: "View on map",
    callCta: "Call",
    bookCta: "Book appointment",
  },
  closing: {
    eyebrow: "Home visit",
    title: "We come to you, too.",
    body: "If a trip to the store is too much, we'll advise you at home — free of charge, anywhere in Berlin.",
    cta: { label: "Request a home visit", href: "/kontakt#hausbesuch" },
  },
};

const pages: Record<Locale, StandortePageContent> = {
  de: standortePageSchema.parse(de),
  en: standortePageSchema.parse(en),
};

export const getStandorteContent = (locale: Locale): StandortePageContent =>
  pages[locale];

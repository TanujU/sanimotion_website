/*
 * About page content — DE + EN.
 *
 * Tells the Sanimotion story in three beats: who we are, what we
 * believe, what we make in-house. Closes with the metrics grid +
 * a call to visit.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";
import { ctaSchema } from "~/schemas/content";

export const ueberUnsPageSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
  }),
  story: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(2),
  }),
  values: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          body: z.string(),
        }),
      )
      .min(3),
  }),
  workshop: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    bullets: z.array(z.string()).min(3),
  }),
  metrics: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    }),
  ),
  closing: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
  }),
});
export type UeberUnsPageContent = z.infer<typeof ueberUnsPageSchema>;

const de: UeberUnsPageContent = {
  meta: {
    title: "Über uns — Sanimotion",
    description:
      "Sanimotion ist ein Berliner Sanitätshaus mit über 30 Jahren Erfahrung — eigene Werkstatt, persönliche Beratung, vier Standorte.",
  },
  hero: {
    eyebrow: "Über uns",
    titleLead: "Sanimotion",
    titleTail: "Sanitätshaus Berlin.",
    lede: "Gesundheit steht über allem, doch leider haben nicht alle Menschen das Glück, in ihrem Leben von Krankheiten, Unfällen und körperlichen Beschwerden verschont zu bleiben.",
  },
  story: {
    eyebrow: "Unsere Geschichte",
    title: "Seit über 30 Jahren für Sie da.",
    paragraphs: [
      "Mit unseren Services und Produkten möchten wir Ihre gesundheitlichen Probleme lindern, Ihre Mobilität verbessern und Sie darüber hinaus auf Ihrem Weg zur Genesung unterstützen. Seit über 30 Jahren sind wir im Gesundheitsbereich tätig. Wir haben als Orthopädie-Schuhmacher und Orthopädie-Techniker angefangen und betreiben mittlerweile eine Sanitätshaus-Kette.",
      "Wir verbinden traditionelle Handwerkskunst mit aktuellen Trends, modernster Technik und orthopädischem Know-how. Die Mitarbeiter in unseren Berliner Sanitätsfachgeschäften verfügen neben einer großen Fachkompetenz über jahrelange Erfahrung. Das ist die Basis unserer fachkundigen Beratung und unseren ausgezeichneten Service, von dem Sie sich in unseren Fachgeschäften gerne persönlich ein Bild machen können. Für orthopädische Maßanfertigungen bieten wir rund um Berlin auch Hausbesuche an, um nötige Vermessungen vorzunehmen. Danke für Ihr Vertrauen.",
    ],
  },
  values: {
    eyebrow: "Was uns wichtig ist",
    title: "Drei Überzeugungen.",
    items: [
      {
        icon: "Heart",
        title: "Mensch zuerst",
        body: "Jede Versorgung beginnt mit einem Gespräch. Erst verstehen, dann anfertigen.",
      },
      {
        icon: "Hammer",
        title: "Handwerk vor Ort",
        body: "Eigene Berliner Werkstatt — kurze Wege zwischen Diagnose, Anpassung und Korrektur.",
      },
      {
        icon: "Sparkles",
        title: "Qualität sichtbar",
        body: "Wir arbeiten mit den führenden Herstellern und prüfen jede Versorgung am Patienten.",
      },
    ],
  },
  workshop: {
    eyebrow: "Eigene Werkstatt",
    title: "Was bei uns entsteht.",
    body: "Unsere Werkstatt in Kreuzberg ist das Herz des Hauses. Hier nehmen wir Maß, fertigen, korrigieren und übergeben — alles unter einem Dach.",
    bullets: [
      "Maßschuhe und Schuhzurichtungen",
      "Einlagen aus eigener Fertigung",
      "Orthesen, Prothesen und Korsettversorgungen",
      "Anpassung und Reparatur — kurzfristig",
    ],
  },
  metrics: [
    { value: "30+", label: "Jahre Erfahrung" },
    { value: "4", label: "Standorte in Berlin" },
    { value: "750+", label: "Produkte im Online-Shop" },
  ],
  closing: {
    eyebrow: "Lernen Sie uns kennen",
    title: "Kommen Sie vorbei.",
    body: "Ein Gespräch sagt mehr als ein Katalog. Wir freuen uns auf Sie — in einem unserer Sanitätshäuser oder bei Ihnen zu Hause.",
    primaryCta: {
      label: "Termin buchen",
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    secondaryCta: { label: "Standort finden", href: "/standorte" },
  },
};

const en: UeberUnsPageContent = {
  meta: {
    title: "About — Sanimotion",
    description:
      "Sanimotion is a Berlin medical supply store with 30+ years of experience — in-house workshop, personal advice, four locations.",
  },
  hero: {
    eyebrow: "About us",
    titleLead: "Sanimotion",
    titleTail: "Berlin medical supply.",
    lede: "Health comes above all else — yet not everyone is fortunate enough to be spared from illness, accidents and physical complaints in their lives.",
  },
  story: {
    eyebrow: "Our story",
    title: "Caring for you for over 30 years.",
    paragraphs: [
      "With our services and products, we aim to ease your health concerns, improve your mobility and support you on the path to recovery. We have been active in the healthcare sector for more than 30 years. We started as orthopedic shoemakers and orthopedic technicians and today operate a chain of medical supply stores.",
      "We combine traditional craftsmanship with current trends, the latest technology and deep orthopedic know-how. The staff in our Berlin medical supply stores combine extensive professional expertise with many years of experience. That is the foundation of our expert consultation and outstanding service, which we'd be delighted for you to experience in person at one of our stores. For custom orthopedic fittings, we also offer home visits in and around Berlin to take the necessary measurements. Thank you for your trust.",
    ],
  },
  values: {
    eyebrow: "What we believe",
    title: "Three convictions.",
    items: [
      {
        icon: "Heart",
        title: "People first",
        body: "Every fitting begins with a conversation. Understand first, then build.",
      },
      {
        icon: "Hammer",
        title: "Craft on site",
        body: "Our own Berlin workshop — short paths between diagnosis, fitting and correction.",
      },
      {
        icon: "Sparkles",
        title: "Visible quality",
        body: "We work with leading manufacturers and verify every fit on the patient.",
      },
    ],
  },
  workshop: {
    eyebrow: "Our workshop",
    title: "What we make in-house.",
    body: "Our Kreuzberg workshop is the heart of the company. We measure, manufacture, correct and hand over — all under one roof.",
    bullets: [
      "Bespoke shoes and shoe modifications",
      "Insoles made on site",
      "Orthoses, prosthetics and corset solutions",
      "Adjustments and repairs — quickly",
    ],
  },
  metrics: [
    { value: "30+", label: "Years of experience" },
    { value: "4", label: "Berlin locations" },
    { value: "750+", label: "Products in the online shop" },
  ],
  closing: {
    eyebrow: "Get to know us",
    title: "Come in for a visit.",
    body: "A conversation says more than a catalog. We'd love to meet you — in one of our stores or at your home.",
    primaryCta: {
      label: "Book appointment",
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    secondaryCta: { label: "Find a location", href: "/standorte" },
  },
};

const pages: Record<Locale, UeberUnsPageContent> = {
  de: ueberUnsPageSchema.parse(de),
  en: ueberUnsPageSchema.parse(en),
};

export const getUeberUnsContent = (locale: Locale): UeberUnsPageContent =>
  pages[locale];

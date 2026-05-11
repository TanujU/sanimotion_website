/*
 * Prothesen — landing page content (DE + EN).
 *
 * Mirrors sanimotion.com/prothesen-berlin/: hero (split with photo) → types
 * grid (lower + upper extremities) → Prothetik intro → service highlights →
 * Vor-Ort-Beratung & Außendienst → contact. Copy is sourced verbatim from
 * the reference page.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const prothesenPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
    intro: z.string(),
    typesIntro: z.string(),
    typesLower: z.array(z.string()).min(1),
    typesUpper: z.array(z.string()).min(1),
    typesLowerLabel: z.string(),
    typesUpperLabel: z.string(),
  }),
  prothetik: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  beratung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type ProthesenPageContent = z.infer<typeof prothesenPageSchema>;

const de: ProthesenPageContent = {
  meta: {
    title: "Prothesen Berlin | Sanimotion Sanitätshaus",
    description:
      "Prothesen vom Sanimotion Sanitätshaus Berlin – maßgefertigte Voll- und Teilprothesen für alle unteren und oberen Extremitäten. Beratung und Versorgung mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Prothesen",
    titleLead: "Prothesen in Berlin",
    titleTail: "Sanimotion Sanitätshaus",
    lede: "Beratung und Versorgung mit Expertise und Feingefühl",
    intro:
      "Wir haben uns zum Ziel gesetzt, Menschen mit körperlichen Einschränkungen ein Höchstmaß an Mobilität und Unabhängigkeit zu ermöglichen und dadurch ihre Lebensqualität und Lebensfreude zu erhöhen. In unserer Berliner Orthopädie-Werkstatt stellen erfahrene Prothesenbauer maßgefertigte Voll- und Teilprothesen für alle unteren und oberen Extremitäten für Sie her.",
    typesIntro: "Unser Angebot der Prothesenversorgung umfasst unter anderem:",
    typesLowerLabel: "Untere Extremitäten",
    typesUpperLabel: "Obere Extremitäten",
    typesLower: [
      "Fußprothese",
      "Unterschenkelprothese",
      "Oberschenkelprothese",
      "Beinprothese",
      "Brustprothese",
      "Badeprothese",
    ],
    typesUpper: [
      "Fingerprothese",
      "Handprothese",
      "Unterarmprothese",
      "Oberarmprothese",
      "Sportprothese",
      "Totalprothese",
    ],
  },
  prothetik: {
    eyebrow: "Prothetik von Sanimotion",
    title:
      "Modernste Technik, langjähriger Erfahrung & handwerkliches Geschick",
    paragraphs: [
      "Neben der funktionellen Gestaltung ist auch die kosmetische Wiederherstellung nach Unfällen, Verletzungen, Fehlbildungen und Erkrankungen von großer Bedeutung. Unser Anspruch ist es, durch die Verbindung von modernster Technik, handwerklichem Geschick, langjähriger Erfahrung und einem Sinn für Ästhetik das beste Ergebnis für unsere Kunden zu erzielen.",
      "Gerne fertigen wir auch Ihnen Prothesen mit individuellen Schaftsystemen und modernsten, speziell für Sie ausgewählten Passteilen an, um die natürliche Funktionalität nach einer Amputation so gut wie möglich wiederherzustellen.",
      "Die Kosten für die Prothesenversorgung werden in der Regel von Ihrer Krankenkasse übernommen.",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was Sie bei uns erwartet.",
    items: [
      { icon: "Award", label: "Ausgezeichneter Service" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Activity", label: "Ganganalyse" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  beratung: {
    eyebrow: "Vor-Ort-Beratung & Außendienst",
    title: "Maßanfertigung für höchste Passgenauigkeit",
    paragraphs: [
      "Da Prothesen besonders gut und geschmeidig passen sollten, ist eine Maßanfertigung von größter Bedeutung. Nur so lassen sich eine optimale Passgenauigkeit und ein hoher Tragekomfort gewährleisten.",
      "Hierzu beraten wir Sie gerne persönlich in einem unserer Berliner Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg und Tempelhof sowie in Königs Wusterhausen. Alternativ kommen wir mit unserem Außendienst auch gerne zu Ihnen nach Hause. Vereinbaren Sie dafür bitte einen Termin.",
      "Wenn es um eine Anfertigung von Brustprothetik geht, kümmert sich natürlich eine unserer weiblichen Orthopädietechnikerinnen um Sie.",
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Interesse an einem Beratungsgespräch, benötigen Sie eine Prothese oder haben Sie Fragen zur Prothesenfertigung, Orthopädietechnik oder Prothesenreinigung? Gerne beraten unsere Experten Sie persönlich – in unseren Sanimotion Sanitätshaus Berlin oder bei einem Hausbesuch bei Ihnen.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: ProthesenPageContent = {
  meta: {
    title: "Prosthetics in Berlin | Sanimotion Sanitätshaus",
    description:
      "Prosthetics from Sanimotion Sanitätshaus Berlin — custom-made full and partial prostheses for all lower and upper extremities. Advice and provision with expertise and sensitivity.",
  },
  hero: {
    eyebrow: "Prosthetics",
    titleLead: "Prosthetics in Berlin",
    titleTail: "Sanimotion Sanitätshaus",
    lede: "Advice and provision with expertise and sensitivity",
    intro:
      "Our mission is to enable people with physical limitations to achieve the greatest possible mobility and independence, thereby increasing their quality of life and joy of living. In our Berlin orthopedic workshop, experienced prosthetics technicians produce custom-made full and partial prostheses for all lower and upper extremities.",
    typesIntro: "Our prosthetic care offering includes, among others:",
    typesLowerLabel: "Lower extremities",
    typesUpperLabel: "Upper extremities",
    typesLower: [
      "Foot prosthesis",
      "Lower-leg prosthesis",
      "Upper-leg prosthesis",
      "Leg prosthesis",
      "Breast prosthesis",
      "Bath prosthesis",
    ],
    typesUpper: [
      "Finger prosthesis",
      "Hand prosthesis",
      "Forearm prosthesis",
      "Upper-arm prosthesis",
      "Sport prosthesis",
      "Total prosthesis",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetics by Sanimotion",
    title:
      "Cutting-edge technology, years of experience & craftsmanship",
    paragraphs: [
      "In addition to functional design, cosmetic restoration after accidents, injuries, malformations and illnesses is also of great importance. Our aim is to achieve the best possible result for our customers by combining state-of-the-art technology, craftsmanship, long-standing experience and a sense of aesthetics.",
      "We are happy to produce prostheses for you with individual socket systems and the most modern components, specially selected for you, to restore the natural functionality after an amputation as well as possible.",
      "The costs of prosthetic care are usually covered by your health insurance.",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What you can expect from us.",
    items: [
      { icon: "Award", label: "Outstanding service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Activity", label: "Gait analysis" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  beratung: {
    eyebrow: "On-site consultation & field service",
    title: "Custom-made for the best fit",
    paragraphs: [
      "Because prostheses should fit particularly well and smoothly, custom-made manufacturing is of utmost importance. Only this way can optimal fit and high wearing comfort be guaranteed.",
      "We are happy to advise you in person at one of our Berlin stores in Zehlendorf, Spandau, Kreuzberg and Tempelhof as well as in Königs Wusterhausen. Alternatively, our field team is happy to come to your home. Please arrange an appointment in advance.",
      "When it comes to producing a breast prosthesis, one of our female orthopedic technicians will of course take care of you.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Are you interested in a consultation, do you need a prosthesis, or do you have questions about prosthesis manufacturing, orthopedic technology or prosthesis cleaning? Our experts are happy to advise you in person — at our Sanimotion stores in Berlin or during a home visit.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, ProthesenPageContent> = {
  de: prothesenPageSchema.parse(de),
  en: prothesenPageSchema.parse(en),
};

export const getProthesenContent = (locale: Locale): ProthesenPageContent =>
  pages[locale];

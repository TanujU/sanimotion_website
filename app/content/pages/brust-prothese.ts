/*
 * Brust-Prothese — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/brust-prothese-berlin/: hero
 * (split with photo) → Brustprothetik im Sanimotion Sanitätshaus →
 * Top-Service / Vor-Ort-Beratung → service highlights → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const brustProthesePageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
    intro: z.array(z.string()).min(1),
  }),
  prothetik: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  beratung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type BrustProthesePageContent = z.infer<typeof brustProthesePageSchema>;

const de: BrustProthesePageContent = {
  meta: {
    title: "Brustprothesen in Berlin | Sanimotion Sanitätshaus",
    description:
      "Hochwertige Brustprothesen aus Silikon im Sanimotion Sanitätshaus Berlin – ästhetische Versorgung für mehr Selbstbewusstsein und Lebensqualität, mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Brust-Prothese",
    titleLead: "Brustprothesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Ästhetische Brustprothetik für mehr Selbstbewusstsein und Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Unsere hochwertigen Brustprothesen aus Silikon ermöglichen Ihnen nach einer Brustoperation ein neues Körperempfinden. Unsere Epithesen vereinen höchste Funktionalität mit ästhetischem Design, um Ihnen Sicherheit und Selbstbewusstsein im Alltag zurückzugeben.",
      "Bei der Versorgung mit Brustprothesen von renommierten Herstellern wie z. B. Amoena orientieren wir uns genau an Ihrer körperlichen Situation und an Ihren persönlichen Anforderungen, damit Sie sich mit der Brustprothese möglichst wohlfühlen.",
    ],
  },
  prothetik: {
    eyebrow: "Brustprothetik im Sanimotion Sanitätshaus",
    title: "Erstklassige Brustprothesen mit hohem Tragekomfort",
    paragraphs: [
      "Brustkrebs ist die häufigste Krebsart bei Frauen in Deutschland. Im Zuge der Behandlung erfolgt sehr oft eine Brust-OP, wobei größere oder kleinere Gewebeteile der betroffenen Brust entnommen werden, oft sogar die ganze Brust. Infolgedessen ergibt sich meist ein asymmetrisches Körperbild. Die moderne Brustprothetik kann für eine schöne und ausgeglichene Silhouette sorgen.",
      "Unser Angebot umfasst Vollprothesen, Teilprothesen, Übergangsprothesen, Schwimmprothesen, BHs und mehr, um den Bedürfnissen jeder Frau gerecht zu werden. Sie haben die Wahl aus einer Vielzahl von Formen und Größen, um Ihren persönlichen Brustausgleich zu erreichen und sich in jeder Situation wohlzufühlen.",
      "Wir legen großen Wert auf präzise Passform und hautfreundliche Materialien, um höchsten Tragekomfort zu gewährleisten. Unsere Brustprothesen sind aus hochwertigem Silikon gefertigt, das sich der Körpertemperatur anpasst und eine natürliche Haptik bietet. Entdecken Sie die Vielfalt unserer Produkte und lassen Sie sich von unserem geschulten Personal beraten.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von der Beratung bis zur Versorgung",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Unsere erfahrenen weiblichen Fachkräfte stehen Ihnen mit kompetenter Beratung und einfühlsamer Unterstützung zur Seite. Wir nehmen uns Zeit für Ihre individuellen Bedürfnisse und helfen Ihnen dabei, die passende Prothese zu finden.",
      "Besuchen Sie uns in einem unserer Berliner Sanimotion Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg oder Tempelhof sowie in Königs Wusterhausen. Gerne kommt unser Außendienst auch zu Ihnen nach Hause. Vereinbaren Sie einfach einen Hausbesuch.",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was uns auszeichnet",
    items: [
      { icon: "Award", label: "Service mit Qualität" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Activity", label: "Ganganalyse" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  contact: {
    eyebrow: "Ihr Draht zum Sanimotion Sanitätshaus Berlin",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Kontaktieren Sie uns telefonisch oder per E-Mail, um einen Beratungstermin zu vereinbaren oder Fragen zu unseren Brustprothesen und weiteren Hilfsmitteln zu klären. Unser Team steht Ihnen gerne zur Verfügung und freut sich darauf, Ihnen zu mehr Selbstvertrauen und Lebensqualität zu verhelfen.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: BrustProthesePageContent = {
  meta: {
    title: "Breast prostheses in Berlin | Sanimotion Sanitätshaus",
    description:
      "High-quality silicone breast prostheses from Sanimotion Sanitätshaus Berlin — aesthetic care for renewed confidence and quality of life, delivered with expertise and great sensitivity.",
  },
  hero: {
    eyebrow: "Breast prosthesis",
    titleLead: "Breast prostheses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Aesthetic breast prosthetics for renewed confidence and quality of life — advice and care with expertise and great sensitivity.",
    intro: [
      "At Sanimotion Sanitätshaus we provide high-quality silicone breast prostheses after breast surgery. Our epitheses combine functional properties with an aesthetic design and help restore confidence and ease in everyday life.",
      "Working with leading manufacturers such as Amoena, we tailor every fitting to your individual physical situation and personal preferences — so the result really suits you.",
    ],
  },
  prothetik: {
    eyebrow: "Breast prosthetics at Sanimotion Sanitätshaus Berlin",
    title: "First-class breast prostheses with outstanding wearing comfort",
    paragraphs: [
      "Breast cancer is the most common cancer in women in Germany. Treatment often involves surgery in which parts of the tissue or the entire breast are removed, which can lead to an asymmetrical silhouette. Modern breast prosthetics restore a balanced and aesthetic appearance.",
      "Our range includes full prostheses, partial prostheses, transitional prostheses, swim prostheses and specially designed bras. You can choose from a wide variety of shapes and sizes for an individual fit. We focus on precise shaping and skin-friendly materials for all-day comfort.",
      "The prostheses are made from high-quality silicone that adapts to body temperature and feels naturally soft. The costs are generally covered by your health insurance.",
    ],
  },
  beratung: {
    eyebrow: "Top service — from advice to fitting",
    title: "On-site consultation and home visits across Berlin",
    paragraphs: [
      "Breast surgery is a deeply personal experience. Our specially trained female staff are by your side with expertise and great sensitivity. We take the time to listen and help you choose the prosthesis that feels right.",
      "Visit us in one of our Berlin stores in Zehlendorf, Spandau, Kreuzberg or Tempelhof, or arrange a home visit through our outreach team. We make the journey to the right care as comfortable as possible.",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What sets us apart",
    items: [
      { icon: "Award", label: "Quality service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Heart", label: "Empathetic care" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice and appointments",
    paragraphs: [
      "For questions about breast prosthetic care, appointments or a personal consultation, we're here for you at any time. Reach out by phone or email and book a visit to one of our stores or a home appointment through our outreach team.",
      "We look forward to helping you regain confidence and quality of life — with expertise and great sensitivity.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, BrustProthesePageContent> = {
  de: brustProthesePageSchema.parse(de),
  en: brustProthesePageSchema.parse(en),
};

export const getBrustProtheseContent = (
  locale: Locale,
): BrustProthesePageContent => pages[locale];

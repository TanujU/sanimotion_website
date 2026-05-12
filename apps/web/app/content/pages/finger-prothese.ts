/*
 * Finger-Prothese — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/finger-prothese-berlin/: hero
 * (split with photo) → Prothetik im Sanimotion Sanitätshaus → Dynamische
 * Fingerprothesen → Top-Service / Vor-Ort-Beratung → service highlights →
 * contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const fingerProthesePageSchema = z.object({
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
  dynamisch: z.object({
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
export type FingerProthesePageContent = z.infer<typeof fingerProthesePageSchema>;

const de: FingerProthesePageContent = {
  meta: {
    title: "Fingerprothesen in Berlin | Sanimotion Sanitätshaus",
    description:
      "Hochwertige Prothesen für eine natürliche Funktion & ästhetisches Design – Beratung und Versorgung mit Expertise & Feingefühl im Sanimotion Sanitätshaus Berlin.",
  },
  hero: {
    eyebrow: "Finger-Prothese",
    titleLead: "Fingerprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Hochwertige Prothesen für eine natürliche Funktion & ästhetisches Design // Beratung und Versorgung mit Expertise & Feingefühl",
    intro: [
      "Nach einer Amputation eines Fingers oder einer Hand bringen unsere Prothesen neue Beweglichkeit und Lebensqualität in Ihren Alltag. Unsere hochwertigen und maßgefertigten Fingerprothesen sind speziell auf die individuellen Bedürfnisse unserer Kunden zugeschnitten.",
      "Unsere erfahrenen Prothesenbauer fertigen erstklassige Finger- und Handprothesen an, nicht nur komfortabel und funktionell sind, sondern auch ästhetisch überzeugen. Dabei setzen wir auf modernste Technologien und hochwertige Materialien.",
    ],
  },
  prothetik: {
    eyebrow: "Prothetik im Sanimotion Sanitätshaus Berlin",
    title:
      "Prothesenherstellung mit Präzision, Sorgfalt und besten Materialien",
    paragraphs: [
      "In unserer Berliner Orthopädiewerkstatt fertigen unsere erfahrenen Prothesenbauer und Orthopädietechniker je nach Stumpflänge, Anforderungen und individuellen Bedürfnissen Fingerprothesen, die langlebig, belastbar und zuverlässig sind und damit höchsten Ansprüchen genügen.",
      "Während Prothesen aus Silikon eine naturgetreue und unauffällige Optik ermöglichen, bieten Modelle aus Metall mehr Möglichkeiten in Hinblick auf die Funktionalität. Gerne beraten wir Sie, welche Variante für Sie den größten Nutzen verspricht.",
    ],
  },
  dynamisch: {
    eyebrow: "Modernste Technik",
    title: "Dynamische Fingerprothesen",
    paragraphs: [
      "Mit modernster Technik wie z. B. dynamischen Fingerprothesen von Naked Prothetics, leichten Materialien und handwerklichem Geschick sorgen wir dafür, dass Ihre Fingerprothese nicht nur eine natürliche Handfunktion ermöglicht, sondern auch optimal passt und einen hohen Tragekomfort an der Hand bzw. am Arm bietet.",
      "Die Kosten für die Prothese werden in der Regel von Ihrer Krankenkasse übernommen.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von der Erstberatung bis zur Nachsorge",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Wenn Gliedmaßen aufgrund einer Krankheit oder eines Unfalls amputiert werden müssen, ist das im Leben eines jeden Menschen eine schwere und herausfordernde Situation. Deshalb versprechen wir Ihnen eine einfühlsame und verständliche Beratung. Darüber hinaus ist eine genaue Vermessung unerlässlich, um die optimale Passform und den bestmöglichen Tragekomfort einer Finger- oder Teilhandprothese zu gewährleisten.",
      "Besuchen Sie uns in einem unserer Berliner Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg, Tempelhof oder Königs Wusterhausen oder vereinbaren Sie einen Hausbesuch mit unserem Außendienst. Unser Team steht Ihnen mit Fachwissen und Einfühlungsvermögen zur Seite, um Ihnen mögliche Lösungen aufzuzeigen.",
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
    eyebrow: "Ihr Weg zu uns",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Für Fragen zur Prothesenversorgung, Terminvereinbarungen oder eine persönliche Beratung stehen wir Ihnen gerne zur Verfügung. Kontaktieren Sie uns telefonisch oder per E-Mail und vereinbaren Sie einen Termin in einem unserer Sanitätshäuser oder einen Hausbesuch durch unseren Außendienst. Wir freuen uns darauf, Ihnen zu mehr Bewegungsfreiheit und Lebensqualität zu verhelfen.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: FingerProthesePageContent = {
  meta: {
    title: "Finger prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Custom-made finger prostheses from Sanimotion Sanitätshaus Berlin — high-quality care with natural function and aesthetic design. Advice and fitting with expertise and great care.",
  },
  hero: {
    eyebrow: "Finger prosthesis",
    titleLead: "Finger prostheses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "High-quality prostheses for natural function and an aesthetic design — advice and care with expertise and great attention to detail.",
    intro: [
      "After the amputation of a finger or a hand, our prostheses bring renewed mobility and quality of life back into your everyday routine. Our custom-made finger prostheses are precisely tailored to your personal needs and produced in our Berlin workshop with the greatest care.",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetics at Sanimotion Sanitätshaus Berlin",
    title:
      "Prostheses crafted with precision, care and the finest materials",
    paragraphs: [
      "In our orthopedic workshop in Berlin, experienced prosthetists and orthopedic technicians build finger prostheses tailored to your stump length, individual requirements and desired wearing comfort — durable, robust and reliable in everyday use.",
      "We rely on high-quality materials, thoughtful socket systems and a production process that takes its time, because fit and function are what matter most. The result is care that really suits you and your life.",
    ],
  },
  dynamisch: {
    eyebrow: "Dynamic finger prostheses",
    title: "Modern technology for natural hand function",
    paragraphs: [
      "With state-of-the-art prosthetics — including the dynamic finger prostheses by Naked Prosthetics — we combine lightweight materials, precise craftsmanship and well-engineered mechanics. The result is care that noticeably improves grip strength, mobility and wearing comfort on the hand and arm.",
      "Whether for work, hobbies or everyday life, we select the right solution together with you and adapt the socket, mechanics and appearance so your prosthesis blends seamlessly into your day.",
    ],
  },
  beratung: {
    eyebrow: "Top service — from initial consultation to aftercare",
    title: "On-site consultation and home visits across Berlin",
    paragraphs: [
      "Good prosthetic care begins with listening. In an in-depth first consultation we get to know your situation, your wishes and your everyday life, carefully take measurements and design the right course of care — clearly explained and without time pressure.",
      "If coming to the store is difficult, we come to you: our home-visit team takes care of consultation, measurement and fitting throughout Berlin in your own home. We also stay with you after the fitting — for adjustments, repairs or simply with an attentive ear.",
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
      { icon: "Activity", label: "Gait analysis" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice and appointments",
    paragraphs: [
      "For questions about prosthetic care, scheduling an appointment or a personal consultation, we're here for you at any time.",
      "Call us, write to us by email or use our online appointment booking. We're happy to arrange an appointment in one of our Berlin stores or a home visit through our outreach team.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, FingerProthesePageContent> = {
  de: fingerProthesePageSchema.parse(de),
  en: fingerProthesePageSchema.parse(en),
};

export const getFingerProtheseContent = (
  locale: Locale,
): FingerProthesePageContent => pages[locale];

/*
 * Fuß-Prothese — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/fuss-prothese-berlin/: hero
 * (split with photo) → Prothetik von Sanimotion → Vor-Ort-Beratung &
 * Außendienst → service highlights → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const fussProthesePageSchema = z.object({
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
export type FussProthesePageContent = z.infer<typeof fussProthesePageSchema>;

const de: FussProthesePageContent = {
  meta: {
    title: "Fußprothesen in Berlin | Sanimotion Sanitätshaus",
    description:
      "Hochwertige Fuß-, Unterschenkel- und Beinprothesen vom Sanimotion Sanitätshaus Berlin – Beratung und Versorgung mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Fuß-Prothese",
    titleLead: "Fußprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Hochwertige Prothesen für mehr Mobilität und Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Unsere erfahrenen Prothesenbauer fertigen Ihnen erstklassige Fuß-, Unterschenkel- und Beinprothesen an, die sowohl funktionell als auch ästhetisch überzeugen. Um Ihnen optimale Funktionalität und höchsten Komfort zu gewährleisten, setzen wir dabei auf fortschrittliche Technologien und hochwertige Materialien.",
      "Präzise auf Ihre individuellen Bedürfnisse abgestimmt, unterstützen die Prothesen die natürliche Bewegung und tragen zur Verbesserung Ihrer Lebensqualität bei.",
    ],
  },
  prothetik: {
    eyebrow: "Prothetik von Sanimotion",
    title:
      "Modernste Technik, langjährige Erfahrung & handwerkliches Geschick",
    paragraphs: [
      "Nach einer Amputation des Fußes bringen unsere Prothesen neue Mobilität und Flexibilität in Ihr Leben zurück. In unserer Berliner Orthopädie-Werkstatt fertigen unsere hochversierten Prothesenbauer und Orthopädie-Techniker für die unterschiedlichsten Bedürfnisse individuelle Fußprothesen an, die Langlebigkeit, Belastbarkeit und Zuverlässigkeit gewährleisten. Von der Alltagsprothese bis zur Bade- und Sportprothese bieten wir Ihnen individuelle Lösungen für jede Situation.",
      "Mit modernster Technik, leichten Materialien und handwerklichem Geschick sorgen wir dafür, dass Ihre Fuß- oder Beinprothese nicht nur optimal passt, sondern auch einen hohen Tragekomfort am Unterschenkel, Knie oder Oberschenkel bietet.",
      "Selbstverständlich achten wir auch darauf, dass die Prothese optimal in Ihren Schuh passt. Bei Bedarf können wir Ihnen auch passende orthopädische Schuhe, Orthesen und andere Hilfsmittel für ein rundes Gangbild und einen möglichst flüssigen Bewegungsablauf anfertigen.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von der Erstberatung bis zur Nachsorge",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Eine persönliche Beratung ist entscheidend für die optimale Passform und den hohen Tragekomfort Ihrer Prothesenfüße. Besuchen Sie uns in einem unserer Berliner Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg oder Hellersdorf oder vereinbaren Sie einen Hausbesuch mit unserem Außendienst. Unser Team steht Ihnen mit Fachwissen und Einfühlungsvermögen zur Seite, um individuelle Lösungen zu finden.",
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

const en: FussProthesePageContent = {
  meta: {
    title: "Foot prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "High-quality foot, lower-leg and leg prostheses from Sanimotion Sanitätshaus Berlin — advice and fitting with expertise and great care.",
  },
  hero: {
    eyebrow: "Foot prosthesis",
    titleLead: "Foot prostheses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "High-quality prostheses for more mobility and quality of life — advice and care with expertise and a personal touch.",
    intro: [
      "Our experienced prosthetists craft first-class foot, lower-leg and leg prostheses that are both highly functional and aesthetically pleasing. To ensure optimum function and the highest level of comfort, we work with advanced technologies and premium materials.",
      "Precisely tailored to your individual needs, our prostheses support natural movement and help to improve your everyday quality of life.",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetics by Sanimotion",
    title: "State-of-the-art technology, long experience and skilled craftsmanship",
    paragraphs: [
      "After the amputation of a foot, our prostheses bring renewed mobility and flexibility back into your life. In our Berlin orthopedic workshop, highly skilled prosthetists and orthopedic technicians build individual foot prostheses for very different needs — durable, robust and reliable. From everyday prostheses to bathing and sports prostheses, we offer tailored solutions for every situation.",
      "With state-of-the-art technology, lightweight materials and careful craftsmanship, we make sure your foot or leg prosthesis fits perfectly and offers great wearing comfort at the lower leg, knee or thigh.",
      "We also make sure your prosthesis fits perfectly into your shoe. Where helpful, we can make matching orthopedic shoes, orthoses and other assistive devices for a smooth gait and natural movement.",
    ],
  },
  beratung: {
    eyebrow: "Top service — from initial consultation to aftercare",
    title: "On-site consultation and home visits across Berlin",
    paragraphs: [
      "A personal consultation is essential for the perfect fit and high wearing comfort of your prosthetic feet. Visit us at one of our Berlin stores in Zehlendorf, Spandau, Kreuzberg or Hellersdorf — or arrange a home visit with our outreach team. We're at your side with expertise and empathy to find the right solution for you.",
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
      "For questions about prosthetic care, scheduling an appointment or a personal consultation, we're here for you. Call us or send us an email and arrange an appointment in one of our stores or a home visit through our outreach team. We look forward to helping you regain freedom of movement and quality of life.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, FussProthesePageContent> = {
  de: fussProthesePageSchema.parse(de),
  en: fussProthesePageSchema.parse(en),
};

export const getFussProtheseContent = (
  locale: Locale,
): FussProthesePageContent => pages[locale];

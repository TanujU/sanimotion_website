/*
 * Unterschenkel-Prothese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/unterschenkel-prothese-berlin/: hero (split with
 * photo) → Prothesenversorgung (split with detail image) →
 * Vor-Ort-Beratung & Außendienst → service highlights → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const unterschenkelProthesePageSchema = z.object({
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
export type UnterschenkelProthesePageContent = z.infer<
  typeof unterschenkelProthesePageSchema
>;

const de: UnterschenkelProthesePageContent = {
  meta: {
    title: "Unterschenkelprothesen in Berlin | Sanimotion Sanitätshaus",
    description:
      "Hochwertige Unterschenkel- und Oberschenkelprothesen vom Sanimotion Sanitätshaus Berlin – Beratung und Versorgung mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Unterschenkel-Prothese",
    titleLead: "Unterschenkelprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Hochwertige Prothesen für mehr Mobilität und Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Unsere erfahrenen Prothesenbauer fertigen Ihnen erstklassige Unterschenkel- und Oberschenkelprothesen an, die sowohl funktionell als auch ästhetisch überzeugen. Um Ihnen die bestmögliche Funktionalität und höchsten Komfort zu gewährleisten, setzen wir auf fortschrittliche Technologien und hochwertige Materialien.",
      "Bei der Herstellung stimmen wir die Unterschenkelprothese exakt auf Ihre körperliche Situation und Ihre persönlichen Anforderungen ab. Damit ermöglichen wir Ihnen möglichst natürliche Bewegungen und tragen zu einer Verbesserung Ihrer Lebensqualität im Alltag bei.",
    ],
  },
  prothetik: {
    eyebrow: "Sanimotion-Prothesenversorgung",
    title:
      "Kombination aus leichten Materialien, erstklassiger Technik und hoher Expertise",
    paragraphs: [
      "Nach einer Amputation bringen unsere Beinprothesen neue Mobilität und Flexibilität in Ihr Leben. In unserer Orthopädie-Werkstatt in Berlin stellen unsere hochqualifizierten Prothetiker und Orthopädietechniker für Sie individuelle Unterschenkelprothesen her, die langlebig, belastbar und zuverlässig sind. Von der Alltagsprothese bis zur Bade- und Sportprothese bieten wir individuelle Lösungen für jede Situation.",
      "Mit modernster Technik, exakten Passteilen, flexiblen Gelenken, ausgeklügelten Schaftsystemen, leichten Materialien und handwerklichem Geschick sorgen wir dafür, dass Ihre Prothese perfekt passt und Ihnen einen hohen Tragekomfort bietet – ganz gleich, ob die Prothese am Unterschenkel, Knie oder Oberschenkel befestigt wird.",
      "Selbstverständlich achten wir auch darauf, dass die Fuß- bzw. Unterschenkelprothese optimal in Ihre Schuhe passt. Bei Bedarf fertigen wir Ihnen gerne auch passende orthopädische Schuhe und Orthesen an und stellen Ihnen weitere Hilfsmittel zur Verfügung, die Ihnen Stabilität, ein rundes Gangbild und einen möglichst flüssigen Bewegungsablauf versprechen.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von der Erstberatung bis zur Nachsorge",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Eine persönliche Beratung und exakte Vermessung sind entscheidend für den optimalen Tragekomfort und die perfekte Passform der Prothese am Stumpf. Besuchen Sie uns in einem unserer Berliner Sanimotion-Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg, Tempelhof oder in Königs Wusterhausen – oder vereinbaren Sie einen Hausbesuch. Unser Außendienst kommt auch gerne zu Ihnen nach Hause.",
      "Unser Prothetik-Team steht Ihnen mit großem Fachwissen und viel Einfühlungsvermögen zur Seite, um für Ihre Bedürfnisse individuelle Lösungen zu finden.",
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
      "Haben Sie Fragen zur Prothesenversorgung, wünschen Sie eine persönliche Beratung oder möchten Sie einen Termin vereinbaren? Gerne stehen wir Ihnen persönlich zur Verfügung! Kontaktieren Sie uns telefonisch, per E-Mail und buchen Sie jetzt einen Termin über Doctolib. Wir freuen uns darauf, Ihnen mit unseren Prothesen zu mehr Bewegungsfreiheit und neuer Lebensqualität zu verhelfen.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: UnterschenkelProthesePageContent = {
  meta: {
    title: "Lower-leg prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "High-quality lower-leg and above-knee prostheses from Sanimotion Sanitätshaus Berlin — advice and fitting with expertise and great care.",
  },
  hero: {
    eyebrow: "Lower-leg prosthesis",
    titleLead: "Lower-leg prosthesis in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "High-quality prostheses for more mobility and quality of life — advice and care with expertise and a personal touch.",
    intro: [
      "Our experienced prosthetists craft first-class lower-leg and above-knee prostheses that are both highly functional and aesthetically pleasing. To ensure the best possible function and the highest level of comfort, we work with advanced technologies and premium materials.",
      "Each lower-leg prosthesis is precisely tailored to your physical situation and personal requirements. This allows the most natural movement possible and helps to improve your everyday quality of life.",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetic care by Sanimotion",
    title:
      "A combination of lightweight materials, first-class technology and deep expertise",
    paragraphs: [
      "After an amputation, our leg prostheses bring renewed mobility and flexibility into your life. In our Berlin orthopedic workshop, our highly qualified prosthetists and orthopedic technicians build individual lower-leg prostheses for you — durable, robust and reliable. From everyday prostheses to bathing and sports prostheses, we offer tailored solutions for every situation.",
      "With state-of-the-art technology, precise fitting components, flexible joints, sophisticated socket systems, lightweight materials and skilled craftsmanship, we make sure your prosthesis fits perfectly and offers great wearing comfort — whether it attaches at the lower leg, knee or thigh.",
      "Of course we also make sure your foot or lower-leg prosthesis fits ideally into your shoes. Where helpful, we can also make matching orthopedic shoes and orthoses, and provide other assistive devices that give you stability, a smooth gait and natural movement.",
    ],
  },
  beratung: {
    eyebrow: "Top service — from initial consultation to aftercare",
    title: "On-site consultation and home visits",
    paragraphs: [
      "A personal consultation and precise measurement are essential for great wearing comfort and a perfect fit of the prosthesis on the residual limb. Visit us at one of our Berlin Sanimotion stores in Zehlendorf, Spandau, Kreuzberg, Tempelhof or in Königs Wusterhausen — or arrange a home visit. Our outreach team is happy to come to your home.",
      "Our prosthetics team is at your side with deep expertise and great empathy, to find the right individual solution for your needs.",
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
      "Do you have questions about prosthetic care, would you like a personal consultation, or would you like to book an appointment? We're happy to help you in person. Call us, send us an email or book an appointment via Doctolib. We look forward to helping you regain freedom of movement and quality of life with our prostheses.",
      "We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, UnterschenkelProthesePageContent> = {
  de: unterschenkelProthesePageSchema.parse(de),
  en: unterschenkelProthesePageSchema.parse(en),
};

export const getUnterschenkelProtheseContent = (
  locale: Locale,
): UnterschenkelProthesePageContent => pages[locale];

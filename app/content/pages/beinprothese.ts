/*
 * Beinprothese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/beinprothese-berlin/: hero (split with photo) →
 * Oberschenkel- & Unterschenkelprothesen (split with detail image) →
 * service highlights → Sanimotion-Prothesenversorgung →
 * contact. Copy is sourced verbatim from the reference page.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const beinprothesePageSchema = z.object({
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
export type BeinprothesePageContent = z.infer<typeof beinprothesePageSchema>;

const de: BeinprothesePageContent = {
  meta: {
    title: "Beinprothese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Hochwertige Bein-, Unterschenkel- und Oberschenkelprothesen vom Sanimotion Sanitätshaus Berlin – Beratung und Versorgung mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Beinprothese",
    titleLead: "Beinprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Hochwertige Prothesen für mehr Mobilität und Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Unsere erfahrenen Prothesenbauer fertigen Ihnen erstklassige Beinprothesen an. Ob für Unterschenkel- oder Oberschenkel, jede Prothese erfüllt höchste Qualitätsansprüche und überzeugt auch ästhetisch! Um Ihnen die bestmögliche Funktionalität und einen hohen Komfort zu gewährleisten, setzen wir auf fortschrittliche Technologien und hochwertige Materialien.",
      "Bei der Herstellung stimmen wir die Beinprothese genau auf Ihre körperliche Situation und Ihre persönlichen Anforderungen ab, damit Sie damit möglichst natürliche Bewegungen ausführen können und im Alltag eine deutliche Verbesserung Ihrer Lebensqualität spüren.",
    ],
  },
  prothetik: {
    eyebrow: "Oberschenkelprothesen & Unterschenkelprothesen",
    title:
      "Erstklassige Beinprothesen angefertigt durch erfahrene Prothesen-Profis",
    paragraphs: [
      "Nach einer Amputation bringen unsere Beinprothesen neue Mobilität und Flexibilität in Ihr Leben. Die hochqualifizierten Prothetiker und Orthopädietechniker unserer Berliner Sanimotion Orthopädiewerkstatt in Kreuzberg fertigen individuelle Prothesen, die leicht, langlebig, belastbar und zuverlässig sind. Ob Alltagsprothese, Sportprothese oder Badeprothese – wir bieten individuelle Lösungen für jede Situation.",
      "Wie wir das schaffen? Mit modernster Technik, präzisen Passteilen, flexiblen Gelenken, ausgeklügelten Schaftsystemen, leichten Materialien und viel handwerklichem Geschick! So sorgen wir dafür, dass jede Prothese perfekt sitzt und hohen Tragekomfort bietet – je nach Amputationshöhe am Unterschenkel, am Kniegelenk oder am Oberschenkel befestigt wird.",
      "Selbstverständlich achten wir auch darauf, dass die Beinprothese optimal in Ihre Schuhe passt. Bei Bedarf erhalten Sie bei uns auch orthopädische Schuhe, Einlagen, Orthesen und andere Hilfsmittel, die Ihnen Stabilität, ein rundes Gangbild und einen möglichst flüssigen Bewegungsablauf versprechen.",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Top-Service von der Beratung bis zur Versorgung",
    items: [
      { icon: "Award", label: "Service mit Qualität" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Activity", label: "Ganganalyse" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  beratung: {
    eyebrow: "Vor-Ort-Beratung & Außendienst",
    title: "Sanimotion-Prothesenversorgung",
    paragraphs: [
      "Eine persönliche Beratung und eine exakte Vermessung sind entscheidend für den optimalen Tragekomfort und die perfekte Passform einer Beinprothese. Unser Prothetik-Team steht Ihnen mit viel Fachwissen und Einfühlungsvermögen zur Seite, um individuelle Lösungen für Ihre Bedürfnisse zu finden.",
      "Besuchen Sie uns in einem unserer Berliner Sanimotion Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg oder Hellersdorf. Gerne kommt unser Außendienst auch zu Ihnen nach Hause. Vereinbaren Sie einfach einen Hausbesuch.",
    ],
  },
  contact: {
    eyebrow: "Ihr Weg zu uns",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Sie haben Fragen zu unseren Prothesen, wünschen eine persönliche Beratung oder möchten einen Termin vereinbaren? Wir sind gerne persönlich für Sie da! Kontaktieren Sie uns telefonisch, per E-Mail oder vereinbaren Sie gleich einen Termin über Doctolib. Wir freuen uns darauf, Ihnen mit unseren Prothesen zu größerer Bewegungsfreiheit und mehr Lebensqualität zu verhelfen.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: BeinprothesePageContent = {
  meta: {
    title: "Leg prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "High-quality leg, lower-leg and above-knee prostheses from Sanimotion Sanitätshaus Berlin — advice and fitting with expertise and great care.",
  },
  hero: {
    eyebrow: "Leg prosthesis",
    titleLead: "Leg prosthesis in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "High-quality prostheses for more mobility and quality of life — advice and care with expertise and a personal touch.",
    intro: [
      "Our experienced prosthetists craft first-class leg prostheses. Whether for the lower leg or thigh, every prosthesis meets the highest quality standards and looks great too. To give you the best possible function and a high level of comfort, we work with advanced technologies and premium materials.",
      "Each leg prosthesis is precisely tailored to your physical situation and personal requirements, so you can move as naturally as possible and feel a clear improvement in your everyday quality of life.",
    ],
  },
  prothetik: {
    eyebrow: "Above-knee & below-knee prostheses",
    title:
      "First-class leg prostheses crafted by experienced prosthetics specialists",
    paragraphs: [
      "After an amputation, our leg prostheses bring renewed mobility and flexibility into your life. The highly qualified prosthetists and orthopedic technicians at our Berlin Sanimotion workshop in Kreuzberg build individual prostheses that are lightweight, durable, robust and reliable. Whether everyday prosthesis, sports prosthesis or bathing prosthesis — we offer tailored solutions for every situation.",
      "How do we manage that? With state-of-the-art technology, precise fitting components, flexible joints, sophisticated socket systems, lightweight materials and skilled craftsmanship. This is how we make sure every prosthesis fits perfectly and offers great wearing comfort — attached at the lower leg, knee or thigh, depending on the amputation level.",
      "Of course we also make sure your leg prosthesis fits ideally into your shoes. Where helpful, we can also provide matching orthopedic shoes, insoles, orthoses and other assistive devices for stability, a smooth gait and natural movement.",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "Top service — from initial consultation to provision",
    items: [
      { icon: "Award", label: "Quality service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Activity", label: "Gait analysis" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  beratung: {
    eyebrow: "On-site consultation & home visits",
    title: "Sanimotion prosthetic care",
    paragraphs: [
      "A personal consultation and precise measurement are essential for optimal wearing comfort and the perfect fit of a leg prosthesis. Our prosthetics team is at your side with deep expertise and great empathy, to find the right individual solution for your needs.",
      "Visit us at one of our Berlin Sanimotion stores in Zehlendorf, Spandau, Kreuzberg or Hellersdorf. Our outreach team is also happy to come to your home — simply arrange a home visit.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about our prostheses, would you like a personal consultation, or would you like to book an appointment? We're happy to help you in person. Call us, send us an email or book an appointment via Doctolib. We look forward to helping you regain freedom of movement and quality of life with our prostheses.",
      "We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, BeinprothesePageContent> = {
  de: beinprothesePageSchema.parse(de),
  en: beinprothesePageSchema.parse(en),
};

export const getBeinprotheseContent = (
  locale: Locale,
): BeinprothesePageContent => pages[locale];

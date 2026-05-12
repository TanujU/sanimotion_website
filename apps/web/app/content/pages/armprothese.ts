/*
 * Armprothese — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/armprothese-berlin/: hero
 * (split with photo) → Prothetik im Sanimotion Sanitätshaus → Top-Service /
 * Vor-Ort-Beratung & Außendienst → service highlights → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const armprothesePageSchema = z.object({
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
export type ArmprothesePageContent = z.infer<typeof armprothesePageSchema>;

const de: ArmprothesePageContent = {
  meta: {
    title: "Armprothese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Ästhetische, funktionale und myoelektrische Armprothetik vom Sanimotion Sanitätshaus Berlin – Beratung und Versorgung mit Expertise und Feingefühl.",
  },
  hero: {
    eyebrow: "Armprothese",
    titleLead: "Armprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Ästhetische, funktionale und myoelektrische Armprothetik für mehr Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Wir möchten Ihnen mit unseren kosmetischen und funktionalen Armprothesen zur mehr Selbstständigkeit und Lebensqualität verhelfen. Unsere erfahrenen Prothesenbauer fertigen Ihnen dazu erstklassige Prothesen an. Ob für Hand, Unterarm oder Oberarm, jede Prothese wird eigens für Sie hergestellt, erfüllt höchste Qualitätsansprüche und überzeugt auch ästhetisch. Um Ihnen einen hohen Tragekomfort und die bestmögliche Funktionalität zu gewährleisten, setzen wir auf fortschrittliche Technologien und hochwertige Materialien.",
    ],
  },
  prothetik: {
    eyebrow: "Prothetik im Sanimotion Sanitätshaus",
    title: "Armprothesen durch erfahrene Prothesenbauer",
    paragraphs: [
      "Bei einer Dysmelie oder nach der Amputation einer Hand oder des Arms bringen unsere Armprothesen neue Beweglichkeit und Freiheit in Ihr Leben. Die hochqualifizierten Prothetiker und Orthopädietechniker in unserer Sanimotion Orthopädiewerkstatt in Berlin-Kreuzberg fertigen individuelle Prothesen an, die leicht, langlebig, belastbar und zuverlässig sind.",
      "Unser Angebot reicht von rein ästhetischen Armprothesen (Habitusprothesen) über funktionelle Armprothesen bis hin zu hochmodernen Armprothesen mit myoelektrisch gesteuerten Mikroprozessoren oder bionischen Komponenten, die sehr präzise Bewegungen ermöglichen.",
      "Um Ihnen die bestmögliche Prothese herzustellen, setzen wir auf modernste Technik, präzise Passteile, flexible Gelenke, ausgeklügelte Schaftsysteme, leichte Materialien und viel handwerkliches Geschick! So sorgen wir dafür, dass jede Prothese perfekt am Armstumpf sitzt und hohen Tragekomfort bietet – je nach Amputationshöhe am Unter- oder Oberarm.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von der Beratung bis zur Versorgung",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Eine persönliche Beratung und eine exakte Vermessung sind entscheidend für den optimalen Tragekomfort und die perfekte Passform einer Armprothese. Unser Prothetik-Team steht Ihnen mit viel Fachwissen und Einfühlungsvermögen zur Seite, um individuelle Lösungen für Ihre Bedürfnisse zu finden.",
      "Besuchen Sie uns in einem unserer Berliner Sanimotion Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg, Tempelhof oder Königs Wusterhausen. Gerne kommt unser Außendienst auch zu Ihnen nach Hause. Vereinbaren Sie einfach einen Hausbesuch.",
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
      "Sie haben Fragen zu unseren Prothesen, wünschen eine persönliche Beratung oder möchten einen Termin vereinbaren? Wir sind gerne persönlich für Sie da! Kontaktieren Sie uns telefonisch, per E-Mail oder vereinbaren Sie gleich einen Termin über Doctolib. Wir freuen uns darauf, Ihnen mit unseren Prothesen zu mehr Bewegungsfreiheit und Lebensqualität zu verhelfen.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: ArmprothesePageContent = {
  meta: {
    title: "Arm prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Aesthetic, functional and myoelectric arm prosthetics from Sanimotion Sanitätshaus Berlin — advice and care with expertise and great attention to detail.",
  },
  hero: {
    eyebrow: "Arm prosthesis",
    titleLead: "Arm prosthesis in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Aesthetic, functional and myoelectric arm prosthetics for more quality of life — advice and care with expertise and great attention to detail.",
    intro: [
      "Our cosmetic and functional arm prostheses are designed to give you more independence and quality of life. Our experienced prosthetists craft first-class prostheses tailored to you. Whether for the hand, forearm or upper arm, every prosthesis is custom-made, meets the highest quality standards and is also aesthetically convincing. To ensure a high level of wearing comfort and the best possible functionality, we rely on advanced technologies and high-quality materials.",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetics at Sanimotion Sanitätshaus",
    title: "Arm prostheses crafted by experienced prosthetists",
    paragraphs: [
      "Whether after dysmelia or the amputation of a hand or arm, our arm prostheses bring new mobility and freedom back into your life. The highly qualified prosthetists and orthopedic technicians in our Sanimotion workshop in Berlin-Kreuzberg build individual prostheses that are lightweight, durable, robust and reliable.",
      "Our offering ranges from purely aesthetic arm prostheses (habitus prostheses) and functional arm prostheses to state-of-the-art arm prostheses with myoelectrically controlled microprocessors or bionic components that enable very precise movements.",
      "To produce the best possible prosthesis for you, we rely on cutting-edge technology, precise components, flexible joints, sophisticated socket systems, lightweight materials and a great deal of craftsmanship. This way, every prosthesis fits perfectly on the residual limb and offers a high level of wearing comfort — whether on the forearm or upper arm, depending on the level of amputation.",
    ],
  },
  beratung: {
    eyebrow: "Top service from consultation to fitting",
    title: "On-site consultation and home visits",
    paragraphs: [
      "A personal consultation and exact measurements are essential for optimal wearing comfort and a perfect fit of an arm prosthesis. Our prosthetics team is at your side with extensive expertise and empathy to find individual solutions for your needs.",
      "Visit us at one of our Berlin Sanimotion stores in Zehlendorf, Spandau, Kreuzberg, Tempelhof or Königs Wusterhausen. Our outreach team is also happy to come to you at home — simply arrange a home visit.",
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
      "Do you have questions about our prostheses, would you like a personal consultation or would you like to arrange an appointment? We're happy to be there for you in person. Get in touch by phone, by email or book an appointment directly via Doctolib. We look forward to helping you regain freedom of movement and quality of life with our prostheses.",
      "We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, ArmprothesePageContent> = {
  de: armprothesePageSchema.parse(de),
  en: armprothesePageSchema.parse(en),
};

export const getArmprotheseContent = (
  locale: Locale,
): ArmprothesePageContent => pages[locale];

/*
 * Handprothese — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/handprothese-berlin/: hero
 * (split with photo) → Prothesenversorgung im Sanitätshaus → Myoelektrische
 * Hand- und Armprothesen → Top-Service / Vor-Ort-Beratung → service
 * highlights → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const handprothesePageSchema = z.object({
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
  myo: z.object({
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
export type HandprothesePageContent = z.infer<typeof handprothesePageSchema>;

const de: HandprothesePageContent = {
  meta: {
    title: "Handprothese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Ästhetische, funktionale & myoelektrische Handprothetik für mehr Lebensqualität – Beratung und Versorgung mit Expertise und Feingefühl im Sanimotion Sanitätshaus Berlin.",
  },
  hero: {
    eyebrow: "Handprothese",
    titleLead: "Handprothese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Ästhetische, funktionale & myoelektrische Handprothetik für mehr Lebensqualität // Beratung und Versorgung mit Expertise und Feingefühl",
    intro: [
      "Mit unseren kosmetischen und funktionalen Handprothesen verhelfen wir Ihnen im Alltag zur mehr Selbstständigkeit und Lebensqualität. Unsere erfahrenen Prothesenbauer fertigen Ihnen erstklassige Prothesen an. Ob für Finger, Hand oder Unterarm, jede Prothese wird eigens für Sie hergestellt und erfüllt höchste Qualitätsansprüche. Zudem legen wir großen Wert auf eine überzeugende Ästhetik. Um Ihnen Tragekomfort und die bestmögliche Funktionalität zu gewährleisten, setzen fortschrittliche Technologien ein und verwenden nur hochwertige Materialien.",
    ],
  },
  prothetik: {
    eyebrow: "Prothesenversorgung im Sanitätshaus",
    title: "Handprothesen durch erfahrene Prothesenbauer",
    paragraphs: [
      "Bei einer Dysmelie oder nach der Amputation einer Hand oder des unteren Arms bringen unsere Handprothesen neue Beweglichkeit und Freiheit in Ihr Leben. Die bestens ausgebildeten und erfahrenen Prothetiker und Orthopädietechniker in unserer Sanimotion Orthopädie-Werkstatt in Berlin-Kreuzberg fertigen als Ersatz für amputierte Gliedmaßen individuelle Prothesen an, die leicht, langlebig, belastbar und zuverlässig sind.",
    ],
  },
  myo: {
    eyebrow: "Modernste Technik",
    title: "Ästhetische, funktionelle & myoelektrische Hand- und Armprothesen",
    paragraphs: [
      "Unser Angebot umfasst rein ästhetische, funktionelle und hochmoderne Hand- und Armprothesen mit myoelektrisch gesteuerten Mikroprozessoren oder bionischen Komponenten, die präzise Bewegungen ermöglichen.",
      "Indem wir über modernste Technik, exakte Passteile, flexible Gelenke, ausgeklügelte Schaftsysteme, leichte Materialien und viel handwerkliches Geschick verfügen, sorgen wir dafür, dass jede Prothese perfekt am Armstumpf sitzt.",
    ],
  },
  beratung: {
    eyebrow: "Top-Service von Anfang an",
    title: "Vor-Ort-Beratung & Außendienst",
    paragraphs: [
      "Eine ausführliche Beratung und eine genaue Vermessung sind wichtig für die perfekte Passform und den optimalen Tragekomfort einer Handprothese. Unser Prothetik-Team steht Ihnen mit viel Fachwissen und Einfühlungsvermögen zur Seite, um Ihre Frage zu beantworten und um individuelle Lösungen für Ihre Bedürfnisse zu finden.",
      "Besuchen Sie uns in einem unserer Berliner Sanimotion Sanitätshäuser in Zehlendorf, Spandau, Kreuzberg oder Hellersdorf oder vereinbaren Sie einen Termin mit unserem Außendienst.",
      "Die Kosten für die Prothesenversorgung werden in der Regel von Ihrer Krankenkasse übernommen.",
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
      "Haben Sie Fragen zu unseren Prothesen, wünschen Sie eine persönliche Beratung oder möchten Sie einen Termin vereinbaren? Wir sind gerne persönlich für Sie da! Kontaktieren Sie uns telefonisch, per E-Mail oder vereinbaren Sie jetzt online einen Termin über Doctolib. Wir freuen uns darauf, Ihnen mit unseren Prothesen zu mehr Bewegungsfreiheit und Lebensqualität zu verhelfen.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: HandprothesePageContent = {
  meta: {
    title: "Hand prosthesis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Aesthetic, functional and myoelectric hand prosthetics for greater quality of life — advice and care with expertise and great attention to detail at Sanimotion Sanitätshaus Berlin.",
  },
  hero: {
    eyebrow: "Hand prosthesis",
    titleLead: "Hand prosthesis in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Aesthetic, functional and myoelectric hand prosthetics for greater quality of life — advice and care with expertise and great attention to detail.",
    intro: [
      "With our cosmetic and functional hand prostheses, we help you regain independence and quality of life in everyday situations. Our experienced prosthetists craft first-class prostheses tailored to you. Whether for finger, hand or forearm, every prosthesis is made specifically for you and meets the highest quality standards. We also place great value on a convincing aesthetic. To ensure wearing comfort and the best possible functionality, we use advanced technologies and only high-grade materials.",
    ],
  },
  prothetik: {
    eyebrow: "Prosthetic care at Sanimotion Sanitätshaus Berlin",
    title: "Hand prostheses crafted by experienced prosthetists",
    paragraphs: [
      "After a dysmelia diagnosis or the amputation of a hand or lower arm, our hand prostheses bring new mobility and freedom back into your life. The well-trained and experienced prosthetists and orthopedic technicians in our Sanimotion orthopedic workshop in Berlin-Kreuzberg build individual prostheses as a replacement for amputated limbs — light, durable, robust and reliable in everyday use.",
    ],
  },
  myo: {
    eyebrow: "State-of-the-art technology",
    title: "Aesthetic, functional and myoelectric hand and arm prostheses",
    paragraphs: [
      "Our portfolio ranges from purely aesthetic to functional and highly modern hand and arm prostheses with myoelectrically controlled microprocessors or bionic components that enable precise movements.",
      "Through the latest technology, exact components, flexible joints, sophisticated socket systems, lightweight materials and a great deal of craftsmanship, we make sure every prosthesis fits perfectly on the residual limb.",
    ],
  },
  beratung: {
    eyebrow: "Top service from the start",
    title: "On-site consultation and home visits",
    paragraphs: [
      "A thorough consultation and an accurate measurement are essential for the perfect fit and optimum wearing comfort of a hand prosthesis. Our prosthetics team supports you with great expertise and empathy — to answer your questions and to find individual solutions for your needs.",
      "Visit us in one of our Berlin Sanimotion stores in Zehlendorf, Spandau, Kreuzberg or Hellersdorf, or arrange an appointment with our home-visit team.",
      "The cost of prosthetic care is usually covered by your health insurance.",
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
      "Do you have questions about our prostheses, would you like a personal consultation or would you like to book an appointment? We're happy to be there for you in person. Contact us by phone, by email or book an appointment online via Doctolib. We look forward to helping you to more freedom of movement and quality of life with our prostheses.",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, HandprothesePageContent> = {
  de: handprothesePageSchema.parse(de),
  en: handprothesePageSchema.parse(en),
};

export const getHandprotheseContent = (
  locale: Locale,
): HandprothesePageContent => pages[locale];

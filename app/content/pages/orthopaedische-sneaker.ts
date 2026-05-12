/*
 * Orthopädische Sneaker — sub-page content (DE + EN).
 *
 * Mirrors the section structure of
 * sanimotion.com/orthopaedische-schuhe-berlin/sneaker/ — copy is sourced
 * verbatim from that reference page per product brief.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const sectionSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).min(1),
});

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const sneakerPageSchema = z.object({
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
    schuhtypen: z.string(),
  }),
  konstruktion: sectionSchema,
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  leistungen: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    items: z.array(highlightSchema).length(6),
  }),
  krankenkasse: sectionSchema,
  vermessung: sectionSchema,
  laufanalyse: sectionSchema,
  design: sectionSchema,
  zielgruppe: sectionSchema,
  warum: sectionSchema,
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type SneakerPageContent = z.infer<typeof sneakerPageSchema>;

const de: SneakerPageContent = {
  meta: {
    title: "Orthopädische Sneaker in Berlin | Sanimotion Sanitätshaus",
    description:
      "Maßgefertigte und moderne orthopädische Turnschuhe vom Sanimotion Sanitätshaus Berlin – für mehr Komfort, weniger Schmerzen und eine höhere Belastungsfähigkeit Ihrer Füße.",
  },
  hero: {
    eyebrow: "Orthopädische Sneaker",
    titleLead: "Orthopädische Sneaker",
    titleTail: "für Damen und Herren in Berlin",
    lede: "Maßgefertigte und moderne orthopädische Turnschuhe vom Sanimotion Sanitätshaus Berlin – für mehr Komfort, weniger Schmerzen und eine höhere Belastungsfähigkeit Ihrer Füße",
    intro:
      "Orthopädische Sneaker sind die perfekte Wahl für alle, die trotz Fußproblemen nicht auf modernes Design verzichten möchten. Im Sanimotion Sanitätshaus Berlin bieten wir eine große Auswahl an orthopädischen Turnschuhen für Damen und Herren. Sie überzeugen durch ihre sportliche Optik, ihre hochwertige Verarbeitung und ihre individuelle orthopädische Funktionalität.",
    schuhtypen:
      "Egal, ob Sie unter Fußfehlstellungen wie Plattfüßen oder Hallux valgus, an Druckstellen oder allgemeinen Beschwerden beim Gehen leiden – unsere orthopädischen Sneakers verbinden Stil und Funktion auf einzigartige Weise.",
  },
  konstruktion: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Orthopädische Turnschuhe für modebewusste Männer und Frauen",
    paragraphs: [
      "Unsere orthopädischen Sneaker sehen aus wie modische Freizeitschuhe, bieten aber die Vorteile eines orthopädisch angepassten Schuhwerks. Sie verfügen über eine besonders durchdachte Sohlenkonstruktion, ein stützendes Fußbett, eine weiche Polsterung und – auf Wunsch – über Platz für individuell gefertigte Einlagen oder Einlegesohlen.",
      "So vereinen sie optimalen Tragekomfort, Entlastung und modisches Design, ohne wie ein klassischer orthopädischer Schuh auszusehen.",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was Sie bei uns erwartet.",
    items: [
      { icon: "Award", label: "Service mit Qualität" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Boxes", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  leistungen: {
    eyebrow: "Unsere Leistungen",
    title: "Unsere Leistungen im Bereich orthopädische Sneaker",
    paragraphs: [
      "Wir verfügen über mehr als 30 Jahre Erfahrung in der Orthopädieschuhtechnik.",
    ],
    items: [
      {
        icon: "MessageCircle",
        label:
          "Fachkundige Beratung durch erfahrene Orthopädieschuhtechniker",
      },
      {
        icon: "Footprints",
        label: "Individuelle Anpassung der Schuhe an Ihre Füße und Beschwerden",
      },
      {
        icon: "Sparkles",
        label:
          "Modische Modelle für Damen und Herren, die wir optisch nach Ihren Wünschen anpassen können.",
      },
      {
        icon: "Ruler",
        label: "Maßanfertigung zur Berücksichtigung bei speziellen Anforderungen",
      },
      {
        icon: "Layers",
        label: "Hochwertige Materialien für eine lange Haltbarkeit",
      },
      {
        icon: "Puzzle",
        label: "Passende orthopädische Einlagen für Ihre Sneaker",
      },
    ],
  },
  krankenkasse: {
    eyebrow: "Kostenübernahme",
    title: "Mit Rezept vom Arzt: Kostenübernahme durch Ihre Krankenkasse",
    paragraphs: [
      "Die Kosten für die orthopädischen Einlagen und Maßschuhe werden in der Regel von Ihrer Krankenkasse übernommen – ganz egal, ob Sie gesetzlich oder privat versichert sind. Sie müssen nur einen geringen Eigenanteil bezahlen.",
      "Voraussetzung dafür ist, dass Sie die Schuhe von Ihrem Arzt verschrieben und ein Rezept dafür ausgestellt bekommen. Gerne beraten wir Sie vorab, was auf dem Rezept stehen sollte, damit wir Ihnen die bestmögliche Schuhversorgung bieten können.",
    ],
  },
  vermessung: {
    eyebrow: "Fußvermessung",
    title: "Fußvermessung in unseren Sanitätshäusern oder beim Hausbesuch",
    paragraphs: [
      "Die Passform orthopädischer Schuhe hat höchste Priorität, um Ihre Fußprobleme zu lindern, einen schmerzfreien Gang zu gewährleisten und die nötige Stützfunktion zu bieten. Daher nehmen wir exakte Maße Ihrer Füße (Länge, Breite, Höhe, Umfang) und erstellen zusätzlich einen Abdruck Ihrer Fußsohle. Anschließend fertigen unsere erfahrenen Orthopädie-Schuhtechniker das Schuhwerk anhand Ihrer Maße in präziser Handarbeit an.",
      "Besuchen Sie uns für eine qualifizierte Beratung und individuelle Vermessung während unserer Öffnungszeiten in unseren Berliner Sanitätshäusern in Kreuzberg, Spandau, Zehlendorf, Tempelhof und Königs Wusterhausen oder in den Filialen unseres Partners Meisterschuh Berlin im Prenzlauer Berg oder in Westend.",
      "Wenn Sie nicht mobil sind, kommt unser Außendienst auch gerne zu Ihnen nach Hause oder in ein Seniorenheim, um einen Fußabdruck vorzunehmen. Vereinbaren Sie dazu bitte einen Termin mit uns. Dieser Service ist für Sie selbstverständlich kostenlos.",
    ],
  },
  laufanalyse: {
    eyebrow: "Laufanalyse",
    title: "Individuelle Fußdruckmessung",
    paragraphs: [
      "Als Experten für die Fußgesundheit helfen wir bei Fußfehlstellungen aller Art. Die Rehabilitation, Bewahrung der Mobilität und Versorgung der Füße sind die wichtigsten Funktionen orthopädischer Schuhe und Einlagen. Mithilfe von Laufanalyse, computergestützter Fußdruckmessung und Blauabdruck erstellen unsere Schuhmachermeister für jeden Schuh ein perfektes Fußbett, sodass Sie von höchstem Tragekomfort profitieren.",
    ],
  },
  design: {
    eyebrow: "Design & Optik",
    title: "Medizinische Schuhe in Ihrem Wunschdesign",
    paragraphs: [
      "Damit Sie sich in Ihren neuen Sneakern auch wohlfühlen, werden die orthopädischen Halbschuhe in unserer Manufaktur nicht nur nach funktionellen Anforderungen, sondern auch nach Ihrem individuellen modischen Geschmack von Spezialisten angefertigt und zurichtet. Dafür bieten wir eine große Auswahl an Modellen, Materialien, Farben und Formen. Mit uns wird Ihr medizinischer Konfektionsschuh zu Ihrem neuen Lieblingsschuh!",
    ],
  },
  zielgruppe: {
    eyebrow: "Für wen geeignet",
    title: "Für wen sind orthopädische Sneaker sinnvoll?",
    paragraphs: [
      "Unsere orthopädischen Sneaker richten sich an Damen und Herren, die komfortable, unterstützende Schuhe für den Alltag suchen – ohne Kompromisse bei der Optik. Sie sind besonders geeignet bei Fußfehlstellungen (z. B. Hallux valgus, Senkfuß, Spreizfuß, Plattfüße), Rückenschmerzen oder Kniebeschwerden durch Fehlbelastung oder anderen statischen Problemen sowie als bequeme Alltagsschuhe mit gesundheitsfördernder Wirkung.",
    ],
  },
  warum: {
    eyebrow: "Warum Sanimotion",
    title: "Warum orthopädische Sneaker vom Sanimotion Sanitätshaus?",
    paragraphs: [
      "In unserem Sanitätshaus in Berlin verbinden wir Handwerk, Orthopädie und Stil. Unsere orthopädischen Sneakers werden mit höchstem Anspruch an Funktionalität, Komfort und Design ausgewählt – oder auf Wunsch individuell für Sie angepasst. Unsere Orthopädietechniker berücksichtigen dabei Ihre Fußform, eventuelle Beschwerden, Ihre bevorzugte Passform und den gewünschten Anlass.",
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu orthopädischen Sneakern oder anderen medizinischen Produkten aus unserem Sortiment? Gerne beraten unsere Experten Sie in unseren Berliner Sanimotion Sanitätshäusern persönlich. Auf Wunsch kommt unser Außendienst für die Beratung, Vermessung und Lieferung innerhalb ganz Berlins und Umgebung auch zu Ihnen nach Hause.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: SneakerPageContent = {
  meta: {
    title: "Orthopedic Sneakers in Berlin | Sanimotion Sanitätshaus",
    description:
      "Custom-made, modern orthopedic sneakers from Sanimotion Sanitätshaus Berlin — for more comfort, less pain and greater load-bearing capacity for your feet.",
  },
  hero: {
    eyebrow: "Orthopedic sneakers",
    titleLead: "Orthopedic sneakers",
    titleTail: "for women and men in Berlin",
    lede: "Custom-made, modern orthopedic sneakers from Sanimotion Sanitätshaus Berlin — for more comfort, less pain and greater load-bearing capacity for your feet.",
    intro:
      "Orthopedic sneakers are the perfect choice for anyone who doesn't want to give up modern design despite foot problems. At Sanimotion Sanitätshaus Berlin we offer a wide selection of orthopedic sneakers for women and men. They impress with their sporty look, high-quality workmanship and individual orthopedic functionality.",
    schuhtypen:
      "Whether you suffer from foot misalignments such as flat feet or hallux valgus, pressure points or general complaints when walking — our orthopedic sneakers combine style and function in a unique way.",
  },
  konstruktion: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Orthopedic sneakers for fashion-conscious men and women",
    paragraphs: [
      "Our orthopedic sneakers look like fashionable casual shoes but offer all the advantages of orthopedically adapted footwear. They feature a particularly thoughtful sole construction, a supportive footbed, soft cushioning and — on request — room for individually crafted insoles.",
      "They combine optimal wearing comfort, relief and stylish design without looking like a classic orthopedic shoe.",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What you can expect from us.",
    items: [
      { icon: "Award", label: "Quality service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Boxes", label: "Extensive range" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  leistungen: {
    eyebrow: "Our services",
    title: "Our services for orthopedic sneakers",
    paragraphs: [
      "We have more than 30 years of experience in orthopedic shoe technology.",
    ],
    items: [
      {
        icon: "MessageCircle",
        label:
          "Expert advice from experienced orthopedic shoe technicians",
      },
      {
        icon: "Footprints",
        label:
          "Individual adjustment of the shoes to your feet and complaints",
      },
      {
        icon: "Sparkles",
        label:
          "Fashionable models for women and men, visually adapted to your wishes.",
      },
      {
        icon: "Ruler",
        label: "Custom-made footwear for special requirements",
      },
      {
        icon: "Layers",
        label: "High-quality materials for long durability",
      },
      {
        icon: "Puzzle",
        label: "Matching orthopedic insoles for your sneakers",
      },
    ],
  },
  krankenkasse: {
    eyebrow: "Insurance coverage",
    title: "With a doctor's prescription: covered by your health insurance",
    paragraphs: [
      "The cost of orthopedic insoles and bespoke shoes is generally covered by your health insurance — whether you're publicly or privately insured. You only pay a small co-payment.",
      "The prerequisite is that your physician prescribes the shoes and issues a prescription. We're happy to advise you in advance on what should appear on the prescription so we can give you the best possible footwear care.",
    ],
  },
  vermessung: {
    eyebrow: "Foot measurement",
    title: "Foot measurement in our stores or at your home",
    paragraphs: [
      "The fit of orthopedic shoes has top priority — for relieving foot problems, ensuring a pain-free gait and the necessary support. We therefore take the exact measurements of your feet (length, width, height, circumference) and additionally take an impression of your sole. Our experienced orthopedic shoe technicians then craft the footwear by hand from your measurements.",
      "Visit us for qualified advice and individual measurement during opening hours at our Berlin stores in Kreuzberg, Spandau, Zehlendorf, Tempelhof and Königs Wusterhausen, or at our partner Meisterschuh Berlin in Prenzlauer Berg or Westend.",
      "If you aren't mobile, our field team is also happy to come to your home or to a senior residence to take a foot impression. Just arrange an appointment with us. The service is of course completely free for you.",
    ],
  },
  laufanalyse: {
    eyebrow: "Gait analysis",
    title: "Individual foot pressure measurement",
    paragraphs: [
      "As experts in foot health we help with foot misalignments of every kind. Rehabilitation, preserving mobility and caring for your feet are the most important functions of orthopedic shoes and insoles. With gait analysis, computer-aided foot pressure measurement and a blueprint impression, our master shoemakers create the perfect footbed for every shoe — so you benefit from the highest level of comfort.",
    ],
  },
  design: {
    eyebrow: "Design & aesthetic",
    title: "Medical shoes in your preferred design",
    paragraphs: [
      "So you feel good in your new sneakers, the specialists in our manufactory craft and modify orthopedic low shoes not just to functional requirements but to your individual taste in style. We offer a wide selection of models, materials, colors and shapes. With us, your medical ready-made shoe becomes your new favorite shoe.",
    ],
  },
  zielgruppe: {
    eyebrow: "Who they're for",
    title: "Who are orthopedic sneakers right for?",
    paragraphs: [
      "Our orthopedic sneakers are aimed at women and men who are looking for comfortable, supportive shoes for everyday life — without compromising on looks. They're particularly suited for foot misalignments (e.g. hallux valgus, fallen arches, splayfoot, flat feet), back or knee pain caused by incorrect loading and other static problems, as well as comfortable everyday shoes with a health-promoting effect.",
    ],
  },
  warum: {
    eyebrow: "Why Sanimotion",
    title: "Why orthopedic sneakers from Sanimotion Sanitätshaus?",
    paragraphs: [
      "At our Berlin Sanitätshaus we combine craft, orthopedics and style. Our orthopedic sneakers are selected with the highest standards of functionality, comfort and design — or individually adapted for you on request. Our orthopedic technicians take into account your foot shape, any complaints, your preferred fit and the desired occasion.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about orthopedic sneakers or other medical products from our range? Our experts are happy to advise you in person at our Berlin Sanimotion stores. On request, our field team will also come to you for advice, measurement and delivery anywhere in Berlin and the surrounding area.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, SneakerPageContent> = {
  de: sneakerPageSchema.parse(de),
  en: sneakerPageSchema.parse(en),
};

export const getSneakerContent = (locale: Locale): SneakerPageContent =>
  pages[locale];

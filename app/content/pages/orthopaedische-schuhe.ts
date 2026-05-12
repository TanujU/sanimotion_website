/*
 * Orthopädische Schuhe — landing page content (DE + EN).
 *
 * Mirrors the section structure of sanimotion.com/orthopaedische-schuhe-berlin/
 * (hero → intro → workshop collab → service highlights → Krankenkasse →
 * Fußvermessung → Laufanalyse → Design → contact). Copy is sourced verbatim
 * from that reference page per product brief.
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

export const schuhePageSchema = z.object({
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
  collaboration: sectionSchema,
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  krankenkasse: sectionSchema,
  vermessung: sectionSchema,
  laufanalyse: sectionSchema,
  design: sectionSchema,
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type SchuhePageContent = z.infer<typeof schuhePageSchema>;

const de: SchuhePageContent = {
  meta: {
    title: "Moderne Orthopädische Schuhe in Berlin | Sanimotion Sanitätshaus",
    description:
      "Maßgefertigte und modische orthopädische Schuhe vom Sanimotion Sanitätshaus – für mehr Komfort, weniger Schmerzen und eine höhere Belastungsfähigkeit Ihrer Füße.",
  },
  hero: {
    eyebrow: "Orthopädische Schuhe",
    titleLead: "Moderne orthopädische Schuhe",
    titleTail: "für Damen & Herren in Berlin",
    lede: "Maßgefertigte und modische orthopädische Schuhe vom Sanimotion Sanitätshaus – für mehr Komfort, weniger Schmerzen und eine höhere Belastungsfähigkeit Ihrer Füße",
    intro:
      "Wenn Schuheinlagen oder eine Schuhzurichtung nicht ausreichen, um Beschwerden am Fuß gezielt und dauerhaft zu lindern, sind maßgefertigte orthopädische Schuhe der nächste Schritt. Bei uns erhalten Sie moderne orthopädische Damenschuhe und Herrenschuhe, die nicht nur Ihre Beschwerden lindern, sondern auch gut aussehen.",
    schuhtypen:
      "Ob Lederschuhe, Sneaker, Absatzschuhe, Sandalen, Hausschuhe, Halbstiefel oder Boots. Sie bestimmen Ihr Wunschmodell und wir fertigen den Schuh nach Ihren optischen Vorstellungen für Sie an.",
  },
  collaboration: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Enge Abstimmung und Zusammenarbeit mit Ihrem Arzt",
    paragraphs: [
      "Die modernen orthopädischen Schuhe für Damen und Herren werden von unseren qualifizierten Schuhmachern und orthopädischen Schuhtechnikern in unserer eigenen Berliner Sanimotion-Schuhwerkstatt in Berlin-Kreuzberg nach Maß hergestellt. Unser Ziel ist es, die Funktion, Form und Belastungsfähigkeit der Füße aufrechtzuerhalten oder wiederherzustellen sowie Ihre Körperhaltung im Stand und beim Gehen zu verbessern.",
      "Dazu besprechen wir mit Ihrem Arzt, welche individuellen funktionellen Anforderungen die orthopädischen Schuhe haben müssen, damit Sie Ihnen bestmöglich helfen können. Anschließend integrieren wir alle erforderlichen technischen und orthopädischen Elemente in den Schuh.",
      "Gerne berücksichtigen wir auch Ihre Wünsche, beispielsweise in Bezug auf bestimmte Farben, Designs oder Extras wie einen Klettverschluss.",
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
  krankenkasse: {
    eyebrow: "Kostenübernahme",
    title: "Mit Rezept Kostenübernahme durch Krankenkasse",
    paragraphs: [
      "Die Kosten für die orthopädischen Einlagen und Maßschuhe werden in der Regel zu einem Großteil von Ihrer Krankenkasse übernommen – ganz egal, ob Sie gesetzlich oder privat versichert sind. Sie müssen nur einen geringen Eigenanteil bezahlen.",
      "Voraussetzung dafür ist, dass Sie die Schuhe von Ihrem Arzt verschrieben und ein Rezept dafür ausgestellt bekommen. Gerne beraten wir Sie vorab, was auf dem Rezept stehen sollte, damit wir Ihnen die bestmögliche Schuhversorgung bieten können.",
      "Natürlich erhalten Sie bei uns auf Rezept auch alle weiteren Produkte aus dem Bereich der Orthopädieschuhtechnik. Dazu zählen u. a. orthopädische Gesundheitsschuhe, Orthesenschuhe, Therapieschuhe, Schutzschuhe, Sicherheitsschuhe und Arbeitsschuhe sowie sensomotorische Einlagen, Schmetterlingsrollen und Zurichtungen aller Art.",
    ],
  },
  vermessung: {
    eyebrow: "Fußvermessung",
    title: "Fußvermessung im Sanitätshaus oder beim Hausbesuch",
    paragraphs: [
      "Die Passform von orthopädischen Schuhen hat höchste Priorität, um ihre Fußprobleme zu lindern sowie, einen schmerzfreien Gang und die nötigen Stützfunktion zu gewährleisten. Daher vermessen wir die exakten Maße Ihre Füße (Länge, Breite, Höhe, Umfang) und machen zusätzlich einen Abdruck Ihrer Fußsohle. Unsere erfahrenen Orthopädie-Schuhtechniker fertigen dann anhand Ihrer Maße das Schuhwerk in präziser Handarbeit an.",
      "Besuchen Sie uns für eine qualifizierte Beratung und individuelle Vermessung während unserer Öffnungszeiten in unseren Berliner Sanitätshäusern in Kreuzberg, Spandau, Zehlendorf, Tempelhof und Königs Wusterhausen oder in den Filialen unseres Partners Meisterschuh Berlin im Prenzlauer Berg oder in Westend.",
      "Wenn Sie nicht mobil sind, kommt unser Außendienst auch gerne zu Ihnen nach Hause oder in ein Seniorenheim, um einen Fußabdruck vorzunehmen. Vereinbaren Sie dazu bitte einen Termin mit uns. Dieser Service ist für Sie natürlich vollkommen kostenlos.",
    ],
  },
  laufanalyse: {
    eyebrow: "Laufanalyse",
    title: "Laufanalyse und Fußdruckmessung",
    paragraphs: [
      "Als Experten für die Fußgesundheit helfen wir bei Fußfehlstellungen aller Art. Die Rehabilitation, Bewahrung der Mobilität und Versorgung der Füße sind die wichtigsten Funktionen orthopädischer Schuhe und Einlagen. Mithilfe von Laufanalyse, computergestützter Fußdruckmessung und Blauabdruck erstellen unsere Schuhmachermeister für jeden Schuh ein perfektes Fußbett, sodass Sie von höchstem Tragekomfort profitieren.",
      "Insbesondere bei Therapieschuhen für Rheuma- oder Diabetes-Patienten werden orthopädische Maßschuhe nach speziellen Anforderungen hergestellt. Diabetikerschuhe sind besonders komfortabel, weich, vermeiden Druckstellen und das Fußbett wird aus speziell diabetisch geeignetem Material gefertigt, da Diabetiker oft unter einem eingeschränkten oder fehlendem Schmerzempfinden leiden und somit Druckstellen oder Wunden nicht bemerken.",
    ],
  },
  design: {
    eyebrow: "Design & Optik",
    title: "Medizinische Schuhe in Ihrem Wunschdesign",
    paragraphs: [
      "Unsere bequemen Sneakers, Halbschuhe, Sandalen oder Stiefeletten sind so gefertigt, dass sie Druckstellen vermeiden und dem Fuß genügend Platz bieten, was beispielsweise bei Fehlstellungen wie dem Hallux Valgus oder bei Zehenleiden wichtig ist.",
      "Doch auch die Optik sollte nicht vernachlässigt werden, damit Sie sich in Ihren neuen Schuhen auch wohlfühlen. Darum erfolgt die Anfertigung und Zurichtung der orthopädischen Schuhe durch die Spezialisten in unserer Manufaktur nicht nur nach funktionellen Anforderungen, sondern auch nach Ihrem individuellen modischen Geschmack. Dazu bieten wir eine große Auswahl an Modellen, Materialien, Farben und Formen an. Mit uns wird Ihr medizinischer Konfektionsschuh zu Ihrem neuen Lieblingsschuh!",
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu orthopädischen Schuhen oder anderen medizinischen Produkten aus unserem Sortiment? Gerne beraten unsere Experten Sie in unseren Berliner Sanimotion Sanitätshäusern persönlich. Auf Wunsch kommt unser Außendienst für die Beratung, Vermessung und Lieferung innerhalb ganz Berlins und Umgebung auch zu Ihnen nach Hause.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: SchuhePageContent = {
  meta: {
    title: "Modern Orthopedic Shoes in Berlin | Sanimotion Sanitätshaus",
    description:
      "Custom-made, fashionable orthopedic shoes from Sanimotion Sanitätshaus — for more comfort, less pain and greater load-bearing capacity for your feet.",
  },
  hero: {
    eyebrow: "Orthopedic shoes",
    titleLead: "Modern orthopedic shoes",
    titleTail: "for women & men in Berlin",
    lede: "Custom-made, fashionable orthopedic shoes from Sanimotion Sanitätshaus — for more comfort, less pain and greater load-bearing capacity for your feet.",
    intro:
      "When insoles or shoe modifications are no longer enough to relieve foot complaints in a targeted, lasting way, custom orthopedic shoes are the next step. We make modern orthopedic shoes for women and men that don't just relieve your symptoms — they look good too.",
    schuhtypen:
      "Whether leather shoes, sneakers, heels, sandals, slippers, ankle boots or boots: you choose the model and we craft the shoe to match your aesthetic.",
  },
  collaboration: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Close coordination with your physician",
    paragraphs: [
      "Our modern orthopedic shoes for women and men are made to measure by qualified shoemakers and orthopedic shoe technicians in our own Sanimotion shoe workshop in Berlin-Kreuzberg. Our goal is to maintain or restore the function, form and load-bearing capacity of your feet, and to improve your posture when standing and walking.",
      "We discuss with your physician which individual functional requirements the orthopedic shoes need to meet so they can help you as much as possible. We then integrate every necessary technical and orthopedic element into the shoe.",
      "We're happy to honor your wishes too — for example specific colors, designs or extras like a hook-and-loop fastener.",
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
  krankenkasse: {
    eyebrow: "Insurance coverage",
    title: "Costs covered by your health insurance with a prescription",
    paragraphs: [
      "The cost of orthopedic insoles and bespoke shoes is generally covered to a large extent by your health insurance — whether you're publicly or privately insured. You only pay a small co-payment.",
      "The prerequisite is that your physician prescribes the shoes and issues a prescription. We're happy to advise you in advance on what should appear on the prescription so we can give you the best possible footwear care.",
      "On prescription, you'll of course also receive every other product in the field of orthopedic shoe technology — including orthopedic health shoes, orthosis shoes, therapy shoes, protective shoes, safety shoes and work shoes, as well as sensorimotor insoles, butterfly rolls and modifications of every kind.",
    ],
  },
  vermessung: {
    eyebrow: "Foot measurement",
    title: "Foot measurement in store or at your home",
    paragraphs: [
      "The fit of orthopedic shoes has top priority — for relieving foot problems, ensuring a pain-free gait and the necessary support. We therefore take the exact measurements of your feet (length, width, height, circumference) and additionally take an impression of your sole. Our experienced orthopedic shoe technicians then craft the footwear by hand from your measurements.",
      "Visit us for qualified advice and individual measurement during opening hours at our Berlin stores in Kreuzberg, Spandau, Zehlendorf, Tempelhof and Königs Wusterhausen, or at our partner Meisterschuh Berlin in Prenzlauer Berg or Westend.",
      "If you aren't mobile, our field team is also happy to come to your home or to a senior residence to take a foot impression. Just arrange an appointment with us. The service is of course completely free for you.",
    ],
  },
  laufanalyse: {
    eyebrow: "Gait analysis",
    title: "Gait analysis and foot pressure measurement",
    paragraphs: [
      "As experts in foot health we help with foot misalignments of every kind. Rehabilitation, preserving mobility and caring for your feet are the most important functions of orthopedic shoes and insoles. With gait analysis, computer-aided foot pressure measurement and a blueprint impression, our master shoemakers create the perfect footbed for every shoe — so you benefit from the highest level of comfort.",
      "Therapy shoes for patients with rheumatism or diabetes in particular are made to special requirements. Diabetic shoes are especially comfortable and soft, prevent pressure points, and the footbed is made from material specifically suited for diabetics — since diabetics often suffer from limited or absent pain perception and therefore don't notice pressure points or wounds.",
    ],
  },
  design: {
    eyebrow: "Design & aesthetic",
    title: "Medical shoes in your preferred design",
    paragraphs: [
      "Our comfortable sneakers, low shoes, sandals and ankle boots are made to avoid pressure points and give the foot enough room — important for misalignments like hallux valgus or for toe complaints.",
      "But aesthetics shouldn't be neglected either, so you feel good in your new shoes. The specialists in our manufactory therefore craft and modify orthopedic shoes not just to functional requirements but to your individual taste in style. We offer a wide selection of models, materials, colors and shapes. With us, your medical ready-made shoe becomes your new favorite shoe.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about orthopedic shoes or other medical products from our range? Our experts are happy to advise you in person at our Berlin Sanimotion stores. On request, our field team will also come to you for advice, measurement and delivery anywhere in Berlin and the surrounding area.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, SchuhePageContent> = {
  de: schuhePageSchema.parse(de),
  en: schuhePageSchema.parse(en),
};

export const getSchuheContent = (locale: Locale): SchuhePageContent =>
  pages[locale];

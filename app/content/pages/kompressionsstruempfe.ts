/*
 * Kompressionsstrümpfe — sub-page content (DE + EN).
 *
 * Mirrors the structure of sanimotion.com/kompressionsstruempfe-berlin/:
 * hero (split with photo) → product list → service highlights →
 * Kompressionsstrümpfe nach Maß → Wann sinnvoll → Wie funktionieren →
 * Tipps (Maßnehmen / Anziehen / Pflege) → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

const tippSchema = z.object({
  title: z.string(),
  body: z.string(),
});

export const kompressionsstruempfePageSchema = z.object({
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
  products: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  nachMass: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  wann: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  wie: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  tipps: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(tippSchema).length(3),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type KompressionsstruempfePageContent = z.infer<
  typeof kompressionsstruempfePageSchema
>;

const de: KompressionsstruempfePageContent = {
  meta: {
    title: "Kompressionsstrümpfe in Berlin | Sanimotion Sanitätshaus",
    description:
      "Kompressionsstrümpfe für Damen und Herren im Sanimotion Sanitätshaus Berlin – Stützstrümpfe, Anti-Thrombosestrümpfe, Kompressionsstrumpfhosen und Maßanfertigung mit fachkundiger Beratung.",
  },
  hero: {
    eyebrow: "Kompressionsstrümpfe",
    titleLead: "Kompressionsstrümpfe in Berlin",
    titleTail: "Sanimotion Sanitätshaus",
    lede: "Allzweckmittel zur Therapie und Vorbeugung",
    intro: [
      "In Sanimotion Sanitätshaus Berlin und in unserem Online-Shop erhalten Sie Kompressionsstrümpfe für Damen und Herren in allen Varianten und von verschiedenen Marken-Herstellern. Bei Bedarf können wir für die bestmögliche Wirkung auch eine Maßanfertigung vornehmen.",
    ],
  },
  products: {
    eyebrow: "Unser Sortiment",
    title: "Kompressionsstrümpfe für jeden Bedarf",
    items: [
      "Stützstrümpfe",
      "Anti-Thrombosestrümpfe",
      "Ulcerstrümpfe",
      "Kompressionsstrumpfhosen",
      "Kompressionsbekleidung",
      "Rundstrickstrümpfe",
      "Flachstrickstrümpfe",
      "Diabetikersocken",
      "Anziehhilfen",
      "Ausziehhilfen",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was uns auszeichnet",
    items: [
      { icon: "Award", label: "Ausgezeichneter Service" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Layers", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  nachMass: {
    eyebrow: "Maßanfertigung",
    title: "Kompressionsstrümpfe nach Maß",
    paragraphs: [
      "Bei Sanimotion erhalten Sie auch Kompressionsstrümpfe nach Maß – für den optimalen Sitz und die bestmögliche Wirkung. Die Vermessung können Sie in einem unserer Berliner Sanitätshäuser in Spandau, Zehlendorf und Kreuzberg sowie in Königs Wusterhausen vornehmen lassen. Anschließend werden die Strümpfe für die Venentherapie individuell für Sie angefertigt.",
      "Auf Ihren Wunsch hin kommt unser Außendienst für das Anmessen auch gerne zu Ihnen nach Hause. Der Hausbesuch ist für Sie vollkommen kostenlos.",
    ],
  },
  wann: {
    eyebrow: "Indikationen",
    title: "Wann Kompressionsstrümpfe sinnvoll sind",
    paragraphs: [
      "Mit medizinischen Kompressionsstrümpfen werden unter anderem Krampfadern, Venenschwäche, Beinvenenthrombosen und deren Folgen, das Lymphödem und das Lipödem behandelt. Auch zur Thromboseprophylaxe zum Beispiel für Reisen mit dem Flugzeug verordnen Ärzte zur Standardtherapie oft Kompressionsstrümpfe, um einem Blutgerinnsel vorzubeugen.",
      "In der Schwangerschaft oder beim Sport (Joggen, Skifahren, Wandern etc.) kann das Tragen von Strumpfsystemen ebenfalls sinnvoll sein, um durch den Druck auf die Venen die Leistung der Muskelpumpe und die Durchblutung der Beine zu verbessern.",
      "Ein Rezept für Kompressionsstrümpfe erhalten Sie von Ihrem Arzt. In dem Fall werden die Kosten für die Strümpfe in der Regel weitgehend von Ihrer Krankenkasse übernommen, auch wenn es sich um eine Sonderanfertigung handelt.",
    ],
  },
  wie: {
    eyebrow: "Wirkungsweise",
    title: "Wie Kompressionsstrümpfe funktionieren",
    paragraphs: [
      "Die Hauptfunktion von Kompressionsstrümpfen ist es, den Venen die Arbeit zu erleichtern. Dies geschieht dadurch, dass die Strümpfe sehr feinmaschig gewebt sind und dadurch Druck auf die Venen in den Beinen ausüben.",
      "Dieser Druck hilft, das Blut wieder effektiver in Richtung Herz zu transportieren und verhindert zudem, dass im Laufe des Tages Flüssigkeit ins Gewebe absackt.",
      "Bei entsprechender Indikation kann der Arzt medizinische Kompressionsstrümpfe per Rezept verschreiben, wodurch der Patient lediglich einen geringen Teil der Kosten selbst tragen muss.",
    ],
  },
  tipps: {
    eyebrow: "Praxis",
    title: "Tipps zum Maßnehmen, Anziehen und zur Pflege",
    items: [
      {
        title: "Maßnehmen",
        body:
          "Nur wenn die Strümpfe perfekt sitzen, können sie optimal helfen. Daher vermessen wir Ihre Beine bei einer individuellen Beratung in unseren Sanitätshäusern in Berlin. Am besten besuchen Sie uns zur Vermessung morgens, wenn Ihre Beine noch nicht angeschwollen sind.",
      },
      {
        title: "Anziehen",
        body:
          "Kompressionsstrümpfe sind sehr eng. Daher braucht es etwas Übung, um sie richtig anzuziehen. Zunächst sollten Sie den Strumpf bis zum Fuß auf links ziehen. Starten Sie dann mit den Zehen und ziehen Sie den Strumpf langsam über die Ferse, bevor Sie sich Schritt für Schritt am Bein hocharbeiten, ohne dabei am Abschlussrand zu ziehen.",
      },
      {
        title: "Pflege",
        body:
          "Bei täglichem Tragen empfehlen wir, Ihre Kompressionssocken, Kompressionsstrümpfe oder Kompressionsschenkelstrümpfe täglich zu waschen. Dadurch bleibt der Strumpf nicht nur sauber, sondern die Kompressionswirkung kann bis zu sechs Monaten erhalten bleiben.",
      },
    ],
  },
  contact: {
    eyebrow: "Ihr Draht zum Sanimotion Sanitätshaus Berlin",
    title: "Kontakt & Beratung",
    paragraphs: [
      "Haben Sie Fragen zu Kompressionsstrümpfen oder unseren anderen Angeboten? Bei uns erhalten Sie viele weitere Sanitätsartikel und Hilfsmittel wie zum Beispiel medizinische Bandagen und orthopädische Einlagen. Gerne beraten wir Sie in unseren Sanitätshäusern oder bei Ihnen zu Hause persönlich und mit viel Feingefühl.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: KompressionsstruempfePageContent = {
  meta: {
    title: "Compression stockings in Berlin | Sanimotion Sanitätshaus",
    description:
      "Compression stockings for women and men at Sanimotion Sanitätshaus Berlin — support stockings, anti-thrombosis stockings, compression tights and made-to-measure care with expert advice.",
  },
  hero: {
    eyebrow: "Compression stockings",
    titleLead: "Compression stockings in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "An all-purpose tool for therapy and prevention",
    intro: [
      "At Sanimotion Sanitätshaus Berlin and in our online shop you'll find compression stockings for women and men in every variant and from a range of leading manufacturers. Where helpful, we also produce made-to-measure stockings for the best possible fit and effect.",
    ],
  },
  products: {
    eyebrow: "Our range",
    title: "Compression stockings for every need",
    items: [
      "Support stockings",
      "Anti-thrombosis stockings",
      "Ulcer stockings",
      "Compression tights",
      "Compression apparel",
      "Circular-knit stockings",
      "Flat-knit stockings",
      "Diabetic socks",
      "Donning aids",
      "Doffing aids",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What sets us apart",
    items: [
      { icon: "Award", label: "Outstanding service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Layers", label: "A huge selection" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  nachMass: {
    eyebrow: "Made to measure",
    title: "Compression stockings, custom-fitted",
    paragraphs: [
      "Sanimotion also offers made-to-measure compression stockings — for the most accurate fit and the best therapeutic effect. We can take your measurements at any of our Berlin stores in Spandau, Zehlendorf and Kreuzberg, as well as in Königs Wusterhausen. Your stockings for venous therapy are then crafted individually for you.",
      "On request, our outreach team will gladly come to your home for the fitting. Home visits are completely free of charge.",
    ],
  },
  wann: {
    eyebrow: "When they help",
    title: "When compression stockings make sense",
    paragraphs: [
      "Medical compression stockings are used to treat varicose veins, venous insufficiency, deep-vein thrombosis and its sequelae, lymphoedema and lipoedema. Doctors also frequently prescribe compression stockings as standard therapy for thrombosis prophylaxis, for instance during long-haul flights, to help prevent blood clots.",
      "During pregnancy or for sports (running, skiing, hiking and so on), wearing compression hosiery can also be beneficial: the pressure on the veins supports the calf-muscle pump and improves circulation in the legs.",
      "Your doctor can issue a prescription for compression stockings. In that case the costs are generally covered to a large extent by your health insurance — even when the stockings are made to measure.",
    ],
  },
  wie: {
    eyebrow: "How they work",
    title: "How compression stockings work",
    paragraphs: [
      "The primary job of compression stockings is to make life easier for your veins. The very fine knit applies graduated pressure to the veins in the legs.",
      "This pressure helps return blood more effectively towards the heart and prevents fluid from settling in the tissue over the course of the day.",
      "When indicated, your doctor can prescribe medical compression stockings, so that you typically pay only a small share of the cost yourself.",
    ],
  },
  tipps: {
    eyebrow: "In practice",
    title: "Tips for measuring, putting on and caring for them",
    items: [
      {
        title: "Measuring",
        body:
          "Stockings only deliver their full benefit when the fit is perfect. That's why we measure your legs during a personal consultation in our Berlin stores. Ideally come in the morning, before your legs have started to swell.",
      },
      {
        title: "Putting them on",
        body:
          "Compression stockings are very tight, so a little practice helps. First turn the stocking inside out down to the foot. Start with your toes and slowly draw the stocking over the heel, then work it up your leg step by step — without pulling at the top band.",
      },
      {
        title: "Care",
        body:
          "If you wear them every day, we recommend washing your compression socks, stockings or thigh-highs daily. That keeps them clean and helps the compression effect last for up to six months.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice and appointments",
    paragraphs: [
      "Questions about compression stockings or any of our other products? We also stock a wide range of medical supplies and aids, including medical bandages and orthopaedic insoles. We're happy to advise you in our stores or at home — personally and with great care.",
      "Give us a call or send us an email.",
      "We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, KompressionsstruempfePageContent> = {
  de: kompressionsstruempfePageSchema.parse(de),
  en: kompressionsstruempfePageSchema.parse(en),
};

export const getKompressionsstruempfeContent = (
  locale: Locale,
): KompressionsstruempfePageContent => pages[locale];

/*
 * Orthesen — landing page content (DE + EN).
 *
 * Mirrors sanimotion.com/orthesen-berlin/: hero (split with photo) → types
 * grid → Maßanfertigung intro (with photo) → 5 service highlights →
 * Krankenkasse → Persönliche Beratung story → Orthesen von Kopf bis Fuß
 * detail blocks → contact. Copy is sourced verbatim from the reference page.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const detailBlockSchema = z.object({
  title: z.string(),
  paragraph: z.string(),
});

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const orthesenPageSchema = z.object({
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
    typesIntro: z.string(),
    types: z.array(z.string()).min(1),
  }),
  massanfertigung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(5),
  }),
  krankenkasse: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  beratung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  details: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    blocks: z.array(detailBlockSchema).min(1),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type OrthesenPageContent = z.infer<typeof orthesenPageSchema>;

const de: OrthesenPageContent = {
  meta: {
    title: "Orthesen Berlin | Sanimotion Sanitätshaus",
    description:
      "Orthesen vom Sanimotion Sanitätshaus Berlin – vorkonfektioniert und maßangefertigt für Kinder und Erwachsene. Knie, Sprunggelenk, Rücken & mehr.",
  },
  hero: {
    eyebrow: "Orthesen",
    titleLead: "Orthesen",
    titleTail: "im Sanimotion Sanitätshaus Berlin",
    lede: "Orthetik für Kinder und Erwachsene – vorkonfektioniert und maßangefertigt.",
    intro:
      "Eine Orthese lindert Schmerzen, stabilisiert Gelenke und beugt Fehlbewegungen vor. Im Sanimotion Berlin Sanitätshaus erhalten Sie Orthesen und medizinische Bandagen von Top-Marken wie z. B. Bauerfeind, Sporlastic und Bort Medical für alle Gelenke und Körperteile. Unser Fachpersonal berät Sie hierzu gerne und gibt auch wertvolle Tipps zum Anlegen und zur Reinigung.",
    typesIntro:
      "In unseren Sanimotion Sanitätshäusern in Berlin erhalten Sie ein umfassendes Sortiment an Orthesen für alle Körperregionen:",
    types: [
      "Knieorthesen",
      "Sprunggelenkorthesen",
      "Knöchelorthesen (AFO)",
      "Fußorthesen (DAFO)",
      "Daumenorthesen",
      "Handgelenkorthesen",
      "Beinorthesen",
      "Unterschenkelorthesen",
      "Rückenorthesen",
      "Halsorthese / Halskrause",
      "Ellenbogenorthesen",
      "Schulterorthesen",
      "Armorthesen",
      "Orthesenschuhe",
      "Hüftorthesen",
      "Epithesen (auf Anfrage)",
    ],
  },
  massanfertigung: {
    eyebrow: "Eigene Orthopädie-Werkstatt in Kreuzberg",
    title: "Maßanfertigung für die optimale Wirkung",
    paragraphs: [
      "Im Gegensatz zu medizinischen Bandagen sind Orthesen komplexe Konstruktionen, die aus festeren Materialien gefertigt werden und das verletzte Gelenk oder ein Körperteil umschließen. Deshalb passen unsere Orthopädietechniker die Orthesen genau auf Ihren Körper und Ihre Statur an.",
      "Die Anfertigung und Anpassungen erfolgen direkt in unserer eigenen Sanimotion Orthopädie-Werkstatt in Berlin-Kreuzberg.",
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
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  krankenkasse: {
    eyebrow: "Kostenübernahme",
    title: "Vermessung, Auswahl & Anprobe – alles auf Rezept",
    paragraphs: [
      "Eine Orthese und Epithese können Sie von Ihrem Arzt verschreiben bekommen. In den meisten Fällen werden die Kosten voll oder zumindest teilweise von der Krankenkasse getragen. Kommen Sie einfach mit dem Rezept für die Vermessung, Auswahl und Anprobe in eines unserer Berliner Sanitätshäuser.",
      "Gerne kommen wir mit unserem Außendienst für die Beratung, Vermessung und Lieferung auch zu Ihnen nach Hause. Unser Hausbesuch-Service ist für Sie vollkommen kostenlos. Bitte vereinbaren Sie dafür vorab einen Termin.",
    ],
  },
  beratung: {
    eyebrow: "Persönliche Beratung",
    title: "Orthesen für Therapie, Reha und Sport",
    paragraphs: [
      "Orthesen kommen häufig zur Therapie bei Bänder- oder Sehnenverletzungen wie einem Kreuzbandriss, einem Achillessehnenriss oder einer Sprunggelenksverletzung zum Einsatz. Auch bei Arthrose, Gonarthrose und Osteoporose sowie anderen chronischen Krankheiten werden Orthesen und Orthesensysteme zur Stabilisierung verwendet, um die Lebensqualität der Betroffenen zu erhalten.",
      "Sportler nutzen Knie-, Fuß- oder Handschienen zudem als vorbeugende Maßnahme, um Gelenke und Bänder vor übermäßiger Beanspruchung zu schützen. Diese vorbeugenden Orthesen sind dehnbar, sanft zur Haut, atmungsaktiv und waschbar.",
      "Gerne beraten unsere Experten Sie in allen Fragen rund um Orthesenversorgung, Orthopädiebedarf, Rehatechnik, Orthopädieschuhtechnik, Epithetik, Prothetik und andere Versorgungslösungen.",
    ],
  },
  details: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Orthesen von Kopf bis Fuß",
    intro:
      "Zugunsten eines besseren Heilungsprozesses schränken Orthesen Körperregionen und Gelenke gezielt ein oder stellen diese komplett ruhig. Anders als ein Gips, können Orthesen mithilfe von Gurten, Schienen oder Stäben jedoch auch so eingestellt werden, dass sie Bewegungen bis zu einem bestimmten Grad kontrolliert zulassen. In unseren Berliner Sanimotion Sanitätshäusern in Spandau und Zehlendorf erhalten Sie vom Kopf bis zum Fuß alle möglichen Orthesen inkl. Sonderanfertigungen aller Art.",
    blocks: [
      {
        title: "Knieorthesen",
        paragraph:
          "Knieorthesen können helfen, das Kniegelenk nach einer Verletzung, wie beispielsweise einem Kreuzbandriss, zu stabilisieren, es ruhig zu stellen und falsche Bewegungen zu eliminieren. Flexiblere Knieorthesen werden gerne von Leistungssportlern genutzt, um das Knie während des Sports zu unterstützen und somit Verletzungen vorzubeugen.",
      },
      {
        title: "Sprunggelenkorthesen",
        paragraph:
          "Fuß- und Sprunggelenkorthesen können entweder zur prophylaktischen Stütz- und Schutzfunktion dienen, oder das Gelenk nach einem Bänderriss ruhig stellen. Im Zusammenspiel mit der richtigen Therapie beschleunigen sie den Heilungsprozess und ermöglichen einen beschwerdefreien Alltag. Wir bieten auch dynamische Fußorthesen nach Nancy Hylton an.",
      },
      {
        title: "Daumenorthesen",
        paragraph:
          "Das Daumengelenk ist eines der am häufigsten genutzten Gelenke. Orthesen helfen einen überanspruchten oder verletzten Daumen ruhig zu stellen und beschleunigen somit den Heilungsprozess.",
      },
      {
        title: "Handgelenkorthesen",
        paragraph:
          "Ob beim Greifen, Halten oder Stützen, das Handgelenk ist immer in Bewegung und trägt oftmals eine große Last. Es kann schnell zu Reizungen oder Überlastungen kommen, die eine komplette Ruhigstellung benötigen. Handgelenkorthesen stützen das Gelenk, stellen es ruhig und entlasten es, um eine schnellere Heilung zu gewährleisten.",
      },
      {
        title: "Rückenorthesen",
        paragraph:
          "Bei Problemen mit dem Ischiasnerv oder nach einem Hexenschuss wirkt eine Rückenorthese ähnlich wie ein (maßgeschneidertes) Korsett. Je nach Krankheitsbild sind Rücken- bzw. Rumpforthesen flexibel oder stabil flexibel, unterstützen nur einen bestimmten Lendenwirbelbereich oder die gesamte Wirbelsäule. Ziel ist es, den schmerzenden Rückenbereich zu stützen, den Bewegungsspielraum einzuschränken oder den Rücken ruhigzustellen.",
      },
      {
        title: "Fußorthesen",
        paragraph:
          "Von der Sportverletzung über Gelenkprobleme, Fehlstellungen und Schmerzen in der Achillessehne bis zur chronischen Erkrankung – maßgefertigte und vorkonfektionierte Fußorthesen für mehr Bewegung und weniger Schmerzen. Unsere hochwertigen und komfortablen Orthesen und medizinischen Bandagen für Ihre Füße versprechen individuellen Tragekomfort, mehr Stabilität und Entlastung sowie ein rundes Gangbild.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu unseren Orthesen oder anderen medizinischen Produkten aus unserem breiten Angebot? Bei uns erhalten Sie unter anderem auch Prothesen und orthopädische Maßschuhe. Gerne beraten unsere Experten Sie persönlich – in unseren Sanimotion Sanitätshaus Berlin oder bei einem Hausbesuch durch unseren Außendienst.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: OrthesenPageContent = {
  meta: {
    title: "Orthoses in Berlin | Sanimotion Sanitätshaus",
    description:
      "Orthoses from Sanimotion Sanitätshaus Berlin — off-the-shelf and custom-made for children and adults. Knee, ankle, back and more.",
  },
  hero: {
    eyebrow: "Orthoses",
    titleLead: "Orthoses",
    titleTail: "at Sanimotion Sanitätshaus Berlin",
    lede: "Orthotics for children and adults — off-the-shelf and custom-made.",
    intro:
      "An orthosis relieves pain, stabilises joints and prevents incorrect movement. At Sanimotion Sanitätshaus Berlin you'll find orthoses and medical bandages from leading brands such as Bauerfeind, Sporlastic and Bort Medical for every joint and body region. Our specialists are happy to advise you and share valuable tips on fitting and care.",
    typesIntro:
      "At our Sanimotion stores in Berlin you'll find a comprehensive range of orthoses for every part of the body:",
    types: [
      "Knee orthoses",
      "Ankle orthoses",
      "Ankle-foot orthoses (AFO)",
      "Foot orthoses (DAFO)",
      "Thumb orthoses",
      "Wrist orthoses",
      "Leg orthoses",
      "Lower-leg orthoses",
      "Back orthoses",
      "Cervical collar",
      "Elbow orthoses",
      "Shoulder orthoses",
      "Arm orthoses",
      "Orthotic shoes",
      "Hip orthoses",
      "Epitheses (on request)",
    ],
  },
  massanfertigung: {
    eyebrow: "Our own workshop in Kreuzberg",
    title: "Custom-made for optimal effect",
    paragraphs: [
      "Unlike medical bandages, orthoses are complex constructions made from firmer materials that enclose the injured joint or body part. That's why our orthopedic technicians fit each orthosis precisely to your body and physique.",
      "Production and fitting take place directly in our own Sanimotion orthopedic workshop in Berlin-Kreuzberg.",
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
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  krankenkasse: {
    eyebrow: "Insurance coverage",
    title: "Measurement, selection & fitting — all on prescription",
    paragraphs: [
      "Your physician can prescribe both an orthosis and an epithesis. In most cases the costs are covered fully or at least partially by your health insurance. Just bring the prescription to one of our Berlin stores for measurement, selection and fitting.",
      "Our field team is happy to come to your home for advice, measurement and delivery. Our home-visit service is completely free of charge. Please arrange an appointment in advance.",
    ],
  },
  beratung: {
    eyebrow: "Personal consultation",
    title: "Orthoses for therapy, rehab and sport",
    paragraphs: [
      "Orthoses are often used to treat ligament or tendon injuries such as a torn cruciate ligament, a ruptured Achilles tendon or an ankle injury. They also stabilise joints in conditions like arthrosis, gonarthrosis, osteoporosis and other chronic diseases — preserving quality of life for those affected.",
      "Athletes also use knee, foot or hand braces as a preventive measure to protect joints and ligaments from excessive strain. These preventive orthoses are stretchy, gentle on the skin, breathable and washable.",
      "Our experts are happy to advise you on all questions around orthotic care, orthopedic supplies, rehab technology, orthopedic shoe technology, epithetics, prosthetics and other care solutions.",
    ],
  },
  details: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Orthoses from head to toe",
    intro:
      "To support better healing, orthoses selectively limit body regions and joints — or immobilise them entirely. Unlike a cast, however, orthoses can also be set with straps, splints or rods to allow controlled movement up to a defined degree. At our Berlin Sanimotion stores in Spandau and Zehlendorf, you'll find orthoses from head to toe, including custom work of every kind.",
    blocks: [
      {
        title: "Knee orthoses",
        paragraph:
          "Knee orthoses can help to stabilise the knee joint after an injury such as a torn cruciate ligament, immobilise it and eliminate incorrect movements. More flexible knee orthoses are popular with competitive athletes to support the knee during sport and prevent injuries.",
      },
      {
        title: "Ankle orthoses",
        paragraph:
          "Foot and ankle orthoses can either provide prophylactic support and protection or immobilise the joint after a torn ligament. Combined with the right therapy, they speed up recovery and allow a pain-free everyday life. We also offer dynamic foot orthoses to the Nancy Hylton method.",
      },
      {
        title: "Thumb orthoses",
        paragraph:
          "The thumb joint is one of the most frequently used joints. Orthoses help to immobilise an overstrained or injured thumb and speed up the healing process.",
      },
      {
        title: "Wrist orthoses",
        paragraph:
          "Whether gripping, holding or supporting, the wrist is constantly in motion and often bears a heavy load. Irritation or overload can quickly occur, requiring complete immobilisation. Wrist orthoses support the joint, immobilise and relieve it, ensuring faster healing.",
      },
      {
        title: "Back orthoses",
        paragraph:
          "For sciatic nerve problems or after a back strain, a back orthosis acts much like a (custom-made) corset. Depending on the condition, back and trunk orthoses are flexible or stably flexible, supporting either a specific lumbar area or the entire spine. The aim is to support the painful back area, limit range of motion or fully immobilise the back.",
      },
      {
        title: "Foot orthoses",
        paragraph:
          "From sports injuries through joint problems, misalignments and Achilles tendon pain to chronic conditions — custom-made and off-the-shelf foot orthoses for more movement and less pain. Our high-quality, comfortable orthoses and medical bandages for your feet promise individual wearing comfort, greater stability and relief, and a smoother gait.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about our orthoses or other medical products from our broad range? With us you'll also find prosthetics and custom orthopedic shoes, among others. Our experts are happy to advise you in person — at our Berlin Sanimotion stores or during a home visit by our field team.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, OrthesenPageContent> = {
  de: orthesenPageSchema.parse(de),
  en: orthesenPageSchema.parse(en),
};

export const getOrthesenContent = (locale: Locale): OrthesenPageContent =>
  pages[locale];

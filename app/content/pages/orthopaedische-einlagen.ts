/*
 * Orthopädische Einlagen — landing page content (DE + EN).
 *
 * Mirrors sanimotion.com/orthopaedische-einlagen-berlin/: hero → intro
 * (with shoe-type list) → Krankenkasse → service highlights → Fußabdruck
 * (with photo) → Maßanfertigung detail blocks → contact. Copy is sourced
 * verbatim from the reference page.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const sectionSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  paragraphs: z.array(z.string()).min(1),
});

const detailBlockSchema = z.object({
  title: z.string(),
  paragraph: z.string(),
});

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

export const einlagenPageSchema = z.object({
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
    schuhtypenIntro: z.string(),
    schuhtypen: z.array(z.string()).min(1),
  }),
  krankenkasse: sectionSchema,
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  fussabdruck: sectionSchema,
  massanfertigung: z.object({
    eyebrow: z.string(),
    title: z.string(),
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
export type EinlagenPageContent = z.infer<typeof einlagenPageSchema>;

const de: EinlagenPageContent = {
  meta: {
    title:
      "Orthopädische Einlagen Berlin | Sanimotion Sanitätshaus",
    description:
      "Maßgefertigte orthopädische Einlagen vom Sanimotion Sanitätshaus Berlin – stützen und entlasten den Fuß und korrigieren Fehlstellungen schonend.",
  },
  hero: {
    eyebrow: "Orthopädische Einlagen",
    titleLead: "Orthopädische Einlagen",
    titleTail: "im Sanimotion Sanitätshaus Berlin",
    lede: "Dank Maßanfertigung durch Orthopädie-Schuhtechnik mehr Freude an der Bewegung.",
    intro:
      "Wenn Sie Schmerzen oder Probleme beim Gehen haben, können Ihnen unsere orthopädischen Einlagen helfen. Unsere maßgefertigten Schuheinlagen stützen und entlasten den Fuß und können Fehlstellungen schonend korrigieren.",
    schuhtypenIntro:
      "In unseren Sanimotion Sanitätshaus Berlin erhalten Sie Einlagen für Herrenschuhe, Damenschuhe und Kinderschuhe aller Art:",
    schuhtypen: [
      "Freizeitschuhe",
      "Hausschuhe",
      "Sandalen",
      "Tanzschuhe",
      "Sportschuhe",
      "Businessschuhe",
      "Pumps & Absatzschuhe",
      "Arbeitsschuhe",
      "Sicherheitsschuhe",
      "Wanderschuhe",
    ],
  },
  krankenkasse: {
    eyebrow: "Kostenübernahme",
    title: "Kostenübernahme durch Krankenkasse",
    paragraphs: [
      "Sie haben Anspruch auf zwei Paar ärztlich verordneter Einlagen pro Jahr. Voraussetzung dafür ist, dass Sie die Einlagen von Ihrem Arzt verschrieben und ein Rezept dafür ausgestellt bekommen.",
      "Die Kosten für orthopädische und sensomotorische Einlagen werden dann in der Regel zu einem Großteil von Ihrer Krankenkasse übernommen – ganz egal, ob Sie gesetzlich oder privat versichert sind. Sie müssen nur einen geringen Eigenanteil bezahlen.",
      "Gerne beraten wir Sie, was auf dem Rezept stehen sollte, damit wir Ihnen die bestmögliche Einlagenversorgung bieten können.",
    ],
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was Sie bei uns erwartet.",
    items: [
      { icon: "Award", label: "Ausgezeichneter Service" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Boxes", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  fussabdruck: {
    eyebrow: "Fußabdruck",
    title: "Fußabdruck im Sanitätshaus oder beim Hausbesuch",
    paragraphs: [
      "Besuchen Sie uns einfach während unserer Öffnungszeiten in einem unserer Berliner Sanimotion Sanitätshäuser in Spandau oder Zehlendorf bei in den Filialen unseres Partners »Meisterschuh Berlin« in Kreuzberg oder Westend.",
      "Wenn Sie nicht mobil sind, kommt unser Außendienst auch gerne zu Ihnen nach Hause, um einen Fußabdruck für passgenaue Einlagen vorzunehmen. Vereinbaren Sie dazu bitte einen Termin.",
    ],
  },
  massanfertigung: {
    eyebrow: "Maßanfertigung",
    title: "Maßgefertigte Einlagen, weil jeder Fuß anders ist",
    blocks: [
      {
        title: "Schmerzlinderung & rundes Gangbild",
        paragraph:
          "Gesunde Füße sind das A und O für unsere Mobilität. Doch wie sehr sie unser Wohlergehen beeinflussen, merken wir oft erst, wenn wir Fußschmerzen haben, Beschwerden beim Gehen auftreten oder wir von Fußfehlstellungen betroffen sind. Diese sowie falsches Schuhwerk können zu Problemen wie Knieschmerzen, Rückenschmerzen oder einer ungesunden Körperhaltung führen. Unsere orthopädischen Schuheinlagen tragen zu einer Schmerzlinderung und einem natürlicheren Bewegungsablauf bei.",
      },
      {
        title: "Muskulatur stärken & Fehlstellungen korrigieren",
        paragraph:
          "Der Fuß ist ein komplexes Gebilde und wird von einem Zusammenspiel aus vielen Muskeln, Sehnen und Bändern aufgespannt. Versagt eines dieser Elemente, kann es über einen Zeitraum zu Beschwerden, Funktionsstörungen und anderen Fußproblemen kommen. Dazu zählen z. B. der Senkfuß, Hohlfuß, Knickfuß oder Plattfuß. Orthopädische Einlagen greifen dann durch ihre spezielle Form gezielt ein, um den Fuß und die Muskulatur zu stärken, Schmerzen zu lindern und Fehlstellungen zu korrigieren.",
      },
      {
        title: "Hochwertige Materialien für Ihren Tragekomfort",
        paragraph:
          "Je nach Einlage lassen sich Fehlstellungen wie der Knick-Senk-Spreizfuß, Fersensporn oder Hallux rigidus und auch Diabetes hervorragend therapieren. Da unterschiedliche Probleme auch unterschiedliche Lösungen verlangen, gibt es Einlagen aus vielen verschiedenen Materialien und mit unterschiedlichsten Profilen. Beispielsweise sorgen Sporteinlagen für Laufschuhe nicht nur für einen geschmeidigeren Bewegungsablauf, sondern sind auch besonders atmungsaktiv und aus einem robusteren Material für zusätzliche Polsterung und extra Halt gefertigt. Natürlich bieten wir für Kinderfüße auch maßgefertigte Kindereinlagen an.",
      },
      {
        title: "Fußdruckmessung & Ganganalyse",
        paragraph:
          "Die Einlagenfertigung für Ihre Schuhe wird von unseren erfahrenen Orthopädie-Schuhtechnikern und Schuhmachern nach einer Fußdruckmessung in unserer eigenen Sanimotion-Werkstatt in Berlin-Kreuzberg vorgenommen. Zudem bieten wir eine Ganganalyse bzw. Laufbandanalyse an. Sollten medizinische Einlagen für Ihr spezifisches Krankheitsbild nicht ausreichen, können wir auch eine Schuhzurichtung vornehmen, eine Fußbettung einbauen oder Ihnen komplett neue orthopädische Schuhe anfertigen. Eine optimale Passform sorgt für höchsten Tragekomfort, ganz gleich welches Schuhmodell sie wählen.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu orthopädischen Schuheinlagen oder anderen medizinischen Produkten aus unserem breiten Angebot? Bei uns erhalten Sie unter anderem auch Kompressionsstrümpfe und orthopädische Maßschuhe. Gerne beraten unsere Experten Sie persönlich in unseren Sanimotion Sanitätshaus Berlin oder bei einem Hausbesuch bei Ihnen.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: EinlagenPageContent = {
  meta: {
    title:
      "Orthopedic insoles in Berlin | Sanimotion Sanitätshaus",
    description:
      "Custom-made orthopedic insoles from Sanimotion Sanitätshaus Berlin — supporting and relieving the foot and gently correcting misalignments.",
  },
  hero: {
    eyebrow: "Orthopedic insoles",
    titleLead: "Orthopedic insoles",
    titleTail: "at Sanimotion Sanitätshaus Berlin",
    lede: "More joy in movement, thanks to custom work by orthopedic shoe technicians.",
    intro:
      "If you have pain or trouble walking, our orthopedic insoles can help. Our custom-made shoe insoles support and relieve the foot and can gently correct misalignments.",
    schuhtypenIntro:
      "At Sanimotion Sanitätshaus Berlin, we make insoles for men's, women's and children's shoes of every kind:",
    schuhtypen: [
      "Casual shoes",
      "Slippers",
      "Sandals",
      "Dance shoes",
      "Sports shoes",
      "Business shoes",
      "Pumps & heels",
      "Work shoes",
      "Safety shoes",
      "Hiking shoes",
    ],
  },
  krankenkasse: {
    eyebrow: "Insurance coverage",
    title: "Costs covered by your health insurance",
    paragraphs: [
      "You're entitled to two pairs of doctor-prescribed insoles per year. The prerequisite is that your physician prescribes the insoles and issues a prescription.",
      "The cost of orthopedic and sensorimotor insoles is then generally covered to a large extent by your health insurance — whether you're publicly or privately insured. You only pay a small co-payment.",
      "We're happy to advise you on what should appear on the prescription so we can give you the best possible insole care.",
    ],
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What you can expect from us.",
    items: [
      { icon: "Award", label: "Outstanding service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Boxes", label: "Extensive range" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  fussabdruck: {
    eyebrow: "Foot impression",
    title: "Foot impression in store or at your home",
    paragraphs: [
      "Visit us during opening hours at one of our Berlin Sanimotion stores in Spandau or Zehlendorf, or at our partner »Meisterschuh Berlin« in Kreuzberg or Westend.",
      "If you aren't mobile, our field team is happy to come to your home to take a foot impression for perfectly fitted insoles. Just arrange an appointment with us.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom work",
    title: "Custom-made insoles — because every foot is different",
    blocks: [
      {
        title: "Pain relief & a smooth gait",
        paragraph:
          "Healthy feet are the be-all and end-all of our mobility. Yet we often only notice how much they affect our well-being when we have foot pain, complaints when walking or are affected by foot misalignments. These — together with the wrong footwear — can lead to problems like knee pain, back pain or unhealthy posture. Our orthopedic insoles contribute to pain relief and a more natural movement pattern.",
      },
      {
        title: "Strengthen muscles & correct misalignments",
        paragraph:
          "The foot is a complex structure, held together by an interplay of many muscles, tendons and ligaments. If one of these elements fails, complaints, dysfunction and other foot problems can develop over time. These include the fallen arch, hollow foot, knock-foot or flat foot. Through their special shape, orthopedic insoles intervene precisely — to strengthen the foot and its musculature, relieve pain and correct misalignments.",
      },
      {
        title: "High-quality materials for your wearing comfort",
        paragraph:
          "Depending on the insole, misalignments such as the knock-flat-splay foot, heel spur or hallux rigidus — and even diabetes — can be treated excellently. Because different problems demand different solutions, insoles come in many different materials and with widely varying profiles. Sport insoles for running shoes, for example, not only enable a smoother movement pattern, but are also especially breathable and made from a more robust material for extra cushioning and additional support. We of course also make custom children's insoles.",
      },
      {
        title: "Foot pressure measurement & gait analysis",
        paragraph:
          "Insole production for your shoes is carried out by our experienced orthopedic shoe technicians and shoemakers after a foot pressure measurement in our own Sanimotion workshop in Berlin-Kreuzberg. We also offer gait analysis and treadmill analysis. If medical insoles are not enough for your specific condition, we can also carry out shoe modifications, build in a footbed or craft completely new orthopedic shoes for you. An optimal fit ensures the highest level of wearing comfort — no matter which shoe model you choose.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about orthopedic shoe insoles or other medical products from our broad range? With us, you'll also find compression stockings and custom orthopedic shoes, among others. Our experts are happy to advise you in person at our Berlin Sanimotion stores or during a home visit.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, EinlagenPageContent> = {
  de: einlagenPageSchema.parse(de),
  en: einlagenPageSchema.parse(en),
};

export const getEinlagenContent = (locale: Locale): EinlagenPageContent =>
  pages[locale];

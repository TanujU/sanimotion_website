/*
 * Reha-Technik — sub-page content (DE + EN).
 *
 * DE copy is verbatim from sanimotion.com/reha-technik-berlin/, supplied
 * by the site owner. Sections: hero → leistungen (Anamnese / Inter-
 * disziplinär / Rezept & Abrechnung) → Versorgungsweg (4 Schritte) →
 * highlights → detail (750 Produkte) → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

const leistungSchema = z.object({
  title: z.string(),
  body: z.array(z.string()).min(1),
});

export const rehaTechnikPageSchema = z.object({
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
    cta: z.object({ label: z.string(), href: z.string() }),
  }),
  leistungen: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(leistungSchema).length(3),
    cta: z.object({ label: z.string(), href: z.string() }),
  }),
  weg: z.object({
    eyebrow: z.string(),
    title: z.string(),
    steps: z.array(z.string()).length(4),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  detail: z.object({
    eyebrow: z.string(),
    stat: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    cta: z.object({ label: z.string(), href: z.string() }),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type RehaTechnikPageContent = z.infer<typeof rehaTechnikPageSchema>;

const de: RehaTechnikPageContent = {
  meta: {
    title: "Reha-Technik in Berlin | Sanimotion Sanitätshaus",
    description:
      "Reha-Technik im Sanimotion Sanitätshaus Berlin – maßgefertigte orthopädische Hilfsmittel bei Schlaganfall, Multipler Sklerose, ICP oder ALS. Anamnese, eigene Werkstatt, interdisziplinäre Versorgung.",
  },
  hero: {
    eyebrow: "Reha-Technik",
    titleLead: "Reha-Technik in Berlin",
    titleTail: "Sanimotion Sanitätshaus",
    lede:
      "Mit maßgefertigten orthopädischen Hilfsmitteln im Alltag mobil bleiben trotz Schlaganfall, Multiple Sklerose, ICP oder ALS",
    intro: [
      "Wenn Patienten an einer dauerhaften Nervenschädigung leiden oder einen Schlaganfall erlitten haben, führt das in der Regel zu körperlichen Einschränkungen. Ein wichtiges Ziel der Behandlung ist deswegen, die Restfunktion des Körpers zu unterstützen und zu verstärken. So sollen die Einschränkungen im Alltag minimiert werden, damit Betroffene ein möglichst selbstständiges Leben führen können. Mit unserer Erfahrung, unserer Reha-Technik und maßgefertigten Orthesen unterstützen wir Sie gerne dabei!",
    ],
    cta: { label: "Kontakt & Beratung", href: "/kontakt" },
  },
  leistungen: {
    eyebrow: "Reha-Technik im Sanimotion Sanitätshaus",
    title: "Reha-Technik im Sanimotion Sanitätshaus",
    items: [
      {
        title: "Anamnese, Beratung & Versorgung durch erfahrenes Fachpersonal",
        body: [
          "Gerne nehmen unserer erfahrenen Sanitätsfachleute und Orthopädie-Techniker eine ausführliche Anamnese vor und beraten Sie anschließend, welche Orthesen und orthopädischen Hilfsmittel in Ihrem Fall sinnvoll sind, um Ihre Mobilität zu erhalten und zurückzugewinnen. Auf Wunsch kommen wir dazu auch zu Ihnen nach Hause, um es Ihnen den Prozess so einfach und angenehm wie möglich zu gestalten.",
          "Die spätere Anfertigung und Anpassungen der Hilfsmittel erfolgen direkt in unserer eigenen Orthopädie-Werkstatt in Berlin-Kreuzberg.",
        ],
      },
      {
        title:
          "Interdisziplinäres Versorgungskonzept mit Physiotherapeuten und Ärzten",
        body: [
          "Um Ihnen fortlaufend die passenden Reha-Produkte anbieten zu können, tauschen wir uns direkt mit Ihren Physiotherapeuten und Ärzten über den Verlauf Ihrer Erkrankung aus. So können wir Ihnen noch zielgerichteter helfen und die Versorgung mit medizinischen Hilfsmitteln zu 100 Prozent genau auf Sie und Ihren Bedarf zuschneiden.",
        ],
      },
      {
        title: "Rezept & Abrechnung – Wir übernehmen die Bürokratie für Sie",
        body: [
          "Nach der Anamnese besprechen wir mit Ihnen, was Ihr Arzt idealerweise auf das Rezept schreiben soll, damit Sie die für Sie bestmögliche Versorgung erhalten. Für Sie hat das gleich mehrere Vorteile: Wir nehmen uns mehr Zeit für Sie, als das für einen Arzt in der Regel möglich ist. Wir wissen, welche Kosten bzw. Reha-Produkte Ihre Krankenkasse in Anbetracht des jeweiligen Krankheitsbildes voraussichtlich übernehmen und welche nicht.",
          "Wenn Sie zuerst zu uns kommen, ersparen Sie sich zudem Zeit und Aufwand, weil Sie das Rezept dann nicht nachträglich anpassen lassen. Zudem kümmern wir uns natürlich letztlich um die gesamte Abrechnung mit Ihrer Krankenkasse.",
        ],
      },
    ],
    cta: { label: "Jetzt Termin vereinbaren", href: "/kontakt" },
  },
  weg: {
    eyebrow: "Ihr Weg zum Hilfsmittel",
    title: "Der perfekte Ablauf für eine schnelle Versorgung",
    steps: [
      "Anamnese und Beratung in unserem Sanitätshaus",
      "Ihr Arzt stellt Ihnen auf unsere Empfehlung ein Rezept aus",
      "Sie reichen das Rezept bei uns ein",
      "Sie erhalten von uns die benötigten orthopädischen Hilfsmittel",
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
      { icon: "Layers", label: "Hochwertige Markenprodukte" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  detail: {
    eyebrow: "Alles für Ihre Gesundheit",
    stat: "750 Produkte & Hilfsmittel",
    title: "Riesiges Sanitätshaus-Sortiment",
    paragraphs: [
      "In unseren Sanimotion Sanitätshäusern in Spandau, Zehlendorf, Tempelhof, Kreuzberg und Königs Wusterhausen sowie in unserem Online-Shop erhalten Sie vom Kopf bis zum Fuß alle möglichen orthopädischen und medizinischen Hilfsmittel wie zum Beispiel Orthesen, Bandagen, Kompressionsstrümpfe sowie Alltags- und Mobilitätshilfen. Bei Bedarf nehmen wir auch Sonderanfertigungen aller Art vor.",
    ],
    cta: { label: "Zum Online-Shop", href: "/#shop" },
  },
  contact: {
    eyebrow: "Ihr Draht zum Sanimotion Sanitätshaus Berlin",
    title: "Kontakt & Beratung",
    paragraphs: [
      "Sie haben Fragen zur Reha-Technik oder möchten einen Termin vereinbaren? Wir beraten Sie gerne in einem unserer Sanitätshäuser oder bei Ihnen zu Hause – persönlich und mit viel Feingefühl für Ihre Situation.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail.",
      "Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: RehaTechnikPageContent = {
  meta: {
    title: "Rehab equipment in Berlin | Sanimotion Sanitätshaus",
    description:
      "Rehab equipment at Sanimotion Sanitätshaus Berlin — custom-made orthopaedic aids for stroke, multiple sclerosis, ICP or ALS. Assessment, in-house workshop, interdisciplinary care.",
  },
  hero: {
    eyebrow: "Rehab equipment",
    titleLead: "Rehab equipment in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede:
      "Stay mobile in everyday life with custom-fitted orthopaedic aids — even with stroke, multiple sclerosis, ICP or ALS.",
    intro: [
      "When patients are living with permanent nerve damage or recovering from a stroke, the result is usually a restriction in everyday movement. An important goal of treatment is therefore to support and reinforce the body's remaining function, so that limitations in everyday life are minimised and those affected can lead a life that is as independent as possible. With our experience, our rehab equipment and our custom-made orthoses, we'd be glad to support you on this path.",
    ],
    cta: { label: "Contact & advice", href: "/kontakt" },
  },
  leistungen: {
    eyebrow: "Rehab equipment at Sanimotion Sanitätshaus",
    title: "Rehab equipment at Sanimotion Sanitätshaus",
    items: [
      {
        title: "Assessment, advice and care from experienced specialists",
        body: [
          "Our experienced medical-supply specialists and orthopaedic technicians will gladly carry out a thorough assessment and then advise you on which orthoses and orthopaedic aids make sense in your case to maintain and regain your mobility. On request, we'll also come to your home to make the process as simple and comfortable as possible.",
          "The subsequent fabrication and adjustment of the aids takes place directly in our own orthopaedic workshop in Berlin-Kreuzberg.",
        ],
      },
      {
        title: "Interdisciplinary care concept with physiotherapists and doctors",
        body: [
          "So that we can keep offering you the right rehab products as time goes on, we are in direct contact with your physiotherapists and doctors about the course of your condition. That allows us to help you even more precisely and to tailor the care with medical aids 100 percent to you and your needs.",
        ],
      },
      {
        title: "Prescription & billing — we handle the paperwork for you",
        body: [
          "After the assessment we discuss with you what your doctor should ideally write on the prescription so that you receive the best possible care. That has several advantages for you: we take more time for you than is usually possible for a doctor; and we know which costs and which rehab products your health insurer is likely to cover for the condition in question, and which are not.",
          "If you come to us first, you also save yourself time and effort, because the prescription doesn't have to be amended afterwards. And of course we handle the entire billing with your health insurer for you.",
        ],
      },
    ],
    cta: { label: "Make an appointment now", href: "/kontakt" },
  },
  weg: {
    eyebrow: "Your path to the right aid",
    title: "The perfect process for fast care",
    steps: [
      "Assessment and consultation at our Sanitätshaus",
      "Your doctor writes a prescription on our recommendation",
      "You hand the prescription in to us",
      "You receive the orthopaedic aids you need from us",
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
      { icon: "Layers", label: "Premium brand products" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  detail: {
    eyebrow: "Everything for your health",
    stat: "750 products & aids",
    title: "A vast Sanitätshaus range",
    paragraphs: [
      "In our Sanimotion stores in Spandau, Zehlendorf, Tempelhof, Kreuzberg and Königs Wusterhausen — and in our online shop — you'll find every kind of orthopaedic and medical aid, from head to toe: orthoses, bandages, compression stockings as well as everyday and mobility aids. Where required, we also produce custom-made items of every kind.",
    ],
    cta: { label: "To the online shop", href: "/#shop" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice and appointments",
    paragraphs: [
      "Questions about rehab equipment, or would you like to make an appointment? We're glad to advise you in our stores or at your home — personally and with great care for your situation.",
      "Give us a call or send us an email.",
      "We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, RehaTechnikPageContent> = {
  de: rehaTechnikPageSchema.parse(de),
  en: rehaTechnikPageSchema.parse(en),
};

export const getRehaTechnikContent = (
  locale: Locale,
): RehaTechnikPageContent => pages[locale];

/*
 * FAQ page content — DE + EN.
 *
 * Mirrors sanimotion.com/faq/ — DE questions and answers are taken
 * verbatim from the live page; for scannability the 17 items are
 * split into four thematic groups (Rezept & Verordnung / Zuzahlung
 * & Rechnung / Lieferung & Bearbeitung / Versorgung & Beratung).
 * EN strings are working translations.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";
import { ctaSchema } from "~/schemas/content";

export const faqPageSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
  }),
  groups: z
    .array(
      z.object({
        title: z.string(),
        items: z
          .array(z.object({ question: z.string(), answer: z.string() }))
          .min(1),
      }),
    )
    .min(1),
  closing: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    cta: ctaSchema,
  }),
});
export type FaqPageContent = z.infer<typeof faqPageSchema>;

const de: FaqPageContent = {
  meta: {
    title: "FAQ — Häufig gestellte Fragen — Sanimotion",
    description:
      "Antworten auf die am häufigsten gestellten Fragen rund um Rezepte, Verordnungen und den Ablauf im Sanimotion Sanitätshaus.",
  },
  hero: {
    eyebrow: "FAQ",
    titleLead: "Häufig gestellte",
    titleTail: "Fragen.",
    lede: "Hier finden Sie Antworten auf die am häufigsten gestellten Fragen rund um die Ausstellung von Rezepten sowie das Einlösen der Verordnungen und den weiteren Ablauf in unserem Sanimotion Sanitätshaus.",
  },
  groups: [
    {
      title: "Rezept & Verordnung",
      items: [
        {
          question:
            "Mein Arzt hat mir ein Rezept ausgestellt. Wie geht es jetzt weiter?",
          answer:
            "Mit dem Rezept bzw. der Verordnung können Sie eine unserer Sanitätshaus-Filialen besuchen, um das verordnete Hilfsmittel zu erhalten. Unsere Medizinprodukteberater/innen beraten Sie bei uns vor Ort. Wir übernehmen den kompletten Schriftverkehr und die weitere Abwicklung mit Ihrer Krankenkasse. Alternativ können Sie das Rezept per E-Mail an [info@sanimotion.com](mailto:info@sanimotion.com) oder per Post bei uns einreichen.",
        },
        {
          question: "Was sollte auf meinem Rezept stehen?",
          answer:
            "Die genaue Bezeichnung des Hilfsmittels und die entsprechende Diagnose müssen auf der Verordnung enthalten sein. Wir beraten Sie gerne und unterstützen Ihren Arzt bei der Ausstellung des Rezeptes.",
        },
        {
          question: "Wie lange ist meine Verordnung gültig?",
          answer:
            "Rezepte gesetzlicher Krankenkassen sind 28 Tage gültig. Falls Sie bei einer privaten Krankenkasse versichert sind, sollten Sie sich bei dieser über die Gültigkeit Ihres Rezeptes informieren.",
        },
        {
          question:
            "Warum muss ich ein neues Rezept für ein bereits geliefertes Hilfsmittel einreichen?",
          answer:
            "Rezepte sind nur 28 Tage gültig. Bei abgelaufener Leihzeit eines Hilfsmittels (z. B. Rollstuhl) benötigen wir ein neues Rezept für die weitere Versorgung.",
        },
      ],
    },
    {
      title: "Zuzahlung & Rechnung",
      items: [
        {
          question:
            "Warum muss ich eine Zuzahlung leisten? Was ist eine gesetzliche Zuzahlung?",
          answer:
            "Ab dem 18. Lebensjahr fällt für jedes Hilfsmittel eine Eigenbeteiligung von 10 % des Abgabepreises (mindestens 5 €, maximal 10 €) an. Eine Befreiung kann bei Ihrer Krankenkasse beantragt werden, wenn die Eigenbeteiligung 2 % der Bruttoeinnahmen übersteigt. Kinder unter 18 Jahren sind von der Zuzahlung befreit.",
        },
        {
          question: "Warum habe ich eine Zuzahlungsrechnung erhalten?",
          answer:
            "Zuzahlungen sind bei Lieferung des Hilfsmittels fällig. Falls der Betrag nicht direkt kassiert werden kann, erhalten Sie eine nachträgliche Rechnung.",
        },
        {
          question:
            "Ich bin von der Zuzahlung befreit. Warum habe ich trotzdem eine Rechnung erhalten?",
          answer:
            "Ihr Befreiungsausweis muss zum Liefertermin vorliegen. Andernfalls sind wir verpflichtet, den Betrag in Rechnung zu stellen. Reichen Sie die Rechnung zur Erstattung bei Ihrer Krankenkasse ein.",
        },
        {
          question: "Was ist eine wirtschaftliche Aufzahlung?",
          answer:
            "Wenn Sie für Ihr Produkt eine besondere Qualität oder ein spezielles Merkmal wünschen, das teurer als das verordnete Hilfsmittel ist, fällt für Sie eine wirtschaftliche Aufzahlung an. Denn die gesetzlichen Krankenkassen übernehmen nur die Kosten für die Basisversorgung.",
        },
      ],
    },
    {
      title: "Lieferung & Bearbeitung",
      items: [
        {
          question: "Warum ist mein geliefertes Hilfsmittel gebraucht?",
          answer:
            "Viele [Reha-Hilfsmittel](/produkte) sind sogenannte Wiedereinsatz-Hilfsmittel im Besitz der Krankenkassen. Diese werden nach Gebrauch desinfiziert, gereinigt und instand gesetzt.",
        },
        {
          question: "Wieso dauert die Genehmigung eines Hilfsmittels so lange?",
          answer:
            "Die Bearbeitungsdauer hängt von Ihrer Krankenkasse ab. In dringenden Fällen wenden Sie sich bitte direkt an Ihre Krankenkasse.",
        },
        {
          question: "Wann wird das Reha-Hilfsmittel geliefert?",
          answer:
            "Nach Klärung der Kostenübernahme mit Ihrem Kostenträger vereinbaren wir einen Liefertermin. Bitte haben Sie Verständnis für mögliche Verzögerungen aufgrund der Bearbeitungsdauer bei der Krankenkasse.",
        },
        {
          question: "Was versteht man unter einer Versorgung mit Fallpauschale?",
          answer:
            "Eine Fallpauschale beinhaltet die Bereitstellung, Auslieferung, Wartung, Reparaturen und Abholung des Hilfsmittels für einen festgelegten Zeitraum.",
        },
        {
          question: "Belasten Hilfsmittel das Arztbudget?",
          answer:
            "Die Verordnung von Hilfsmitteln unterliegt keiner Budgetierung und fließt nicht in Richtgrößen ein. Ärzte müssen jedoch wirtschaftlich und indikationsgerecht verordnen.",
        },
      ],
    },
    {
      title: "Versorgung & Beratung",
      items: [
        {
          question: "Kann ich mein Sanitätshaus frei wählen?",
          answer:
            "Ja, Sie können Ihr Sanitätshaus frei wählen. Kommen Sie gerne in eins unserer [Sanimotion Sanitätshäuser](/). Wir beraten und versorgen Sie kompetent und freundlich!",
        },
        {
          question:
            "Wie häufig habe ich Anspruch auf eine lymphologische/phlebologische Versorgung?",
          answer:
            "[Kompressionsstrümpfe](/produkte#kompression) können bei regelmäßiger Pflege ca. 6 Monate getragen werden. Krankenkassen übernehmen in der Regel zwei Versorgungen pro Jahr. Bei Bedarf kann individuell entschieden werden, ob weitere Versorgungen notwendig sind.",
        },
        {
          question:
            "Ich habe seit langer Zeit Krampfadern, bin aber beschwerdefrei. Sollte ich damit zum Arzt gehen?",
          answer:
            "Ja, Krampfadern verschlimmern sich schleichend. Eine frühzeitige ärztliche Untersuchung ist ratsam, um Folgen wie Thrombose oder ein offenes Bein zu vermeiden.",
        },
        {
          question:
            "Ich brauche neue orthopädische Einlagen. Muss ich dafür extra zum Orthopäden?",
          answer:
            "Nein, [Einlagen](/produkte#einlagen) können auch von Ihrem Hausarzt verordnet werden.",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "Noch eine Frage?",
    title: "Wir antworten persönlich.",
    body: "Schreiben Sie uns oder rufen Sie an — wir helfen Ihnen gern weiter.",
    cta: { label: "Jetzt schreiben", href: "/kontakt" },
  },
};

const en: FaqPageContent = {
  meta: {
    title: "FAQ — Frequently asked questions — Sanimotion",
    description:
      "Answers to the most common questions about prescriptions, copayments, delivery, and care at Sanimotion Sanitätshaus.",
  },
  hero: {
    eyebrow: "FAQ",
    titleLead: "Frequently asked",
    titleTail: "questions.",
    lede: "Below you'll find answers to the questions we hear most often — from how prescriptions are issued and redeemed to what happens next at our Sanimotion Sanitätshaus.",
  },
  groups: [
    {
      title: "Prescription & order",
      items: [
        {
          question:
            "My doctor issued me a prescription. What happens next?",
          answer:
            "Bring your prescription to one of our Sanitätshaus locations to receive the prescribed aid. Our medical product advisors will guide you on-site and handle all correspondence and billing with your insurer. You can also send the prescription by email to [info@sanimotion.com](mailto:info@sanimotion.com) or by post.",
        },
        {
          question: "What needs to be on my prescription?",
          answer:
            "The exact name of the aid and the corresponding diagnosis must appear on the prescription. We're happy to advise you and to support your doctor in issuing it.",
        },
        {
          question: "How long is my prescription valid?",
          answer:
            "Statutory health insurance prescriptions are valid for 28 days. If you have private insurance, please ask your insurer about the validity of your prescription.",
        },
        {
          question:
            "Why do I need to submit a new prescription for an aid I've already received?",
          answer:
            "Prescriptions are only valid for 28 days. Once the rental period of an aid (such as a wheelchair) ends, we need a new prescription to continue your supply.",
        },
      ],
    },
    {
      title: "Copayment & invoicing",
      items: [
        {
          question:
            "Why do I have to make a copayment? What is the statutory copayment?",
          answer:
            "From the age of 18 every aid carries a 10% copayment of the dispensing price — minimum €5, maximum €10. If your copayments exceed 2% of your gross income, you can apply to your insurer for an exemption. Children under 18 are exempt from copayments.",
        },
        {
          question: "Why did I receive a copayment invoice?",
          answer:
            "Copayments are due on delivery of the aid. If the amount couldn't be collected at delivery, you'll receive an invoice afterwards.",
        },
        {
          question:
            "I'm exempt from copayments. Why did I still receive an invoice?",
          answer:
            "Your exemption certificate must be presented at delivery. Otherwise we're required to invoice the amount — you can submit the invoice to your insurer for reimbursement.",
        },
        {
          question: "What is a wirtschaftliche Aufzahlung (cost-difference top-up)?",
          answer:
            "If you'd like a special quality or feature that goes beyond the prescribed basic supply, the difference is paid by you as a top-up. Statutory health insurers only cover the cost of the basic supply.",
        },
      ],
    },
    {
      title: "Delivery & processing",
      items: [
        {
          question: "Why is the aid I received used?",
          answer:
            "Many [rehab aids](/produkte) are so-called re-use items owned by the insurers. They are disinfected, cleaned and reconditioned between uses.",
        },
        {
          question: "Why does approval of an aid take so long?",
          answer:
            "Processing time depends on your insurer. In urgent cases please contact your insurer directly.",
        },
        {
          question: "When will the rehab aid be delivered?",
          answer:
            "Once cost coverage with your insurer is confirmed, we'll arrange a delivery appointment with you. Please bear with us if processing at the insurer causes delays.",
        },
        {
          question: "What does a flat-rate (Fallpauschale) supply mean?",
          answer:
            "A flat-rate covers the provision, delivery, maintenance, repairs and collection of the aid for a defined period.",
        },
        {
          question: "Do aids count against the doctor's budget?",
          answer:
            "Aid prescriptions are not subject to budgeting and don't count towards reference values. Doctors are still required to prescribe economically and in line with the indication.",
        },
      ],
    },
    {
      title: "Care & advice",
      items: [
        {
          question: "Can I freely choose my Sanitätshaus?",
          answer:
            "Yes. You're free to choose your Sanitätshaus — visit any of our [Sanimotion locations](/) and we'll give you competent, friendly advice and care.",
        },
        {
          question:
            "How often am I entitled to lymphological/phlebological care?",
          answer:
            "With proper care, [compression stockings](/produkte#kompression) can be worn for around six months. Insurers usually cover two supplies per year; further supplies can be assessed individually if needed.",
        },
        {
          question:
            "I've had varicose veins for a long time but no symptoms. Should I see a doctor?",
          answer:
            "Yes. Varicose veins worsen gradually — an early medical check is advisable to avoid complications such as thrombosis or venous ulcers.",
        },
        {
          question:
            "I need new orthopedic insoles. Do I have to see an orthopedist?",
          answer:
            "No. [Insoles](/produkte#einlagen) can also be prescribed by your GP.",
        },
      ],
    },
  ],
  closing: {
    eyebrow: "One more question?",
    title: "We answer personally.",
    body: "Write or call us — we're happy to help.",
    cta: { label: "Write to us", href: "/kontakt" },
  },
};

const pages: Record<Locale, FaqPageContent> = {
  de: faqPageSchema.parse(de),
  en: faqPageSchema.parse(en),
};

export const getFaqContent = (locale: Locale): FaqPageContent => pages[locale];

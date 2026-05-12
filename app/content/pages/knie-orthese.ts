/*
 * Knie-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/knie-orthese-berlin/: hero (split with photo) →
 * Vorkonfektionierte Knieorthesen → Sonderanfertigungen von Knieorthesen
 * → Was uns auszeichnet (6 highlights) → FAQ accordion → contact. Copy
 * is sourced verbatim from the reference page.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const knieOrthesePageSchema = z.object({
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
  varianten: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  massanfertigung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  faq: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(faqSchema).min(1),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type KnieOrthesePageContent = z.infer<typeof knieOrthesePageSchema>;

const de: KnieOrthesePageContent = {
  meta: {
    title: "Knieorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Knieorthesen vom Sanimotion Sanitätshaus Berlin – konfektioniert und maßgefertigt durch erfahrene Orthopädietechniker für Stabilität und schmerzfreie Bewegung im Knie.",
  },
  hero: {
    eyebrow: "Knie-Orthese",
    titleLead: "Knieorthesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen und Bandagen für schmerzfreie Bewegung und Stabilität im Knie – maßgefertigt & konfektioniert durch erfahrene Orthopädietechniker",
    intro: [
      "Entdecken Sie bei Sanimotion Berlin maßgefertigte und vorkonfektionierte Knieorthesen für mehr Bewegung und weniger Schmerzen. Unsere hochqualitativen Orthesen bieten nach Verletzungen und Operationen sowie bei Fehlstellungen individuellen Komfort und optimale Unterstützung für Ihr Kniegelenk.",
      "Unsere Orthesen beziehen wir ausschließlich von renommierten Herstellern wie Bauerfeind, Sporlastic, Bort, Medi, Aspen, Enovis und Orthoservice.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Knieorthesen",
    paragraphs: [
      "Unsere vorkonfektionierten Knieorthesen sind eine schnelle und effektive Lösung für eine Vielzahl von Knieproblemen. Unsere erfahrenen Orthopädietechniker passen jede Orthese individuell an Ihr Knie an, um eine perfekte Passform und maximalen Komfort zu gewährleisten. Ob bei Knorpelschäden, Bänderverletzungen oder Arthrose – unsere vorkonfektionierten Knieorthesen versprechen zuverlässige Stabilität und Entlastung für möglichst schmerzfreie Bewegung im Alltag.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigung von Knieorthesen",
    paragraphs: [
      "Unsere maßgefertigten Knieorthesen werden speziell für Sie entworfen und hergestellt, um höchste Ansprüche an Passform und Funktionalität zu erfüllen. Bei komplexen Fehlstellungen oder speziellen Passformbedürfnissen sind maßgefertigte Knieorthesen die ideale Wahl. Auch Korrekturorthesen im Bereich der Pädiatrie, das heißt in der Kinder- und Jugendmedizin, werden meist in Sonderanfertigung hergestellt.",
      "Unser Fachteam aus Orthopädietechnikern arbeitet auf Wunsch eng mit Ihnen und Ihrem Arzt bzw. Orthopäde zusammen, um eine sonderangefertigte Orthese zu entwickeln, die nicht nur perfekt sitzt, sondern auch Ihrem individuellen Lebensstil gerecht wird. Von Sportverletzungen bis zu chronischen Erkrankungen – unsere maßgefertigten Knieorthesen geben Ihrem Kniegelenk optimale Unterstützung, sorgen für eine Stabilisierung und ermöglichen mehr Bewegungsfreiheit.",
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
      { icon: "Boxes", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen & Antworten zu Knieorthesen",
    items: [
      {
        question:
          "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während Bandagen aus einem festen, dehnbaren Gewebe bestehen, das eng an der entsprechenden Körperregion sitzt und flexibel und angenehm auf der Haut liegt, werden Orthesen aus stabilen, mechanischen Elementen hergestellt, die für eine (teilweise) Ruhigstellung von Gelenken und Körperteilen sorgt.",
      },
      {
        question:
          "Welche Knieprobleme können mit einer Knieorthese behandelt und gelindert werden?",
        answer:
          "Es gibt viele Indikationen für eine Knieorthese. Diese sind sein effektives orthopädische Hilfsmittel für eine Vielzahl von Problemen, einschließlich Knorpelschäden, Kreuzbandriss, Meniskus- oder Bänderverletzungen, Gonarthrose und Fehlstellungen im Kniegelenk.",
      },
      {
        question:
          "Wie lange dauert es, eine maßgefertigte Knieorthese herzustellen?",
        answer:
          "Die Herstellungszeit variiert je nach Komplexität, beträgt jedoch in der Regel 4 Wochen. Diese Zeit ist nötig, weil wir die Orthese dann auf Basis von 3D-Scans und einem Gipsabdruck eigens für Ihr Knie herstellen. Und je passgenauer die Orthese ist, desto besser kann sie ihre gewünschte Wirkung entfalten.",
      },
      {
        question:
          "Werden die Kosten für Knieorthesen von der Krankenkasse übernommen?",
        answer:
          "In den meisten Fällen werden die Kosten für die Orthese von der Krankenkasse übernommen, vor allem wenn Sie diese von Ihrem Arzt aufgrund von Knieschmerzen, Verletzungen oder anderen Beschwerden auf ein Rezept verschrieben bekommen. Gerne unterstützen wir Sie bei der Klärung der Kostenfrage und helfen Ihnen bei den nötigen Schritten.",
      },
      {
        question: "Von welchen Herstellern kommen die Orthesen?",
        answer:
          "Die Orthesen beziehen wir ausschließlich von renommierten deutschen und europäischen Marken-Herstellern wie Bauerfeind, Sporlastic, Össur und Orthoservice.",
      },
      {
        question: "Kann ich mit einer Knieorthese Auto fahren?",
        answer:
          "Ja, in den allermeisten Fällen ist es problemlos möglich, mit einer Knieorthese Auto zu fahren.",
      },
      {
        question: "Kann ich mit einer Knieorthese Sport treiben?",
        answer:
          "Kniebandagen und Knieorthesen sind nicht nur nach einer akuten Verletzung, sondern auch präventiv beim Sport als Vorbeugungsmaßnahme empfehlenswert. Selbst Leistungssportler setzen auf die vorbeugende Wirkung einer Knieorthese, um das Gelenk vor Überlastung zu schützen. Zum Schutz vorbelasteter Gelenke durch Sportarten wie beispielsweise Skifahren kann eine nach Maß hergestellte Orthese der perfekte Schutz vor Verletzungen sein.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Knieorthese anzupassen?",
        answer:
          "Ja, um sicherzustellen, dass wir ausreichend Zeit für eine gründliche Beratung und Anpassung der Orthesen haben, empfehlen wir die Vereinbarung eines Termins. Dazu können Sie auch einen Hausbesuch vereinbaren. Wir kommen dazu zur Beratung und Vermessung zu Ihnen nach Hause. Sie können uns natürlich auch gerne spontan besuchen, wenn es Ihre Zeit erlaubt.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihr Knie möglichst gut versorgt wird, ist es wichtig, dass diese von erfahrenen Sanitätsfachangestellten und Orthopädietechnikern beraten werden, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und mit viel Feingefühl beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unseren Online-Terminvereinbarung. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: KnieOrthesePageContent = {
  meta: {
    title: "Knee orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Knee orthoses from Sanimotion Sanitätshaus Berlin — off-the-shelf and custom-made by experienced orthopedic technicians for stability and pain-free movement in the knee.",
  },
  hero: {
    eyebrow: "Knee orthosis",
    titleLead: "Knee orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses and bandages for pain-free movement and stability in the knee — custom-made & off-the-shelf by experienced orthopedic technicians",
    intro: [
      "Discover at Sanimotion Berlin custom-made and off-the-shelf knee orthoses for more movement and less pain. Our high-quality orthoses provide individual comfort and optimal support for your knee joint after injuries and surgery, as well as for misalignments.",
      "We source our orthoses exclusively from renowned manufacturers such as Bauerfeind, Sporlastic, Bort, Medi, Aspen, Enovis and Orthoservice.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf knee orthoses",
    paragraphs: [
      "Our off-the-shelf knee orthoses are a fast and effective solution for a wide range of knee problems. Our experienced orthopedic technicians fit each orthosis individually to your knee to ensure a perfect fit and maximum comfort. Whether for cartilage damage, ligament injuries or arthritis — our off-the-shelf knee orthoses promise reliable stability and relief for the most pain-free movement possible in everyday life.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made knee orthoses",
    paragraphs: [
      "Our custom-made knee orthoses are designed and produced especially for you to meet the highest standards of fit and function. For complex misalignments or special fit requirements, custom-made knee orthoses are the ideal choice. Corrective orthoses in pediatrics — that is, in child and adolescent medicine — are usually also produced as custom builds.",
      "Our specialist team of orthopedic technicians will, on request, work closely with you and your physician or orthopedist to develop a custom-made orthosis that not only fits perfectly but also suits your individual lifestyle. From sports injuries to chronic conditions — our custom-made knee orthoses provide your knee with optimal support, ensure stabilisation and enable greater freedom of movement.",
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
      { icon: "Boxes", label: "Huge range" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions & answers on knee orthoses",
    items: [
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While bandages are made of a firm, stretchy fabric that fits snugly on the relevant body region and feels flexible and comfortable on the skin, orthoses are made of stable, mechanical elements that provide (partial) immobilisation of joints and body parts.",
      },
      {
        question:
          "Which knee problems can be treated and relieved with a knee orthosis?",
        answer:
          "There are many indications for a knee orthosis. They are an effective orthopedic aid for a wide range of problems, including cartilage damage, cruciate ligament tears, meniscus or ligament injuries, gonarthrosis and misalignments in the knee joint.",
      },
      {
        question:
          "How long does it take to produce a custom-made knee orthosis?",
        answer:
          "Production time varies with complexity, but typically takes around 4 weeks. This time is needed because we then produce the orthosis especially for your knee on the basis of 3D scans and a plaster cast. And the more precisely it fits, the better it can deliver its intended effect.",
      },
      {
        question:
          "Are the costs for knee orthoses covered by health insurance?",
        answer:
          "In most cases the costs of the orthosis are covered by your health insurance, especially when your physician has prescribed it for knee pain, injuries or other complaints. We're happy to help you clarify the cost question and guide you through the necessary steps.",
      },
      {
        question: "Which manufacturers do the orthoses come from?",
        answer:
          "We source the orthoses exclusively from renowned German and European brand manufacturers such as Bauerfeind, Sporlastic, Össur and Orthoservice.",
      },
      {
        question: "Can I drive a car with a knee orthosis?",
        answer:
          "Yes — in the vast majority of cases it's no problem to drive a car with a knee orthosis.",
      },
      {
        question: "Can I do sports with a knee orthosis?",
        answer:
          "Knee bandages and knee orthoses are recommended not only after an acute injury but also as a preventive measure during sport. Even competitive athletes rely on the preventive effect of a knee orthosis to protect the joint from overload. To protect pre-stressed joints during sports such as skiing, a custom-made orthosis can be the perfect protection against injuries.",
      },
      {
        question:
          "Do I need to make an appointment to have a knee orthosis fitted?",
        answer:
          "Yes — to make sure we have enough time for thorough advice and fitting of the orthoses, we recommend booking an appointment. You can also arrange a home visit; in that case we'll come to you for advice and measurement. Of course you're also welcome to drop by spontaneously if your time allows.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your knee is cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, KnieOrthesePageContent> = {
  de: knieOrthesePageSchema.parse(de),
  en: knieOrthesePageSchema.parse(en),
};

export const getKnieOrtheseContent = (
  locale: Locale,
): KnieOrthesePageContent => pages[locale];

/*
 * Handgelenk-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/handgelenk-orthese-berlin/: hero (split with photo) →
 * Vorkonfektionierte Handgelenkorthesen → Sonderanfertigungen von Finger- und
 * Handorthesen → Was uns auszeichnet (6 highlights) → FAQ accordion → contact.
 * Copy is sourced verbatim from the reference page.
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

export const handgelenkOrthesePageSchema = z.object({
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
export type HandgelenkOrthesePageContent = z.infer<
  typeof handgelenkOrthesePageSchema
>;

const de: HandgelenkOrthesePageContent = {
  meta: {
    title: "Handgelenkorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Handgelenkorthesen vom Sanimotion Sanitätshaus Berlin – Orthesen, Schienen, Braces und Bandagen für Stabilität im Handgelenk und schmerzfreie Bewegungen, konfektioniert und maßgefertigt durch erfahrene Orthopädietechniker.",
  },
  hero: {
    eyebrow: "Handgelenk-Orthese",
    titleLead: "Handgelenkorthesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen, Schienen, Braces und Bandagen für Stabilität im Handgelenk und schmerzfreie Bewegungen mit der Hand – konfektioniert & maßgefertigt durch erfahrene Orthopädietechniker.",
    intro: [
      "Unsere Handgelenkorthesen bieten gezielte Unterstützung bei Verletzungen, Schwellungen und Entzündungen. Ob vorkonfektioniert oder maßgefertigt, unsere hochwertigen Bandagen und Schienen ermöglichen Ihnen im Alltag wirksamen Schutz, Entlastung und Ruhigstellung für Ihr Gelenk bei gleichzeitiger Bewegungsfreiheit für Ihre Finger.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Handgelenkorthesen",
    paragraphs: [
      "Unsere vorkonfektionierten Handgelenkorthesen bieten sofortige Stabilisierung und Schutz für Ihre Hand und Ihr Handgelenk. Dank der präzisen Anpassungen durch unsere Orthopädietechniker ist sichergestellt, dass jede Orthese bestmöglich sitzt und Ihnen den notwendigen Halt bietet.",
      "Unsere vorkonfektionierten Orthesen und Schienen fürs Handgelenk sowie für Finger und Daumen beziehen wir ausschließlich von renommierten Marken-Herstellern wie u.a. Manometric, Bauerfeind, Sporlastic, Bort, Enovis und Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigung von Finger- und Handorthesen",
    paragraphs: [
      "Wenn eine vorkonfektionierte Orthese aufgrund besonderer Anforderungen an Passform und Funktionalität nicht ausreicht, fertigen wir in unserer hauseigenen Orthopädiewerkstatt in Berlin für Sie maßgeschneiderte Handgelenkorthesen an.",
      "Für eine maximale Bewegungsfreiheit von Daumen, Fingern und Hand sowie für eine gezielte Unterstützung im Alltag bieten diese innovativen Orthesen moderne 3D-Technologie und erstklassigen Tragekomfort.",
      "Gemeinsam mit Ihnen entwickeln unsere Experten und Partner eine Handorthese, die perfekt sitzt, Schmerzen lindert, die Heilung fördert und die Stabilität Ihrer Gelenke verbessert – für mehr Lebensqualität und Sicherheit in jeder Bewegung.",
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
      { icon: "Boxes", label: "Erstklassige Marken-Produkte" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen & Antworten zur Handgelenkorthese",
    items: [
      {
        question:
          "Werden die Kosten für eine Handgelenkorthese von der Krankenkasse übernommen?",
        answer:
          "Ja, wenn Sie aufgrund von Schmerzen, Verletzungen, Operationen oder anderen Beschwerden eine Orthese oder Bandage auf Rezept von Ihrem Arzt/Orthopäden verordnet bekommen, werden die Kosten in der Regel von der Krankenkasse übernommen. Wir helfen Ihnen gerne, die Kostenfrage mit Ihrer Krankenkasse zu klären und unterstützen Sie, die notwendigen Schritte zu unternehmen.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Handgelenkorthese anpassen zu lassen?",
        answer:
          "Ja, um sicherzustellen, dass wir ausreichend Zeit für eine gründliche Beratung, Vermessung und Anpassung der Orthese haben, empfehlen wir die vorherige Vereinbarung eines Termins. Dazu können Sie auf Wunsch auch einen Hausbesuch vereinbaren. Wir kommen dann zur Beratung und Vermessung gerne zu Ihnen nach Hause. Sie können uns natürlich auch gerne spontan besuchen, wenn es Ihre Zeit erlaubt. Dann kann es jedoch ggf. zu Wartezeiten kommen.",
      },
      {
        question:
          "Wie lange dauert es, eine maßgefertigte Handgelenkorthese herzustellen?",
        answer:
          "Eine vorkonfektionierte Orthese können wir innerhalb von 2 bis 3 Tagen für Sie anpassen. Die Herstellungszeit für eine Sonderanfertigung in unserer eigenen Berliner Manufaktur dauert deutlich länger und beträgt je nach Komplexität der Anforderungen in der Regel bis zu 4 Wochen. Es ist wichtig, sich die nötige Zeit zu nehmen, um die hochwertige Qualität und Passgenauigkeit sicherzustellen.",
      },
      {
        question:
          "Bei welchen Problemen und Beschwerden ist eine Handgelenkorthese sinnvoll?",
        answer:
          "Es gibt verschiedene Verletzungen und Erkrankungen, bei denen eine Handgelenkorthese (oder Handgelenkbandage) ein wirksames orthopädisches Hilfsmittel ist. Sie wird unter anderem bei akuten Problemen und Schmerzen im Handgelenk durch Verstauchungen, Prellungen, Überlastungen, aber auch bei chronischen Schmerzen durch Arthrose oder Arthritis eingesetzt. Außerdem unterstützt sie die Rehabilitation nach einer Handoperation durch Ruhigstellung und Schmerzlinderung des Gelenks.",
      },
      {
        question:
          "Kann ich meine Handgelenkorthese auch nachts tragen und damit duschen?",
        answer:
          "Ja, unsere Orthopädietechniker passen die Orthese so an, dass sie bequem und sicher während des Schlafs getragen werden kann, sofern dies medizinisch erforderlich ist. Weil die Handgelenkorthesen normalerweise wasserbeständig sind, können Sie diese auch während des Duschens tragen. Spezifische Informationen erhalten Sie bei der Anpassung.",
      },
      {
        question:
          "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während medizinische Bandagen aus einem festen, dehnbaren Gewebe bestehen, das eng an der entsprechenden Körperregion sitzt und flexibel und angenehm auf der Haut liegt, werden Orthesen aus stabilen, mechanischen Elementen hergestellt. Diese entlasten und unterstützen den Körper, indem sie für eine (teilweise) Ruhigstellung von Gelenken und Körperteilen sorgen, bei der Mobilisierung helfen oder neue Bewegungsfreiheit bieten.",
      },
      {
        question: "Von welchen Herstellern kommen die Orthesen?",
        answer:
          "Die Orthesen in verschiedenen Größen in unserem Sanimotion Sanitätshaus beziehen wir ausschließlich von renommierten deutschen und europäischen Marken-Herstellern wie Manometric, Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen und Enovis.",
      },
      {
        question:
          "Kann ich meine Handgelenkorthese bei Bedarf selbst an- und ausziehen?",
        answer:
          "Ja, unsere Handgelenkorthesen sind in der Regel so gestaltet, dass sie einfach mit Klettverschlüssen an- und ausgezogen werden können. Bei Bedarf zeigen Ihnen unsere Experten vor Ort gerne die richtige Anwendung.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihr Handgelenk möglichst gut versorgt wird, ist es wichtig, sich von erfahrenen Sanitätsfachangestellten und Orthopädietechnikern beraten zu lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und mit viel Feingefühl beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unsere Online-Terminvereinbarung. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: HandgelenkOrthesePageContent = {
  meta: {
    title: "Wrist orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Wrist orthoses from Sanimotion Sanitätshaus Berlin — orthoses, splints, braces and bandages for stability in the wrist and pain-free movement, off-the-shelf and custom-made by experienced orthopedic technicians.",
  },
  hero: {
    eyebrow: "Wrist orthosis",
    titleLead: "Wrist orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses, splints, braces and bandages for stability in the wrist and pain-free movement of the hand — off-the-shelf & custom-made by experienced orthopedic technicians.",
    intro: [
      "Our wrist orthoses provide targeted support for injuries, swelling and inflammation. Whether off-the-shelf or custom-made, our high-quality bandages and splints give you effective protection, relief and immobilisation for your joint in everyday life — while keeping your fingers free to move.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf wrist orthoses",
    paragraphs: [
      "Our off-the-shelf wrist orthoses provide immediate stabilisation and protection for your hand and wrist. Thanks to the precise fit performed by our orthopedic technicians, every orthosis sits as well as possible and gives you the support you need.",
      "We source our off-the-shelf orthoses and splints for the wrist as well as for fingers and thumbs exclusively from renowned brand manufacturers including Manometric, Bauerfeind, Sporlastic, Bort, Enovis and Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made finger and hand orthoses",
    paragraphs: [
      "If an off-the-shelf orthosis isn't sufficient due to special requirements for fit and function, we produce custom-tailored wrist orthoses for you in our in-house orthopedic workshop in Berlin.",
      "For maximum freedom of movement of thumb, fingers and hand and for targeted support in everyday life, these innovative orthoses combine modern 3D technology with first-class wearing comfort.",
      "Together with you, our experts and partners develop a hand orthosis that fits perfectly, relieves pain, supports healing and improves the stability of your joints — for more quality of life and confidence in every movement.",
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
      { icon: "Boxes", label: "First-class brand products" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ on the wrist orthosis",
    items: [
      {
        question:
          "Are the costs of a wrist orthosis covered by health insurance?",
        answer:
          "Yes — when you have been prescribed an orthosis or bandage by your physician/orthopedist for pain, injuries, operations or other complaints, the costs are usually covered by health insurance. We're happy to help you clarify cost coverage with your health insurer and to support you in taking the necessary steps.",
      },
      {
        question:
          "Do I need to make an appointment to have a wrist orthosis fitted?",
        answer:
          "Yes — to ensure we have enough time for thorough advice, measurement and fitting of the orthosis, we recommend booking an appointment in advance. On request you can also arrange a home visit; we'll happily come to your home for advice and measurement. You can of course drop by spontaneously if your time allows, but in that case there may be waiting times.",
      },
      {
        question:
          "How long does it take to produce a custom-made wrist orthosis?",
        answer:
          "We can fit an off-the-shelf orthosis to you within 2 to 3 days. The production time for a custom build in our own Berlin workshop takes considerably longer and, depending on the complexity of the requirements, usually amounts to up to 4 weeks. It's important to take the time required in order to ensure high quality and an accurate fit.",
      },
      {
        question:
          "For which problems and complaints is a wrist orthosis useful?",
        answer:
          "There are various injuries and conditions for which a wrist orthosis (or wrist bandage) is an effective orthopedic aid. It is used, among other things, for acute problems and pain in the wrist caused by sprains, contusions and overuse, but also for chronic pain due to arthrosis or arthritis. It also supports rehabilitation after hand surgery through immobilisation and pain relief in the joint.",
      },
      {
        question:
          "Can I wear my wrist orthosis at night and shower with it?",
        answer:
          "Yes — our orthopedic technicians fit the orthosis so it can be worn comfortably and safely during sleep, provided this is medically necessary. Because wrist orthoses are normally water-resistant, you can also wear them while showering. You'll receive specific information during the fitting.",
      },
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While medical bandages are made of a firm, stretchy fabric that hugs the affected body region closely and feels flexible and comfortable on the skin, orthoses are made from stable, mechanical elements. These relieve and support the body by (partially) immobilising joints and body parts, helping with mobilisation or providing new freedom of movement.",
      },
      {
        question: "Which manufacturers do the orthoses come from?",
        answer:
          "We source the orthoses in various sizes at our Sanimotion Sanitätshaus exclusively from renowned German and European brand manufacturers such as Manometric, Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen and Enovis.",
      },
      {
        question:
          "Can I put my wrist orthosis on and take it off myself when needed?",
        answer:
          "Yes — our wrist orthoses are usually designed so they can simply be put on and taken off using Velcro fasteners. If needed, our specialists on site will gladly show you the correct application.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your wrist is cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and great care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, HandgelenkOrthesePageContent> = {
  de: handgelenkOrthesePageSchema.parse(de),
  en: handgelenkOrthesePageSchema.parse(en),
};

export const getHandgelenkOrtheseContent = (
  locale: Locale,
): HandgelenkOrthesePageContent => pages[locale];

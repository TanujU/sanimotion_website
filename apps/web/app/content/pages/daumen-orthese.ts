/*
 * Daumen-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/daumen-orthese-berlin/: hero (split with photo) →
 * Vorkonfektionierte Daumenorthesen → Sonderanfertigungen von Daumen- und
 * Fingerorthesen → Was uns auszeichnet (6 highlights) → FAQ accordion →
 * contact. Copy is sourced verbatim from the reference page.
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

export const daumenOrthesePageSchema = z.object({
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
export type DaumenOrthesePageContent = z.infer<typeof daumenOrthesePageSchema>;

const de: DaumenOrthesePageContent = {
  meta: {
    title: "Daumenorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Daumenorthesen vom Sanimotion Sanitätshaus Berlin – Orthesen, Schienen und Bandagen für Stabilität im Daumen und schmerzfreie Bewegungen mit der Hand, konfektioniert und maßgefertigt durch erfahrene Orthopädietechniker.",
  },
  hero: {
    eyebrow: "Daumen-Orthese",
    titleLead: "Daumenorthesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen, Schienen und Bandagen für Stabilität im Daumen und schmerzfreie Bewegungen mit der Hand – konfektioniert & maßgefertigt durch erfahrene Orthopädietechniker.",
    intro: [
      "Unsere Daumenorthesen bieten nicht nur Schutz, sondern auch Tragekomfort für Ihr Daumengelenk. Ob nach einer Operation, einem Unfall oder aufgrund von Arthrose oder einer Fehlstellung – unsere maßgefertigten und vorkonfektionierten Orthesen sind darauf ausgelegt, Ihrem Daumen Stabilität zu geben und dabei die Bewegungsfreiheit Ihrer Hand zu erhalten.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Daumenorthesen",
    paragraphs: [
      "Unsere vorkonfektionierten Orthesen in verschiedenen Größen sind eine schnelle und effektive Lösung für eine Vielzahl von Daumen-Problemen. Von Rhizarthrose bis zu Reizzuständen – unsere Daumenorthesen bieten zuverlässige Unterstützung und Entlastung im Alltag und während verschiedener Aktivitäten.",
      "Unsere vorkonfektionierten Orthesen für Daumen, Finger, Hände und Handgelenke beziehen wir ausschließlich von renommierten Herstellern wie Manometric, Bauerfeind, Sporlastic, Bort, Enovis und Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigung von Daumen- und Fingerorthesen",
    paragraphs: [
      "Unsere maßgefertigten Daumenorthesen werden eigens für Sie hergestellt, um Ihnen die optimale Passform und maximale Funktionalität zu garantieren. Ob bei Arthrose, Überbelastung oder nach einer Operation – unser Team aus Orthopädietechnikern arbeitet eng mit Ihnen zusammen, um für Sie eine Sonderanfertigung zu entwickeln, die nicht nur perfekt sitzt, sondern auch Ihren individuellen Bedürfnissen gerecht wird.",
      "Besonders empfehlen möchten wir in diesem Zusammenhang unsere Zusammenarbeit mit Manometric. Die innovativen, maßgefertigten Daumenorthesen dieses Herstellers verbinden modernste 3D-Technologie mit höchstem Tragekomfort und erstklassiger Funktionalität – ideal für Patientinnen und Patienten mit hohen Ansprüchen an Bewegungsfreiheit, Passform und Design.",
      "Von der Immobilisierung bis zur schmerzfreien Bewegung im Alltag – unsere Finger- und Daumenorthesen nach Maß bieten Ihnen optimale Unterstützung, lindern Ihre Schmerzen und verbessern Ihre Lebensqualität.",
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
      { icon: "Boxes", label: "Erstklassige Marken-Produkte" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen & Antworten zur Daumenorthese",
    items: [
      {
        question: "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während medizinische Handbandagen aus einem festen, dehnbaren Gewebe bestehen, das eng an der entsprechenden Körperregion sitzt und flexibel und angenehm auf der Haut liegt, werden Orthesen zusätzlich aus stabilen, mechanischen Elementen hergestellt. Diese entlasten und unterstützen den Körper, indem sie für eine (teilweise) Ruhigstellung von Gelenken und Körperteilen sorgen, bei der Mobilisierung helfen oder neue Bewegungsfreiheit bieten. Daumenorthesen sind eine Mischung aus Orthese und Bandage, weil sie weichere und stabilere Elemente haben.",
      },
      {
        question:
          "Welche Probleme und Beschwerden können mit einer Daumenorthese behandelt und gelindert werden?",
        answer:
          "Es gibt viele Indikationen für eine Daumenorthese oder alternativ eine Daumenbandage als effektives orthopädisches Hilfsmittel. Sie wird vor allem bei Problemen, Schmerzen und Erkrankungen im Daumen, Daumensattelgelenk oder Daumengrundgelenk von einem Arzt verschrieben. Dazu zählen u. a. Arthrose bzw. Rhizarthrose, Arthritis, Skidaumen, Handydaumen und Verstauchungen. Zudem kann eine Orthese nach einer Operation zur Stabilisierung und Unterstützung des Daumens sinnvoll sein.",
      },
      {
        question: "Wie lange dauert es, eine maßgefertigte Daumenorthese herzustellen?",
        answer:
          "Eine vorkonfektionierte Orthese können wir innerhalb von 2 bis 3 Tagen für Sie anpassen. Die Herstellungszeit für eine individuelle Sonderanfertigung in unserer eigenen Berliner Manufaktur variiert je nach Komplexität, beträgt jedoch in der Regel bis zu 4 Wochen. Diese Zeit ist nötig, weil wir diese Orthese dann eigens für Sie herstellen. Und je passgenauer die Orthese ist, desto besser kann sie ihre gewünschte Wirkung entfalten.",
      },
      {
        question: "Werden die Kosten für eine Daumenorthese von der Krankenkasse übernommen?",
        answer:
          "In der Regel werden die Kosten für eine Orthese, Daumenschiene oder medizinische Daumenbandage von der Krankenkasse übernommen, wenn Sie diese von Ihrem Arzt aufgrund von Schmerzen, Verletzungen, einer Operation oder wegen anderer Beschwerden auf Rezept verschrieben bekommen. Gerne unterstützen wir Sie bei der Klärung der Kostenfrage mit Ihrer Krankenkasse und helfen Ihnen bei den nötigen Schritten.",
      },
      {
        question: "Von welchen Herstellern kommen die Orthesen?",
        answer:
          "Die Orthesen in unserem Sanitätshaus beziehen wir ausschließlich von renommierten deutschen und europäischen Marken-Herstellern wie Manometric, Bauerfeind (RhizoLoc®), Sporlastic (RHIZO-HiT®), Bort (Generation Daumenschiene), Össur, Orthoservice, Medi, Aspen und Enovis.",
      },
      {
        question: "Muss ich einen Termin vereinbaren, um eine Daumenorthese anpassen zu lassen?",
        answer:
          "Ja, um sicherzustellen, dass wir ausreichend Zeit für eine gründliche Beratung, Vermessung und Anpassung der Orthese haben, empfehlen wir die vorherige Vereinbarung eines Termins. Dazu können Sie auf Wunsch auch einen Hausbesuch vereinbaren. Wir kommen dann zur Beratung und Vermessung gerne zu Ihnen nach Hause. Sie können uns natürlich auch gerne spontan besuchen, wenn es Ihre Zeit erlaubt.",
      },
      {
        question: "Kann ich meine Hand mit einer Daumenorthese normal benutzen?",
        answer:
          "Wenn es irgendwie möglich ist, passen wir die Daumenorthese so für Sie an, dass Sie Ihre Hand und Ihre Finger für alltägliche Aktivitäten möglichst normal verwenden können.",
      },
      {
        question: "Kann ich meine Daumenorthese auch nachts tragen?",
        answer:
          "Ja, unsere Orthopädietechniker passen die Daumenorthese so an, dass sie bequem und sicher während des Schlafs getragen werden kann, sofern dies medizinisch erforderlich ist.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihr Daumen möglichst gut versorgt wird, ist es wichtig, sich von erfahrenen Sanitätsfachangestellten und Orthopädietechnikern beraten zu lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und mit viel Feingefühl beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unsere Online-Terminvereinbarung. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: DaumenOrthesePageContent = {
  meta: {
    title: "Thumb orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Thumb orthoses from Sanimotion Sanitätshaus Berlin — orthoses, splints and bandages for stability in the thumb and pain-free movement of the hand, off-the-shelf and custom-made by experienced orthopedic technicians.",
  },
  hero: {
    eyebrow: "Thumb orthosis",
    titleLead: "Thumb orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses, splints and bandages for stability in the thumb and pain-free movement of the hand — off-the-shelf & custom-made by experienced orthopedic technicians.",
    intro: [
      "Our thumb orthoses provide not only protection but also wearing comfort for your thumb joint. Whether after an operation, an accident, or due to arthrosis or a misalignment — our custom-made and off-the-shelf orthoses are designed to give your thumb stability while preserving the freedom of movement of your hand.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf thumb orthoses",
    paragraphs: [
      "Our off-the-shelf orthoses in various sizes are a fast and effective solution for a wide range of thumb problems. From rhizarthrosis to irritation conditions — our thumb orthoses provide reliable support and relief in everyday life and during various activities.",
      "We source our off-the-shelf orthoses for thumbs, fingers, hands and wrists exclusively from renowned manufacturers including Manometric, Bauerfeind, Sporlastic, Bort, Enovis and Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made thumb and finger orthoses",
    paragraphs: [
      "Our custom-made thumb orthoses are produced specifically for you to guarantee an optimal fit and maximum functionality. Whether for arthrosis, overuse or after an operation — our team of orthopedic technicians works closely with you to develop a custom build that not only fits perfectly but also meets your individual needs.",
      "In this context, we particularly recommend our collaboration with Manometric. The innovative, custom-made thumb orthoses from this manufacturer combine state-of-the-art 3D technology with the highest wearing comfort and first-class functionality — ideal for patients with high demands on freedom of movement, fit and design.",
      "From immobilisation to pain-free movement in everyday life — our custom-made finger and thumb orthoses provide optimal support, relieve your pain and improve your quality of life.",
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
      { icon: "Boxes", label: "First-class brand products" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ on the thumb orthosis",
    items: [
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While medical hand bandages are made of a firm, stretchy fabric that hugs the affected body region closely and feels flexible and comfortable on the skin, orthoses are additionally made from stable, mechanical elements. These relieve and support the body by (partially) immobilising joints and body parts, helping with mobilisation or providing new freedom of movement. Thumb orthoses are a mix of orthosis and bandage because they have both softer and more stable elements.",
      },
      {
        question:
          "Which problems and complaints can be treated and relieved with a thumb orthosis?",
        answer:
          "There are many indications for a thumb orthosis, or alternatively a thumb bandage, as an effective orthopedic aid. It is mainly prescribed by a physician for problems, pain and conditions in the thumb, thumb saddle joint or thumb base joint. These include arthrosis or rhizarthrosis, arthritis, skier's thumb, smartphone thumb and sprains. After an operation, an orthosis can also be useful for stabilising and supporting the thumb.",
      },
      {
        question: "How long does it take to produce a custom-made thumb orthosis?",
        answer:
          "We can fit an off-the-shelf orthosis for you within 2 to 3 days. The production time for an individual custom build in our own Berlin workshop varies depending on complexity, but usually amounts to up to 4 weeks. This time is needed because we produce the orthosis specifically for you. And the more accurately the orthosis fits, the better it can develop its intended effect.",
      },
      {
        question: "Are the costs of a thumb orthosis covered by health insurance?",
        answer:
          "As a rule, the costs of an orthosis, thumb splint or medical thumb bandage are covered by health insurance when it has been prescribed to you by your physician for pain, injuries, an operation or other complaints. We're happy to support you in clarifying cost coverage with your health insurer and to help you with the necessary steps.",
      },
      {
        question: "Which manufacturers do the orthoses come from?",
        answer:
          "We source the orthoses at our Sanitätshaus exclusively from renowned German and European brand manufacturers such as Manometric, Bauerfeind (RhizoLoc®), Sporlastic (RHIZO-HiT®), Bort (Generation Daumenschiene), Össur, Orthoservice, Medi, Aspen and Enovis.",
      },
      {
        question: "Do I need to make an appointment to have a thumb orthosis fitted?",
        answer:
          "Yes — to ensure we have enough time for thorough advice, measurement and fitting of the orthosis, we recommend booking an appointment in advance. On request you can also arrange a home visit; we'll happily come to your home for advice and measurement. You can of course drop by spontaneously if your time allows.",
      },
      {
        question: "Can I use my hand normally with a thumb orthosis?",
        answer:
          "Whenever possible, we adjust the thumb orthosis for you so you can use your hand and fingers as normally as possible for everyday activities.",
      },
      {
        question: "Can I also wear my thumb orthosis at night?",
        answer:
          "Yes — our orthopedic technicians fit the thumb orthosis so it can be worn comfortably and safely during sleep, provided this is medically necessary.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your thumb is cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and great care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, DaumenOrthesePageContent> = {
  de: daumenOrthesePageSchema.parse(de),
  en: daumenOrthesePageSchema.parse(en),
};

export const getDaumenOrtheseContent = (
  locale: Locale,
): DaumenOrthesePageContent => pages[locale];

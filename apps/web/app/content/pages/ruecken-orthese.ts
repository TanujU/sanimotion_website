/*
 * Rücken-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/ruecken-orthese-berlin/: hero (split with photo) →
 * Vorkonfektionierte Rückenorthesen → Sonderanfertigungen von Rückenorthesen
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

export const rueckenOrthesePageSchema = z.object({
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
export type RueckenOrthesePageContent = z.infer<typeof rueckenOrthesePageSchema>;

const de: RueckenOrthesePageContent = {
  meta: {
    title: "Rückenorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Rückenorthesen vom Sanimotion Sanitätshaus Berlin – konfektioniert und maßgefertigt durch erstklassige Orthopädietechniker für Stabilität und schmerzfreie Bewegung am Rücken.",
  },
  hero: {
    eyebrow: "Rücken-Orthese",
    titleLead: "Rückenorthese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen und Bandagen für Ruhigstellung und Stabilität des Rückens – vorkonfektioniert & maßgefertigt durch erstklassige Orthopädietechniker",
    intro: [
      "Unsere Rückenorthesen versprechen nicht nur Stabilität, sondern auch den Komfort, den Sie im Alltag benötigen. Ob nach einer Verletzung, einem Bandscheibenvorfall oder bei chronischen Rückenschmerzen – unsere Orthopädietechniker fertigen für Ihren Rücken eine Orthese, die nicht nur perfekt passt, sondern auch den Heilungsprozess unterstützt.",
      "Ob vorkonfektioniert oder maßgefertigt, mit unseren hochwertigen Orthesen und medizinischen Bandagen profitieren Sie von schmerzfreier Bewegung sowie von der ausgewogenen Balance zwischen Nutzen und Tragekomfort.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Rückenorthesen",
    paragraphs: [
      "Unsere vorkonfektionierten Rückenorthesen bieten sofortige Stabilisierung für Patienten mit Wirbelkörperfrakturen, Bandscheibenvorfällen oder Hexenschuss. Sie entlasten die Lendenwirbelsäule (LWS) gezielt und fördern den Heilungsprozess. Leicht anzulegen und in verschiedenen Größen erhältlich, bieten sie eine wirksame Lösung für akute Rückenbeschwerden.",
      "Unsere vorkonfektionierten Orthesen und Bandagen für den Rücken und alle weiteren Gelenke beziehen wir ausschließlich von namhaften Marken-Herstellern wie unter anderem Bauerfeind, Sporlastic, Bort, Medi und Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigung von Rückenorthesen",
    paragraphs: [
      "Sollte in Ihrem Fall eine konfektionierte Orthese aufgrund besonderer Anforderungen an Passform und Funktionalität nicht ausreichen, fertigen wir in unserer hauseigenen Berliner Orthopädie-Werkstatt in Kreuzberg eine Rückenorthese nach Maß für Sie an. Unsere erfahrenen Orthopädietechniker sorgen mit der Sonderanfertigung dafür, dass Ihre Orthese bzw. Rückenbandage perfekt sitzt. Dazu nehmen wir u. a. auch ein 3D-Scan Ihres Rückens vor.",
      "Unsere maßgefertigten Rückenorthesen werden von erfahrenen Orthopädietechnikern individuell angepasst. Sie bieten nicht nur Stabilität und Entlastung, sondern auch höchsten Tragekomfort. Bei Erkrankungen wie Osteoporose, Hyperlordose oder Muskelschwäche bieten sie gezielte Unterstützung. Durch innovative Materialien und präzise Anpassung fördern sie die Aufrichtung der Wirbelsäule, helfen bei der Mobilisierung und lindern Ihre Schmerzen. So verhilft Ihnen die sonderangefertigte Orthese zu mehr Lebensqualität.",
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
    title: "FAQ zur Rückenorthese",
    items: [
      {
        question:
          "Werden die Kosten für eine Rückenorthese von der Krankenkasse übernommen?",
        answer:
          "Ja, die Kosten werden in der Regel von der Krankenkasse übernommen, wenn Sie aufgrund von Schmerzen, Verletzungen, Operationen oder anderen Beschwerden im Bereich des Rückens und der Wirbelsäule eine Orthese oder Bandage auf Rezept von Ihrem Arzt/Orthopäden verordnet bekommen. Gerne sind wir Ihnen bei der Klärung der Kostenübernahme durch Ihre Krankenkasse behilflich und unterstützen Sie bei Bedarf bei der Antragstellung.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Rückenorthese anpassen zu lassen?",
        answer:
          "Ja, wir empfehlen Ihnen, vorab einen Termin zu vereinbaren, damit wir genügend Zeit für eine ausführliche Beratung, Vermessung und Anpassung der Orthese haben. Auf Wunsch können Sie auch einen Termin für einen Hausbesuch vereinbaren. Gerne kommen wir dann zur Beratung und Vermessung zu Ihnen nach Hause. Wenn es Ihre Zeit erlaubt, können Sie uns natürlich auch spontan besuchen. In diesem Fall kann es allerdings zu Wartezeiten kommen.",
      },
      {
        question: "Was bewirkt eine Rückenorthese / Rückenbandage?",
        answer:
          "Je nach Krankheitsbild und Anfertigung kann eine Rückenorthese oder -bandage mehrere Funktionen erfüllen. Sie kann die Wirbelsäule mobilisieren, entlasten, stützen, aufrichten, stabilisieren und Fehlstellungen korrigieren sowie Belastungsmomente ausgleichen oder auch die Beweglichkeit der Gelenke gezielt einschränken. Der Erhalt der Beweglichkeit bei guter Schmerzkontrolle trägt zu einer hohen Lebensqualität bei und ist ein wichtiges Behandlungsziel.",
      },
      {
        question: "Wann ist eine Rückenorthese überhaupt sinnvoll?",
        answer:
          "Es gibt verschiedene Indikationen. Zum Beispiel kann der Einsatz als orthopädisches Hilfsmittel bei Rückenschmerzen, Hexenschuss, Ischiasbeschwerden oder chronischen Erkrankungen am Rücken sinnvoll sein und zur Schmerzlinderung beitragen. Ein weiterer Anwendungsfall ist die starke Krümmung der Lendenwirbelsäule, auch Hohlkreuz oder Hyperlordose genannt. Bei starker Osteoporose kann die Orthese auch die Funktion eines Stützkorsetts übernehmen.",
      },
      {
        question:
          "Wie lange dauert die Herstellung einer maßgefertigten Rückenorthese?",
        answer:
          "Die Sonderanfertigung einer maßgefertigten Rücken- oder Wirbelsäulenorthese in unserer Orthopädiewerkstatt in Berlin dauert je nach Komplexität der Anforderungen in der Regel bis zu 4 Wochen. Denn nur wenn die Orthese optimal an Ihren Körper angepasst ist, kann sie ihre volle Wirkung entfalten.",
      },
      {
        question:
          "Wie lange dauert die Anpassung einer konfektionierten Rückenorthese?",
        answer:
          "Wir sind in der Lage, Ihnen innerhalb von 2 bis 3 Tagen eine vorkonfektionierte Orthese individuell für Ihren Rücken anzupassen.",
      },
      {
        question: "Von welchen Herstellern kommen die Rückenorthesen?",
        answer:
          "In unserem Sanimotion Sanitätshaus Berlin beziehen wir die vorkonfektionierten Orthesen und medizinischen Bandagen für alle Gelenke wie Schulter, Ellenbogen, Handgelenk, Sprunggelenk, Knie etc. in verschiedenen Größen ausschließlich von namhaften deutschen und europäischen Marken-Herstellern wie Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen und Enovis.",
      },
      {
        question:
          "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während eine medizinische Rückenbandage aus einem festen, dehnbaren Gewebe besteht, das sich eng an die betroffene Körperstelle anschmiegt und dabei flexibel und angenehm auf der Haut liegt, besitzt eine Rückenorthese zusätzlich stabile, teilweise mechanische Elemente. Diese entlasten und stützen den Körper, indem sie das Gelenk und die umliegenden Körperteile (teilweise) ruhig stellen.",
      },
      {
        question: "Wie lang muss die Rückenorthese getragen werden?",
        answer:
          "Die Tragedauer der Orthese hängt vom Krankheitsbild und dem Behandlungsziel ab. In der Regel muss die Orthese ca. sechs bis acht Wochen lang getragen werden. In manchen Fällen kann auch eine Dauerverordnung nötig sein. Häufig erfolgt parallel eine langsame Mobilisierung des Rückens und der Wirbelsäule unter krankengymnastischer Anleitung.",
      },
      {
        question:
          "Kann ich meine Rückenorthese auch nachts tragen und damit duschen?",
        answer:
          "Die Anzahl der Stunden, die die Orthese oder Rückenbandage täglich getragen werden muss, und ob sie auch nachts getragen werden muss, hängt vom Therapie- und Rehabilitationsplan Ihres Arztes ab. Wenn sich die Orthese oder Bandage mit Wasser vollsaugt, sollte sie zum Duschen ausgezogen werden. Wir beraten Sie gerne, wie Sie die Orthese im Alltag am besten verwenden.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihre Rücken und Ihre Wirbelsäule optimal versorgt sind, ist es wichtig, dass Sie sich von erfahrenen Sanitätsfachkräften und Orthopädietechnikern beraten lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und einfühlsam beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unseren Online-Terminvereinbarung. Wir freuen uns auf Sie!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: RueckenOrthesePageContent = {
  meta: {
    title: "Back orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Back orthoses from Sanimotion Sanitätshaus Berlin — off-the-shelf and custom-made by first-class orthopedic technicians for stability and pain-free movement of the back.",
  },
  hero: {
    eyebrow: "Back orthosis",
    titleLead: "Back orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses and bandages for immobilisation and stability of the back — off-the-shelf & custom-made by first-class orthopedic technicians",
    intro: [
      "Our back orthoses promise not only stability but also the comfort you need in everyday life. Whether after an injury, a herniated disc or with chronic back pain — our orthopedic technicians produce an orthosis for your back that not only fits perfectly, but also supports the healing process.",
      "Whether off-the-shelf or custom-made, with our high-quality orthoses and medical bandages you benefit from pain-free movement and the balanced ratio between effectiveness and wearing comfort.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf back orthoses",
    paragraphs: [
      "Our off-the-shelf back orthoses provide immediate stabilisation for patients with vertebral fractures, herniated discs or lumbago. They specifically relieve the lumbar spine (LWS) and support the healing process. Easy to put on and available in various sizes, they offer an effective solution for acute back complaints.",
      "We source our off-the-shelf orthoses and bandages for the back and all other joints exclusively from renowned brand manufacturers such as Bauerfeind, Sporlastic, Bort, Medi and Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made back orthoses",
    paragraphs: [
      "If, in your case, an off-the-shelf orthosis does not meet special requirements for fit and function, we produce a custom-made back orthosis for you in our in-house Berlin orthopedic workshop in Kreuzberg. Our experienced orthopedic technicians ensure with the custom-made build that your orthosis or back bandage fits perfectly. To do this we also take a 3D scan of your back, among other things.",
      "Our custom-made back orthoses are individually fitted by experienced orthopedic technicians. They provide not only stability and relief but also the highest wearing comfort. For conditions such as osteoporosis, hyperlordosis or muscular weakness they offer targeted support. Through innovative materials and precise fitting, they promote the alignment of the spine, help with mobilisation and relieve your pain. In this way, the custom-made orthosis helps you to a better quality of life.",
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
    title: "FAQ on the back orthosis",
    items: [
      {
        question:
          "Are the costs of a back orthosis covered by health insurance?",
        answer:
          "Yes — the costs are usually covered by health insurance when your physician/orthopedist has prescribed an orthosis or bandage for pain, injuries, operations or other complaints in the area of the back and spine. We're happy to help you clarify cost coverage with your health insurer and assist with the application if needed.",
      },
      {
        question:
          "Do I need to make an appointment to have a back orthosis fitted?",
        answer:
          "Yes — we recommend booking an appointment in advance so we have enough time for thorough advice, measurement and fitting of the orthosis. On request, you can also arrange a home visit; we'll then come to you for advice and measurement. If your time allows you're of course welcome to drop by spontaneously, but in that case there may be waiting times.",
      },
      {
        question: "What does a back orthosis / back bandage do?",
        answer:
          "Depending on the condition and build, a back orthosis or bandage can fulfil several functions. It can mobilise, relieve, support, align, stabilise and correct misalignments of the spine, balance loading moments or specifically restrict joint mobility. Maintaining mobility with good pain control contributes to a high quality of life and is an important treatment goal.",
      },
      {
        question: "When is a back orthosis useful at all?",
        answer:
          "There are various indications. For example, use as an orthopedic aid can be helpful and contribute to pain relief in cases of back pain, lumbago, sciatica or chronic back conditions. Another use case is strong curvature of the lumbar spine, also called hollow back or hyperlordosis. In severe osteoporosis the orthosis can also take on the function of a support corset.",
      },
      {
        question: "How long does it take to produce a custom-made back orthosis?",
        answer:
          "The custom build of a custom-made back or spinal orthosis in our orthopedic workshop in Berlin typically takes up to 4 weeks, depending on the complexity of the requirements. Because only when the orthosis is optimally fitted to your body can it develop its full effect.",
      },
      {
        question:
          "How long does it take to fit an off-the-shelf back orthosis?",
        answer:
          "We are able to fit an off-the-shelf orthosis individually for your back within 2 to 3 days.",
      },
      {
        question: "Which manufacturers do the back orthoses come from?",
        answer:
          "At our Sanimotion Sanitätshaus Berlin we source the off-the-shelf orthoses and medical bandages for all joints — shoulder, elbow, wrist, ankle, knee etc. — in various sizes exclusively from renowned German and European brand manufacturers such as Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen and Enovis.",
      },
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While a medical back bandage is made of a firm, stretchy fabric that hugs the affected area closely and feels flexible and comfortable on the skin, a back orthosis additionally has stable, partly mechanical elements. These relieve and support the body by (partially) immobilising the joint and the surrounding body parts.",
      },
      {
        question: "How long does the back orthosis need to be worn?",
        answer:
          "The wearing time of the orthosis depends on the condition and the treatment goal. As a rule, the orthosis must be worn for around six to eight weeks. In some cases a permanent prescription may also be necessary. Often, slow mobilisation of the back and spine takes place in parallel under physiotherapeutic guidance.",
      },
      {
        question: "Can I wear my back orthosis at night and shower with it?",
        answer:
          "The number of hours the orthosis or back bandage must be worn each day, and whether it must also be worn at night, depends on your physician's therapy and rehabilitation plan. If the orthosis or bandage soaks up water, it should be removed for showering. We're happy to advise on how best to use the orthosis in everyday life.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your back and spine are cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, RueckenOrthesePageContent> = {
  de: rueckenOrthesePageSchema.parse(de),
  en: rueckenOrthesePageSchema.parse(en),
};

export const getRueckenOrtheseContent = (
  locale: Locale,
): RueckenOrthesePageContent => pages[locale];

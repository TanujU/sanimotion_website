/*
 * Schulter-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/schulter-orthese-berlin/: hero (split with photo) →
 * Vorkonfektionierte Schulterorthesen → Sonderanfertigungen von Schulterorthesen
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

export const schulterOrthesePageSchema = z.object({
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
export type SchulterOrthesePageContent = z.infer<
  typeof schulterOrthesePageSchema
>;

const de: SchulterOrthesePageContent = {
  meta: {
    title: "Schulterorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Schulterorthesen vom Sanimotion Sanitätshaus Berlin – konfektioniert und maßgefertigt durch erfahrene Orthopädietechniker für Ruhigstellung, Stabilität und schmerzfreie Bewegung in der Schulter.",
  },
  hero: {
    eyebrow: "Schulter-Orthese",
    titleLead: "Schulterorthese in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen und Bandagen für Ruhigstellung und Stabilität in der Schulter – konfektioniert & maßgefertigt durch erfahrene Orthopädietechniker",
    intro: [
      "Unsere Schulterorthesen versprechen nicht nur Stabilität, sondern auch den Komfort, den Sie im Alltag benötigen. Ob nach Verletzungen, Operationen oder bei chronischen Schulterschmerzen – unsere Orthopädietechniker fertigen für Ihre Schulter eine Orthese, die nicht nur perfekt passt, sondern auch den Heilungsprozess unterstützt.",
      "Ob vorkonfektioniert oder maßgefertigt, mit unseren hochwertigen Orthesen und medizinischen Bandagen profitieren Sie von schmerzfreier Bewegung sowie von der ausgewogenen Balance zwischen Nutzen und Tragekomfort.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Schulterorthesen",
    paragraphs: [
      "Unsere vorgefertigten Schulterorthesen bieten sofortige Stabilisierung und Schutz für Ihre Schulter. Von Sehnenabrissen bis zu Luxationen – unsere Bandagen und Gurte lindern Schmerzen effektiv und unterstützen den Heilungsprozess. Sie sind leicht an- und auszuziehen und bieten dennoch eine stabile Fixierung, die den täglichen Anforderungen standhält. Unsere Orthopädietechniker passen jede Orthese präzise an, um sicherzustellen, dass sie optimal sitzt und Ihnen den nötigen Halt gibt. Dabei berücksichtigen wir selbstverständlich Ihre individuellen Bedürfnisse und das spezifische Krankheitsbild, um Ihren Heilungsprozess der Knochen, Muskeln und Sehnen positiv zu beeinflussen.",
      "Unsere vorkonfektionierten Orthesen und Bandagen für die Schulter und alle weiteren Gelenke beziehen wir ausschließlich von renommierten Marken-Herstellern wie u. a. Bauerfeind, Sporlastic, Bort, Medi und Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigung von Schulterorthesen",
    paragraphs: [
      "Sollte in Ihrem Fall eine vorkonfektionierte Schulterorthese aufgrund besonderer Anforderungen an Passform und Funktionalität nicht ausreichen, nehmen wir in unserer hauseigenen Orthopädie-Werkstatt in Berlin eine Sonderanfertigung vor. Das heißt, wir fertigen extra für Sie und Ihre Schulter eine individuelle Orthese an. Bei Bedarf geht die Konstruktion über das Schultergelenk hinaus und reicht den Arm entlang über den Ellenbogen bis zum Handgelenk. Unsere erfahrenen Orthopädietechniker sorgen dabei mit Hilfe von 3D-Scans dafür, dass Ihre Orthese bzw. Schulterbandage perfekt sitzt.",
      "Ob Unfall, Sportverletzung, Arthrose, chronische Entzündung oder ein Ausrenken der Schulter – unsere maßgefertigten Orthesen verhelfen Ihnen zu mehr Lebensqualität, indem sie Ihrem Gelenk Stabilität geben, die Heilung fördern und Ihre Schmerzen lindern.",
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
    title: "Häufige Fragen & Antworten zur Schulterorthese",
    items: [
      {
        question:
          "Werden die Kosten für eine Schulterorthese von der Krankenkasse übernommen?",
        answer:
          "Ja, die Kosten werden in der Regel von der Krankenkasse übernommen, wenn Sie aufgrund von Schmerzen, Verletzungen, Operationen oder anderen Beschwerden in der Schulter eine Orthese oder Bandage auf Rezept von Ihrem Arzt/Orthopäden verordnet bekommen. Wir helfen Ihnen bei der Klärung der Kostenübernahme durch Ihre Krankenkasse und unterstützen Sie auf Wunsch Bedarf bei der Antragstellung.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Schulterorthese anpassen zu lassen?",
        answer:
          "Ja, wir empfehlen Ihnen, vorab einen Termin zu vereinbaren, damit wir genügend Zeit für eine ausführliche Beratung, Vermessung und Anpassung der Orthese haben. Auf Wunsch können Sie auch einen Termin für einen Hausbesuch vereinbaren. Gerne kommen wir dann zur Beratung und Vermessung zu Ihnen nach Hause. Wenn es Ihre Zeit erlaubt, können Sie uns natürlich auch spontan besuchen. In diesem Fall kann es jedoch zu Wartezeiten kommen.",
      },
      {
        question:
          "Wie lange dauert es, eine maßgefertigte Schulterorthese herzustellen?",
        answer:
          "Wir sind in der Lage, Ihnen eine vorkonfektionierte Orthese innerhalb von 2 bis 3 Tagen anzupassen. Die Sonderanfertigung einer maßgefertigten Schultergelenkorthese in unserer eigenen Manufaktur in Berlin dauert deutlich länger. Je nach Komplexität der Anforderungen beträgt sie in der Regel bis zu 4 Wochen. Um eine hohe Qualität und Passgenauigkeit zu gewährleisten, ist es wichtig, sich diese Zeit zu nehmen. Denn nur wenn die Orthese optimal an Ihren Körper angepasst ist, kann sie ihre volle Wirkung entfalten.",
      },
      {
        question: "Wann ist eine Schulterorthese überhaupt sinnvoll?",
        answer:
          "Das Tragen einer Schulterorthese wird immer dann empfohlen, wenn das Schultergelenk für eine gewisse Zeit entlastet oder gestützt werden muss. Dies kann bei plötzlich auftretenden akuten Schmerzen nach Verletzungen ebenso der Fall sein wie bei langwierigen chronischen Erkrankungen. Typische Indikationen bzw. Krankheitsbilder, bei denen eine Orthese als orthopädisches Hilfsmittel zum Einsatz kommt, sind u.a. Arthrose, Arthritis, Entzündungen, Muskelverrenkungen sowie Muskelrisse und Sehnenrisse. Darüber hinaus unterstützen sie die Heilung nach Schulteroperationen durch Ruhigstellung und Schmerzlinderung im Schultergelenk.",
      },
      {
        question:
          "Kann ich meine Schulterorthese auch nachts tragen und damit duschen?",
        answer:
          "Wenn möglich, passen unsere Orthopädietechniker die Orthese so an, dass sie bequem und sicher während des Schlafs getragen werden kann, sofern dies medizinisch erforderlich ist. Sofern die Schulterorthese wasserbeständig ist, können Sie diese auch unter der Dusche tragen. Spezifische Informationen dazu erhalten Sie bei der Anpassung von unseren Sanitätshaus-Fachberatern.",
      },
      {
        question:
          "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während eine medizinische Schulterbandage aus einem festen, dehnbaren Gewebe besteht, das eng an der entsprechenden Körperstelle sitzt und dabei flexibel und angenehm auf der Haut liegt, hat eine Orthese zusätzlich stabile, mechanische Elemente. Diese entlasten und unterstützen den Körper, indem sie für eine (teilweise) Ruhigstellung des Gelenks und der umliegenden Körperteile sorgt. Oft gehört zur Schulterrorthese auch noch ein Schultergurt, der den Unterarm stützt. Zudem können Orthesen je nach Zweck und Bauweise auch bei der Mobilisierung helfen und einen bestimmten Bewegungsradius erlauben.",
      },
      {
        question: "Von welchen Herstellern kommen die Schulterorthesen?",
        answer:
          "In unserem Sanimotion Sanitätshaus Berlin beziehen wir die vorkonfektionierten Orthesen und medizinischen Bandagen für alle Gelenken wie Schulter, Ellenbogen, Handgelenk, Daumen, Knie etc. in verschiedenen Größen ausschließlich von namhaften deutschen und europäischen Marken-Herstellern wie unter anderem Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen und Enovis.",
      },
      {
        question: "Wie lang muss die Schulterorthese getragen werden?",
        answer:
          "Die Tragedauer der Orthese hängt vom Krankheitsbild und dem Behandlungsziel ab. In der Regel muss die Orthese für mehrere Wochen getragen werden, was in dieser Zeit einen eingeschränkten Bewegungsumfang bedeutet. Häufig erfolgt parallel eine langsame Mobilisierung des Gelenkes unter krankengymnastischer Anleitung.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihre Schulter optimal versorgt ist, ist es wichtig, dass Sie sich von erfahrenen Sanitätsfachkräften und Orthopädietechnikern beraten lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und einfühlsam beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unseren Online-Terminvereinbarung. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: SchulterOrthesePageContent = {
  meta: {
    title: "Shoulder orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Shoulder orthoses from Sanimotion Sanitätshaus Berlin — off-the-shelf and custom-made by experienced orthopedic technicians for immobilisation, stability and pain-free movement of the shoulder.",
  },
  hero: {
    eyebrow: "Shoulder orthosis",
    titleLead: "Shoulder orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses and bandages for immobilisation and stability of the shoulder — off-the-shelf & custom-made by experienced orthopedic technicians",
    intro: [
      "Our shoulder orthoses promise not only stability but also the comfort you need in everyday life. Whether after injuries, operations or with chronic shoulder pain — our orthopedic technicians produce an orthosis for your shoulder that not only fits perfectly, but also supports the healing process.",
      "Whether off-the-shelf or custom-made, with our high-quality orthoses and medical bandages you benefit from pain-free movement and the balanced ratio between effectiveness and wearing comfort.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf shoulder orthoses",
    paragraphs: [
      "Our off-the-shelf shoulder orthoses provide immediate stabilisation and protection for your shoulder. From tendon ruptures to dislocations — our bandages and slings effectively relieve pain and support the healing process. They are easy to put on and take off and yet provide a stable fixation that withstands the demands of daily life. Our orthopedic technicians fit each orthosis precisely to ensure it sits optimally and gives you the support you need. We naturally take into account your individual needs and the specific clinical picture in order to positively influence the healing process of bones, muscles and tendons.",
      "We source our off-the-shelf orthoses and bandages for the shoulder and all other joints exclusively from renowned brand manufacturers including Bauerfeind, Sporlastic, Bort, Medi and Orthoservice.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made shoulder orthoses",
    paragraphs: [
      "If, in your case, an off-the-shelf shoulder orthosis does not meet special requirements for fit and function, we produce a custom build in our in-house orthopedic workshop in Berlin. That means we manufacture an individual orthosis specifically for you and your shoulder. Where required, the construction extends beyond the shoulder joint and runs along the arm over the elbow as far as the wrist. Our experienced orthopedic technicians use 3D scans to ensure that your orthosis or shoulder bandage fits perfectly.",
      "Whether after an accident, sports injury, arthrosis, chronic inflammation or shoulder dislocation — our custom-made orthoses help you to a better quality of life by giving your joint stability, supporting healing and relieving your pain.",
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
    title: "FAQ on the shoulder orthosis",
    items: [
      {
        question:
          "Are the costs of a shoulder orthosis covered by health insurance?",
        answer:
          "Yes — the costs are usually covered by health insurance when your physician/orthopedist has prescribed an orthosis or bandage for pain, injuries, operations or other complaints in the shoulder. We're happy to help you clarify cost coverage with your health insurer and assist with the application if needed.",
      },
      {
        question:
          "Do I need to make an appointment to have a shoulder orthosis fitted?",
        answer:
          "Yes — we recommend booking an appointment in advance so we have enough time for thorough advice, measurement and fitting of the orthosis. On request, you can also arrange a home visit; we'll then come to you for advice and measurement. If your time allows, you're of course welcome to drop by spontaneously, but in that case there may be waiting times.",
      },
      {
        question:
          "How long does it take to produce a custom-made shoulder orthosis?",
        answer:
          "We are able to fit an off-the-shelf orthosis to you within 2 to 3 days. The custom build of a custom-made shoulder-joint orthosis in our own workshop in Berlin takes considerably longer. Depending on the complexity of the requirements it usually takes up to 4 weeks. To ensure high quality and an accurate fit it is important to take this time. Because only when the orthosis is optimally fitted to your body can it develop its full effect.",
      },
      {
        question: "When is a shoulder orthosis useful at all?",
        answer:
          "Wearing a shoulder orthosis is recommended whenever the shoulder joint needs to be relieved or supported for a certain period of time. This may be the case with sudden acute pain after injuries as well as with long-term chronic conditions. Typical indications and clinical pictures in which an orthosis is used as an orthopedic aid include arthrosis, arthritis, inflammation, muscle dislocations as well as muscle and tendon ruptures. They also support healing after shoulder operations through immobilisation and pain relief in the shoulder joint.",
      },
      {
        question:
          "Can I wear my shoulder orthosis at night and shower with it?",
        answer:
          "Where possible, our orthopedic technicians fit the orthosis so it can be worn comfortably and safely during sleep, provided this is medically necessary. If the shoulder orthosis is water-resistant, you can also wear it in the shower. You'll receive specific information on this from our specialist advisors during the fitting.",
      },
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While a medical shoulder bandage is made of a firm, stretchy fabric that hugs the affected area closely and feels flexible and comfortable on the skin, an orthosis additionally has stable, mechanical elements. These relieve and support the body by (partially) immobilising the joint and the surrounding body parts. Often a shoulder orthosis also includes a shoulder sling that supports the forearm. Depending on purpose and design, orthoses can also help with mobilisation and allow a defined range of motion.",
      },
      {
        question: "Which manufacturers do the shoulder orthoses come from?",
        answer:
          "At our Sanimotion Sanitätshaus Berlin we source the off-the-shelf orthoses and medical bandages for all joints — shoulder, elbow, wrist, thumb, knee etc. — in various sizes exclusively from renowned German and European brand manufacturers such as Bauerfeind, Sporlastic, Bort, Össur, Orthoservice, Medi, Aspen and Enovis.",
      },
      {
        question: "How long does the shoulder orthosis need to be worn?",
        answer:
          "The wearing time of the orthosis depends on the condition and the treatment goal. As a rule, the orthosis must be worn for several weeks, which means a restricted range of motion during this time. Often, slow mobilisation of the joint takes place in parallel under physiotherapeutic guidance.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your shoulder is cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, SchulterOrthesePageContent> = {
  de: schulterOrthesePageSchema.parse(de),
  en: schulterOrthesePageSchema.parse(en),
};

export const getSchulterOrtheseContent = (
  locale: Locale,
): SchulterOrthesePageContent => pages[locale];

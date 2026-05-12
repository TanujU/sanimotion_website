/*
 * Fuß-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/fuss-orthese-berlin/: hero (split with photo) →
 * Vorkonfektioniert vs. Sonderanfertigung intro → Maßanfertigung block
 * with photo → 6 service highlights → Krankenkasse → Persönliche
 * Beratung → FAQ accordion → contact. Copy is sourced verbatim from
 * the reference page.
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

export const fussOrthesePageSchema = z.object({
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
export type FussOrthesePageContent = z.infer<typeof fussOrthesePageSchema>;

const de: FussOrthesePageContent = {
  meta: {
    title: "Fuß-Orthese Berlin | Sanimotion Sanitätshaus",
    description:
      "Fußorthesen vom Sanimotion Sanitätshaus Berlin – maßgefertigt und vorkonfektioniert für mehr Bewegung und weniger Schmerzen in Fuß und Sprunggelenk.",
  },
  hero: {
    eyebrow: "Fuß-Orthese",
    titleLead: "Fußorthesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen und Bandagen für schmerzfreie Bewegung und Stabilität in Fuß und Sprunggelenk – maßgefertigt & konfektioniert durch erfahrene Orthopädietechniker.",
    intro:
      "In unserem Sanitätshaus Sanimotion Berlin erhalten Sie maßgefertigte und vorkonfektionierte Fußorthesen für mehr Bewegung und weniger Schmerzen. Unsere hochwertigen und komfortablen Orthesen für Füße, Sprunggelenke, Knie und Unterschenkel versprechen nach Verletzungen und Operationen sowie bei Fehlstellungen individuellen Komfort, größtmögliche Stabilität und Entlastung sowie ein rundes Gangbild.",
  },
  varianten: {
    eyebrow: "Vorkonfektioniert & maßgefertigt",
    title: "Fußorthesen für jeden Bedarf",
    paragraphs: [
      "Unsere Orthesen beziehen wir ausschließlich von renommierten Herstellern wie Bauerfeind, Sporlastic, Bort, Medi, Aspen, Enovis und Orthoservice. So stellen wir sicher, dass Sie höchste Qualität, geprüfte Materialien und bewährte Funktionalität erhalten – ob als vorkonfektionierte Lösung oder als individuelle Sonderanfertigung.",
      "Vorkonfektionierte Fußorthesen können wir Ihnen meist innerhalb weniger Tage anpassen. Sie eignen sich besonders dann, wenn schnell eine wirksame Versorgung benötigt wird oder die Beschwerden mit einem standardisierten Modell sehr gut behandelt werden können.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Maßgefertigte Fußorthesen aus eigener Werkstatt",
    paragraphs: [
      "Unsere maßgefertigten Orthesen werden individuell für Ihren Fuß, Knöchel, Unterschenkel oder Bein entwickelt und hergestellt, um höchste Ansprüche an Passform und Funktionalität zu erfüllen.",
      "Von der Sportverletzung über Gelenkprobleme und Schmerzen in der Achillessehne bis zur chronischen Erkrankung – unsere maßgefertigten Fußorthesen geben Ihrem Fuß und Sprunggelenk optimalen Halt, lindern Schmerzen, geben mehr Bewegungsfreiheit und verbessern Ihr Gangbild.",
      "Die Anfertigung erfolgt in unserer eigenen Sanimotion Orthopädie-Werkstatt in Berlin-Kreuzberg – auf Basis von 3D-Scans oder Gipsabdrücken Ihres Fußes und in enger Abstimmung mit Ihrem Lebensalltag.",
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
      { icon: "Boxes", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  krankenkasse: {
    eyebrow: "Kostenübernahme",
    title: "Vermessung, Auswahl & Anprobe – alles auf Rezept",
    paragraphs: [
      "Eine Fußorthese können Sie von Ihrem Arzt verschreiben bekommen. In den meisten Fällen werden die Kosten voll oder zumindest teilweise von der Krankenkasse getragen. Kommen Sie einfach mit dem Rezept für die Vermessung, Auswahl und Anprobe in eines unserer Berliner Sanitätshäuser.",
      "Gerne kommen wir mit unserem Außendienst für die Beratung, Vermessung und Lieferung auch zu Ihnen nach Hause. Unser Hausbesuch-Service ist für Sie vollkommen kostenlos. Bitte vereinbaren Sie dafür vorab einen Termin.",
    ],
  },
  beratung: {
    eyebrow: "Persönliche Beratung",
    title: "Fußorthesen für Therapie, Reha und Sport",
    paragraphs: [
      "Fuß- und Sprunggelenkorthesen kommen häufig zur Therapie nach Bänder- oder Sehnenverletzungen wie einem Achillessehnenriss oder einer Sprunggelenksverletzung zum Einsatz. Auch bei Arthrose, Hallux valgus, Plantarfasziitis, Fersensporn und anderen chronischen Beschwerden werden Orthesen zur Stabilisierung und Schmerzlinderung verwendet.",
      "Sportler nutzen Fußorthesen zudem als vorbeugende Maßnahme, um Gelenke und Bänder vor übermäßiger Beanspruchung zu schützen. Vorbeugende Orthesen sind dehnbar, sanft zur Haut, atmungsaktiv und waschbar.",
      "Gerne beraten unsere Experten Sie in allen Fragen rund um Orthesenversorgung, Orthopädiebedarf, Rehatechnik, Orthopädieschuhtechnik und andere Versorgungslösungen.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen zur Fußorthese",
    items: [
      {
        question:
          "Werden die Kosten für die Fußorthese von der Krankenkasse übernommen?",
        answer:
          "Wenn Sie die Orthese von Ihrem Arzt aufgrund von Fußschmerzen, Verletzungen oder anderen Beschwerden auf Rezept verschrieben bekommen haben, werden die Kosten für die Orthese in den meisten Fällen von der Krankenkasse übernommen. Gerne unterstützen wir Sie bei der Klärung der Kostenfrage und helfen Ihnen bei den nötigen Schritten.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Fußorthese anzupassen?",
        answer:
          "Ja, damit wir genügend Zeit für eine ausführliche Beratung, Vermessung und Anpassung der Orthese haben, empfehlen wir Ihnen, vorab einen Termin in unserem Sanitätshaus zu vereinbaren. Innerhalb Berlins können Sie auch einen Hausbesuch vereinbaren. In diesem Fall kommen wir gerne zur Beratung und Vermessung zu Ihnen nach Hause. Natürlich können Sie uns auch spontan in einem unserer Berliner Sanitätshäuser besuchen, wenn es Ihre Zeit erlaubt.",
      },
      {
        question:
          "Wie lange dauert es, eine maßgefertigte Fußorthese herzustellen?",
        answer:
          "Die Herstellungszeit für eine Sonderanfertigung variiert je nach Komplexität und individuellen Anforderungen, beträgt jedoch in der Regel rund 4 Wochen. Wir streben immer danach, den Prozess so schnell wie möglich zu gestalten, damit Sie möglichst bald von der Wirkung profitieren. Eine vorkonfektionierte Orthese können wir innerhalb weniger Tage für Sie anpassen.",
      },
      {
        question:
          "Welche Fußprobleme können mit einer Fußorthese behandelt und gelindert werden?",
        answer:
          "Die Indikationen für Fuß- und Sprunggelenkorthesen als orthopädisches Hilfsmittel sind vielfältig. Sie können u. a. helfen, Fehlstellungen wie den Hallux valgus zu korrigieren, Schmerzen bei Plantarfasziitis, Fersensporn und Arthrose zu lindern, Sportverletzungen vorzubeugen, das Gangbild zu verbessern sowie Füße und Sprunggelenke nach Verletzungen zu stabilisieren.",
      },
      {
        question: "Brauche ich für eine Fußorthese spezielle Schuhe?",
        answer:
          "Nein, in der Regel benötigen Sie keine speziellen Schuhe, um die Orthese am Fuß zu tragen. Wichtig ist nur, dass die Druckpolster (Pelotten) nicht zu sehr eingeengt werden. Vor längeren Spaziergängen oder sportlichen Aktivitäten sollten Sie die Schuhe mit der Orthese ausprobieren. Außerdem empfehlen wir, unter der Orthese einen Strumpf zu tragen, um Scheuerstellen zu vermeiden.",
      },
      {
        question: "Kann ich mit einer Fußorthese Sport treiben?",
        answer:
          "Bandagen und Orthesen werden nicht nur nach akuten Verletzungen, sondern auch vorbeugend beim Sport empfohlen. Auch Leistungssportler setzen auf die vorbeugende Wirkung einer Fußorthese, um das Gelenk vor Überlastung zu schützen. Insbesondere eine individuell angefertigte Orthese kann ein sehr guter Schutz vor Verletzungen sein.",
      },
      {
        question: "Kann ich mit einer Fußorthese Auto fahren?",
        answer:
          "In den meisten Fällen ist es problemlos möglich, mit einer Fußorthese Auto zu fahren. Sie sollten aber darauf achten, dass Sie noch das nötige Gefühl im Fuß haben, um intuitiv den richtigen Druck für Schaltung, Gas und Bremse wählen zu können.",
      },
      {
        question: "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Beides sind orthopädische Hilfsmittel für eine konservative Versorgung des Gelenks. Während medizinische Bandagen aus einem festen, dehnbaren Gewebe bestehen, das der betroffenen Körperregion eng anliegt und weich und angenehm auf der Haut aufliegt, bestehen Orthesen aus stabilen, mechanischen Elementen, die Gelenke und Körperteile führen, mobilisieren oder (teilweise) ruhig stellen.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu unseren Fußorthesen oder anderen medizinischen Produkten aus unserem breiten Angebot? Bei uns erhalten Sie unter anderem auch Prothesen, orthopädische Einlagen und Maßschuhe. Gerne beraten unsere Experten Sie persönlich – in unserem Sanimotion Sanitätshaus Berlin oder bei einem Hausbesuch durch unseren Außendienst.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: FussOrthesePageContent = {
  meta: {
    title: "Foot orthosis Berlin | Sanimotion Sanitätshaus",
    description:
      "Foot orthoses from Sanimotion Sanitätshaus Berlin — custom-made and off-the-shelf for more movement and less pain in foot and ankle.",
  },
  hero: {
    eyebrow: "Foot orthosis",
    titleLead: "Foot orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses and bandages for pain-free movement and stability in foot and ankle — custom-made and off-the-shelf by experienced orthopedic technicians.",
    intro:
      "At our Sanimotion Sanitätshaus in Berlin you'll find custom-made and off-the-shelf foot orthoses for more movement and less pain. Our high-quality, comfortable orthoses for feet, ankles, knees and lower legs promise individual comfort, maximum stability and relief, as well as a smoother gait — after injuries, surgery and for misalignments.",
  },
  varianten: {
    eyebrow: "Off-the-shelf & custom",
    title: "Foot orthoses for every need",
    paragraphs: [
      "We source our orthoses exclusively from renowned manufacturers such as Bauerfeind, Sporlastic, Bort, Medi, Aspen, Enovis and Orthoservice. That way we make sure you receive the highest quality, tested materials and proven functionality — whether as an off-the-shelf solution or as an individual custom build.",
      "We can usually fit off-the-shelf foot orthoses for you within just a few days. They are particularly suitable when an effective fit is needed quickly or when the symptoms can be treated very well with a standardised model.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom foot orthoses from our own workshop",
    paragraphs: [
      "Our custom-made orthoses are individually developed and produced for your foot, ankle, lower leg or leg, to meet the highest standards of fit and function.",
      "From sports injuries through joint problems and Achilles tendon pain to chronic conditions — our custom-made foot orthoses give your foot and ankle optimal support, relieve pain, restore freedom of movement and improve your gait.",
      "Production takes place in our own Sanimotion orthopedic workshop in Berlin-Kreuzberg — based on 3D scans or plaster casts of your foot, and in close coordination with your everyday life.",
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
      { icon: "Boxes", label: "Huge product range" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  krankenkasse: {
    eyebrow: "Insurance coverage",
    title: "Measurement, selection & fitting — all on prescription",
    paragraphs: [
      "Your physician can prescribe a foot orthosis. In most cases the costs are covered fully or at least partially by your health insurance. Just bring the prescription to one of our Berlin stores for measurement, selection and fitting.",
      "Our field team is happy to come to your home for advice, measurement and delivery. Our home-visit service is completely free of charge. Please arrange an appointment in advance.",
    ],
  },
  beratung: {
    eyebrow: "Personal consultation",
    title: "Foot orthoses for therapy, rehab and sport",
    paragraphs: [
      "Foot and ankle orthoses are often used to treat ligament or tendon injuries such as a ruptured Achilles tendon or an ankle injury. They are also used to stabilise and relieve pain in arthrosis, hallux valgus, plantar fasciitis, heel spur and other chronic conditions.",
      "Athletes also use foot orthoses as a preventive measure to protect joints and ligaments from excessive strain. Preventive orthoses are stretchy, gentle on the skin, breathable and washable.",
      "Our experts are happy to advise you on all questions around orthotic care, orthopedic supplies, rehab technology, orthopedic shoe technology and other care solutions.",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions about foot orthoses",
    items: [
      {
        question:
          "Are the costs for the foot orthosis covered by health insurance?",
        answer:
          "If your physician has prescribed the orthosis for foot pain, injuries or other complaints, the cost of the orthosis is covered by your health insurance in most cases. We're happy to help you clarify the cost question and guide you through the necessary steps.",
      },
      {
        question:
          "Do I need to make an appointment to have a foot orthosis fitted?",
        answer:
          "Yes — so we have enough time for thorough advice, measurement and fitting, we recommend booking an appointment in advance at our store. Within Berlin you can also arrange a home visit; in that case we'll happily come to you for advice and measurement. Of course, you're also welcome to drop by one of our Berlin stores spontaneously if your time allows.",
      },
      {
        question:
          "How long does it take to produce a custom-made foot orthosis?",
        answer:
          "Production time for a custom build varies with complexity and individual requirements, but typically takes around four weeks. We always aim to make the process as fast as possible so you can benefit from the effect quickly. We can fit an off-the-shelf orthosis for you within a few days.",
      },
      {
        question:
          "Which foot problems can be treated and relieved with a foot orthosis?",
        answer:
          "The indications for foot and ankle orthoses as an orthopedic aid are wide-ranging. They can, among other things, help correct misalignments such as hallux valgus, relieve pain in plantar fasciitis, heel spur and arthrosis, prevent sports injuries, improve gait and stabilise feet and ankles after injuries.",
      },
      {
        question: "Do I need special shoes for a foot orthosis?",
        answer:
          "No, you usually don't need special shoes to wear the orthosis on your foot. The important thing is that the pressure pads (pelottes) aren't constricted too tightly. Before longer walks or sports, try the shoes with the orthosis. We also recommend wearing a sock under the orthosis to avoid chafing.",
      },
      {
        question: "Can I do sports with a foot orthosis?",
        answer:
          "Bandages and orthoses are recommended not only after acute injuries but also as a preventive measure during sport. Even competitive athletes rely on the preventive effect of a foot orthosis to protect the joint from overload. A custom-made orthosis in particular can be very good protection against injury.",
      },
      {
        question: "Can I drive a car with a foot orthosis?",
        answer:
          "In most cases it's perfectly possible to drive with a foot orthosis. You should, however, make sure you still have enough feeling in your foot to intuitively choose the right pressure for clutch, accelerator and brake.",
      },
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "Both are orthopedic aids for conservative joint care. While medical bandages are made of a firm, stretchy fabric that fits snugly to the affected body region and feels soft and comfortable on the skin, orthoses consist of stable, mechanical elements that guide, mobilise or (partially) immobilise joints and body parts.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "Do you have questions about our foot orthoses or other medical products from our broad range? With us you'll also find prosthetics, orthopedic insoles and custom shoes, among others. Our experts are happy to advise you in person — at our Sanimotion store in Berlin or during a home visit by our field team.",
      "Call us or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, FussOrthesePageContent> = {
  de: fussOrthesePageSchema.parse(de),
  en: fussOrthesePageSchema.parse(en),
};

export const getFussOrtheseContent = (locale: Locale): FussOrthesePageContent =>
  pages[locale];

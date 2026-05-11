/*
 * Sprunggelenk-Orthese — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/sprunggelenk-orthese-berlin/: hero (split with
 * photo) → Vorkonfektionierte Sprunggelenkorthesen → Sonderanfertigungen
 * von Sprunggelenkorthesen → Was uns auszeichnet (6 highlights) → FAQ
 * accordion → contact. Copy is sourced verbatim from the reference page.
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

export const sprunggelenkOrthesePageSchema = z.object({
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
export type SprunggelenkOrthesePageContent = z.infer<
  typeof sprunggelenkOrthesePageSchema
>;

const de: SprunggelenkOrthesePageContent = {
  meta: {
    title: "Sprunggelenkorthese in Berlin | Sanimotion Sanitätshaus",
    description:
      "Sprunggelenkorthesen vom Sanimotion Sanitätshaus Berlin – konfektioniert und maßgefertigt durch erfahrene Orthopädietechniker für Stabilität und schmerzfreie Bewegung im Sprunggelenk.",
  },
  hero: {
    eyebrow: "Sprunggelenk-Orthese",
    titleLead: "Sprunggelenkorthesen in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Orthesen und Bandagen für schmerzfreie Bewegung und Stabilität im Sprunggelenk – konfektioniert & maßgefertigt durch erfahrene Orthopädietechniker",
    intro: [
      "In den Berliner Sanimotion Sanitätshausern erhalten Sie hochwertige und bequeme Sprunggelenkorthesen für mehr Bewegung und weniger Schmerzen. Unsere konfektionierten und maßgefertigten Orthesen bieten nach Verletzungen und Operationen sowie bei Fehlstellungen individuellen Komfort und optimale Unterstützung für Ihr Fußgelenk.",
      "Unsere Orthesen für Sprunggelenke und Knöchel beziehen wir ausschließlich von renommierten Herstellern wie Bauerfeind, Sporlastic, Bort, Enovis und Orthoservice.",
    ],
  },
  varianten: {
    eyebrow: "Vorkonfektioniert",
    title: "Vorkonfektionierte Sprunggelenkorthesen",
    paragraphs: [
      "Unsere vorkonfektionierten Orthesen sind eine schnelle und effektive Lösung für eine Vielzahl von Problemen an den Füßen und Sprunggelenken. Durch präzise Anpassungen gewährleisten unsere Orthopädietechniker, dass jede Orthese perfekt an Fuß, Knöchel und Unterschenkel sitzt und Ihnen beim Gehen den notwendigen Halt bietet.",
      "Von Bänderrissen und Sehnenbeschwerden bis zu Schwellungen nach einem Umknicken – unsere vorkonfektionierten Sprunggelenkorthesen bieten zuverlässige Unterstützung, Stabilisierung und Entlastung im Alltag und während sportlicher Aktivitäten.",
    ],
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Sonderanfertigungen von Sprunggelenkorthesen",
    paragraphs: [
      "Unsere Sonderanfertigungen werden eigens für Sie hergestellt, um Ihnen höchste Ansprüche an Passform und Funktionalität der Sprunggelenkorthese zu garantieren. Vor allem bei komplexen Fußfehlstellungen oder speziellen Passformbedürfnissen sind maßgefertigte Orthesen auf Basis eines 3D-Scans und/oder eines Gipsabdrucks die ideale Wahl.",
      "Von der Ruhigstellung über die Druckverteilung bis zur mehr Mobilisierung im Alltag – unsere Sprunggelenkorthesen-Sonderanfertigungen bieten optimale Unterstützung. So lindern diese Ihre Schmerzen und verbessern Ihre Lebensqualität.",
      "Unabhängig von der Ursache für Ihre Beschwerden – sei es ein Bänderriss, eine Instabilität, eine Verstauchung oder eine Knöchelfraktur – unsere Orthopädietechniker und unser Fachpersonal im Sanitätshaus verhelfen Ihnen zu einer Orthese, die sowohl perfekt sitzt, als auch Ihren individuellen Lebensstil unterstützt.",
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
    title: "FAQ zu Sprunggelenkorthesen",
    items: [
      {
        question:
          "Was ist der Unterschied zwischen einer Orthese und einer Bandage?",
        answer:
          "Während eine Bandage aus einem festen, dehnbaren Gewebe besteht, das eng an der entsprechenden Körperregion sitzt und flexibel und angenehm auf der Haut liegt, wird eine Orthese aus stabilen, mechanischen Elementen hergestellt. Diese entlastet und unterstützt den Körper, indem sie für eine (teilweise) Ruhigstellung von Gelenken und Körperteilen sorgt, bei der Mobilisierung hilft oder neue Bewegungsfreiheit bietet.",
      },
      {
        question:
          "Welche Fußprobleme können mit einer Sprunggelenkorthese behandelt und gelindert werden?",
        answer:
          "Es gibt viele Indikationen für Sprunggelenk- bzw. Knöchelorthesen. Diese sind nämlich ein effektives orthopädisches Hilfsmittel für eine Vielzahl von Problemen an Fuß, Sprunggelenk und Knöchel, einschließlich Bänderrissen nach dem Umknicken, Fehlstellungen der Knochen, Frakturen und weitere Sprunggelenksverletzungen.",
      },
      {
        question:
          "Wie lange dauert es, eine maßgefertigte Sprunggelenkorthese herzustellen?",
        answer:
          "Eine vorkonfektionierte Orthese können wir innerhalb von 2 bis 3 Tagen für Sie anpassen. Die Sonderanfertigung einer Sprunggelenkorthese in unserer eigenen Berliner Manufaktur variiert je nach Komplexität, beträgt jedoch in der Regel 4 Wochen. Diese Zeit ist nötig, weil wir diese Orthese dann eigens für Sie herstellen. Und je passgenauer die Orthese ist, desto besser kann sie ihre gewünschte Wirkung entfalten.",
      },
      {
        question:
          "Werden die Kosten für Sprunggelenkorthesen von der Krankenkasse übernommen?",
        answer:
          "In den meisten Fällen werden die Kosten für die Orthese von der Krankenkasse übernommen, vor allem wenn Sie diese von Ihrem Arzt aufgrund von Schmerzen, Verletzungen oder anderen Beschwerden auf ein Rezept verschrieben bekommen. Gerne unterstützen wir Sie bei der Klärung der Kostenfrage und helfen Ihnen bei den nötigen Schritten.",
      },
      {
        question: "Von welchen Herstellern kommen die Orthesen?",
        answer:
          "Die Orthesen in unserem Sanitätshaus beziehen wir ausschließlich von renommierten deutschen und europäischen Marken-Herstellern wie Bauerfeind, Sporlastic, Össur, Orthoservice, Bort, Medi, Aspen und Enovis.",
      },
      {
        question:
          "Brauche ich für eine Fuß- bzw. Sprunggelenkorthese spezielle Schuhe?",
        answer:
          "Nein, in der Regel benötigen Sie dazu keine speziellen Schuhe. Wenn Sie eine Sprunggelenk- oder Fußorthese benötigen, empfehlen wir Ihnen jedoch, einen festen Schuh zu tragen. Diese Kombination gewährleistet eine maximale Wirksamkeit und Stabilität. Außerdem sollten Sie unter der Orthese einen Strumpf zu tragen, um Scheuerstellen zu vermeiden.",
      },
      {
        question: "Kann ich mit einer Sprunggelenkorthese Sport treiben?",
        answer:
          "Bandagen und Orthesen sind nicht nur nach einer akuten Verletzung, sondern auch präventiv beim Sport als Vorbeugungsmaßnahme empfehlenswert. Selbst Leistungssportler setzen auf die vorbeugende Wirkung von Bandagen und Orthesen für Knie, Knöchel und Füße, um ihre Gelenke vor einer Überlastung zu schützen. Insbesondere eine nach Maß hergestellte Orthese kann ein ausgezeichneter Schutz vor Verletzungen sein.",
      },
      {
        question:
          "Muss ich einen Termin vereinbaren, um eine Sprunggelenkorthese anpassen zu lassen?",
        answer:
          "Ja, um sicherzustellen, dass wir ausreichend Zeit für eine gründliche Beratung, Vermessung und Anpassung der Orthese haben, empfehlen wir die vorherige Vereinbarung eines Termins. Dazu können Sie auf Wunsch auch einen Hausbesuch vereinbaren. Wir kommen dann zur Beratung und Vermessung gerne zu Ihnen nach Hause. Sie können uns natürlich auch spontan besuchen, wenn es Ihre Zeit erlaubt, denn dann kann es durchaus zu Wartezeiten kommen.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihr Sprunggelenk möglichst gut versorgt wird, ist es wichtig, sich von erfahrenen Sanitätsfachangestellten und Orthopädietechnikern beraten zu lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in einem unserer vier Berliner Sanitätshäuser von unserem qualifizierten Fachpersonal kompetent und mit viel Feingefühl beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unseren Online-Terminvereinbarung. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: SprunggelenkOrthesePageContent = {
  meta: {
    title: "Ankle orthosis in Berlin | Sanimotion Sanitätshaus",
    description:
      "Ankle orthoses from Sanimotion Sanitätshaus Berlin — off-the-shelf and custom-made by experienced orthopedic technicians for stability and pain-free movement in the ankle.",
  },
  hero: {
    eyebrow: "Ankle orthosis",
    titleLead: "Ankle orthoses in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Orthoses and bandages for pain-free movement and stability in the ankle — off-the-shelf & custom-made by experienced orthopedic technicians",
    intro: [
      "At our Sanimotion stores in Berlin you'll find high-quality, comfortable ankle orthoses for more movement and less pain. Our off-the-shelf and custom-made orthoses provide individual comfort and optimal support for your ankle joint after injuries and surgery, as well as for misalignments.",
      "We source our orthoses for ankles exclusively from renowned manufacturers such as Bauerfeind, Sporlastic, Bort, Enovis and Orthoservice.",
    ],
  },
  varianten: {
    eyebrow: "Off-the-shelf",
    title: "Off-the-shelf ankle orthoses",
    paragraphs: [
      "Our off-the-shelf orthoses are a fast and effective solution for a wide range of problems with the feet and ankles. Through precise adjustments, our orthopedic technicians make sure that every orthosis fits perfectly on foot, ankle and lower leg and gives you the support you need when walking.",
      "From torn ligaments and tendon complaints to swelling after twisting your ankle — our off-the-shelf ankle orthoses provide reliable support, stabilisation and relief in everyday life and during sport.",
    ],
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made ankle orthoses",
    paragraphs: [
      "Our custom builds are produced especially for you to guarantee the highest standards of fit and function for your ankle orthosis. Particularly for complex foot misalignments or special fit requirements, custom-made orthoses based on a 3D scan and/or a plaster cast are the ideal choice.",
      "From immobilisation through pressure distribution to greater mobility in everyday life — our custom-made ankle orthoses provide optimal support. They relieve your pain and improve your quality of life.",
      "Whatever the cause of your complaints — be it a torn ligament, instability, a sprain or an ankle fracture — our orthopedic technicians and the specialist staff at our store will help you to an orthosis that fits perfectly and supports your individual lifestyle.",
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
      { icon: "Boxes", label: "First-class branded products" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "FAQ on ankle orthoses",
    items: [
      {
        question: "What's the difference between an orthosis and a bandage?",
        answer:
          "While a bandage is made of a firm, stretchy fabric that fits snugly on the relevant body region and feels flexible and comfortable on the skin, an orthosis is made from stable, mechanical elements. It relieves and supports the body by (partially) immobilising joints and body parts, helping with mobilisation or providing new freedom of movement.",
      },
      {
        question:
          "Which foot problems can be treated and relieved with an ankle orthosis?",
        answer:
          "There are many indications for ankle orthoses. They are an effective orthopedic aid for a wide range of problems with the foot and ankle, including torn ligaments after twisting, bone misalignments, fractures and other ankle injuries.",
      },
      {
        question:
          "How long does it take to produce a custom-made ankle orthosis?",
        answer:
          "We can fit an off-the-shelf orthosis for you within 2 to 3 days. The production of a custom-made ankle orthosis in our own Berlin workshop varies with complexity, but typically takes around 4 weeks. This time is needed because we produce the orthosis especially for you — and the more precisely it fits, the better it can deliver its intended effect.",
      },
      {
        question:
          "Are the costs for ankle orthoses covered by health insurance?",
        answer:
          "In most cases the costs of the orthosis are covered by your health insurance, especially when your physician has prescribed it for pain, injuries or other complaints. We're happy to help you clarify the cost question and guide you through the necessary steps.",
      },
      {
        question: "Which manufacturers do the orthoses come from?",
        answer:
          "We source the orthoses in our store exclusively from renowned German and European brand manufacturers such as Bauerfeind, Sporlastic, Össur, Orthoservice, Bort, Medi, Aspen and Enovis.",
      },
      {
        question: "Do I need special shoes for a foot or ankle orthosis?",
        answer:
          "No, you usually don't need special shoes. If you need an ankle or foot orthosis, however, we recommend wearing a firm shoe. This combination ensures maximum effectiveness and stability. We also recommend wearing a sock under the orthosis to avoid chafing.",
      },
      {
        question: "Can I do sports with an ankle orthosis?",
        answer:
          "Bandages and orthoses are recommended not only after an acute injury but also as a preventive measure during sport. Even competitive athletes rely on the preventive effect of bandages and orthoses for knees, ankles and feet to protect their joints from overload. A custom-made orthosis in particular can be excellent protection against injuries.",
      },
      {
        question:
          "Do I need to make an appointment to have an ankle orthosis fitted?",
        answer:
          "Yes — to make sure we have enough time for thorough advice, measurement and fitting of the orthosis, we recommend booking an appointment in advance. You're also welcome to arrange a home visit; in that case we'll happily come to you for advice and measurement. Of course you can also drop by spontaneously if your time allows, but in that case there may be waiting times.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your ankle is cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, SprunggelenkOrthesePageContent> = {
  de: sprunggelenkOrthesePageSchema.parse(de),
  en: sprunggelenkOrthesePageSchema.parse(en),
};

export const getSprunggelenkOrtheseContent = (
  locale: Locale,
): SprunggelenkOrthesePageContent => pages[locale];

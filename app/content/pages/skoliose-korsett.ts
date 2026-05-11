/*
 * Skoliose-Korsett — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/skoliose-korsett-berlin/: hero (split with photo) →
 * Beratung (with CTA) → Warum wichtig (eyebrow + heading + "Je eher" sub-block)
 * → Maßgefertigte Korsetts (split with detail photo + CTA) → Was uns auszeichnet
 * (6 highlights) → FAQ accordion → contact.
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

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const skolioseKorsettPageSchema = z.object({
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
  beratung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    cta: ctaSchema,
  }),
  warum: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    sub: z.object({
      title: z.string(),
      paragraphs: z.array(z.string()).min(1),
    }),
  }),
  massanfertigung: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    cta: ctaSchema,
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
export type SkolioseKorsettPageContent = z.infer<
  typeof skolioseKorsettPageSchema
>;

const de: SkolioseKorsettPageContent = {
  meta: {
    title: "Skoliose-Korsett in Berlin | Sanimotion Sanitätshaus",
    description:
      "Maßgefertigte Skoliose-Korsetts vom Sanimotion Sanitätshaus Berlin – individuelle Korsettversorgung für Kinder, Jugendliche und Erwachsene durch erfahrene Orthopädietechniker.",
  },
  hero: {
    eyebrow: "Skoliose-Korsett",
    titleLead: "Skoliose-Korsett in Berlin",
    titleTail: "im Sanimotion Sanitätshaus",
    lede: "Sanfte Stütze für starke Kinder: Individuelle Korsettversorgung für eine aufrechte Haltung und eine gesunde Zukunft",
    intro: [
      "Unsere maßgefertigten Skoliose-Korsetts sind nicht nur orthopädische Hilfsmittel, sondern eine Investition in die Gesundheit, das Wohlbefinden und die Zukunft Ihres Kindes. Mit einfühlsamer Beratung und präziser Anpassung unterstützen wir dabei, die Auswirkungen der Skoliose zu minimieren und die Lebensqualität zu verbessern. Unsere individuell angepassten Korsettlösungen wirken einer Verkrümmung der Wirbelsäule aktiv entgegen und führen zu nachhaltig positiven Veränderungen.",
    ],
  },
  beratung: {
    eyebrow: "Beratung",
    title: "Ausführliche und feinfühlige Beratung",
    paragraphs: [
      "Bei Sanimotion kennen wir die Herausforderungen, die mit einer Skoliose bei Kindern und Jugendlichen einhergehen. Daher bieten wir Eltern und Kindern eine umfassende und einfühlsame Beratung an. Gerne besuchen wir Sie dazu auch bei Ihnen zu Hause, um sicherzustellen, dass Ihr Kind sich dabei in vertrauter Umgebung wohlfühlt.",
    ],
    cta: { label: "Kontakt & Beratung", href: "/kontakt" },
  },
  warum: {
    eyebrow: "Für eine aufrechte Zukunft",
    title: "Warum ein Korsett für Kinder & Jugendliche bei Skoliose so wichtig ist",
    paragraphs: [
      "Skoliose ist eine Wirbelsäulenverkrümmung, die vor allem Kinder und Jugendliche betrifft. Ein Skoliose-Korsett ist entscheidend, um die Progression dieser Erkrankung zu verlangsamen und die natürliche Aufrichtung der Wirbelsäule zu fördern. Durch die gezielte Stabilisierung und Korrektur der Fehlstellung helfen unsere Korsetts, eine bessere Körperhaltung zu erlangen, Schmerzen zu reduzieren und die Lebensqualität zu verbessern.",
    ],
    sub: {
      title: "Je eher, desto besser!",
      paragraphs: [
        "Die Behandlung der (idiopathischen) Skoliose mit einem Korsett ist in vielen Fällen äußerst effektiv und kann zusammen mit Physiotherapie / Krankengymnastik und ärztlicher Betreuung zur langfristigen Korrektur des Rückens beitragen. Dabei gilt: Je eher die Korsetttherapie beginnt, desto besser! Dies ist bei Kindern insbesondere während der Wachstumsphase wichtig, weil das Korsett die Wirbelsäule dann noch leichter wieder in die gewünschte Form bringen kann.",
      ],
    },
  },
  massanfertigung: {
    eyebrow: "Sonderanfertigung",
    title: "Maßgefertigte Korsetts für Kinder, Jugendliche & Erwachsene",
    paragraphs: [
      "Unsere Korsetts werden in unserer eigenen Orthopädiewerkstatt in Berlin individuell angefertigt. Dazu können wir 3D-Scans des Rückens anfertigen und bei Bedarf einen Gipsabdruck nehmen. Auf Basis dieser exakten Maße fertigen wir ein Skoliose-Korsett, das perfekt sitzt und die gewünschte Wirkung erzielt.",
      "Unser erfahrenes Sanitätsfachpersonal und unsere hochqualifizierten Orthopädie-Techniker/innen nehmen sich gerne viel Zeit für die Beratung, Vermessung, Anprobe und Anpassung. So sorgen wir dafür, dass das Korsett optimal sitzt, bequem zu tragen ist und seine Wirkung punktgenau entfalten kann.",
    ],
    cta: { label: "Jetzt Termin vereinbaren", href: "/kontakt" },
  },
  highlights: {
    eyebrow: "Unser Versprechen",
    title: "Was uns auszeichnet",
    items: [
      { icon: "Award", label: "Ausgezeichneter Service" },
      { icon: "Store", label: "Filialgeschäfte & Online-Shop" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Boxes", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  faq: {
    eyebrow: "Häufige Fragen & Antworten",
    title: "FAQ zum Skoliose-Korsett",
    items: [
      {
        question: "Wie wird das Korsett an die individuelle Rückenform angepasst?",
        answer:
          "Unsere erfahrenen Orthopädietechniker stellen mit präzisen 3D-Messungen und Gipsabdrücken sicher, dass das Korsett während der gesamten Therapie perfekt an die Skoliose und individuellen Bedürfnisse unserer kleinen und großen Patienten angepasst wird.",
      },
      {
        question: "Wie wirkt das Korsett?",
        answer:
          "Ein Skoliose-Korsett für den Rücken ist vergleichbar mit einer Zahnspange. Es bringt jedoch nicht das Gebiss, sondern die Wirbelsäule bzw. die einzelnen Wirbelkörper in Form. Dazu wird die Verkrümmung der Wirbelsäule durch sanften, aber stetigen Druck an bestimmten Stellen ausgeglichen. So werden die Wirbel im Laufe der Monate und Jahre wieder gerade.",
      },
      {
        question:
          "Wie viele Stunden sollte das Korsett insgesamt und pro Tag getragen werden?",
        answer:
          "Die Tragedauer hängt vom Schweregrad der Skoliose ab. Ihr Arzt wird Ihnen Empfehlungen geben, wie viele Monate oder Jahre das Korsett getragen werden sollte. Für einen maximalen Therapieerfolg sollte das Korsett nach einer Eingewöhnungszeit 16 bis 20 Stunden täglich getragen werden. Dabei gilt: Je höher die tägliche Tragezeit ist, desto besser. Das Korsett hat dann mehr Zeit, der Fehlkrümmung der Wirbelsäule entgegenzuwirken und sie in die gewünschte Position zu bringen. Deshalb ist es ratsam, das Korsett möglichst auch während des Schlafens zu tragen. Die Erfahrung zeigt: Je länger man es trägt, desto besser gewöhnt man sich daran.",
      },
      {
        question: "Ist das Korsett unter der Kleidung unsichtbar?",
        answer:
          "Ob und wie stark das Korsett sichtbar ist, hängt vor allem von der Stärke der Wirbelsäulenkrümmung und der Länge des Korsetts ab. Ein kurzes Korsett lässt sich gut unter der Kleidung verstecken. Es gibt auch spezielle Korsett-T-Shirts. Oft lässt es sich auch gut unter einem Kapuzenpullover verstecken. Wir empfehlen aber grundsätzlich, lieber offensiv mit dem Korsett umzugehen, anstatt es immer verstecken zu wollen. So sinkt die Gefahr, dass betroffene Kinder deswegen gehänselt werden. Gerne können wir das Korsett auch optisch individuell gestalten, z. B. in Ihren Wunschfarben und in bestimmten Designs.",
      },
      {
        question: "Wie lange dauert die Herstellung eines Skoliosekorsetts?",
        answer:
          "Die Herstellungszeit variiert je nach Komplexität, beträgt aber in der Regel 4 Wochen. Diese Zeit ist notwendig, da wir das Korsett anhand von 3D-Scans und einem Gipsabdruck für jeden Rücken individuell anfertigen. Und je passgenauer das Korsett ist, desto besser kann es seine gewünschte Wirkung entfalten.",
      },
      {
        question:
          "Werden die Kosten für das Skoliosekorsett von der Krankenkasse übernommen?",
        answer:
          "Ja, in der Regel werden die Kosten für die Orthese von der Krankenkasse übernommen, insbesondere dann, wenn die Orthese von Ihrem Arzt auf Rezept verordnet wurde. Gerne unterstützen wir Sie bei der Klärung der Kostenfrage und helfen Ihnen bei den notwendigen Schritten.",
      },
      {
        question: "Wie oft sollte das Korsett angepasst werden?",
        answer:
          "Bei Kindern, die sich noch im Wachstum befinden, empfehlen wir, das Korsett spätestens alle 12 Monate neu anzupassen, damit es dauerhaft seine optimale Wirkung entfalten kann. Gerne prüfen wir auch schon eher oder nach einem Wachstumsschub, ob eine Anpassung nötig ist.",
      },
      {
        question: "Kann ich mit einem Korsett Sport treiben?",
        answer:
          "Grundsätzlich gilt, dass auch Kinder, die ein Korsett tragen, Sport treiben sollten, weil sportliche Aktivitäten insgesamt viele positiven Wirkungen für Körper und Geist haben. Ob das Korsett beim jeweiligen Sport getragen werden sollte, hängt von der Sportart sowie von den Empfehlungen des behandelnden Arztes und Korsettbautechniker ab. Gerne beraten wir Sie auch dazu.",
      },
      {
        question: "Schwitzt man in dem Korsett?",
        answer:
          "Je höher die Temperatur, desto eher schwitzt man im Korsett. Jeder Mensch hat ein anderes Temperaturempfinden, aber besonders beim Sport und ab einer Temperatur von ca. 26 Grad Celsius kann es unangenehm werden. Wenn es Ihnen im Sommer zu warm wird, können Sie die tägliche Tragedauer des Korsetts durchaus etwas reduzieren.",
      },
      {
        question:
          "Muss ich für die Beratung zum Skoliose-Korsett einen Termin vereinbaren?",
        answer:
          "Ja, damit wir genügend Zeit für eine ausführliche Beratung haben, empfehlen wir Ihnen, einen Termin zu vereinbaren. Sie können auch einen Hausbesuch vereinbaren. Wir kommen dann zur Beratung und Vermessung zu Ihnen nach Hause. Natürlich können Sie uns auch spontan besuchen, wenn es Ihre Zeit erlaubt.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Damit Ihr Rücken und Ihre Wirbelsäule optimal versorgt sind, ist es wichtig, dass Sie sich von erfahrenen Sanitätsfachkräften und Orthopädietechnikern beraten lassen, die Ihr spezifisches Problem erkennen und passende Lösungen empfehlen. Wir laden Sie ein, sich in unseren vier Berliner Sanitätshäusern von unserem qualifizierten Fachpersonal kompetent und einfühlsam zur Korsettversorgung beraten zu lassen.",
      "Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unsere Online-Terminvereinbarung. Wir freuen uns auf Sie!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: SkolioseKorsettPageContent = {
  meta: {
    title: "Scoliosis brace in Berlin | Sanimotion Sanitätshaus",
    description:
      "Custom-made scoliosis braces from Sanimotion Sanitätshaus Berlin — individual corset care for children, adolescents and adults by experienced orthopedic technicians.",
  },
  hero: {
    eyebrow: "Scoliosis brace",
    titleLead: "Scoliosis brace in Berlin",
    titleTail: "at Sanimotion Sanitätshaus",
    lede: "Gentle support for strong children: individual brace care for an upright posture and a healthy future",
    intro: [
      "Our custom-made scoliosis braces are not only orthopedic aids — they are an investment in the health, well-being and future of your child. With empathetic consultation and precise fitting, we help to minimise the effects of scoliosis and improve quality of life. Our individually fitted brace solutions actively counteract spinal curvature and lead to lastingly positive changes.",
    ],
  },
  beratung: {
    eyebrow: "Consultation",
    title: "Thorough and empathetic consultation",
    paragraphs: [
      "At Sanimotion we understand the challenges that come with scoliosis in children and adolescents. We therefore offer parents and children comprehensive and empathetic consultation. On request, we are also happy to visit you at home so that your child feels comfortable in familiar surroundings.",
    ],
    cta: { label: "Contact & advice", href: "/kontakt" },
  },
  warum: {
    eyebrow: "For an upright future",
    title: "Why a brace is so important for children & adolescents with scoliosis",
    paragraphs: [
      "Scoliosis is a curvature of the spine that primarily affects children and adolescents. A scoliosis brace is crucial to slow the progression of this condition and to support the natural alignment of the spine. Through targeted stabilisation and correction of the misalignment, our braces help to achieve a better posture, reduce pain and improve quality of life.",
    ],
    sub: {
      title: "The sooner, the better!",
      paragraphs: [
        "Treatment of (idiopathic) scoliosis with a brace is in many cases highly effective and, together with physiotherapy / remedial gymnastics and medical care, can contribute to long-term correction of the back. The principle: the sooner brace therapy begins, the better! This is particularly important in children during the growth phase, since the brace can then bring the spine back into the desired shape more easily.",
      ],
    },
  },
  massanfertigung: {
    eyebrow: "Custom-made",
    title: "Custom-made braces for children, adolescents & adults",
    paragraphs: [
      "Our braces are individually produced in our own orthopedic workshop in Berlin. We can take 3D scans of the back and, if necessary, a plaster cast. On the basis of these exact measurements we manufacture a scoliosis brace that fits perfectly and achieves the desired effect.",
      "Our experienced specialist staff and our highly qualified orthopedic technicians take all the time needed for advice, measurement, fitting and adjustment. In this way we ensure that the brace fits optimally, is comfortable to wear and can develop its full effect precisely where it is needed.",
    ],
    cta: { label: "Book an appointment now", href: "/kontakt" },
  },
  highlights: {
    eyebrow: "Our promise",
    title: "What sets us apart",
    items: [
      { icon: "Award", label: "Outstanding service" },
      { icon: "Store", label: "Stores & online shop" },
      { icon: "Home", label: "Home visits across Berlin" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Boxes", label: "Huge product range" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "FAQ on the scoliosis brace",
    items: [
      {
        question: "How is the brace fitted to the individual back shape?",
        answer:
          "Our experienced orthopedic technicians use precise 3D measurements and plaster casts to ensure that the brace is perfectly adapted to the scoliosis and the individual needs of our small and large patients throughout the entire therapy.",
      },
      {
        question: "How does the brace work?",
        answer:
          "A scoliosis brace for the back is comparable to dental braces. However, it does not bring the teeth into shape but the spine and the individual vertebrae. The curvature of the spine is balanced out by gentle but constant pressure at specific points. In this way, the vertebrae are gradually straightened over the course of months and years.",
      },
      {
        question:
          "How many hours should the brace be worn in total and per day?",
        answer:
          "The wearing time depends on the severity of the scoliosis. Your physician will give you recommendations on how many months or years the brace should be worn. For maximum therapy success, the brace should be worn 16 to 20 hours a day after a settling-in period. The principle: the longer the daily wearing time, the better. The brace then has more time to counteract the misalignment of the spine and bring it into the desired position. It is therefore advisable to also wear the brace during sleep where possible. Experience shows: the longer you wear it, the better you get used to it.",
      },
      {
        question: "Is the brace invisible under clothing?",
        answer:
          "Whether and how visible the brace is depends primarily on the severity of the spinal curvature and the length of the brace. A short brace can be hidden well under clothing. There are also special brace T-shirts. It can often be hidden under a hoodie. We generally recommend dealing openly with the brace rather than always trying to hide it. This reduces the risk of affected children being teased. We are also happy to design the brace visually to your taste — for example in your desired colours and specific designs.",
      },
      {
        question: "How long does it take to produce a scoliosis brace?",
        answer:
          "The production time varies depending on complexity, but is usually 4 weeks. This time is necessary because we manufacture the brace individually for each back on the basis of 3D scans and a plaster cast. And the more precisely the brace fits, the better it can develop its desired effect.",
      },
      {
        question:
          "Are the costs of the scoliosis brace covered by health insurance?",
        answer:
          "Yes — costs for the orthosis are usually covered by health insurance, especially when the orthosis has been prescribed by your physician. We're happy to support you in clarifying cost coverage and assist with the necessary steps.",
      },
      {
        question: "How often should the brace be adjusted?",
        answer:
          "For growing children we recommend re-fitting the brace at least every 12 months so that it can permanently develop its optimum effect. We're also happy to check earlier or after a growth spurt whether an adjustment is needed.",
      },
      {
        question: "Can I do sport with a brace?",
        answer:
          "As a rule, children who wear a brace should also do sport, because sporting activities have many positive effects on body and mind overall. Whether the brace should be worn during the respective sport depends on the type of sport and on the recommendations of the treating physician and brace technician. We're happy to advise you on this as well.",
      },
      {
        question: "Does one sweat in the brace?",
        answer:
          "The higher the temperature, the more likely you are to sweat in the brace. Everyone has a different sense of temperature, but especially during sport and from a temperature of around 26 °C, it can become uncomfortable. If it gets too warm in summer, you can certainly reduce the daily wearing time of the brace somewhat.",
      },
      {
        question:
          "Do I need to make an appointment for advice on the scoliosis brace?",
        answer:
          "Yes — so that we have enough time for a thorough consultation, we recommend booking an appointment. You can also arrange a home visit; we'll then come to you for advice and measurement. Of course, you can also drop by spontaneously if your time allows.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice & appointments",
    paragraphs: [
      "To ensure your back and spine are cared for as well as possible, it's important to be advised by experienced specialists and orthopedic technicians who can recognise your specific problem and recommend suitable solutions. We invite you to one of our four Berlin stores, where our qualified specialist staff will advise you with expertise and care on brace care.",
      "Call us, write to us or use our online appointment booking. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, SkolioseKorsettPageContent> = {
  de: skolioseKorsettPageSchema.parse(de),
  en: skolioseKorsettPageSchema.parse(en),
};

export const getSkolioseKorsettContent = (
  locale: Locale,
): SkolioseKorsettPageContent => pages[locale];

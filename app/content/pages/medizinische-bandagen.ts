/*
 * Medizinische Bandagen — sub-page content (DE + EN).
 *
 * Mirrors sanimotion.com/medizinische-bandagen-berlin/: hero (split with
 * photo) → product list → service paragraphs → highlights → Schutz- und
 * Stützfunktion paragraphs → detail sections per body region → contact.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

const highlightSchema = z.object({
  icon: z.string(),
  label: z.string(),
});

const detailSectionSchema = z.object({
  title: z.string(),
  paragraphs: z.array(z.string()).min(1),
});

export const medizinischeBandagenPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    lede: z.string(),
  }),
  products: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    items: z.array(z.string()).min(1),
  }),
  service: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  highlights: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z.array(highlightSchema).length(6),
  }),
  funktion: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
  }),
  details: z.object({
    eyebrow: z.string(),
    title: z.string(),
    intro: z.string(),
    sections: z.array(detailSectionSchema).min(1),
  }),
  contact: z.object({
    eyebrow: z.string(),
    title: z.string(),
    paragraphs: z.array(z.string()).min(1),
    phone: z.object({ label: z.string(), href: z.string() }),
    email: z.object({ label: z.string(), href: z.string() }),
  }),
});
export type MedizinischeBandagenPageContent = z.infer<
  typeof medizinischeBandagenPageSchema
>;

const de: MedizinischeBandagenPageContent = {
  meta: {
    title: "Medizinische Bandagen in Berlin | Sanimotion Sanitätshaus",
    description:
      "Medizinische Bandagen aller Art im Sanimotion Sanitätshaus Berlin – Knie-, Sprunggelenk-, Hand-, Ellenbogen-, Rücken- und Schulterbandagen. Beratung, Anprobe und kostenlose Vermessung – auch bei Ihnen zu Hause.",
  },
  hero: {
    eyebrow: "Medizinische Bandagen",
    titleLead: "Medizinische Bandagen aller Art",
    titleTail: "im Sanimotion Sanitätshaus Berlin",
    lede:
      "Bandagen entlasten, schützen und stützen im Alltag, beim Sport oder in der Freizeit. Sie bieten passende Lösungen für Beschwerden von Kopf bis Fuß.",
  },
  products: {
    eyebrow: "Unser Sortiment",
    title: "Für jeden Bedarf die passende Bandage",
    intro:
      "In unseren Sanimotion Sanitätshäusern in Spandau und Zehlendorf finden Sie für jeden Bedarf die passende Bandage. Unser Angebot umfasst unter anderem:",
    items: [
      "Kniebandagen",
      "Fußbandagen",
      "Sprunggelenkbandagen",
      "Knöchelbandagen",
      "Zehenbandagen",
      "Hallux-valgus-Bandagen",
      "Handbandagen",
      "Fingerbandagen",
      "Handgelenkbandagen",
      "Ellenbogenbandagen",
      "Rückenbandagen",
      "Schultergelenkbandagen",
    ],
  },
  service: {
    eyebrow: "Beratung & Anprobe",
    title: "Vermessung, Auswahl und Anprobe",
    paragraphs: [
      "Unsere Bandagen bestehen aus elastischem und atmungsaktivem Gewebe, mit denen verletzte Körperteile optimal unterstützt werden können. Stützbandagen schützen Gelenke vor Überbeanspruchung, Sportbandagen bieten Schutz von Knochen und Gelenken.",
      "Gerne besprechen wir mit Ihnen persönlich in unserem Berliner Sanitätshaus, welche Bandage am besten für Ihre Beschwerden geeignet ist. Dazu können Sie die Bandagen bei uns anprobieren.",
      "Falls Sie für Ihre Bandage eine Maßanfertigung benötigen, können wir zudem vor Ort eine Vermessung durchführen. Alternativ kommen wir dazu gerne direkt zu Ihnen nach Hause. Dieser Service ist für Sie natürlich vollkommen kostenlos.",
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
      { icon: "Layers", label: "Riesiges Angebot" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
    ],
  },
  funktion: {
    eyebrow: "Wirkung",
    title: "Schutz- und Stützfunktion für alle Gelenke",
    paragraphs: [
      "Beschwerden von Muskeln und Gelenken in Armen, Beinen und Rücken durch Sportverletzungen oder Gelenkerkrankungen können mithilfe von Bandagen entlastet und stabilisiert werden. Auch zur Vorbeugung von Sportverletzungen eignen sich Bandagen hervorragend.",
      "Die hochwertigen Bandagen aus unserem Berliner Sanitätshaus wirken bewegungsfördernd, entlastend, funktionssichernd und aktivierend auf die betroffenen Gelenke – egal, ob in der Hand, im Ellenbogen, in der Schulter, im Rücken, im Fuß oder im Knie.",
      "Das Tragen einer Bandage schützt nicht nur die betroffene Körperpartie, sondern führt auch zu einer verbesserten Körperwahrnehmung, was die körpereigenen Schutzfunktionen trainiert und aktiviert. Zusätzlich fördern Bandagen den Therapieerfolg, indem das betroffene Gelenk bei jeder Bewegung massiert und somit die Durchblutung angeregt wird.",
    ],
  },
  details: {
    eyebrow: "Im Detail",
    title: "Alle Bandagen im Sanimotion Sanitätshaus Berlin",
    intro:
      "In unserem Sanitätshaus Sanimotion Berlin sowie in unserem Online-Shop erhalten Sie eine Vielzahl von qualitativ hochwertigen medizinischen Bandagen, Sportbandagen und Orthesen aller Art. Hier finden Sie Informationen zu den einzelnen Bandagen sowie den Anwendungsfällen.",
    sections: [
      {
        title: "Kniebandagen",
        paragraphs: [
          "Das Knie ist ein sehr komplexes Gelenk und leider auch eines der Gelenke mit dem höchsten Verletzungsrisiko beim Sport. Kniebeschwerden können jedoch auch durch falsche Belastung, Abnutzung im Alltag, Arthrose oder Arthritis auftreten.",
          "Kniebandagen können helfen, dem Kniegelenk die nötige Stabilität für einen schmerzfreien Bewegungsablauf zu geben – im Alltag oder beim Sport. Durch die Kompression fördern sie zudem die Durchblutung und beschleunigen somit den Heilungsprozess.",
        ],
      },
      {
        title: "Sprunggelenk-, Knöchel- und Fußbandagen",
        paragraphs: [
          "Sprunggelenkbandagen können entweder zur prophylaktischen Stütz- und Schutzfunktion dienen, oder zusätzlichen Halt nach einer Verletzung bieten. Im Zusammenspiel mit der richtigen Therapie beschleunigen sie den Heilungsprozess und ermöglichen einen beschwerdefreien Alltag.",
          "Bei Reizung oder Entzündung der Achillessehne lindern spezielle Bandagen mit Silikonkissen die bei jedem Schritt auftretenden Schmerzen.",
          "Bei allen Fußbandagen sind Atmungsaktivität und richtige Passform besonders wichtig, da sie meist mit Sportschuhen getragen werden. In unserem Berliner Sanitätshaus beraten wir Sie gerne und bieten Ihnen Muster-Bandagen zum Ausprobieren an.",
          "Sanimotion ist mehr als ein reiner Sanitätsfachhandel. Über die Bandagen hinaus bieten wir Ihnen zur Schonung für Ihre Füße und Förderung Ihrer Fußgesundheit u. a. auch orthopädische Maßschuhe, Orthesenschuhe und Schuheinlagen an. Zudem erhalten Sie bei uns bei Bedarf auch Gehhilfen und weitere Alltagshilfen.",
        ],
      },
      {
        title: "Zehenbandagen und Hallux Valgus Bandagen",
        paragraphs: [
          "Bei Fehlstellungen der Zehen, wie zum Beispiel Hallux Valgus, Hammer- oder Krallenzehen, werden spezielle Zehenbandagen zur konservativen Therapie eingesetzt.",
          "Diese hochwertigen und atmungsaktiven Bandagen halten die betroffenen Zehen in einer bestimmten Position, um über einen gewissen Zeitraum die Haltung nachhaltig zu verbessern. Auch nach einem operativen Eingriff zur Korrektur von Fehlstellungen der Zehen, verschreiben Ärzte oft Zehenbandagen zur Ruhigstellung, Stabilisierung und Beschleunigung des Heilungsprozesses.",
          "Als Experte für Orthopädie-Schuhtechnik erhalten Sie bei uns übrigens auch Fußorthesen sowie sensomototische Einlagen und orthopädische Schuhe.",
        ],
      },
      {
        title: "Hand-, Finger- und Handgelenkbandagen",
        paragraphs: [
          "Ob im Alltag, bei der Arbeit oder beim Sport, das Handgelenk ist immer in Bewegung. Daher ist es anfällig für Überlastung, was zu Reizungen, Entzündungen wie Sehnenscheidenentzündung oder Verletzungen führen kann.",
          "Durch das Ruhigstellen gewisser Teile der Hand und gezielten Druck auf Sehnen und Muskeln im Unterarm, schaffen unsere Handgelenkbandagen Abhilfe, entlasten den Muskelapparat und lindern akute oder chronische Schmerzen.",
          "Bei der Verletzung einzelner Finger helfen Bandagen bei der Ruhigstellung und beugen so einer erneuten Verletzung vor und beschleunigen gleichzeitig den Heilungsprozess.",
        ],
      },
      {
        title: "Ellenbogen-Bandagen",
        paragraphs: [
          "Der Ellenbogen hält, hebt, stützt und wird den ganzen Tag über und ist sogar nachts beansprucht, wenn eine Schlafhaltung mit angewinkelten Armen eingenommen wird. Eine Überbeanspruchung und damit einhergehende Reizung oder Verletzung treten demnach häufig auf.",
          "Ellenbogen-Bandagen helfen dem Gelenk bei Krankheitsbildern wie dem Tennisarm, Arthrose oder auch nach Operationen. Eine Ellenbogenbandage schützt den Ellenbogen vor zu starken oder falschen Belastungen und schmerzhaften Drehungen, stabilisiert und wärmt das Gelenk zudem.",
        ],
      },
      {
        title: "Rückenbandagen",
        paragraphs: [
          "Rückenbandagen oder auch Stützgürtel genannt, helfen bei Rückenschmerzen, indem sie die Lendenwirbelsäule (unterer Rückenbereich) entlasten, Wärme spenden und die Körperhaltung verbessern.",
          "Ein fest angelegter Stützgürtel hilft, den Druck auf den Rücken umzuverteilen und lindert dadurch Schmerzen, die durch die Belastung einzelner Partien des Rückens entstanden sind.",
          "Da Rückenbandagen oft eng und unter der Kleidung getragen werden, sind hoher Tragekomfort und ein atmungsaktives Material immens wichtig. Wir beraten Sie hierzu gerne persönlich in unserem Berliner Sanitätshaus.",
        ],
      },
      {
        title: "Schultergelenkbandagen",
        paragraphs: [
          "In der Schulter kommt es zu einem sehr komplexen Zusammenspiel von Sehnen, Bändern, Muskeln und Knochen. Reizungen, Überlastung oder Verletzungen wie ein ausgekugeltes Schultergelenk sind oft schmerzhaft und schränken die Lebensqualität extrem ein.",
          "Zur Linderung der Schmerzen und einer schnellen Heilung hilft oft nur die komplette Ruhigstellung des Schultergelenks mithilfe hochwertiger Bandagen. Unsere Schulter-Bandagen können Sie selbst anlegen und den Bewegungsspielraum je nach Einschätzung Ihres behandelnden Arztes individuell einstellen.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Ihr Draht zum Sanimotion Sanitätshaus Berlin",
    title: "Kontakt, Beratung & Terminvergabe",
    paragraphs: [
      "Haben Sie Fragen zu den Bandagen oder anderen medizinischen Produkten aus unserem breiten Angebot? Wir denken nicht nur den klassischen Sanitätsbedarf ab, sondern bei uns erhalten Sie u.a. auch Fitnessartikel, Rollstühle, Orthetik, orthopädische Einlagen und Rehatechnik. Gerne beraten unsere Experten Sie in unseren Sanimotion Sanitätshaus Berlin persönlich.",
      "Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir freuen uns auf Ihre Kontaktaufnahme!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const en: MedizinischeBandagenPageContent = {
  meta: {
    title: "Medical bandages in Berlin | Sanimotion Sanitätshaus",
    description:
      "Medical bandages of every kind at Sanimotion Sanitätshaus Berlin — knee, ankle, hand, elbow, back and shoulder bandages. Expert advice, fitting and free measurement, also at your home.",
  },
  hero: {
    eyebrow: "Medical bandages",
    titleLead: "Medical bandages of every kind",
    titleTail: "at Sanimotion Sanitätshaus Berlin",
    lede:
      "Bandages relieve, protect and stabilise — in everyday life, in sport and in your free time. They offer the right solution for complaints from head to toe.",
  },
  products: {
    eyebrow: "Our range",
    title: "The right bandage for every need",
    intro:
      "At our Sanimotion stores in Spandau and Zehlendorf, you'll find the right bandage for every need. Our range includes, among others:",
    items: [
      "Knee bandages",
      "Foot bandages",
      "Ankle bandages",
      "Malleolus bandages",
      "Toe bandages",
      "Hallux valgus bandages",
      "Hand bandages",
      "Finger bandages",
      "Wrist bandages",
      "Elbow bandages",
      "Back bandages",
      "Shoulder bandages",
    ],
  },
  service: {
    eyebrow: "Advice & fitting",
    title: "Measurement, selection and fitting",
    paragraphs: [
      "Our bandages are made from elastic, breathable fabric that supports injured body parts in the best possible way. Support bandages protect joints from overuse; sports bandages protect bones and joints during activity.",
      "We're happy to discuss in person, at our Berlin store, which bandage best suits your complaints. You're welcome to try the bandages on with us.",
      "If your bandage needs to be made to measure, we can also take measurements on site. Alternatively, we'll gladly come to your home for the fitting. This service is, of course, completely free of charge.",
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
      { icon: "Layers", label: "A huge selection" },
      { icon: "Clock", label: "Years of experience" },
    ],
  },
  funktion: {
    eyebrow: "How they help",
    title: "Protection and support for every joint",
    paragraphs: [
      "Muscle and joint complaints in the arms, legs and back — whether caused by sports injuries or joint disease — can be relieved and stabilised with the help of bandages. Bandages are also excellent for preventing sports injuries.",
      "The high-quality bandages from our Berlin store mobilise, relieve, secure function and activate the affected joints — whether in the hand, the elbow, the shoulder, the back, the foot or the knee.",
      "Wearing a bandage doesn't just protect the affected body part: it also improves proprioception, which trains and activates the body's own protective reflexes. Bandages also support the success of your therapy by gently massaging the joint with every movement and so stimulating circulation.",
    ],
  },
  details: {
    eyebrow: "In detail",
    title: "All bandages at Sanimotion Sanitätshaus Berlin",
    intro:
      "At our Sanimotion store in Berlin and in our online shop, you'll find a wide range of high-quality medical bandages, sports bandages and orthoses of every kind. Below you'll find information on each type of bandage and where it's used.",
    sections: [
      {
        title: "Knee bandages",
        paragraphs: [
          "The knee is a very complex joint and, unfortunately, one of the joints most at risk of injury during sport. Knee complaints can also be caused by incorrect loading, everyday wear, arthrosis or arthritis.",
          "Knee bandages can give the joint the stability it needs for pain-free movement — in everyday life or in sport. Through compression they also support circulation and so accelerate the healing process.",
        ],
      },
      {
        title: "Ankle, malleolus and foot bandages",
        paragraphs: [
          "Ankle bandages can serve as prophylactic support and protection, or provide additional stability after an injury. In combination with the right therapy, they accelerate healing and allow you to go about your day without pain.",
          "If the Achilles tendon is irritated or inflamed, special bandages with silicone pads ease the pain that occurs with every step.",
          "For all foot bandages, breathability and the right fit are particularly important, as they are usually worn with sports shoes. We're happy to advise you in our Berlin store and offer sample bandages to try.",
          "Sanimotion is more than a medical supply retailer. Beyond bandages, we also offer custom orthopedic shoes, orthotic shoes and shoe insoles to protect your feet and support foot health. We also stock walking aids and other everyday aids when you need them.",
        ],
      },
      {
        title: "Toe bandages and hallux valgus bandages",
        paragraphs: [
          "For toe deformities such as hallux valgus, hammer toe or claw toe, special toe bandages are used as part of conservative therapy.",
          "These high-quality, breathable bandages hold the affected toes in a specific position so that, over time, posture is durably improved. After surgical correction of toe deformities, doctors also frequently prescribe toe bandages to immobilise, stabilise and accelerate healing.",
          "As specialists in orthopedic shoe technology, we also offer foot orthoses as well as sensorimotor insoles and orthopedic shoes.",
        ],
      },
      {
        title: "Hand, finger and wrist bandages",
        paragraphs: [
          "Whether at home, at work or in sport, the wrist is always in motion — which makes it prone to overuse, irritation, conditions such as tenosynovitis and injuries.",
          "By immobilising specific parts of the hand and applying targeted pressure to tendons and muscles in the forearm, our wrist bandages bring relief, ease the strain on the muscles and reduce acute or chronic pain.",
          "When individual fingers are injured, bandages help with immobilisation, prevent re-injury and at the same time speed up healing.",
        ],
      },
      {
        title: "Elbow bandages",
        paragraphs: [
          "The elbow holds, lifts and supports throughout the day, and is even loaded at night when you sleep with your arms bent. Overuse and the irritation or injury that can follow are therefore common.",
          "Elbow bandages help the joint with conditions such as tennis elbow, arthrosis or after surgery. An elbow bandage protects the joint from excessive or incorrect loading and painful twisting, and stabilises and warms it at the same time.",
        ],
      },
      {
        title: "Back bandages",
        paragraphs: [
          "Back bandages — also called support belts — help with back pain by relieving the lumbar spine (lower back), providing warmth and improving posture.",
          "A firmly fastened support belt helps redistribute pressure on the back, easing pain caused by load on individual sections of the back.",
          "Because back bandages are often worn close-fitting and under clothing, comfort and breathable fabrics are essential. We'd be glad to advise you in person at our Berlin store.",
        ],
      },
      {
        title: "Shoulder bandages",
        paragraphs: [
          "The shoulder is a very complex interplay of tendons, ligaments, muscles and bones. Irritation, overuse or injuries such as a dislocated shoulder are often painful and severely limit quality of life.",
          "To ease pain and support fast healing, complete immobilisation of the shoulder joint with a high-quality bandage is often the only effective option. Our shoulder bandages can be applied yourself, with the range of movement set individually based on your treating doctor's assessment.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact, advice and appointments",
    paragraphs: [
      "Questions about bandages or any of the other medical products in our broad range? We don't just cover the classics of medical supply — we also stock fitness articles, wheelchairs, orthotics, orthopedic insoles and rehabilitation equipment. Our experts are happy to advise you in person at our Sanimotion stores in Berlin.",
      "Give us a call or send us an email. We look forward to hearing from you!",
    ],
    phone: { label: "030 235 957 600", href: "tel:+4930235957600" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
  },
};

const pages: Record<Locale, MedizinischeBandagenPageContent> = {
  de: medizinischeBandagenPageSchema.parse(de),
  en: medizinischeBandagenPageSchema.parse(en),
};

export const getMedizinischeBandagenContent = (
  locale: Locale,
): MedizinischeBandagenPageContent => pages[locale];

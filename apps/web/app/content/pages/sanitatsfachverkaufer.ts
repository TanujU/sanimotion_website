/*
 * Role detail page — Sanitätsfachverkäufer für Empfang & Verwaltung.
 *
 * Mirrors sanimotion.com/sanitatsfachverkaufer-in-fur-empfang-und-
 * verwaltung/: hero (eyebrow + title + meta badges) → two intro
 * paragraphs → three bullet sections (Aufgaben / Profil / Wir bieten)
 * → application paragraph + mailto CTA.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

export const rolePageSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
    badges: z.array(z.string()).min(1),
    backLabel: z.string(),
    backHref: z.string(),
  }),
  intro: z.array(z.string()).min(1),
  sections: z
    .array(
      z.object({
        title: z.string(),
        items: z.array(z.string()).min(1),
      }),
    )
    .min(1),
  apply: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    contactPerson: z.string(),
    email: z.string(),
    ctaLabel: z.string(),
  }),
});
export type RolePageContent = z.infer<typeof rolePageSchema>;

const APPLY_MAIL =
  "mailto:asokur@sanimotion.com?subject=Bewerbung%20Sanit%C3%A4tsfachverk%C3%A4ufer%20Empfang%20%26%20Verwaltung";

const de: RolePageContent = {
  meta: {
    title:
      "Sanitätsfachverkäufer für Empfang & Verwaltung (m/w/d) — Sanimotion",
    description:
      "Vollzeitstelle in Berlin: Sanitätsfachverkäufer/in für Empfang und Verwaltung bei Sanimotion. Jetzt bewerben bei Frau Alisa Sokur.",
  },
  hero: {
    eyebrow: "Stellenanzeige",
    titleLead: "Sanitätsfachverkäufer für",
    titleTail: "Empfang & Verwaltung (m/w/d)",
    badges: ["Vollzeit", "Berlin", "Ab sofort"],
    backLabel: "Alle Stellen",
    backHref: "/jobs",
  },
  intro: [
    "Seit über 30 Jahren begleiten wir unsere Kunden auf ihrem Weg zu mehr Gesundheit und Wohlbefinden. Als etabliertes Sanitätshaus verbinden wir traditionelle Handwerkskunst mit modernster Technik und fundiertem Fachwissen. Unser engagiertes Team legt großen Wert auf individuelle Beratung, exzellenten Service und maßgeschneiderte Lösungen – immer mit dem Ziel, unseren Kunden den Alltag zu erleichtern.",
    "Zur Verstärkung unseres herzlichen und kompetenten Teams suchen wir zum nächstmöglichen Zeitpunkt eine/n Sanitätsfachverkäufer/in für Empfang und Verwaltung (m/w/d) in Vollzeit. Bringen Sie Ihre Leidenschaft für den Gesundheitsbereich ein und unterstützen Sie uns dabei, Menschen mit hochwertigen Hilfsmitteln und persönlichem Service zu begleiten!",
  ],
  sections: [
    {
      title: "Ihre Aufgaben",
      items: [
        "Professionelle Betreuung unserer Kunden und fachkundige Beratung zu unserem Produktsortiment",
        "Verkauf und Anpassung von Hilfsmitteln wie Bandagen, Einlagen, Kompressionsstrümpfen und ggf. Orthesen (Schachtelorthopädie)",
        "Verantwortung für das Kassensystem, Bearbeitung von Rezepten und E-Mail-Korrespondenz",
        "Enge Zusammenarbeit mit unserer Werkstatt, der Abrechnungsabteilung und dem Versand zur Optimierung des Auftragsworkflows",
        "Vorselektion und Bearbeitung von Bestellungen für eine reibungslose Abwicklung",
      ],
    },
    {
      title: "Ihr Profil",
      items: [
        "Abgeschlossene Ausbildung als Sanitätsfachverkäufer/in oder vergleichbare Qualifikation im Gesundheitswesen",
        "Erfahrung in der empathischen Kundenberatung und Betreuung",
        "Exzellente Kommunikationsfähigkeiten und die Fähigkeit, komplexe medizinische Sachverhalte verständlich zu erklären",
        "Sicherer Umgang mit MS Office, Affinität zu digitalen Tools und die Bereitschaft, branchenspezifische Software zu erlernen",
        "Belastbarkeit und strukturierte Arbeitsweise – auch unter Zeitdruck",
        "Teamgeist, Flexibilität und hohe Serviceorientierung",
        "Eigenverantwortliches, präzises und qualitätsbewusstes Arbeiten",
      ],
    },
    {
      title: "Wir bieten",
      items: [
        "Eine verantwortungsvolle Position in einem wachsenden Unternehmen",
        "Ein freundliches, kollegiales Arbeitsumfeld mit flachen Hierarchien",
        "Regelmäßige Weiterbildungsmöglichkeiten im Bereich Sanitätsbedarf und Hilfsmittel",
        "Attraktive Vergütung und 30 Tage Jahresurlaub",
        "Betriebliche Altersvorsorge und Gesundheitsförderung",
        "Moderne Arbeitsplatzausstattung für angenehmes Arbeiten",
      ],
    },
  ],
  apply: {
    eyebrow: "Bewerbung",
    title: "Klingt diese Position spannend für Sie?",
    body: "Dann werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft der Gesundheitsversorgung! Senden Sie Ihre Bewerbung mit Lebenslauf, Zeugnissen und Ihrem frühestmöglichen Eintrittstermin per E-Mail an Frau Alisa Sokur. Wir freuen uns darauf, Sie kennenzulernen und gemeinsam etwas zu bewegen!",
    contactPerson: "Frau Alisa Sokur",
    email: "asokur@sanimotion.com",
    ctaLabel: "Jetzt bewerben",
  },
};

const en: RolePageContent = {
  meta: {
    title:
      "Medical supply sales advisor — reception & administration (m/f/d) — Sanimotion",
    description:
      "Full-time position in Berlin: medical supply sales advisor for reception and administration at Sanimotion. Apply to Ms. Alisa Sokur.",
  },
  hero: {
    eyebrow: "Job posting",
    titleLead: "Medical supply sales advisor",
    titleTail: "— reception & administration (m/f/d)",
    badges: ["Full-time", "Berlin", "Immediate start"],
    backLabel: "All openings",
    backHref: "/jobs",
  },
  intro: [
    "For over 30 years we have accompanied our customers on their way to better health and wellbeing. As an established medical supply house we combine traditional craftsmanship with cutting-edge technology and well-founded expertise. Our committed team places great value on individual advice, excellent service and tailor-made solutions — always with the goal of making everyday life easier for our customers.",
    "To strengthen our warm and competent team we are looking for a medical supply sales advisor for reception and administration (m/f/d) on a full-time basis, starting as soon as possible. Bring your passion for the healthcare field and help us support people with high-quality aids and personal service.",
  ],
  sections: [
    {
      title: "Your responsibilities",
      items: [
        "Professional care of our customers and expert advice on our product range",
        "Sale and fitting of aids such as bandages, insoles, compression stockings and, where applicable, orthoses",
        "Responsibility for the till system, processing prescriptions and email correspondence",
        "Close cooperation with our workshop, billing department and dispatch to optimize the order workflow",
        "Pre-selecting and processing orders for smooth handling",
      ],
    },
    {
      title: "Your profile",
      items: [
        "Completed training as a medical supply sales advisor or comparable qualification in healthcare",
        "Experience in empathetic customer advice and care",
        "Excellent communication skills and the ability to explain complex medical matters clearly",
        "Confident use of MS Office, an affinity for digital tools and willingness to learn industry-specific software",
        "Resilience and a structured way of working — even under time pressure",
        "Team spirit, flexibility and a strong service orientation",
        "Independent, precise and quality-conscious work",
      ],
    },
    {
      title: "What we offer",
      items: [
        "A responsible position in a growing company",
        "A friendly, collegial work environment with flat hierarchies",
        "Regular training opportunities in medical supplies and aids",
        "Attractive compensation and 30 days of annual leave",
        "Company pension scheme and health promotion",
        "Modern workplace equipment for comfortable working",
      ],
    },
  ],
  apply: {
    eyebrow: "Apply",
    title: "Does this role sound exciting?",
    body: "Then become part of our team and help shape the future of healthcare with us. Send your application with CV, references and your earliest possible start date by email to Ms. Alisa Sokur. We look forward to meeting you and moving things forward together.",
    contactPerson: "Ms. Alisa Sokur",
    email: "asokur@sanimotion.com",
    ctaLabel: "Apply now",
  },
};

const pages: Record<Locale, RolePageContent> = {
  de: rolePageSchema.parse(de),
  en: rolePageSchema.parse(en),
};

export const getSanitatsfachverkauferContent = (
  locale: Locale,
): RolePageContent => pages[locale];

export const APPLY_MAIL_HREF = APPLY_MAIL;

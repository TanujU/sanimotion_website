/*
 * Jobs / Careers content — DE + EN.
 *
 * Mirrors the live sanimotion.com/job-karriere/ page: hero → two
 * intro blocks ("Gemeinsam etwas bewegen", "Ihre Zukunft bei
 * Sanimotion") → single open role linking to its detail page →
 * "Gesundheit ist unser Antrieb" about-block with six strengths.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";

export const jobsPageSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  hero: z.object({
    eyebrow: z.string(),
    titleLead: z.string(),
    titleTail: z.string(),
  }),
  story: z.object({
    blocks: z
      .array(z.object({ title: z.string(), body: z.string() }))
      .min(2),
  }),
  openings: z.object({
    eyebrow: z.string(),
    title: z.string(),
    items: z
      .array(
        z.object({
          title: z.string(),
          location: z.string(),
          type: z.string(),
          href: z.string(),
          ctaLabel: z.string(),
        }),
      )
      .min(1),
  }),
  about: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    strengths: z
      .array(z.object({ icon: z.string(), label: z.string() }))
      .min(3),
  }),
});
export type JobsPageContent = z.infer<typeof jobsPageSchema>;

const ROLE_DETAIL_HREF = "/sanitatsfachverkaufer-in-fur-empfang-und-verwaltung";

const de: JobsPageContent = {
  meta: {
    title: "Jobs & Karriere — Sanimotion",
    description:
      "Werden Sie Teil unseres Teams. Aktuelle Stellenangebote bei Sanimotion Sanitätshaus Berlin.",
  },
  hero: {
    eyebrow: "Jobs & Karriere",
    titleLead: "Werden Sie Teil",
    titleTail: "unseres Teams!",
  },
  story: {
    blocks: [
      {
        title: "Gemeinsam etwas bewegen",
        body: "Ob in der Kundenberatung, Verwaltung oder Orthopädietechnik – bei uns erwarten Sie abwechslungsreiche Aufgaben, moderne Arbeitsplätze und ein herzliches, kollegiales Umfeld. Wir legen großen Wert auf persönliche Weiterentwicklung und bieten Ihnen die Möglichkeit, sich fachlich weiterzubilden und neue Kompetenzen zu erwerben.",
      },
      {
        title: "Ihre Zukunft bei Sanimotion",
        body: "Sie suchen eine sinnstiftende Tätigkeit in einem Unternehmen, das Tradition und Innovation vereint? Dann entdecken Sie unsere aktuellen Stellenangebote oder schicken Sie uns Ihre Initiativbewerbung und werden Sie Teil unseres Teams! Wir freuen uns darauf, Sie kennenzulernen.",
      },
    ],
  },
  openings: {
    eyebrow: "Aktuelle Stellenangebote",
    title: "Unsere offene Stelle.",
    items: [
      {
        title: "Sanitätsfachverkäufer für Empfang & Verwaltung (m/w/d)",
        location: "Berlin",
        type: "Vollzeit",
        href: ROLE_DETAIL_HREF,
        ctaLabel: "Zur Stellenanzeige",
      },
    ],
  },
  about: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Gesundheit ist unser Antrieb.",
    body: "Gesundheit ist unser Antrieb – und dafür setzen wir uns mit Leidenschaft ein. Seit über 30 Jahren begleiten wir Menschen auf ihrem Weg zu mehr Mobilität und Lebensqualität. Als etabliertes Sanitätshaus verbinden wir traditionelles Handwerk mit modernster Technik und fundiertem Fachwissen. Unser Erfolg basiert auf einem engagierten Team, das täglich sein Bestes gibt, um unseren Kunden erstklassige Beratung, individuelle Lösungen und exzellenten Service zu bieten.",
    strengths: [
      { icon: "Sparkles", label: "Ausgezeichneter Service" },
      { icon: "MessageCircle", label: "Fachkundige Beratung" },
      { icon: "Clock", label: "Langjährige Erfahrung" },
      { icon: "BadgeCheck", label: "Hochwertige Markenprodukte" },
      { icon: "Home", label: "Hausbesuche in ganz Berlin" },
      { icon: "Store", label: "Filialgeschäft & Online-Shop" },
    ],
  },
};

const en: JobsPageContent = {
  meta: {
    title: "Jobs & Careers — Sanimotion",
    description:
      "Become part of our team. Current openings at Sanimotion Sanitätshaus Berlin.",
  },
  hero: {
    eyebrow: "Jobs & Careers",
    titleLead: "Become part",
    titleTail: "of our team!",
  },
  story: {
    blocks: [
      {
        title: "Move things forward, together",
        body: "Whether in customer advice, administration or orthopedic technology — varied tasks, modern workplaces and a warm, collegial environment await you with us. We place great value on personal development and give you the opportunity to grow professionally and acquire new skills.",
      },
      {
        title: "Your future at Sanimotion",
        body: "Looking for meaningful work at a company that unites tradition and innovation? Then explore our current openings or send us an unsolicited application and become part of our team. We look forward to meeting you.",
      },
    ],
  },
  openings: {
    eyebrow: "Current openings",
    title: "Our open role.",
    items: [
      {
        title: "Medical supply sales advisor — reception & administration (m/f/d)",
        location: "Berlin",
        type: "Full-time",
        href: ROLE_DETAIL_HREF,
        ctaLabel: "View job details",
      },
    ],
  },
  about: {
    eyebrow: "Sanimotion Sanitätshaus Berlin",
    title: "Health is what drives us.",
    body: "Health is what drives us — and we put our heart into it. For over 30 years we have accompanied people on their way to more mobility and quality of life. As an established medical supply house we combine traditional craftsmanship with cutting-edge technology and well-founded expertise. Our success is based on a committed team that gives its best every day to provide our customers with first-class advice, individual solutions and excellent service.",
    strengths: [
      { icon: "Sparkles", label: "Excellent service" },
      { icon: "MessageCircle", label: "Expert consultation" },
      { icon: "Clock", label: "Long-standing experience" },
      { icon: "BadgeCheck", label: "High-quality brand products" },
      { icon: "Home", label: "House visits across Berlin" },
      { icon: "Store", label: "Retail stores & online shop" },
    ],
  },
};

const pages: Record<Locale, JobsPageContent> = {
  de: jobsPageSchema.parse(de),
  en: jobsPageSchema.parse(en),
};

export const getJobsContent = (locale: Locale): JobsPageContent =>
  pages[locale];

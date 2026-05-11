/*
 * Products page content — DE + EN.
 *
 * Eight categories sourced from sanimotion.com's product navigation.
 * Each category gets an anchor slug used by deep-links (e.g.
 * /produkte#einlagen). Sub-bullets describe scope without being
 * exhaustive — the goal is to set expectations for an in-store fitting.
 */
import { z } from "zod";
import type { Locale } from "~/i18n/locale";
import { ctaSchema } from "~/schemas/content";

export const productCategorySchema = z.object({
  slug: z.string(),
  icon: z.string(),
  title: z.string(),
  lede: z.string(),
  bullets: z.array(z.string()).min(2).max(6),
});
export type ProductCategory = z.infer<typeof productCategorySchema>;

export const produktePageSchema = z.object({
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
  categories: z.array(productCategorySchema).min(6),
  process: z.object({
    eyebrow: z.string(),
    title: z.string(),
    steps: z
      .array(
        z.object({
          number: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      )
      .length(4),
  }),
  closing: z.object({
    eyebrow: z.string(),
    title: z.string(),
    body: z.string(),
    primaryCta: ctaSchema,
    secondaryCta: ctaSchema,
  }),
});
export type ProduktePageContent = z.infer<typeof produktePageSchema>;

const de: ProduktePageContent = {
  meta: {
    title: "Produkte — Sanimotion",
    description:
      "Maßanfertigung und Beratung: Einlagen, Schuhe, Kompressionsstrümpfe, Orthesen, Prothesen, Bandagen, Reha-Technik und Skoliose-Korsett.",
  },
  hero: {
    eyebrow: "Produkte",
    titleLead: "Maßanfertigung,",
    titleTail: "die zu Ihnen passt.",
    lede: "Vom orthopädischen Schuh bis zur Prothese — alles aus einer Hand und auf Sie zugeschnitten. Eine Übersicht unserer Versorgungsbereiche.",
  },
  categories: [
    {
      slug: "einlagen",
      icon: "Footprints",
      title: "Orthopädische Einlagen",
      lede: "Maßgefertigt in unserer Berliner Werkstatt — für entlastetes, schmerzfreies Gehen.",
      bullets: [
        "3D-Fußdruckmessung",
        "Sport-, Sensomotorik- und Bettungseinlagen",
        "Anpassung in jeden Schuh",
      ],
    },
    {
      slug: "schuhe",
      icon: "Hammer",
      title: "Orthopädische Schuhe",
      lede: "Schuhzurichtungen und Maßschuhe vom Orthopädie-Schuhmachermeister.",
      bullets: [
        "Maßschuhe nach Gips- und Scan-Abdruck",
        "Schuhzurichtungen an Konfektionsschuhen",
        "Diabetesadaptierte Versorgung",
      ],
    },
    {
      slug: "kompression",
      icon: "Activity",
      title: "Kompressionsstrümpfe",
      lede: "Passgenaues Anmessen — nur ein korrekt sitzender Strumpf wirkt.",
      bullets: [
        "Anmessen in allen Filialen",
        "Klassen I – IV, flach- und rundgestrickt",
        "Diskrete An- und Ausziehhilfen",
      ],
    },
    {
      slug: "orthesen",
      icon: "Bone",
      title: "Orthesen",
      lede: "Stützen, entlasten, korrigieren — am ganzen Körper.",
      bullets: [
        "Fuß-, Knie- und Hüftorthesen",
        "Hand-, Daumen- und Schulterorthesen",
        "Maßanfertigungen nach Verordnung",
      ],
    },
    {
      slug: "prothesen",
      icon: "PersonStanding",
      title: "Prothesen",
      lede: "Hochwertige Versorgungen für die Wiederherstellung Ihrer Mobilität.",
      bullets: [
        "Bein-, Unterschenkel- und Oberschenkelprothesen",
        "Arm-, Hand- und Fingerprothesen",
        "Brustprothesen nach Mastektomie",
      ],
    },
    {
      slug: "bandagen",
      icon: "Bandage",
      title: "Medizinische Bandagen",
      lede: "Stabilisierung mit Tragekomfort — passgenau auf Ihren Körper.",
      bullets: [
        "Knie-, Sprunggelenk- und Handgelenkbandagen",
        "Rücken- und Schulterbandagen",
        "Markenprodukte führender Hersteller",
      ],
    },
    {
      slug: "reha",
      icon: "Accessibility",
      title: "Reha-Technik",
      lede: "Mobilitätshilfen und Pflegehilfsmittel für mehr Selbstständigkeit.",
      bullets: [
        "Rollatoren, Rollstühle, E-Scooter",
        "Bad- und WC-Hilfen",
        "Pflegebetten und Anti-Dekubitus-Systeme",
      ],
    },
    {
      slug: "skoliose",
      icon: "Stethoscope",
      title: "Skoliose-Korsett",
      lede: "Korrektur und Stabilisierung — nach individuellem Befund.",
      bullets: [
        "3D-Scan-basierte Anpassung",
        "Chêneau- und Boston-Korsett",
        "Begleitung durch erfahrene Techniker",
      ],
    },
  ],
  process: {
    eyebrow: "Ablauf",
    title: "So läuft Ihre Versorgung ab.",
    steps: [
      {
        number: "01",
        title: "Termin",
        description:
          "Vereinbaren Sie online oder telefonisch einen Termin in einem unserer Sanitätshäuser.",
      },
      {
        number: "02",
        title: "Beratung & Messung",
        description:
          "Persönliche Beratung, Anmessen und Auswahl der passenden Versorgung.",
      },
      {
        number: "03",
        title: "Anfertigung",
        description:
          "Fertigung in unserer Berliner Werkstatt oder beim Markenpartner — mit Probepass.",
      },
      {
        number: "04",
        title: "Übergabe",
        description:
          "Anpassung vor Ort, Erklärung der Handhabung und Nachsorgetermin.",
      },
    ],
  },
  closing: {
    eyebrow: "Nächster Schritt",
    title: "Bereit für Ihre Versorgung?",
    body: "Bringen Sie Ihr Rezept mit — oder laden Sie es vorab digital hoch. Wir übernehmen die Abrechnung mit Ihrer Krankenkasse.",
    primaryCta: { label: "Termin buchen", href: "/kontakt" },
    secondaryCta: { label: "Rezept hochladen", href: "/kontakt#rezept" },
  },
};

const en: ProduktePageContent = {
  meta: {
    title: "Products — Sanimotion",
    description:
      "Custom-made and expert advice: insoles, shoes, compression stockings, orthoses, prosthetics, bandages, rehab equipment and scoliosis bracing.",
  },
  hero: {
    eyebrow: "Products",
    titleLead: "Custom care,",
    titleTail: "made to fit you.",
    lede: "From orthopedic shoes to prosthetics — everything from one source, tailored to you. An overview of what we supply.",
  },
  categories: [
    {
      slug: "einlagen",
      icon: "Footprints",
      title: "Orthopedic insoles",
      lede: "Custom-made in our Berlin workshop — for pain-free, supported walking.",
      bullets: [
        "3D foot pressure measurement",
        "Sport, sensorimotor and bedding insoles",
        "Fitted to any shoe",
      ],
    },
    {
      slug: "schuhe",
      icon: "Hammer",
      title: "Orthopedic shoes",
      lede: "Shoe modifications and bespoke shoes from a master shoemaker.",
      bullets: [
        "Bespoke shoes from cast or scan",
        "Modifications to off-the-shelf shoes",
        "Diabetes-adapted footwear",
      ],
    },
    {
      slug: "kompression",
      icon: "Activity",
      title: "Compression stockings",
      lede: "Precise fitting — a stocking only works if it sits correctly.",
      bullets: [
        "Fitting in every store",
        "Class I – IV, flat- and round-knit",
        "Discreet donning and doffing aids",
      ],
    },
    {
      slug: "orthesen",
      icon: "Bone",
      title: "Orthoses",
      lede: "Support, offload, correct — across the entire body.",
      bullets: [
        "Foot, knee and hip orthoses",
        "Hand, thumb and shoulder orthoses",
        "Custom-made by prescription",
      ],
    },
    {
      slug: "prothesen",
      icon: "PersonStanding",
      title: "Prosthetics",
      lede: "High-quality solutions for restoring your mobility.",
      bullets: [
        "Lower- and upper-leg prosthetics",
        "Arm, hand and finger prosthetics",
        "Breast prosthetics after mastectomy",
      ],
    },
    {
      slug: "bandagen",
      icon: "Bandage",
      title: "Medical bandages",
      lede: "Stability with comfort — fitted precisely to your body.",
      bullets: [
        "Knee, ankle and wrist bandages",
        "Back and shoulder bandages",
        "Branded products from leading makers",
      ],
    },
    {
      slug: "reha",
      icon: "Accessibility",
      title: "Rehab equipment",
      lede: "Mobility and care aids for greater independence.",
      bullets: [
        "Rollators, wheelchairs, e-scooters",
        "Bathroom and toilet aids",
        "Care beds and anti-decubitus systems",
      ],
    },
    {
      slug: "skoliose",
      icon: "Stethoscope",
      title: "Scoliosis brace",
      lede: "Correction and stabilization — based on your individual diagnosis.",
      bullets: [
        "3D-scan based fitting",
        "Chêneau and Boston braces",
        "Guidance from experienced technicians",
      ],
    },
  ],
  process: {
    eyebrow: "How it works",
    title: "Your care, step by step.",
    steps: [
      {
        number: "01",
        title: "Appointment",
        description:
          "Book an appointment at one of our stores online or by phone.",
      },
      {
        number: "02",
        title: "Consultation & fitting",
        description:
          "Personal advice, measurement and selection of the right product.",
      },
      {
        number: "03",
        title: "Manufacture",
        description:
          "Made in our Berlin workshop or by our brand partner — with a fitting.",
      },
      {
        number: "04",
        title: "Handover",
        description:
          "Final fitting on site, instructions, and a follow-up appointment.",
      },
    ],
  },
  closing: {
    eyebrow: "Next step",
    title: "Ready to start?",
    body: "Bring your prescription — or upload it in advance. We handle the billing with your health insurance.",
    primaryCta: { label: "Book appointment", href: "/kontakt" },
    secondaryCta: { label: "Upload prescription", href: "/kontakt#rezept" },
  },
};

const pages: Record<Locale, ProduktePageContent> = {
  de: produktePageSchema.parse(de),
  en: produktePageSchema.parse(en),
};

export const getProdukteContent = (locale: Locale): ProduktePageContent =>
  pages[locale];

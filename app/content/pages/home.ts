/*
 * Home page content — typed and validated.
 *
 * What: All copy for the Sanimotion-Berlin Startseite. Sourced from the
 * public homepage at sanimotion.com on 2026-04-30. Sections render
 * against this object — they accept a typed `content` prop and never
 * import copy directly.
 *
 * Why: Keeping copy out of components makes editing safe (no JSX risk)
 * and matches the future CMS contract — a CMS will return the same
 * shape over the wire.
 */
import { homePageSchema, type HomePageContent } from "~/schemas/content";

const data: HomePageContent = {
  meta: {
    title: "Sanimotion — Ihr Sanitätshaus in Berlin",
    description:
      "Sanitätshaus in Berlin: persönliche Beratung, Maßanfertigung und ein großes Sortiment an medizinischen Produkten. Hausbesuch und Rezept-Upload möglich.",
  },

  hero: {
    eyebrow: "Sanitätshaus Berlin",
    titleLead: "Ihr Sanitätshaus",
    titleTail: "in Berlin.",
    lede: "In unseren Berliner Sanitätshäusern erhalten Sie neben einer großen Auswahl an medizinischen Produkten eine persönliche Beratung mit viel Feingefühl. Gerne beraten wir Sie auch bei Ihnen zu Hause und beliefern Sie. Zudem können Sie Ihr Rezept jetzt einfach bei uns hochladen.",
    primaryCta: {
      label: "Termin buchen",
      href: "/kontakt",
    },
    secondaryCta: {
      label: "Standort finden",
      href: "/standorte",
    },
  },

  // Six product categories shown on sanimotion.com — verbatim copy.
  products: {
    eyebrow: "Produkte",
    title: "Maßanfertigung und Beratung — für jede Anforderung.",
    items: [
      {
        icon: "Footprints",
        title: "Orthopädische Einlagen",
        description:
          "Orthopädische Schuheinlagen made in Berlin, damit Sie endlich wieder schmerzfrei gehen können.",
        href: "/produkte#einlagen",
      },
      {
        icon: "Hammer",
        title: "Orthopädische Schuhe",
        description:
          "Schuhzurichtungen und Maßschuhe vom Berliner Orthopädie-Schuhmachermeister.",
        href: "/produkte#schuhe",
      },
      {
        icon: "Activity",
        title: "Kompressionsstrümpfe",
        description:
          "Passgenaues Anmessen für den richtigen Sitz medizinischer Kompressionsstrümpfe.",
        href: "/produkte#kompression",
      },
      {
        icon: "Bone",
        title: "Orthesen",
        description:
          "Maßanfertigung für Orthesen an Fuß, Knie, Hand, Arm, Hüfte, Rumpf, Schulter & Nacken.",
        href: "/produkte#orthesen",
      },
      {
        icon: "PersonStanding",
        title: "Prothesen",
        description:
          "Hochwertige Prothesen für alle Körperregionen zur Wiederherstellung Ihrer Mobilität.",
        href: "/produkte#prothesen",
      },
      {
        icon: "Bandage",
        title: "Medizinische Bandagen",
        description:
          "Wir passen medizinische Bandagen aller Art passgenau auf Ihren Körper an.",
        href: "/produkte#bandagen",
      },
    ],
  },

  // Two homepage-highlighted services: home visits and prescription upload.
  services: {
    eyebrow: "Service",
    title: "Bequemer geht's nicht.",
    items: [
      {
        icon: "Home",
        title: "Hausbesuch",
        description:
          "Auf Wunsch beraten und beliefern wir Sie bei Ihnen zu Hause — persönlich, ohne zusätzliche Wege.",
        cta: {
          label: "Hausbesuch anfragen",
          href: "/kontakt#hausbesuch",
        },
      },
      {
        icon: "FileText",
        title: "Rezept hochladen",
        description:
          "Reichen Sie Ihr Rezept digital bei uns ein — wir kümmern uns um die Bearbeitung und melden uns bei Ihnen.",
        cta: {
          label: "Rezept einlösen",
          href: "/kontakt#rezept",
        },
      },
    ],
  },

  // About snippet — the homepage's company-description copy, verbatim.
  about: {
    eyebrow: "Über uns",
    tagline: "Alles für Ihre Gesundheit.",
    body: "Gesundheit steht über allem. Mit unseren Services und Produkten möchten wir Ihre gesundheitlichen Probleme lindern, Ihre Mobilität verbessern und Sie auf Ihrem Weg zur Genesung unterstützen. Wir verbinden traditionelle Handwerkskunst mit aktuellen Trends, modernster Technik und orthopädischem Know-how.",
    metricValue: "30+",
    metricLabel: "Jahre im Gesundheitsbereich",
    cta: {
      label: "Mehr über uns",
      href: "/ueber-uns",
    },
  },

  // Six "why us" feature cards — verbatim labels from the homepage strip
  // shown on sanimotion.com.
  features: {
    eyebrow: "Warum Sanimotion",
    title: "Was uns auszeichnet.",
    items: [
      { icon: "HandHeart", title: "Ausgezeichneter Service" },
      { icon: "MessageCircle", title: "Fachkundige Beratung" },
      { icon: "Clock", title: "Langjährige Erfahrung" },
      { icon: "BadgeCheck", title: "Hochwertige Markenprodukte" },
      { icon: "Home", title: "Hausbesuche in ganz Berlin" },
      { icon: "Store", title: "Filialgeschäfte & Online-Shop" },
    ],
  },

  // Markenpartner / brand partners — names rendered as monochrome text
  // until real SVG logos arrive. List taken from the homepage logo strip.
  partners: {
    eyebrow: "Markenpartner",
    title:
      "Wir arbeiten mit den führenden Herstellern für medizinische Produkte.",
    items: [
      "Bauerfeind",
      "Juzo",
      "Sporlastic",
      "Bort Medical",
      "Aspen",
      "Russka",
      "Orthoservice",
      "Springer Aktiv",
      "MTR Rostock",
      "Brieskorn",
      "Drylock",
    ],
  },

  // Four cities mentioned on the homepage — full hours/addresses live on
  // /standorte once that page is built (Execution step #6).
  locations: {
    eyebrow: "Standorte",
    title: "Vier Sanitätshäuser im Großraum Berlin.",
    cities: ["Kreuzberg", "Spandau", "Zehlendorf", "Königs Wusterhausen"],
    cta: {
      label: "Alle Standorte ansehen",
      href: "/standorte",
    },
  },

  // Final contact + map block. Replaces the old thin CtaBand with a full
  // Kontakt/Termin section so users have phone, email, hours and a map
  // visible without leaving the home page.
  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns.",
    lede: "Persönliche Beratung in einem unserer Berliner Sanitätshäuser oder direkt bei Ihnen zu Hause. Wir sind für Sie da.",
    phone: {
      label: "030 235 957 600",
      href: "tel:+493023595760",
    },
    email: {
      label: "info@sanimotion.com",
      href: "mailto:info@sanimotion.com",
    },
    hours: "Mo. – Fr. · 09:00 – 15:00 Uhr",
    primaryCta: {
      label: "Termin buchen",
      href: "/kontakt",
      ariaLabel: "Termin in einem Sanimotion-Sanitätshaus buchen",
    },
    secondaryCta: {
      label: "Hausbesuch anfragen",
      href: "/kontakt#hausbesuch",
    },
    // OpenStreetMap embed — bbox covers the four Berlin Sanimotion sites
    // plus Königs Wusterhausen. Cookieless / GDPR-clean (no Google Maps).
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=13.10,52.36,13.79,52.62&layer=mapnik&marker=52.50,13.43",
    mapHref:
      "https://www.openstreetmap.org/?mlat=52.50&mlon=13.43#map=11/52.50/13.43",
  },
};

// Parse at module load — invalid content fails the build.
export const homeContent = homePageSchema.parse(data);

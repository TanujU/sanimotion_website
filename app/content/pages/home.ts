/*
 * Home page content — DE (source of truth) + EN.
 *
 * Structure mirrors sanimotion.com's homepage. Section components accept
 * a typed `content` prop and never import copy directly, which keeps
 * components locale-agnostic and the future CMS contract clean.
 */
import { homePageSchema, type HomePageContent } from "~/schemas/content";
import type { Locale } from "~/i18n/locale";

const de: HomePageContent = {
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
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    secondaryCta: { label: "Standort finden", href: "/#standorte" },
  },

  products: {
    eyebrow: "Produkte",
    title: "Maßanfertigung und Beratung — für jede Anforderung.",
    items: [
      {
        icon: "Hammer",
        title: "Orthopädische Schuhe",
        description:
          "Schuhzurichtungen und Maßschuhe vom Berliner Orthopädie-Schuhmachermeister.",
        href: "/orthopaedische-schuhe",
      },
      {
        icon: "Footprints",
        title: "Orthopädische Einlagen",
        description:
          "Orthopädische Schuheinlagen made in Berlin, damit Sie endlich wieder schmerzfrei gehen können.",
        href: "/orthopaedische-einlagen",
      },
      {
        icon: "Bone",
        title: "Orthesen",
        description:
          "Maßanfertigung für Orthesen an Fuß, Knie, Hand, Arm, Hüfte, Rumpf, Schulter & Nacken.",
        href: "/orthesen",
      },
      {
        icon: "PersonStanding",
        title: "Prothesen",
        description:
          "Hochwertige Prothesen für alle Körperregionen zur Wiederherstellung Ihrer Mobilität.",
        href: "/prothesen",
      },
      {
        icon: "Activity",
        title: "Kompressionsstrümpfe",
        description:
          "Passgenaues Anmessen für den richtigen Sitz medizinischer Kompressionsstrümpfe.",
        href: "/kompressionsstruempfe",
      },
      {
        icon: "Bandage",
        title: "Medizinische Bandagen",
        description:
          "Wir passen medizinische Bandagen aller Art passgenau auf Ihren Körper an.",
        href: "/medizinische-bandagen",
      },
      {
        icon: "Accessibility",
        title: "Reha-Technik",
        description:
          "Rollatoren, Rollstühle und Mobilitätshilfen für mehr Selbstständigkeit im Alltag.",
        href: "/reha-technik",
      },
      {
        icon: "Stethoscope",
        title: "Skoliose-Korsett",
        description:
          "Individuell angepasste Korsettversorgung zur Korrektur und Stabilisierung der Wirbelsäule.",
        href: "/skoliose-korsett",
      },
    ],
  },

  about: {
    eyebrow: "Über uns",
    tagline: "Alles für Ihre Gesundheit.",
    body: "Gesundheit steht über allem. Mit unseren Services und Produkten möchten wir Ihre gesundheitlichen Probleme lindern, Ihre Mobilität verbessern und Sie auf Ihrem Weg zur Genesung unterstützen. Dabei verbinden wir traditionelle Handwerkskunst mit aktuellen Trends, modernster Technik und orthopädischem Know-how — seit über 30 Jahren in Berlin. Vom ersten Gespräch über das Maßnehmen bis zur Anpassung erleben Sie bei uns eine persönliche Beratung mit viel Feingefühl.",
    metricValue: "30+",
    metricLabel: "Jahre im Gesundheitsbereich",
    cta: { label: "Mehr über uns", href: "/ueber-uns" },
  },

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

  craft: {
    eyebrow: "Maßanfertigung",
    title: "Aus der eigenen Werkstatt in Berlin.",
    body: "Vom Maß bis zur Übergabe — alles unter einem Dach. In unserer Kreuzberger Werkstatt fertigen unsere Meister Schuhe, Einlagen, Orthesen und Prothesen in eigener Hand. Kurze Wege, persönliche Anpassung, schnelle Korrekturen.",
    bullets: [
      "Maßschuhe und Schuhzurichtungen",
      "Einlagen aus eigener Fertigung",
      "Orthesen, Prothesen und Korsettversorgungen",
      "Anpassung und Reparatur — kurzfristig",
    ],
    cta: { label: "Werkstatt entdecken", href: "/produkte" },
  },

  shop: {
    eyebrow: "Onlineshop",
    title: "750+ Produkte für jeden Alltag.",
    lede: "Pflege, Mobilität, Bad und Alltag — bequem online bestellt und nach Hause geliefert.",
    cta: {
      label: "Zum Onlineshop",
      href: "https://www.sanivita.de/sanimotion/",
    },
    categories: [
      {
        slug: "personal-care",
        label: "Körperpflege",
        href: "https://www.sanivita.de/sanimotion/koerperpflege/die-haut-pflegen/",
      },
      {
        slug: "daily-aids",
        label: "Alltagshilfen",
        href: "https://www.sanivita.de/sanimotion/haushalt/alltagshilfen/",
      },
      {
        slug: "blood-pressure",
        label: "Blutdruck",
        href: "https://www.sanivita.de/sanimotion/fitness/blutdruck-messen/",
      },
      {
        slug: "bath",
        label: "Bad- und Toilettenhilfen",
        href: "https://www.sanivita.de/sanimotion/sicherheit/hilfen-fuer-wc-dusche-und-bad/",
      },
      {
        slug: "rollators",
        label: "Rollatoren",
        href: "https://www.sanivita.de/sanimotion/mobilitaet/rollatoren/",
      },
      {
        slug: "scooter",
        label: "Elektrofahrzeuge",
        href: "https://www.sanivita.de/sanimotion/mobilitaet/seniorenmobile-und-elektromobile/",
      },
    ],
  },

  partnerStores: {
    eyebrow: "Unser Partner",
    title: "Sanitätshaus Meisterschuh Berlin.",
    body: "Im Verbund mit Meisterschuh erweitern wir unser Sortiment im Berliner Westen — mit zwei zusätzlichen Standorten und derselben Versorgungsqualität.",
    stores: [
      {
        slug: "westend",
        name: "Westend",
        address: "Reichsstraße 103",
        city: "14052 Berlin",
      },
      {
        slug: "kreuzberg-meisterschuh",
        name: "Kreuzberg",
        address: "Bergmannstraße 5",
        city: "10961 Berlin",
      },
    ],
  },

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

  locations: {
    eyebrow: "Standorte",
    title: "Vier Sanitätshäuser im Großraum Berlin.",
    cities: ["Kreuzberg", "Spandau", "Zehlendorf", "Königs Wusterhausen"],
    cta: { label: "Alle Standorte ansehen", href: "/standorte" },
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Sprechen Sie mit uns.",
    lede: "Persönliche Beratung in einem unserer Berliner Sanitätshäuser oder direkt bei Ihnen zu Hause. Wir sind für Sie da.",
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
    hours: "Mo. – Fr. · 09:00 – 15:00 Uhr",
    primaryCta: {
      label: "Termin buchen",
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
      ariaLabel: "Termin in einem Sanimotion-Sanitätshaus buchen",
    },
    // Google Maps embed. To show ONLY the 4 Sanimotion + 2 Meisterschuh
    // pins (no other businesses, no route line), create a free Google
    // My Maps at https://mymaps.google.com with those 6 addresses, then
    // replace this URL with the iframe `src` from "Share → Embed on my
    // site". Until that map exists we fall back to a focused search.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Sanimotion+Sanit%C3%A4tshaus+Meisterschuh+Berlin&t=&z=10&ie=UTF8&iwloc=&output=embed",
    mapHref:
      "https://www.google.com/maps/search/Sanimotion+Sanit%C3%A4tshaus+Meisterschuh+Berlin/@52.5,13.4,10z",
  },
};

const en: HomePageContent = {
  meta: {
    title: "Sanimotion — Your medical supply store in Berlin",
    description:
      "Berlin medical supply store: personal consultation, custom-made products, and a wide range of medical supplies. Home visits and online prescription submission.",
  },

  hero: {
    eyebrow: "Berlin medical supply",
    titleLead: "Your medical store",
    titleTail: "in Berlin.",
    lede: "At our Berlin stores, you receive a wide selection of medical products together with personal, attentive consultation. We're happy to advise and deliver to you at home — and you can now upload your prescription to us in seconds.",
    primaryCta: {
      label: "Book appointment",
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    },
    secondaryCta: { label: "Find a location", href: "/#standorte" },
  },

  products: {
    eyebrow: "Products",
    title: "Custom-made and expert advice — for every requirement.",
    items: [
      {
        icon: "Hammer",
        title: "Orthopedic shoes",
        description:
          "Shoe modifications and bespoke shoes from a Berlin master orthopedic shoemaker.",
        href: "/orthopaedische-schuhe",
      },
      {
        icon: "Footprints",
        title: "Orthopedic insoles",
        description:
          "Orthopedic insoles made in Berlin so you can finally walk pain-free again.",
        href: "/orthopaedische-einlagen",
      },
      {
        icon: "Bone",
        title: "Orthoses",
        description:
          "Custom orthoses for foot, knee, hand, arm, hip, torso, shoulder and neck.",
        href: "/orthesen",
      },
      {
        icon: "PersonStanding",
        title: "Prosthetics",
        description:
          "High-quality prosthetics for every part of the body to restore your mobility.",
        href: "/prothesen",
      },
      {
        icon: "Activity",
        title: "Compression stockings",
        description:
          "Precise measurement to ensure the correct fit of medical compression stockings.",
        href: "/kompressionsstruempfe",
      },
      {
        icon: "Bandage",
        title: "Medical bandages",
        description:
          "We fit medical bandages of all kinds precisely to your body.",
        href: "/medizinische-bandagen",
      },
      {
        icon: "Accessibility",
        title: "Rehab equipment",
        description:
          "Rollators, wheelchairs and mobility aids for more independence in daily life.",
        href: "/reha-technik",
      },
      {
        icon: "Stethoscope",
        title: "Scoliosis brace",
        description:
          "Individually fitted brace therapy to correct and stabilise the spine.",
        href: "/skoliose-korsett",
      },
    ],
  },

  about: {
    eyebrow: "About us",
    tagline: "Everything for your health.",
    body: "Health is the most important thing. With our services and products we aim to ease your health concerns, improve your mobility, and support you on the path to recovery. We combine traditional craftsmanship with current trends, the latest technology, and deep orthopedic know-how — for more than 30 years here in Berlin. From the first consultation through measuring to fitting, you receive personal, attentive care every step of the way.",
    metricValue: "30+",
    metricLabel: "Years in healthcare",
    cta: { label: "More about us", href: "/ueber-uns" },
  },

  features: {
    eyebrow: "Why Sanimotion",
    title: "What sets us apart.",
    items: [
      { icon: "HandHeart", title: "Outstanding service" },
      { icon: "MessageCircle", title: "Expert consultation" },
      { icon: "Clock", title: "Decades of experience" },
      { icon: "BadgeCheck", title: "Premium brand products" },
      { icon: "Home", title: "Home visits across Berlin" },
      { icon: "Store", title: "Stores & online shop" },
    ],
  },

  craft: {
    eyebrow: "Custom-made",
    title: "From our own Berlin workshop.",
    body: "From measure to handover — all under one roof. In our Kreuzberg workshop, our master craftspeople make shoes, insoles, orthoses and prosthetics by hand. Short paths, personal fitting, fast corrections.",
    bullets: [
      "Bespoke shoes and shoe modifications",
      "Insoles made on site",
      "Orthoses, prosthetics and corset solutions",
      "Adjustments and repairs — quickly",
    ],
    cta: { label: "Discover the workshop", href: "/produkte" },
  },

  shop: {
    eyebrow: "Online shop",
    title: "750+ products for everyday life.",
    lede: "Care, mobility, bathroom and daily aids — ordered online and delivered to your door.",
    cta: {
      label: "Visit the online shop",
      href: "https://www.sanivita.de/sanimotion/",
    },
    categories: [
      {
        slug: "personal-care",
        label: "Personal care",
        href: "https://www.sanivita.de/sanimotion/koerperpflege/die-haut-pflegen/",
      },
      {
        slug: "daily-aids",
        label: "Daily aids",
        href: "https://www.sanivita.de/sanimotion/haushalt/alltagshilfen/",
      },
      {
        slug: "blood-pressure",
        label: "Blood pressure",
        href: "https://www.sanivita.de/sanimotion/fitness/blutdruck-messen/",
      },
      {
        slug: "bath",
        label: "Bath and Toilet aids",
        href: "https://www.sanivita.de/sanimotion/sicherheit/hilfen-fuer-wc-dusche-und-bad/",
      },
      {
        slug: "rollators",
        label: "Rollators",
        href: "https://www.sanivita.de/sanimotion/mobilitaet/rollatoren/",
      },
      {
        slug: "scooter",
        label: "Electric vehicles",
        href: "https://www.sanivita.de/sanimotion/mobilitaet/seniorenmobile-und-elektromobile/",
      },
    ],
  },

  partnerStores: {
    eyebrow: "Our partner",
    title: "Sanitätshaus Meisterschuh Berlin.",
    body: "Together with our partner Meisterschuh, we extend our reach in west Berlin — two additional locations with the same care quality.",
    stores: [
      {
        slug: "westend",
        name: "Westend",
        address: "Reichsstraße 103",
        city: "14052 Berlin",
      },
      {
        slug: "kreuzberg-meisterschuh",
        name: "Kreuzberg",
        address: "Bergmannstraße 5",
        city: "10961 Berlin",
      },
    ],
  },

  partners: {
    eyebrow: "Brand partners",
    title: "We work with the leading manufacturers of medical products.",
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

  locations: {
    eyebrow: "Locations",
    title: "Four medical supply stores in greater Berlin.",
    cities: ["Kreuzberg", "Spandau", "Zehlendorf", "Königs Wusterhausen"],
    cta: { label: "View all locations", href: "/standorte" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk to us.",
    lede: "Personal consultation at one of our Berlin stores or directly at your home. We're here for you.",
    phone: { label: "030 235 957 600", href: "tel:+493023595760" },
    email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
    hours: "Mon – Fri · 9:00 – 15:00",
    primaryCta: {
      label: "Book appointment",
      href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
      ariaLabel: "Book an appointment at a Sanimotion store",
    },
    mapEmbedUrl:
      "https://www.google.com/maps?q=Sanimotion+Sanit%C3%A4tshaus+Meisterschuh+Berlin&t=&z=10&ie=UTF8&iwloc=&output=embed",
    mapHref:
      "https://www.google.com/maps/search/Sanimotion+Sanit%C3%A4tshaus+Meisterschuh+Berlin/@52.5,13.4,10z",
  },
};

const homes: Record<Locale, HomePageContent> = {
  de: homePageSchema.parse(de),
  en: homePageSchema.parse(en),
};

export const getHomeContent = (locale: Locale): HomePageContent =>
  homes[locale];

/* Default export retained for any legacy imports — DE-only. */
export const homeContent = homes.de;

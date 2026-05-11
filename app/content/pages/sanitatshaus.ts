/*
 * Per-location pages — DE + EN.
 *
 * One entry per Sanimotion store. Mirrors the home composition (hero,
 * about, features, products, optional craft band, online shop teaser,
 * partner brands, contact + map) but with location-specific copy,
 * address, hours and Google-Maps embed.
 *
 * Source of truth: sanimotion.com/sanitatshaus-{kreuzberg|spandau|
 * zehlendorf|konigs-wusterhausen}, fetched 2026-05-06.
 */
import {
  locationPageSchema,
  type LocationPageContent,
} from "~/schemas/content";
import type { Locale } from "~/i18n/locale";

type LocationKey = "kreuzberg" | "spandau" | "zehlendorf" | "konigs-wusterhausen";

const PARTNERS = [
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
];

const SHOP_CATEGORIES_DE = [
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
];

const SHOP_CATEGORIES_EN = [
  { ...SHOP_CATEGORIES_DE[0], label: "Personal care" },
  { ...SHOP_CATEGORIES_DE[1], label: "Daily aids" },
  { ...SHOP_CATEGORIES_DE[2], label: "Blood pressure" },
  { ...SHOP_CATEGORIES_DE[3], label: "Bath and Toilet aids" },
  { ...SHOP_CATEGORIES_DE[4], label: "Rollators" },
  { ...SHOP_CATEGORIES_DE[5], label: "Electric vehicles" },
];

const PRODUCTS_DE = [
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
  {
    icon: "Accessibility",
    title: "Reha-Technik",
    description:
      "Mobilitätshilfen, Rollatoren und Reha-Produkte für mehr Selbstständigkeit im Alltag.",
    href: "/produkte#reha",
  },
  {
    icon: "Stethoscope",
    title: "Skoliose-Korsett",
    description:
      "Individuell angefertigte Korsette zur konservativen Behandlung der Skoliose.",
    href: "/produkte#skoliose",
  },
];

const PRODUCTS_EN = [
  {
    icon: "Footprints",
    title: "Orthopedic insoles",
    description:
      "Orthopedic insoles made in Berlin so you can finally walk pain-free again.",
    href: "/produkte#einlagen",
  },
  {
    icon: "Hammer",
    title: "Orthopedic shoes",
    description:
      "Shoe modifications and bespoke shoes from a Berlin master orthopedic shoemaker.",
    href: "/produkte#schuhe",
  },
  {
    icon: "Activity",
    title: "Compression stockings",
    description:
      "Precise measurement to ensure the correct fit of medical compression stockings.",
    href: "/produkte#kompression",
  },
  {
    icon: "Bone",
    title: "Orthoses",
    description:
      "Custom orthoses for foot, knee, hand, arm, hip, torso, shoulder and neck.",
    href: "/produkte#orthesen",
  },
  {
    icon: "PersonStanding",
    title: "Prosthetics",
    description:
      "High-quality prosthetics for every part of the body to restore your mobility.",
    href: "/produkte#prothesen",
  },
  {
    icon: "Bandage",
    title: "Medical bandages",
    description: "We fit medical bandages of all kinds precisely to your body.",
    href: "/produkte#bandagen",
  },
  {
    icon: "Accessibility",
    title: "Rehab equipment",
    description:
      "Mobility aids, rollators and rehab products for more independence in daily life.",
    href: "/produkte#reha",
  },
  {
    icon: "Stethoscope",
    title: "Scoliosis brace",
    description:
      "Custom-made corsets for the conservative treatment of scoliosis.",
    href: "/produkte#skoliose",
  },
];

const FEATURES_DE_DEFAULT = [
  { icon: "HandHeart", title: "Ausgezeichneter Service" },
  { icon: "MessageCircle", title: "Fachkundig & freundlich" },
  { icon: "Clock", title: "Schnelle Anfertigung" },
  { icon: "BadgeCheck", title: "Hochwertige Markenprodukte" },
  { icon: "Home", title: "Hausbesuche in ganz Berlin" },
  { icon: "Store", title: "Filialgeschäft & Online-Shop" },
];

const FEATURES_EN_DEFAULT = [
  { icon: "HandHeart", title: "Outstanding service" },
  { icon: "MessageCircle", title: "Expert & friendly" },
  { icon: "Clock", title: "Fast manufacturing" },
  { icon: "BadgeCheck", title: "Premium brand products" },
  { icon: "Home", title: "Home visits across Berlin" },
  { icon: "Store", title: "Stores & online shop" },
];

const ABOUT_DE = {
  eyebrow: "Über uns",
  tagline: "Alles für Ihre Gesundheit.",
  body: "Gesundheit steht über allem. Mit unseren Services und Produkten möchten wir Ihre gesundheitlichen Probleme lindern, Ihre Mobilität verbessern und Sie auf Ihrem Weg zur Genesung unterstützen. Dabei verbinden wir traditionelle Handwerkskunst mit modernster Technik und orthopädischem Know-how — seit über 30 Jahren in Berlin.",
  metricValue: "30+",
  metricLabel: "Jahre im Gesundheitsbereich",
  cta: { label: "Mehr über uns", href: "/ueber-uns" },
};

const ABOUT_EN = {
  eyebrow: "About us",
  tagline: "Everything for your health.",
  body: "Health is the most important thing. With our services and products we ease your concerns, improve your mobility, and support you on the path to recovery. We combine traditional craftsmanship with modern technology and deep orthopedic know-how — for more than 30 years here in Berlin.",
  metricValue: "30+",
  metricLabel: "Years in healthcare",
  cta: { label: "More about us", href: "/ueber-uns" },
};

const SHOP_DE = {
  eyebrow: "Onlineshop",
  title: "750+ Produkte für jeden Alltag.",
  lede: "Pflege, Mobilität, Bad und Alltag — bequem online bestellt und nach Hause geliefert.",
  cta: {
    label: "Zum Onlineshop",
    href: "https://www.sanivita.de/sanimotion/",
  },
  categories: SHOP_CATEGORIES_DE,
};

const SHOP_EN = {
  eyebrow: "Online shop",
  title: "750+ products for everyday life.",
  lede: "Care, mobility, bathroom and daily aids — ordered online and delivered to your door.",
  cta: {
    label: "Visit the online shop",
    href: "https://www.sanivita.de/sanimotion/",
  },
  categories: SHOP_CATEGORIES_EN,
};

const PARTNERS_DE = {
  eyebrow: "Markenpartner",
  title: "Wir arbeiten mit den führenden Herstellern für medizinische Produkte.",
  items: PARTNERS,
};

const PARTNERS_EN = {
  eyebrow: "Brand partners",
  title: "We work with the leading manufacturers of medical products.",
  items: PARTNERS,
};

const PRIMARY_CTA_DE = {
  label: "Termin buchen",
  href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
  ariaLabel: "Termin in einem Sanimotion-Sanitätshaus buchen",
};

const PRIMARY_CTA_EN = {
  label: "Book appointment",
  href: PRIMARY_CTA_DE.href,
  ariaLabel: "Book an appointment at a Sanimotion store",
};

// Per-location data ---------------------------------------------------------

const de: Record<LocationKey, LocationPageContent> = {
  kreuzberg: {
    meta: {
      title: "Sanitätshaus Kreuzberg — Sanimotion",
      description:
        "Sanimotion Sanitätshaus Kreuzberg, Blücherstraße 22 in Berlin-Kreuzberg. Persönliche Beratung, Maßanfertigung und eigene Werkstatt — Hausbesuche in ganz Berlin.",
    },
    slug: "kreuzberg",
    city: "Kreuzberg",
    hero: {
      eyebrow: "Standort Kreuzberg",
      titleLead: "Ihr Sanitätshaus",
      titleTail: "in Kreuzberg",
      lede: "In unserem Sanitätshaus Sanimotion in der Blücherstr. 22 in Berlin-Kreuzberg erhalten Sie Medizinprodukte und Orthopädietechnik aller Art. Darüber hinaus versprechen wir Ihnen eine persönliche und einfühlsame Beratung. Auf Wunsch kommen wir innerhalb Berlins für eine Beratung, Vermessung oder zur Lieferung auch zu Ihnen nach Hause.",
      primaryCta: PRIMARY_CTA_DE,
      secondaryCta: { label: "Anrufen", href: "tel:+493023595760" },
    },
    about: ABOUT_DE,
    features: {
      eyebrow: "Warum Sanimotion Kreuzberg",
      title: "Was uns auszeichnet.",
      items: FEATURES_DE_DEFAULT,
    },
    products: {
      eyebrow: "Vor Ort verfügbar",
      title: "Unser Sortiment in Kreuzberg.",
      items: PRODUCTS_DE,
    },
    craft: {
      eyebrow: "Werkstatt vor Ort",
      title: "Maßanfertigung aus eigener Hand.",
      body: "Im Stammhaus Kreuzberg fertigen unsere Meister Schuhe, Einlagen, Orthesen und Prothesen direkt vor Ort. Kurze Wege, persönliche Anpassung, schnelle Korrekturen — alles unter einem Dach.",
      bullets: [
        "Maßschuhe und Schuhzurichtungen",
        "Einlagen aus eigener Fertigung",
        "Orthesen, Prothesen und Korsettversorgungen",
        "Anpassung und Reparatur — kurzfristig",
      ],
      cta: { label: "Werkstatt entdecken", href: "/produkte" },
    },
    shop: SHOP_DE,
    partners: PARTNERS_DE,
    contact: {
      eyebrow: "Kontakt Kreuzberg",
      title: "Sprechen Sie mit uns.",
      lede: "Persönliche Beratung an der Blücherstraße — telefonisch auf Deutsch oder Türkisch, per E-Mail oder direkt vor Ort.",
      address: { line1: "Blücherstraße 22", line2: "10961 Berlin-Kreuzberg" },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: [
        "Mo. – Do. · 08:00 – 17:00 Uhr",
        "Fr. · 08:00 – 15:00 Uhr",
      ],
      primaryCta: PRIMARY_CTA_DE,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin",
      showLegend: false,
    },
  },

  spandau: {
    meta: {
      title: "Sanitätshaus Spandau — Sanimotion",
      description:
        "Sanimotion Sanitätshaus Spandau, Adamstraße 3 in Berlin-Spandau. Beratung, Anpassung und Hausbesuche im Berliner Westen.",
    },
    slug: "spandau",
    city: "Spandau",
    hero: {
      eyebrow: "Standort Spandau",
      titleLead: "Ihr Sanitätshaus",
      titleTail: "in Spandau",
      lede: "In unserem Sanimotion Sanitätshaus in der Adamstraße 3 in Berlin-Spandau erhalten Sie neben einer großen Auswahl an medizinischen Produkten eine persönliche und einfühlsame Beratung.",
      primaryCta: PRIMARY_CTA_DE,
      secondaryCta: { label: "Anrufen", href: "tel:+493023595760" },
    },
    about: ABOUT_DE,
    features: {
      eyebrow: "Warum Sanimotion Spandau",
      title: "Was uns auszeichnet.",
      items: FEATURES_DE_DEFAULT,
    },
    products: {
      eyebrow: "Vor Ort verfügbar",
      title: "Unser Sortiment in Spandau.",
      items: PRODUCTS_DE,
    },
    shop: SHOP_DE,
    partners: PARTNERS_DE,
    contact: {
      eyebrow: "Kontakt Spandau",
      title: "Sprechen Sie mit uns.",
      lede: "Persönliche Beratung in der Spandauer Altstadt — kommen Sie vorbei oder rufen Sie uns einfach an.",
      address: { line1: "Adamstraße 3", line2: "13595 Berlin-Spandau" },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: [
        "Mo. – Do. · 09:00 – 16:00 Uhr",
        "Fr. · 09:00 – 15:00 Uhr",
      ],
      primaryCta: PRIMARY_CTA_DE,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Adamstra%C3%9Fe+3,+13595+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Adamstra%C3%9Fe+3,+13595+Berlin",
      showLegend: false,
    },
  },

  zehlendorf: {
    meta: {
      title: "Sanitätshaus Zehlendorf — Sanimotion",
      description:
        "Sanimotion Sanitätshaus Zehlendorf, Martin-Buber-Straße 12 in Berlin-Zehlendorf. Beratung, Anpassung und Hausbesuche im Berliner Süden.",
    },
    slug: "zehlendorf",
    city: "Zehlendorf",
    hero: {
      eyebrow: "Standort Zehlendorf",
      titleLead: "Ihr Sanitätshaus",
      titleTail: "in Zehlendorf",
      lede: "In unserem Sanimotion Sanitätshaus in der Martin-Buber-Straße 12 in Berlin-Zehlendorf erhalten Sie nicht nur eine große Auswahl an medizinischen Produkten, sondern wir versprechen Ihnen auch eine persönliche und einfühlsame Beratung. Ihr Wohlbefinden liegt uns am Herzen. Auf Wunsch beraten und vermessen wir Sie auch bei Ihnen zu Hause und liefern auch innerhalb Berlins. Was dürfen wir für Sie tun?",
      primaryCta: PRIMARY_CTA_DE,
      secondaryCta: { label: "Anrufen", href: "tel:+493023595760" },
    },
    about: ABOUT_DE,
    features: {
      eyebrow: "Warum Sanimotion Zehlendorf",
      title: "Was uns auszeichnet.",
      items: FEATURES_DE_DEFAULT,
    },
    products: {
      eyebrow: "Vor Ort verfügbar",
      title: "Unser Sortiment in Zehlendorf.",
      items: PRODUCTS_DE,
    },
    shop: SHOP_DE,
    partners: PARTNERS_DE,
    contact: {
      eyebrow: "Kontakt Zehlendorf",
      title: "Sprechen Sie mit uns.",
      lede: "Persönliche Beratung an der Martin-Buber-Straße — wir freuen uns auf Ihren Besuch oder Anruf.",
      address: {
        line1: "Martin-Buber-Str. 12",
        line2: "14163 Berlin-Zehlendorf",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: [
        "Mo. – Do. · 09:00 – 18:00 Uhr",
        "Fr. · 09:00 – 15:00 Uhr",
      ],
      primaryCta: PRIMARY_CTA_DE,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin",
      showLegend: false,
    },
  },

  "konigs-wusterhausen": {
    meta: {
      title: "Sanitätshaus Königs Wusterhausen — Sanimotion",
      description:
        "Sanimotion Sanitätshaus Königs Wusterhausen, Karl-Marx-Straße 3. Beratung, Anpassung und Hausbesuche im Süden Berlins und im Dahme-Spreewald.",
    },
    slug: "konigs-wusterhausen",
    city: "Königs Wusterhausen",
    hero: {
      eyebrow: "Standort Königs Wusterhausen",
      titleLead: "Ihr Sanitätshaus",
      titleTail: "in Königs Wusterhausen",
      lede: "In unserem Sanimotion Sanitätshaus in der Karl-Marx-Straße 3 in Königs Wusterhausen erhalten Sie nicht nur eine große Auswahl an medizinischen Produkten, sondern wir versprechen Ihnen auch eine persönliche und einfühlsame Beratung. Ihr Wohlbefinden liegt uns am Herzen. Auf Wunsch beraten und vermessen wir Sie auch bei Ihnen zu Hause und liefern auch innerhalb Berlins. Was dürfen wir für Sie tun?",
      primaryCta: PRIMARY_CTA_DE,
      secondaryCta: { label: "Anrufen", href: "tel:+493023595760" },
    },
    about: ABOUT_DE,
    features: {
      eyebrow: "Warum Sanimotion Königs Wusterhausen",
      title: "Was uns auszeichnet.",
      items: [
        { icon: "HandHeart", title: "Erstklassiger Service" },
        { icon: "MessageCircle", title: "Fachkundig & freundlich" },
        { icon: "Clock", title: "Schnelle & präzise Anfertigung" },
        { icon: "BadgeCheck", title: "Hochwertige Marken-Produkte" },
        { icon: "Home", title: "Hausbesuche in Berlin & Umgebung" },
        { icon: "Store", title: "Filialgeschäft & Online-Shop" },
      ],
    },
    products: {
      eyebrow: "Vor Ort verfügbar",
      title: "Unser Sortiment in Königs Wusterhausen.",
      items: PRODUCTS_DE,
    },
    shop: SHOP_DE,
    partners: PARTNERS_DE,
    contact: {
      eyebrow: "Kontakt Königs Wusterhausen",
      title: "Sprechen Sie mit uns.",
      lede: "Persönliche Beratung an der Karl-Marx-Straße — wir freuen uns auf Ihren Besuch oder Anruf.",
      address: {
        line1: "Karl-Marx-Straße 3",
        line2: "15711 Königs Wusterhausen",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: [
        "Mo. – Di. · 08:30 – 13:30 · 14:00 – 18:00 Uhr",
        "Mi. – Do. · 08:30 – 13:30 · 14:00 – 17:00 Uhr",
        "Fr. · 08:30 – 14:30 Uhr",
      ],
      primaryCta: PRIMARY_CTA_DE,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen",
      showLegend: false,
    },
  },
};

const en: Record<LocationKey, LocationPageContent> = {
  kreuzberg: {
    meta: {
      title: "Kreuzberg store — Sanimotion",
      description:
        "Sanimotion Kreuzberg, Blücherstraße 22. Personal consultation, custom-made products and our in-house workshop — home visits across Berlin.",
    },
    slug: "kreuzberg",
    city: "Kreuzberg",
    hero: {
      eyebrow: "Kreuzberg store",
      titleLead: "Your medical store",
      titleTail: "in Kreuzberg",
      lede: "At our Sanimotion store at Blücherstr. 22 in Berlin-Kreuzberg you receive medical products and orthopedic technology of every kind. We also promise you personal and attentive consultation. On request we come to you within Berlin for advice, measurement or delivery.",
      primaryCta: PRIMARY_CTA_EN,
      secondaryCta: { label: "Call", href: "tel:+493023595760" },
    },
    about: ABOUT_EN,
    features: {
      eyebrow: "Why Sanimotion Kreuzberg",
      title: "What sets us apart.",
      items: FEATURES_EN_DEFAULT,
    },
    products: {
      eyebrow: "Available in-store",
      title: "Our range in Kreuzberg.",
      items: PRODUCTS_EN,
    },
    craft: {
      eyebrow: "On-site workshop",
      title: "Custom-made by our own master craftspeople.",
      body: "In our Kreuzberg headquarters our masters make shoes, insoles, orthoses and prosthetics on site. Short paths, personal fitting, fast corrections — everything under one roof.",
      bullets: [
        "Bespoke shoes and shoe modifications",
        "Insoles made on site",
        "Orthoses, prosthetics and corset solutions",
        "Adjustments and repairs — quickly",
      ],
      cta: { label: "Discover the workshop", href: "/produkte" },
    },
    shop: SHOP_EN,
    partners: PARTNERS_EN,
    contact: {
      eyebrow: "Contact Kreuzberg",
      title: "Talk to us.",
      lede: "Personal consultation at Blücherstraße — by phone in German or Turkish, by email or directly in the store.",
      address: { line1: "Blücherstraße 22", line2: "10961 Berlin-Kreuzberg" },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: ["Mon – Thu · 8:00 – 17:00", "Fri · 8:00 – 15:00"],
      primaryCta: PRIMARY_CTA_EN,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Bl%C3%BCcherstra%C3%9Fe+22,+10961+Berlin",
      showLegend: false,
    },
  },

  spandau: {
    meta: {
      title: "Spandau store — Sanimotion",
      description:
        "Sanimotion Spandau, Adamstraße 3. Consultation, fitting and home visits in west Berlin.",
    },
    slug: "spandau",
    city: "Spandau",
    hero: {
      eyebrow: "Spandau store",
      titleLead: "Your medical store",
      titleTail: "in Spandau",
      lede: "At our Sanimotion store at Adamstraße 3 in Berlin-Spandau, alongside a wide selection of medical products you receive personal and attentive consultation.",
      primaryCta: PRIMARY_CTA_EN,
      secondaryCta: { label: "Call", href: "tel:+493023595760" },
    },
    about: ABOUT_EN,
    features: {
      eyebrow: "Why Sanimotion Spandau",
      title: "What sets us apart.",
      items: FEATURES_EN_DEFAULT,
    },
    products: {
      eyebrow: "Available in-store",
      title: "Our range in Spandau.",
      items: PRODUCTS_EN,
    },
    shop: SHOP_EN,
    partners: PARTNERS_EN,
    contact: {
      eyebrow: "Contact Spandau",
      title: "Talk to us.",
      lede: "Personal consultation in Spandau's old town — drop in or give us a call.",
      address: { line1: "Adamstraße 3", line2: "13595 Berlin-Spandau" },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: ["Mon – Thu · 9:00 – 16:00", "Fri · 9:00 – 15:00"],
      primaryCta: PRIMARY_CTA_EN,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Adamstra%C3%9Fe+3,+13595+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Adamstra%C3%9Fe+3,+13595+Berlin",
      showLegend: false,
    },
  },

  zehlendorf: {
    meta: {
      title: "Zehlendorf store — Sanimotion",
      description:
        "Sanimotion Zehlendorf, Martin-Buber-Straße 12. Consultation, fitting and home visits in south Berlin.",
    },
    slug: "zehlendorf",
    city: "Zehlendorf",
    hero: {
      eyebrow: "Zehlendorf store",
      titleLead: "Your medical store",
      titleTail: "in Zehlendorf",
      lede: "At our Sanimotion store at Martin-Buber-Straße 12 in Berlin-Zehlendorf you find not just a wide selection of medical products — we also promise you personal and attentive consultation. Your wellbeing is close to our heart. On request we advise and measure you at home and deliver within Berlin. What can we do for you?",
      primaryCta: PRIMARY_CTA_EN,
      secondaryCta: { label: "Call", href: "tel:+493023595760" },
    },
    about: ABOUT_EN,
    features: {
      eyebrow: "Why Sanimotion Zehlendorf",
      title: "What sets us apart.",
      items: FEATURES_EN_DEFAULT,
    },
    products: {
      eyebrow: "Available in-store",
      title: "Our range in Zehlendorf.",
      items: PRODUCTS_EN,
    },
    shop: SHOP_EN,
    partners: PARTNERS_EN,
    contact: {
      eyebrow: "Contact Zehlendorf",
      title: "Talk to us.",
      lede: "Personal consultation on Martin-Buber-Straße — drop in or give us a call.",
      address: {
        line1: "Martin-Buber-Str. 12",
        line2: "14163 Berlin-Zehlendorf",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: ["Mon – Thu · 9:00 – 18:00", "Fri · 9:00 – 15:00"],
      primaryCta: PRIMARY_CTA_EN,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Martin-Buber-Stra%C3%9Fe+12,+14163+Berlin",
      showLegend: false,
    },
  },

  "konigs-wusterhausen": {
    meta: {
      title: "Königs Wusterhausen store — Sanimotion",
      description:
        "Sanimotion Königs Wusterhausen, Karl-Marx-Straße 3. Consultation, fitting and home visits in south Berlin and Dahme-Spreewald.",
    },
    slug: "konigs-wusterhausen",
    city: "Königs Wusterhausen",
    hero: {
      eyebrow: "Königs Wusterhausen store",
      titleLead: "Your medical store",
      titleTail: "in Königs Wusterhausen",
      lede: "At our Sanimotion store at Karl-Marx-Straße 3 in Königs Wusterhausen you find not just a wide selection of medical products — we also promise you personal and attentive consultation. Your wellbeing is close to our heart. On request we advise and measure you at home and deliver within Berlin. What can we do for you?",
      primaryCta: PRIMARY_CTA_EN,
      secondaryCta: { label: "Call", href: "tel:+493023595760" },
    },
    about: ABOUT_EN,
    features: {
      eyebrow: "Why Sanimotion Königs Wusterhausen",
      title: "What sets us apart.",
      items: [
        { icon: "HandHeart", title: "First-class service" },
        { icon: "MessageCircle", title: "Expert & friendly" },
        { icon: "Clock", title: "Fast & precise manufacturing" },
        { icon: "BadgeCheck", title: "Premium brand products" },
        { icon: "Home", title: "Home visits in Berlin & surroundings" },
        { icon: "Store", title: "Stores & online shop" },
      ],
    },
    products: {
      eyebrow: "Available in-store",
      title: "Our range in Königs Wusterhausen.",
      items: PRODUCTS_EN,
    },
    shop: SHOP_EN,
    partners: PARTNERS_EN,
    contact: {
      eyebrow: "Contact Königs Wusterhausen",
      title: "Talk to us.",
      lede: "Personal consultation on Karl-Marx-Straße — drop in or give us a call.",
      address: {
        line1: "Karl-Marx-Straße 3",
        line2: "15711 Königs Wusterhausen",
      },
      phone: { label: "030 235 957 600", href: "tel:+493023595760" },
      email: { label: "info@sanimotion.com", href: "mailto:info@sanimotion.com" },
      hours: [
        "Mon – Tue · 8:30 – 13:30 · 14:00 – 18:00",
        "Wed – Thu · 8:30 – 13:30 · 14:00 – 17:00",
        "Fri · 8:30 – 14:30",
      ],
      primaryCta: PRIMARY_CTA_EN,
      mapEmbedUrl:
        "https://www.google.com/maps?q=Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen&t=&z=15&ie=UTF8&iwloc=&output=embed",
      mapHref:
        "https://www.google.com/maps/search/Karl-Marx-Stra%C3%9Fe+3,+15711+K%C3%B6nigs+Wusterhausen",
      showLegend: false,
    },
  },
};

const pages: Record<Locale, Record<LocationKey, LocationPageContent>> = {
  de: {
    kreuzberg: locationPageSchema.parse(de.kreuzberg),
    spandau: locationPageSchema.parse(de.spandau),
    zehlendorf: locationPageSchema.parse(de.zehlendorf),
    "konigs-wusterhausen": locationPageSchema.parse(de["konigs-wusterhausen"]),
  },
  en: {
    kreuzberg: locationPageSchema.parse(en.kreuzberg),
    spandau: locationPageSchema.parse(en.spandau),
    zehlendorf: locationPageSchema.parse(en.zehlendorf),
    "konigs-wusterhausen": locationPageSchema.parse(en["konigs-wusterhausen"]),
  },
};

export const getLocationContent = (
  locale: Locale,
  slug: LocationKey,
): LocationPageContent => pages[locale][slug];

export type { LocationKey };

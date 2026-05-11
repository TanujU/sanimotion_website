/*
 * Site-wide content — brand, navigation, primary CTA, footer.
 *
 * Two locales: DE (default, sourced from sanimotion.com) and EN.
 * Components consume via getSite(locale) so chrome stays in sync with
 * the user's chosen language.
 *
 * Voice: German, formal "Sie". English, equivalent professional register.
 */
import { siteSchema, type SiteContent } from "~/schemas/content";
import type { Locale } from "~/i18n/locale";

const de: SiteContent = {
  brand: {
    name: "Sanimotion",
    tagline: "Alles für Ihre Gesundheit.",
  },
  nav: [
    {
      label: "Standorte",
      href: "/#standorte",
      children: [
        {
          label: "Kreuzberg",
          href: "/sanitatshaus-kreuzberg",
          description: "Blücherstraße · Zentrale & Werkstatt",
        },
        {
          label: "Spandau",
          href: "/sanitatshaus-spandau",
          description: "Adamstraße · Altstadt Spandau",
        },
        {
          label: "Zehlendorf",
          href: "/sanitatshaus-zehlendorf",
          description: "Martin-Buber-Straße",
        },
        {
          label: "Königs Wusterhausen",
          href: "/sanitatshaus-konigs-wusterhausen",
          description: "Karl-Marx-Straße · Brandenburg",
        },
      ],
    },
    {
      label: "Produkte",
      href: "/#produkte",
      children: [
        {
          label: "Orthopädische Schuhe",
          href: "/orthopaedische-schuhe",
          icon: "Hammer",
          children: [
            {
              label: "Orthopädische Sneaker",
              href: "/orthopaedische-schuhe-berlin/sneaker",
            },
          ],
        },
        {
          label: "Orthopädische Einlagen",
          href: "/orthopaedische-einlagen",
          icon: "Footprints",
        },
        {
          label: "Orthesen",
          href: "/orthesen",
          icon: "Bone",
          children: [
            { label: "Fuß-Orthese", href: "/orthesen/fuss-orthese" },
            {
              label: "Sprunggelenk-Orthese",
              href: "/orthesen/sprunggelenk-orthese",
            },
            { label: "Knie-Orthese", href: "/orthesen/knie-orthese" },
            { label: "Rücken-Orthese", href: "/orthesen/ruecken-orthese" },
            { label: "Schulter-Orthese", href: "/orthesen/schulter-orthese" },
            {
              label: "Handgelenk-Orthese",
              href: "/orthesen/handgelenk-orthese",
            },
            { label: "Daumen-Orthese", href: "/orthesen/daumen-orthese" },
          ],
        },
        {
          label: "Prothesen",
          href: "/prothesen",
          icon: "PersonStanding",
          children: [
            { label: "Finger-Prothese", href: "/prothesen/finger-prothese" },
            { label: "Armprothese", href: "/prothesen/armprothese" },
            { label: "Handprothese", href: "/prothesen/handprothese" },
            { label: "Fuß-Prothese", href: "/prothesen/fuss-prothese" },
            {
              label: "Unterschenkel-Prothese",
              href: "/prothesen/unterschenkel-prothese",
            },
            { label: "Beinprothese", href: "/prothesen/beinprothese" },
            { label: "Brust-Prothese", href: "/prothesen/brust-prothese" },
          ],
        },
        {
          label: "Kompressionsstrümpfe",
          href: "/kompressionsstruempfe",
          icon: "Activity",
        },
        {
          label: "Medizinische Bandagen",
          href: "/medizinische-bandagen",
          icon: "Bandage",
        },
        {
          label: "Reha-Technik",
          href: "/reha-technik",
          icon: "Accessibility",
        },
        {
          label: "Skoliose-Korsett",
          href: "/skoliose-korsett",
          icon: "Stethoscope",
        },
      ],
    },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Jobs", href: "/jobs" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  primaryCta: {
    label: "Termin buchen",
    href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    ariaLabel: "Termin in einem Sanimotion-Sanitätshaus buchen",
  },
  secondaryCta: {
    label: "Rezept einlösen",
    href: "/kontakt#rezept",
    ariaLabel: "Rezept online einlösen",
  },
  footer: {
    columns: [
      {
        title: "Menü",
        links: [
          { label: "Standorte", href: "/#standorte" },
          { label: "Produkte", href: "/#produkte" },
          { label: "Über uns", href: "/ueber-uns" },
          { label: "FAQ", href: "/faq" },
          { label: "Jobs", href: "/jobs" },
          { label: "Kontakt", href: "/kontakt" },
          { label: "Onlineshop", href: "/onlineshop" },
        ],
      },
      {
        title: "Produkte",
        links: [
          { label: "Orthopädische Schuhe", href: "/orthopaedische-schuhe" },
          { label: "Orthopädische Einlagen", href: "/orthopaedische-einlagen" },
          { label: "Orthesen", href: "/orthesen" },
          { label: "Prothesen", href: "/prothesen" },
          { label: "Kompressionsstrümpfe", href: "/kompressionsstruempfe" },
          { label: "Medizinische Bandagen", href: "/medizinische-bandagen" },
          { label: "Reha-Technik", href: "/reha-technik" },
          { label: "Skoliose-Korsett", href: "/skoliose-korsett" },
        ],
      },
      {
        title: "Standorte",
        links: [
          { label: "Kreuzberg", href: "/sanitatshaus-kreuzberg" },
          { label: "Spandau", href: "/sanitatshaus-spandau" },
          { label: "Zehlendorf", href: "/sanitatshaus-zehlendorf" },
          {
            label: "Königs Wusterhausen",
            href: "/sanitatshaus-konigs-wusterhausen",
          },
          { label: "Alle Standorte", href: "/standorte" },
        ],
      },
      {
        title: "Rechtliches",
        links: [
          { label: "Impressum", href: "/impressum" },
          { label: "Datenschutz", href: "/datenschutz" },
          { label: "AGB", href: "/agb" },
          {
            label: "Barrierefreiheitserklärung",
            href: "/barrierefreiheitserklaerung",
          },
        ],
      },
    ],
    legal: "© 2026 Sanimotion · Sanitätshaus Berlin",
  },
};

const en: SiteContent = {
  brand: {
    name: "Sanimotion",
    tagline: "Everything for your health.",
  },
  nav: [
    {
      label: "Locations",
      href: "/#standorte",
      children: [
        {
          label: "Kreuzberg",
          href: "/sanitatshaus-kreuzberg",
          description: "Blücherstraße · HQ & workshop",
        },
        {
          label: "Spandau",
          href: "/sanitatshaus-spandau",
          description: "Adamstraße · Altstadt Spandau",
        },
        {
          label: "Zehlendorf",
          href: "/sanitatshaus-zehlendorf",
          description: "Martin-Buber-Straße",
        },
        {
          label: "Königs Wusterhausen",
          href: "/sanitatshaus-konigs-wusterhausen",
          description: "Karl-Marx-Straße · Brandenburg",
        },
      ],
    },
    {
      label: "Products",
      href: "/#produkte",
      children: [
        {
          label: "Orthopedic shoes",
          href: "/orthopaedische-schuhe",
          icon: "Hammer",
          children: [
            {
              label: "Orthopedic sneakers",
              href: "/orthopaedische-schuhe-berlin/sneaker",
            },
          ],
        },
        {
          label: "Orthopedic insoles",
          href: "/orthopaedische-einlagen",
          icon: "Footprints",
        },
        {
          label: "Orthoses",
          href: "/orthesen",
          icon: "Bone",
          children: [
            { label: "Foot orthosis", href: "/orthesen/fuss-orthese" },
            {
              label: "Ankle orthosis",
              href: "/orthesen/sprunggelenk-orthese",
            },
            { label: "Knee brace", href: "/orthesen/knie-orthese" },
            { label: "Back brace", href: "/orthesen/ruecken-orthese" },
            { label: "Shoulder orthosis", href: "/orthesen/schulter-orthese" },
            {
              label: "Wrist orthosis",
              href: "/orthesen/handgelenk-orthese",
            },
            { label: "Thumb orthosis", href: "/orthesen/daumen-orthese" },
          ],
        },
        {
          label: "Prosthetics",
          href: "/prothesen",
          icon: "PersonStanding",
          children: [
            { label: "Finger prosthesis", href: "/prothesen/finger-prothese" },
            { label: "Arm prosthesis", href: "/prothesen/armprothese" },
            { label: "Hand prosthesis", href: "/prothesen/handprothese" },
            { label: "Foot prosthesis", href: "/prothesen/fuss-prothese" },
            {
              label: "Lower-leg prosthesis",
              href: "/prothesen/unterschenkel-prothese",
            },
            { label: "Leg prosthesis", href: "/prothesen/beinprothese" },
            { label: "Breast prosthesis", href: "/prothesen/brust-prothese" },
          ],
        },
        {
          label: "Compression stockings",
          href: "/kompressionsstruempfe",
          icon: "Activity",
        },
        {
          label: "Medical bandages",
          href: "/medizinische-bandagen",
          icon: "Bandage",
        },
        {
          label: "Rehab equipment",
          href: "/reha-technik",
          icon: "Accessibility",
        },
        {
          label: "Scoliosis brace",
          href: "/skoliose-korsett",
          icon: "Stethoscope",
        },
      ],
    },
    { label: "About", href: "/ueber-uns" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/jobs" },
    { label: "Contact", href: "/kontakt" },
  ],
  primaryCta: {
    label: "Book appointment",
    href: "https://www.doctolib.de/sanitaetshaus/berlin/sanimotion-sanitaetshaeuser-berlin/booking?utm_campaign=website-button&utm_source=sanimotion-sanitaetshaeuser-berlin-website-button&utm_medium=referral&utm_content=custom&utm_term=sanimotion-sanitaetshaeuser-berlin",
    ariaLabel: "Book an appointment at a Sanimotion store",
  },
  secondaryCta: {
    label: "Submit prescription",
    href: "/kontakt#rezept",
    ariaLabel: "Submit a prescription online",
  },
  footer: {
    columns: [
      {
        title: "Menu",
        links: [
          { label: "Locations", href: "/#standorte" },
          { label: "Products", href: "/#produkte" },
          { label: "About", href: "/ueber-uns" },
          { label: "FAQ", href: "/faq" },
          { label: "Careers", href: "/jobs" },
          { label: "Contact", href: "/kontakt" },
          { label: "Online shop", href: "/onlineshop" },
        ],
      },
      {
        title: "Products",
        links: [
          { label: "Orthopedic shoes", href: "/orthopaedische-schuhe" },
          { label: "Orthopedic insoles", href: "/orthopaedische-einlagen" },
          { label: "Orthoses", href: "/orthesen" },
          { label: "Prosthetics", href: "/prothesen" },
          { label: "Compression stockings", href: "/kompressionsstruempfe" },
          { label: "Medical bandages", href: "/medizinische-bandagen" },
          { label: "Rehab equipment", href: "/reha-technik" },
          { label: "Scoliosis brace", href: "/skoliose-korsett" },
        ],
      },
      {
        title: "Locations",
        links: [
          { label: "Kreuzberg", href: "/sanitatshaus-kreuzberg" },
          { label: "Spandau", href: "/sanitatshaus-spandau" },
          { label: "Zehlendorf", href: "/sanitatshaus-zehlendorf" },
          {
            label: "Königs Wusterhausen",
            href: "/sanitatshaus-konigs-wusterhausen",
          },
          { label: "All locations", href: "/standorte" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Imprint", href: "/impressum" },
          { label: "Privacy", href: "/datenschutz" },
          { label: "Terms & conditions", href: "/agb" },
          {
            label: "Accessibility statement",
            href: "/barrierefreiheitserklaerung",
          },
        ],
      },
    ],
    legal: "© 2026 Sanimotion · Berlin medical supply",
  },
};

const sites: Record<Locale, SiteContent> = {
  de: siteSchema.parse(de),
  en: siteSchema.parse(en),
};

export const getSite = (locale: Locale): SiteContent => sites[locale];

/*
 * Backwards-compat default export — still used by a few non-locale-aware
 * spots (e.g. error boundary). Always returns DE.
 */
export const site = sites.de;

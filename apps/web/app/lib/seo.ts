const BASE_URL = "https://www.sanimotion.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`;

type MetaOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
};

export function buildMeta({ title, description, path, ogImage, noindex }: MetaOptions) {
  const url = `${BASE_URL}${path}`;
  const image = ogImage ?? OG_IMAGE;

  return [
    { title },
    { name: "description", content: description },
    ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
    { tagName: "link", rel: "canonical", href: url },
    { tagName: "link", rel: "alternate", hreflang: "de", href: url },
    { tagName: "link", rel: "alternate", hreflang: "de-DE", href: url },
    { tagName: "link", rel: "alternate", hreflang: "x-default", href: url },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:site_name", content: "Sanimotion" },
    { property: "og:locale", content: "de_DE" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

// --- JSON-LD schema builders ---

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Sanimotion",
    url: BASE_URL,
    logo: `${BASE_URL}/og-image.png`,
    telephone: "+493023595760",
    email: "info@sanimotion.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blücherstraße 22",
      postalCode: "10961",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    sameAs: ["https://sanimotion.com"],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sanimotion",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function buildMedicalDeviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.path}`,
    manufacturer: {
      "@type": "Organization",
      name: "Sanimotion",
      url: BASE_URL,
    },
    availableAtOrFrom: {
      "@type": "MedicalBusiness",
      name: "Sanimotion",
      url: BASE_URL,
    },
  };
}

type LocationSchema = {
  name: string;
  path: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  openingHours: string[];
};

export function buildLocalBusinessSchema(loc: LocationSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: loc.name,
    url: `${BASE_URL}${loc.path}`,
    telephone: "+493023595760",
    email: "info@sanimotion.com",
    image: OG_IMAGE,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.streetAddress,
      postalCode: loc.postalCode,
      addressLocality: loc.addressLocality,
      addressCountry: "DE",
    },
    openingHours: loc.openingHours,
    parentOrganization: { "@type": "Organization", name: "Sanimotion" },
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"),
      },
    })),
  };
}

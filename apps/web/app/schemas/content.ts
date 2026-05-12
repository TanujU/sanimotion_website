/*
 * Zod schemas for typed content modules.
 *
 * What: Defines and validates the shape of every content module under
 * app/content/**. Each module exports an object that is parsed against
 * the relevant schema at module load — invalid content fails the build.
 *
 * Why: Content is plain TS today, a CMS later. A schema layer makes the
 * swap mechanical (the consumer signature stays identical) and prevents
 * malformed content from reaching the page.
 */
import { z } from "zod";

// Reusable atoms ------------------------------------------------------------

export const linkSchema = z.object({
  label: z.string(),
  href: z.string(), // relative or absolute; SmartLink decides target
});

export const ctaSchema = linkSchema.extend({
  // Optional accessible label for buttons whose visible text is too terse.
  ariaLabel: z.string().optional(),
});

// Site-wide content (nav, footer) ------------------------------------------

// Recursive: a NavChild can itself contain children, used for two-level
// dropdowns (e.g. Produkte → Orthesen → Fuß-Orthese).
export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavChild[];
};

export const navChildSchema: z.ZodType<NavChild> = z.lazy(() =>
  z.object({
    label: z.string(),
    href: z.string(),
    // Optional one-line subtitle shown beneath the label in dropdown panels
    // (e.g. neighborhood for a location, or short description for a category).
    description: z.string().optional(),
    // Optional Lucide icon name — rendered to the left of the label.
    icon: z.string().optional(),
    // Optional sub-children — when present the row renders a flyout submenu.
    children: z.array(navChildSchema).optional(),
  }),
);

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  // When present, the item renders as a dropdown trigger instead of a
  // simple link. Top-level href still navigates on direct click / Enter.
  children: z.array(navChildSchema).optional(),
});
export type NavItem = z.infer<typeof navItemSchema>;

export const siteSchema = z.object({
  brand: z.object({
    name: z.string(),
    tagline: z.string(),
  }),
  nav: z.array(navItemSchema),
  primaryCta: ctaSchema,
  // Optional secondary CTA in the navbar — useful when there are two equally
  // important next steps (e.g. "Termin buchen" + "Rezept einlösen").
  secondaryCta: ctaSchema.optional(),
  footer: z.object({
    columns: z.array(
      z.object({
        title: z.string(),
        links: z.array(linkSchema),
      }),
    ),
    legal: z.string(),
  }),
});
export type SiteContent = z.infer<typeof siteSchema>;

// Section content schemas --------------------------------------------------

export const heroSchema = z.object({
  eyebrow: z.string(),
  // Two-part headline; the second part is rendered in muted ink.
  titleLead: z.string(),
  titleTail: z.string(),
  lede: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
});
export type HeroContent = z.infer<typeof heroSchema>;

// Generic icon-card grid — reused by Produkte (home), Leistungen, etc.
export const iconCardSchema = z.object({
  // Lucide icon name as string — looked up at render time.
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  // Optional deep-link to a detail page or anchor.
  href: z.string().optional(),
});

export const iconGridSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  items: z.array(iconCardSchema).min(3).max(8),
});
export type IconGridContent = z.infer<typeof iconGridSchema>;

// AboutSnippet — short company description block with an optional headline
// metric ("30+ Jahre Erfahrung") and call to learn more.
export const aboutSnippetSchema = z.object({
  eyebrow: z.string(),
  tagline: z.string(),
  body: z.string(),
  metricValue: z.string().optional(),
  metricLabel: z.string().optional(),
  cta: ctaSchema.optional(),
});
export type AboutSnippetContent = z.infer<typeof aboutSnippetSchema>;

// LocationsTeaser — small grid of city names with a CTA into /standorte.
export const locationsTeaserSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  cities: z.array(z.string()).min(1),
  cta: ctaSchema,
});
export type LocationsTeaserContent = z.infer<typeof locationsTeaserSchema>;

// LogoWall — partner / brand grid (rendered as text placeholders for now).
export const logoWallSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  items: z.array(z.string()).min(4),
});
export type LogoWallContent = z.infer<typeof logoWallSchema>;

// FeatureCards — 6-up "why us" grid (icon + short title only). Visually
// distinct from IconGrid: cards on a tinted band, no descriptions, larger
// icons. Mirrors the value-prop strip on sanimotion.com.
export const featureCardSchema = z.object({
  icon: z.string(),
  title: z.string(),
});
export const featuresSchema = z.object({
  eyebrow: z.string(),
  title: z.string().optional(),
  items: z.array(featureCardSchema).min(3).max(8),
});
export type FeaturesContent = z.infer<typeof featuresSchema>;

// KontaktTermin — contact block with phone / email / hours / CTAs and
// an embedded map. Used at the bottom of the home page.
export const contactSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  lede: z.string(),
  // Optional postal address (used on per-location pages so the contact
  // block can show the specific store's address). Home page omits it.
  address: z
    .object({ line1: z.string(), line2: z.string() })
    .optional(),
  phone: z.object({ label: z.string(), href: z.string() }),
  email: z.object({ label: z.string(), href: z.string() }),
  hours: z.union([z.string(), z.array(z.string()).min(1)]),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
  // OpenStreetMap embed URL — chosen over Google Maps for GDPR cleanliness.
  mapEmbedUrl: z.string(),
  mapHref: z.string(),
  // Optional override for the legend rendered below the map. The home
  // page lists all six pins; per-location pages typically hide it.
  showLegend: z.boolean().optional(),
});
export type ContactContent = z.infer<typeof contactSchema>;

// CraftBand — in-house workshop call-out (Maßanfertigung).
export const craftSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  bullets: z.array(z.string()).min(3).max(6),
  cta: ctaSchema,
});
export type CraftContent = z.infer<typeof craftSchema>;

// OnlineShopTeaser — "750+ Produkte" with sub-category tiles.
export const shopTeaserSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  lede: z.string(),
  cta: ctaSchema,
  categories: z
    .array(
      z.object({
        slug: z.string(),
        label: z.string(),
        href: z.string(),
      }),
    )
    .min(4)
    .max(8),
});
export type ShopTeaserContent = z.infer<typeof shopTeaserSchema>;

// PartnerStores — Meisterschuh Berlin (or any retail-partner) band.
export const partnerStoresSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  body: z.string(),
  stores: z
    .array(
      z.object({
        slug: z.string(),
        name: z.string(),
        address: z.string(),
        city: z.string(),
      }),
    )
    .min(1)
    .max(4),
});
export type PartnerStoresContent = z.infer<typeof partnerStoresSchema>;

// Aggregate page schema ----------------------------------------------------

export const homePageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: heroSchema,
  products: iconGridSchema,
  about: aboutSnippetSchema,
  features: featuresSchema,
  craft: craftSchema,
  shop: shopTeaserSchema,
  partnerStores: partnerStoresSchema,
  partners: logoWallSchema,
  locations: locationsTeaserSchema,
  contact: contactSchema,
});
export type HomePageContent = z.infer<typeof homePageSchema>;

// Per-location page (Sanitätshaus Kreuzberg / Spandau / …). Mirrors the
// home composition but contact + hero are location-specific. CraftBand is
// optional because only Kreuzberg houses the workshop.
export const locationPageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  // Slug — used to look up the storefront photo for the hero.
  slug: z.string(),
  city: z.string(),
  hero: heroSchema,
  about: aboutSnippetSchema,
  features: featuresSchema,
  products: iconGridSchema,
  craft: craftSchema.optional(),
  shop: shopTeaserSchema,
  partners: logoWallSchema,
  contact: contactSchema,
});
export type LocationPageContent = z.infer<typeof locationPageSchema>;

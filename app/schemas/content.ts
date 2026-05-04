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
export type LinkContent = z.infer<typeof linkSchema>;

export const ctaSchema = linkSchema.extend({
  // Optional accessible label for buttons whose visible text is too terse.
  ariaLabel: z.string().optional(),
});
export type CtaContent = z.infer<typeof ctaSchema>;

// Site-wide content (nav, footer) ------------------------------------------

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

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

// ServicePair — two highlighted services side-by-side (e.g. Hausbesuch +
// Rezept-Upload on Sanimotion's homepage).
export const servicePairItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
  cta: ctaSchema,
});
export const servicePairSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  items: z.array(servicePairItemSchema).length(2),
});
export type ServicePairContent = z.infer<typeof servicePairSchema>;

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
  phone: z.object({ label: z.string(), href: z.string() }),
  email: z.object({ label: z.string(), href: z.string() }),
  hours: z.string(),
  primaryCta: ctaSchema,
  secondaryCta: ctaSchema.optional(),
  // OpenStreetMap embed URL — chosen over Google Maps for GDPR cleanliness.
  mapEmbedUrl: z.string(),
  mapHref: z.string(),
});
export type ContactContent = z.infer<typeof contactSchema>;

// CtaBand — closing CTA on inverse tone.
export const ctaBandSchema = z.object({
  title: z.string(),
  lede: z.string(),
  cta: ctaSchema,
});
export type CtaBandContent = z.infer<typeof ctaBandSchema>;

// Reserved schemas — kept available for future pages even though the home
// page no longer uses them. Removing them would force a re-add later.
export const processStepSchema = z.object({
  number: z.string(),
  title: z.string(),
  description: z.string(),
});
export const processStepsSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  steps: z.array(processStepSchema).length(3),
});
export type ProcessStepsContent = z.infer<typeof processStepsSchema>;

export const testimonialSchema = z.object({
  quote: z.string(),
  author: z.string(),
  role: z.string(),
});
export type TestimonialContent = z.infer<typeof testimonialSchema>;

export const caseStudyFeaturedSchema = z.object({
  eyebrow: z.string(),
  metricValue: z.string(),
  metricLabel: z.string(),
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  cta: ctaSchema,
});
export type CaseStudyFeaturedContent = z.infer<typeof caseStudyFeaturedSchema>;

// Aggregate page schema ----------------------------------------------------

export const homePageSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  hero: heroSchema,
  products: iconGridSchema,
  services: servicePairSchema,
  about: aboutSnippetSchema,
  features: featuresSchema,
  partners: logoWallSchema,
  locations: locationsTeaserSchema,
  contact: contactSchema,
});
export type HomePageContent = z.infer<typeof homePageSchema>;

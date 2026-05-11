/*
 * LocationPage — shared composition for the four per-store routes.
 *
 * Mirrors the home page's section order but with location-specific copy.
 * The storefront photo is matched by slug (same convention as
 * LocationsTeaser) so each route file stays a thin "render with this
 * slug" shim.
 */
import { HeroPrimary } from "~/components/sections/HeroPrimary";
import { AboutSnippet } from "~/components/sections/AboutSnippet";
import { FeatureCards } from "~/components/sections/FeatureCards";
import { IconGrid } from "~/components/sections/IconGrid";
import { CraftBand } from "~/components/sections/CraftBand";
import { OnlineShopTeaser } from "~/components/sections/OnlineShopTeaser";
import type { LocationPageContent } from "~/schemas/content";

// Per-location hero photos — distinct from the LocationsTeaser thumbnails
// (which live under ~/images/locations/) so the hero can use a larger,
// landscape-oriented storefront shot without affecting the home grid.
import kreuzberg from "~/images/locations/headers/kreuzberg.jpg";
import spandau from "~/images/locations/headers/spandau.jpeg";
import zehlendorf from "~/images/locations/headers/zehlendorf.jpeg";
import koenigsWusterhausen from "~/images/locations/headers/koenigs-wusterhausen.jpg";

const STOREFRONT: Record<string, string> = {
  kreuzberg,
  spandau,
  zehlendorf,
  "konigs-wusterhausen": koenigsWusterhausen,
};

// Storefront photo captions — kept identical to sanimotion.com so the
// alt text matches the published copy verbatim.
const STOREFRONT_ALT: Record<string, string> = {
  kreuzberg:
    "Eingang Sanitätshaus Sanimotion in der Blücherstraße in Berlin-Kreuzberg",
  spandau:
    "Eingang Sanimotion Sanitätshaus in der Adamstraße 3 in Berlin-Spandau",
  zehlendorf:
    "Eingang Sanimotion Sanitätshaus in der Martin-Buber-Straße 12 in Berlin-Zehlendorf",
  "konigs-wusterhausen":
    "Eingang Sanimotion Sanitätshaus in der Karl-Marx-Straße 3 in Königs Wusterhausen",
};

type LocationPageProps = {
  content: LocationPageContent;
};

export function LocationPage({ content }: LocationPageProps) {
  const heroImage = STOREFRONT[content.slug];
  const heroAlt = STOREFRONT_ALT[content.slug];
  return (
    <>
      <HeroPrimary
        content={content.hero}
        imageUrl={heroImage}
        imageAlt={heroAlt}
      />
      <AboutSnippet content={content.about} />
      <FeatureCards content={content.features} />
      <IconGrid content={content.products} />
      {content.craft && <CraftBand content={content.craft} />}
      <OnlineShopTeaser content={content.shop} />
      {/* Brand-partner wall and contact + map render globally in root.tsx
          so every route gets them. We deliberately skip them here to avoid
          duplicates. */}
    </>
  );
}

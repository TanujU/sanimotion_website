/*
 * Home route (Startseite) — composition only.
 *
 * What: Loads typed home content (validated by Zod at module load) and
 * composes the section components in the order that mirrors the real
 * sanimotion.com homepage.
 *
 * Order rationale:
 *   1. HeroPrimary       — brand statement + dual CTAs (Termin + Rezept)
 *   2. IconGrid          — six product categories
 *   3. ServicePair       — Hausbesuch + Rezept-Upload (the homepage hooks)
 *   4. AboutSnippet      — "Alles für Ihre Gesundheit" + 30+ Jahre
 *   5. FeatureCards      — six "why us" trust cards (matches sanimotion.com)
 *   6. LogoWall          — Markenpartner (Bauerfeind, Juzo, ...)
 *   7. LocationsTeaser   — four cities with a CTA into /standorte
 *   8. KontaktTermin     — phone, email, hours, CTAs + OpenStreetMap embed
 */
import type { Route } from "./+types/home";
import { homeContent } from "~/content/pages/home";
import { HeroPrimary } from "~/components/sections/HeroPrimary";
import { IconGrid } from "~/components/sections/IconGrid";
import { ServicePair } from "~/components/sections/ServicePair";
import { AboutSnippet } from "~/components/sections/AboutSnippet";
import { FeatureCards } from "~/components/sections/FeatureCards";
import { LogoWall } from "~/components/sections/LogoWall";
import { LocationsTeaser } from "~/components/sections/LocationsTeaser";
import { KontaktTermin } from "~/components/sections/KontaktTermin";

export function meta(_: Route.MetaArgs) {
  return [
    { title: homeContent.meta.title },
    { name: "description", content: homeContent.meta.description },
    { name: "language", content: "de" },
  ];
}

/*
 * RR7 loader — returns the validated typed content. SSR'd, so no client
 * fetch waterfall. When a CMS replaces /content modules, only this
 * function changes.
 */
export async function loader() {
  return { content: homeContent };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { content } = loaderData;
  return (
    <>
      <HeroPrimary content={content.hero} />
      <IconGrid content={content.products} id="produkte" />
      <ServicePair content={content.services} />
      <AboutSnippet content={content.about} />
      <FeatureCards content={content.features} />
      <LogoWall content={content.partners} />
      <LocationsTeaser content={content.locations} />
      <KontaktTermin content={content.contact} />
    </>
  );
}

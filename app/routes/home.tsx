/*
 * Home route (Startseite) — composition only.
 *
 * Loads typed home content for the current locale and composes the
 * section components in an Apple-flow order that matches the live
 * sanimotion.com inventory.
 *
 * Order:
 *   1. HeroPrimary       — brand statement + dual CTAs
 *   2. AboutSnippet      — "Alles für Ihre Gesundheit" + 30+ Jahre
 *   3. FeatureCards      — six "why us" trust cards
 *   4. IconGrid          — six product categories with photos
 *   5. CraftBand         — Maßanfertigung / in-house workshop
 *   6. OnlineShopTeaser  — 750+ Produkte, six sub-category tiles
 *   7. LocationsTeaser   — four Sanimotion stores
 *   8. PartnerStores     — Meisterschuh Berlin (partner)
 *   9. LogoWall          — Markenpartner brands (Bauerfeind, Juzo, …)
 *  10. KontaktTermin     — phone, email, hours, CTAs + Google Map
 */
"use client";
import { useEffect } from "react";
import { useLocation } from "react-router";
import type { Route } from "./+types/home";
import { getHomeContent } from "~/content/pages/home";
import { useLocale } from "~/i18n/locale";
import { HeroPrimary } from "~/components/sections/HeroPrimary";
import { IconGrid } from "~/components/sections/IconGrid";
import { AboutSnippet } from "~/components/sections/AboutSnippet";
import { FeatureCards } from "~/components/sections/FeatureCards";
import { CraftBand } from "~/components/sections/CraftBand";
import { OnlineShopTeaser } from "~/components/sections/OnlineShopTeaser";
import { LocationsTeaser } from "~/components/sections/LocationsTeaser";
import { PartnerStores } from "~/components/sections/PartnerStores";

export function meta(_: Route.MetaArgs) {
  // Meta runs on the server before locale is known; default to DE.
  const content = getHomeContent("de");
  return [
    { title: content.meta.title },
    { name: "description", content: content.meta.description },
  ];
}

export default function Home() {
  const locale = useLocale();
  const content = getHomeContent(locale);
  const location = useLocation();

  // Cross-page hash links (e.g. /#standorte from the navbar) need an
  // explicit scroll: ScrollRestoration handles fresh navigations, but a
  // hash-only update while already on "/" doesn't trigger one. Re-running
  // on hash change covers both cases. After scrolling, strip the hash
  // from the URL so deep-link targets stay invisible to the user.
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", location.pathname + location.search);
  }, [location.hash, location.pathname, location.search]);

  return (
    <>
      <HeroPrimary content={content.hero} />
      <AboutSnippet content={content.about} />
      <FeatureCards content={content.features} />
      <IconGrid content={content.products} id="produkte" />
      <CraftBand content={content.craft} />
      <OnlineShopTeaser content={content.shop} />
      <LocationsTeaser content={content.locations} />
      <PartnerStores content={content.partnerStores} />
    </>
  );
}

/*
 * LocationsTeaser — grid of city tiles, each with a real storefront
 * photo. Click any tile to deep-link into the matching anchor on
 * /standorte. The CTA in the header navigates to the index.
 *
 * Storefront images are matched by city slug, so the content array
 * stays a pure-text contract (cities is just an array of names).
 */
import { ArrowUpRight } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { LocationsTeaserContent } from "~/schemas/content";

import kreuzberg from "~/images/locations/kreuzberg.jpg";
import spandau from "~/images/locations/spandau.jpg";
import zehlendorf from "~/images/locations/zehlendorf.jpg";
import koenigsWusterhausen from "~/images/locations/koenigs-wusterhausen.jpg";

// Slug → photo. Matches the slugs produced by the slug() helper below
// (which strips diacritics, e.g. "ö" → "o").
const STOREFRONT: Record<string, string> = {
  kreuzberg,
  spandau,
  zehlendorf,
  "konigs-wusterhausen": koenigsWusterhausen,
  "koenigs-wusterhausen": koenigsWusterhausen,
};

type LocationsTeaserProps = {
  content: LocationsTeaserContent;
};

function slug(city: string) {
  return city
    .toLowerCase()
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function LocationsTeaser({ content }: LocationsTeaserProps) {
  return (
    <Section tone="muted">
      <Container>
        <div
          id="standorte"
          className="flex scroll-mt-24 flex-col items-center gap-8 text-center lg:scroll-mt-28"
        >
          <Reveal className="max-w-[50ch]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {content.title}
            </Heading>
          </Reveal>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-5">
          {content.cities.map((city, i) => {
            const citySlug = slug(city);
            const photo = STOREFRONT[citySlug];
            // "konigs-wusterhausen" (no umlaut transliteration) is what the
            // slug helper produces; the per-location route uses the same.
            return (
              <Reveal as="li" key={city} delay={i * 0.05}>
                <SmartLink
                  href={`/sanitatshaus-${citySlug}`}
                  className="group bg-surface rounded-card border-hairline ease-apple hover:border-ink/20 hover:shadow-soft block h-full overflow-hidden border transition-all hover:-translate-y-1"
                  aria-label={`Sanimotion-Standort ${city}`}
                >
                  {/* Photo plate */}
                  <div className="bg-muted relative aspect-[4/3] overflow-hidden">
                    {photo && (
                      <img
                        src={photo}
                        alt=""
                        aria-hidden
                        className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  {/* Caption */}
                  <div className="p-6 lg:p-7">
                    <h3 className="text-heading-md text-ink font-semibold tracking-tight">
                      {city}
                    </h3>
                    <span className="text-caption text-ink-subtle group-hover:text-ink duration-base mt-3 flex items-center gap-1 font-mono tracking-widest uppercase transition-colors">
                      Standort ansehen
                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.5}
                        aria-hidden
                        className="ease-apple transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </SmartLink>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

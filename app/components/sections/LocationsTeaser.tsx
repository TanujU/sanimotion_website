/*
 * LocationsTeaser — grid of city tiles with a CTA into /standorte.
 *
 * What: Eyebrow + title + a responsive grid of city tiles. Each tile is
 * a card with a soft accent gradient backdrop, a MapPin marker that
 * scales on hover, and a city name. Hovering a tile lifts it, draws an
 * accent ring, and reveals a "Standort ansehen →" prompt.
 *
 * Why: The homepage names four cities (Kreuzberg, Spandau, Zehlendorf,
 * Königs Wusterhausen) without addresses. The previous bare grid was
 * functional but lifeless — promoting tiles to interactive cards with
 * hover affordance fills the right-side space and matches the Qonto
 * "tiles that respond to you" feel.
 */
import { MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { LocationsTeaserContent } from "~/schemas/content";
import backdropUrl from "~/images/sani-4.png";

type LocationsTeaserProps = {
  content: LocationsTeaserContent;
};

// Slugify a city for the deep-link anchor (e.g. "Königs Wusterhausen"
// → "konigs-wusterhausen"). Matches the IDs used in site.ts footer.
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
    <Section tone="canvas" id="standorte" className="relative overflow-hidden">
      {/* Decorative backdrop — Sanimotion photo spread across the full
          right side of the section so it visually anchors the entire
          Standorte band rather than sitting in a single corner. Masked
          left-to-right so it fades into the canvas behind the heading
          and city tiles. Hidden from a11y. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, transparent 30%, black 80%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, transparent 30%, black 80%)",
        }}
      >
        <img
          src={backdropUrl}
          alt=""
          aria-hidden
          className="absolute inset-y-0 right-0 h-full w-full object-cover opacity-15 lg:w-2/3"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Soft accent gradient blob — bottom-left, balances the photo on
          the opposite side. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-accent/6 rounded-pill absolute bottom-[-20%] left-[-10%] size-128 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="max-w-[40ch]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6">
              {content.title}
            </Heading>
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <Button href={content.cta.href} variant="secondary" size="md">
              {content.cta.label} →
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {content.cities.map((city, i) => (
            <Reveal as="li" key={city} delay={i * 0.05}>
              <SmartLink
                href={`/standorte#${slug(city)}`}
                className="group bg-surface rounded-card border-hairline duration-base ease-apple hover:border-accent hover:shadow-soft relative flex h-full flex-col gap-4 overflow-hidden border p-6 transition-all hover:-translate-y-1 lg:p-8"
                aria-label={`Sanimotion-Standort ${city}`}
              >
                {/* Decorative gradient halo — visible only on hover.
                    Pure decoration. */}
                <span
                  aria-hidden
                  className="bg-accent/0 group-hover:bg-accent/8 rounded-pill duration-base pointer-events-none absolute -top-12 -right-12 size-32 blur-2xl transition-colors"
                />

                {/* Marker */}
                <span
                  aria-hidden
                  className="bg-accent/10 group-hover:bg-accent rounded-pill duration-base flex size-10 items-center justify-center transition-colors"
                >
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="text-accent group-hover:text-canvas duration-base transition-colors"
                  />
                </span>

                {/* City name */}
                <span className="text-heading-lg text-ink mt-2 font-semibold tracking-tight">
                  {city}
                </span>
                <span className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                  Berlin & Umland
                </span>

                {/* Hover affordance — slides in from the right to signal
                    this tile is a link. */}
                <span className="text-caption text-ink-subtle group-hover:text-accent duration-base ease-apple mt-auto flex -translate-x-1 items-center gap-1 pt-4 font-medium opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  Standort ansehen
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden />
                </span>
              </SmartLink>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

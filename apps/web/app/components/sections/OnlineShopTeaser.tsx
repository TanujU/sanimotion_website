/*
 * OnlineShopTeaser — "750+ Produkte" with sub-category tiles.
 *
 * Title row + 6 small tiles in a 2/3/6 responsive grid. Each tile has
 * a square product photo and a label below. The tile-photo lookup is
 * keyed by category slug so the content schema stays text-only and
 * image-mapping is the component's concern (mirrors the IconGrid /
 * LocationsTeaser pattern).
 */
import { ArrowUpRight } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { ShopTeaserContent } from "~/schemas/content";

import personalCare from "~/images/shop/personal-care.png";
import dailyAids from "~/images/shop/daily-aids.png";
import bloodPressure from "~/images/shop/blood-pressure.jpeg";
import bath from "~/images/shop/bath.png";
import rollators from "~/images/shop/rollators.png";
import scooter from "~/images/shop/scooter.png";

const IMAGES: Record<string, string> = {
  "personal-care": personalCare,
  "daily-aids": dailyAids,
  "blood-pressure": bloodPressure,
  bath,
  rollators,
  scooter,
};

type OnlineShopTeaserProps = {
  content: ShopTeaserContent;
};

export function OnlineShopTeaser({ content }: OnlineShopTeaserProps) {
  return (
    <Section tone="muted" id="shop">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <Reveal className="max-w-[40ch]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6">
              {content.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-6 max-w-[50ch]">
              {content.lede}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="shrink-0">
            <Button href={content.cta.href} size="md">
              {content.cta.label} →
            </Button>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:grid-cols-6">
          {content.categories.map((cat, i) => {
            const img = IMAGES[cat.slug];
            return (
              <Reveal as="li" key={cat.slug} delay={i * 0.04}>
                <SmartLink
                  href={cat.href}
                  className="group bg-surface rounded-card border-hairline ease-apple hover:border-ink/20 hover:shadow-soft block h-full overflow-hidden border transition-all hover:-translate-y-0.5"
                  aria-label={cat.label}
                >
                  <div className="bg-muted relative aspect-square overflow-hidden">
                    {img && (
                      <img
                        src={img}
                        alt=""
                        aria-hidden
                        className="ease-apple absolute inset-0 h-full w-full object-contain p-5 transition-transform duration-500 group-hover:scale-[1.06]"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 p-4">
                    <span className="text-body-md text-ink font-medium">
                      {cat.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden
                      className="text-ink-subtle group-hover:text-ink ease-apple shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
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

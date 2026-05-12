/*
 * FeatureCards — six-up "why us" grid.
 *
 * What: Eyebrow + (optional) title above a responsive grid of cards.
 * Each card is a surface-white tile on the muted band with an icon
 * inside a soft accent-tinted disc and a short title — no description.
 * On hover the card lifts and the icon disc tints toward the accent —
 * a Qonto-style micro-interaction.
 *
 * Layout: 1 col mobile → 2 cols sm → 3 cols lg.
 *
 * Why: Mirrors the value-prop strip on sanimotion.com (Ausgezeichneter
 * Service, Fachkundige Beratung, …). Visually distinct from the
 * IconGrid product cards: cards have surfaces, the section is tinted,
 * and a soft decorative gradient anchors the band.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import type { FeaturesContent } from "~/schemas/content";

type FeatureCardsProps = {
  content: FeaturesContent;
};

export function FeatureCards({ content }: FeatureCardsProps) {
  return (
    <Section tone="muted" className="relative overflow-hidden">
      {/* Decorative accent blobs — soft, low-opacity. Pure decoration,
          hidden from assistive tech. Echoes the Qonto "pastel-blob"
          backdrop without adding any image weight. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="rounded-pill bg-accent/8 absolute -top-24 left-[-10%] size-[28rem] blur-3xl" />
        <div className="rounded-pill bg-accent/6 absolute right-[-5%] bottom-[-15%] size-[24rem] blur-3xl" />
      </div>

      <Container className="relative">
        <Reveal className="max-w-[36ch]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          {content.title && (
            <Heading as="h2" size="display-md" className="mt-6">
              {content.title}
            </Heading>
          )}
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {content.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.05}
              // group enables coordinated hover state on the inner icon
              // disc + title. translate + shadow yields the Qonto card
              // lift; transitions use the global ease for a smooth feel.
              className="group rounded-card bg-surface duration-base hover:shadow-soft ease-apple flex flex-col items-center gap-6 px-6 py-10 text-center transition-all hover:-translate-y-1 sm:px-8 sm:py-12 lg:gap-7 lg:py-14"
            >
              {/* Icon disc — soft accent-tinted halo behind the icon. On
                  hover it shifts to a stronger accent fill while the icon
                  itself flips to canvas — a quiet color-swap that
                  doesn't overwhelm the card. */}
              <span
                className="rounded-pill bg-accent/10 duration-base group-hover:bg-accent flex size-16 items-center justify-center transition-colors"
                aria-hidden
              >
                <Icon
                  name={item.icon}
                  size={28}
                  className="text-accent duration-base group-hover:text-canvas transition-colors"
                />
              </span>
              <h3 className="text-heading-lg text-ink leading-tight font-semibold tracking-tight">
                {item.title}
              </h3>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

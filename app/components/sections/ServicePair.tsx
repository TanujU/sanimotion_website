/*
 * ServicePair — two highlighted services side-by-side.
 *
 * What: Two surface cards on the muted band. Each item is icon + title +
 * description + CTA, with an oversized translucent decorative icon
 * sitting bottom-right of the card as a quiet visual anchor. Cards
 * lift on hover. Stacks on mobile, 50/50 on md+.
 *
 * Why: "Hausbesuch" and "Rezept hochladen" are the two homepage hooks —
 * the section is small but high-value. Promoting each item to a card
 * with an oversized decorative glyph fills the right side of the
 * layout and brings Qonto-style visual weight without needing extra
 * image assets.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { Button } from "~/components/primitives/Button";
import type { ServicePairContent } from "~/schemas/content";
import backdropUrl from "~/images/sani-3.png";

type ServicePairProps = {
  content: ServicePairContent;
};

export function ServicePair({ content }: ServicePairProps) {
  return (
    <Section tone="muted" className="relative overflow-hidden">
      {/* Decorative backdrop — Sanimotion service photo at low opacity on
          the right, masked into the muted band so the cards remain
          comfortably readable. Hidden from a11y. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 60%)",
        }}
      >
        <img
          src={backdropUrl}
          alt=""
          aria-hidden
          className="rounded-card absolute -top-16 -right-16 h-[24rem] w-[24rem] -rotate-3 object-cover opacity-10 blur-[2px] lg:h-[32rem] lg:w-[32rem]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <Container className="relative">
        <Reveal className="max-w-[36ch]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading as="h2" size="display-md" className="mt-6">
            {content.title}
          </Heading>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {content.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              // Card chrome: surface tile, hover-lift + accent border
              // matches the Qonto micro-interaction. `group` coordinates
              // the decorative background icon's hover state.
              className="group bg-surface rounded-card border-hairline duration-base ease-apple hover:border-accent hover:shadow-soft relative flex flex-col overflow-hidden border p-8 transition-all hover:-translate-y-1 sm:p-10 lg:p-12"
            >
              {/* Decorative oversized icon — anchors the bottom-right
                  corner with a quiet visual signal. Low opacity, masked
                  pointer events, hidden from a11y. Slides slightly on
                  hover for a subtle parallax. */}
              <Icon
                name={item.icon}
                size={220}
                className="text-accent/8 group-hover:text-accent/15 duration-slow ease-apple pointer-events-none absolute -right-8 -bottom-12 transition-all group-hover:-translate-x-2 group-hover:-translate-y-2"
                aria-hidden
              />

              {/* Foreground content */}
              <span
                className="rounded-pill bg-accent/10 group-hover:bg-accent duration-base flex size-14 items-center justify-center transition-colors"
                aria-hidden
              >
                <Icon
                  name={item.icon}
                  size={26}
                  className="text-accent group-hover:text-canvas duration-base transition-colors"
                />
              </span>
              <h3 className="text-heading-lg text-ink relative mt-8 font-semibold">
                {item.title}
              </h3>
              <p className="text-body-lg text-ink-muted relative mt-4 max-w-[40ch]">
                {item.description}
              </p>
              <div className="relative mt-8">
                <Button href={item.cta.href} variant="secondary" size="md">
                  {item.cta.label} →
                </Button>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

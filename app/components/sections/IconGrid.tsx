/*
 * IconGrid — generic icon-card grid.
 *
 * What: Eyebrow + section title above a responsive grid of icon cards
 * (icon + title + 1-line description, optionally a deep link). 1 col on
 * mobile, 2 cols from sm, 3 cols from md, 3-4 cols on lg depending on
 * card count. Reveal-on-scroll with light child stagger.
 *
 * Why: This is the workhorse "what we offer" block. On the Sanimotion
 * homepage it renders six product categories (Einlagen, Schuhe,
 * Kompressionsstrümpfe, Orthesen, Prothesen, Bandagen). The component
 * stays generic so the same primitive can power Leistungen pages later.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { IconGridContent } from "~/schemas/content";
import { cn } from "~/lib/cn";
import backdropUrl from "~/images/sani-2.jpg";

type IconGridProps = {
  content: IconGridContent;
  // DOM id for in-page anchors (e.g. /#produkte from the navbar).
  id?: string;
};

export function IconGrid({ content, id }: IconGridProps) {
  // Choose column count by item count so 6 cards balance into 3, 4 into 4,
  // 3 into 3, etc. Avoids a single ragged orphan in the last row.
  const lgCols =
    content.items.length % 4 === 0
      ? "lg:grid-cols-4"
      : content.items.length % 3 === 0
        ? "lg:grid-cols-3"
        : "lg:grid-cols-3";

  return (
    <Section tone="canvas" id={id} className="relative overflow-hidden">
      {/* Decorative backdrop image — workshop close-up at very low opacity,
          masked to fade into the canvas at the edges. Sits behind the
          content and is hidden from a11y. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top right, black 0%, transparent 65%)",
        }}
      >
        <img
          src={backdropUrl}
          alt=""
          aria-hidden
          className="rounded-card absolute -top-12 right-[-10%] h-[28rem] w-[40rem] -rotate-3 object-cover opacity-10 blur-[2px] lg:h-[36rem] lg:w-[52rem]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <Container className="relative">
        <Reveal className="max-w-[32ch]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading as="h2" size="display-md" className="mt-6">
            {content.title}
          </Heading>
        </Reveal>

        <ul
          className={cn(
            "mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:gap-y-16",
            lgCols,
          )}
        >
          {content.items.map((item, i) => {
            // Card body — `group` enables coordinated hover state so the
            // icon shifts to accent and the title nudges right when the
            // whole card is hovered (Qonto-style micro-interaction).
            const body = (
              <>
                <Icon
                  name={item.icon}
                  size={28}
                  className="text-ink duration-base group-hover:text-accent transition-colors"
                />
                <h3 className="text-heading-md text-ink duration-base mt-6 font-semibold transition-transform group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="text-body-md text-ink-muted mt-3">
                  {item.description}
                </p>
              </>
            );

            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.06}
                // Hairline becomes accent-tinted on hover — a Qonto-style
                // signal of interactivity without a boxy hover-card.
                className="group border-hairline duration-base hover:border-accent border-t pt-8 transition-colors"
              >
                {item.href ? (
                  <SmartLink href={item.href} className="block">
                    {body}
                  </SmartLink>
                ) : (
                  body
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

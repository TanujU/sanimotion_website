/*
 * CraftBand — in-house workshop callout (Maßanfertigung).
 *
 * Split layout on lg+: workshop photo on the left, headline + body +
 * bullets + CTA on the right. The image card has a soft inner shadow
 * and is wrapped in a hairline border to keep it Apple-quiet rather
 * than dramatic.
 *
 * Stacks image-first on mobile so the visual lands before the copy.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { CraftContent } from "~/schemas/content";
import workshopUrl from "~/images/craft/custom-made.png";

type CraftBandProps = {
  content: CraftContent;
};

const IMG_W = 650;
const IMG_H = 450;

export function CraftBand({ content }: CraftBandProps) {
  return (
    <Section tone="canvas">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <Reveal className="lg:col-span-6">
            <div className="border-hairline rounded-card bg-muted shadow-soft group mx-auto max-w-md overflow-hidden border">
              <img
                src={workshopUrl}
                alt="Sanimotion-Werkstatt: Maßanfertigung und persönliche Anpassung"
                width={IMG_W}
                height={IMG_H}
                className="ease-apple aspect-[13/9] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          {/* Body column */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 max-w-[20ch]">
              {content.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
              {content.body}
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.bullets.map((b) => (
                <li
                  key={b}
                  className="text-body-md text-ink-muted flex items-start gap-3"
                >
                  <span
                    aria-hidden
                    className="bg-ink-subtle/40 mt-2.5 inline-block size-1 shrink-0 rounded-full"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

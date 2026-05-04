/*
 * LogoWall — Markenpartner strip as an infinite marquee.
 *
 * What: Eyebrow + section title above a single horizontal strip of partner
 * names that scrolls continuously from right to left. Edge fades blur the
 * strip into the canvas on both sides for a polished frame.
 *
 * Why: A static grid of partner names reads as filler. A continuously
 * moving strip — borrowed from sites like Qonto, Stripe and Linear —
 * communicates "many partners" with motion alone, and reads as more
 * editorial than a logo wall. The strip pauses on hover so users can
 * read individual names.
 *
 * Performance: animation runs on `transform` only (cheap on the
 * compositor). The track is duplicated in DOM so a single -50% translate
 * loops seamlessly — no JS required. Disabled under
 * prefers-reduced-motion via the global guard in globals.css.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { LogoWallContent } from "~/schemas/content";

type LogoWallProps = {
  content: LogoWallContent;
};

export function LogoWall({ content }: LogoWallProps) {
  // Duplicate the items so the marquee track is exactly 200% wide and a
  // -50% translate maps the second copy onto the first — a seamless loop.
  const track = [...content.items, ...content.items];

  return (
    <Section tone="canvas" compact>
      <Container>
        <Reveal className="max-w-[36ch]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading as="h2" size="heading-lg" className="mt-6">
            {content.title}
          </Heading>
        </Reveal>
      </Container>

      {/* Marquee track — full-bleed (no Container) so partner names can
          flow off the edges into the canvas fade. */}
      <Reveal className="group mt-12 lg:mt-16">
        <div
          className="relative overflow-hidden"
          // Soft edge fades — mask the strip into the canvas so partners
          // appear and disappear gracefully rather than hard-cropping.
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          aria-label="Markenpartner — Liste"
        >
          <ul
            // animate-marquee is the Tailwind utility generated from
            // --animate-marquee in tokens.css. Pause on hover so users
            // can read individual names; pause when reduced-motion is
            // requested via the global guard.
            className="animate-marquee flex w-max gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none lg:gap-16"
          >
            {track.map((name, i) => (
              <li
                key={`${name}-${i}`}
                // aria-hidden on the duplicated half so screen readers
                // don't announce every partner twice. The first half
                // remains accessible.
                aria-hidden={i >= content.items.length}
                className="text-heading-md text-ink-subtle duration-base hover:text-ink flex shrink-0 items-center font-mono tracking-widest uppercase transition-colors"
              >
                {name}
                <span
                  className="rounded-pill bg-hairline ml-12 inline-block size-1 lg:ml-16"
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

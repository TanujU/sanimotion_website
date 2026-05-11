/*
 * LogoWall — Markenpartner strip as an infinite marquee.
 *
 * Each partner name in the content array is matched to an imported
 * logo image; if no match is found we fall back to the rendered text
 * so the build never breaks on a new partner. The marquee loop is
 * a -50% translate over a duplicated track — no JS required.
 *
 * Pauses on hover (so users can read names) and under
 * prefers-reduced-motion (via the global guard in globals.css).
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { LogoWallContent } from "~/schemas/content";

import bauerfeind from "~/images/partners/bauerfeind.jpg";
import juzo from "~/images/partners/juzo.jpg";
import sporlastic from "~/images/partners/sporlastic.jpg";
import bort from "~/images/partners/bort.jpg";
import aspen from "~/images/partners/aspen.jpg";
import russka from "~/images/partners/russka.jpg";
import orthoservice from "~/images/partners/orthoservice.jpg";
import springer from "~/images/partners/springer-aktiv.jpg";
import mtr from "~/images/partners/mtr-rostock.jpg";
import brieskorn from "~/images/partners/brieskorn.jpg";
import drylock from "~/images/partners/drylock.jpg";

// Lookup keyed by partner name. Names match the strings in
// content/pages/home.ts. If a partner is missing, the component falls
// back to rendering the text label.
const LOGOS: Record<string, string> = {
  Bauerfeind: bauerfeind,
  Juzo: juzo,
  Sporlastic: sporlastic,
  "Bort Medical": bort,
  Aspen: aspen,
  Russka: russka,
  Orthoservice: orthoservice,
  "Springer Aktiv": springer,
  "MTR Rostock": mtr,
  Brieskorn: brieskorn,
  Drylock: drylock,
};

type LogoWallProps = {
  content: LogoWallContent;
};

export function LogoWall({ content }: LogoWallProps) {
  // Duplicate so the marquee track is 200% wide and a -50% translate loops.
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

      <Reveal className="group mt-12 lg:mt-16">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
          aria-label="Markenpartner — Liste"
        >
          <ul className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none lg:gap-20">
            {track.map((name, i) => {
              const logo = LOGOS[name];
              return (
                <li
                  key={`${name}-${i}`}
                  aria-hidden={i >= content.items.length}
                  className="flex h-12 shrink-0 items-center"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt={name}
                      className="ease-apple h-12 w-auto object-contain opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="text-heading-md text-ink-subtle font-mono tracking-widest uppercase">
                      {name}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

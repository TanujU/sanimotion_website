/*
 * AboutSnippet — short company description with image + animated metric.
 *
 * What: Eyebrow + tagline + body paragraph on the right of an anchoring
 * photo on lg+. Stacks on mobile (image first, then text). The optional
 * metric (e.g. "30+ Jahre") is rendered as an oversized count-up tile at
 * the bottom of the text column — a Qonto-style numeric reveal that
 * gives the right side a visual anchor instead of leaving it text-only.
 *
 * Why: The Sanimotion homepage opens with care-driven language
 * ("Alles für Ihre Gesundheit", 30+ Jahre, Handwerkskunst). The photo
 * humanizes the section; the animated metric makes the "30 years"
 * proof point land instead of slipping past as a caption.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { CountUp } from "~/components/primitives/CountUp";
import type { AboutSnippetContent } from "~/schemas/content";
import aboutImageUrl from "~/images/sani-2.jpg";

type AboutSnippetProps = {
  content: AboutSnippetContent;
};

// Native dimensions of sani-2.jpg (2560 × 1709) — lets the browser
// reserve the right aspect ratio and prevents layout shift.
const ABOUT_IMG_W = 2560;
const ABOUT_IMG_H = 1709;

// Parse a numeric metric like "30+", "−42 %" into its integer + suffix
// so CountUp can animate the digits while preserving the suffix glyph.
function splitMetric(value: string) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}

export function AboutSnippet({ content }: AboutSnippetProps) {
  const metric = content.metricValue ? splitMetric(content.metricValue) : null;

  return (
    <Section tone="canvas">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
          {/* Image — fills 6/12 cols on lg. Soft hairline-rounded card,
              muted background placeholder while it decodes. */}
          <Reveal className="lg:col-span-6">
            <div className="rounded-card bg-muted overflow-hidden">
              <img
                src={aboutImageUrl}
                alt="Sanimotion-Werkstatt: traditionelle Handwerkskunst und moderne Technik"
                width={ABOUT_IMG_W}
                height={ABOUT_IMG_H}
                className="aspect-3/2 h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>

          {/* Body — fills 6/12 cols on lg. */}
          <Reveal delay={0.08} className="lg:col-span-6">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6">
              {content.tagline}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
              {content.body}
            </p>

            {/* Metric block — its own row with the accent bar. Stacks
                above the CTA so the multi-line label can wrap cleanly
                without forcing the button out of vertical alignment. */}
            {metric && content.metricLabel && (
              <div className="border-accent mt-10 flex items-baseline gap-3 border-l-2 pl-5">
                <span className="text-display-lg text-ink leading-none font-semibold tracking-tight">
                  <CountUp
                    value={metric.number}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    duration={1400}
                  />
                </span>
                <span className="text-caption text-ink-subtle max-w-[16ch] font-mono tracking-widest uppercase">
                  {content.metricLabel}
                </span>
              </div>
            )}

            {/* CTA — its own row below the metric so both sit
                left-aligned at consistent left edges. */}
            {content.cta && (
              <div className="mt-8">
                <Button href={content.cta.href} variant="secondary" size="md">
                  {content.cta.label} →
                </Button>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/*
 * CaseStudyFeatured — full-bleed proof point with hero metric.
 *
 * What: Two-column composition on lg+ (oversized metric on the left,
 * eyebrow + title + summary + tags + CTA on the right). Stacks on
 * mobile with the metric first so it's the immediate visual anchor.
 *
 * Why: A single big number beats a paragraph at conveying outcome.
 * The muted background tone separates the case study from the hero
 * and capability bands, creating breathing rhythm down the page.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import type { CaseStudyFeaturedContent } from "~/schemas/content";

type CaseStudyFeaturedProps = {
  content: CaseStudyFeaturedContent;
};

export function CaseStudyFeatured({ content }: CaseStudyFeaturedProps) {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-16">
          {/* Metric — fills 5/12 cols on lg, stacks above text on mobile. */}
          <Reveal className="lg:col-span-5">
            <span className="text-display-xl text-ink block font-semibold tracking-tight">
              {content.metricValue}
            </span>
            <span className="text-caption text-ink-subtle mt-2 block font-mono tracking-widest uppercase">
              {content.metricLabel}
            </span>
          </Reveal>

          {/* Body */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6">
              {content.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-6 max-w-[60ch]">
              {content.summary}
            </p>

            {/* Tag pills — monochrome, hairline border, no chrome. */}
            <ul className="mt-8 flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-pill border-hairline text-caption text-ink-muted border px-3 py-1"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={content.cta.href} variant="secondary" size="md">
                {content.cta.label} →
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

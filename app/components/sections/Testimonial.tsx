/*
 * Testimonial — single oversized quote.
 *
 * What: A single quote rendered at display-md, attribution below in mono
 * caption. No card, no background tint — pure typography on canvas.
 *
 * Why: A wall of quotes feels like a sales site; one large, well-chosen
 * quote feels like Apple. Keeping the chrome to zero forces the words to
 * carry the weight.
 */
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { TestimonialContent } from "~/schemas/content";

type TestimonialProps = {
  content: TestimonialContent;
};

export function Testimonial({ content }: TestimonialProps) {
  return (
    <Section tone="canvas">
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-[60ch]">
            {/* Decorative open-quote — small, subtle, placed flush left.
                aria-hidden because the surrounding <blockquote> already
                conveys the citation semantics to assistive tech. */}
            <span
              aria-hidden
              className="text-display-md text-accent block leading-none font-semibold"
            >
              „
            </span>
            <blockquote className="text-display-md text-ink mt-4 leading-tight font-semibold tracking-tight">
              {content.quote}
            </blockquote>
            <figcaption className="text-caption text-ink-subtle mt-10 font-mono tracking-widest uppercase">
              {content.author} —{" "}
              <span className="text-ink-muted">{content.role}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

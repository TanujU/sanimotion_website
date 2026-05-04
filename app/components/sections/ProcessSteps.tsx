/*
 * ProcessSteps — methodology in 3 numbered steps.
 *
 * What: Eyebrow + title above 3 steps. Each step shows a large mono
 * step number ("01"…), a heading, and a short description. Stacks on
 * mobile, lays out as a 3-column grid from md+, with hairline dividers
 * between steps.
 *
 * Why: A simple visual narrative ("Verstehen → Aufbauen → Skalieren")
 * answers the buyer's "how do you actually work?" question without a
 * deck. Numbered steps plus monochrome design keeps it premium, not
 * sales-y.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { ProcessStepsContent } from "~/schemas/content";

type ProcessStepsProps = {
  content: ProcessStepsContent;
};

export function ProcessSteps({ content }: ProcessStepsProps) {
  return (
    <Section tone="canvas">
      <Container>
        <Reveal className="max-w-[28ch]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading as="h2" size="display-md" className="mt-6">
            {content.title}
          </Heading>
        </Reveal>

        <ol
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-x-8 lg:mt-24 lg:gap-x-16"
          aria-label={content.title}
        >
          {content.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 0.08}
              className="border-hairline border-t pt-8"
            >
              <span
                className="text-caption text-ink-subtle block font-mono tracking-widest uppercase"
                aria-hidden
              >
                {step.number}
              </span>
              <h3 className="text-heading-lg text-ink mt-4 font-semibold">
                {step.title}
              </h3>
              <p className="text-body-md text-ink-muted mt-4">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

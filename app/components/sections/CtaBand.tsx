/*
 * CtaBand — closing call-to-action on an inverse-tone background.
 *
 * What: Title + lede + single CTA, centered on mobile, left-aligned with
 * the CTA pulled to the right on lg+. Renders on the inverse tone (dark
 * ink background, canvas text) so the page ends with a strong tonal
 * shift before the footer.
 *
 * Why: Marketing-site convention is to give the reader one obvious next
 * step at the bottom of the page. The inverse band makes that step
 * impossible to miss while keeping the design language minimal.
 */
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import type { CtaBandContent } from "~/schemas/content";

type CtaBandProps = {
  content: CtaBandContent;
};

export function CtaBand({ content }: CtaBandProps) {
  return (
    <Section tone="inverse">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-[24ch]">
              <Heading as="h2" size="display-lg" className="text-canvas">
                {content.title}
              </Heading>
              <p className="text-body-lg text-canvas/70 mt-6 max-w-[48ch]">
                {content.lede}
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href={content.cta.href}
                size="lg"
                invert
                variant="primary"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

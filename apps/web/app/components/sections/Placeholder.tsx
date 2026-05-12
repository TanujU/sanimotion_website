/*
 * Shared placeholder layout for not-yet-built routes.
 *
 * What: A small "Bald verfügbar" page used by every secondary route until
 * its real content lands in subsequent steps.
 *
 * Why: Without these, the Navbar and Footer would generate broken links —
 * bad for UX and bad for SEO crawls. A single shared component keeps the
 * placeholder copy consistent and trivial to delete later.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Button } from "~/components/primitives/Button";

type PlaceholderProps = {
  title: string;
  description: string;
};

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Section tone="canvas">
      <Container>
        <Eyebrow>Bald verfügbar</Eyebrow>
        <Heading as="h1" size="display-lg" className="mt-6 max-w-[18ch]">
          {title}
        </Heading>
        <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
          {description}
        </p>
        <div className="mt-12">
          <Button href="/" variant="secondary">
            Zur Startseite
          </Button>
        </div>
      </Container>
    </Section>
  );
}

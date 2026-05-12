/*
 * /standorte — Locations index.
 *
 * Hero band → grid of four LocationCards → closing home-visit CTA. Each
 * card is anchorable so /standorte#kreuzberg jumps directly to the right
 * store.
 */
"use client";
import type { Route } from "./+types/standorte";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Reveal } from "~/components/primitives/Reveal";
import { LocationCard } from "~/components/sections/LocationCard";
import { getStandorteContent } from "~/content/pages/standorte";
import { useLocale } from "~/i18n/locale";

export function meta(_: Route.MetaArgs) {
  const c = getStandorteContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function Standorte() {
  const locale = useLocale();
  const c = getStandorteContent(locale);

  return (
    <>
      {/* Hero */}
      <section
        className="bg-canvas relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24"
        aria-label={c.hero.eyebrow}
      >
        <Container>
          <div className="max-w-[60ch]">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="display-xl" className="mt-6 max-w-[14ch]">
              {c.hero.titleLead}
              <br />
              <span className="text-ink-muted">{c.hero.titleTail}</span>
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
              {c.hero.lede}
            </p>
          </div>
        </Container>
      </section>

      {/* Locations grid */}
      <Section tone="muted" aria-label={c.hero.eyebrow}>
        <Container>
          <div className="grid gap-6 lg:gap-8">
            {c.locations.map((loc) => (
              <LocationCard key={loc.slug} item={loc} labels={c.labels} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing — home-visit CTA */}
      <Section tone="canvas">
        <Container>
          <Reveal className="border-hairline rounded-card border p-10 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-8">
                <Eyebrow>{c.closing.eyebrow}</Eyebrow>
                <Heading as="h2" size="display-md" className="mt-6">
                  {c.closing.title}
                </Heading>
                <p className="text-body-lg text-ink-muted mt-6 max-w-[60ch]">
                  {c.closing.body}
                </p>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Button href={c.closing.cta.href} size="lg">
                  {c.closing.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

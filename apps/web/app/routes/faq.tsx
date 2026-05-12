/*
 * /faq — Frequently asked questions, grouped.
 */
"use client";
import type { Route } from "./+types/faq";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Reveal } from "~/components/primitives/Reveal";
import { AccordionItem } from "~/components/sections/Accordion";
import { getFaqContent } from "~/content/pages/faq";
import { useLocale } from "~/i18n/locale";

export function meta(_: Route.MetaArgs) {
  const c = getFaqContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function Faq() {
  const locale = useLocale();
  const c = getFaqContent(locale);

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

      {/* Groups */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
            {c.groups.map((group, gi) => (
              <Reveal
                key={group.title}
                delay={gi * 0.05}
                className="lg:col-span-12"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-3">
                    <h2 className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                      {group.title}
                    </h2>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="border-hairline border-t">
                      {group.items.map((item, i) => (
                        <AccordionItem
                          key={item.question}
                          question={item.question}
                          answer={item.answer}
                          defaultOpen={gi === 0 && i === 0}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section tone="muted">
        <Container>
          <Reveal className="border-hairline bg-surface rounded-card border p-10 lg:p-16">
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

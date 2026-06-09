/*
 * /produkte — Products overview.
 *
 * Hero → 8-up category grid (anchorable per slug) → 4-step process →
 * closing CTA. Each category card is a quiet white surface with icon
 * + title + lede + scoped bullets. No nested links inside cards (cards
 * themselves don't navigate yet — detail pages come later).
 */
"use client";
import type { Route } from "./+types/produkte";
import { buildMeta } from "~/lib/seo";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Icon } from "~/components/primitives/Icon";
import { Reveal } from "~/components/primitives/Reveal";
import { getProdukteContent } from "~/content/pages/produkte";
import { useLocale } from "~/i18n/locale";

export function meta() {
  const c = getProdukteContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/produkte" });
}

export default function Produkte() {
  const locale = useLocale();
  const c = getProdukteContent(locale);

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

      {/* Category grid — 1 col mobile, 2 col md, 3 col xl */}
      <Section tone="muted">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {c.categories.map((cat) => (
              <Reveal
                as="article"
                key={cat.slug}
                id={cat.slug}
                className="border-hairline bg-surface rounded-card scroll-mt-32 border p-8 lg:p-10"
              >
                <div className="bg-muted text-ink rounded-card inline-flex size-12 items-center justify-center">
                  <Icon name={cat.icon} size={22} />
                </div>
                <h3 className="text-heading-lg text-ink mt-6 font-semibold tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-body-md text-ink-muted mt-3">{cat.lede}</p>
                <ul className="mt-6 space-y-2">
                  {cat.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-body-md text-ink-muted flex items-start gap-3"
                    >
                      <span
                        aria-hidden
                        className="bg-ink-subtle/40 mt-2.5 inline-block size-1 shrink-0 rounded-full"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process — 4 numbered steps */}
      <Section tone="canvas">
        <Container>
          <Reveal>
            <Eyebrow>{c.process.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-lg" className="mt-6 max-w-[24ch]">
              {c.process.title}
            </Heading>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
            {c.process.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05}>
                <span className="text-caption text-ink-subtle font-mono tracking-widest">
                  {step.number}
                </span>
                <h3 className="text-heading-lg text-ink mt-4 font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-body-md text-ink-muted mt-3">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing CTA */}
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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:col-span-4 lg:flex-col lg:items-stretch lg:justify-self-end">
                <Button href={c.closing.primaryCta.href} size="lg">
                  {c.closing.primaryCta.label}
                </Button>
                <Button
                  href={c.closing.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                >
                  {c.closing.secondaryCta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

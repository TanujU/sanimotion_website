/*
 * /orthesen — Orthoses landing page.
 *
 * Mirrors sanimotion.com/orthesen-berlin/: hero (split with photo) → types
 * grid → Maßanfertigung (with photo) → service highlights → Krankenkasse →
 * Persönliche Beratung → Orthesen von Kopf bis Fuß detail blocks → contact.
 */
"use client";
import type { Route } from "./+types/orthesen";
import { Phone, Mail } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { getOrthesenContent } from "~/content/pages/orthesen";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/orthesen/orthesen-hero.png";
import detailImageUrl from "~/images/orthesen/orthesen-detail.png";

export function meta(_: Route.MetaArgs) {
  const c = getOrthesenContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function Orthesen() {
  const locale = useLocale();
  const c = getOrthesenContent(locale);

  return (
    <>
      {/* Hero — split layout with product photo */}
      <section
        className="bg-canvas relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
        aria-label={c.hero.eyebrow}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="rounded-pill bg-accent/10 absolute -top-32 right-[-10%] size-[36rem] blur-3xl lg:size-[44rem]" />
          <div className="rounded-pill bg-accent/5 absolute bottom-[-20%] left-[-10%] size-[28rem] blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <Eyebrow>{c.hero.eyebrow}</Eyebrow>
              <Heading as="h1" size="display-xl" className="mt-6 max-w-[18ch]">
                {c.hero.titleLead}
                <br />
                <span className="text-ink-muted">{c.hero.titleTail}</span>
              </Heading>
              <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
                {c.hero.lede}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card bg-muted shadow-soft relative mx-auto aspect-square w-full max-w-lg overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt="Knieorthese im Sanimotion Sanitätshaus"
                  className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro + types grid */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch] space-y-8">
            <Reveal>
              <p className="text-body-lg text-ink-muted">{c.hero.intro}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-ink-muted">
                {c.hero.typesIntro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {c.hero.types.map((typ) => (
                  <li
                    key={typ}
                    className="text-body-md text-ink flex items-center gap-3"
                  >
                    <span
                      aria-hidden
                      className="bg-accent inline-block size-1.5 shrink-0 rounded-full"
                    />
                    {typ}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Maßanfertigung — with detail photo */}
      <Section tone="muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-card bg-muted shadow-soft overflow-hidden">
                  <img
                    src={detailImageUrl}
                    alt="Orthese aus der Sanimotion-Werkstatt in Berlin-Kreuzberg"
                    className="ease-apple h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.massanfertigung.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[20ch]"
                >
                  {c.massanfertigung.title}
                </Heading>
              </Reveal>
              <div className="mt-8 space-y-6">
                {c.massanfertigung.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.05 + i * 0.05}>
                    <p className="text-body-lg text-ink-muted max-w-[60ch]">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Service highlights */}
      <Section tone="canvas">
        <Container>
          <Reveal className="mx-auto max-w-[50ch] text-center">
            <Eyebrow>{c.highlights.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              size="display-md"
              className="mt-6 text-balance"
            >
              {c.highlights.title}
            </Heading>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {c.highlights.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                delay={i * 0.04}
                className="border-hairline bg-surface rounded-card flex items-center gap-4 border p-6"
              >
                <div className="bg-muted text-ink rounded-card inline-flex size-12 shrink-0 items-center justify-center">
                  <Icon name={item.icon} size={20} />
                </div>
                <span className="text-body-md text-ink font-medium">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Krankenkasse */}
      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.krankenkasse.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.krankenkasse.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.krankenkasse.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Persönliche Beratung */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.beratung.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.beratung.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.beratung.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Orthesen von Kopf bis Fuß — detail blocks */}
      <Section tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <Eyebrow>{c.details.eyebrow}</Eyebrow>
            <Heading
              as="h2"
              size="display-md"
              className="mt-6 text-balance"
            >
              {c.details.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8 text-left">
              {c.details.intro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
            {c.details.blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.05}>
                <div className="border-hairline bg-surface rounded-card h-full border p-8">
                  <Heading as="h3" size="heading-md">
                    {block.title}
                  </Heading>
                  <p className="text-body-md text-ink-muted mt-4 max-w-[60ch]">
                    {block.paragraph}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact intro — short copy block before the global KontaktTermin
          rendered in root.tsx */}
      <Section tone="canvas">
        <Container>
          <Reveal className="border-hairline bg-surface rounded-card border p-10 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-7">
                <Eyebrow>{c.contact.eyebrow}</Eyebrow>
                <Heading as="h2" size="display-md" className="mt-6">
                  {c.contact.title}
                </Heading>
                <div className="mt-8 space-y-5">
                  {c.contact.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-body-lg text-ink-muted max-w-[60ch]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <ul className="lg:col-span-5 lg:justify-self-end space-y-4">
                <li className="flex items-center gap-4">
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden
                    className="text-accent shrink-0"
                  />
                  <SmartLink
                    href={c.contact.phone.href}
                    className="text-body-lg text-ink duration-fast hover:text-accent font-medium transition-colors"
                  >
                    {c.contact.phone.label}
                  </SmartLink>
                </li>
                <li className="flex items-center gap-4">
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden
                    className="text-accent shrink-0"
                  />
                  <SmartLink
                    href={c.contact.email.href}
                    className="text-body-lg text-ink duration-fast hover:text-accent font-medium transition-colors"
                  >
                    {c.contact.email.label}
                  </SmartLink>
                </li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

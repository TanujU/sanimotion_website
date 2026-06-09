/*
 * /prothesen — Prosthetics landing page.
 *
 * Mirrors sanimotion.com/prothesen-berlin/: hero (split with photo) → types
 * grid (lower + upper extremities) → Prothetik intro → service highlights →
 * Vor-Ort-Beratung & Außendienst → contact.
 */
"use client";
import type { Route } from "./+types/prothesen";
import { buildMeta, buildBreadcrumbSchema } from "~/lib/seo";
import { JsonLd } from "~/components/seo/JsonLd";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { Phone, Mail } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { getProthesenContent } from "~/content/pages/prothesen";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/prothesen/prothesen-hero.png";

export function meta() {
  const c = getProthesenContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/prothesen" });
}

export default function Prothesen() {
  const locale = useLocale();
  const c = getProthesenContent(locale);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Startseite", path: "/" },
        { name: "Produkte", path: "/#produkte" },
        { name: "Prothesen", path: "/prothesen" },
      ])} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Produkte", path: "/#produkte" },
        { name: "Prothesen", path: "/prothesen" },
      ]} />
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
                  alt="Prothese im Sanimotion Sanitätshaus Berlin"
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

      {/* Intro + types grid (lower + upper extremities) */}
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
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 lg:mt-16">
            <Reveal delay={0.1}>
              <div className="border-hairline bg-surface rounded-card h-full border p-8">
                <Heading as="h3" size="heading-md" className="mb-6">
                  {c.hero.typesLowerLabel}
                </Heading>
                <ul className="space-y-3">
                  {c.hero.typesLower.map((typ) => (
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
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="border-hairline bg-surface rounded-card h-full border p-8">
                <Heading as="h3" size="heading-md" className="mb-6">
                  {c.hero.typesUpperLabel}
                </Heading>
                <ul className="space-y-3">
                  {c.hero.typesUpper.map((typ) => (
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
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Prothetik von Sanimotion */}
      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.prothetik.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.prothetik.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.prothetik.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
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

      {/* Vor-Ort-Beratung & Außendienst */}
      <Section tone="muted">
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

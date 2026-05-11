/*
 * /reha-technik — Rehab equipment sub-page.
 *
 * Mirrors sanimotion.com/reha-technik-berlin/: hero (split with photo +
 * CTA) → Leistungen (3 blocks: Anamnese / Interdisziplinär / Rezept &
 * Abrechnung) → Versorgungsweg (4 numbered steps) → highlights → detail
 * with second image and "750 Produkte" stat → contact.
 */
"use client";
import type { Route } from "./+types/reha-technik";
import { Phone, Mail } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import { getRehaTechnikContent } from "~/content/pages/reha-technik";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/reha-technik/reha-technik-hero.png";
import detailImageUrl from "~/images/reha-technik/reha-technik-detail.png";

export function meta(_: Route.MetaArgs) {
  const c = getRehaTechnikContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function RehaTechnik() {
  const locale = useLocale();
  const c = getRehaTechnikContent(locale);

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
              <Heading
                as="h1"
                size="display-xl"
                className="mt-6 max-w-[22ch] hyphens-auto break-words"
              >
                {c.hero.titleLead}
                <br />
                <span className="text-ink-muted">{c.hero.titleTail}</span>
              </Heading>
              <p className="text-body-lg text-ink-muted mt-8 max-w-[60ch]">
                {c.hero.lede}
              </p>
              <div className="mt-8 space-y-6">
                {c.hero.intro.map((p, i) => (
                  <p
                    key={i}
                    className="text-body-md text-ink-muted max-w-[60ch]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-10">
                <Button href={c.hero.cta.href} size="md">
                  {c.hero.cta.label}
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card bg-muted shadow-soft relative mx-auto aspect-square w-full max-w-lg overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt="Reha-Technik aus dem Sanimotion Sanitätshaus Berlin"
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

      {/* Leistungen — 3 service blocks */}
      <Section tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <Eyebrow>{c.leistungen.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {c.leistungen.title}
            </Heading>
          </Reveal>
          <div className="mt-12 space-y-6 lg:mt-16">
            {c.leistungen.items.map((item, i) => (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 0.05}
                className="border-hairline bg-surface rounded-card border p-8 lg:p-10"
              >
                <Heading as="h3" size="heading-md">
                  {item.title}
                </Heading>
                <div className="mt-4 space-y-4">
                  {item.body.map((p, j) => (
                    <p key={j} className="text-body-md text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center lg:mt-12">
            <Button href={c.leistungen.cta.href} size="md">
              {c.leistungen.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Versorgungsweg — 4 numbered steps */}
      <Section tone="canvas">
        <Container>
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <Eyebrow>{c.weg.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {c.weg.title}
            </Heading>
          </Reveal>
          <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
            {c.weg.steps.map((step, i) => (
              <Reveal
                as="li"
                key={step}
                delay={i * 0.05}
                className="border-hairline bg-surface rounded-card border p-8"
              >
                <span className="text-display-md text-ink block font-medium tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body-md text-ink mt-4 font-medium">{step}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Highlights */}
      <Section tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-[50ch] text-center">
            <Eyebrow>{c.highlights.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
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

      {/* Detail — split with second image + 750 stat */}
      <Section tone="canvas">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-5">
              <div className="rounded-card bg-muted shadow-soft relative mx-auto aspect-square w-full max-w-lg overflow-hidden">
                <img
                  src={detailImageUrl}
                  alt="Reha-Technik Versorgung im Sanimotion Sanitätshaus Berlin"
                  className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.detail.eyebrow}</Eyebrow>
                <p className="text-display-lg text-ink mt-6 font-medium tracking-tight tabular-nums">
                  {c.detail.stat}
                </p>
                <Heading as="h2" size="display-md" className="mt-4">
                  {c.detail.title}
                </Heading>
              </Reveal>
              <div className="mt-10 space-y-6">
                {c.detail.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.05 + i * 0.05}>
                    <p className="text-body-lg text-ink-muted max-w-[60ch]">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal className="mt-10">
                <Button href={c.detail.cta.href} size="md" variant="secondary">
                  {c.detail.cta.label}
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section tone="muted">
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

/*
 * /orthopaedische-schuhe-berlin/sneaker — Orthopedic sneaker sub-page.
 *
 * Mirrors sanimotion.com/orthopaedische-schuhe-berlin/sneaker/:
 * hero (split with photo) → intro → konstruktion → 6 service highlights
 * → leistungen list → Krankenkasse → Fußvermessung (with photo) →
 * Laufanalyse → Design → Zielgruppe → Warum Sanimotion → contact.
 */
"use client";
import type { Route } from "./+types/orthopaedische-schuhe-berlin.sneaker";
import { buildMeta, buildBreadcrumbSchema, buildMedicalDeviceSchema } from "~/lib/seo";
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
import { getSneakerContent } from "~/content/pages/orthopaedische-sneaker";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/sneaker/sneaker-hero.png";
import detailImageUrl from "~/images/sneaker/sneaker-detail.jpg";

export function meta() {
  const c = getSneakerContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/orthopaedische-schuhe-berlin/sneaker" });
}

export default function OrthopaedischeSneaker() {
  const locale = useLocale();
  const c = getSneakerContent(locale);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Startseite", path: "/" },
        { name: "Orthopädische Schuhe", path: "/orthopaedische-schuhe" },
        { name: "Sneaker", path: "/orthopaedische-schuhe-berlin/sneaker" },
      ])} />
      <JsonLd schema={buildMedicalDeviceSchema({ name: c.meta.title, description: c.meta.description, path: "/orthopaedische-schuhe-berlin/sneaker" })} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Orthopädische Schuhe", path: "/orthopaedische-schuhe" },
        { name: "Sneaker", path: "/orthopaedische-schuhe-berlin/sneaker" },
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
                  alt="Orthopädische Sneaker aus der Sanimotion-Werkstatt"
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

      {/* Intro story — opening paragraphs */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch] space-y-6">
            <Reveal>
              <p className="text-body-lg text-ink-muted">{c.hero.intro}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-body-lg text-ink-muted">
                {c.hero.schuhtypen}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Konstruktion — modebewusste Sneaker */}
      <Section tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>{c.konstruktion.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.konstruktion.title}
                </Heading>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {c.konstruktion.paragraphs.map((p, i) => (
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

      {/* 6 service highlights */}
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

      {/* Leistungen — split with detail photo */}
      <Section tone="muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-card bg-muted shadow-soft relative aspect-[4/5] overflow-hidden">
                  <img
                    src={detailImageUrl}
                    alt="Orthopädischer Sneaker — Detailaufnahme"
                    className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.leistungen.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[20ch]"
                >
                  {c.leistungen.title}
                </Heading>
              </Reveal>
              <div className="mt-8 space-y-6">
                {c.leistungen.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={0.05 + i * 0.05}>
                    <p className="text-body-lg text-ink-muted max-w-[60ch]">
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {c.leistungen.items.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item.label}
                    delay={0.05 + i * 0.04}
                    className="border-hairline bg-surface rounded-card flex items-start gap-4 border p-5"
                  >
                    <div className="bg-muted text-ink rounded-card inline-flex size-10 shrink-0 items-center justify-center">
                      <Icon name={item.icon} size={18} />
                    </div>
                    <span className="text-body-md text-ink font-medium">
                      {item.label}
                    </span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Krankenkasse */}
      <Section tone="canvas">
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

      {/* Fußvermessung */}
      <Section tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>{c.vermessung.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[20ch]"
                >
                  {c.vermessung.title}
                </Heading>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {c.vermessung.paragraphs.map((p, i) => (
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

      {/* Laufanalyse */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.laufanalyse.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.laufanalyse.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.laufanalyse.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Design */}
      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.design.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.design.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.design.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Zielgruppe */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.zielgruppe.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.zielgruppe.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.zielgruppe.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Warum Sanimotion */}
      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.warum.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.warum.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.warum.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact intro */}
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

/*
 * /prothesen/unterschenkel-prothese — Lower-leg prosthesis sub-page.
 *
 * Mirrors sanimotion.com/unterschenkel-prothese-berlin/: hero (split with
 * photo) → Prothesenversorgung (split with detail image) →
 * Vor-Ort-Beratung & Außendienst → Was uns auszeichnet (6 highlights) →
 * contact.
 */
"use client";
import type { Route } from "./+types/prothesen.unterschenkel-prothese";
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
import { getUnterschenkelProtheseContent } from "~/content/pages/unterschenkel-prothese";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/unterschenkel-prothese/unterschenkel-prothese-hero.png";
import detailImageUrl from "~/images/unterschenkel-prothese/unterschenkel-prothese-detail.png";

export function meta() {
  const c = getUnterschenkelProtheseContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/prothesen/unterschenkel-prothese" });
}

export default function UnterschenkelProthese() {
  const locale = useLocale();
  const c = getUnterschenkelProtheseContent(locale);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Startseite", path: "/" },
        { name: "Prothesen", path: "/prothesen" },
        { name: "Unterschenkel-Prothese", path: "/prothesen/unterschenkel-prothese" },
      ])} />
      <JsonLd schema={buildMedicalDeviceSchema({ name: c.meta.title, description: c.meta.description, path: "/prothesen/unterschenkel-prothese" })} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Prothesen", path: "/prothesen" },
        { name: "Unterschenkel-Prothese", path: "/prothesen/unterschenkel-prothese" },
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
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card bg-muted shadow-soft relative mx-auto aspect-square w-full max-w-lg overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt="Unterschenkelprothese aus dem Sanimotion Sanitätshaus Berlin"
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

      {/* Intro paragraph */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch] space-y-6">
            {c.hero.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-body-lg text-ink-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prothesenversorgung — split with detail photo */}
      <Section tone="muted">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-card bg-muted shadow-soft overflow-hidden">
                  <img
                    src={detailImageUrl}
                    alt="Maßgefertigte Unterschenkelprothese – aus der Sanimotion-Werkstatt in Berlin"
                    className="ease-apple h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.prothetik.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[24ch] hyphens-auto break-words"
                >
                  {c.prothetik.title}
                </Heading>
              </Reveal>
              <div className="mt-8 space-y-6">
                {c.prothetik.paragraphs.map((p, i) => (
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

      {/* Top-Service — Vor-Ort-Beratung & Außendienst */}
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

      {/* Service highlights */}
      <Section tone="muted">
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

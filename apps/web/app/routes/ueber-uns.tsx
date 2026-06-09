/*
 * /ueber-uns — About page.
 *
 * Hero (split layout with image) → story (long-form) → values trio →
 * workshop block + metrics → online shop → locations → partner stores →
 * brand partners → map → closing CTA. Long-form story uses 60ch max
 * and generous leading. Shop / locations / partners / map content is
 * reused from the home page so it stays a single source of truth.
 */
"use client";
import type { Route } from "./+types/ueber-uns";
import { buildMeta } from "~/lib/seo";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { OnlineShopTeaser } from "~/components/sections/OnlineShopTeaser";
import { LocationsTeaser } from "~/components/sections/LocationsTeaser";
import { PartnerStores } from "~/components/sections/PartnerStores";
import { getUeberUnsContent } from "~/content/pages/ueber-uns";
import { getHomeContent } from "~/content/pages/home";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/workshop/about-family.jpg";
import doctolibLogo from "~/images/brand/doctolib-white.png";

export function meta() {
  const c = getUeberUnsContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/ueber-uns" });
}

export default function UeberUns() {
  const locale = useLocale();
  const c = getUeberUnsContent(locale);
  const home = getHomeContent(locale);

  return (
    <>
      {/* Hero — split layout with brand photo */}
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
              <Heading as="h1" size="display-xl" className="mt-6 max-w-[14ch]">
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
                  alt="Das Sanimotion-Team in der Berliner Werkstatt"
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

      {/* Story — long-form */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>{c.story.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.story.title}
                </Heading>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="space-y-6">
                {c.story.paragraphs.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
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

      {/* Values */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <Eyebrow>{c.values.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-lg" className="mt-6 max-w-[24ch]">
              {c.values.title}
            </Heading>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20">
            {c.values.items.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.05}
                className="border-hairline bg-surface rounded-card border p-8 lg:p-10"
              >
                <div className="bg-muted text-ink rounded-card inline-flex size-12 items-center justify-center">
                  <Icon name={v.icon} size={22} />
                </div>
                <h3 className="text-heading-lg text-ink mt-6 font-semibold tracking-tight">
                  {v.title}
                </h3>
                <p className="text-body-md text-ink-muted mt-3 max-w-[42ch]">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Workshop + metrics */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.workshop.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.workshop.title}
                </Heading>
                <p className="text-body-lg text-ink-muted mt-6 max-w-[60ch]">
                  {c.workshop.body}
                </p>
                <ul className="mt-8 space-y-3">
                  {c.workshop.bullets.map((b) => (
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
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                  {c.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-surface flex flex-col gap-2 p-8"
                    >
                      <dt className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                        {m.label}
                      </dt>
                      <dd className="text-display-md text-ink font-semibold tabular-nums">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Online shop, locations, partner stores — reused from home.
          The brand-partner wall and contact + map are rendered globally
          in root.tsx so they appear on every route. */}
      <OnlineShopTeaser content={home.shop} />
      <LocationsTeaser content={home.locations} />
      <PartnerStores content={home.partnerStores} />

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
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:col-span-4 lg:flex-col lg:items-stretch lg:justify-self-end">
                <Button href={c.closing.primaryCta.href} size="lg">
                  {c.closing.primaryCta.label}
                  <img
                    src={doctolibLogo}
                    alt="Doctolib"
                    className="ml-1 h-5 w-auto"
                    loading="lazy"
                    decoding="async"
                  />
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

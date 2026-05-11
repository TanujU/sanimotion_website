/*
 * /jobs — Careers page.
 *
 * Mirrors sanimotion.com/job-karriere/: hero → two intro blocks →
 * single open role (links to its detail page) → "Gesundheit ist
 * unser Antrieb" about-block with strengths → brand partners → map
 * with contact details (reused from home).
 */
"use client";
import type { Route } from "./+types/jobs";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { getJobsContent } from "~/content/pages/jobs";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/jobs/jobs-hero.jpg";

export function meta(_: Route.MetaArgs) {
  const c = getJobsContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function Jobs() {
  const locale = useLocale();
  const c = getJobsContent(locale);

  return (
    <>
      {/* Hero — split layout with workshop photo */}
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
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-card bg-muted shadow-soft relative mx-auto aspect-square w-full max-w-lg overflow-hidden">
                <img
                  src={heroImageUrl}
                  alt="Sanimotion-Werkstatt in Berlin"
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

      {/* Intro story — two stacked blocks, no top heading (avoids
          repeating the hero copy). */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch] space-y-12">
            {c.story.blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.05}>
                <h2 className="text-heading-lg text-ink font-semibold tracking-tight">
                  {block.title}
                </h2>
                <p className="text-body-lg text-ink-muted mt-4">{block.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Openings */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <Eyebrow>{c.openings.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-lg" className="mt-6 max-w-[24ch]">
              {c.openings.title}
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:mt-16">
            {c.openings.items.map((job, i) => (
              <Reveal
                key={job.title}
                delay={i * 0.05}
                as="article"
                className="border-hairline bg-surface rounded-card group border p-8 lg:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
                  <div className="lg:col-span-8">
                    <div className="text-caption text-ink-subtle flex flex-wrap items-center gap-x-4 gap-y-1 font-mono tracking-widest uppercase">
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={12} aria-hidden /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Briefcase size={12} aria-hidden /> {job.type}
                      </span>
                    </div>
                    <h3 className="text-display-md text-ink mt-4 font-semibold tracking-tight">
                      {job.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4 lg:justify-self-end">
                    <Button href={job.href} size="lg">
                      {job.ctaLabel}
                      <ArrowUpRight
                        size={18}
                        aria-hidden
                        className="ease-apple transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* About — Gesundheit ist unser Antrieb + strengths */}
      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>{c.about.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.about.title}
                </Heading>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="text-body-lg text-ink-muted max-w-[60ch]">
                  {c.about.body}
                </p>
              </Reveal>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {c.about.strengths.map((s, i) => (
                  <Reveal
                    key={s.label}
                    delay={0.1 + i * 0.04}
                    className="border-hairline bg-surface rounded-card flex items-center gap-4 border p-5"
                  >
                    <div className="bg-muted text-ink rounded-card inline-flex size-10 shrink-0 items-center justify-center">
                      <Icon name={s.icon} size={18} />
                    </div>
                    <span className="text-body-md text-ink font-medium">
                      {s.label}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}

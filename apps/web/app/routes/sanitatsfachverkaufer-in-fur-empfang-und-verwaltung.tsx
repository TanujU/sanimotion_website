/*
 * /sanitatsfachverkaufer-in-fur-empfang-und-verwaltung —
 * Detail page for the open Sanitätsfachverkäufer role.
 *
 * Mirrors the live job posting on sanimotion.com: hero with badges and
 * a back-link → two-paragraph intro → three bullet sections (Aufgaben /
 * Profil / Wir bieten) → application card with mailto CTA.
 */
"use client";
import type { Route } from "./+types/sanitatsfachverkaufer-in-fur-empfang-und-verwaltung";
import { ArrowLeft, Mail, Check, MapPin, Briefcase, Calendar } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import { Reveal } from "~/components/primitives/Reveal";
import { SmartLink } from "~/components/primitives/SmartLink";
import {
  getSanitatsfachverkauferContent,
  APPLY_MAIL_HREF,
} from "~/content/pages/sanitatsfachverkaufer";
import { useLocale } from "~/i18n/locale";

export function meta(_: Route.MetaArgs) {
  const c = getSanitatsfachverkauferContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

const BADGE_ICONS = [Briefcase, MapPin, Calendar];

export default function SanitatsfachverkauferRole() {
  const locale = useLocale();
  const c = getSanitatsfachverkauferContent(locale);

  return (
    <>
      {/* Hero */}
      <section
        className="bg-canvas relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16"
        aria-label={c.hero.eyebrow}
      >
        <Container>
          <SmartLink
            href={c.hero.backHref}
            className="text-caption text-ink-subtle hover:text-ink duration-fast inline-flex items-center gap-2 font-mono tracking-widest uppercase transition-colors"
          >
            <ArrowLeft size={14} aria-hidden /> {c.hero.backLabel}
          </SmartLink>

          <div className="mt-8 max-w-[60ch]">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <Heading as="h1" size="display-xl" className="mt-6 max-w-[20ch]">
              {c.hero.titleLead}
              <br />
              <span className="text-ink-muted">{c.hero.titleTail}</span>
            </Heading>

            <ul className="mt-8 flex flex-wrap gap-3">
              {c.hero.badges.map((badge, i) => {
                const BadgeIcon = BADGE_ICONS[i % BADGE_ICONS.length];
                return (
                  <li
                    key={badge}
                    className="border-hairline bg-surface text-caption text-ink inline-flex items-center gap-2 rounded-pill border px-4 py-2 font-mono tracking-widest uppercase"
                  >
                    <BadgeIcon size={12} aria-hidden /> {badge}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      {/* Intro paragraphs */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch] space-y-6">
            {c.intro.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-body-lg text-ink-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sections — Aufgaben / Profil / Wir bieten */}
      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {c.sections.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.05}
                className="border-hairline bg-surface rounded-card border p-8 lg:p-10"
              >
                <h2 className="text-heading-lg text-ink font-semibold tracking-tight">
                  {s.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-body-md text-ink-muted flex items-start gap-3"
                    >
                      <Check
                        size={18}
                        className="text-ink mt-0.5 shrink-0"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Apply */}
      <Section tone="canvas">
        <Container>
          <Reveal className="border-hairline bg-surface rounded-card border p-10 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-8">
                <Eyebrow>{c.apply.eyebrow}</Eyebrow>
                <Heading as="h2" size="display-md" className="mt-6 max-w-[24ch]">
                  {c.apply.title}
                </Heading>
                <p className="text-body-lg text-ink-muted mt-6 max-w-[60ch]">
                  {c.apply.body}
                </p>
                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div>
                    <dt className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                      Ansprechpartnerin
                    </dt>
                    <dd className="text-body-md text-ink mt-2 font-medium">
                      {c.apply.contactPerson}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-caption text-ink-subtle font-mono tracking-widest uppercase">
                      E-Mail
                    </dt>
                    <dd className="text-body-md text-ink mt-2 font-medium">
                      <SmartLink
                        href={`mailto:${c.apply.email}`}
                        className="hover:text-accent duration-fast inline-flex items-center gap-2 transition-colors"
                      >
                        <Mail size={16} aria-hidden /> {c.apply.email}
                      </SmartLink>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="lg:col-span-4 lg:justify-self-end">
                <Button href={APPLY_MAIL_HREF} size="lg">
                  {c.apply.ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

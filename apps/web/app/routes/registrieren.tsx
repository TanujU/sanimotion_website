/*
 * /registrieren — Account creation page.
 *
 * Hero → AuthForm (register mode). Same layout shape as /anmelden.
 */
"use client";
import type { Route } from "./+types/registrieren";
import { buildMeta } from "~/lib/seo";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { AuthForm } from "~/components/forms/AuthForm";
import { getRegisterContent } from "~/content/pages/auth";
import { useLocale } from "~/i18n/locale";

export function meta() {
  const c = getRegisterContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/registrieren" });
}

export default function Registrieren() {
  const locale = useLocale();
  const c = getRegisterContent(locale);

  return (
    <>
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

      <Section tone="muted">
        <Container>
          <div className="mx-auto max-w-[640px]">
            <Reveal>
              <AuthForm mode="register" content={c} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

/*
 * /anmelden — Sign-in page.
 *
 * Hero → AuthForm. Layout mirrors /kontakt (hero + form column) so it
 * feels native to the site rather than a bolt-on auth screen.
 */
"use client";
import type { Route } from "./+types/anmelden";
import { buildMeta } from "~/lib/seo";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { AuthForm } from "~/components/forms/AuthForm";
import { getLoginContent } from "~/content/pages/auth";
import { useLocale } from "~/i18n/locale";

export function meta() {
  const c = getLoginContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/anmelden" });
}

export default function Anmelden() {
  const locale = useLocale();
  const c = getLoginContent(locale);

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
              <AuthForm mode="login" content={c} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}

/*
 * /kontakt — Contact page.
 *
 * Hero → channel cards (phone, email, hours) → ContactForm. The form's
 * default intent is read from the URL hash so footer / CTA links like
 * /kontakt#rezept and /kontakt#hausbesuch land on the right radio chip.
 */
"use client";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import type { Route } from "./+types/kontakt";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { Button } from "~/components/primitives/Button";
import { ContactForm } from "~/components/forms/ContactForm";
import { getKontaktContent } from "~/content/pages/kontakt";
import { useLocale } from "~/i18n/locale";

export function meta(_: Route.MetaArgs) {
  const c = getKontaktContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

const HASH_TO_INTENT: Record<string, string> = {
  rezept: "rezept",
  hausbesuch: "hausbesuch",
  termin: "termin",
};

export default function Kontakt() {
  const locale = useLocale();
  const c = getKontaktContent(locale);
  const location = useLocation();
  const [defaultIntent, setDefaultIntent] = useState<string | undefined>();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    setDefaultIntent(HASH_TO_INTENT[hash]);
    if (hash === "form") {
      // Allow scroll restoration to settle, then scroll to form.
      const el = document.getElementById("form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      {/* Hero */}
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

      {/* Channels */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <Eyebrow>{c.channels.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 max-w-[24ch]">
              {c.channels.title}
            </Heading>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {c.channels.items.map((item, i) => {
              const head = (
                <>
                  <div className="bg-canvas text-ink rounded-card inline-flex size-12 items-center justify-center">
                    <Icon name={item.icon} size={22} />
                  </div>
                  <h3 className="text-caption text-ink-subtle mt-6 font-mono tracking-widest uppercase">
                    {item.label}
                  </h3>
                  <p className="text-heading-md text-ink mt-2 font-medium tabular-nums">
                    {item.value}
                  </p>
                </>
              );
              return (
                <Reveal
                  key={item.label}
                  delay={i * 0.05}
                  className="border-hairline bg-surface rounded-card border p-8"
                >
                  {item.href && !item.cta ? (
                    <SmartLink
                      href={item.href}
                      className="hover:text-ink block"
                    >
                      {head}
                    </SmartLink>
                  ) : (
                    head
                  )}
                  {item.cta && (
                    <div className="mt-6">
                      <Button
                        href={item.cta.href}
                        variant="secondary"
                        size="sm"
                      >
                        {item.cta.label}
                      </Button>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Form */}
      <Section tone="canvas" id="form">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>{c.form.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.form.title}
                </Heading>
                <p className="text-body-lg text-ink-muted mt-6 max-w-[40ch]">
                  {c.form.lede}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <ContactForm content={c.form} defaultIntent={defaultIntent} />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

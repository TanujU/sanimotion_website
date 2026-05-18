"use client";
import type { Route } from "./+types/kontakt";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { Button } from "~/components/primitives/Button";
import { getKontaktContent } from "~/content/pages/kontakt";
import { useLocale } from "~/i18n/locale";

export function meta(_: Route.MetaArgs) {
  const c = getKontaktContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function Kontakt() {
  const locale = useLocale();
  const c = getKontaktContent(locale);

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

    </>
  );
}

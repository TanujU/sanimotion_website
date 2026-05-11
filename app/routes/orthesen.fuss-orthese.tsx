/*
 * /orthesen/fuss-orthese — Foot orthosis sub-page.
 *
 * Mirrors sanimotion.com/fuss-orthese-berlin/: hero (split with photo) →
 * Vorkonfektioniert/Maßgefertigt intro → Sonderanfertigung block with
 * detail photo → 6 service highlights → Krankenkasse → Persönliche
 * Beratung → FAQ accordion → contact.
 */
"use client";
import type { Route } from "./+types/orthesen.fuss-orthese";
import { Phone, Mail } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { AccordionItem } from "~/components/sections/Accordion";
import { getFussOrtheseContent } from "~/content/pages/fuss-orthese";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/fuss-orthese/fuss-orthese-hero.png";
import detailImageUrl from "~/images/fuss-orthese/fuss-orthese-detail.png";

export function meta(_: Route.MetaArgs) {
  const c = getFussOrtheseContent("de");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function FussOrthese() {
  const locale = useLocale();
  const c = getFussOrtheseContent(locale);

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
                  alt="Fußorthese aus dem Sanimotion Sanitätshaus Berlin"
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
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <p className="text-body-lg text-ink-muted">{c.hero.intro}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Vorkonfektioniert + maßgefertigt — overview */}
      <Section tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>{c.varianten.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[18ch]"
                >
                  {c.varianten.title}
                </Heading>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6">
                {c.varianten.paragraphs.map((p, i) => (
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

      {/* Sonderanfertigung — split with detail photo */}
      <Section tone="canvas">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-card bg-muted shadow-soft overflow-hidden">
                  <img
                    src={detailImageUrl}
                    alt="Maßgefertigte Fußorthese aus der Sanimotion-Werkstatt in Berlin-Kreuzberg"
                    className="ease-apple h-auto w-full object-contain transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>{c.massanfertigung.eyebrow}</Eyebrow>
                <Heading
                  as="h2"
                  size="display-md"
                  className="mt-6 max-w-[20ch]"
                >
                  {c.massanfertigung.title}
                </Heading>
              </Reveal>
              <div className="mt-8 space-y-6">
                {c.massanfertigung.paragraphs.map((p, i) => (
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

      {/* Persönliche Beratung */}
      <Section tone="muted">
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

      {/* FAQ */}
      <Section tone="canvas">
        <Container>
          <Reveal className="mx-auto max-w-[50ch] text-center">
            <Eyebrow>{c.faq.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {c.faq.title}
            </Heading>
          </Reveal>
          <div className="mx-auto mt-12 max-w-[70ch] lg:mt-16">
            {c.faq.items.map((item) => (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact intro */}
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

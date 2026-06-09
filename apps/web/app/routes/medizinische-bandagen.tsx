/*
 * /medizinische-bandagen — Medical bandages sub-page.
 *
 * Mirrors sanimotion.com/medizinische-bandagen-berlin/: hero (split with
 * photo) → product list → service paragraphs → highlights → Schutz- und
 * Stützfunktion paragraphs → detail sections per body region → contact.
 */
"use client";
import { useState } from "react";
import type { Route } from "./+types/medizinische-bandagen";
import { buildMeta, buildBreadcrumbSchema, buildMedicalDeviceSchema } from "~/lib/seo";
import { JsonLd } from "~/components/seo/JsonLd";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { Phone, Mail, Check, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import { cn } from "~/lib/cn";
import { easeApple } from "~/lib/motion";
import { getMedizinischeBandagenContent } from "~/content/pages/medizinische-bandagen";
import { useLocale } from "~/i18n/locale";
import heroImageUrl from "~/images/bandagen/medizinische-bandagen-hero.png";

function DetailAccordion({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="border-hairline border-b last:border-b-0"
    >
      <summary
        className={cn(
          "flex cursor-pointer list-none items-center justify-between gap-6 py-8",
          "text-display-md text-ink font-medium tracking-tight",
          "duration-fast hover:text-ink/80 transition-colors",
          "[&::-webkit-details-marker]:hidden",
        )}
      >
        <span>{title}</span>
        <ChevronDown
          size={20}
          aria-hidden
          className={cn(
            "text-ink-subtle ease-apple shrink-0 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeApple }}
            className="overflow-hidden"
          >
            <div className="max-w-[70ch] space-y-5 pb-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-body-lg text-ink-muted">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}

export function meta() {
  const c = getMedizinischeBandagenContent("de");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/medizinische-bandagen" });
}

export default function MedizinischeBandagen() {
  const locale = useLocale();
  const c = getMedizinischeBandagenContent(locale);

  return (
    <>
      <JsonLd schema={buildBreadcrumbSchema([
        { name: "Startseite", path: "/" },
        { name: "Produkte", path: "/#produkte" },
        { name: "Medizinische Bandagen", path: "/medizinische-bandagen" },
      ])} />
      <JsonLd schema={buildMedicalDeviceSchema({ name: c.meta.title, description: c.meta.description, path: "/medizinische-bandagen" })} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Produkte", path: "/#produkte" },
        { name: "Medizinische Bandagen", path: "/medizinische-bandagen" },
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
                  alt="Medizinische Bandagen aus dem Sanimotion Sanitätshaus Berlin"
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

      {/* Product list with intro */}
      <Section tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <Eyebrow>{c.products.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {c.products.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8">
              {c.products.intro}
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {c.products.items.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 0.03}
                className="border-hairline bg-surface rounded-card flex items-center gap-3 border p-4"
              >
                <Check
                  size={18}
                  strokeWidth={1.75}
                  aria-hidden
                  className="text-accent shrink-0"
                />
                <span className="text-body-md text-ink font-medium">
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Vermessung, Auswahl und Anprobe */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.service.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.service.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.service.paragraphs.map((p, i) => (
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
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
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

      {/* Schutz- und Stützfunktion */}
      <Section tone="canvas">
        <Container>
          <div className="mx-auto max-w-[60ch]">
            <Reveal>
              <Eyebrow>{c.funktion.eyebrow}</Eyebrow>
              <Heading as="h2" size="display-md" className="mt-6">
                {c.funktion.title}
              </Heading>
            </Reveal>
            <div className="mt-10 space-y-6">
              {c.funktion.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 + i * 0.05}>
                  <p className="text-body-lg text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Detail sections per body region */}
      <Section tone="muted">
        <Container>
          <Reveal className="mx-auto max-w-[60ch] text-center">
            <Eyebrow>{c.details.eyebrow}</Eyebrow>
            <Heading as="h2" size="display-md" className="mt-6 text-balance">
              {c.details.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8">
              {c.details.intro}
            </p>
          </Reveal>
          <div className="mx-auto mt-12 max-w-[70ch] lg:mt-16">
            {c.details.sections.map((s) => (
              <DetailAccordion
                key={s.title}
                title={s.title}
                paragraphs={s.paragraphs}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
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

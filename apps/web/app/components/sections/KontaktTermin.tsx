/*
 * KontaktTermin — final contact + map block.
 *
 * What: Two-column layout on lg+ — contact details (phone, email, hours,
 * primary + secondary CTAs) on the left, an embedded OpenStreetMap on
 * the right. Stacks on mobile (contact first, map second).
 *
 * Why: Sanimotion's homepage on the live site exposes a Termin / Doctolib
 * widget at the bottom. We approximate the same affordance with explicit
 * contact details and a visible map so visitors can choose between
 * calling, emailing, booking online, or simply seeing where to walk in.
 *
 * Map: Google Maps iframe embed. The mapEmbedUrl is supplied by the
 * content module so the source can be swapped without touching this
 * component.
 */
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import { MapEmbed } from "~/components/sections/MapEmbed";
import type { ContactContent } from "~/schemas/content";
import doctolibLogo from "~/images/brand/doctolib-white.png";

type KontaktTerminProps = {
  content: ContactContent;
};

export function KontaktTermin({ content }: KontaktTerminProps) {
  return (
    <Section tone="canvas" id="kontakt">
      <Container>
        {/* items-stretch on lg so the map column matches the contact
            column's intrinsic height — fixes the "map floats high while
            the contact list extends below" misalignment. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-x-16">
          {/* Contact column — fills 5/12 cols on lg. */}
          <Reveal className="lg:col-span-5">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            {/* heading-lg (24–32 px) instead of display-md (32–56 px):
                the contact column is only 5/12 of the grid, so display-md
                forced "Sprechen Sie mit uns." to overflow into the map
                column at lg breakpoints. heading-lg fits comfortably in
                a single line without wrapping. */}
            <Heading
              as="h2"
              size="heading-lg"
              className="mt-6 sm:whitespace-nowrap"
            >
              {content.title}
            </Heading>
            <p className="text-body-lg text-ink-muted mt-8 max-w-[48ch]">
              {content.lede}
            </p>

            {/* Contact rows — phone / email / hours. Phone + email are
                semantic links so they "just work" on mobile devices.
                Optional address row at the top, present on per-location
                pages. Hours can be a single string or a list — when a
                list, each line stacks vertically. */}
            <ul className="mt-10 space-y-4">
              {content.address && (
                <li className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden
                    className="text-accent mt-1 shrink-0"
                  />
                  <span className="text-body-lg text-ink-muted not-italic">
                    {content.address.line1}
                    <br />
                    {content.address.line2}
                  </span>
                </li>
              )}
              <li className="flex items-center gap-4">
                <Phone
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden
                  className="text-accent shrink-0"
                />
                <SmartLink
                  href={content.phone.href}
                  className="text-body-lg text-ink duration-fast hover:text-accent font-medium transition-colors"
                >
                  {content.phone.label}
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
                  href={content.email.href}
                  className="text-body-lg text-ink duration-fast hover:text-accent font-medium transition-colors"
                >
                  {content.email.label}
                </SmartLink>
              </li>
              <li className="flex items-start gap-4">
                <Clock
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden
                  className="text-accent mt-1 shrink-0"
                />
                {Array.isArray(content.hours) ? (
                  <ul className="text-body-lg text-ink-muted space-y-1">
                    {content.hours.map((row) => (
                      <li key={row}>{row}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-body-lg text-ink-muted">
                    {content.hours}
                  </span>
                )}
              </li>
            </ul>

            {/* Primary CTA — Doctolib appointment booking. */}
            <div className="mt-10">
              <Button
                href={content.primaryCta.href}
                size="lg"
                aria-label={content.primaryCta.ariaLabel}
              >
                {content.primaryCta.label}
                <img
                  src={doctolibLogo}
                  alt="Doctolib"
                  className="ml-1 h-5 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Button>
            </div>
          </Reveal>

          {/* Map column — fills 7/12 cols on lg. lg:self-stretch lets the
              outer Reveal share the row's full height; the inner box is
              h-full so the iframe fills the column instead of relying on
              an aspect-ratio (which left dead space below the contact
              list). On mobile we keep an aspect-ratio so the map doesn't
              collapse. */}
          <Reveal delay={0.08} className="lg:col-span-7 lg:self-stretch">
            <div className="flex h-full flex-col gap-4">
              <div className="border-hairline bg-muted rounded-card relative min-h-[24rem] flex-1 overflow-hidden border">
                <MapEmbed
                  embedUrl={content.mapEmbedUrl}
                  title="Karte: Sanimotion- und Meisterschuh-Standorte in Berlin"
                  routeHref={content.mapHref}
                  address={
                    content.address
                      ? {
                          line1: content.address.line1,
                          line2: content.address.line2,
                        }
                      : undefined
                  }
                />
              </div>
              {/* Location legend — lists all six Sanimotion + partner
                  Meisterschuh stores so the map's pins are unambiguous.
                  Hidden on per-location pages where the map is focused
                  on a single store. */}
              {content.showLegend !== false && (
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-caption text-ink-muted font-mono tracking-wide">
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#dc2626]" />
                  Sanimotion · Berlin-Kreuzberg
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#dc2626]" />
                  Sanimotion · Berlin-Spandau
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#dc2626]" />
                  Sanimotion · Berlin-Zehlendorf
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#dc2626]" />
                  Sanimotion · Königs Wusterhausen
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#b91c1c]" />
                  Meisterschuh · Westend
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-[#b91c1c]" />
                  Meisterschuh · Kreuzberg
                </li>
              </ul>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

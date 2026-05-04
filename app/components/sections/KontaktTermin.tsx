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
 * Privacy: the map is an OpenStreetMap iframe — no Google JS, no cookies,
 * no consent banner needed (per Locked Decision S11).
 */
import { Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { ContactContent } from "~/schemas/content";

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
                semantic links so they "just work" on mobile devices. */}
            <ul className="mt-10 space-y-4">
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
              <li className="flex items-center gap-4">
                <Clock
                  size={20}
                  strokeWidth={1.5}
                  aria-hidden
                  className="text-accent shrink-0"
                />
                <span className="text-body-lg text-ink-muted">
                  {content.hours}
                </span>
              </li>
            </ul>

            {/* CTAs — primary first, secondary ghost button second. */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                href={content.primaryCta.href}
                size="lg"
                aria-label={content.primaryCta.ariaLabel}
              >
                {content.primaryCta.label}
              </Button>
              {content.secondaryCta && (
                <Button
                  href={content.secondaryCta.href}
                  size="lg"
                  variant="secondary"
                >
                  {content.secondaryCta.label}
                </Button>
              )}
            </div>
          </Reveal>

          {/* Map column — fills 7/12 cols on lg. lg:self-stretch lets the
              outer Reveal share the row's full height; the inner box is
              h-full so the iframe fills the column instead of relying on
              an aspect-ratio (which left dead space below the contact
              list). On mobile we keep an aspect-ratio so the map doesn't
              collapse. */}
          <Reveal delay={0.08} className="lg:col-span-7 lg:self-stretch">
            <div className="border-hairline bg-muted rounded-card relative h-full min-h-[20rem] overflow-hidden border">
              <iframe
                title="Karte: Sanimotion-Standorte in Berlin und Königs Wusterhausen"
                src={content.mapEmbedUrl}
                // Mobile: aspect-4/3 keeps the box readable. From lg the
                // iframe is positioned absolute so it fills the
                // contact-driven column height.
                className="aspect-4/3 h-full w-full lg:absolute lg:inset-0 lg:aspect-auto"
                loading="lazy"
                // OpenStreetMap embed is sandboxed; allow basic scripting
                // so the tile interactions still work.
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* "Open in OSM" link — discloses the data source per
                  OpenStreetMap's attribution requirement. */}
              <SmartLink
                href={content.mapHref}
                className="rounded-pill bg-canvas/90 text-caption text-ink-muted duration-fast hover:text-ink absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm transition-colors"
              >
                Karte vergrößern
                <ExternalLink size={12} strokeWidth={1.5} aria-hidden />
              </SmartLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

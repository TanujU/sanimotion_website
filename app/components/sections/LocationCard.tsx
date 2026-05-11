/*
 * LocationCard — single Sanimotion store presentation.
 *
 * Two-column layout on lg+: the city name + highlights on the left, the
 * practical info (address, phone, hours, transit) on the right. On mobile
 * everything stacks. Each card is anchorable via its slug so footer
 * links like /standorte#kreuzberg jump to the right card.
 */
"use client";
import { Phone, MapPin, Clock, Navigation, Sparkles } from "lucide-react";
import { Reveal } from "~/components/primitives/Reveal";
import { Button } from "~/components/primitives/Button";
import { SmartLink } from "~/components/primitives/SmartLink";
import type {
  LocationItem,
  StandortePageContent,
} from "~/content/pages/standorte";
import doctolibLogo from "~/images/brand/doctolib-white.png";

type LocationCardProps = {
  item: LocationItem;
  labels: StandortePageContent["labels"];
};

export function LocationCard({ item, labels }: LocationCardProps) {
  return (
    <Reveal
      as="article"
      id={item.slug}
      className="border-hairline bg-surface rounded-card scroll-mt-32 border p-8 lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: city name + highlights */}
        <div className="lg:col-span-5">
          <h3 className="text-display-md text-ink font-semibold tracking-tight">
            {item.name}
          </h3>
          <p className="text-caption text-ink-subtle mt-2 inline-flex items-center gap-2 font-mono tracking-widest uppercase">
            <Sparkles size={12} aria-hidden /> {labels.highlights}
          </p>
          <ul className="text-body-md text-ink-muted mt-4 space-y-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="bg-ink-subtle/40 mt-2.5 inline-block size-1 shrink-0 rounded-full"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: practical info */}
        <div className="lg:col-span-7">
          <dl className="space-y-6">
            <InfoRow icon={<MapPin size={16} aria-hidden />} label={labels.address}>
              <span className="not-italic">
                {item.address.line1}
                <br />
                {item.address.postalCode} {item.address.city}
              </span>
            </InfoRow>

            <InfoRow icon={<Phone size={16} aria-hidden />} label={labels.phone}>
              <SmartLink
                href={item.phone.href}
                className="text-ink hover:text-accent duration-fast tabular-nums transition-colors"
              >
                {item.phone.label}
              </SmartLink>
            </InfoRow>

            <InfoRow icon={<Clock size={16} aria-hidden />} label={labels.hours}>
              <ul className="space-y-1">
                {item.hours.map((h) => (
                  <li key={h.days} className="flex gap-3 tabular-nums">
                    <span className="text-ink-muted w-20 shrink-0">{h.days}</span>
                    <span className="text-ink">{h.time}</span>
                  </li>
                ))}
              </ul>
            </InfoRow>

            <InfoRow
              icon={<Navigation size={16} aria-hidden />}
              label={labels.transit}
            >
              <span>{item.transit}</span>
            </InfoRow>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Button href={item.bookingHref} variant="primary" size="md">
              {labels.bookCta}
              <img
                src={doctolibLogo}
                alt="Doctolib"
                className="ml-1 h-4 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Button>
            <Button href={item.phone.href} variant="secondary" size="md">
              {labels.callCta}
            </Button>
            <Button href={item.mapHref} variant="ghost" size="md">
              {labels.directions} →
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:items-start sm:gap-6">
      <dt className="text-caption text-ink-subtle inline-flex items-center gap-2 font-mono tracking-widest uppercase">
        {icon}
        {label}
      </dt>
      <dd className="text-body-md text-ink-muted">{children}</dd>
    </div>
  );
}

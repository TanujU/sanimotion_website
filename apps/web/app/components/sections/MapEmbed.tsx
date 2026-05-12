/*
 * MapEmbed — 2-Klick-Lösung for Google Maps embeds (GDPR / BFSG).
 *
 * The Google Maps iframe transmits IP and request data to Google as soon as
 * it loads, so it must not be embedded before the user opts in. This wrapper
 * shows a static placeholder with the address + a "Karte anzeigen" button;
 * the iframe is only mounted after the user clicks. Consent persists in
 * localStorage so visitors don't have to re-click on every page.
 */
"use client";
import { useEffect, useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { SmartLink } from "~/components/primitives/SmartLink";

const STORAGE_KEY = "sanimotion.consent.maps";

type MapEmbedProps = {
  embedUrl: string;
  title: string;
  routeHref?: string;
  routeLabel?: string;
  address?: { line1: string; line2?: string };
};

export function MapEmbed({
  embedUrl,
  title,
  routeHref,
  routeLabel = "Karte vergrößern",
  address,
}: MapEmbedProps) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === "1") {
        setAccepted(true);
      }
    } catch {
      /* localStorage may be unavailable (private mode, SSR) — render placeholder */
    }
  }, []);

  const accept = () => {
    setAccepted(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore — consent will simply not persist */
    }
  };

  if (accepted) {
    return (
      <>
        <iframe
          title={title}
          src={embedUrl}
          className="aspect-4/3 h-full w-full lg:absolute lg:inset-0 lg:aspect-auto"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="geolocation"
        />
        {routeHref && (
          <SmartLink
            href={routeHref}
            className="rounded-pill bg-canvas/90 text-caption text-ink-muted duration-fast hover:text-ink absolute right-3 bottom-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm transition-colors"
          >
            {routeLabel}
            <ExternalLink size={12} strokeWidth={1.5} aria-hidden />
          </SmartLink>
        )}
      </>
    );
  }

  return (
    <div className="bg-muted absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
      <MapPin
        size={32}
        strokeWidth={1.5}
        aria-hidden
        className="text-ink-subtle"
      />
      <p className="text-body-md text-ink-muted max-w-[40ch]">
        Aus Datenschutzgründen ist die Karte zunächst deaktiviert. Mit Klick
        auf <span className="text-ink font-medium">„Karte anzeigen“</span> wird
        Google Maps geladen. Dabei können Daten (z.&nbsp;B. Ihre IP-Adresse)
        an Google übertragen werden.
      </p>
      {address && (
        <address className="text-body-md text-ink not-italic">
          {address.line1}
          {address.line2 && (
            <>
              <br />
              {address.line2}
            </>
          )}
        </address>
      )}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={accept}
          className="rounded-pill bg-ink text-canvas text-body-md duration-fast hover:bg-ink/90 inline-flex items-center px-5 py-2.5 font-medium transition-colors"
        >
          Karte anzeigen
        </button>
        {routeHref && (
          <SmartLink
            href={routeHref}
            className="rounded-pill border-hairline text-body-md text-ink duration-fast hover:bg-canvas inline-flex items-center gap-1.5 border bg-transparent px-5 py-2.5 font-medium transition-colors"
          >
            Route planen
            <ExternalLink size={14} strokeWidth={1.5} aria-hidden />
          </SmartLink>
        )}
      </div>
    </div>
  );
}

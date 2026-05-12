/*
 * PartnerStores — quiet "Unser Partner" band (Meisterschuh Berlin).
 *
 * Header (eyebrow + title + body) above 2 storefront cards. Cards are
 * non-interactive (text + photo only) — these are partner stores, not
 * Sanimotion's own, so no deep link.
 *
 * Visually quieter than the main Locations band: tone="canvas",
 * hairline-only borders, no hover affordance.
 */
import { MapPin } from "lucide-react";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import type { PartnerStoresContent } from "~/schemas/content";

import westend from "~/images/meisterschuh/westend.jpg";
import meisterschuhKreuzberg from "~/images/meisterschuh/kreuzberg.jpg";

const IMAGES: Record<string, string> = {
  westend,
  "kreuzberg-meisterschuh": meisterschuhKreuzberg,
};

type PartnerStoresProps = {
  content: PartnerStoresContent;
};

export function PartnerStores({ content }: PartnerStoresProps) {
  return (
    <Section tone="canvas">
      <Container>
        <Reveal className="mx-auto max-w-[60ch] text-center">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading
            as="h2"
            size="display-md"
            className="mx-auto mt-6 max-w-[24ch] text-balance"
          >
            {content.title}
          </Heading>
          <p className="text-body-lg text-ink-muted mx-auto mt-6 max-w-[60ch]">
            {content.body}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {content.stores.map((store, i) => {
            const img = IMAGES[store.slug];
            return (
              <Reveal
                as="article"
                key={store.slug}
                delay={i * 0.05}
                className="group border-hairline rounded-card hover:shadow-soft ease-apple overflow-hidden border transition-all hover:-translate-y-1"
              >
                <div className="bg-muted relative aspect-[3/2] overflow-hidden">
                  {img && (
                    <img
                      src={img}
                      alt={`Meisterschuh ${store.name}`}
                      width={300}
                      height={200}
                      className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <div className="bg-surface p-5 lg:p-6">
                  <h3 className="text-heading-md text-ink font-semibold tracking-tight">
                    Meisterschuh · {store.name}
                  </h3>
                  <p className="text-body-md text-ink-muted mt-3 inline-flex items-start gap-2">
                    <MapPin
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden
                      className="text-ink-subtle mt-1 shrink-0"
                    />
                    <span>
                      {store.address}
                      <br />
                      {store.city}
                    </span>
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

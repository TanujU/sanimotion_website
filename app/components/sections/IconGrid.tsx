/*
 * IconGrid — product/category card grid.
 *
 * Apple-style card: a product photo on a soft-tinted surface at the top,
 * then icon + title + description below. The image is matched against
 * the item's href anchor (e.g. /produkte#einlagen → einlagen.png) so
 * the content schema stays a pure-text contract; image-mapping is the
 * component's concern.
 *
 * On the homepage this renders six product categories. The component
 * stays generic enough to power any /leistungen-style grid later.
 */
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Section } from "~/components/primitives/Section";
import { Reveal } from "~/components/primitives/Reveal";
import { Icon } from "~/components/primitives/Icon";
import { SmartLink } from "~/components/primitives/SmartLink";
import type { IconGridContent } from "~/schemas/content";
import { cn } from "~/lib/cn";

// Hero images sourced from each product detail page so the teaser tile
// matches what visitors see at the top of the destination page.
import einlagen from "~/images/einlagen/einlagen-teaser.png";
import schuhe from "~/images/schuhe-detail/schuhe-hero.jpeg";
import kompression from "~/images/kompressionsstruempfe/kompressionsstruempfe-hero.png";
import orthesen from "~/images/orthesen/orthesen-hero.png";
import prothesen from "~/images/prothesen/prothesen-hero.png";
import bandagen from "~/images/bandagen/medizinische-bandagen-hero.png";
import reha from "~/images/reha-technik/reha-technik-hero.png";
import skoliose from "~/images/skoliose-korsett/skoliose-korsett-hero.gif";

// Image key → product image. Keys are short slugs shared with
// content/pages/produkte.ts and the dedicated detail routes.
const PRODUCT_IMAGES: Record<string, string> = {
  einlagen,
  schuhe,
  kompression,
  orthesen,
  prothesen,
  bandagen,
  reha,
  skoliose,
};

// Map dedicated detail-page paths → image key. Lets the home Produkte
// teaser link straight to the detail page (matching the navbar) while
// still resolving the right photo.
const PATH_TO_IMAGE_KEY: Record<string, string> = {
  "/orthopaedische-einlagen": "einlagen",
  "/orthopaedische-schuhe": "schuhe",
  "/kompressionsstruempfe": "kompression",
  "/orthesen": "orthesen",
  "/prothesen": "prothesen",
  "/medizinische-bandagen": "bandagen",
  "/reha-technik": "reha",
  "/skoliose-korsett": "skoliose",
};

// Resolve an image key from any supported href shape:
//   "/produkte#einlagen"      → "einlagen" (anchor)
//   "/orthopaedische-einlagen" → "einlagen" (dedicated path)
function imageKeyOf(href: string | undefined): string | undefined {
  if (!href) return undefined;
  const hashAt = href.lastIndexOf("#");
  if (hashAt >= 0) return href.slice(hashAt + 1);
  const pathOnly = href.split("?")[0];
  return PATH_TO_IMAGE_KEY[pathOnly];
}

type IconGridProps = {
  content: IconGridContent;
  // DOM id for in-page anchors (e.g. /#produkte from the navbar).
  id?: string;
};

export function IconGrid({ content, id }: IconGridProps) {
  const lgCols =
    content.items.length % 4 === 0
      ? "lg:grid-cols-4"
      : content.items.length % 3 === 0
        ? "lg:grid-cols-3"
        : "lg:grid-cols-3";

  return (
    <Section tone="canvas">
      <Container>
        <Reveal
          id={id}
          className="mx-auto max-w-[60ch] scroll-mt-24 text-center lg:scroll-mt-28"
        >
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading as="h2" size="display-md" className="mt-6 text-balance">
            {content.title}
          </Heading>
        </Reveal>

        <ul
          className={cn(
            "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-24 lg:gap-8",
            lgCols,
          )}
        >
          {content.items.map((item, i) => {
            const image = PRODUCT_IMAGES[imageKeyOf(item.href) ?? ""];

            const body = (
              <article className="group border-hairline bg-surface rounded-card hover:border-ink/20 flex h-full flex-col overflow-hidden border transition-colors">
                {/* Image plate — full-bleed hero photo from the detail page. */}
                <div className="bg-muted relative aspect-square overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      aria-hidden
                      className="ease-apple absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        name={item.icon}
                        size={40}
                        className="text-ink-subtle"
                      />
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon
                      name={item.icon}
                      size={18}
                      className="text-ink-subtle group-hover:text-ink duration-base shrink-0 transition-colors"
                    />
                    <h3 className="text-heading-md text-ink min-w-0 font-semibold tracking-tight break-words hyphens-auto">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-body-md text-ink-muted mt-3 flex-1">
                    {item.description}
                  </p>
                </div>
              </article>
            );

            return (
              <Reveal as="li" key={item.title} delay={i * 0.05}>
                {item.href ? (
                  <SmartLink href={item.href} className="block h-full">
                    {body}
                  </SmartLink>
                ) : (
                  body
                )}
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

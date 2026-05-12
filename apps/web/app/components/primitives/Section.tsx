/*
 * Section — page-level vertical rhythm + tonal background.
 *
 * What: Wraps a page block in a <section> with the standard vertical padding
 * (py-20 mobile → py-28 desktop) and an optional `tone` background.
 *
 * Why: Every section needs the same vertical rhythm. Hardcoding it once
 * keeps every page in sync. Padding intentionally tighter than Apple's
 * roomiest (py-48) — closer to Qonto's calmer-but-denser cadence so the
 * page feels continuous rather than block-by-block.
 */
import type { ReactNode } from "react";
import { cn } from "~/lib/cn";

type Tone = "canvas" | "muted" | "surface" | "inverse";

type SectionProps = {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  // Reduce vertical padding for compact bands (e.g. logo wall, CTA strip).
  compact?: boolean;
  // Used for in-page anchors (e.g. /leistungen#data-engineering).
  id?: string;
  // ARIA label or labelledby for sections without a visible heading.
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

const toneClass: Record<Tone, string> = {
  canvas: "bg-canvas text-ink",
  muted: "bg-muted text-ink",
  surface: "bg-surface text-ink",
  // Inverse — used for the closing CTA band. Dark ink background, light text.
  inverse: "bg-ink text-canvas",
};

export function Section({
  children,
  className,
  tone = "canvas",
  compact = false,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn(
        toneClass[tone],
        compact ? "py-12 lg:py-20" : "py-20 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

/*
 * Eyebrow — small uppercase mono caption above section headings.
 *
 * What: A short label rendered in the mono font, in subtle ink, with wide
 * tracking and uppercase transform. Sits above the section title.
 *
 * Why: Apple-style hierarchy uses a small caption to introduce a section's
 * topic without competing with the headline for visual weight. Centralizing
 * the look keeps every section consistent.
 */
import type { ReactNode } from "react";
import { cn } from "~/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  // When the eyebrow sits on an inverse-tone section, switch to a lighter ink.
  invert?: boolean;
};

export function Eyebrow({ children, className, invert = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-caption font-mono tracking-widest uppercase",
        invert ? "text-canvas/60" : "text-ink-subtle",
        className,
      )}
    >
      {children}
    </p>
  );
}

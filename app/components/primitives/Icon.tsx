/*
 * Icon — Lucide wrapper that resolves icon names from content.
 *
 * What: Looks up a Lucide icon by name (a string from a content module)
 * and renders it with consistent default sizing/stroke. Falls back to a
 * neutral placeholder if the name is unknown — better than crashing the
 * page on a typo'd icon name.
 *
 * Why: Content modules can't import React components, so they reference
 * icons by string. This primitive bridges string → component without
 * scattering icon imports across every section.
 */
import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "~/lib/cn";

type IconProps = {
  name: string;
  className?: string;
  // Render-size in px. Defaults align with Apple-feel (subtle, not loud).
  size?: number;
  "aria-hidden"?: boolean;
};

export function Icon({
  name,
  className,
  size = 24,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  // Lucide's namespace export is typed as Record<string, LucideIcon>; we
  // narrow with a runtime check + fallback so a typo in a content module
  // never breaks the page.
  const Component = (Lucide as unknown as Record<string, LucideIcon>)[name];
  const Resolved = Component ?? Lucide.Square;

  return (
    <Resolved
      width={size}
      height={size}
      strokeWidth={1.5}
      className={cn("shrink-0", className)}
      aria-hidden={ariaHidden}
    />
  );
}

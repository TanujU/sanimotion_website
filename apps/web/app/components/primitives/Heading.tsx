/*
 * Heading — typed wrapper that maps semantic level + visual size.
 *
 * What: Lets the caller pick the HTML tag (`as`) independently from the
 * visual scale (`size`). Defaults to a tight letter-spacing and the
 * primary ink color.
 *
 * Why: Document outline and visual hierarchy are different concerns. An
 * <h1> on a sub-page might want display-md, not display-xl — and a small
 * heading inside a card should still be an <h3> for SEO/a11y.
 */
import type { ReactNode } from "react";
import { cn } from "~/lib/cn";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingSize =
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "heading-lg"
  | "heading-md";

type HeadingProps = {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
  id?: string;
};

const sizeClass: Record<HeadingSize, string> = {
  "display-xl": "text-display-xl",
  "display-lg": "text-display-lg",
  "display-md": "text-display-md",
  "heading-lg": "text-heading-lg",
  "heading-md": "text-heading-md",
};

export function Heading({
  as: Tag = "h2",
  size = "display-md",
  children,
  className,
  id,
}: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn("text-ink font-semibold", sizeClass[size], className)}
    >
      {children}
    </Tag>
  );
}

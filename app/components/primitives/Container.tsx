/*
 * Container — width-constrained wrapper.
 *
 * What: Caps inner content at max-w-[1280px] and applies fluid horizontal
 * gutters (px-6 mobile, px-10 large screens). Nothing else.
 *
 * Why: Every section + the navbar + the footer share the same horizontal
 * rhythm. Centralizing the values means we change them in one place if
 * the layout ever shifts.
 */
import type { ReactNode, ElementType } from "react";
import { cn } from "~/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Container({
  as: Tag = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-10", className)}
    >
      {children}
    </Tag>
  );
}

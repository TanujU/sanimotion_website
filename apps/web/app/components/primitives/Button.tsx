/*
 * Button — the single button/CTA primitive.
 *
 * What: Renders either a <button> or, when `href` is provided, a SmartLink
 * styled like a button. Three variants (primary / secondary / ghost) and
 * three sizes (sm / md / lg).
 *
 * Why: A marketing site has many CTAs. Centralizing variants here keeps
 * the visual language consistent and means a future shadcn migration
 * (per plan §C) is a one-file swap.
 */
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "~/lib/cn";
import { SmartLink } from "./SmartLink";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  // When invert is set, the button is rendered for an inverse-tone section
  // (e.g. dark CTA band) — colors flip.
  invert?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  "aria-label"?: string;
  type?: undefined;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-4 text-caption tracking-wide",
  md: "h-11 px-6 text-body-md",
  lg: "h-14 px-8 text-body-lg",
};

const baseClass =
  // Layout: inline-flex centers icon+label cleanly.
  // Motion: subtle background tone shift only — no scale (per §D).
  // Focus: rely on the global :focus-visible outline from globals.css.
  "inline-flex items-center justify-center gap-2 rounded-pill font-medium " +
  "transition-colors duration-base ease-apple " +
  "disabled:pointer-events-none disabled:opacity-50 select-none";

function variantClass(variant: Variant, invert: boolean): string {
  if (invert) {
    // On a dark/inverse section.
    switch (variant) {
      case "primary":
        return "bg-canvas text-ink hover:bg-canvas/90";
      case "secondary":
        return "border border-canvas/30 text-canvas hover:bg-canvas/10";
      case "ghost":
        return "text-canvas hover:bg-canvas/10";
    }
  }
  // Default (on canvas/muted/surface).
  switch (variant) {
    case "primary":
      return "bg-ink text-canvas hover:bg-ink/90";
    case "secondary":
      return "border border-hairline text-ink hover:bg-muted";
    case "ghost":
      return "text-ink hover:bg-muted";
  }
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    invert = false,
    className,
    children,
  } = props;

  const classes = cn(
    baseClass,
    sizeClass[size],
    variantClass(variant, invert),
    className,
  );

  if ("href" in props && props.href) {
    return (
      <SmartLink
        href={props.href}
        className={classes}
        aria-label={props["aria-label"]}
      >
        {children}
      </SmartLink>
    );
  }

  // Button form. Pull off props that don't belong on a <button>.
  const {
    href: _href,
    variant: _v,
    size: _s,
    invert: _i,
    className: _c,
    children: _ch,
    ...buttonRest
  } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

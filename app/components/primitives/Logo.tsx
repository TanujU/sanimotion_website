/*
 * Logo — Sanimotion wordmark/mark.
 *
 * What: Renders the official logo bitmap from app/images/logo.png. The
 * Vite-imported URL is content-hashed at build time so browsers cache
 * it indefinitely.
 *
 * Why: One primitive owns logo placement everywhere (Navbar, Footer,
 * MobileMenu). When the brand ships an SVG, this is the only file that
 * changes — every consumer keeps working.
 *
 * Note: the asset is a light-version logo (intended for canvas/light
 * surfaces). On inverse-tone sections we'd ideally swap to a white
 * version; until that arrives, the `invert` prop applies a CSS
 * brightness filter to approximate it.
 */
import logoUrl from "~/images/logo.png";
import { cn } from "~/lib/cn";

type LogoProps = {
  className?: string;
  // For inverse-tone surfaces (dark CTA band, etc.). Filters the bitmap to
  // a near-white rendering — coarse but acceptable until a true light
  // variant exists.
  invert?: boolean;
  // Accessible label (also used as visible alt-text).
  label?: string;
};

// Native dimensions of the source PNG (400 × 400). Declaring them lets
// the browser reserve the correct box and avoid CLS on first paint.
const NATIVE_W = 400;
const NATIVE_H = 400;

export function Logo({
  className,
  invert = false,
  label = "Sanimotion",
}: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt={label}
      width={NATIVE_W}
      height={NATIVE_H}
      // Default rendered size: 48 × 48 mobile, 56 × 56 from lg. Callers
      // can override via className for an even larger footer mark or a
      // compact treatment elsewhere.
      className={cn(
        "h-12 w-auto select-none lg:h-14",
        // Filter approximates a white rendering on inverse surfaces.
        invert && "brightness-0 invert",
        className,
      )}
      // Logo is in the navbar (always above the fold) — load eagerly so
      // it paints with the rest of the chrome.
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}

/*
 * Shared motion variants and easings (Framer Motion).
 *
 * What: A single source of truth for the entrance/reveal animations used
 * across the site. Mirrors the durations/easings declared as CSS tokens
 * so JS-driven and CSS-driven motion feel identical.
 *
 * Why: Centralizing variants keeps motion consistent (the "Apple feel"
 * comes from a single easing curve applied everywhere) and lets us
 * tune the whole site by editing one file.
 */
import type { Variants } from "framer-motion";

// Out-expo curve — matches --ease-apple in tokens.css.
// Typed as a 4-tuple so framer-motion's Easing union accepts it as a
// cubic-bezier definition.
export const easeApple: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Default reveal: fade + small upward translate. Used by <Reveal>.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeApple },
  },
};

// Container that staggers its children — used for hero entrance and
// any group of items that should reveal in sequence.
export const stagger = (childDelay = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: childDelay,
      delayChildren: 0.05,
    },
  },
});

// Standard viewport config for scroll-triggered reveals.
// `once: true` — animation fires the first time only (no re-triggering).
// `amount: 0.15` — wait until ~15% of the element is in view.
export const inViewOnce = { once: true, amount: 0.15 } as const;

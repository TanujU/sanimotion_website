/*
 * Reveal — scroll-triggered fade + slight upward translate.
 *
 * What: Wraps children in a Framer Motion div that animates from
 * (opacity 0, y 16) to (opacity 1, y 0) the first time it scrolls into
 * the viewport. Honors prefers-reduced-motion via the global CSS guard.
 *
 * Why: Apple-style sections rely on subtle entrance motion to direct
 * attention without distraction. Centralizing the trigger + variants in
 * one primitive keeps motion consistent across every section and
 * prevents copy-pasted IntersectionObserver code.
 *
 * Client-only: framer-motion ships hooks that read window/document, so
 * this file is a "use client" component (RR7 supports the directive
 * via @react-router/dev hydrating it on the client).
 */
"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, inViewOnce } from "~/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  // Optional delay (in seconds) — useful when manually staggering siblings.
  delay?: number;
  // Tag override (defaults to <div>). Accepts any framer-motion-supported tag.
  as?: keyof Pick<typeof motion, "div" | "section" | "article" | "li" | "p">;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...rest
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inViewOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

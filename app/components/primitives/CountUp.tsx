/*
 * CountUp — animates a number from 0 to its final value when scrolled
 * into view.
 *
 * What: Wraps a numeric value in a span that visually counts up over a
 * configurable duration the first time it enters the viewport. Accepts
 * an optional `prefix` and `suffix` so we can render "30+" or "−42 %"
 * idiomatically without parsing strings.
 *
 * Why: A static "30+" feels lifeless on the page; a count-up makes the
 * metric feel earned (Qonto-style numeric reveals). Triggering once via
 * IntersectionObserver — and bailing under prefers-reduced-motion —
 * keeps the effect tasteful rather than gimmicky.
 *
 * Client component: needs window/IntersectionObserver + RAF loop.
 */
"use client";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  // Final integer value displayed once the animation completes.
  value: number;
  // Animation duration in ms.
  duration?: number;
  // Rendered before / after the number. Useful for "+", "%", currency.
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function CountUp({
  value,
  duration = 1200,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honor reduced-motion: skip the animation, jump to final value.
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    // Trigger once via IntersectionObserver — the whole point is the
    // reveal, so we don't need to re-run on subsequent intersections.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || hasRun.current) continue;
          hasRun.current = true;

          // Standard RAF count-up. ease-out via 1 - (1 - t)^3 (cubic) gives
          // a brisk start that calms toward the final value — matches the
          // ease-apple feel used elsewhere.
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

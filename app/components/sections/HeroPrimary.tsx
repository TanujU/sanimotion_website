/*
 * HeroPrimary — split-layout brand hero.
 *
 * What: First section above the fold. Two-column layout on lg+ — text on
 * the left, brand photo on the right. On mobile, text first, image
 * second. Each text piece animates in via a stagger; the image fades up
 * with a soft zoom-out.
 *
 * Why: The Apple-style hero earns its impact from large fluid type +
 * generous whitespace + a single anchoring image. Splitting the layout
 * gives the photo a calm, framed home rather than competing for the
 * same vertical space as the headline.
 */
"use client";
import { motion } from "framer-motion";
import { Container } from "~/components/primitives/Container";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";
import { Button } from "~/components/primitives/Button";
import type { HeroContent } from "~/schemas/content";
import { fadeUp, stagger, easeApple } from "~/lib/motion";
import heroImageUrl from "~/images/sani-1.png";

type HeroPrimaryProps = {
  content: HeroContent;
};

// Native dimensions of sani-1.png (800 × 800) — used for explicit
// width/height attributes so the browser reserves the right box and
// avoids cumulative layout shift on first paint.
const HERO_IMG_W = 800;
const HERO_IMG_H = 800;

export function HeroPrimary({ content }: HeroPrimaryProps) {
  return (
    // Top padding clears the fixed Navbar (h-20 mobile, h-24 lg). Bottom
    // padding is tighter than Section's default so the hero flows into
    // the products band without a dead zone — Qonto-style continuity.
    <section
      className="bg-canvas relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-label="Einleitung"
    >
      {/* Decorative accent gradient — soft Sanimotion-blue blob behind the
          image column. Pure decoration, hidden from assistive tech. The
          low-opacity + heavy blur keeps it subtle (Qonto's pastel-blob
          style). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="rounded-pill bg-accent/10 absolute -top-32 right-[-10%] size-[36rem] blur-3xl lg:size-[44rem]" />
        <div className="rounded-pill bg-accent/5 absolute bottom-[-20%] left-[-10%] size-[28rem] blur-3xl" />
      </div>
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-x-16">
          {/* Text column — fills 7/12 cols on lg, full width on mobile. */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>{content.eyebrow}</Eyebrow>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <Heading as="h1" size="display-xl" className="max-w-[14ch]">
                {content.titleLead}
                <br />
                <span className="text-ink-muted">{content.titleTail}</span>
              </Heading>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-body-lg text-ink-muted mt-8 max-w-[60ch]"
            >
              {content.lede}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Button href={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
              </Button>
              {content.secondaryCta && (
                <Button
                  href={content.secondaryCta.href}
                  variant="ghost"
                  size="lg"
                >
                  {content.secondaryCta.label} →
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Image column — fills 5/12 cols on lg, full width on mobile.
              Soft scale-in on mount, then a gentle continuous float
              (±10 px vertical) so the hero feels alive without ever
              demanding attention. The float is disabled under
              prefers-reduced-motion via the global guard. */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: easeApple, delay: 0.15 },
              scale: { duration: 0.8, ease: easeApple, delay: 0.15 },
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 1,
              },
            }}
            className="lg:col-span-5"
          >
            <div className="rounded-card bg-muted relative overflow-hidden">
              <img
                src={heroImageUrl}
                alt="Persönliche Beratung im Sanimotion-Sanitätshaus"
                width={HERO_IMG_W}
                height={HERO_IMG_H}
                className="h-auto w-full object-cover"
                // Above the fold — load eagerly + flag as high-priority
                // so it shares LCP attention with the headline text.
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

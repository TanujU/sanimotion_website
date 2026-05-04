/*
 * MobileMenu — full-screen overlay nav for screens below lg.
 *
 * What: When the Zustand `mobileMenuOpen` flag is true, renders a
 * fixed full-viewport panel containing oversized nav links and the
 * primary CTA. Locks body scroll while open and closes itself on
 * route change or Escape.
 *
 * Why: Mobile users need large tap targets (we use text-display-md)
 * and a focused, distraction-free menu. Keeping it as a separate
 * component avoids cluttering the Navbar JSX and lets the open/close
 * animation be tuned independently.
 *
 * Client component: needs effect-based scroll lock + key handler.
 */
"use client";
import { useEffect } from "react";
import { useLocation, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "~/lib/cn";
import { site } from "~/content/site";
import { Container } from "~/components/primitives/Container";
import { Button } from "~/components/primitives/Button";
import { useUiStore } from "~/stores/ui";
import { easeApple } from "~/lib/motion";

export function MobileMenu() {
  const open = useUiStore((s) => s.mobileMenuOpen);
  const close = useUiStore((s) => s.closeMobileMenu);
  const location = useLocation();

  // Close on route change — without this, navigating leaves the menu open.
  useEffect(() => {
    if (open) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Lock body scroll while the menu is open (overlay covers the page).
  // Restore on close + on unmount.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape — standard a11y for full-screen overlays.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          // role="dialog" turns this into an a11y dialog so screen readers
          // announce the open/close transition.
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          className={cn(
            "fixed inset-0 z-30 flex flex-col",
            // Pad above the navbar so the close (X) icon stays interactive.
            "bg-canvas px-0 pt-24 pb-12",
            "lg:hidden",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeApple }}
        >
          <Container className="flex flex-1 flex-col justify-between">
            {/* Nav links — text-display-md gives huge tap targets, Apple-feel. */}
            <nav aria-label="Hauptnavigation (mobil)" className="mt-8">
              <ul className="space-y-6">
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.04,
                      duration: 0.4,
                      ease: easeApple,
                    }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          "text-display-md block font-semibold tracking-tight",
                          isActive ? "text-ink" : "text-ink-muted",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Primary CTA pinned to the bottom — thumb-reachable on phones. */}
            <div className="mt-12">
              <Button
                href={site.primaryCta.href}
                size="lg"
                className="w-full"
                aria-label={site.primaryCta.ariaLabel}
              >
                {site.primaryCta.label}
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

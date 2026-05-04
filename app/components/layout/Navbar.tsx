/*
 * Navbar — sticky top navigation.
 *
 * What: Renders brand + primary nav + CTA on lg+, brand + hamburger on
 * smaller screens. Becomes opaque (background + hairline border) once
 * the page has scrolled past 8 px — the Apple-site behavior.
 *
 * Why: A sticky transparent nav over the hero is the strongest "Apple
 * feel" lever in chrome. Tying open/close state to the Zustand store
 * lets the MobileMenu overlay live in a sibling tree without prop
 * drilling.
 *
 * Client component: requires window scroll listener + interactive state.
 */
"use client";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/cn";
import { site } from "~/content/site";
import { Container } from "~/components/primitives/Container";
import { Logo } from "~/components/primitives/Logo";
import { SmartLink } from "~/components/primitives/SmartLink";
import { Button } from "~/components/primitives/Button";
import { useUiStore } from "~/stores/ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = useUiStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useUiStore((s) => s.toggleMobileMenu);

  // Track scroll position with a passive listener — no layout work, no jank.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll(); // run once for initial state on hydration
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "duration-base ease-apple fixed inset-x-0 top-0 z-40 transition-all",
        // After scroll: light blur + hairline border + canvas tint.
        // Before scroll: fully transparent so the hero feels immersive.
        scrolled
          ? "bg-canvas/80 border-hairline border-b backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Brand */}
          <SmartLink
            href="/"
            aria-label={`${site.brand.name} — Startseite`}
            className="rounded-pill -mx-1 px-1"
          >
            <Logo />
          </SmartLink>

          {/* Desktop nav — hidden under lg */}
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "text-body-md duration-fast transition-colors",
                    // Active state shifts to full ink — no underline (Apple style).
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — hidden under lg */}
          <div className="hidden lg:block">
            <Button
              href={site.primaryCta.href}
              size="sm"
              aria-label={site.primaryCta.ariaLabel}
            >
              {site.primaryCta.label}
            </Button>
          </div>

          {/* Mobile hamburger — hidden from lg up */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
            className="rounded-pill text-ink hover:bg-muted inline-flex size-11 items-center justify-center transition-colors lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={1.5} aria-hidden />
            ) : (
              <Menu size={22} strokeWidth={1.5} aria-hidden />
            )}
          </button>
        </div>
      </Container>
    </header>
  );
}

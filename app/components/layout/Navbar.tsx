/*
 * Navbar — sticky top navigation.
 *
 * Renders brand + primary nav + CTA on lg+, brand + hamburger on smaller
 * screens. Becomes opaque (background + hairline border) once the page
 * has scrolled past 8 px — the Apple-site behavior. Locale-aware: nav
 * labels and CTA come from getSite(locale).
 *
 * Client component: window scroll listener + interactive state.
 */
"use client";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "~/lib/cn";
import { getSite } from "~/content/site";
import { useLocale } from "~/i18n/locale";
import { getStrings } from "~/i18n/strings";
import { Container } from "~/components/primitives/Container";
import { Logo } from "~/components/primitives/Logo";
import { SmartLink } from "~/components/primitives/SmartLink";
import { Button } from "~/components/primitives/Button";
import { LocaleSwitcher } from "~/components/primitives/LocaleSwitcher";
import { NavDropdown } from "~/components/layout/NavDropdown";
import { useUiStore } from "~/stores/ui";
import doctolibLogo from "~/images/brand/doctolib-white.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = useUiStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useUiStore((s) => s.toggleMobileMenu);
  const locale = useLocale();
  const site = getSite(locale);
  const strings = getStrings(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "duration-base ease-apple fixed inset-x-0 top-0 z-40 transition-all",
        scrolled
          ? "bg-canvas/80 border-hairline border-b backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between lg:h-24">
          <SmartLink
            href="/"
            aria-label={`${site.brand.name} — ${strings.brandHome}`}
            className="rounded-pill -mx-1 px-1"
          >
            <Logo />
          </SmartLink>

          {/* Desktop nav — hidden under lg.
              Items with a `children` array render as a NavDropdown
              (Apple-style hover panel). Plain items stay as NavLinks. */}
          <nav
            aria-label={strings.primaryNav}
            className="hidden items-center gap-8 lg:flex"
          >
            {site.nav.map((item) =>
              item.children && item.children.length > 0 ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "text-body-lg duration-fast font-semibold transition-colors",
                      isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Desktop right cluster — locale switcher + primary CTA */}
          <div className="hidden items-center gap-6 lg:flex">
            <LocaleSwitcher />
            <Button
              href={site.primaryCta.href}
              size="sm"
              aria-label={site.primaryCta.ariaLabel}
            >
              {site.primaryCta.label}
              <img
                src={doctolibLogo}
                alt="Doctolib"
                className="ml-1 h-4 w-auto"
                loading="eager"
                decoding="async"
              />
            </Button>
          </div>

          {/* Mobile hamburger — hidden from lg up */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? strings.closeMenu : strings.openMenu}
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

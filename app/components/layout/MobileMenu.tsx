/*
 * MobileMenu — full-screen overlay nav for screens below lg.
 *
 * When the Zustand `mobileMenuOpen` flag is true, renders a fixed
 * full-viewport panel with oversized nav links, the primary CTA, and
 * a locale switcher. Locks body scroll while open and closes on route
 * change or Escape.
 *
 * Client component: needs effect-based scroll lock + key handler.
 */
"use client";
import { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "~/lib/cn";
import { getSite } from "~/content/site";
import { useLocale } from "~/i18n/locale";
import { getStrings } from "~/i18n/strings";
import { Container } from "~/components/primitives/Container";
import { Button } from "~/components/primitives/Button";
import { LocaleSwitcher } from "~/components/primitives/LocaleSwitcher";
import { SmartLink } from "~/components/primitives/SmartLink";
import { NavAccount } from "~/components/layout/NavAccount";
import { useUiStore } from "~/stores/ui";
import { easeApple } from "~/lib/motion";
import doctolibLogo from "~/images/brand/doctolib-white.png";
import type { NavChild } from "~/schemas/content";

export function MobileMenu() {
  const open = useUiStore((s) => s.mobileMenuOpen);
  const close = useUiStore((s) => s.closeMobileMenu);
  const location = useLocation();
  const locale = useLocale();
  const site = getSite(locale);
  const strings = getStrings(locale);

  useEffect(() => {
    if (open) close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

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
          role="dialog"
          aria-modal="true"
          aria-label={strings.primaryNav}
          className={cn(
            "fixed inset-0 z-30 flex flex-col",
            "bg-canvas px-0 pt-24 pb-12",
            "lg:hidden",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeApple }}
        >
          <Container className="flex min-h-0 flex-1 flex-col">
            <nav
              aria-label={strings.primaryNavMobile}
              className="mt-4 min-h-0 flex-1 overflow-y-auto pb-6"
            >
              <ul className="space-y-1">
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
                    {item.children && item.children.length > 0 ? (
                      <MobileNavGroup
                        label={item.label}
                        href={item.href}
                        children={item.children}
                      />
                    ) : (
                      <NavLink
                        to={item.href}
                        end
                        className={({ isActive }) =>
                          cn(
                            "text-heading-md block py-2 font-semibold tracking-tight",
                            isActive ? "text-ink" : "text-ink-muted",
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Bottom cluster — locale switcher + primary CTA + account. */}
            <div className="mt-6 shrink-0 space-y-4 pt-4">
              <LocaleSwitcher />
              <Button
                href={site.primaryCta.href}
                size="lg"
                className="w-full"
                aria-label={site.primaryCta.ariaLabel}
              >
                {site.primaryCta.label}
                <img
                  src={doctolibLogo}
                  alt="Doctolib"
                  className="ml-1 h-5 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </Button>
              <div className="flex justify-center">
                <NavAccount />
              </div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/*
 * MobileNavGroup — accordion-style group for a top-level nav item with
 * children. Trigger is split: tap the label to navigate to the index
 * page, tap the chevron to expand the children inline.
 */
function MobileNavGroup({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: NavChild[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <NavLink
          to={href}
          end
          className={({ isActive }) =>
            cn(
              "text-heading-md flex-1 py-2 font-semibold tracking-tight",
              isActive ? "text-ink" : "text-ink-muted",
            )
          }
        >
          {label}
        </NavLink>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${label} – ${open ? "schließen" : "öffnen"}`}
          onClick={() => setOpen((v) => !v)}
          className="text-ink-subtle hover:text-ink rounded-md p-2 transition-colors"
        >
          <ChevronDown
            size={20}
            aria-hidden
            className={cn(
              "ease-apple transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="children"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeApple }}
            className="overflow-hidden"
          >
            <ul className="space-y-0.5 py-2 pl-3">
              {children.map((child) => (
                <li key={child.href}>
                  <MobileNavChild child={child} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/*
 * MobileNavChild — sub-row inside a mobile dropdown. Same split-trigger
 * pattern as MobileNavGroup when the child has its own children.
 */
function MobileNavChild({ child }: { child: NavChild }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!child.children?.length;

  if (!hasChildren) {
    return (
      <SmartLink
        href={child.href}
        className="text-body-md text-ink-muted hover:text-ink block py-1.5 transition-colors"
      >
        {child.label}
      </SmartLink>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <SmartLink
          href={child.href}
          className="text-body-md text-ink-muted hover:text-ink flex-1 py-1.5 transition-colors"
        >
          {child.label}
        </SmartLink>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${child.label} – ${open ? "schließen" : "öffnen"}`}
          onClick={() => setOpen((v) => !v)}
          className="text-ink-subtle hover:text-ink rounded-md p-1.5 transition-colors"
        >
          <ChevronDown
            size={16}
            aria-hidden
            className={cn(
              "ease-apple transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="subchildren"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeApple }}
            className="overflow-hidden"
          >
            <ul className="space-y-0 py-1 pl-4">
              {child.children!.map((sub) => (
                <li key={`${child.href}::${sub.label}`}>
                  <SmartLink
                    href={sub.href}
                    className="text-body-md text-ink-muted hover:text-ink block py-1.5"
                  >
                    {sub.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/*
 * Footer — site-wide footer.
 *
 * Two-row layout from md+:
 *   Row 1 — brand block (logo + tagline) on its own line.
 *   Row 2 — all four link columns side by side.
 *   Row 3 — hairline + legal strip with LocaleSwitcher.
 *
 * Locale-aware via getSite(locale). Footer content (column titles + links)
 * mirrors the Navbar's locale.
 */
"use client";
import { Container } from "~/components/primitives/Container";
import { Logo } from "~/components/primitives/Logo";
import { SmartLink } from "~/components/primitives/SmartLink";
import { LocaleSwitcher } from "~/components/primitives/LocaleSwitcher";
import { getSite } from "~/content/site";
import { useLocale } from "~/i18n/locale";
import { getStrings } from "~/i18n/strings";
import { useConsentStore } from "~/lib/consent";

export function Footer() {
  const locale = useLocale();
  const site = getSite(locale);
  const strings = getStrings(locale);
  const resetConsent = useConsentStore((s) => s.reset);

  return (
    <footer
      className="border-hairline bg-canvas border-t"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        {strings.footer}
      </h2>

      <Container>
        <div className="py-16 lg:py-24">
          {/* Row 1 — brand block. */}
          <div className="flex flex-col gap-4 md:max-w-[36ch]">
            <SmartLink
              href="/"
              aria-label={`${site.brand.name} — ${strings.brandHome}`}
              className="inline-flex"
            >
              <Logo className="h-14 lg:h-16" />
            </SmartLink>
            <p className="text-body-md text-ink-muted">{site.brand.tagline}</p>
          </div>

          {/* Row 2 — link columns. */}
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:mt-20 md:grid-cols-4 lg:mt-24 lg:gap-x-10">
            {site.footer.columns.map((column) => (
              <nav
                key={column.title}
                aria-labelledby={`footer-col-${column.title}`}
              >
                <h3
                  id={`footer-col-${column.title}`}
                  className="text-caption text-ink-subtle font-mono tracking-widest uppercase"
                >
                  {column.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <SmartLink
                        href={link.href}
                        className="text-body-md text-ink-muted duration-fast hover:text-ink transition-colors"
                      >
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Legal strip + LocaleSwitcher. */}
        <div className="border-hairline text-caption text-ink-subtle flex flex-col gap-4 border-t py-8 md:flex-row md:items-center md:justify-between">
          <span>{site.footer.legal}</span>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={resetConsent}
              className="text-ink-subtle duration-fast hover:text-ink transition-colors"
            >
              {strings.cookieSettings}
            </button>
            <LocaleSwitcher variant="muted" />
            <span className="font-mono tracking-widest uppercase">
              {site.brand.name} · Berlin
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

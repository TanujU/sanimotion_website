/*
 * Footer — site-wide footer.
 *
 * What: Two-row layout from md+:
 *   Row 1 — brand block on its own line (logo + tagline).
 *   Row 2 — all four link columns in a single row.
 *   Row 3 — hairline + legal strip.
 * On mobile, everything stacks naturally.
 *
 * Why: Putting all four columns on the same line was breaking before
 * because the brand block was sharing the grid (5 cols vs 6 children).
 * Splitting the brand into its own row gives each link column equal
 * width and prevents Rechtliches from wrapping. Footers are SEO real
 * estate (Impressum + Datenschutz on every page) and a final UX safety
 * net — keeping their layout predictable matters.
 */
import { Container } from "~/components/primitives/Container";
import { Logo } from "~/components/primitives/Logo";
import { SmartLink } from "~/components/primitives/SmartLink";
import { site } from "~/content/site";

export function Footer() {
  return (
    <footer
      className="border-hairline bg-canvas border-t"
      aria-labelledby="site-footer-heading"
    >
      {/* Visually hidden heading for screen-reader navigation. */}
      <h2 id="site-footer-heading" className="sr-only">
        Footer
      </h2>

      <Container>
        <div className="py-16 lg:py-24">
          {/* Row 1 — brand block on its own line. */}
          <div className="flex flex-col gap-4 md:max-w-[36ch]">
            <SmartLink
              href="/"
              aria-label={`${site.brand.name} — Startseite`}
              className="inline-flex"
            >
              <Logo className="h-14 lg:h-16" />
            </SmartLink>
            <p className="text-body-md text-ink-muted">{site.brand.tagline}</p>
          </div>

          {/* Row 2 — all 4 link columns in a single row from md+.
              On mobile they stack 2-col → 1-col gracefully. */}
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

        {/* Legal strip */}
        <div className="border-hairline text-caption text-ink-subtle flex flex-col gap-2 border-t py-8 md:flex-row md:items-center md:justify-between">
          <span>{site.footer.legal}</span>
          <span className="font-mono tracking-widest uppercase">
            {site.brand.name} · Berlin
          </span>
        </div>
      </Container>
    </footer>
  );
}

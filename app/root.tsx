/*
 * Sanimotion — Root layout (React Router v7)
 *
 * What: The HTML shell wrapping every route — <html>, <head>, fonts, the
 * global stylesheet, the route <Outlet />, and a top-level error boundary.
 *
 * Why: Root is the single place where document-level concerns live (lang,
 * meta defaults, font loading, viewport). Self-hosted fonts are imported
 * here so they're loaded on every route without a network round trip to
 * a third-party CDN — which both improves LCP and keeps the site GDPR-clean.
 */
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";

// Self-hosted variable fonts — bundled by Vite, no Google CDN call.
// The "variable" packages give us the full weight + width axes in one file.
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

// Single CSS entrypoint — pulls in Tailwind v4, tokens, base layer.
import "./styles/globals.css";

// Persistent chrome — Navbar/MobileMenu/Footer wrap every route via App().
import { Navbar } from "~/components/layout/Navbar";
import { MobileMenu } from "~/components/layout/MobileMenu";
import { Footer } from "~/components/layout/Footer";
// Global "page tail" — brand-partner wall + contact + map appear on every
// route by request. Sourced from the home content module (single source of
// truth for partners and contact details).
import { LogoWall } from "~/components/sections/LogoWall";
import { KontaktTermin } from "~/components/sections/KontaktTermin";
import { Analytics } from "~/components/analytics/Analytics";
import { ConsentBanner } from "~/components/analytics/ConsentBanner";
import { AuthProvider } from "~/lib/auth";
import { getHomeContent } from "~/content/pages/home";
import { useLocale } from "~/i18n/locale";
import { getStrings } from "~/i18n/strings";

/*
 * Document-level <link> tags. We deliberately do NOT preconnect to Google
 * Fonts — fonts are bundled. Favicon is the only static link for now.
 */
export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/jpeg", href: "/favicon.jpeg" },
];

/*
 * <Layout> wraps every route + the ErrorBoundary. lang="de" is intentional —
 * the site is German-first; SEO and screen readers rely on this.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/*
 * App — every route renders inside this shell.
 * Order matters: Navbar is fixed and z-40, MobileMenu sits at z-30 and only
 * paints when open, Outlet (page content) flows in the document, and Footer
 * closes the page.
 *
 * The skip-link is the first focusable element — keyboard users can jump
 * past the navigation directly to <main> (WCAG 2.4.1).
 */
export default function App() {
  const locale = useLocale();
  const strings = getStrings(locale);
  const home = getHomeContent(locale);
  const location = useLocation();
  // The patient dashboard ships its own sticky header + footer; suppress
  // the marketing chrome here so the two don't stack.
  const isBareChrome = location.pathname.startsWith("/mein-bereich");

  if (isBareChrome) {
    return (
      <AuthProvider>
        <Outlet />
        <Analytics />
        <ConsentBanner />
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <a
        href="#main-content"
        className="focus:rounded-pill focus:bg-ink focus:text-canvas sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
      >
        {strings.skipToContent}
      </a>
      <Navbar />
      <MobileMenu />
      <main id="main-content">
        <Outlet />
        <LogoWall content={home.partners} />
        <KontaktTermin content={home.contact} />
      </main>
      <Footer />
      <Analytics />
      <ConsentBanner />
    </AuthProvider>
  );
}

/*
 * Top-level error boundary — renders for any uncaught route error or 404.
 * Uses the same design tokens as the rest of the site so even error pages
 * stay on-brand.
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Ein Fehler ist aufgetreten.";
  let details = "Bitte versuchen Sie es später erneut.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : `Fehler ${error.status}`;
    details =
      error.status === 404
        ? "Die angeforderte Seite wurde nicht gefunden."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    // Dev-only: surface the stack trace to speed up local debugging.
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="bg-canvas min-h-screen px-6 py-24 lg:px-10 lg:py-48">
      <div className="mx-auto max-w-270">
        <h1 className="text-display-lg text-ink font-semibold tracking-tight">
          {message}
        </h1>
        <p className="text-body-lg text-ink-muted mt-6">{details}</p>
        {stack && (
          <pre className="rounded-card bg-muted text-caption text-ink-muted mt-12 w-full overflow-x-auto p-6 font-mono">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}

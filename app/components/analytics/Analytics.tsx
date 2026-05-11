/*
 * Analytics — GA4 loader, gated by consent.
 *
 * Behaviour:
 *  - Renders nothing until consent.status === "granted".
 *  - On grant, injects gtag.js once and initialises GA4 with
 *    send_page_view: false so we can fire page_view manually on every
 *    React Router navigation (gtag's auto page_view doesn't see SPA
 *    transitions).
 *  - On every route change (and on initial grant), fires a page_view
 *    with the new path/title.
 *
 * Measurement ID mirrors the live WordPress site (G-SQ8XV58NF3) so
 * historical data stays continuous. Override via VITE_GA4_ID if needed.
 */
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useConsentStore } from "~/lib/consent";

const GA_ID = import.meta.env.VITE_GA4_ID ?? "G-SQ8XV58NF3";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function Analytics() {
  const status = useConsentStore((s) => s.status);
  const location = useLocation();

  useEffect(() => {
    if (status !== "granted") return;
    if (typeof window === "undefined") return;
    if (document.getElementById("ga4-script")) return;

    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    // anonymize_ip is a no-op in GA4 (IPs are anonymised at collection)
    // but kept for parity with the live WP Site Kit config.
    window.gtag("config", GA_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });
  }, [status]);

  useEffect(() => {
    if (status !== "granted") return;
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [status, location.pathname, location.search]);

  return null;
}

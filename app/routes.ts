/*
 * Route registry — programmatic config (RR7 default).
 *
 * What: Maps URL paths to the modules in app/routes/. Each entry is a
 * top-level page; nested layouts and dynamic segments will be added as
 * the product-detail and per-location pages ship.
 *
 * Why: A single explicit registry is easier to grep than filename
 * conventions and keeps SEO-critical paths visible at a glance.
 */
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("standorte", "routes/standorte.tsx"),
  route("produkte", "routes/produkte.tsx"),
  route("onlineshop", "routes/onlineshop.tsx"),
  route("ueber-uns", "routes/ueber-uns.tsx"),
  route("faq", "routes/faq.tsx"),
  route("jobs", "routes/jobs.tsx"),
  route("kontakt", "routes/kontakt.tsx"),
  route("impressum", "routes/impressum.tsx"),
  route("datenschutz", "routes/datenschutz.tsx"),
] satisfies RouteConfig;

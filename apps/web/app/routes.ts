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
  route("sanitatshaus-kreuzberg", "routes/sanitatshaus-kreuzberg.tsx"),
  route("sanitatshaus-spandau", "routes/sanitatshaus-spandau.tsx"),
  route("sanitatshaus-zehlendorf", "routes/sanitatshaus-zehlendorf.tsx"),
  route(
    "sanitatshaus-konigs-wusterhausen",
    "routes/sanitatshaus-konigs-wusterhausen.tsx",
  ),
  route("produkte", "routes/produkte.tsx"),
  route(
    "orthopaedische-schuhe",
    "routes/orthopaedische-schuhe.tsx",
  ),
  route(
    "orthopaedische-schuhe-berlin/sneaker",
    "routes/orthopaedische-schuhe-berlin.sneaker.tsx",
  ),
  route(
    "orthopaedische-einlagen",
    "routes/orthopaedische-einlagen.tsx",
  ),
  route("kompressionsstruempfe", "routes/kompressionsstruempfe.tsx"),
  route("medizinische-bandagen", "routes/medizinische-bandagen.tsx"),
  route("orthesen", "routes/orthesen.tsx"),
  route("orthesen/fuss-orthese", "routes/orthesen.fuss-orthese.tsx"),
  route(
    "orthesen/sprunggelenk-orthese",
    "routes/orthesen.sprunggelenk-orthese.tsx",
  ),
  route("orthesen/knie-orthese", "routes/orthesen.knie-orthese.tsx"),
  route(
    "orthesen/ruecken-orthese",
    "routes/orthesen.ruecken-orthese.tsx",
  ),
  route(
    "orthesen/schulter-orthese",
    "routes/orthesen.schulter-orthese.tsx",
  ),
  route(
    "orthesen/handgelenk-orthese",
    "routes/orthesen.handgelenk-orthese.tsx",
  ),
  route(
    "orthesen/daumen-orthese",
    "routes/orthesen.daumen-orthese.tsx",
  ),
  route("prothesen", "routes/prothesen.tsx"),
  route(
    "prothesen/finger-prothese",
    "routes/prothesen.finger-prothese.tsx",
  ),
  route(
    "prothesen/armprothese",
    "routes/prothesen.armprothese.tsx",
  ),
  route(
    "prothesen/handprothese",
    "routes/prothesen.handprothese.tsx",
  ),
  route(
    "prothesen/fuss-prothese",
    "routes/prothesen.fuss-prothese.tsx",
  ),
  route(
    "prothesen/unterschenkel-prothese",
    "routes/prothesen.unterschenkel-prothese.tsx",
  ),
  route(
    "prothesen/beinprothese",
    "routes/prothesen.beinprothese.tsx",
  ),
  route(
    "prothesen/brust-prothese",
    "routes/prothesen.brust-prothese.tsx",
  ),
  route("onlineshop", "routes/onlineshop.tsx"),
  route("ueber-uns", "routes/ueber-uns.tsx"),
  route("faq", "routes/faq.tsx"),
  route("jobs", "routes/jobs.tsx"),
  route(
    "sanitatsfachverkaufer-in-fur-empfang-und-verwaltung",
    "routes/sanitatsfachverkaufer-in-fur-empfang-und-verwaltung.tsx",
  ),
  route("kontakt", "routes/kontakt.tsx"),
  route("anmelden", "routes/anmelden.tsx"),
  route("registrieren", "routes/registrieren.tsx"),
  route("mein-bereich", "routes/mein-bereich.tsx"),
  route("impressum", "routes/impressum.tsx"),
  route("datenschutz", "routes/datenschutz.tsx"),
  route("agb", "routes/agb.tsx"),
  route(
    "barrierefreiheitserklaerung",
    "routes/barrierefreiheitserklaerung.tsx",
  ),
] satisfies RouteConfig;

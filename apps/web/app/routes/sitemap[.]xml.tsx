import type { Route } from "./+types/sitemap[.]xml";

const BASE_URL = "https://www.sanimotion.com";

// All public routes — private pages (mein-bereich, anmelden, registrieren) are excluded.
const ROUTES: { path: string; priority: string; changefreq: string }[] = [
  { path: "/",                                                      priority: "1.0", changefreq: "weekly"  },
  { path: "/ueber-uns",                                             priority: "0.8", changefreq: "monthly" },
  { path: "/kontakt",                                               priority: "0.8", changefreq: "monthly" },
  { path: "/standorte",                                             priority: "0.8", changefreq: "monthly" },
  { path: "/jobs",                                                  priority: "0.7", changefreq: "weekly"  },
  { path: "/faq",                                                   priority: "0.7", changefreq: "monthly" },
  { path: "/produkte",                                              priority: "0.8", changefreq: "monthly" },
  { path: "/onlineshop",                                            priority: "0.7", changefreq: "weekly"  },
  // Orthesen
  { path: "/orthesen",                                              priority: "0.8", changefreq: "monthly" },
  { path: "/orthesen/daumen-orthese",                               priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/fuss-orthese",                                 priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/handgelenk-orthese",                           priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/knie-orthese",                                 priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/ruecken-orthese",                              priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/schulter-orthese",                             priority: "0.7", changefreq: "monthly" },
  { path: "/orthesen/sprunggelenk-orthese",                         priority: "0.7", changefreq: "monthly" },
  // Prothesen
  { path: "/prothesen",                                             priority: "0.8", changefreq: "monthly" },
  { path: "/prothesen/armprothese",                                 priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/beinprothese",                                priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/brust-prothese",                              priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/finger-prothese",                             priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/fuss-prothese",                               priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/handprothese",                                priority: "0.7", changefreq: "monthly" },
  { path: "/prothesen/unterschenkel-prothese",                      priority: "0.7", changefreq: "monthly" },
  // Other products
  { path: "/kompressionsstruempfe",                                  priority: "0.7", changefreq: "monthly" },
  { path: "/medizinische-bandagen",                                  priority: "0.7", changefreq: "monthly" },
  { path: "/orthopaedische-einlagen",                                priority: "0.7", changefreq: "monthly" },
  { path: "/orthopaedische-schuhe",                                  priority: "0.7", changefreq: "monthly" },
  { path: "/orthopaedische-schuhe-berlin/sneaker",                   priority: "0.6", changefreq: "monthly" },
  // Locations
  { path: "/sanitatshaus-konigs-wusterhausen",                       priority: "0.7", changefreq: "monthly" },
  { path: "/sanitatshaus-kreuzberg",                                 priority: "0.7", changefreq: "monthly" },
  { path: "/sanitatshaus-spandau",                                   priority: "0.7", changefreq: "monthly" },
  { path: "/sanitatshaus-zehlendorf",                                priority: "0.7", changefreq: "monthly" },
  // Jobs
  { path: "/sanitatsfachverkaufer-in-fur-empfang-und-verwaltung",    priority: "0.6", changefreq: "weekly"  },
  // Legal
  { path: "/agb",                                                    priority: "0.3", changefreq: "yearly"  },
  { path: "/datenschutz",                                            priority: "0.3", changefreq: "yearly"  },
  { path: "/impressum",                                              priority: "0.3", changefreq: "yearly"  },
  { path: "/barrierefreiheitserklaerung",                            priority: "0.3", changefreq: "yearly"  },
];

export async function loader(_: Route.LoaderArgs) {
  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
  (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

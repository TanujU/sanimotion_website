"use client";
import type { Route } from "./+types/sanitatshaus-konigs-wusterhausen";
import { buildMeta, buildLocalBusinessSchema, buildBreadcrumbSchema } from "~/lib/seo";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { JsonLd } from "~/components/seo/JsonLd";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta() {
  const c = getLocationContent("de", "konigs-wusterhausen");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/sanitatshaus-konigs-wusterhausen" });
}

const SCHEMA_BREADCRUMB = buildBreadcrumbSchema([
  { name: "Startseite", path: "/" },
  { name: "Standorte", path: "/standorte" },
  { name: "Königs Wusterhausen", path: "/sanitatshaus-konigs-wusterhausen" },
]);
const SCHEMA = buildLocalBusinessSchema({
  name: "Sanimotion Sanitätshaus Königs Wusterhausen",
  path: "/sanitatshaus-konigs-wusterhausen",
  streetAddress: "Karl-Marx-Straße 3",
  postalCode: "15711",
  addressLocality: "Königs Wusterhausen",
  openingHours: ["Mo-Tu 08:30-13:30,14:00-18:00", "We-Th 08:30-13:30,14:00-17:00", "Fr 08:30-14:30"],
});

export default function SanitatshausKonigsWusterhausen() {
  const locale = useLocale();
  const content = getLocationContent(locale, "konigs-wusterhausen");
  return (
    <>
      <JsonLd schema={SCHEMA_BREADCRUMB} />
      <JsonLd schema={SCHEMA} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Standorte", path: "/standorte" },
        { name: "Königs Wusterhausen", path: "/sanitatshaus-konigs-wusterhausen" },
      ]} />
      <LocationPage content={content} />
    </>
  );
}

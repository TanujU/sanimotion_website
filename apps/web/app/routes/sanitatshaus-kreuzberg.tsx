"use client";
import type { Route } from "./+types/sanitatshaus-kreuzberg";
import { buildMeta, buildLocalBusinessSchema, buildBreadcrumbSchema } from "~/lib/seo";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { JsonLd } from "~/components/seo/JsonLd";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta() {
  const c = getLocationContent("de", "kreuzberg");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/sanitatshaus-kreuzberg" });
}

const SCHEMA_BREADCRUMB = buildBreadcrumbSchema([
  { name: "Startseite", path: "/" },
  { name: "Standorte", path: "/standorte" },
  { name: "Berlin-Kreuzberg", path: "/sanitatshaus-kreuzberg" },
]);
const SCHEMA = buildLocalBusinessSchema({
  name: "Sanimotion Sanitätshaus Kreuzberg",
  path: "/sanitatshaus-kreuzberg",
  streetAddress: "Blücherstraße 22",
  postalCode: "10961",
  addressLocality: "Berlin",
  openingHours: ["Mo-Th 08:00-17:00", "Fr 08:00-15:00"],
});

export default function SanitatshausKreuzberg() {
  const locale = useLocale();
  const content = getLocationContent(locale, "kreuzberg");
  return (
    <>
      <JsonLd schema={SCHEMA_BREADCRUMB} />
      <JsonLd schema={SCHEMA} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Standorte", path: "/standorte" },
        { name: "Berlin-Kreuzberg", path: "/sanitatshaus-kreuzberg" },
      ]} />
      <LocationPage content={content} />
    </>
  );
}

"use client";
import type { Route } from "./+types/sanitatshaus-spandau";
import { buildMeta, buildLocalBusinessSchema, buildBreadcrumbSchema } from "~/lib/seo";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { JsonLd } from "~/components/seo/JsonLd";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta() {
  const c = getLocationContent("de", "spandau");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/sanitatshaus-spandau" });
}

const SCHEMA_BREADCRUMB = buildBreadcrumbSchema([
  { name: "Startseite", path: "/" },
  { name: "Standorte", path: "/standorte" },
  { name: "Berlin-Spandau", path: "/sanitatshaus-spandau" },
]);
const SCHEMA = buildLocalBusinessSchema({
  name: "Sanimotion Sanitätshaus Spandau",
  path: "/sanitatshaus-spandau",
  streetAddress: "Adamstraße 3",
  postalCode: "13595",
  addressLocality: "Berlin",
  openingHours: ["Mo-Th 09:00-16:00", "Fr 09:00-15:00"],
});

export default function SanitatshausSpandau() {
  const locale = useLocale();
  const content = getLocationContent(locale, "spandau");
  return (
    <>
      <JsonLd schema={SCHEMA_BREADCRUMB} />
      <JsonLd schema={SCHEMA} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Standorte", path: "/standorte" },
        { name: "Berlin-Spandau", path: "/sanitatshaus-spandau" },
      ]} />
      <LocationPage content={content} />
    </>
  );
}

"use client";
import type { Route } from "./+types/sanitatshaus-zehlendorf";
import { buildMeta, buildLocalBusinessSchema, buildBreadcrumbSchema } from "~/lib/seo";
import { Breadcrumb } from "~/components/primitives/Breadcrumb";
import { JsonLd } from "~/components/seo/JsonLd";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta() {
  const c = getLocationContent("de", "zehlendorf");
  return buildMeta({ title: c.meta.title, description: c.meta.description, path: "/sanitatshaus-zehlendorf" });
}

const SCHEMA_BREADCRUMB = buildBreadcrumbSchema([
  { name: "Startseite", path: "/" },
  { name: "Standorte", path: "/standorte" },
  { name: "Berlin-Zehlendorf", path: "/sanitatshaus-zehlendorf" },
]);
const SCHEMA = buildLocalBusinessSchema({
  name: "Sanimotion Sanitätshaus Zehlendorf",
  path: "/sanitatshaus-zehlendorf",
  streetAddress: "Martin-Buber-Str. 12",
  postalCode: "14163",
  addressLocality: "Berlin",
  openingHours: ["Mo-Th 09:00-18:00", "Fr 09:00-15:00"],
});

export default function SanitatshausZehlendorf() {
  const locale = useLocale();
  const content = getLocationContent(locale, "zehlendorf");
  return (
    <>
      <JsonLd schema={SCHEMA_BREADCRUMB} />
      <JsonLd schema={SCHEMA} />
      <Breadcrumb items={[
        { name: "Startseite", path: "/" },
        { name: "Standorte", path: "/standorte" },
        { name: "Berlin-Zehlendorf", path: "/sanitatshaus-zehlendorf" },
      ]} />
      <LocationPage content={content} />
    </>
  );
}

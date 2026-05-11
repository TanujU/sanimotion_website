"use client";
import type { Route } from "./+types/sanitatshaus-spandau";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta(_: Route.MetaArgs) {
  const c = getLocationContent("de", "spandau");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function SanitatshausSpandau() {
  const locale = useLocale();
  const content = getLocationContent(locale, "spandau");
  return <LocationPage content={content} />;
}

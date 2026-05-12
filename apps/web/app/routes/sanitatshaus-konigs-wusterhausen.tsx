"use client";
import type { Route } from "./+types/sanitatshaus-konigs-wusterhausen";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta(_: Route.MetaArgs) {
  const c = getLocationContent("de", "konigs-wusterhausen");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function SanitatshausKonigsWusterhausen() {
  const locale = useLocale();
  const content = getLocationContent(locale, "konigs-wusterhausen");
  return <LocationPage content={content} />;
}

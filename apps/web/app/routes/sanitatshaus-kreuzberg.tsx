"use client";
import type { Route } from "./+types/sanitatshaus-kreuzberg";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta(_: Route.MetaArgs) {
  const c = getLocationContent("de", "kreuzberg");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function SanitatshausKreuzberg() {
  const locale = useLocale();
  const content = getLocationContent(locale, "kreuzberg");
  return <LocationPage content={content} />;
}

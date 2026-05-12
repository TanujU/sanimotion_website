"use client";
import type { Route } from "./+types/sanitatshaus-zehlendorf";
import { useLocale } from "~/i18n/locale";
import { getLocationContent } from "~/content/pages/sanitatshaus";
import { LocationPage } from "~/components/sections/LocationPage";

export function meta(_: Route.MetaArgs) {
  const c = getLocationContent("de", "zehlendorf");
  return [
    { title: c.meta.title },
    { name: "description", content: c.meta.description },
  ];
}

export default function SanitatshausZehlendorf() {
  const locale = useLocale();
  const content = getLocationContent(locale, "zehlendorf");
  return <LocationPage content={content} />;
}

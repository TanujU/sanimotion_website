/*
 * /faq — placeholder until the full FAQ ships.
 */
import type { Route } from "./+types/faq";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "FAQ — Sanimotion" },
    {
      name: "description",
      content:
        "Häufig gestellte Fragen rund um Rezept, Hausbesuch, Anpassung und Krankenkasse — beantwortet von Sanimotion.",
    },
  ];
}

export default function Faq() {
  return (
    <Placeholder
      title="Häufige Fragen — kommen bald."
      description="Wir beantworten in Kürze die häufigsten Fragen zu Rezept-Einlösung, Hausbesuchen, Anpassungen und Krankenkassen-Abrechnung."
    />
  );
}

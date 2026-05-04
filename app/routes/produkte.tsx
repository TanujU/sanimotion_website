/*
 * /produkte — placeholder until the full product catalogue ships.
 * Real content will list each category with subtypes, fitting process,
 * and photos.
 */
import type { Route } from "./+types/produkte";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Produkte — Sanimotion" },
    {
      name: "description",
      content:
        "Maßanfertigung und Beratung: orthopädische Einlagen, Schuhe, Kompressionsstrümpfe, Orthesen, Prothesen und medizinische Bandagen.",
    },
  ];
}

export default function Produkte() {
  return (
    <Placeholder
      title="Unser Produktsortiment — bald im Detail."
      description="Die vollständige Übersicht unserer Produktkategorien folgt in Kürze. In der Zwischenzeit beraten wir Sie gerne persönlich vor Ort oder bei Ihnen zu Hause."
    />
  );
}

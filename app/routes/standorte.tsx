/*
 * /standorte — placeholder until the four-location page ships.
 * Real content will list each Berlin Sanimotion site with address,
 * opening hours, photos, and a Doctolib booking embed.
 */
import type { Route } from "./+types/standorte";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Standorte — Sanimotion" },
    {
      name: "description",
      content:
        "Sanimotion-Sanitätshäuser in Kreuzberg, Spandau, Zehlendorf und Königs Wusterhausen.",
    },
  ];
}

export default function Standorte() {
  return (
    <Placeholder
      title="Unsere Standorte — Übersicht folgt."
      description="Adressen, Öffnungszeiten und Anfahrt für unsere vier Sanitätshäuser in Kreuzberg, Spandau, Zehlendorf und Königs Wusterhausen folgen in Kürze."
    />
  );
}

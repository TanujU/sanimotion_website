/*
 * /datenschutz — placeholder until DSGVO declaration is finalized
 * (Execution step #10).
 */
import type { Route } from "./+types/datenschutz";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Datenschutz — Sanimotion" },
    {
      name: "description",
      content: "Datenschutzerklärung gemäß DSGVO.",
    },
    { name: "robots", content: "noindex" },
  ];
}

export default function Datenschutz() {
  return (
    <Placeholder
      title="Datenschutz — in Vorbereitung."
      description="Die vollständige Datenschutzerklärung gemäß DSGVO folgt in Kürze. Bis dahin verarbeiten wir keine personenbezogenen Daten über Tracking-Skripte."
    />
  );
}

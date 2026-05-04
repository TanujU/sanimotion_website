/*
 * /ueber-uns — placeholder until About page ships (Execution step #7).
 */
import type { Route } from "./+types/ueber-uns";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Über uns — Sanimotion" },
    {
      name: "description",
      content:
        "Sanimotion ist ein Team aus Data-Engineers, Analysten und Architekten mit Sitz in München.",
    },
  ];
}

export default function UeberUns() {
  return (
    <Placeholder
      title="Wer wir sind — bald ausführlich."
      description="Die ausführliche Vorstellung unseres Teams und unserer Arbeitsweise folgt in Kürze."
    />
  );
}

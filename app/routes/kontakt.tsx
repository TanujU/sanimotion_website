/*
 * /kontakt — placeholder until full form ships (Execution step #7).
 * Until then: a clear single email + invitation to write.
 */
import type { Route } from "./+types/kontakt";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Kontakt — Sanimotion" },
    {
      name: "description",
      content:
        "Kontaktieren Sie Sanimotion für ein unverbindliches Gespräch über Ihr Datenprojekt.",
    },
  ];
}

export default function Kontakt() {
  return (
    <Placeholder
      title="Sprechen wir über Ihr Projekt."
      description="Schreiben Sie uns an kontakt@sanimotion.com — wir melden uns innerhalb eines Werktags. Das vollständige Kontaktformular folgt in Kürze."
    />
  );
}

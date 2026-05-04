/*
 * /jobs — placeholder until current openings are listed.
 */
import type { Route } from "./+types/jobs";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Jobs — Sanimotion" },
    {
      name: "description",
      content:
        "Offene Stellen bei Sanimotion in Berlin — Orthopädie-Schuhmacher, Orthopädie-Techniker und Verkaufsberatung.",
    },
  ];
}

export default function Jobs() {
  return (
    <Placeholder
      title="Karriere bei Sanimotion."
      description="Sie möchten Teil unseres Teams werden? Aktuelle Stellen veröffentlichen wir in Kürze hier. Initiativbewerbungen senden Sie gerne an kontakt@sanimotion.com."
    />
  );
}

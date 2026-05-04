/*
 * /impressum — placeholder until legal text is finalized (Execution step #10).
 * Required by TMG §5; we publish even an interim notice rather than nothing.
 */
import type { Route } from "./+types/impressum";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Impressum — Sanimotion" },
    {
      name: "description",
      content: "Impressum gemäß §5 TMG.",
    },
    // Legal pages should not be indexed during placeholder phase to avoid
    // surfacing incomplete content in search results.
    { name: "robots", content: "noindex" },
  ];
}

export default function Impressum() {
  return (
    <Placeholder
      title="Impressum — in Vorbereitung."
      description="Die vollständigen Pflichtangaben gemäß §5 TMG werden in Kürze ergänzt. Bei Rückfragen wenden Sie sich bitte an kontakt@sanimotion.com."
    />
  );
}

/*
 * /onlineshop — placeholder until the e-commerce property is wired in.
 * The real Sanimotion onlineshop is a separate property; in production
 * this route may simply redirect to the external URL.
 */
import { buildMeta } from "~/lib/seo";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta() {
  return buildMeta({ title: "Onlineshop — Sanimotion", description: "Der Sanimotion-Onlineshop ist in Vorbereitung — bestellen Sie ausgewählte Produkte bequem online.", path: "/onlineshop" });
}

export default function Onlineshop() {
  return (
    <Placeholder
      title="Onlineshop — kommt bald."
      description="Ausgewählte Produkte werden Sie demnächst bequem online bestellen können. Bis dahin beraten wir Sie gerne persönlich in einem unserer Sanitätshäuser oder telefonisch."
    />
  );
}

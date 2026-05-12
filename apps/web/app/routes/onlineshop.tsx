/*
 * /onlineshop — placeholder until the e-commerce property is wired in.
 * The real Sanimotion onlineshop is a separate property; in production
 * this route may simply redirect to the external URL.
 */
import type { Route } from "./+types/onlineshop";
import { Placeholder } from "~/components/sections/Placeholder";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Onlineshop — Sanimotion" },
    {
      name: "description",
      content:
        "Der Sanimotion-Onlineshop ist in Vorbereitung — bestellen Sie ausgewählte Produkte bequem online.",
    },
  ];
}

export default function Onlineshop() {
  return (
    <Placeholder
      title="Onlineshop — kommt bald."
      description="Ausgewählte Produkte werden Sie demnächst bequem online bestellen können. Bis dahin beraten wir Sie gerne persönlich in einem unserer Sanitätshäuser oder telefonisch."
    />
  );
}

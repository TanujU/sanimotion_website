/*
 * /mein-bereich — patient dashboard.
 *
 * Mounts the ported feedback-app PatientDashboard. Lives outside the
 * marketing chrome (Navbar/Footer/LogoWall/KontaktTermin are suppressed
 * by root.tsx for this route) so the dashboard's own sticky header is
 * the only chrome on the page.
 *
 * Server-side gate: requireMembership runs before the page renders. Any
 * request without a session, or a session lacking app_memberships for
 * sanimotion_kunden, is 302'd to /anmelden — no client-side flash.
 */
import { data } from "react-router";
import type { Route } from "./+types/mein-bereich";
import { buildMeta } from "~/lib/seo";
import { requireMembership } from "~/lib/auth/server";
import { PatientDashboardPage } from "~/components/patient/PatientDashboard";

export function meta() {
  return buildMeta({ title: "Mein Bereich — Sanimotion", description: "Ihr persönlicher Bereich bei Sanimotion.", path: "/mein-bereich", noindex: true });
}

export async function loader({ request }: Route.LoaderArgs) {
  const { user, headers } = await requireMembership(
    request,
    "sanimotion_kunden",
  );
  return data({ userId: user.id }, { headers });
}

export default function MeinBereich() {
  return <PatientDashboardPage />;
}

/*
 * /mein-bereich — patient dashboard.
 *
 * Mounts the ported feedback-app PatientDashboard. Lives outside the
 * marketing chrome (Navbar/Footer/LogoWall/KontaktTermin are suppressed
 * by root.tsx for this route) so the dashboard's own sticky header is
 * the only chrome on the page.
 */
import type { Route } from "./+types/mein-bereich";
import { PatientDashboardPage } from "~/components/patient/PatientDashboard";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Mein Bereich — Sanimotion" },
    { name: "robots", content: "noindex" },
  ];
}

export default function MeinBereich() {
  return <PatientDashboardPage />;
}

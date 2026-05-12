/*
 * /barrierefreiheitserklaerung — Accessibility statement (BFSG / EAA).
 */
import type { Route } from "./+types/barrierefreiheitserklaerung";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Barrierefreiheitserklärung — Sanimotion" },
    {
      name: "description",
      content:
        "Erklärung zur digitalen Barrierefreiheit gemäß BFSG und EAA.",
    },
  ];
}

const h2 = "text-heading-md text-ink font-semibold tracking-tight";
const h3 = "text-heading-sm text-ink mt-6 font-semibold tracking-tight";

const bulletItem =
  "text-body-md text-ink-muted flex items-start gap-3";
const bulletDot =
  "bg-ink-subtle/40 mt-2.5 inline-block size-1 shrink-0 rounded-full";

export default function Barrierefreiheitserklaerung() {
  return (
    <Section tone="canvas">
      <Container>
        <div className="max-w-[68ch] pt-12 lg:pt-20">
          <Eyebrow>Rechtliches</Eyebrow>
          <Heading as="h1" size="display-lg" className="mt-6">
            Barrierefreiheitserklärung
          </Heading>

          <div className="text-body-md text-ink-muted mt-12 space-y-10 lg:mt-16">
            <section>
              <p>
                Sanimotion Sanitätshaus GmbH
                <br />
                Blücherstraße 22
                <br />
                10961 Berlin, Deutschland
              </p>
              <p className="mt-4">
                Telefon:{" "}
                <a
                  href="tel:+4930235957600"
                  className="text-ink duration-fast hover:text-accent transition-colors"
                >
                  030 235 957 600
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@sanimotion.com"
                  className="text-ink duration-fast hover:text-accent transition-colors"
                >
                  info@sanimotion.com
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://sanimotion.com"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  sanimotion.com
                </a>
              </p>
              <p className="text-caption text-ink-subtle mt-6 font-mono tracking-widest uppercase">
                Stand: Oktober 2025
              </p>
            </section>

            <section>
              <h2 className={h2}>
                1. Allgemeine Beschreibung des digitalen Dienstes
              </h2>
              <p className="mt-4">
                Sanimotion Sanitätshaus GmbH betreibt eine Website und einen
                Online-Shop (sanimotion.com), über die Kunden medizinische
                Hilfsmittel, Sanitätsbedarf, Reha-Technik und orthopädische
                Produkte bestellen sowie Informationen zu unseren
                Dienstleistungen abrufen können. Der Online-Shop ermöglicht es
                Verbrauchern, Produkte zu durchsuchen, in den Warenkorb zu
                legen und online zu kaufen.
              </p>
            </section>

            <section>
              <h2 className={h2}>2. Verpflichtung zur Barrierefreiheit</h2>
              <p className="mt-4">
                Sanimotion Sanitätshaus GmbH ist bestrebt, seine Website und
                seinen Online-Shop für alle Menschen, einschließlich Menschen
                mit Behinderungen, zugänglich zu machen. Wir verpflichten uns,
                die Anforderungen des Barrierefreiheitsstärkungsgesetzes (BFSG)
                und der Richtlinie (EU) 2019/882 (European Accessibility Act –
                EAA) zu erfüllen.
              </p>
            </section>

            <section>
              <h2 className={h2}>3. Angewandter Standard</h2>
              <p className="mt-4">
                Unsere digitalen Dienste orientieren sich an den folgenden
                Barrierefreiheitsstandards:
              </p>
              <ul className="mt-4 space-y-2">
                <li className={bulletItem}>
                  <span aria-hidden className={bulletDot} />
                  <span>
                    EN 301 549 V3.2.1 – Europäischer Standard für die
                    Barrierefreiheit von Informations- und
                    Kommunikationstechnologien
                  </span>
                </li>
                <li className={bulletItem}>
                  <span aria-hidden className={bulletDot} />
                  <span>
                    WCAG 2.1 Level AA – Web Content Accessibility Guidelines
                    (Richtlinien für barrierefreie Webinhalte)
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className={h2}>4. Erstellung dieser Erklärung</h2>
              <p className="mt-4">
                Diese Barrierefreiheitserklärung wurde im Oktober 2025 erstellt
                und basiert auf:
              </p>
              <ul className="mt-4 space-y-2">
                <li className={bulletItem}>
                  <span aria-hidden className={bulletDot} />
                  <span>
                    Einer Selbstbewertung durch Sanimotion Sanitätshaus GmbH
                  </span>
                </li>
                <li className={bulletItem}>
                  <span aria-hidden className={bulletDot} />
                  <span>
                    Automatisierten Barrierefreiheitstests mit anerkannten
                    Tools
                  </span>
                </li>
                <li className={bulletItem}>
                  <span aria-hidden className={bulletDot} />
                  <span>Manueller Überprüfung durch unser internes Team</span>
                </li>
              </ul>
              <p className="mt-4">
                Die Erklärung wird regelmäßig überprüft und aktualisiert, um
                Änderungen an der Website widerzuspiegeln.
              </p>
            </section>

            <section>
              <h2 className={h2}>5. Feedback und Kontakt</h2>
              <p className="mt-4">
                Ihre Rückmeldung ist uns wichtig! Wenn Sie auf Barrieren stoßen
                oder Schwierigkeiten bei der Nutzung unserer Website haben,
                kontaktieren Sie uns bitte:
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">
                  Barrierefreiheits-Kontakt:
                </span>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@sanimotion.com"
                  className="text-ink duration-fast hover:text-accent transition-colors"
                >
                  info@sanimotion.com
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+4930235957600"
                  className="text-ink duration-fast hover:text-accent transition-colors"
                >
                  030 235 957 600
                </a>
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">Post:</span>
                <br />
                Sanimotion Sanitätshaus GmbH
                <br />
                Barrierefreiheit
                <br />
                Blücherstraße 22
                <br />
                10961 Berlin
              </p>
              <p className="mt-4">
                Wir bemühen uns, alle Anfragen innerhalb von 14 Werktagen zu
                beantworten und Lösungen anzubieten, wo dies möglich ist.
              </p>
            </section>

            <section>
              <h2 className={h2}>6. Technische Spezifikationen</h2>
              <p className="mt-4">
                Unsere Website ist mit folgenden Technologien und Hilfsmitteln
                kompatibel bzw. wird darauf getestet:
              </p>

              <h3 className={h3}>Kompatible Browser</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Google Chrome (aktuelle Version)",
                  "Mozilla Firefox (aktuelle Version)",
                  "Safari (aktuelle Version)",
                  "Microsoft Edge (aktuelle Version)",
                ].map((b) => (
                  <li key={b} className={bulletItem}>
                    <span aria-hidden className={bulletDot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className={h3}>Unterstützte Assistive Technologien</h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Screenreader: JAWS, NVDA, VoiceOver, TalkBack",
                  "Bildschirmlupen: Windows Magnifier, ZoomText",
                  "Spracherkennungssoftware: Dragon Naturally Speaking",
                  "Tastaturnavigation",
                ].map((b) => (
                  <li key={b} className={bulletItem}>
                    <span aria-hidden className={bulletDot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={h2}>7. Zusätzliche Barrierefreiheitsmerkmale</h2>
              <p className="mt-4">
                Um die Zugänglichkeit unserer Website zu verbessern, bieten wir
                folgende Funktionen:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  ["Tastaturnavigation:", " Alle wesentlichen Funktionen können über die Tastatur bedient werden"],
                  ["Anpassbare Textgrößen:", " Texte können über Browser-Funktionen vergrößert werden"],
                  ["Überspringbarer Navigationsbereich:", " Links zum Überspringen repetitiver Navigation"],
                  ["Strukturierte Überschriften:", " Logische Überschriftenhierarchie für Screenreader"],
                  ["Alternative Kontaktmöglichkeiten:", " Telefon, E-Mail und schriftliche Kontaktaufnahme verfügbar"],
                ].map(([label, body]) => (
                  <li key={label} className={bulletItem}>
                    <span aria-hidden className={bulletDot} />
                    <span>
                      <span className="text-ink font-medium">{label}</span>
                      {body}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={h2}>8. Ausnahmen und Verhältnismäßigkeit</h2>
              <p className="mt-4">
                Gemäß § 16 und § 17 BFSG können Barrierefreiheitsanforderungen
                in bestimmten Fällen als unverhältnismäßige Belastung
                betrachtet werden. Sollte dies auf bestimmte Inhalte oder
                Funktionen zutreffen, werden wir dies transparent
                dokumentieren und nach Möglichkeit alternative Lösungen
                anbieten.
              </p>
            </section>

            <section>
              <h2 className={h2}>9. Fortlaufende Verbesserungen</h2>
              <p className="mt-4">
                Barrierefreiheit ist ein kontinuierlicher Prozess. Wir
                verpflichten uns:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Regelmäßige Überprüfungen der Website durchzuführen (mindestens jährlich)",
                  "Neue Inhalte und Funktionen barrierefrei zu gestalten",
                  "Feedback von Nutzern ernst zu nehmen und umzusetzen",
                  "Unsere Mitarbeiter in Barrierefreiheit zu schulen",
                  "Mit Experten für digitale Barrierefreiheit zusammenzuarbeiten",
                ].map((b) => (
                  <li key={b} className={bulletItem}>
                    <span aria-hidden className={bulletDot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className={h2}>10. Rechtliche Grundlagen</h2>
              <p className="mt-4">
                Diese Barrierefreiheitserklärung wurde gemäß folgender
                Rechtsgrundlagen erstellt:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Richtlinie (EU) 2019/882 des Europäischen Parlaments und des Rates vom 17. April 2019 über die Barrierefreiheitsanforderungen für Produkte und Dienstleistungen (European Accessibility Act)",
                  "Barrierefreiheitsstärkungsgesetz (BFSG) vom 16. Juli 2021, in Kraft getreten am 28. Juni 2025",
                  "Verordnung zum Barrierefreiheitsstärkungsgesetz (BFSGV) vom 22. Juni 2022",
                  "EN 301 549 V3.2.1 – Accessibility requirements for ICT products and services",
                  "WCAG 2.1 Level AA – Web Content Accessibility Guidelines",
                ].map((b) => (
                  <li key={b} className={bulletItem}>
                    <span aria-hidden className={bulletDot} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-4">
              Wir danken Ihnen für Ihr Verständnis und Ihre Unterstützung bei
              der Verbesserung der Barrierefreiheit unserer digitalen Dienste.
            </p>

            <p className="text-caption text-ink-subtle pt-4 font-mono tracking-widest uppercase">
              Sanimotion Sanitätshaus GmbH — Geschäftsführung
              <br />
              Berlin, Oktober 2025
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

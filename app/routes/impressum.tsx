/*
 * /impressum — Pflichtangaben gemäß §5 TMG.
 */
import type { Route } from "./+types/impressum";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Impressum — Sanimotion" },
    { name: "description", content: "Impressum gemäß §5 TMG." },
  ];
}

export default function Impressum() {
  return (
    <Section tone="canvas">
      <Container>
        <div className="max-w-[68ch] pt-12 lg:pt-20">
          <Eyebrow>Rechtliches</Eyebrow>
          <Heading as="h1" size="display-lg" className="mt-6">
            Impressum
          </Heading>

          <div className="text-body-md text-ink-muted mt-12 space-y-10 lg:mt-16">
            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-4">
                Sanimotion Sanitätshaus GmbH
                <br />
                Blücherstraße 22
                <br />
                10961 Berlin-Kreuzberg
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Vertreten durch
              </h2>
              <p className="mt-4">Herr Nicola Marx, Geschäftsführer</p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Kontakt
              </h2>
              <p className="mt-4">
                Tel:{" "}
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
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Registereintrag
              </h2>
              <p className="mt-4">
                Eintragung im Registergericht: Berlin
                <br />
                HRB: 219847 B
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-4">DE333989676</p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Steuernummer
              </h2>
              <p className="mt-4">
                29/504/31021
                <br />
                Finanzamt für Körperschaften IV Berlin
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Aufsichtsbehörde
              </h2>
              <p className="mt-4">
                Berufsbezeichnung: Orthopädietechniker (BRD)
                <br />
                Zuständiger Verband: Bundesinnungsverband für
                Orthopädie-Technik
              </p>
              <p className="mt-4">
                Berufsbezeichnung: Orthopädieschuhmacher (BRD)
                <br />
                Zuständiger Verband: Zentralverband der Orthopädie-Schuhtechnik
              </p>
              <p className="mt-4">
                Zuständige Kammer und Aufsichtsbehörde für beide:
              </p>
              <p className="mt-4">
                Handwerkskammer Berlin
                <br />
                Blücherstr. 68
                <br />
                10961 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Berufsrechtliche Regelungen
              </h2>
              <p className="mt-4">
                Berufsrechtliche Regelungen für die Tätigkeit als
                Orthopädietechniker / Orthopädie-Schuhmacher: Handwerksordnung.
              </p>
              <p className="mt-4">
                Die berufsrechtlichen Regelungen können über die vom
                Bundesministerium der Justiz und von der juris GmbH betriebene
                Homepage{" "}
                <a
                  href="https://www.gesetze-im-internet.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  www.gesetze-im-internet.de
                </a>{" "}
                eingesehen und abgerufen werden.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mt-4">
                Nicola Marx
                <br />
                Sanimotion Sanitätshaus GmbH
                <br />
                Blücherstraße 22
                <br />
                10961 Berlin-Kreuzberg
              </p>
            </section>

            <section>
              <h2 className="text-heading-lg text-ink mt-4 font-semibold tracking-tight">
                Haftungsausschluss
              </h2>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Haftung für Inhalte
              </h3>
              <p className="mt-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Haftung für Links
              </h3>
              <p className="mt-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Urheberrechte
              </h3>
              <p className="mt-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Datenschutz
              </h3>
              <p className="mt-4">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten (z. B. Name, Anschrift oder
                E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                ausdrückliche Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="mt-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                durch Dritte ist nicht möglich.
              </p>
              <p className="mt-4">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten
                sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Google Analytics
              </h3>
              <p className="mt-4">
                Diese Website benutzt Google Analytics, einen Webanalysedienst
                der Google Inc. („Google“). Google Analytics verwendet sog.
                „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
                werden und die eine Analyse der Benutzung der Website durch Sie
                ermöglicht. Die durch den Cookie erzeugten Informationen über
                Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse)
                wird an einen Server von Google in den USA übertragen und dort
                gespeichert. Google wird diese Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die
                Websiteaktivitäten für die Websitebetreiber zusammenzustellen
                und um weitere mit der Websitenutzung und der Internetnutzung
                verbundene Dienstleistungen zu erbringen. Auch wird Google
                diese Informationen gegebenenfalls an Dritte übertragen, sofern
                dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten
                im Auftrag von Google verarbeiten. Google wird in keinem Fall
                Ihre IP-Adresse mit anderen Daten von Google in Verbindung
                bringen. Sie können die Installation der Cookies durch eine
                entsprechende Einstellung Ihrer Browser-Software verhindern;
                wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich nutzen können. Durch die Nutzung dieser Website
                erklären Sie sich mit der Bearbeitung der über Sie erhobenen
                Daten durch Google in der zuvor beschriebenen Art und Weise und
                zu dem zuvor benannten Zweck einverstanden.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Bildermaterial
              </h2>
              <p className="mt-4">iStock und Juzo</p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Design und technische Realisierung
              </h2>
              <p className="mt-4">
                Outlinedd GbR
                <br />
                <a
                  href="https://www.outlinedd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  www.outlinedd.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}

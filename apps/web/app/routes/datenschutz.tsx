/*
 * /datenschutz — Datenschutzerklärung gemäß DSGVO.
 */
import { buildMeta } from "~/lib/seo";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";

export function meta() {
  return buildMeta({ title: "Datenschutz — Sanimotion", description: "Datenschutzerklärung gemäß DSGVO.", path: "/datenschutz" });
}

export default function Datenschutz() {
  return (
    <Section tone="canvas">
      <Container>
        <div className="max-w-[68ch] pt-12 lg:pt-20">
          <Eyebrow>Rechtliches</Eyebrow>
          <Heading as="h1" size="display-lg" className="mt-6">
            Datenschutzerklärung
          </Heading>

          <div className="text-body-md text-ink-muted mt-12 space-y-10 lg:mt-16">
            <section>
              <h2 className="text-heading-lg text-ink font-semibold tracking-tight">
                Allgemeiner Hinweis und Pflichtinformationen
              </h2>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Benennung der verantwortlichen Stelle
              </h3>
              <p className="mt-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p className="mt-4">
                Sanimotion Sanitätshaus GmbH
                <br />
                Henry Bökemeier
                <br />
                Blücherstraße 22
                <br />
                10961 Berlin
              </p>
              <p className="mt-4">
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten (z. B. Namen, Kontaktdaten o. Ä.).
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mt-4">
                Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge
                der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits
                erteilten Einwilligung ist jederzeit möglich. Für den Widerruf
                genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mt-4">
                Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
                Verstoßes ein Beschwerderecht bei der zuständigen
                Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich
                datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte
                des Bundeslandes, in dem sich der Sitz unseres Unternehmens
                befindet. Der folgende Link stellt eine Liste der
                Datenschutzbeauftragten sowie deren Kontaktdaten bereit:{" "}
                <a
                  href="https://www.bfdi.bund.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  www.bfdi.bund.de
                </a>
                .
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Recht auf Datenübertragbarkeit
              </h3>
              <p className="mt-4">
                Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
                Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern
                Sie die direkte Übertragung der Daten an einen anderen
                Verantwortlichen verlangen, erfolgt dies nur, soweit es
                technisch machbar ist.
              </p>

              <h3 className="text-heading-md text-ink mt-8 font-semibold tracking-tight">
                Recht auf Auskunft, Berichtigung, Sperrung, Löschung
              </h3>
              <p className="mt-4">
                Sie haben jederzeit im Rahmen der geltenden gesetzlichen
                Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, Herkunft der Daten,
                deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                Diesbezüglich und auch zu weiteren Fragen zum Thema
                personenbezogene Daten können Sie sich jederzeit über die im
                Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mt-4">
                Aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte, die Sie an uns als Seitenbetreiber
                senden, nutzt unsere Website eine SSL- bzw. TLS-Verschlüsselung.
                Damit sind Daten, die Sie über diese Website übermitteln, für
                Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte
                Verbindung an der „https://“ Adresszeile Ihres Browsers und am
                Schloss-Symbol in der Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Server-Log-Dateien
              </h2>
              <p className="mt-4">
                In Server-Log-Dateien erhebt und speichert der Provider der
                Website automatisch Informationen, die Ihr Browser automatisch
                an uns übermittelt. Dies sind:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Besuchte Seite auf unserer Domain",
                  "Datum und Uhrzeit der Serveranfrage",
                  "Browsertyp und Browserversion",
                  "Verwendetes Betriebssystem",
                  "Referrer URL",
                  "Hostname des zugreifenden Rechners",
                  "IP-Adresse",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="bg-ink-subtle/40 mt-2.5 inline-block size-1 shrink-0 rounded-full"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Es findet keine Zusammenführung dieser Daten mit anderen
                Datenquellen statt. Grundlage der Datenverarbeitung bildet Art.
                6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
                Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Cookies
              </h2>
              <p className="mt-4">
                Unsere Website verwendet Cookies. Das sind kleine Textdateien,
                die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen
                uns dabei, unser Angebot nutzerfreundlicher, effektiver und
                sicherer zu machen.
              </p>
              <p className="mt-4">
                Einige Cookies sind „Session-Cookies“. Solche Cookies werden
                nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen
                bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie
                diese selbst löschen. Solche Cookies helfen uns, Sie bei
                Rückkehr auf unserer Website wiederzuerkennen.
              </p>
              <p className="mt-4">
                Mit einem modernen Webbrowser können Sie das Setzen von Cookies
                überwachen, einschränken oder unterbinden. Viele Webbrowser
                lassen sich so konfigurieren, dass Cookies mit dem Schließen des
                Programms von selbst gelöscht werden. Die Deaktivierung von
                Cookies kann eine eingeschränkte Funktionalität unserer Website
                zur Folge haben.
              </p>
              <p className="mt-4">
                Das Setzen von Cookies, die zur Ausübung elektronischer
                Kommunikationsvorgänge oder der Bereitstellung bestimmter, von
                Ihnen erwünschter Funktionen (z. B. Warenkorb) notwendig sind,
                erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als
                Betreiber dieser Website haben wir ein berechtigtes Interesse
                an der Speicherung von Cookies zur technisch fehlerfreien und
                reibungslosen Bereitstellung unserer Dienste. Sofern die
                Setzung anderer Cookies (z. B. für Analyse-Funktionen) erfolgt,
                werden diese in dieser Datenschutzerklärung separat behandelt.
              </p>
              <p className="mt-4">
                Ohne Ihre Einwilligung setzt diese Website ausschließlich
                technisch notwendige Cookies bzw. lokale Speichereinträge ein
                – etwa zur Speicherung Ihrer Einwilligung selbst (Eintrag{" "}
                <span className="font-mono">sanimotion-consent</span> im Local
                Storage) sowie zur Anzeige der Google-Maps-Karte. Nach
                ausdrücklicher Einwilligung werden zusätzlich Analyse-Cookies
                von Google Analytics 4 gesetzt — Details siehe Abschnitt{" "}
                <span className="text-ink font-medium">„Webanalyse“</span>.
                Marketing- oder Werbe-Tracking-Cookies werden nicht gesetzt.
                Sie können erteilte Einwilligungen jederzeit widerrufen
                — entweder über den Link „Cookie-Einstellungen“ im Footer
                oder durch Löschen der zugehörigen Einträge in Ihrem Browser
                (Cookies / lokaler Speicher).
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Google Maps (2-Klick-Lösung)
              </h2>
              <p className="mt-4">
                Auf einzelnen Seiten unserer Website binden wir die Karte des
                Dienstes „Google Maps“ der Google Ireland Limited (Gordon
                House, Barrow Street, Dublin 4, Irland) ein. Aus
                Datenschutzgründen wird die Karte zunächst nicht direkt
                geladen. Stattdessen sehen Sie einen Platzhalter mit einem
                Hinweis und einer Schaltfläche „Karte anzeigen“. Erst wenn Sie
                diese Schaltfläche aktiv anklicken, wird die Karte von den
                Google-Servern nachgeladen. Dabei können Daten – insbesondere
                Ihre IP-Adresse sowie Informationen über die besuchte Seite –
                an Google übertragen und in den USA verarbeitet werden.
              </p>
              <p className="mt-4">
                Rechtsgrundlage für diese Verarbeitung ist Ihre ausdrückliche
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Ihre
                Einwilligung speichern wir technisch im lokalen Speicher
                (Local Storage) Ihres Browsers, damit die Karte bei einem
                erneuten Besuch direkt angezeigt werden kann. Sie können diese
                Einwilligung jederzeit widerrufen, indem Sie die zugehörigen
                Einträge in den Einstellungen Ihres Browsers löschen. Weitere
                Informationen finden Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
              <p className="mt-4">
                Als Alternative zur interaktiven Karte stellen wir auf jeder
                Standortseite die Adresse als Klartext sowie einen
                Routenplanungs-Link zur Verfügung, der Sie direkt zu Google
                Maps weiterleitet, ohne dass auf unserer Seite ein Drittinhalt
                geladen wird.
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Webanalyse — Google Analytics 4
              </h2>
              <p className="mt-4">
                Diese Website nutzt Google Analytics 4 (GA4), einen
                Webanalysedienst der Google Ireland Limited (Gordon House,
                Barrow Street, Dublin 4, Irland) für Nutzer im Europäischen
                Wirtschaftsraum. Die zugrundeliegende technische Verarbeitung
                erfolgt teilweise auch durch die Google LLC, 1600 Amphitheatre
                Parkway, Mountain View, CA 94043, USA. Mess-ID:{" "}
                <span className="font-mono">G-SQ8XV58NF3</span>.
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">Zweck:</span>{" "}
                Reichweitenmessung sowie Analyse des Nutzerverhaltens, um
                unser Webangebot kontinuierlich zu verbessern.
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">
                  Verarbeitete Daten:
                </span>{" "}
                gekürzte IP-Adresse (IP-Anonymisierung aktiviert), Geräte-
                und Browser-Informationen (User-Agent, Bildschirmauflösung,
                Sprache), Referrer, aufgerufene Seiten, Verweildauer sowie
                Interaktions-Events (z. B. Klicks, Seitenwechsel im SPA).
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">Cookies:</span>{" "}
                <span className="font-mono">_ga</span> (Lebensdauer 2 Jahre)
                und <span className="font-mono">_ga_SQ8XV58NF3</span>{" "}
                (Lebensdauer 2 Jahre) zur Wiedererkennung des Endgeräts und
                zur Sitzungs­zuordnung.
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">Rechtsgrundlage:</span>{" "}
                Ihre ausdrückliche Einwilligung gemäß Art. 6 Abs. 1 lit. a
                DSGVO i. V. m. § 25 Abs. 1 TTDSG. Ohne Ihre Einwilligung
                werden weder das GA4-Skript geladen noch entsprechende
                Cookies gesetzt.
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">
                  Drittlandübermittlung:
                </span>{" "}
                Bei Aktivierung von GA4 können Daten in die USA übertragen
                werden. Google LLC ist unter dem EU-US Data Privacy Framework
                zertifiziert; ergänzend bestehen
                EU-Standardvertragsklauseln. Es besteht ein Restrisiko des
                Zugriffs durch US-Behörden, auf den Google rechtlich nur
                eingeschränkt Einfluss hat.
              </p>
              <p className="mt-4">
                <span className="text-ink font-medium">
                  Widerruf Ihrer Einwilligung:
                </span>{" "}
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die
                Zukunft widerrufen — über den Link „Cookie-Einstellungen“ im
                Footer dieser Website oder durch Löschen des Eintrags{" "}
                <span className="font-mono">sanimotion-consent</span> im
                lokalen Speicher (Local Storage) Ihres Browsers. Zusätzlich
                können Sie die Erfassung durch Google Analytics über das{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  Browser-Add-on zur Deaktivierung von Google Analytics
                </a>{" "}
                unterbinden.
              </p>
              <p className="mt-4">
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie
                in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink duration-fast hover:text-accent underline transition-colors"
                >
                  Datenschutzerklärung von Google
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-heading-md text-ink font-semibold tracking-tight">
                Schriftarten (Web Fonts)
              </h2>
              <p className="mt-4">
                Die auf dieser Website verwendeten Schriftarten werden{" "}
                <span className="text-ink font-medium">lokal von unserem
                eigenen Server</span>{" "}
                ausgeliefert. Es findet kein Abruf externer Schrift-CDNs (z. B.
                Google Fonts, fonts.googleapis.com, fonts.gstatic.com) statt.
                Eine Übermittlung Ihrer IP-Adresse oder anderer Daten an
                Drittanbieter zum Zweck der Schriftauslieferung erfolgt nicht.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}

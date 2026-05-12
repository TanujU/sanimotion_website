/*
 * /agb — Allgemeine Geschäftsbedingungen.
 */
import type { Route } from "./+types/agb";
import { Container } from "~/components/primitives/Container";
import { Section } from "~/components/primitives/Section";
import { Eyebrow } from "~/components/primitives/Eyebrow";
import { Heading } from "~/components/primitives/Heading";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "AGB — Sanimotion" },
    {
      name: "description",
      content:
        "Allgemeine Geschäftsbedingungen der Sanimotion Sanitätshaus GmbH.",
    },
  ];
}

const h2 = "text-heading-lg text-ink font-semibold tracking-tight";
const h3 = "text-heading-md text-ink mt-8 font-semibold tracking-tight";

export default function AGB() {
  return (
    <Section tone="canvas">
      <Container>
        <div className="max-w-[68ch] pt-12 lg:pt-20">
          <Eyebrow>Rechtliches</Eyebrow>
          <Heading as="h1" size="display-lg" className="mt-6">
            Allgemeine Geschäftsbedingungen
          </Heading>
          <p className="text-body-lg text-ink-muted mt-6">
            Sanimotion Sanitätshaus GmbH
          </p>

          <div className="text-body-md text-ink-muted mt-12 space-y-10 lg:mt-16">
            <section>
              <h2 className={h2}>1. Allgemeiner Teil</h2>

              <h3 className={h3}>1.1 Geltungsbereich</h3>
              <p className="mt-4">
                Diese Allgemeinen Geschäftsbedingungen regeln sämtliche
                Geschäftsbeziehungen zwischen dem Verbraucher und der
                Sanimotion Sanitätshaus GmbH (Leistungserbringer). Der Auftrag
                für die Lieferung, Reparatur, Verleihung oder Vermietung von
                Hilfsmitteln erfolgt gemäß den nachfolgenden Bedingungen. Diese
                gelten ebenfalls für alle zukünftigen Geschäftsverhältnisse,
                sofern sie nicht ausdrücklich schriftlich ausgeschlossen
                werden. Die jeweils zum Vertragsschluss gültige Fassung ist
                maßgeblich.
              </p>
              <p className="mt-4">
                Im Falle von Widersprüchen einzelner Vertragsbedingungen gilt
                zwischen den Regelungen als Rangfolge:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6">
                <li>
                  Besondere Vertragsvereinbarungen mit dem Versicherten
                  aufgrund von Vorgaben der gesetzlichen Krankenkassen oder
                  besondere Vertragsvereinbarungen mit den gesetzlichen
                  Krankenkassen,
                </li>
                <li>diese Allgemeinen Geschäftsbedingungen,</li>
                <li>die geltenden gesetzlichen Bestimmungen.</li>
              </ol>
            </section>

            <section>
              <h2 className={h2}>
                2. Abwicklung von ärztlich verordneten Leistungen
              </h2>
              <p className="mt-4">
                <strong className="text-ink">2.1.</strong> Sofern die Leistung
                (zum Beispiel Hilfsmittel), die bestellt werden soll, von einem
                Kostenträger (insbesondere gesetzliche Kranken- oder
                Pflegeversicherungen) übernommen werden kann, ist es
                erforderlich, dass die Leistung ärztlich verordnet und
                grundsätzlich vor der Versorgung (d. h. vor der Bereitstellung
                des Hilfsmittels für den Kunden) vom Kostenträger genehmigt
                wurde. Der Leistungserbringer muss bei der Bestellung darauf
                hinweisen, dass die Leistungspflicht eines Kostenträgers in
                Betracht kommt.
              </p>
              <p className="mt-4">
                <strong className="text-ink">2.2.</strong> In solchen Fällen
                reicht der Kunde das vom Arzt ausgehändigte Rezept bei uns ein.
                Wir werden die erforderlichen Schritte zur Kostenübernahme
                durch den Kostenträger einleiten, sofern dies gesondert mit dem
                Kunden vereinbart wurde. Ein Anspruch auf Klärung der
                Kostenübernahme mit dem Kostenträger besteht nicht. Im Falle
                der Kostenübernahme trägt der Kunde den gesetzlich vorgesehenen
                Eigenanteil, sofern er nicht von einer Zuzahlung befreit ist.
                Der Kunde übernimmt auch etwaige Kosten für bestellte
                Mehrleistungen, die nicht vom Kostenträger übernommen werden.
              </p>
              <p className="mt-4">
                <strong className="text-ink">2.3.</strong> Wenn die
                Kostenübernahme durch die Krankenkasse abgelehnt wird,
                informieren die Vertragsparteien sich umgehend darüber. Wir
                sind nur dann zur Leistung verpflichtet, wenn der Kunde sowohl
                die Bestellung als auch die Übernahme seiner Kosten bestätigt.
                Eventuelle Verzögerungen aufgrund des Genehmigungsverfahrens
                des Kostenträgers gehen nicht zu unseren Lasten. Der Kunde wird
                darauf hingewiesen, dass wir grundsätzlich nicht verpflichtet
                sind, in Vorleistung zu treten, bevor der Kostenträger der
                gesetzlichen Sozialversicherung eine Entscheidung getroffen
                hat.
              </p>
            </section>

            <section>
              <h2 className={h2}>
                3. Versorgung im Auftrag der gesetzlichen Krankenversicherung
                oder eines anderen Sozialversicherungsträgers
              </h2>
              <p className="mt-4">
                <strong className="text-ink">3.1.</strong> Sofern eine
                gesetzliche Krankenkasse als Kostenträger in Frage kommt,
                gelten die verbindlichen Rahmen- oder Dienstleistungsverträge
                bzw. individuellen Vereinbarungen, die mit der jeweiligen
                Krankenkasse getroffen wurden.
              </p>
              <p className="mt-4">
                <strong className="text-ink">3.2.</strong> Der
                Leistungserbringer erstellt bei Bedarf einen Kostenvoranschlag,
                um diesen bei dem Kostenträger einzureichen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">3.3.</strong> Dem Versicherten
                wurde erläutert, dass die Kostenübernahme für die
                Hilfsmittelversorgung gemäß der gesetzlichen Vorschrift über
                den vorgeschriebenen Beschaffungsweg beim zuständigen
                Kostenträger beantragt werden muss, es sei denn, es handelt
                sich um eine unaufschiebbare Leistung oder der Versicherte hat
                mit der Krankenkasse ein Kostenerstattungsmodell vereinbart.
                Nach Abschluss eines Leihvertrages stellt der
                Leistungserbringer dem Versicherten das Hilfsmittel leihweise
                bis zur Entscheidung der Behörde über den Antrag oder bis zum
                Ablauf einer gemäß § 15 Abs. 1 SGB IX festgelegten Frist zur
                Verfügung. Falls der Kostenträger die Kostenübernahme für das
                Hilfsmittel ablehnt oder nicht innerhalb der gesetzten Frist
                nach § 15 Abs. 1 SGB IX entscheidet, hat der Versicherte das
                Recht, das Hilfsmittel selbst zu beschaffen und vom
                Kostenträger eine Kostenerstattung zu verlangen, sollte die
                Sach- oder Dienstleistung genehmigt oder zu Unrecht abgelehnt
                worden sein. Entscheidet sich der Versicherte nicht für die
                Selbstbeschaffung, ist er verpflichtet, das geliehene
                Hilfsmittel auf Aufforderung sofort an den Leistungserbringer
                zurückzugeben.
              </p>
              <p className="mt-4">
                <strong className="text-ink">3.4.</strong> Das Sanitätshaus
                ist befugt, im Namen des Versicherten gegenüber dem
                Kostenträger Willenserklärungen gemäß § 15 Abs. 1 SGB IX
                abzugeben. Der Versicherte wurde darüber informiert, dass er
                nach Ablauf der vom Kostenträger zur Erklärung der
                Kostenübernahme festgelegten Frist gemäß § 15 Abs. 1 SGB IX das
                Recht zur Selbstbeschaffung hat. In diesem Fall kann er die
                Kosten für die Hilfsmittelversorgung vom Kostenträger erstattet
                bekommen, sofern dieser zur Kostenübernahme verpflichtet ist.
              </p>
              <p className="mt-4">
                <strong className="text-ink">3.5.</strong> Sämtliche Kosten im
                Zusammenhang mit der Hilfsmittelversorgung, einschließlich
                etwaiger Folgekosten, trägt der Versicherte. Dies beinhaltet
                Mehrkosten, die durch die Ausübung seines Rechts zur Auswahl
                des Leistungserbringers entstehen, oder wenn kein
                Versorgungsvertrag zwischen dem Leistungserbringer und dem
                Kostenträger abgeschlossen wurde. Die Höhe der nicht
                übernommenen Kosten durch den Kostenträger wird nach
                Entscheidung des Kostenträgers entweder durch diesen oder den
                Leistungserbringer nachgewiesen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">3.6.</strong> Vom
                Leistungsempfänger wird voraussichtlich eine gesetzliche
                Zuzahlung von mindestens 5,- € bis maximal 10,- € für die
                Hilfsmittel erwartet, sofern der Leistungsempfänger nicht von
                der gesetzlichen Zuzahlung befreit ist. Der Kostenträger legt
                für Hilfsmittel aus dem täglichen Gebrauch einen separaten
                Eigenanteil fest.
              </p>
            </section>

            <section>
              <h2 className={h2}>
                4. Versorgung von Privatversicherten und Beihilfeberechtigten
              </h2>
              <p className="mt-4">
                <strong className="text-ink">4.1.</strong> Die Bestimmungen in
                Abschnitt 2 dieser Bedingungen finden keine Anwendung, wenn
                der Kunde privat krankenversichert ist oder keinen Anspruch auf
                Leistungen von einem Träger der gesetzlichen Sozialversicherung
                hat. In diesen Fällen erfolgen die Leistungen ausschließlich
                aufgrund eines privaten Auftrags. Der Käufer/Mieter ist selbst
                dafür verantwortlich, eventuelle Kostenerstattungsansprüche
                gegen seine private Versicherung oder Beihilfestelle geltend zu
                machen. Die Wirksamkeit des Auftrags und die Fälligkeit der
                Vergütung bleiben davon unberührt.
              </p>
            </section>

            <section>
              <h2 className={h2}>
                5. Bedingungen bei Lieferung und Reparatur von Hilfsmitteln
              </h2>

              <h3 className={h3}>
                5.1 Zahlungsmodalitäten, Verzug und Eigentumsvorbehalt
              </h3>
              <p className="mt-4">
                <strong className="text-ink">5.1.1.</strong> Die genannten
                Preise sind Endpreise und enthalten die gesetzliche
                Mehrwertsteuer. Bei einem Zeitraum von mehr als vier Monaten
                zwischen Vertragsabschluss und Lieferdatum gelten die am Tag
                der Lieferung aktuellen Preise.
              </p>
              <p className="mt-4">
                <strong className="text-ink">5.1.2.</strong> Der
                Leistungserbringer ist berechtigt, Abschlagszahlungen zu
                verlangen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">5.1.3.</strong> Alle Rechnungen
                des Leistungserbringers – auch Abschlagszahlungen – sind
                sofort, spätestens 14 Tage ab Rechnungsdatum ohne Abzug
                zahlbar. Eine Zahlung gilt erst dann als erfolgt, wenn der
                Leistungserbringer über den Betrag verfügen kann. Die
                Zahlungen erfolgen in bar oder auf ein von dem
                Leistungserbringer angegebenes Bankkonto. Zusätzlich ist es der
                Factoring-Firma AZH gestattet, in unserem Namen Rechnungen an
                unsere Kunden zu stellen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">5.1.4.</strong> Der Kunde ist zur
                Abnahme der Kaufsache verpflichtet. Die Abnahmeverpflichtung
                ist als Hauptleistungspflicht im Gegenseitigkeitsverhältnis
                sofort und unter gleichzeitiger Zahlung des Kaufpreises zu
                erfüllen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">5.1.5.</strong> Bis zur
                vollständigen Bezahlung des Kaufpreises behält der
                Leistungserbringer das Eigentum an dem Hilfsmittel vor. Der
                Käufer ist während dieser Zeit verpflichtet, das Hilfsmittel
                sorgsam zu behandeln und vor dem Zugriff Dritter zu schützen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">5.1.6.</strong> Der Versand der
                Hilfsmittel per Post/Paketdienst unterliegt zusätzlichen
                Versandkosten, die entsprechend den zum betreffenden Zeitpunkt
                gültigen Marktpreisen berechnet werden.
              </p>
            </section>

            <section>
              <h2 className={h2}>6. Gewährleistung</h2>
              <p className="mt-4">
                <strong className="text-ink">6.1.</strong> Bei Vorliegen von
                Mängeln am gelieferten Hilfsmittel kann der Käufer zunächst die
                Beseitigung des Mangels oder die Lieferung eines mangelfreien
                Produkts verlangen (Nacherfüllung). Der Leistungserbringer kann
                die vom Käufer gewählte Nacherfüllungsart verweigern, wenn sie
                mit unverhältnismäßigen Kosten verbunden ist. Hierbei werden
                insbesondere der Wert des Produkts im mangelfreien Zustand,
                die Bedeutung des Mangels und die Möglichkeit einer anderen
                Nacherfüllungsart ohne erhebliche Nachteile für den Käufer
                berücksichtigt. In diesem Fall beschränkt sich der Anspruch
                des Käufers auf die alternative Nacherfüllungsart, die der
                Verkäufer ebenfalls wegen unverhältnismäßiger Kosten ablehnen
                kann. Wenn der Verkäufer zu Nacherfüllungszwecken ein
                mangelfreies Produkt liefert, ist der Käufer verpflichtet, das
                mangelhafte Produkt zurückzugeben und den Wert der gezogenen
                Nutzungen zu ersetzen. Zur Ermittlung des Nutzwerts erfolgt
                eine zeitanteilige lineare Wertminderung im Vergleich zwischen
                der tatsächlichen Gebrauchsdauer und der voraussichtlichen
                Gesamtnutzungsdauer.
              </p>
              <p className="mt-4">
                <strong className="text-ink">6.2.</strong> Der Käufer muss
                offensichtliche Mängel dem Leistungserbringer innerhalb von 14
                Tagen mitteilen. Wenn der Käufer es versäumt, den Mangel
                rechtzeitig anzuzeigen, verliert er das Recht, Ansprüche oder
                Rechte wegen des betreffenden Mangels geltend zu machen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">6.3.</strong> Falls die
                Nacherfüllung scheitert, steht es dem Käufer frei, vom Vertrag
                zurückzutreten oder den Kaufpreis zu mindern. Im Falle eines
                Rücktritts hat der Käufer die mangelhafte Ware zurückzugeben
                und den Wert der gezogenen Nutzungen zu erstatten. Die
                Ermittlung des Nutzungswerts erfolgt anhand der zeitanteiligen
                linearen Wertminderung im Vergleich zwischen der tatsächlichen
                Gebrauchsdauer und der voraussichtlichen Gesamtnutzungsdauer.
              </p>
            </section>

            <section>
              <h2 className={h2}>7. Haftungsbegrenzung</h2>
              <p className="mt-4">
                <strong className="text-ink">7.1.</strong> Bei Schäden aus der
                Verletzung des Lebens, des Körpers oder der Gesundheit haften
                wir nach den gesetzlichen Vorschriften.
              </p>
              <p className="mt-4">
                <strong className="text-ink">7.2.</strong> Bei Schäden, die
                aus der Verletzung einer wesentlichen Vertragspflicht, also
                einer solchen Pflicht, welche die ordnungsgemäße Durchführung
                des Vertrages erst ermöglicht und auf deren Einhaltung der
                Kunde daher auf jeden Fall vertrauen durfte, haften wir
                ebenfalls nach den gesetzlichen Vorschriften, wobei die
                Haftung in diesem Fall auf denjenigen Schaden begrenzt ist,
                mit dessen Eintritt wir bei Vertragsschluss vernünftigerweise
                rechnen mussten. Letztere Beschränkung gilt nicht für die
                Fälle der Verletzung des Lebens, des Körpers oder der
                Gesundheit.
              </p>
              <p className="mt-4">
                <strong className="text-ink">7.3.</strong> In allen anderen
                Fällen ist unsere Haftung auf vorsätzliche und grob fahrlässig
                begangene Pflichtverletzungen beschränkt, wobei im Falle
                fahrlässiger Pflichtverletzungen der Anspruch auf denjenigen
                Schaden begrenzt ist, mit dessen Eintritt wir bei
                Vertragsschluss vernünftigerweise rechnen mussten.
              </p>
            </section>

            <section>
              <h2 className={h2}>8. Verjährung bei gebrauchten Sachen</h2>
              <p className="mt-4">
                <strong className="text-ink">8.1.</strong> Die
                Verjährungsfrist für Mängelansprüche bei gebrauchten Sachen
                beträgt ein Jahr. Dies gilt nicht für Hilfsmittel, die
                entsprechend ihrer üblichen Verwendungsweise erstmals für ein
                Bauwerk verwendet werden.
              </p>
            </section>

            <section>
              <h2 className={h2}>
                9. Bedingungen bei der Vermietung und Verleihung von
                Hilfsmitteln
              </h2>

              <h3 className={h3}>9.1 Pflichten des Vermieters/Verleihers</h3>
              <p className="mt-4">
                <strong className="text-ink">9.1.1.</strong> Der
                Vermieter/Verleiher stellt dem Mieter/Entleiher das Hilfsmittel
                während der vereinbarten Mietdauer in einwandfreiem und
                betriebsfähigem Zustand samt den erforderlichen Unterlagen zur
                Verfügung. Der Mieter/Entleiher erhält eine Einweisung in die
                Nutzung des Hilfsmittels.
              </p>

              <h3 className={h3}>9.2 Haftung des Leistungserbringers</h3>
              <p className="mt-4">
                <strong className="text-ink">9.2.1.</strong> Der
                Leistungserbringer haftet nicht für Schäden, die durch
                unsachgemäße oder nicht bestimmungsgemäße Verwendung des
                Hilfsmittels entstehen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.2.2.</strong>{" "}
                Schadensersatzansprüche aufgrund von Vertragsverletzungen oder
                unerlaubter Handlung gegen den Leistungserbringer und seine
                Erfüllungs- bzw. Verrichtungsgehilfen sind ausgeschlossen,
                sofern der Schaden nicht vorsätzlich oder grob fahrlässig
                verursacht wurde.
              </p>

              <h3 className={h3}>9.3 Pflichten des Mieters/Entleihers</h3>
              <p className="mt-4">
                <strong className="text-ink">9.3.1.</strong> Der
                Mieter/Entleiher hat die Verpflichtung, das Hilfsmittel nur
                zweckentsprechend und sachgerecht zu verwenden sowie es
                sorgsam zu behandeln. Er muss sicherstellen, dass Dritte keine
                Nutzung haben. Das Hilfsmittel ist vor Diebstahl zu schützen
                und vor Feuer zu bewahren. Der Abschluss von entsprechenden
                Versicherungen wird dringend empfohlen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.3.2.</strong> Der
                Mieter/Entleiher ist verpflichtet, dem Leistungserbringer jede
                Schädigung des gemieteten Objekts umgehend zu melden,
                unabhängig davon, ob sie auf natürlichen Verschleiß
                zurückzuführen ist oder vom Mieter/Entleiher oder Dritten
                verursacht wurde. Die Nutzung eines beschädigten oder nicht
                betriebssicheren Hilfsmittels ist untersagt. Bei Schäden durch
                Dritte ist dem Vermieter/Verleiher sofort ein Schadensprotokoll
                mit dem Namen und der Adresse des Schädigers zu übermitteln.
                Das Formular für das Schadensprotokoll ist beim
                Leistungserbringer erhältlich und kann angefordert werden,
                indem der Vorfall gemeldet wird.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.3.3.</strong> Änderungen von
                Adresse und Name sowie die Ausfuhr des Hilfsmittels ins Ausland
                müssen dem Leistungserbringer sofort mitgeteilt werden.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.3.4.</strong> Sofern keine
                medizinischen Gründe für eine weitere Nutzung des Hilfsmittels
                vorliegen, ist das Hilfsmittel nach Ablauf der im Leihvertrag
                vereinbarten Leihdauer an den Leistungserbringer zurückzugeben.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.3.5.</strong> Sollte aus
                medizinischen Gründen eine Verlängerung der Versorgung
                notwendig sein, ist der Mieter/Entleiher verpflichtet, dies dem
                Leistungserbringer vor Ablauf der Leihfrist zu melden und eine
                Folgeverordnung seines Arztes für die Verlängerung der
                Leihdauer zu erbringen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.3.6.</strong> Bei verspäteter
                Rückgabe des Leih-Hilfsmittels behalten wir uns vor, die
                weitere Nutzung des Hilfsmittels zu einem handelsüblichen
                Tagessatz in Rechnung zu stellen.
              </p>

              <h3 className={h3}>9.4 Haftung des Mieters/Entleihers</h3>
              <p className="mt-4">
                <strong className="text-ink">9.4.1.</strong> Der
                Mieter/Entleiher ist verantwortlich für jegliche Schäden am
                Mietgegenstand, die durch Vorsatz, grobe Fahrlässigkeit oder
                nicht bestimmungsgemäßen Gebrauch verursacht werden. In solchen
                Fällen ist der Mieter/Entleiher verpflichtet, die entstandenen
                Schäden auf eigene Kosten durch den Leistungserbringer beheben
                zu lassen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.4.2.</strong> Der
                Mieter/Entleiher ist verantwortlich für sämtliche Schäden, die
                entstehen, wenn das Hilfsmittel von Dritten genutzt wird oder
                nicht ausreichend gegen Diebstahl oder Feuer geschützt ist.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.4.3.</strong> Der
                Mieter/Entleiher ist verantwortlich für den Verlust des
                Mietgegenstandes, wenn dieser auf Umstände zurückzuführen ist,
                die dem Mieter/Entleiher zuzuschreiben sind. Zusätzlich trägt
                der Mieter/Entleiher die Verantwortung für die angemessene
                Lagerung des Hilfsmittels.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.4.4.</strong> Der
                Mieter/Entleiher oder dessen Erben sind verantwortlich für
                Schäden, die dem Vermieter/Verleiher entstehen, weil dieser
                nicht rechtzeitig über das Wegfallen der medizinischen
                Notwendigkeit für die Bereitstellung des Hilfsmittels
                informiert wurde.
              </p>

              <h3 className={h3}>9.5 Reparaturen</h3>
              <p className="mt-4">
                <strong className="text-ink">9.5.1.</strong> Die
                Instandsetzungsarbeiten dürfen ausschließlich vom
                Leistungserbringer oder von einer von ihm beauftragten Person
                oder Firma durchgeführt werden. Das Hilfsmittel sollte weder
                vom Versicherten/Mieter noch von einer Drittperson geöffnet
                oder repariert werden.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.5.2.</strong> Der
                Vermieter/Verleiher stellt dem Mieter/Entleiher für die Zeit
                der Reparatur ein gleichwertiges Ersatzhilfsmittel zur
                Verfügung, sofern dies für ihn zumutbar ist. Während der
                Reparatur oder im Falle des Verlusts des Hilfsmittels ist der
                Mieter verpflichtet, die Miete fortzusetzen, sofern die
                Beschädigung oder der Verlust von ihm verschuldet ist. Falls
                der Mieter die Beschädigung oder den Verlust des Hilfsmittels
                zu verantworten hat, trägt er auch die entstehenden
                Reparaturkosten.
              </p>

              <h3 className={h3}>9.6 Kündigung durch den Leistungserbringer</h3>
              <p className="mt-4">
                <strong className="text-ink">9.6.1.</strong> Der
                Leistungserbringer behält sich das Recht vor, das
                Mietverhältnis oder die Leihe fristlos zu kündigen, wenn der
                Mieter/Entleiher das Hilfsmittel zweckentfremdet nutzt, das
                Hilfsmittel ohne schriftliche Zustimmung an Dritte weitergibt
                oder rückständige Mietzahlungen trotz Mahnung nicht innerhalb
                einer Woche begleicht.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.6.2.</strong> Bei einer
                fristlosen Kündigung hat der Mieter/Entleiher die
                Verpflichtung, das Hilfsmittel umgehend zurückzugeben. Der
                Leistungserbringer behält sich das Recht vor, das Hilfsmittel
                auf Kosten des Versicherten abholen zu lassen, falls der
                Mieter/Entleiher es nicht innerhalb von 2 Werktagen
                zurückbringt.
              </p>
              <p className="mt-4">
                <strong className="text-ink">9.6.3.</strong> Falls für das
                gemietete oder entliehene Hilfsmittel die Kostenübernahme bei
                einem Sozialversicherungsträger beantragt wurde und dieser die
                Übernahme ablehnt oder nicht innerhalb der gesetzlich
                vorgeschriebenen Frist gemäß § 15 SGB IX entscheidet, behält
                sich der Vermieter/Verleiher das Recht vor, die Miete oder
                Leihe zu kündigen. In einem solchen Fall wird die Herausgabe
                des Hilfsmittels innerhalb einer angemessenen Frist von
                mindestens einer Woche gefordert.
              </p>
            </section>

            <section>
              <h2 className={h2}>10. Beratungsdokumentation</h2>
              <p className="mt-4">
                <strong className="text-ink">10.1.</strong> Das Heil- und
                Hilfsmittel-Versorgungsgesetz verpflichtet den
                Leistungserbringer, vor der Versorgung eine umfassende Beratung
                vorzunehmen. Diese Beratung ist zu dokumentieren und vom Kunden
                ggf. persönlich zu unterschreiben.
              </p>
            </section>

            <section>
              <h2 className={h2}>11. Befreiungsausweis</h2>
              <p className="mt-4">
                <strong className="text-ink">11.1.</strong> Befreiungsausweise
                sind unaufgefordert, spätestens bei der Abgabe des Produkts an
                den Kunden vorzulegen. Nach Abgabe des Produkts vorgelegte
                Befreiungsausweise können bei der Abrechnung mit dem
                Kostenträger nicht mehr berücksichtigt werden.
              </p>
            </section>

            <section>
              <h2 className={h2}>12. Datenschutz</h2>
              <p className="mt-4">
                <strong className="text-ink">12.1.</strong> Der
                Versicherte/Kunde stimmt der elektronischen Speicherung
                persönlicher Daten seiner Bestellung zu und erlaubt die
                Verarbeitung und Nutzung dieser Daten gemäß den gesetzlichen
                Vorschriften für die Zwecke der Geschäftsbeziehung.
              </p>
              <p className="mt-4">
                <strong className="text-ink">12.2.</strong> Darüber hinaus
                entbindet der Versicherte/Kunde die beteiligten Kostenträger,
                behandelnden Ärzte sowie medizinischen Einrichtungen von ihrer
                Verschwiegenheitspflicht gegenüber dem Leistungserbringer in
                Bezug auf die für die Leistungserbringung relevanten Daten und
                Informationen.
              </p>
            </section>

            <section>
              <h2 className={h2}>13. Erfüllungsort und Gerichtsstand</h2>
              <p className="mt-4">
                <strong className="text-ink">13.1.</strong> Im kaufmännischen
                Verkehr gilt der Geschäftssitz der Sanimotion Sanitätshaus
                GmbH als Erfüllungsort, sofern diese Geschäftsbedingungen keine
                abweichenden Regelungen vorsehen.
              </p>
              <p className="mt-4">
                <strong className="text-ink">13.2.</strong> Bei sämtlichen
                Auseinandersetzungen aus diesem Vertrag mit Kaufleuten als
                Käufer ist der Gerichtsstand am Geschäftssitz des
                Leistungserbringers. Der Leistungserbringer hat außerdem das
                Recht, den Käufer an dessen Wohnsitz oder Geschäftssitz zu
                verklagen.
              </p>
            </section>

            <p className="text-caption text-ink-subtle pt-4 font-mono tracking-widest uppercase">
              Berlin, 10.04.2024 — Die Geschäftsführung
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

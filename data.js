// VWL Lernkarten - Datenbasis
const vwlData = [
    // Grundlagen der Wirtschaft
    {
        id: 1,
        term: "Bedürfnisse",
        definition: "Gefühl des Mangels und der Wunsch, diesen zu beseitigen. Werden unterteilt in Existenz-, Kultur- und Luxusbedürfnisse.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 2,
        term: "Güter",
        definition: "Mittel zur Bedürfnisbefriedigung. Unterscheidung zwischen freien Gütern (unbegrenzt verfügbar) und wirtschaftlichen Gütern (knapp).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 3,
        term: "Knappheit",
        definition: "Grundproblem der Wirtschaft: Unbegrenzte Bedürfnisse treffen auf begrenzte Mittel (Güter und Ressourcen).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 4,
        term: "Ökonomisches Prinzip",
        definition: "Rationaler Umgang mit knappen Ressourcen. Maximalprinzip (maximaler Nutzen bei gegebenen Mitteln) oder Minimalprinzip (gegebenes Ziel mit minimalen Mitteln).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 5,
        term: "Arbeitsteilung",
        definition: "Aufteilung der Produktion auf verschiedene Personen oder Betriebe. Führt zu Spezialisierung und erhöhter Effizienz.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 6,
        term: "Konsumgüter",
        definition: "Güter, die direkt zur Bedürfnisbefriedigung der Verbraucher dienen (z.B. Lebensmittel, Kleidung).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 7,
        term: "Investitionsgüter",
        definition: "Güter, die zur Produktion anderer Güter verwendet werden (z.B. Maschinen, Gebäude, Fahrzeuge).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },

    // Produktionsprozess in der Volkswirtschaft
    {
        id: 8,
        term: "Produktionsfaktoren",
        definition: "Die zur Produktion benötigten Eingangsfaktoren: Arbeit, Boden (natürliche Ressourcen) und Kapital.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 9,
        term: "Arbeit (Produktionsfaktor)",
        definition: "Menschliche Arbeitsleistung in körperlicher und geistiger Form. Qualität hängt von Bildung und Ausbildung ab.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 10,
        term: "Boden (Produktionsfaktor)",
        definition: "Natürliche Ressourcen und Rohstoffe sowie Grund und Boden für Produktion und Standorte.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 11,
        term: "Kapital (Produktionsfaktor)",
        definition: "Produzierte Produktionsmittel wie Maschinen, Anlagen, Gebäude und Infrastruktur.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 12,
        term: "Kapitalbildung",
        definition: "Verzicht auf gegenwärtigen Konsum zugunsten von Investitionen, um zukünftige Produktionsmöglichkeiten zu erweitern.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 13,
        term: "Produktionsmöglichkeitskurve",
        definition: "Grafische Darstellung der maximalen Produktionsmöglichkeiten einer Volkswirtschaft bei gegebenen Ressourcen.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 14,
        term: "Opportunitätskosten",
        definition: "Kosten einer Entscheidung, gemessen am Nutzen der besten nicht realisierten Alternative.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },

    // Wirtschaftskreislauf
    {
        id: 15,
        term: "Wirtschaftskreislauf",
        definition: "Modell zur Darstellung der Güter- und Geldströme zwischen den Wirtschaftssubjekten einer Volkswirtschaft.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 16,
        term: "Einfacher Wirtschaftskreislauf",
        definition: "Modell mit nur zwei Akteuren: Haushalte und Unternehmen. Zeigt Güter- und Geldströme zwischen ihnen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 17,
        term: "Erweiterter Wirtschaftskreislauf",
        definition: "Modell mit zusätzlichen Akteuren: Staat, Banken und Ausland. Berücksichtigt Steuern, Sparen und Außenhandel.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 18,
        term: "Bruttoinlandsprodukt (BIP)",
        definition: "Gesamtwert aller in einem Land innerhalb eines Jahres produzierten Güter und Dienstleistungen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 19,
        term: "Volkseinkommen",
        definition: "Summe aller Einkommen, die den Inländern in einer Periode zufließen (Löhne, Gewinne, Zinsen, Mieten).",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 20,
        term: "Entstehungsrechnung",
        definition: "Berechnung des BIP durch Addition der Wertschöpfung aller Wirtschaftsbereiche.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 21,
        term: "Verwendungsrechnung",
        definition: "Berechnung des BIP durch Addition von Konsum, Investitionen, Staatsausgaben und Nettoexporten.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 22,
        term: "Verteilungsrechnung",
        definition: "Berechnung des BIP durch Addition aller Einkommen (Löhne, Gewinne, Zinsen, Mieten) plus Steuern minus Subventionen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 23,
        term: "Wirtschaftswachstum",
        definition: "Zunahme des realen BIP einer Volkswirtschaft über einen bestimmten Zeitraum, meist ein Jahr.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 24,
        term: "Nominales BIP",
        definition: "BIP zu laufenden Preisen, ohne Berücksichtigung der Inflation.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 25,
        term: "Reales BIP",
        definition: "BIP zu konstanten Preisen eines Basisjahres, bereinigt um Inflationseffekte.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 26,
        term: "BIP pro Kopf",
        definition: "BIP geteilt durch die Einwohnerzahl. Indikator für den durchschnittlichen Wohlstand.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 27,
        term: "Einkommensverteilung",
        definition: "Aufteilung des Volkseinkommens auf verschiedene Gruppen (funktionale und personelle Verteilung).",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 28,
        term: "Funktionale Einkommensverteilung",
        definition: "Aufteilung des Volkseinkommens nach Produktionsfaktoren (Löhne, Gewinne, Zinsen, Mieten).",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 29,
        term: "Personelle Einkommensverteilung",
        definition: "Aufteilung des Volkseinkommens auf verschiedene Personen oder Haushalte.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 30,
        term: "Sparen",
        definition: "Verzicht auf gegenwärtigen Konsum. Im Kreislauf Abfluss aus dem Einkommensstrom der Haushalte.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },

    // Erweiterte Grundlagen der Wirtschaft
    {
        id: 31,
        term: "Wirtschaftssystem",
        definition: "Ordnungsrahmen einer Volkswirtschaft, der regelt, wie wirtschaftliche Entscheidungen getroffen werden (z.B. Marktwirtschaft, Planwirtschaft).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 32,
        term: "Marktwirtschaft",
        definition: "Wirtschaftssystem, in dem Angebot und Nachfrage den Preis bestimmen und private Eigentumsrechte bestehen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 33,
        term: "Soziale Marktwirtschaft",
        definition: "Wirtschaftsordnung, die freie Marktwirtschaft mit sozialer Absicherung und staatlichen Eingriffen kombiniert.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 34,
        term: "Planwirtschaft",
        definition: "Wirtschaftssystem, in dem der Staat zentral über Produktion und Verteilung entscheidet.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 35,
        term: "Freie Güter",
        definition: "Güter, die ohne menschliche Arbeit entstehen und unbegrenzt verfügbar sind (z.B. Luft, Sonnenschein).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 36,
        term: "Wirtschaftliche Güter",
        definition: "Knappe Güter, die menschliche Arbeit erfordern und einen Preis haben (z.B. Autos, Nahrungsmittel).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 37,
        term: "Komplementärgüter",
        definition: "Güter, die sich ergänzen und meist zusammen konsumiert werden (z.B. Auto und Benzin).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 38,
        term: "Substitutionsgüter",
        definition: "Güter, die sich gegenseitig ersetzen können (z.B. Butter und Margarine).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 39,
        term: "Existenzbedürfnisse",
        definition: "Grundbedürfnisse, die zum Überleben notwendig sind (z.B. Nahrung, Kleidung, Wohnung).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 40,
        term: "Kulturbedürfnisse",
        definition: "Bedürfnisse, die durch das gesellschaftliche Umfeld geprägt sind (z.B. Bildung, Kommunikation).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 41,
        term: "Luxusbedürfnisse",
        definition: "Bedürfnisse nach gehobenen Gütern, die über das Notwendige hinausgehen (z.B. Schmuck, Luxusautos).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },

    // Erweiterte Produktionsfaktoren
    {
        id: 42,
        term: "Volkswirtschaftliche Produktionsfaktoren",
        definition: "Arbeit, Boden und Kapital als die drei klassischen Faktoren der Güterproduktion in einer Volkswirtschaft.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 43,
        term: "Derivativer Produktionsfaktor",
        definition: "Kapital als abgeleiteter Produktionsfaktor, der durch den Einsatz von Arbeit und Boden entstanden ist.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 44,
        term: "Originärer Produktionsfaktor",
        definition: "Ursprüngliche Produktionsfaktoren Arbeit und Boden, die nicht durch andere Faktoren produziert wurden.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 45,
        term: "Humankapital",
        definition: "Wissen, Fähigkeiten und Erfahrungen der Arbeitskräfte als qualitative Dimension des Faktors Arbeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 46,
        term: "Realkapital",
        definition: "Sachkapital wie Maschinen, Gebäude und Anlagen zur Güterproduktion.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 47,
        term: "Bruttoinvestition",
        definition: "Gesamte Investitionen einer Periode einschließlich Ersatzinvestitionen für verschlissenes Kapital.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 48,
        term: "Nettoinvestition",
        definition: "Bruttoinvestition minus Abschreibungen; führt zur Erhöhung des Kapitalstocks.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 49,
        term: "Ersatzinvestition",
        definition: "Investitionen zum Ersatz verschlissener oder veralteter Produktionsanlagen.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 50,
        term: "Erweiterungsinvestition",
        definition: "Investitionen zur Erhöhung der Produktionskapazität über das bisherige Niveau hinaus.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },

    // Markt und Preisbildung (neue Kategorie)
    {
        id: 51,
        term: "Markt",
        definition: "Ort des Zusammentreffens von Angebot und Nachfrage, wo Preise für Güter und Dienstleistungen gebildet werden.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 52,
        term: "Angebot",
        definition: "Menge an Gütern oder Dienstleistungen, die Anbieter zu verschiedenen Preisen verkaufen möchten.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 53,
        term: "Nachfrage",
        definition: "Menge an Gütern oder Dienstleistungen, die Nachfrager zu verschiedenen Preisen kaufen möchten.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 54,
        term: "Gleichgewichtspreis",
        definition: "Preis, bei dem sich Angebot und Nachfrage entsprechen und der Markt geräumt wird.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 55,
        term: "Preisbildung",
        definition: "Prozess der Bestimmung von Preisen durch das Zusammenwirken von Angebot und Nachfrage.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 56,
        term: "Angebotsüberschuss",
        definition: "Situation, in der das Angebot die Nachfrage übersteigt, was zu Preissenkungen führt.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 57,
        term: "Nachfrageüberschuss",
        definition: "Situation, in der die Nachfrage das Angebot übersteigt, was zu Preissteigerungen führt.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 58,
        term: "Preiselastizität der Nachfrage",
        definition: "Maß für die Reaktion der Nachfragemenge auf Preisänderungen.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 59,
        term: "Elastische Nachfrage",
        definition: "Nachfrage reagiert stark auf Preisänderungen (Elastizität > 1).",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 60,
        term: "Unelastische Nachfrage",
        definition: "Nachfrage reagiert schwach auf Preisänderungen (Elastizität < 1).",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },

    // Geld und Inflation (neue Kategorie)
    {
        id: 61,
        term: "Geld",
        definition: "Allgemein akzeptiertes Tauschmittel, das die Funktionen Wertmesser, Wertaufbewahrung und Zahlungsmittel erfüllt.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 62,
        term: "Geldfunktionen",
        definition: "Tauschmittelfunktion, Wertmesserfunktion (Recheneinheit) und Wertaufbewahrungsfunktion.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 63,
        term: "Geldmenge M1",
        definition: "Bargeld und täglich fällige Einlagen (Sichteinlagen) bei Banken.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 64,
        term: "Geldmenge M2",
        definition: "M1 plus Einlagen mit Kündigungsfrist bis zu 3 Monaten und Termineinlagen bis zu 2 Jahren.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 65,
        term: "Geldmenge M3",
        definition: "M2 plus Repogeschäfte, Geldmarktfondsanteile und Schuldverschreibungen bis zu 2 Jahren.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 66,
        term: "Inflation",
        definition: "Anhaltender Anstieg des allgemeinen Preisniveaus, der zu einer Verringerung der Kaufkraft führt.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 67,
        term: "Deflation",
        definition: "Anhaltender Rückgang des allgemeinen Preisniveaus.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 68,
        term: "Preisstabilität",
        definition: "Zustand geringer und stabiler Inflationsraten, Ziel der Europäischen Zentralbank (unter, aber nahe 2%).",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 69,
        term: "Kaufkraft",
        definition: "Menge an Gütern und Dienstleistungen, die mit einer Geldeinheit erworben werden kann.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 70,
        term: "Nominaler Wert",
        definition: "Geldwert zu jeweiligen Preisen ohne Berücksichtigung der Inflation.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 71,
        term: "Realer Wert",
        definition: "Kaufkraftbereinigter Wert, der die Inflation berücksichtigt.",
        category: "geld",
        categoryName: "Geld und Währung"
    },

    // Konjunktur und Wachstum (neue Kategorie)
    {
        id: 72,
        term: "Konjunktur",
        definition: "Schwankungen der gesamtwirtschaftlichen Aktivität um den langfristigen Wachstumstrend.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 73,
        term: "Konjunkturzyklus",
        definition: "Regelmäßige Abfolge von Aufschwung, Hochkonjunktur, Abschwung und Rezession.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 74,
        term: "Rezession",
        definition: "Phase des Konjunkturzyklus mit rückläufiger Wirtschaftsleistung über mindestens zwei Quartale.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 75,
        term: "Boom",
        definition: "Phase starken Wirtschaftswachstums mit hoher Kapazitätsauslastung und steigenden Preisen.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 76,
        term: "Depression",
        definition: "Schwere und lang andauernde Rezession mit stark sinkender Wirtschaftsleistung.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 77,
        term: "Produktionspotential",
        definition: "Maximale Güterproduktion einer Volkswirtschaft bei Vollauslastung aller Produktionsfaktoren.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 78,
        term: "Produktionslücke",
        definition: "Differenz zwischen tatsächlicher und potentieller Wirtschaftsleistung.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 79,
        term: "Führende Indikatoren",
        definition: "Wirtschaftsgrößen, die Konjunkturentwicklungen voraussagen (z.B. Auftragseingänge, Aktienkurse).",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 80,
        term: "Nachlaufende Indikatoren",
        definition: "Wirtschaftsgrößen, die Konjunkturentwicklungen mit Verzögerung anzeigen (z.B. Arbeitslosigkeit).",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },

    // Arbeitsmarkt (neue Kategorie)
    {
        id: 81,
        term: "Erwerbspersonenpotential",
        definition: "Alle Personen im erwerbsfähigen Alter (15-74 Jahre), die arbeiten können und wollen.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 82,
        term: "Erwerbsquote",
        definition: "Anteil der Erwerbspersonen an der Bevölkerung im erwerbsfähigen Alter.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 83,
        term: "Arbeitslosenquote",
        definition: "Anteil der Arbeitslosen an allen Erwerbspersonen (Beschäftigte + Arbeitslose).",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 84,
        term: "Vollbeschäftigung",
        definition: "Zustand, in dem alle arbeitswilligen und arbeitsfähigen Personen einen Arbeitsplatz haben.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 85,
        term: "Strukturelle Arbeitslosigkeit",
        definition: "Arbeitslosigkeit durch strukturelle Veränderungen in der Wirtschaft (Qualifikationen passen nicht zur Nachfrage).",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 86,
        term: "Konjunkturelle Arbeitslosigkeit",
        definition: "Arbeitslosigkeit durch konjunkturelle Schwankungen und unzureichende Gesamtnachfrage.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 87,
        term: "Friktionelle Arbeitslosigkeit",
        definition: "Vorübergehende Arbeitslosigkeit beim Wechsel zwischen Arbeitsplätzen (Sucharbeitslosigkeit).",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 88,
        term: "Mindestlohn",
        definition: "Gesetzlich oder tariflich festgelegter Mindestlohn pro Arbeitsstunde.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },

    // Außenhandel (neue Kategorie)
    {
        id: 89,
        term: "Außenhandel",
        definition: "Handel zwischen verschiedenen Ländern durch Import und Export von Gütern und Dienstleistungen.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 90,
        term: "Export",
        definition: "Verkauf von Gütern und Dienstleistungen ins Ausland (Ausfuhr).",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 91,
        term: "Import",
        definition: "Kauf von Gütern und Dienstleistungen aus dem Ausland (Einfuhr).",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 92,
        term: "Handelsbilanz",
        definition: "Differenz zwischen Exporten und Importen von Gütern eines Landes.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 93,
        term: "Handelsüberschuss",
        definition: "Positive Handelsbilanz: Exporte sind größer als Importe.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 94,
        term: "Handelsdefizit",
        definition: "Negative Handelsbilanz: Importe sind größer als Exporte.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 95,
        term: "Komparativer Vorteil",
        definition: "Fähigkeit eines Landes, ein Gut zu geringeren Opportunitätskosten zu produzieren als andere Länder.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 96,
        term: "Absoluter Vorteil",
        definition: "Fähigkeit eines Landes, ein Gut mit weniger Ressourcen zu produzieren als andere Länder.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 97,
        term: "Freihandel",
        definition: "Internationaler Handel ohne Handelshemmnisse wie Zölle oder Importquoten.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 98,
        term: "Protektionismus",
        definition: "Politik zum Schutz der heimischen Wirtschaft durch Handelshemmnisse.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 99,
        term: "Zoll",
        definition: "Steuer auf importierte Güter zum Schutz der heimischen Produzenten.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },
    {
        id: 100,
        term: "Wechselkurs",
        definition: "Preis einer Währung ausgedrückt in einer anderen Währung.",
        category: "aussenhandel",
        categoryName: "Außenhandel"
    },

    // Erweiterte Wirtschaftskreislauf-Begriffe
    {
        id: 101,
        term: "Bruttonationaleinkommen (BNE)",
        definition: "Summe aller Einkommen der Inländer, unabhängig davon, wo sie erwirtschaftet wurden.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 102,
        term: "Nettoinlandsprodukt (NIP)",
        definition: "BIP minus Abschreibungen für den Verschleiß von Anlagen und Ausrüstungen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 103,
        term: "Verfügbares Einkommen",
        definition: "Einkommen der privaten Haushalte nach Abzug von Steuern und Sozialabgaben plus Transferzahlungen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 104,
        term: "Konsumquote",
        definition: "Anteil des verfügbaren Einkommens, der für Konsum ausgegeben wird.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 105,
        term: "Sparquote",
        definition: "Anteil des verfügbaren Einkommens, der gespart wird.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 106,
        term: "Multiplikatoreffekt",
        definition: "Verstärkung von Ausgabenänderungen auf das Volkseinkommen durch Kreislaufwirkungen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 107,
        term: "Staatsquote",
        definition: "Anteil der Staatsausgaben am Bruttoinlandsprodukt.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },
    {
        id: 108,
        term: "Leistungsbilanz",
        definition: "Saldo aus Handelsbilanz, Dienstleistungsbilanz, Erwerbs- und Vermögenseinkommen sowie laufenden Übertragungen.",
        category: "kreislauf",
        categoryName: "Wirtschaftskreislauf"
    },

    // Staatliche Wirtschaftspolitik (neue Kategorie)
    {
        id: 109,
        term: "Fiskalpolitik",
        definition: "Einsatz staatlicher Ausgaben und Einnahmen zur Beeinflussung der Konjunktur.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 110,
        term: "Geldpolitik",
        definition: "Beeinflussung der Geldmenge und Zinssätze durch die Zentralbank zur Preisstabilität.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 111,
        term: "Expansive Fiskalpolitik",
        definition: "Erhöhung der Staatsausgaben oder Senkung der Steuern zur Konjunkturbelebung.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 112,
        term: "Restriktive Fiskalpolitik",
        definition: "Senkung der Staatsausgaben oder Erhöhung der Steuern zur Konjunkturdämpfung.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 113,
        term: "Expansive Geldpolitik",
        definition: "Erhöhung der Geldmenge oder Senkung der Zinsen zur Konjunkturbelebung.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 114,
        term: "Restriktive Geldpolitik",
        definition: "Verringerung der Geldmenge oder Erhöhung der Zinsen zur Inflationsbekämpfung.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 115,
        term: "Staatsschulden",
        definition: "Gesamte Verschuldung des Staates bei privaten und öffentlichen Gläubigern.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 116,
        term: "Staatsdefizit",
        definition: "Überschreitung der Staatsausgaben über die Staatseinnahmen in einer Periode.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 117,
        term: "Schuldenbremse",
        definition: "Verfassungsrechtliche Regel zur Begrenzung der staatlichen Neuverschuldung.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 118,
        term: "Stabilitätspakt",
        definition: "EU-Regelwerk zur Begrenzung von Staatsdefizit (3% des BIP) und Staatsschulden (60% des BIP).",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },

    // Europäische Integration (neue Kategorie)
    {
        id: 119,
        term: "Europäische Union (EU)",
        definition: "Wirtschafts- und Politikverbund von 27 europäischen Staaten.",
        category: "europa",
        categoryName: "Europäische Integration"
    },
    {
        id: 120,
        term: "Binnenmarkt",
        definition: "Wirtschaftsraum ohne Handelshemmnisse mit freiem Verkehr von Waren, Dienstleistungen, Kapital und Personen.",
        category: "europa",
        categoryName: "Europäische Integration"
    },
    {
        id: 121,
        term: "Währungsunion",
        definition: "Zusammenschluss von Staaten mit gemeinsamer Währung (Euro) und gemeinsamer Geldpolitik.",
        category: "europa",
        categoryName: "Europäische Integration"
    },
    {
        id: 122,
        term: "Europäische Zentralbank (EZB)",
        definition: "Zentralbank der Eurozone mit dem Hauptziel der Preisstabilität.",
        category: "europa",
        categoryName: "Europäische Integration"
    },
    {
        id: 123,
        term: "Vier Grundfreiheiten",
        definition: "Freier Verkehr von Waren, Dienstleistungen, Kapital und Personen im EU-Binnenmarkt.",
        category: "europa",
        categoryName: "Europäische Integration"
    },
    {
        id: 124,
        term: "Konvergenzkriterien",
        definition: "Wirtschaftliche Voraussetzungen für den Beitritt zur Eurozone (Maastricht-Kriterien).",
        category: "europa",
        categoryName: "Europäische Integration"
    },

    // Internationale Wirtschaft (neue Kategorie)
    {
        id: 125,
        term: "Globalisierung",
        definition: "Weltweite Verflechtung von Wirtschaft, Politik, Kultur und Gesellschaft.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    {
        id: 126,
        term: "Multinationaler Konzern",
        definition: "Unternehmen mit Niederlassungen in mehreren Ländern.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    {
        id: 127,
        term: "Direktinvestition",
        definition: "Langfristige Kapitalanlage im Ausland mit dem Ziel der Unternehmenskontrolle.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    {
        id: 128,
        term: "Welthandelsorganisation (WTO)",
        definition: "Internationale Organisation zur Förderung des freien Welthandels.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    {
        id: 129,
        term: "Internationaler Währungsfonds (IWF)",
        definition: "Internationale Organisation zur Förderung der weltweiten Währungsstabilität.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    {
        id: 130,
        term: "Weltbank",
        definition: "Internationale Organisation zur Finanzierung von Entwicklungsprojekten.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },

    // Umwelt und Nachhaltigkeit (neue Kategorie)
    {
        id: 131,
        term: "Nachhaltigkeit",
        definition: "Wirtschaften ohne Gefährdung der Lebensgrundlagen zukünftiger Generationen.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 132,
        term: "Externe Effekte",
        definition: "Auswirkungen wirtschaftlicher Aktivitäten auf unbeteiligte Dritte (z.B. Umweltverschmutzung).",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 133,
        term: "Ökosteuer",
        definition: "Steuer auf umweltschädliche Aktivitäten zur Internalisierung externer Kosten.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 134,
        term: "Emissionshandel",
        definition: "Marktbasiertes Instrument zur Reduzierung von Treibhausgasemissionen.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 135,
        term: "Kreislaufwirtschaft",
        definition: "Wirtschaftsmodell zur Minimierung von Abfall durch Wiederverwendung und Recycling.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },

    // Weitere wichtige VWL-Begriffe für IHK-Prüfungen
    {
        id: 136,
        term: "Magisches Viereck",
        definition: "Vier Ziele der Wirtschaftspolitik: Preisstabilität, Vollbeschäftigung, Wirtschaftswachstum, außenwirtschaftliches Gleichgewicht.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 137,
        term: "Phillips-Kurve",
        definition: "Zusammenhang zwischen Arbeitslosigkeit und Inflation: niedrige Arbeitslosigkeit geht mit höherer Inflation einher.",
        category: "konjunktur",
        categoryName: "Konjunktur und Wachstum"
    },
    {
        id: 138,
        term: "Laffer-Kurve",
        definition: "Zusammenhang zwischen Steuersatz und Steueraufkommen: sehr hohe Steuern können Einnahmen reduzieren.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 139,
        term: "Keynesianismus",
        definition: "Wirtschaftstheorie, die staatliche Eingriffe zur Konjunkturstabilisierung befürwortet.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 140,
        term: "Monetarismus",
        definition: "Wirtschaftstheorie, die eine stetige Geldmengenausweitung zur Wirtschaftsstabilisierung fordert.",
        category: "geld",
        categoryName: "Geld und Währung"
    },
    {
        id: 141,
        term: "Angebotsökonomik",
        definition: "Wirtschaftstheorie, die Steuersenkungen und Deregulierung zur Wachstumsförderung propagiert.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 142,
        term: "Rationale Erwartungen",
        definition: "Annahme, dass Wirtschaftssubjekte alle verfügbaren Informationen optimal nutzen.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 143,
        term: "Moral Hazard",
        definition: "Risikoreiches Verhalten aufgrund von Versicherungsschutz oder staatlichen Garantien.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 144,
        term: "Adverse Selektion",
        definition: "Marktversagen durch asymmetrische Informationen zwischen Käufern und Verkäufern.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 145,
        term: "Oligopol",
        definition: "Marktform mit wenigen Anbietern, die sich in ihren Entscheidungen wechselseitig beeinflussen.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 146,
        term: "Monopol",
        definition: "Marktform mit nur einem Anbieter, der Marktmacht besitzt.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 147,
        term: "Vollkommene Konkurrenz",
        definition: "Marktform mit vielen Anbietern und Nachfragern ohne Marktmacht.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 148,
        term: "Kartell",
        definition: "Absprache zwischen Unternehmen zur Beschränkung des Wettbewerbs.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 149,
        term: "Subventionen",
        definition: "Staatliche Unterstützungsleistungen an Unternehmen oder private Haushalte.",
        category: "politik",
        categoryName: "Wirtschaftspolitik"
    },
    {
        id: 150,
        term: "Lohnnebenkosten",
        definition: "Zusätzliche Kosten des Arbeitgebers neben dem Bruttolohn (Sozialversicherung, Urlaub, etc.).",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 151,
        term: "Tarifautonomie",
        definition: "Recht der Gewerkschaften und Arbeitgeber, Löhne und Arbeitsbedingungen selbst zu vereinbaren.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 152,
        term: "Schwarzarbeit",
        definition: "Illegale Beschäftigung ohne Anmeldung bei Sozialversicherung und Finanzamt.",
        category: "arbeitsmarkt",
        categoryName: "Arbeitsmarkt"
    },
    {
        id: 153,
        term: "Digitalisierung",
        definition: "Umstellung von analogen auf digitale Verfahren und deren wirtschaftliche Auswirkungen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 154,
        term: "Industrie 4.0",
        definition: "Vierte industrielle Revolution durch Vernetzung von Produktion mit moderner Informationstechnik.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 155,
        term: "Künstliche Intelligenz (KI)",
        definition: "Technologie zur Automatisierung intelligenten Verhaltens mit Auswirkungen auf Arbeitsmärkte.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    
    // Verortung der VWL
    {
        id: 156,
        term: "Verortung der VWL",
        definition: "Die Volkswirtschaftslehre (VWL) ist wie die Betriebswirtschaftslehre Teil der Wirtschaftswissenschaften. BWL befasst sich mit betrieblichen Aufgaben (Beschaffung, Produktion, Absatz, Finanzierung) einzelner Betriebe. VWL hingegen mit gesamtwirtschaftlichen Fragestellungen bestimmter Wirtschaftsräume.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 157,
        term: "Mikroökonomie vs. Makroökonomie",
        definition: "Die VWL unterteilt sich in Mikroökonomie (Verhalten einzelner Wirtschaftssubjekte wie Haushalte und Unternehmen) und Makroökonomie (gesamtwirtschaftliche Zusammenhänge wie BIP, Inflation, Arbeitslosigkeit).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 158,
        term: "Weltwirtschaft",
        definition: "Die Weltwirtschaft befasst sich vergleichend mit den wirtschaftlichen Bindungen der Volkswirtschaften, die durch internationalen Handel und grenzüberschreitenden Austausch von Arbeit und Kapital entstehen.",
        category: "international",
        categoryName: "Internationale Wirtschaft"
    },
    
    // Wirtschaft und Umwelt
    {
        id: 159,
        term: "Wirtschaft und Umwelt",
        definition: "Die Umwelt stellt die Grundlage für die Wirtschaft dar (Ressourcen, Energie). Gleichzeitig nutzt die Wirtschaft die Umwelt als 'Abfalleimer'. Diese Belastung kann zu Umweltzerstörung und Klimawandel führen, die wiederum die Wirtschaft negativ beeinflussen.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 160,
        term: "Nachhaltige Entwicklung",
        definition: "Das Ziel ist eine nachhaltige Entwicklung, die die Bedürfnisse der Gegenwart befriedigt, ohne die Möglichkeiten zukünftiger Generationen zu gefährden. Der aktuelle Zustand durch Industrialisierung und Bevölkerungswachstum belastet das ökologische System nachweislich.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    {
        id: 161,
        term: "Ressourcenschonung und Kreislaufwirtschaft",
        definition: "Möglichkeiten: Ressourcenschonung, umweltfreundliche Produktion, Kreislaufwirtschaft (Abfall als Ressource), bewusstes Verbraucherverhalten, Innovation, Förderungen und internationale Zusammenarbeit. Der Schlüssel liegt in der Zusammenarbeit von Wirtschaft, Politik und Gesellschaft.",
        category: "umwelt",
        categoryName: "Umwelt und Nachhaltigkeit"
    },
    
    // Wirtschaftliche Wahlentscheidungen
    {
        id: 162,
        term: "Ressourcenknappheit",
        definition: "Die Mittel zur Herstellung wirtschaftlicher Güter sind begrenzt: Boden ist nicht vermehrbar, begrenztes Arbeitsangebot. Steigerung der Ausstattung einer Volkswirtschaft erfordert schrittweises Sparen und Investieren. → Notwendigkeit von Wahlentscheidungen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 163,
        term: "Opportunitätskosten",
        definition: "Opportunitätskosten sind die Kosten einer entgangenen Gelegenheit, gemessen in Einheiten des verzichteten Gutes. Auch Verzichtskosten genannt. Beispiel: Entscheidung zwischen Freizeit und Arbeitszeit zugunsten der Freizeit stellt den entgangenen Lohn als Opportunitätskosten dar.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 164,
        term: "Bedürfnisse und Prioritäten",
        definition: "Konflikte in der Gesellschaft entstehen aus unterschiedlichen Vorstellungen darüber, welche Bedürfnisse priorisiert werden sollten. Öffentlicher Bedarf wird durch Steuern finanziert, was zu Lasten des individuellen Bedarfs geht.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    
    // Wirtschaftssubjekte
    {
        id: 165,
        term: "Wirtschaftssubjekte",
        definition: "Jede Einheit einer Volkswirtschaft, welche ökonomische Entscheidungen trifft, eigenständig Wirtschaftspläne aufstellt und danach handelt, wird als Wirtschaftssubjekt bezeichnet. Unterteilung in: Private Haushalte, Unternehmungen, Öffentliche Haushalte.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 166,
        term: "Private Haushalte",
        definition: "Einzelpersonen, Familien, Organisationen ohne gewerblichen Hintergrund (Vereine, Gewerkschaften). Sind die Verbrauchseinheiten, die eine optimale Versorgung mit Gütern anstreben. Funktion: Einkommen erzielen und verwenden (Nutzenmaximierung) oder sparen (Vermögensbildung).",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 167,
        term: "Unternehmungen",
        definition: "Unterteilung in öffentliche und private Unternehmen. Sind die Produktionseinheiten zur Bereitstellung von Gütern. Funktion: Produzieren und Investieren. Ziele: maximaler Gewinn, Marktanteilsicherung, Kostendeckung, wirtschaftliche/politische Macht, Familienerbe u.a.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 168,
        term: "Öffentliche Haushalte",
        definition: "Gebietskörperschaften (Bund, Länder, Gemeinden), Sozialversicherungen, Hoheitsverwaltungen. Produzieren Dienstleistungen, die Bürgern teilw. kostenfrei zur Verfügung gestellt werden (Schulwesen, Polizei). Leisten Transferleistungen (Renten, Kindergeld) und Subventionen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 169,
        term: "Staatsquote",
        definition: "Verhältnis staatlicher Ausgaben im Vergleich zum Bruttoinlandsprodukt (BIP). Zeigt den Anteil des Staates an der Gesamtwirtschaft. Je höher die Staatsquote, desto größer der staatliche Einfluss auf die Wirtschaft.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 170,
        term: "Abgaben- und Steuerquote",
        definition: "Abgabequote: Verhältnis der Steuern und Sozialbeiträge zum BIP zu Marktpreisen. Steuerquote: Verhältnis der Steuern zum BIP. Beide Kennzahlen spiegeln die Aktivitäten des Staates und die Belastung der Wirtschaftssubjekte wider.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    
    // Aus den Bildern: Güterarten und Bedürfnisse
    {
        id: 171,
        term: "Güterarten Klassifikation",
        definition: "Güter werden klassifiziert in: Freie Güter (unbegrenzt verfügbar), Wirtschaftliche Güter (knapp), Konsumgüter (Gebrauchsgut/Verbrauchsgut), Produktionsgüter, Investitionsgüter, Dienstleistungen, Rechte.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 172,
        term: "Konsumgut vs. Produktionsgut",
        definition: "Konsumgut: Dient der Bedürfnisbefriedigung der Haushalte (z.B. Lebensmittel, Kleidung). Produktionsgut: Wird zur Herstellung anderer Güter verwendet (z.B. Maschinen, Rohstoffe). Wichtige Unterscheidung für volkswirtschaftliche Analyse.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 173,
        term: "Gebrauchsgut vs. Verbrauchsgut",
        definition: "Gebrauchsgut: Kann mehrfach verwendet werden (z.B. Auto, Möbel). Verbrauchsgut: Wird bei einmaliger Nutzung verbraucht (z.B. Lebensmittel, Benzin). Wichtig für Konsumanalyse und Wirtschaftsplanung.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 174,
        term: "Bedürfnisarten",
        definition: "Existenzbedürfnisse: Lebensnotwendig (Nahrung, Wohnung). Kulturbedürfnisse: Gesellschaftlich geprägt (Bildung, Kunst). Luxusbedürfnisse: Über das Notwendige hinaus. Individual- vs. Kollektivbedürfnisse.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 175,
        term: "Bedarf und Nachfrage",
        definition: "Bedürfnis: Gefühl des Mangels. Bedarf: Bedürfnis + Kaufkraft. Nachfrage: Bedarf + Kaufbereitschaft am Markt. Diese Kette zeigt den Weg vom Wunsch zur tatsächlichen Markttransaktion.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 176,
        term: "Sozialbedürfnis",
        definition: "Bedürfnisse, die nur durch Gemeinschaft befriedigt werden können (z.B. Sicherheit, Bildung, Verkehrswesen). Werden oft durch öffentliche Güter und staatliche Leistungen bereitgestellt.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    
    // Produktionsfaktoren
    {
        id: 177,
        term: "Produktionsfaktoren klassisch",
        definition: "Die drei klassischen Produktionsfaktoren: 1) Boden (Grund und Boden, Rohstoffe), 2) Arbeit (menschliche Arbeitsleistung), 3) Kapital (Produktionsmittel, Geldkapital). Grundlage jeder Produktion.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 178,
        term: "Dispositiver Faktor",
        definition: "Der dispositive Faktor umfasst Unternehmensleitung, Planung, Organisation und Kontrolle. Er koordiniert die anderen Produktionsfaktoren und trifft unternehmerische Entscheidungen. Oft als 4. Produktionsfaktor bezeichnet.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 179,
        term: "Substitution von Produktionsfaktoren",
        definition: "Produktionsfaktoren können teilweise gegeneinander ausgetauscht werden. Z.B. Arbeit durch Kapital (Automatisierung) oder umgekehrt. Wichtig für Kostenoptimierung und technischen Fortschritt.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    
    // Wirtschaftsprinzipien
    {
        id: 180,
        term: "Maximalprinzip",
        definition: "Mit gegebenen Mitteln soll ein größtmöglicher Erfolg/Ertrag erzielt werden. Beispiel: Mit 1000€ Budget möglichst viele Waren kaufen. Eines der beiden ökonomischen Grundprinzipien.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 181,
        term: "Minimalprinzip",
        definition: "Ein gegebenes Ziel soll mit möglichst geringem Mitteleinsatz erreicht werden. Beispiel: Bestimmte Produktionsmenge mit minimalem Aufwand herstellen. Komplementär zum Maximalprinzip.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 182,
        term: "Optimumprinzip",
        definition: "Das beste Verhältnis zwischen Mitteleinsatz und Zielerreichung anstreben. Weder Input noch Output sind fest vorgegeben. Kombination aus Maximal- und Minimalprinzip für optimale Effizienz.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    
    // Weitere wichtige Konzepte
    {
        id: 183,
        term: "Komplementärgüter",
        definition: "Güter, die sich in der Verwendung ergänzen (z.B. Auto und Benzin, Drucker und Tinte). Bei Preiserhöhung eines Gutes sinkt die Nachfrage nach dem anderen. Negative Kreuzpreiselastizität.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 184,
        term: "Substitutionsgüter",
        definition: "Güter, die sich gegenseitig ersetzen können (z.B. Butter und Margarine, Kaffee und Tee). Bei Preiserhöhung eines Gutes steigt die Nachfrage nach dem anderen. Positive Kreuzpreiselastizität.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 185,
        term: "Homogene vs. heterogene Güter",
        definition: "Homogene Güter: Gleichartig, keine Qualitätsunterschiede (z.B. Rohstoffe). Heterogene Güter: Unterschiedliche Eigenschaften, Marken, Qualitäten. Wichtig für Marktformen und Preisbildung.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 186,
        term: "Erwerbswirtschaftliches Prinzip",
        definition: "Unternehmen streben nach Gewinnmaximierung durch optimalen Einsatz der Produktionsfaktoren. Grundprinzip der Marktwirtschaft. Gegensatz zum gemeinwirtschaftlichen Prinzip öffentlicher Betriebe.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 187,
        term: "Arbeitsteilung und Spezialisierung",
        definition: "Aufgliederung des Produktionsprozesses in Teilschritte, die von verschiedenen Personen/Abteilungen ausgeführt werden. Führt zu Effizienzsteigerung, erfordert aber Koordination und schafft Abhängigkeiten.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 188,
        term: "Autarkie vs. Arbeitsteilung",
        definition: "Autarkie: Selbstversorgung ohne Außenhandel. Arbeitsteilung: Spezialisierung und Handel. Moderne Volkswirtschaften basieren auf Arbeitsteilung für höhere Effizienz, schaffen aber Abhängigkeiten.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    
    // Weitere Konzepte aus den Prüfungsunterlagen
    {
        id: 189,
        term: "Immaterielle Güter",
        definition: "Güter ohne physische Substanz: Dienstleistungen, Rechte, Patente, Lizenzen, Software, Wissen. Werden immer wichtiger in der modernen Dienstleistungsgesellschaft. Schwer zu lagern und zu transportieren.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 190,
        term: "Rechte als Güter",
        definition: "Rechtliche Ansprüche mit wirtschaftlichem Wert: Patente, Urheberrechte, Markenrechte, Lizenzen, Konzessionen. Können gehandelt, verkauft oder vermietet werden. Schutz geistigen Eigentums.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 191,
        term: "Ökonomisches Prinzip",
        definition: "Grundprinzip wirtschaftlichen Handelns: Optimaler Einsatz knapper Mittel zur Bedürfnisbefriedigung. Basis für Maximal-, Minimal- und Optimumprinzip. Zentral für alle Wirtschaftssubjekte.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 192,
        term: "Lebensstandard",
        definition: "Maß für die Bedürfnisbefriedigung in einer Volkswirtschaft. Wird gemessen durch BIP pro Kopf, Kaufkraft, Lebensqualität. Ziel wirtschaftspolitischer Maßnahmen ist oft die Verbesserung des Lebensstandards.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 193,
        term: "Produktionskapazität",
        definition: "Maximale Produktionsmenge, die mit vorhandenen Produktionsfaktoren hergestellt werden kann. Bestimmt das Produktionspotenzial einer Volkswirtschaft. Vollbeschäftigung nutzt die Kapazität optimal aus.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 194,
        term: "Kapitalintensität vs. Arbeitsintensität",
        definition: "Kapitalintensiv: Hoher Kapitaleinsatz pro Arbeitsplatz (Chemie, Stahl). Arbeitsintensiv: Hoher Arbeitseinsatz relativ zum Kapital (Dienstleistungen). Bestimmt Kostenstruktur und Wettbewerbsfähigkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 195,
        term: "Rationalisierung",
        definition: "Verbesserung der Wirtschaftlichkeit durch bessere Organisation, Technologie oder Arbeitsabläufe. Kann zu Arbeitsplatzabbau führen, erhöht aber die Produktivität und Wettbewerbsfähigkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 196,
        term: "Automatisierung",
        definition: "Ersetzung menschlicher Arbeit durch Maschinen und Computer. Führt zu höherer Produktivität, erfordert aber Qualifikationsanpassung der Arbeitnehmer. Wichtiger Trend der Digitalisierung.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 197,
        term: "Verschwendung vs. Sparsamkeit",
        definition: "Verschwendung: Ineffizienter Einsatz knapper Ressourcen. Sparsamkeit: Minimierung des Ressourcenverbrauchs. Sparsamkeit ist volkswirtschaftlich sinnvoll, kann aber bei Übertreibung die Nachfrage schwächen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 198,
        term: "Bedürfnisbefriedigung",
        definition: "Ziel wirtschaftlichen Handelns: Beseitigung des Mangelgefühls durch Konsum von Gütern oder Dienstleistungen. Vollständige Befriedigung ist unmöglich, da Bedürfnisse unbegrenzt sind.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 199,
        term: "Gemeinwirtschaftliches Prinzip",
        definition: "Wirtschaften im Interesse der Allgemeinheit statt Gewinnmaximierung. Typisch für öffentliche Betriebe, Genossenschaften, Vereine. Ziele: Kostendeckung, Gemeinwohl, Daseinsvorsorge.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 200,
        term: "Daseinsvorsorge",
        definition: "Bereitstellung wichtiger Güter und Dienstleistungen für die Allgemeinheit durch den Staat: Bildung, Gesundheit, Verkehr, Energie, Wasser. Sichert Grundversorgung auch in unwirtschaftlichen Gebieten.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 201,
        term: "Transportkosten",
        definition: "Kosten für die Ortsveränderung von Gütern und Personen. Beeinflussen Standortentscheidungen, Handelsströme und Preise. Senkung durch bessere Infrastruktur fördert Handel und Spezialisierung.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 202,
        term: "Lagerkosten",
        definition: "Kosten für die Aufbewahrung von Gütern: Lagerhaltung, Versicherung, Zinsen, Verderb. Trade-off zwischen Lieferbereitschaft und Kostenminimierung. Just-in-Time-Produktion reduziert Lagerkosten.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 203,
        term: "Qualitätskontrolle",
        definition: "Überwachung und Sicherstellung der Produktqualität. Verhindert Reklamationen, stärkt Markenimage, kann aber Kosten erhöhen. Wichtig für Kundenzufriedenheit und Wettbewerbsfähigkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 204,
        term: "Preisbildung am Markt",
        definition: "Entstehung von Preisen durch Angebot und Nachfrage. Bei vollkommener Konkurrenz bildet sich ein Gleichgewichtspreis. Abweichungen entstehen durch Marktmacht, Informationsdefizite oder staatliche Eingriffe.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 205,
        term: "Marktgleichgewicht",
        definition: "Zustand, bei dem Angebot und Nachfrage ausgeglichen sind. Der Gleichgewichtspreis räumt den Markt. Störungen führen zu Preisanpassungen bis zur Wiederherstellung des Gleichgewichts.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 206,
        term: "Käufermarkt vs. Verkäufermarkt",
        definition: "Käufermarkt: Angebot übersteigt Nachfrage, Käufer haben Vorteile. Verkäufermarkt: Nachfrage übersteigt Angebot, Verkäufer haben Vorteile. Bestimmt Verhandlungsmacht und Preisentwicklung.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 207,
        term: "Marktformen",
        definition: "Klassifikation nach Anzahl der Anbieter und Nachfrager: Monopol, Oligopol, Polypol. Bestimmt Preisbildung, Wettbewerbsintensität und Marktmacht. Grundlage für wettbewerbspolitische Maßnahmen.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 208,
        term: "Vollkommener vs. unvollkommener Markt",
        definition: "Vollkommener Markt: Homogene Güter, vollständige Information, keine Präferenzen. Unvollkommener Markt: Produktdifferenzierung, unvollständige Information, Präferenzen. Realität entspricht meist unvollkommenen Märkten.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    {
        id: 209,
        term: "Konsumverhalten",
        definition: "Art und Weise, wie Haushalte Güter und Dienstleistungen nachfragen und konsumieren. Beeinflusst von Einkommen, Preisen, Präferenzen, Mode. Wichtig für Marktanalyse und Wirtschaftsprognosen.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 210,
        term: "Sättigungsgrad",
        definition: "Maß für die Befriedigung eines Bedürfnisses in einer Gesellschaft. Hoher Sättigungsgrad bedeutet geringe zusätzliche Nachfrage. Wichtig für Marktpotenzial und Unternehmensstrategie.",
        category: "markt",
        categoryName: "Markt und Preisbildung"
    },
    
    // Weitere prüfungsrelevante Konzepte
    {
        id: 211,
        term: "Betriebswirtschaftslehre vs. Volkswirtschaftslehre",
        definition: "BWL: Einzelbetriebliche Perspektive, Gewinnmaximierung, interne Prozesse. VWL: Gesamtwirtschaftliche Perspektive, Wohlfahrtsmaximierung, makroökonomische Zusammenhänge. Beide Disziplinen ergänzen sich.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 212,
        term: "Standortfaktoren",
        definition: "Faktoren, die Standortentscheidungen beeinflussen: Arbeitskosten, Infrastruktur, Rohstoffvorkommen, Absatzmärkte, politische Stabilität, Steuern. Wichtig für internationale Wettbewerbsfähigkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 213,
        term: "Wertschöpfung",
        definition: "Wertzuwachs, der im Produktionsprozess entsteht. Differenz zwischen Produktionswert und Vorleistungen. Summe aller Wertschöpfungen ergibt das Bruttoinlandsprodukt (BIP).",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 214,
        term: "Produktivität",
        definition: "Verhältnis von Output zu Input. Arbeitsproduktivität = Produktion je Arbeitsstunde. Kapitalproduktivität = Produktion je Kapitaleinheit. Steigerung ist Schlüssel für Wohlstandswachstum.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 215,
        term: "Effizienz vs. Effektivität",
        definition: "Effizienz: Die Dinge richtig tun (Wirtschaftlichkeit). Effektivität: Die richtigen Dinge tun (Zielerreichung). Optimales Wirtschaften erfordert beide Aspekte.",
        category: "grundlagen",
        categoryName: "Grundlagen der Wirtschaft"
    },
    {
        id: 216,
        term: "Kostenarten",
        definition: "Fixkosten: Unabhängig von Produktionsmenge. Variable Kosten: Abhängig von Produktionsmenge. Gesamtkosten = Fixkosten + variable Kosten. Wichtig für Preiskalkulation und Break-Even-Analyse.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 217,
        term: "Skaleneffekte",
        definition: "Kostenvorteile bei steigender Produktionsmenge. Economies of Scale: Sinkende Durchschnittskosten. Diseconomies of Scale: Steigende Durchschnittskosten bei Überoptimierung. Wichtig für Unternehmensgröße.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 218,
        term: "Just-in-Time-Produktion",
        definition: "Produktionsstrategie mit minimalen Lagerbeständen. Lieferung genau zum Bedarfszeitpunkt. Reduziert Lagerkosten, erhöht aber Abhängigkeit von Lieferanten und Störungsanfälligkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 219,
        term: "Outsourcing",
        definition: "Auslagerung von Unternehmensfunktionen an externe Dienstleister. Vorteile: Kostensenkung, Konzentration auf Kernkompetenzen. Nachteile: Abhängigkeiten, Kontrollverlust, Qualitätsrisiken.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 220,
        term: "Kernkompetenzen",
        definition: "Zentrale Fähigkeiten eines Unternehmens,die schwer imitierbar sind und Wettbewerbsvorteile schaffen. Basis für strategische Entscheidungen über Make-or-Buy und Diversifikation.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 221,
        term: "Lieferkette (Supply Chain)",
        definition: "Netzwerk aller Unternehmen und Prozesse von der Rohstoffgewinnung bis zum Endkunden. Optimierung der Lieferkette senkt Kosten und verbessert Kundenservice.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 222,
        term: "Qualitätsmanagement",
        definition: "Systematische Planung, Steuerung und Kontrolle der Qualität. Ziele: Kundenzufriedenheit, Kostenreduzierung, Wettbewerbsfähigkeit. Methoden: ISO-Normen, TQM, Six Sigma.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 223,
        term: "Innovation",
        definition: "Umsetzung neuer Ideen in marktfähige Produkte oder Prozesse. Produktinnovation: Neue Güter. Prozessinnovation: Neue Verfahren. Motor für Wirtschaftswachstum und Wettbewerbsfähigkeit.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 224,
        term: "Forschung und Entwicklung (F&E)",
        definition: "Systematische Suche nach neuen Erkenntnissen und deren Anwendung. Grundlagenforschung, angewandte Forschung, Entwicklung. Investitionen in F&E fördern Innovation und Wachstum.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    },
    {
        id: 225,
        term: "Technologietransfer",
        definition: "Übertragung von Technologien zwischen Organisationen, Ländern oder Sektoren. Fördert Diffusion von Innovationen und wirtschaftliche Entwicklung. Kann durch Lizenzen, Joint Ventures oder FDI erfolgen.",
        category: "produktion",
        categoryName: "Produktionsprozess"
    }
];

// Export für Nutzung in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = vwlData;
}
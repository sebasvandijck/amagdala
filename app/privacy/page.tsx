"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Lang, wrapStyle } from "@/components/shared";

export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("nl");

  return (
    <main style={{ width: "100%" }}>
      <Nav lang={lang} setLang={setLang} transparent={false} />

      <section style={{ background: "var(--bg-alt)", paddingTop: "120px", paddingBottom: "64px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle }} className="wrap-pad">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="serif" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 300, color: "var(--ink)" }}>
            Privacy verklaring
          </motion.h1>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div style={{ ...wrapStyle, maxWidth: "760px" }} className="wrap-pad">
          {[
            {
              h: null,
              p: "Amagdala, gevestigd aan Kanaalstraat 77-3 1054 XA Amsterdam, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.\n\nAmagdala Massage & Bodywork\nKanaalstraat 77-3 1054 XA Amsterdam\n06145147566\n\nBinnen Magda is de Functionaris Gegevensbescherming van Amagdala te bereiken via magda@amagdala.nl"
            },
            {
              h: "Persoonsgegevens die wij verwerken",
              p: "Amagdala verwerkt je persoonsgegevens doordat je gebruik maakt van onze diensten en/of omdat je deze gegevens zelf aan ons verstrekt. Hieronder vind je een overzicht van de persoonsgegevens die wij verwerken:\n\n— Voor- en achternaam\n— Geslacht\n— Adresgegevens\n— Telefoonnummer\n— E-mailadres\n— Overige persoonsgegevens die je actief verstrekt"
            },
            {
              h: "Bijzondere en/of gevoelige persoonsgegevens die wij verwerken",
              p: "Onze website en/of dienst heeft niet de intentie gegevens te verzamelen over websitebezoekers die jonger zijn dan 16 jaar. Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders dan ook aan betrokken te zijn bij de online activiteiten van hun kinderen, om zo te voorkomen dat er gegevens over kinderen verzameld worden zonder ouderlijke toestemming. Als je er van overtuigd bent dat wij zonder die toestemming persoonlijke gegevens hebben verzameld over een minderjarige, neem dan contact met ons op via magda@amagdala.nl, dan verwijderen wij deze informatie."
            },
            {
              h: "Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken",
              p: "Amagdala verwerkt jouw persoonsgegevens voor de volgende doelen:\n\n— Het afhandelen van jouw betaling\n— Verzenden van onze nieuwsbrief en/of reclamefolder\n— Je te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren\n— Je te informeren over wijzigingen van onze diensten of producten\n— Je de mogelijkheid te bieden een account aan te maken\n— Om goederen en diensten bij je af te leveren\n— Amagdala analyseert jouw gedrag op de website om daarmee de website te verbeteren en het aanbod van producten en diensten af te stemmen op jouw voorkeuren\n— Amagdala verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn, zoals gegevens die wij nodig hebben voor onze belastingaangifte."
            },
            {
              h: "Geautomatiseerde besluitvorming",
              p: "Amagdala neemt op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen. Het gaat hier om besluiten die worden genomen door computerprogramma's of -systemen, zonder dat daar een mens (bijvoorbeeld een medewerker van Amagdala) tussen zit. Amagdala gebruikt de volgende computerprogramma's of -systemen: [amagdala_production]"
            },
            {
              h: "Hoe lang we persoonsgegevens bewaren",
              p: "Amagdala bewaart je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor je gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen voor de volgende (categorieën) van persoonsgegevens:\n\nPersoonsgegevens: Bewaartermijn: Reden"
            },
            {
              h: "Delen van persoonsgegevens met derden",
              p: "Amagdala verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met jou of om te voldoen aan een wettelijke verplichting. Met bedrijven die je gegevens verwerken in onze opdracht, sluiten wij een bewerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van jouw gegevens. Amagdala blijft verantwoordelijk voor deze verwerkingen."
            },
            {
              h: "Cookies, of vergelijkbare technieken, die wij gebruiken",
              p: "Amagdala gebruikt alleen technische en functionele cookies, en analytische cookies die geen inbreuk maken op je privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op jouw computer, tablet of smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website en jouw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld jouw voorkeursinstellingen. Ook kunnen wij hiermee onze website optimaliseren. Je kunt je afmelden voor cookies door je internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kun je ook alle informatie die eerder is opgeslagen via de instellingen van je browser verwijderen."
            },
            {
              h: "Gegevens inzien, aanpassen of verwijderen",
              p: "Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heb je het recht om je eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van jouw persoonsgegevens door Amagdala en heb je het recht op gegevensoverdraagbaarheid. Dat betekent dat je bij ons een verzoek kan indienen om de persoonsgegevens die wij van jou beschikken in een computerbestand naar jou of een ander, door jou genoemde organisatie, te sturen.\n\nJe kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van je persoonsgegevens of verzoek tot intrekking van je toestemming of bezwaar op de verwerking van jouw persoonsgegevens sturen naar magda@amagdala.nl.\n\nOm er zeker van te zijn dat het verzoek tot inzage door jou is gedaan, vragen wij jou een kopie van je identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie je pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van je privacy. We reageren zo snel mogelijk, maar binnen vier weken, op jouw verzoek.\n\nAmagdala wil je er tevens op wijzen dat je de mogelijkheid hebt om een klacht in te dienen bij de nationale toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de volgende link: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
            },
            {
              h: "Hoe wij persoonsgegevens beveiligen",
              p: "Amagdala neemt de bescherming van jouw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als jij het idee hebt dat jouw gegevens toch niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op via magda@amagdala.nl."
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: "48px" }}>
              {section.h && (
                <h2 className="serif" style={{ fontSize: "1.5rem", fontWeight: 400, color: "var(--ink)", marginBottom: "16px" }}>{section.h}</h2>
              )}
              <div style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", whiteSpace: "pre-line" }}>{section.p}</div>
              {i < 9 && <div style={{ borderBottom: "1px solid var(--border)", marginTop: "48px" }} />}
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

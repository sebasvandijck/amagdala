"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Lang, LINKS, PHOTOS, Tag, wrapStyle, btnFilled, btnOutline, WaIcon, MailIcon, MapIcon } from "@/components/shared";

/* ── animation ── */
const fadeUp: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22,1,0.36,1] } } };
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ delay }}>{children}</motion.div>;
}

const W = { ...wrapStyle };

/* ── translations ── */
const ALL_REVIEWS = {
  en: [
    { q: "Not only am I free from my pain, but I also have 'tools' to prevent it in the future. During the session, Magda asks you questions that increase your body awareness. The treatment is fully tailored to your wishes.", by: "Céciel" },
    { q: "At Magda's, thanks in part to her vibe, energy and pleasant environment, you feel at ease within a second. Something emerged and started flowing — wow, what an experience! And so safe and familiar.", by: "Miriam" },
    { q: "Magda has an eye for the deeper layer, beneath your muscles. What is the message of your body? She is truly a treasure with much wisdom. So caring!", by: "Coosje" },
    { q: "Top experience, friendly and skilled. Highly recommended.", by: "Eleanore" },
    { q: "Welcoming atmosphere, relaxed, soothing massage. Would definitely come back!", by: "Hannah" },
    { q: "Had a wonderful connective tissue massage with Magda. Only wish I'd booked longer. Looking forward to next time.", by: "Suus" },
    { q: "Massage with Magda is always a nice experience. She listens and pays attention to her work.", by: "M" },
    { q: "Great! Would recommend Magda to anyone. Really helped with my shoulder and thigh issues.", by: "Evelyn" },
    { q: "Had a lovely massage and felt more whole and grounded afterwards. The tension in my shoulders and neck disappeared.", by: "Miriam" },
    { q: "Magda massages wonderfully and intuitively knows what you need. It has a healing effect — I'm very happy and will definitely return.", by: "Marije" },
    { q: "Very pleasant and relaxed, beautiful combination of techniques.", by: "NvdA" },
    { q: "Amazing massage with a very personal touch.", by: "Tom" },
    { q: "Magda is a wonderful masseuse who tunes in and feels exactly what you need. I can highly recommend her!", by: "Nynke" },
    { q: "Highly recommended! Magda makes real contact to see what you need.", by: "Lisa" },
    { q: "The word massage falls short — more of an inner journey. Magda created space and afterwards I felt everything flowing again.", by: "Jana" },
    { q: "Super intuitive and empathic. Her approach helped me with an emotional breakthrough on a theme I'd been stuck on for a long time.", by: "Alex" },
    { q: "Magda works holistically and tunes into the body. After our session I felt richer.", by: "Lies" },
    { q: "Magdalena has a magic touch! She listened attentively and focused on my specific needs. I felt incredibly relaxed.", by: "Mehran" },
    { q: "Magda is a top woman who every time looks, asks and feels what you need.", by: "Lisa" },
    { q: "Magda is hospitable, kind and knowledgeable. After some stressful weeks, I received a lovely relaxing massage.", by: "M.E." },
    { q: "I came in with a lot of stress and left feeling completely at peace. Magda has a unique gift.", by: "Roos" },
    { q: "Beautiful experience — unlike anything I've tried before. I felt truly heard and held.", by: "Sarah" },
  ],
  nl: [
    { q: "Niet alleen ben ik van mijn pijnklachten af, maar ik heb ook 'tools' om ze in de toekomst te voorkomen. Magda stelt vragen die je lichaamsbewustzijn vergroten. De behandeling wordt helemaal afgestemd op jouw wensen.", by: "Céciel" },
    { q: "Bij Magda voel je je binnen een seconde op je gemak. Er ontstond iets en dat gaat stromen — wauw wat een belevenis! En zo veilig en vertrouwd.", by: "Miriam" },
    { q: "Magda heeft oog voor de diepere laag, ónder je spieren. Wat is de boodschap van je lijf? Ze is echt een schat met veel wijsheid. Zo zorgzaam!", by: "Coosje" },
    { q: "Top ervaring, vriendelijk en kundig. Aanrader.", by: "Eleanore" },
    { q: "Welkome sfeer, relaxed, ontspannen massage. Voor herhaling vatbaar!", by: "Hannah" },
    { q: "Heerlijke bindweefselmassage gehad bij Magda. Jammer dat ik niet wat langer had geboekt. Verheugend op volgende keer.", by: "Suus" },
    { q: "Massage bij Magda is altijd een fijne ervaring. Ze luistert en let op haar werk.", by: "M" },
    { q: "Top! Zou Magda aan iedereen aanraden. Heeft echt geholpen met mijn schouder en dijbeenproblemen.", by: "Evelyn" },
    { q: "Fijne massage gehad en voelde me daarna meer een geheel en meer in mijn lijf. De spanning in mijn schouders en nek is verdwenen.", by: "Miriam" },
    { q: "Magda masseert geweldig en voelt heel goed aan wat je nodig hebt. Het heeft een helend effect, ik ben er erg blij mee en kom graag weer terug.", by: "Marije" },
    { q: "Heel fijn en ontspannen, mooie combinatie van technieken.", by: "NvdA" },
    { q: "Geweldige massage met een zeer persoonlijke touch.", by: "Tom" },
    { q: "Magda is een ontzettend fijne masseuse, die goed afstemt en aanvoelt wat je nodig hebt. Een dikke aanrader!", by: "Nynke" },
    { q: "Dikke aanrader! Magda maakt écht contact om te zien wat je nodig hebt.", by: "Lisa" },
    { q: "Het woord massage doet tekort — meer een innerlijke reis. Na afloop voelde ik alles weer stromen.", by: "Jana" },
    { q: "Super intuïtief en invoelend. Haar aanpak heeft me geholpen met een emotionele doorbraak op een thema waar ik al heel lang vast zat.", by: "Alex" },
    { q: "Magda werkt holistisch en tuned in op het lichaam. Ik voelde me rijker na afloop.", by: "Lies" },
    { q: "Magdalena heeft een magische aanraking! Ik voelde me ongelooflijk ontspannen.", by: "Mehran" },
    { q: "Magda is een topvrouw die elke keer weer kijkt, vraagt en voelt wat je nodig hebt.", by: "Lisa" },
    { q: "Magda is gastvrij, vriendelijk en deskundig. Na stressvolle weken een heerlijke ontspannende massage ontvangen.", by: "M.E." },
    { q: "Ik kwam binnen met veel stress en vertrok volledig in vrede. Magda heeft een uniek gave.", by: "Roos" },
    { q: "Prachtige ervaring — in tegenstelling tot alles wat ik eerder heb geprobeerd. Ik voelde me echt gehoord en gedragen.", by: "Sarah" },
  ],
};

const FAQS = {
  en: [
    { q: "What kinds of bodywork types do you use?", a: "Psoas release, Fascia stretching, Foot reflexology, Pulsing, Reiki, Body posture, Deep tissue, Breathing exercises, Emotion expression exercises, Voice liberation." },
    { q: "Where does the name Amagdala originate from?", a: "It's a combination between my name Magdalena and the Amygdala. The amygdala focuses on emotional responses — basic feelings like happiness, fear, anger, and sadness. It helps the human brain form memories associated with emotional responses. And sometimes we need to update these memories. That's what I love working with." },
    { q: "Therapy sounds big, do you have a psychology degree?", a: "In short, no. These sessions can work both preventively and in complement to psychotherapy. When you are currently in therapy, I collaborate with your psychologist when appropriate. I do work trauma informed. I am midway the Core Energetics practitioner program — a 4-year education to become a body oriented psychotherapist." },
    { q: "What's your education?", a: "After highschool I studied fine arts and education. In 2018 I changed my focus to studying massage therapies. Amagdala was founded as a relaxing massage practice, growing out to become a practice for massage therapy. I am midway the Core Energetics practitioner program — a 4-year education to become a body oriented psychotherapist." },
    { q: "If I want to read more about loving my body and its emotions, where do I start?", a: "De maskermaker – Wiebe Veembaas · Het sprookje van de dood – Marie Claire vd Bruggen · A way of life: core energetics – Stuart Black · The myth of normal – Gabor Maté · Wisdom of the body moving – Linda Hartley · Bio energetica – Alexander Lowen · Language of the body – Alexander Lowen · Eastern body western mind – Judith Anodea · Courage – Osho · Hands of light – Barbara Brennan" },
    { q: "What languages do you speak?", a: "My sessions are given in English and Dutch (my mother tongue). I have experience with giving sessions with an arabic translator in the room and am open to do this more. For my own fun I'm learning French, German, Italian, Spanish, Arabic, Hebrew, Japanese and sign-language." },
  ],
  nl: [
    { q: "Welke soorten lichaamswerk gebruik je?", a: "Psoas release, Fasciae stretching, Voetreflexologie, Pulsing, Reiki, Lichaamshouding, Deep tissue, Ademoefeningen, Emotie-expressie oefeningen, Stemvrijheid." },
    { q: "Waar komt de naam Amagdala vandaan?", a: "Het is een combinatie van mijn naam Magdalena en de Amygdala. De amygdala richt zich op emotionele reacties — basale gevoelens zoals geluk, angst, boosheid en verdriet. Het helpt het menselijk brein herinneringen te vormen die gekoppeld zijn aan emotionele reacties. En soms moeten we deze herinneringen updaten." },
    { q: "Therapie klinkt groot — heb je een psychologiediploma?", a: "Kort gezegd: nee. Deze sessies kunnen zowel preventief als aanvullend op psychotherapie werken. Als je momenteel in therapie bent, werk ik samen met je psycholoog wanneer dat passend is. Ik werk trauma-geïnformeerd en ben halverwege het Core Energetics beoefenaarprogramma — een 4-jarige opleiding tot lichaamsgeoriënteerd psychotherapeut." },
    { q: "Wat is jouw opleiding?", a: "Na de middelbare school studeerde ik beeldende kunst en onderwijs. In 2018 verlegde ik mijn focus naar massagetherapieën. Amagdala werd opgericht als een ontspanningsmassagepraktijk en groeide uit tot een praktijk voor massagetherapie. Ik ben halverwege het Core Energetics beoefenaarprogramma." },
    { q: "Als ik meer wil lezen over het liefhebben van mijn lichaam en emoties, waar begin ik?", a: "De maskermaker – Wiebe Veembaas · Het sprookje van de dood – Marie Claire vd Bruggen · A way of life: core energetics – Stuart Black · The myth of normal – Gabor Maté · Bio energetica – Alexander Lowen · Taal van het lichaam – Alexander Lowen · Moed – Osho · Handen vol licht – Barbara Brennan" },
    { q: "Welke talen spreek je?", a: "Mijn sessies worden gegeven in het Engels en Nederlands (mijn moedertaal). Ik heb ervaring met het geven van sessies met een arabische tolk en sta open voor meer." },
  ],
};

function FAQ({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const items = FAQS[lang];
  return (
    <div style={{ maxWidth: "680px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
          <button onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
            <span style={{ fontSize: "15px", fontWeight: 500, color: "var(--ink)", lineHeight: 1.5 }}>{item.q}</span>
            <span style={{ fontSize: "20px", color: "var(--teal)", flexShrink: 0, transition: "transform 0.2s", display: "inline-block", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: "hidden" }}>
                <p style={{ fontSize: "14px", lineHeight: 1.9, color: "var(--ink-mid)", paddingBottom: "20px" }}>{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════
   HERO
════════════════════════════════════════ */
function Hero({ lang }: { lang: Lang }) {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 80]);
  const T = {
    en: { tag: "Body Awareness Therapy · Amsterdam West", h1: ["Where your spirit", "meets the bone."], sub: "Somatic bodywork by Magdalena Donders — fully customised to your body, your story, your pace.", cta: "Schedule your first session", stars: "4.9 ★★★★★ · 80+ reviews" },
    nl: { tag: "Lichaamsbewustzijn Therapie · Amsterdam West", h1: ["Waar jouw geest", "het bot ontmoet."], sub: "Somatisch lichaamswerk door Magdalena Donders — volledig afgestemd op jouw lichaam, jouw verhaal, jouw tempo.", cta: "Plan je eerste sessie", stars: "4,9 ★★★★★ · 80+ reviews" },
  }[lang];

  return (
    <section id="top" style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden", background: "linear-gradient(135deg,#dff0ee 0%,#a8d5d1 60%,#4A9B96 100%)" }}>
      <motion.div style={{ position: "absolute", inset: 0, y: imgY }}>
        <img src={PHOTOS.magda} alt="Magdalena Donders" style={{ width: "100%", height: "110%", objectFit: "cover", objectPosition: "center top" }} onError={e => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(247,244,239,0.97) 35%, rgba(247,244,239,0.6) 60%, rgba(247,244,239,0.05) 100%), linear-gradient(to top, rgba(247,244,239,0.8) 0%, transparent 35%)" }} />
      </motion.div>
      <div style={{ ...W, position: "relative", zIndex: 10, paddingTop: "180px", paddingBottom: "100px" }} className="wrap-pad hero-content">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal)", display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <span style={{ display: "inline-block", width: "24px", height: "1px", background: "var(--teal)" }} />{T.tag}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          className="serif" style={{ fontSize: "clamp(3rem,6.5vw,6.5rem)", lineHeight: 1.02, fontWeight: 300, color: "var(--ink)", maxWidth: "580px" }}>
          {T.h1[0]}<br /><em style={{ color: "var(--teal)" }}>{T.h1[1]}</em>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--ink-mid)", maxWidth: "420px", marginTop: "24px", marginBottom: "40px" }}>{T.sub}</motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
          <a href="/#contact" style={btnFilled()}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal-dk)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(74,155,150,0.35)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >{T.cta}</a>
          <span style={{ fontSize: "14px", color: "var(--ink-soft)" }}>{T.stars}</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   ABOUT — all homepage body text
════════════════════════════════════════ */
function About({ lang }: { lang: Lang }) {
  const T = {
    en: {
      mainTitle: "Each session at Amagdala\nis designed to create space",
      intro: "I am Magdalena Donders, a woman who knows the quiet vulnerable power of her heartbeat. As a somatic worker, I work as soulful as possible. Using knowledge, intuition and constantly questioning myself if there is an easier, lighter approach. In your muscles, bones, posture, emotional body and the mind.",
      sorry: "With that said — I'm sorry, if you came here for a soothing spa rub, you're at the wrong place.",
      pillars: [
        { title: "Insight", body: "Various methods to deepen the contact with your body. To welcome you back into feeling fully alive. With short exercises to integrate it into your life." },
        { title: "Down to earth", body: "Taboo breaking playfulness and honesty we build on trust to make you come home again to where your spirit meets the bone." },
        { title: "Patience", body: "Since 2019 I work with people who want to feel deeper in their body. This takes time and courage. I am honoured to hold space for you." },
      ],
      starsLine: "4.9 ★★★★★",
      starsLink: "More than 80 Reviews on Treatwell and Google Maps — read them here.",
      collab: "Collaboration",
      collabP: ["In my practice I am committed to guide you into being fully alive in a world that often forgets how to breathe. This means we work together.", "Together we bring back flow into stuck emotions and body. Encouraging and supporting you to step out of high-tension and into a grounded, raw visceral presence. By integrating traditional and modern practices, with heightened energetic perception. Using my somatic intuitive sensitivity. You come home again where your spirit meets the bone."],
      quote: '"The heart tells you what to do\nand the head tells you how to do it"',
      quoteBy: "Alexander Lowen",
      touch: "Touch can be gentle, firm, or even absent. Always in attunement with what your body needs. The intention is to help you reconnect and experience your body on new levels of awareness.",
      blendTag: "Blend of techniques",
      blendP: "Using a blend of techniques on and off the practice table at Amagdala we bridge the gap between physical fascial release and deep emotional holding patterns. This may involve deep tissue touch, psoas release, joint movement, postural patterns, grounding, expression and movement — every session is guided by your personal feedback and the sensations your body communicates in the moment.",
      techniques: ["Deep Tissue","Psoas Release","Fascia Stretching","Foot Reflexology","Holistic Pulsing","Reiki","Joint Movement","Body Posture","Breathing Exercises","Expression & Movement","Voice Liberation","Grounding"],
      langTag: "Language",
      langP: ["In this practice the brain takes a backseat. We focus on what the body wants to tell. Some of you might have read 'The Body Keeps the Score' by Bessel van der Kolk. The glimmers and triggers of your body will be given the main voice. This doesn't need to be in coherent brain language — the body uses different forms of communication. This is why I'm fluent in gibberish, colours, expression, and figures of speech.", "Words can anchor feelings to the ground though. As a Dutch born and grown practitioner living in this international city, I've chosen to share my work in English to ensure everyone feels welcome, regardless of where they come from.", "I love to keep evolving my practice as a therapist and personally. Translating years of 'listening through the hands' as a massage professional into a new chapter of grounded spirituality, human resilience and soulful authorship."],
      paceTag: "Human pace over digital urgency",
      paceP: ["In my practice I invite you to attune to your body at your own pace, with ease and compassion. To honor this, I choose personal connection via email, phone, or in-person over digital automation.", "We work from abundance and space to breathe, allowing you to take time to choose yourself and choose what benefits your personal path best now.", "All new visitors in my practice begin with an intake call and get time to let all info land into the body first. To choose for yourself and how to pursue your path to live closer to the bone."],
      paceEnd: "Your body will thank you.",
      heroCta: "Schedule your first session",
      happinez: "Featured in Happinez magazine April '24",
      faqTag: "Frequently asked questions",
    },
    nl: {
      mainTitle: "Elke sessie bij Amagdala\nis ontworpen om ruimte te creëren",
      intro: "Ik ben Magdalena Donders, een vrouw die de stille kwetsbare kracht van haar hartslag kent. Als somatisch werker werk ik zo bezield mogelijk. Met kennis, intuïtie en door mezelf voortdurend af te vragen of er een makkelijkere, lichtere aanpak is. In jouw spieren, botten, houding, emotioneel lichaam en geest.",
      sorry: "Met dat gezegd — het spijt me, als je hier bent voor een ontspannende spabehandeling, ben je op het verkeerde adres.",
      pillars: [
        { title: "Inzicht", body: "Verschillende methoden om het contact met je lichaam te verdiepen. Om je terug te verwelkomen in het volledig leven. Met korte oefeningen om het in je dagelijks leven te integreren." },
        { title: "Nuchter", body: "Taboe-brekende speelsheid en eerlijkheid — we bouwen op vertrouwen om je weer thuis te laten komen waar jouw geest het bot ontmoet." },
        { title: "Geduld", body: "Sinds 2019 werk ik met mensen die dieper in hun lichaam willen voelen. Dit kost tijd en moed. Ik ben vereerd die ruimte voor je te mogen houden." },
      ],
      starsLine: "4,9 ★★★★★",
      starsLink: "Meer dan 80 reviews op Treatwell en Google Maps — lees ze hier.",
      collab: "Samenwerking",
      collabP: ["In mijn praktijk ben ik toegewijd om je te begeleiden naar volledig leven in een wereld die vaak vergeet hoe te ademen. Dit betekent dat we samenwerken.", "Samen brengen we flow terug in vastgelopen emoties en lichaam. We moedigen je aan om uit hoge spanning te stappen en in een gegronde, rauwe aanwezigheid. Door traditionele en moderne praktijken te integreren. Je komt weer thuis waar jouw geest het bot ontmoet."],
      quote: '"Het hart vertelt je wat je moet doen\nen het hoofd vertelt je hoe je het moet doen."',
      quoteBy: "Alexander Lowen",
      touch: "Aanraking kan zacht, stevig of zelfs afwezig zijn. Altijd afgestemd op wat jouw lichaam nodig heeft. De intentie is om je te helpen reconnecten en je lichaam te ervaren op nieuwe niveaus van bewustzijn.",
      blendTag: "Mix van technieken",
      blendP: "Met een mix van technieken op en naast de behandeltafel bij Amagdala overbruggen we de kloof tussen fysieke fasciale vrijlating en diepe emotionele patronen. Dit kan inhouden: deep tissue aanraking, psoas release, gewrichtsbeweging, houdingspatronen, aarding, expressie en beweging — elke sessie wordt geleid door jouw persoonlijke feedback en de sensaties die jouw lichaam communiceert.",
      techniques: ["Deep Tissue","Psoas Release","Fasciae Stretching","Voetreflexologie","Holistisch Pulsing","Reiki","Gewrichtsbeweging","Lichaamshouding","Ademoefeningen","Expressie & Beweging","Stemvrijheid","Aarding"],
      langTag: "Taal",
      langP: ["In deze praktijk neemt het brein een achterbank. We richten ons op wat het lichaam wil vertellen. Misschien heb je 'The Body Keeps the Score' van Bessel van der Kolk gelezen. De glimmers en triggers van jouw lichaam krijgen de hoofdstem. Dit hoeft niet in coherente herstentaal — het lichaam gebruikt verschillende vormen van communicatie. Daarom ben ik vloeiend in wartaal, kleuren, expressie en beeldspraak.", "Woorden kunnen gevoelens wel verankeren. Als Nederlandse geboren en getogen beoefenaar in deze internationale stad heb ik ervoor gekozen mijn werk in het Engels te delen zodat iedereen zich welkom voelt.", "Ik vind het heerlijk om mijn praktijk te blijven ontwikkelen — jaren van 'luisteren met de handen' omzetten in een nieuw hoofdstuk van gegronde spiritualiteit en menselijke veerkracht."],
      paceTag: "Menselijk tempo boven digitale urgentie",
      paceP: ["In mijn praktijk nodig ik je uit om op jouw eigen tempo af te stemmen op je lichaam, met gemak en compassie. Hiervoor kies ik persoonlijk contact via email, telefoon of persoonlijk boven digitale automatisering.", "We werken vanuit overvloed en ruimte om te ademen, zodat jij de tijd hebt om jezelf te kiezen en te kiezen wat het beste bij jouw persoonlijke pad past.", "Alle nieuwe bezoekers in mijn praktijk beginnen met een intakegesprek en krijgen de tijd om alle informatie eerst in het lichaam te laten landen."],
      paceEnd: "Jouw lichaam zal je dankbaar zijn.",
      heroCta: "Plan je eerste sessie",
      happinez: "Featured in Happinez magazine April '24",
      faqTag: "Veelgestelde vragen",
    },
  }[lang];

  const sec = (style: React.CSSProperties = {}) => ({ paddingBottom: "72px", marginBottom: "72px", borderBottom: "1px solid var(--border)", ...style });

  return (
    <section id="about" style={{ background: "var(--bg)", padding: "100px 0" }} className="section-pad">
      <div style={{ ...W }} className="wrap-pad hero-content">

        {/* Intro */}
        <Reveal>
          <div style={sec({ maxWidth: "720px" })}>
            <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.1, fontWeight: 300, color: "var(--ink)", marginBottom: "28px", whiteSpace: "pre-line" }}>{T.mainTitle}</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "16px" }}>{T.intro}</p>
            <p style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--ink-mid)", fontStyle: "italic" }}>{T.sorry}</p>
          </div>
        </Reveal>

        {/* Pillars */}
        <Reveal>
          <div style={{ ...sec(), display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "0" }} className="col-3 pillars-grid">
            {T.pillars.map((p, i) => (
              <div key={i} style={{ paddingRight: i < 2 ? "40px" : "0", paddingLeft: i > 0 ? "40px" : "0", borderRight: i < 2 ? "1px solid var(--border)" : "none" }} className="pillar-item">
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "14px" }}>{p.title}</p>
                <p style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--ink-mid)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stars */}
        <Reveal>
          <div style={{ ...sec(), display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <p className="serif" style={{ fontSize: "1.4rem", color: "var(--teal)", flexShrink: 0 }}>{T.starsLine}</p>
            <a href="#reviews" style={{ fontSize: "15px", color: "var(--ink-mid)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-mid)")}
            >{T.starsLink}</a>
          </div>
        </Reveal>

        {/* Collaboration */}
        <Reveal>
          <div style={sec()}>
            <Tag label={T.collab} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }} className="col-2">
              <div>
                {T.collabP.map((p, i) => <p key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{p}</p>)}
              </div>
              <div>
                <div style={{ background: "var(--teal)", padding: "40px 36px", borderRadius: "2px", marginBottom: "24px" }}>
                  <p className="serif" style={{ fontSize: "1.4rem", fontStyle: "italic", color: "#fff", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: "16px" }}>{T.quote}</p>
                  <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>{T.quoteBy}</p>
                </div>
                <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)" }}>{T.touch}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Blend */}
        <Reveal>
          <div style={sec()}>
            <Tag label={T.blendTag} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px" }} className="col-2">
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)" }}>{T.blendP}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", alignContent: "flex-start" }}>
                {T.techniques.map(t => (
                  <span key={t} style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 14px", border: "1px solid rgba(74,155,150,0.3)", color: "var(--ink-mid)", borderRadius: "2px" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Language */}
        <Reveal>
          <div style={sec()}>
            <Tag label={T.langTag} />
            <div style={{ maxWidth: "680px" }}>
              {T.langP.map((p, i) => <p key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{p}</p>)}
            </div>
          </div>
        </Reveal>

        {/* Human pace */}
        <Reveal>
          <div style={sec()}>
            <Tag label={T.paceTag} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="col-2">
              <div>
                {T.paceP.map((p, i) => <p key={i} style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{p}</p>)}
                <p className="serif" style={{ fontSize: "1.8rem", fontWeight: 300, color: "var(--ink)", marginTop: "8px", marginBottom: "28px" }}>{T.paceEnd}</p>
                <a href="/#contact" style={btnFilled()}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal-dk)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; }}
                >{T.heroCta}</a>
              </div>
              <div style={{ height: "360px", overflow: "hidden", borderRadius: "2px" }} className="img-block">
                <img src={PHOTOS.space} alt="Practice Amagdala" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85)" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Happinez */}
        <Reveal>
          <div style={{ ...sec(), textAlign: "center" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "20px" }}>{T.happinez}</p>
            <div style={{ overflow: "hidden", borderRadius: "2px", maxWidth: "600px", margin: "0 auto" }}>
              <img src={PHOTOS.happinez} alt="Happinez" style={{ width: "100%", height: "110px", objectFit: "cover" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
          </div>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <div>
            <Tag label={T.faqTag} />
            <FAQ lang={lang} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   SESSIONS PREVIEW
════════════════════════════════════════ */
function Sessions({ lang }: { lang: Lang }) {
  const T = {
    en: { tag: "Sessions", title: ["Your body will", "thank you."], s1: { sub: "Single session", h: "Introduction Session", p: "A single session to experience Amagdala's approach. We take time to meet — your body, your current themes, your needs. Even 90 minutes of just breathing and meeting yourself where you are can help your sleep, mental capacity and emotional regulation deepen instantly.", cta: "Learn more", href: "/introduction" }, s2: { sub: "Series of sessions", h: "In-Depth Treatment Program", p: "If you want more than short relief from symptoms and are curious how to create results that last a lifetime — allow yourself to feel deeper into everything. We work with short, chewable goals to feel the pleasure and gratification of progression.", cta: "Learn more", href: "/in-depth" }, note: "These sessions work both preventively and in complement to psychotherapy. When you are currently in therapy, I collaborate with your psychologist when appropriate." },
    nl: { tag: "Sessies", title: ["Jouw lichaam", "zal je dankbaar zijn."], s1: { sub: "Enkele sessie", h: "Introductie Sessie", p: "Een enkele sessie om de aanpak van Amagdala te ervaren. We nemen de tijd om kennis te maken — jouw lichaam, jouw thema's, jouw behoeften. Zelfs 90 minuten ademen en jezelf ontmoeten kan je slaap, mentale capaciteit en emotionele regulatie meteen verdiepen.", cta: "Meer informatie", href: "/introduction" }, s2: { sub: "Serie sessies", h: "Intensief Behandelprogramma", p: "Als je meer wilt dan kortdurende verlichting — als je nieuwsgierig bent hoe je resultaten voor het leven kunt creëren — laat jezelf dan dieper voelen in alles. We werken met korte, behapbare doelen om de voldoening van echte vooruitgang te voelen.", cta: "Meer informatie", href: "/in-depth" }, note: "Deze sessies werken zowel preventief als aanvullend op psychotherapie. Als je momenteel in therapie bent, werk ik samen met je psycholoog wanneer dat passend is." },
  }[lang];

  return (
    <section id="sessions" style={{ background: "var(--bg-alt)", padding: "100px 0", borderTop: "1px solid var(--border)" }} className="section-pad">
      <div style={{ ...W }} className="wrap-pad hero-content">
        <Reveal>
          <Tag label={T.tag} />
          <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, fontWeight: 300, color: "var(--ink)", marginBottom: "56px" }}>
            {T.title[0]}<br /><em>{T.title[1]}</em>
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="col-2">
          {[T.s1, T.s2].map((s, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div style={{ background: i === 0 ? "var(--teal)" : "var(--bg)", padding: "48px 40px", height: "100%", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: i === 0 ? "rgba(255,255,255,0.6)" : "var(--teal)", marginBottom: "14px" }}>{s.sub}</p>
                <h3 className="serif" style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", lineHeight: 1.1, fontWeight: 300, color: i === 0 ? "#fff" : "var(--ink)", marginBottom: "20px" }}>{s.h}</h3>
                <p style={{ fontSize: "15px", lineHeight: 1.85, color: i === 0 ? "rgba(255,255,255,0.8)" : "var(--ink-mid)", marginBottom: "32px", flex: 1 }}>{s.p}</p>
                <a href={s.href}
                  style={i === 0 ? { ...btnOutline({ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", alignSelf: "flex-start" }) } : { ...btnFilled({ alignSelf: "flex-start" }) }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = i === 0 ? "rgba(255,255,255,0.15)" : "var(--teal-dk)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = i === 0 ? "transparent" : "var(--teal)"; }}
                >{s.cta}</a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p style={{ marginTop: "24px", padding: "18px 24px", border: "1px solid var(--border)", fontSize: "14px", lineHeight: 1.8, color: "var(--ink-soft)", fontStyle: "italic" }}>{T.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   REVIEWS
════════════════════════════════════════ */
function Reviews({ lang }: { lang: Lang }) {
  const [showAll, setShowAll] = useState(false);
  const T = {
    en: { tag: "Reviews", title: ["Over 80 people", "left a review"], sub: "To help you choose what is best for you", favLabel: "My 3 favourite reviews", showAll: "Read all reviews", treatwell: "4.9 ★★★★★ · Treatwell & Google" },
    nl: { tag: "Reviews", title: ["Meer dan 80 mensen", "lieten een review achter"], sub: "Om je te helpen kiezen wat het beste voor jou is", favLabel: "Mijn 3 favoriete reviews", showAll: "Alle reviews lezen", treatwell: "4,9 ★★★★★ · Treatwell & Google" },
  }[lang];

  const reviews = ALL_REVIEWS[lang];
  const top3 = reviews.slice(0, 3);
  const rest = showAll ? reviews.slice(3) : reviews.slice(3, 9);

  return (
    <section id="reviews" style={{ background: "var(--bg)", padding: "100px 0", borderTop: "1px solid var(--border)" }}>
      <div style={{ ...W }} className="wrap-pad hero-content">
        <Reveal>
          <Tag label={T.tag} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "12px", flexWrap: "wrap", gap: "16px" }}>
            <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, fontWeight: 300, color: "var(--ink)" }}>
              {T.title[0]}<br /><em>{T.title[1]}</em>
            </h2>
            <p style={{ fontSize: "14px", color: "var(--ink-soft)" }}>{T.treatwell}</p>
          </div>
          <p style={{ fontSize: "15px", color: "var(--ink-mid)", marginBottom: "48px" }}>{T.sub}</p>
        </Reveal>

        {/* Top 3 — serif featured */}
        <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "1px" }}>{T.favLabel}</p>
        <div className="reviews-grid">
          {top3.map((r, i) => (
            <div key={i} className="review-cell">
              <p className="serif" style={{ fontSize: "1.05rem", lineHeight: 1.75, fontStyle: "italic", color: "var(--ink)", fontWeight: 300, marginBottom: "20px" }}>"{r.q}"</p>
              <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal)" }}>— {r.by}</p>
            </div>
          ))}
        </div>

        {/* Rest */}
        <div className="reviews-grid" style={{ marginTop: "10px" }}>
          {rest.map((r, i) => (
            <div key={i} className="review-cell alt">
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "var(--ink-mid)", marginBottom: "16px" }}>"{r.q}"</p>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal)" }}>— {r.by}</p>
            </div>
          ))}
        </div>

        {!showAll && (
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <button onClick={() => setShowAll(true)}
              style={btnOutline({ cursor: "pointer" })}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
            >{T.showAll}</button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   CONTACT
════════════════════════════════════════ */
function Contact({ lang }: { lang: Lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const T = {
    en: { tag: "Contact", title: ["Ready to begin", "your journey?"], p: "All new visitors begin with an intake call — to let the information land in the body first, before choosing your path. Reach out by WhatsApp, email, or the form below.", address: "Kanaalstraat 77-2, Amsterdam West", note: "Massage practice is above 4 flights of stairs", hours: "Mon – Fri · 12:00 – 18:00", wa: "WhatsApp", mail: "Email", maps: "Get directions", fTag: "Send a message", fName: "Name", fEmail: "E-mail", fMsg: "Message and/or appointment suggestions date and time", fSend: "Send", fSent: "Thank you — your message is on its way to Magda.", cancel: "Amagdala holds a 48h cancellation policy — email to postpone or reschedule." },
    nl: { tag: "Contact", title: ["Klaar om te beginnen", "aan jouw reis?"], p: "Alle nieuwe bezoekers beginnen met een intakegesprek — om de informatie eerst in het lichaam te laten landen, voordat je een keuze maakt. Neem contact op via WhatsApp, email of het formulier hieronder.", address: "Kanaalstraat 77-2, Amsterdam West", note: "Massagepraktijk is boven 4 trappen", hours: "Ma – Vr · 12:00 – 18:00", wa: "WhatsApp", mail: "Email", maps: "Routebeschrijving", fTag: "Stuur een bericht", fName: "Naam", fEmail: "E-mail", fMsg: "Bericht en/of afspraaksuggesties datum en tijd", fSend: "Versturen", fSent: "Dank je — jouw bericht is onderweg naar Magda.", cancel: "Amagdala hanteert een 48u annuleringsbeleid — email om te verzetten." },
  }[lang];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:info@amagdala.nl?subject=Session request from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`)}`;
    setSent(true);
  }

  const inp: React.CSSProperties = { width: "100%", padding: "14px 16px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: "15px", outline: "none", borderRadius: "2px", fontFamily: "Inter, sans-serif", transition: "border-color 0.2s", marginBottom: "12px" };

  return (
    <section id="contact" style={{ background: "var(--teal)", padding: "100px 0" }} className="section-pad">
      <div style={{ ...W }} className="wrap-pad hero-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="col-2">
          <Reveal>
            <Tag label={T.tag} light />
            <h2 className="serif" style={{ fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.05, fontWeight: 300, color: "#fff", marginBottom: "28px" }}>
              {T.title[0]}<br /><em>{T.title[1]}</em>
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.9, color: "rgba(255,255,255,0.8)", marginBottom: "40px" }}>{T.p}</p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <a href={LINKS.maps} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "flex-start", gap: "12px", color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 0.2s", fontSize: "15px" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                <MapIcon /><span>{T.address}<br /><span style={{ fontSize: "13px", opacity: 0.6 }}>{T.note}</span></span>
              </a>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>{T.hours}</p>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { href: LINKS.whatsapp, icon: <WaIcon />, label: T.wa },
                { href: LINKS.email, icon: <MailIcon />, label: T.mail },
                { href: LINKS.maps, icon: <MapIcon />, label: T.maps },
              ].map(b => (
                <a key={b.label} href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 20px", background: "rgba(255,255,255,0.15)", color: "#fff", textDecoration: "none", borderRadius: "2px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", transition: "all 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.25)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
                >{b.icon}{b.label}</a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {sent ? (
              <div style={{ paddingTop: "40px" }}>
                <p className="serif" style={{ fontSize: "2.2rem", fontWeight: 300, color: "#fff", marginBottom: "12px" }}>Thank you.</p>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)" }}>{T.fSent}</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: "24px" }}>{T.fTag}</p>
                <input placeholder={T.fName} value={name} onChange={e => setName(e.target.value)} style={inp}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")} />
                <input type="email" required placeholder={T.fEmail} value={email} onChange={e => setEmail(e.target.value)} style={inp}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")} />
                <textarea required rows={5} placeholder={T.fMsg} value={msg} onChange={e => setMsg(e.target.value)}
                  style={{ ...inp, resize: "none", marginBottom: "16px" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")} />
                <button type="submit" style={{ width: "100%", padding: "14px", background: "var(--ink)", color: "#fff", border: "none", borderRadius: "2px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2d2620"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
                >{T.fSend}</button>
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", marginTop: "14px" }}>{T.cancel}</p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   PAGE ROOT
════════════════════════════════════════ */
export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <main style={{ width: "100%" }}>
      <Nav lang={lang} setLang={setLang} transparent />
      <Hero lang={lang} />
      <About lang={lang} />
      <Sessions lang={lang} />
      <Reviews lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}

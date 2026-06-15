"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Lang, PHOTOS, LINKS, wrapStyle, btnFilled, btnOutline, WaIcon, MailIcon } from "@/components/shared";

export default function InDepthPage() {
  const [lang, setLang] = useState<Lang>("en");
  const T = {
    en: {
      tag: "In-Depth Treatment Program",
      title: "Each session is designed\nto create space",
      sub: "In your muscles, bones, fascia, and mind.",
      blendLine: "Using a blend of techniques such as relaxing massage, deep tissue work, foot reflexology, trigger points, holistic pulsing, psoas release, joint movement, postural patterns, grounding, expression and movement — every session is guided by your personal feedback and the sensations your body communicates in the moment.",
      intention: "Touch can be gentle, firm, or even absent. Always in attunement with what your body needs. The intention is to help you reconnect and experience your body on new levels of awareness.",
      s2tag: "In-Depth Treatment Program",
      s2title: ["In-Depth", "Treatment Program"],
      p1: "Is this all, is the thought that you're having with just monthly relaxing massages. This didn't heal me. It might even be so that you feel less ease after a good session because the defences surrender to the real pain. You deserve to feel more pleasure and freedom.",
      p2: "With the In-Depth Treatment Program you allow yourself to feel deeper into everything. You might have heard: the body keeps the score. The question is — what is your body trying to tell you, and why? We work with short chewable goals to feel the pleasure and gratification of progression.",
      p3headline: "You can't heal it all in one lifetime.",
      p3: "Nope — how much I would want to give you the world if I could. You are not a victim of your body, nor am I the one that will heal you. What we can achieve is to live a life with more ease, pleasure and to love it all in a way that doesn't feel like a struggle anymore.",
      p4: "Each program comes with a telephone intake and evaluation, deep integration after each session, personal guided meditations based on your themes and tips and tricks to bring this easeful lifestyle into your home.",
      quote: '"Yes, I love myself — completely, as I am."',
      closer: "Let's leave this world a little more beautiful than we found it.",
      end: "Your body will thank you.",
      cta: "Plan a call to get to know each other",
      note: "A single session can bring relief from symptoms. However, if you're seeking deeper transformation or lasting ease from recurring stress, I recommend starting with a series of five sessions.",
      starsLine: "4.9 ★★★★★ — More then 75 Reviews on Treatwell and Google maps",
      happinez: "Featured in Happinez magazine April '24",
      quote2: '"The heart tells you what to do and the head tells you how to do it"',
      quote2by: "Alexander Lowen",
      therapyNote: "These sessions can work both preventively and in complement to psychotherapy. When you are currently in therapy, I collaborate with your psychologist when appropriate because working together can strengthen and support your process to love yourself deeper.",
      location: "Location",
      address: "Practice Amagdala\nKanaalstraat 77-2\nAmsterdam\nMon-Fri 12:00–18:00",
      cancelNote: "Amagdala holds a 48h cancellation policy — email to postpone or reschedule.",
      wa: "WhatsApp",
      mail: "Email",
      introLink: "Want to start with a single session first?",
      introCta: "View Introduction Session →",
    },
    nl: {
      tag: "Intensief Behandelprogramma",
      title: "Elke sessie is ontworpen\nom ruimte te creëren",
      sub: "In jouw spieren, botten, fascia en geest.",
      blendLine: "Met een mix van technieken zoals ontspannende massage, deep tissue werk, voetreflexologie, trigger points, holistisch pulsing, psoas release, gewrichtsbeweging, houdingspatronen, aarding, expressie en beweging — elke sessie wordt geleid door jouw persoonlijke feedback.",
      intention: "Aanraking kan zacht, stevig of zelfs afwezig zijn. Altijd afgestemd op wat jouw lichaam nodig heeft. De intentie is om je te helpen reconnecten en je lichaam te ervaren op nieuwe niveaus van bewustzijn.",
      s2tag: "Intensief Behandelprogramma",
      s2title: ["Intensief", "Behandelprogramma"],
      p1: "Is dit alles, is de gedachte die je hebt met alleen maandelijkse ontspanningsmassages. Dit heeft me niet genezen. Het kan zelfs zijn dat je minder op je gemak voelt na een goede sessie omdat de verdedigingen zich overgeven aan de echte pijn. Je verdient meer plezier en vrijheid.",
      p2: "Met het Intensief Behandelprogramma laat je jezelf dieper voelen in alles. Je hebt misschien gehoord: het lichaam houdt de score bij. De vraag is — wat probeert jouw lichaam je te vertellen, en waarom? We werken met korte, behapbare doelen om het plezier en de voldoening van vooruitgang te voelen.",
      p3headline: "Je kunt niet alles in één leven genezen.",
      p3: "Nee — hoe graag ik je ook de wereld zou willen geven. Je bent geen slachtoffer van je lichaam, en ik ben ook niet degene die je geneest. Wat we kunnen bereiken is een leven met meer gemak, plezier en het allemaal liefhebben op een manier die niet meer als een strijd voelt.",
      p4: "Elk programma omvat een telefonische intake en evaluatie, diepe integratie na elke sessie, persoonlijke begeleide meditaties gebaseerd op jouw thema's en tips om deze levensstijl in je huis te brengen.",
      quote: '"Ja, ik hou van mezelf — volledig, zoals ik ben."',
      closer: "Laten we deze wereld een beetje mooier achterlaten dan we hem vonden.",
      end: "Jouw lichaam zal je dankbaar zijn.",
      cta: "Plan een gesprek om kennis te maken",
      note: "Een enkele sessie kan verlichting brengen. Als je echter op zoek bent naar diepere transformatie, raad ik aan met een serie van vijf sessies te beginnen.",
      starsLine: "4,9 ★★★★★ — Meer dan 75 reviews op Treatwell en Google maps",
      happinez: "Featured in Happinez magazine April '24",
      quote2: '"Het hart vertelt je wat je moet doen en het hoofd vertelt je hoe je het moet doen."',
      quote2by: "Alexander Lowen",
      therapyNote: "Deze sessies kunnen zowel preventief als aanvullend op psychotherapie werken. Als je momenteel in therapie bent, werk ik samen met je psycholoog wanneer dat passend is, omdat samenwerken je proces kan versterken om jezelf dieper lief te hebben.",
      location: "Locatie",
      address: "Praktijk Amagdala\nKanaalstraat 77-2\nAmsterdam\nMa-Vr 12:00–18:00",
      cancelNote: "Amagdala hanteert een 48u annuleringsbeleid — email om te verzetten.",
      wa: "WhatsApp",
      mail: "Email",
      introLink: "Wil je eerst beginnen met een enkele sessie?",
      introCta: "Bekijk de Introductie Sessie →",
    },
  }[lang];

  return (
    <main style={{ width: "100%" }}>
      <Nav lang={lang} setLang={setLang} transparent={false} />

      <section style={{ background: "var(--bg-alt)", paddingTop: "120px", paddingBottom: "80px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle }} className="wrap-pad">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "16px" }}>{T.tag}</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
            className="serif" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1.05, fontWeight: 300, color: "var(--ink)", marginBottom: "20px", whiteSpace: "pre-line" }}>{T.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: "16px", color: "var(--ink-mid)", marginBottom: "32px" }}>{T.sub}</motion.p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle, maxWidth: "720px" }} className="wrap-pad">
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "16px" }}>{T.blendLine}</p>
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)" }}>{T.intention}</p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div style={{ ...wrapStyle }} className="wrap-pad">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="col-2">
            <div>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "16px" }}>{T.s2tag}</p>
              <h2 className="serif" style={{ fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.05, fontWeight: 300, color: "var(--ink)", marginBottom: "28px" }}>{T.s2title[0]}<br />{T.s2title[1]}</h2>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{T.p1}</p>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{T.p2}</p>
              <h3 className="serif" style={{ fontSize: "1.5rem", fontWeight: 300, color: "var(--ink)", marginBottom: "12px", fontStyle: "italic" }}>{T.p3headline}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "18px" }}>{T.p3}</p>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "28px" }}>{T.p4}</p>
              <blockquote style={{ borderLeft: "2px solid var(--teal)", paddingLeft: "20px", margin: "24px 0" }}>
                <p className="serif" style={{ fontSize: "1.2rem", color: "var(--ink)", fontStyle: "italic" }}>{T.quote}</p>
              </blockquote>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", marginBottom: "8px" }}>{T.closer}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "var(--ink)", marginBottom: "28px" }}>{T.end}</p>
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={btnFilled()}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal-dk)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; }}
              >{T.cta}</a>
              <p style={{ fontSize: "13px", lineHeight: 1.8, color: "var(--ink-soft)", marginTop: "16px", fontStyle: "italic" }}>{T.note}</p>
            </div>
            <div style={{ height: "520px", overflow: "hidden", borderRadius: "2px" }} className="img-block">
              <img src={PHOTOS.space} alt="In-depth program" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85)" }} onError={e => { (e.currentTarget as HTMLImageElement).style.background = "var(--bg-alt)"; }} />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-alt)", padding: "48px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle, textAlign: "center" }} className="wrap-pad">
          <p className="serif" style={{ fontSize: "1.4rem", color: "var(--teal)", marginBottom: "8px" }}>{T.starsLine}</p>
          <a href="/#reviews" style={{ fontSize: "14px", color: "var(--ink-mid)", textDecoration: "none" }}>Read all reviews →</a>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "60px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle, textAlign: "center" }} className="wrap-pad">
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", marginBottom: "16px" }}>{T.happinez}</p>
          <div style={{ overflow: "hidden", borderRadius: "2px", maxWidth: "500px", margin: "0 auto" }}>
            <img src={PHOTOS.happinez} alt="Happinez" style={{ width: "100%", height: "100px", objectFit: "cover" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--teal)", padding: "64px 32px", textAlign: "center" }}>
        <p className="serif" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.5, maxWidth: "580px", margin: "0 auto 16px" }}>{T.quote2}</p>
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>{T.quote2by}</p>
      </section>

      <section style={{ background: "var(--bg-alt)", padding: "60px 0", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrapStyle, maxWidth: "680px" }} className="wrap-pad">
          <p style={{ fontSize: "15px", lineHeight: 1.9, color: "var(--ink-mid)", fontStyle: "italic" }}>{T.therapyNote}</p>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "80px 0" }}>
        <div style={{ ...wrapStyle }} className="wrap-pad">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="col-2">
            <div style={{ height: "360px", overflow: "hidden", borderRadius: "2px" }} className="img-block flip-mobile">
              <img src={PHOTOS.practice} alt="Practice" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85)" }} onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--teal)", marginBottom: "16px" }}>{T.location}</p>
              <p style={{ fontSize: "15px", lineHeight: 2, color: "var(--ink-mid)", whiteSpace: "pre-line", marginBottom: "28px" }}>{T.address}</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={btnFilled({ display: "inline-flex", gap: "8px", alignItems: "center" })}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal-dk)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; }}
                ><WaIcon />{T.wa}</a>
                <a href={LINKS.email} style={btnOutline({ display: "inline-flex", gap: "8px", alignItems: "center" })}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                ><MailIcon />{T.mail}</a>
              </div>
              <p style={{ fontSize: "12px", color: "var(--ink-soft)", fontStyle: "italic", marginBottom: "24px" }}>{T.cancelNote}</p>
              <div style={{ paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
                <p style={{ fontSize: "14px", color: "var(--ink-mid)", marginBottom: "8px" }}>{T.introLink}</p>
                <a href="/introduction" style={{ fontSize: "13px", fontWeight: 600, color: "var(--teal)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                >{T.introCta}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}

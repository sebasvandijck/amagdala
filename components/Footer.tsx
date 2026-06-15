"use client";

import Image from "next/image";
import { Lang, LINKS, IgIcon, LiIcon, wrapStyle } from "./shared";

const T = {
  en: { sub: "Body Awareness Practice · Amsterdam West", privacy: "Privacy statement", cancel: "48h cancellation policy" },
  nl: { sub: "Lichaamsbewustzijn Praktijk · Amsterdam West", privacy: "Privacyverklaring", cancel: "48u annuleringsbeleid" },
};

export default function Footer({ lang }: { lang: Lang }) {
  const t = T[lang];
  return (
    <footer style={{ background: "var(--ink)" }}>
      {/* Main footer */}
      <div style={{ ...wrapStyle, padding: "48px 48px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px", paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {/* Logo + sub */}
          <div>
            <Image src="/amagdala-logo.png" alt="Amagdala" width={110} height={32} style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.55, marginBottom: "12px" }} />
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "4px" }}>{t.sub}</p>
            <a href={LINKS.maps} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >Kanaalstraat 77-2, Amsterdam West ↗</a>
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { label: lang === "en" ? "Introduction Session" : "Introductie Sessie", href: "/introduction" },
              { label: lang === "en" ? "In-Depth Program" : "Intensief Programma", href: "/in-depth" },
              { label: lang === "en" ? "Reviews" : "Reviews", href: "/#reviews" },
              { label: lang === "en" ? "Contact" : "Contact", href: "/#contact" },
            ].map(l => (
              <a key={l.label} href={l.href}
                style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >{l.label}</a>
            ))}
          </div>

          {/* Bewust Netwerk badge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              ><IgIcon /></a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              ><LiIcon /></a>
            </div>
            {/* Bewust Netwerk */}
            <a href="https://www.bewustnetwerk.nl" target="_blank" rel="noopener noreferrer"
              style={{ opacity: 0.5, transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
            >
              <div style={{ background: "white", padding: "8px 12px", borderRadius: "4px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ display: "flex", gap: "3px" }}>
                  {[12,8,10,6,9,7].map((s,i) => (
                    <div key={i} style={{ width: `${s}px`, height: `${s}px`, borderRadius: "50%", background: "#555" }} />
                  ))}
                </div>
                <div>
                  <p style={{ fontSize: "9px", fontStyle: "italic", color: "#E05820", lineHeight: 1, fontFamily: "serif" }}>Aangesloten bij</p>
                  <p style={{ fontSize: "11px", fontWeight: 900, color: "#555", lineHeight: 1 }}>BEWUST</p>
                  <div style={{ background: "#E05820", padding: "1px 4px" }}>
                    <p style={{ fontSize: "9px", fontWeight: 900, color: "white", lineHeight: 1.4, letterSpacing: "0.05em" }}>NETWERK</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Amagdala</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/privacy" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
            >{t.privacy}</a>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>{t.cancel}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

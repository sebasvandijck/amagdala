"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Lang, btnFilled } from "./shared";

const NAV = {
  en: [
    { label: "About", href: "/#about", dropdown: null },
    {
      label: "Sessions", href: null,
      dropdown: [
        { label: "Introduction Session", href: "/introduction", sub: "Single session · First step" },
        { label: "In-Depth Program", href: "/in-depth", sub: "Series of sessions · Lasting change" },
      ]
    },
    { label: "Reviews", href: "/#reviews", dropdown: null },
    { label: "Contact", href: "/#contact", dropdown: null },
  ],
  nl: [
    { label: "Over", href: "/#about", dropdown: null },
    {
      label: "Sessies", href: null,
      dropdown: [
        { label: "Introductie Sessie", href: "/introduction", sub: "Enkele sessie · Eerste stap" },
        { label: "Intensief Programma", href: "/in-depth", sub: "Serie sessies · Blijvende verandering" },
      ]
    },
    { label: "Reviews", href: "/#reviews", dropdown: null },
    { label: "Contact", href: "/#contact", dropdown: null },
  ],
};

const CTA = { en: "Book a session", nl: "Boek een sessie" };

export default function Nav({ lang, setLang, transparent = true }: { lang: Lang; setLang: (l: Lang) => void; transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transparent) { setScrolled(true); return; }
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [transparent]);

  // Close dropdown on outside click
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const links = NAV[lang];

  return (
    <>
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? "rgba(247,244,239,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(26,22,18,0.08)" : "1px solid transparent",
          transition: "all 0.4s",
        }}>
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "15px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/amagdala-logo.png" alt="Amagdala" width={120} height={36} style={{ objectFit: "contain" }} />
          </a>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="hide-mobile">
            {links.map((l) => (
              l.dropdown ? (
                /* Sessions dropdown */
                <div key={l.label} ref={dropRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: dropdownOpen ? "var(--teal)" : "var(--ink-soft)", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s", padding: 0 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                    onMouseLeave={e => { if (!dropdownOpen) e.currentTarget.style.color = "var(--ink-soft)"; }}
                  >
                    {l.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }}>
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        style={{
                          position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)",
                          background: "var(--bg)", border: "1px solid var(--border)",
                          borderRadius: "4px", overflow: "hidden", minWidth: "260px",
                          boxShadow: "0 8px 32px rgba(26,22,18,0.12)",
                        }}
                      >
                        {/* Arrow */}
                        <div style={{ position: "absolute", top: "-6px", left: "50%", transform: "translateX(-50%)", width: "12px", height: "6px", overflow: "hidden" }}>
                          <div style={{ width: "10px", height: "10px", background: "var(--bg)", border: "1px solid var(--border)", transform: "rotate(45deg)", marginTop: "3px", marginLeft: "1px" }} />
                        </div>

                        {l.dropdown.map((item, i) => (
                          <a key={item.label} href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            style={{ display: "block", padding: "18px 24px", textDecoration: "none", borderBottom: i < l.dropdown!.length - 1 ? "1px solid var(--border)" : "none", transition: "background 0.15s" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--bg-alt)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          >
                            <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", marginBottom: "3px" }}>{item.label}</p>
                            <p style={{ fontSize: "11px", color: "var(--ink-soft)" }}>{item.sub}</p>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a key={l.label} href={l.href!}
                  style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-soft)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--teal)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ink-soft)")}
                >{l.label}</a>
              )
            ))}

            {/* Lang toggle */}
            <div style={{ display: "flex", gap: "2px", background: "rgba(26,22,18,0.07)", borderRadius: "4px", padding: "3px" }}>
              {(["en", "nl"] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)}
                  style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 10px", borderRadius: "3px", border: "none", cursor: "pointer", background: lang === l ? "var(--teal)" : "transparent", color: lang === l ? "#fff" : "var(--ink-soft)", transition: "all 0.2s" }}
                >{l}</button>
              ))}
            </div>

            <a href="/#contact" style={btnFilled()}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal-dk)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(74,155,150,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--teal)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >{CTA[lang]}</a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="show-mobile"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none" }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{ display: "block", width: "22px", height: "1px", background: "var(--ink)", margin: "5px 0", transition: "all 0.3s", transform: mobileOpen && i === 0 ? "rotate(45deg) translate(3px,3px)" : mobileOpen && i === 2 ? "rotate(-45deg) translate(3px,-3px)" : "none", opacity: mobileOpen && i === 1 ? 0 : 1 }} />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            style={{ position: "fixed", top: "62px", left: 0, right: 0, zIndex: 99, background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "24px 32px 32px" }}>

            {links.map((l) => (
              l.dropdown ? (
                <div key={l.label}>
                  <p style={{ display: "block", padding: "14px 0 8px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", borderBottom: "1px solid var(--border)" }}>{l.label}</p>
                  {l.dropdown.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                      style={{ display: "block", padding: "12px 0 12px 16px", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
                      <p style={{ fontSize: "16px", fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--ink)", marginBottom: "2px" }}>{item.label}</p>
                      <p style={{ fontSize: "11px", color: "var(--ink-soft)" }}>{item.sub}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <a key={l.label} href={l.href!} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "14px 0", fontSize: "20px", fontFamily: "Cormorant Garamond, serif", fontWeight: 300, color: "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}
                >{l.label}</a>
              )
            ))}

            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              {(["en", "nl"] as Lang[]).map(l => (
                <button key={l} onClick={() => { setLang(l); setMobileOpen(false); }}
                  style={{ padding: "8px 16px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid var(--teal)", borderRadius: "2px", cursor: "pointer", background: lang === l ? "var(--teal)" : "transparent", color: lang === l ? "#fff" : "var(--teal)" }}
                >{l}</button>
              ))}
            </div>
            <a href="/#contact" onClick={() => setMobileOpen(false)}
              style={{ display: "block", marginTop: "16px", textAlign: "center", padding: "14px", background: "var(--teal)", color: "#fff", textDecoration: "none", fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}
            >{CTA[lang]}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

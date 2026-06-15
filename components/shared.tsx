"use client";

// ─── Shared data, types, icons, layout primitives ───

export type Lang = "en" | "nl";

export const LINKS = {
  whatsapp: "https://wa.me/message/RI7BCFMK4DAIP1",
  email: "mailto:info@amagdala.nl",
  maps: "https://maps.app.goo.gl/SE6c93kqdBW6JLPK9",
  instagram: "https://www.instagram.com/magdadonders",
  linkedin: "https://www.linkedin.com/in/magdadonders/",
};

export const PHOTOS = {
  magda:    "https://i0.wp.com/amagdala.nl/wp-content/uploads/2024/03/crop-0-0-1078-1232-0-wp-1710868585375-e1738599195427.png?w=900&ssl=1",
  space:    "https://i0.wp.com/amagdala.nl/wp-content/uploads/2023/02/amagdala-4640114.jpg?w=1200&ssl=1",
  happinez: "https://i0.wp.com/amagdala.nl/wp-content/uploads/2025/11/happinez-24.jpg?w=1200&ssl=1",
  practice: "https://i0.wp.com/amagdala.nl/wp-content/uploads/2026/04/image_editor_output_image-1907250374-17760786979073782684974475419904.jpg?w=800&ssl=1",
  face:     "https://i0.wp.com/amagdala.nl/wp-content/uploads/2024/09/wp-17271823171647875970273523192531-e1727182407757-edited.png?w=500&ssl=1",
  touch:    "https://i0.wp.com/amagdala.nl/wp-content/uploads/2024/09/cropped-wp-1727183388370135810656932638084-e1727183450590.jpg?w=500&ssl=1",
  session:  "https://i0.wp.com/amagdala.nl/wp-content/uploads/2024/09/cropped-wp-17271834953521918897455219478523.jpg?w=800&ssl=1",
};

// ─── Icons ───
export function IgIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0"/></svg>;
}
export function LiIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
}
export function WaIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z"/></svg>;
}
export function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
}
export function MapIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
}

// ─── Wrap ───
export const wrapStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "1100px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "48px",
  paddingRight: "48px",
};

// ─── Button styles ───
export const btnFilled = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "inline-block",
  padding: "13px 28px",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: "2px",
  cursor: "pointer",
  background: "var(--teal)",
  color: "#fff",
  border: "none",
  transition: "all 0.2s",
  ...extra,
});

export const btnOutline = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  display: "inline-block",
  padding: "13px 28px",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  textDecoration: "none",
  borderRadius: "2px",
  cursor: "pointer",
  background: "transparent",
  color: "var(--teal)",
  border: "1px solid var(--teal)",
  transition: "all 0.2s",
  ...extra,
});

// ─── Tag label ───
export function Tag({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <p style={{
      fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em",
      textTransform: "uppercase", marginBottom: "18px",
      color: light ? "rgba(255,255,255,0.6)" : "var(--teal)",
    }}>{label}</p>
  );
}

// ─── Section divider ───
export function Divider() {
  return <div style={{ borderTop: "1px solid var(--border)", width: "100%" }} />;
}

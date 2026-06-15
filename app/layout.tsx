import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amagdala — Body Awareness Practice · Amsterdam West",
  description: "Somatic bodywork by Magdalena Donders. Body awareness therapy in Amsterdam West. 4.9★ — 80+ reviews.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}

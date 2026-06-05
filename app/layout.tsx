// Minimal root shell — fonts, globals, html/body.
// Header, Footer et NextIntlClientProvider sont dans app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-exo",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-inter",
  display: "swap"
});

// Title template + favicon only — OG/description/hreflang gérés dans app/[locale]/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://sparistudio.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${exo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

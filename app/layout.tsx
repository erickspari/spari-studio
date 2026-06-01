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

export const metadata: Metadata = {
  metadataBase: new URL("https://sparistudio.com"),
  title: {
    default: "Spari Studio — E-learning industriel, minier & SST",
    template: "%s — Spari Studio"
  },
  description:
    "Transformez vos documents en formations interactives qui vous ressemblent. Conception e-learning, localisation FR/EN, animations 2D & 3D, livraison SCORM/xAPI.",
  keywords: ["e-learning", "formation industrielle", "SST", "formation minière", "SCORM", "xAPI"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Spari Studio — E-learning industriel",
    description: "Transformez vos documents en formations interactives qui vous ressemblent.",
    url: "https://sparistudio.com",
    siteName: "Spari Studio",
    locale: "fr_CA",
    type: "website",
    images: [{ url: "/assets/website-mockup.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Spari Studio — E-learning industriel",
    description: "Transformez vos documents en formations interactives qui vous ressemblent.",
    images: ["/assets/website-mockup.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${exo.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

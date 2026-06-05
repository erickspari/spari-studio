import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

// ── Génère les routes statiques /fr et /en ──────────────────────────────────
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ── Meta OG locale-aware + hreflang ─────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = isFr
    ? "Spari Studio — E-learning industriel, minier & SST"
    : "Spari Studio — Industrial E-Learning, Mining & OHS";

  const description = isFr
    ? "Transformez vos documents en formations interactives qui vous ressemblent. Conception e-learning, localisation FR/EN, animations 2D & 3D, livraison SCORM/xAPI."
    : "Turn your documents into interactive training that reflects your reality. E-learning design, FR/EN localization, 2D & 3D animation, SCORM/xAPI delivery.";

  const ogImage = "https://sparistudio.com/assets/website-mockup.png";

  return {
    title: {
      default: title,
      template: "%s — Spari Studio",
    },
    description,
    keywords: isFr
      ? ["e-learning", "formation industrielle", "SST", "SCORM", "xAPI"]
      : ["e-learning", "industrial training", "OHS", "mining", "SCORM", "xAPI"],
    openGraph: {
      title,
      description,
      url: "https://sparistudio.com",
      siteName: "Spari Studio",
      locale: isFr ? "fr_CA" : "en_CA",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      languages: {
        fr: "https://sparistudio.com/fr",
        en: "https://sparistudio.com/en",
        "x-default": "https://sparistudio.com/fr",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  // Active le rendu statique pour next-intl
  setRequestLocale(locale);

  // Récupère les messages pour les Client Components (ContactForm, LanguageSwitcher…)
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}

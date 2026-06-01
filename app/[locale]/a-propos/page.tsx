import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <Hero
        variant="plain"
        kicker={t("heroKicker")}
        title={t("heroTitle")}
        lead={t("heroLead")}
      />

      {/* Section approche avec image équipe */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              kicker={t("approachKicker")}
              title={t("approachTitle")}
              lead={t("approachLead")}
            />
            <p className="mt-2 max-w-xl text-[16px] opacity-90">
              {t("approachBody")}
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/collage_08.png"
              alt={t("teamImgAlt")}
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="section section-navy">
        <div className="container-x grid gap-6 md:grid-cols-4">
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">FR / EN</div>
            <p className="mt-2 text-muted">{t("stat1Label")}</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">SCORM / xAPI</div>
            <p className="mt-2 text-muted">{t("stat2Label")}</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">2D / 3D</div>
            <p className="mt-2 text-muted">{t("stat3Label")}</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">{t("stat4Value")}</div>
            <p className="mt-2 text-muted">{t("stat4Label")}</p>
          </div>
        </div>
      </section>

      {/* Section studio / production */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/collage_06.png"
              alt={t("studioImgAlt")}
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <div className="kicker">{t("studioKicker")}</div>
            <h2 className="mt-2 font-display text-[clamp(28px,3.5vw,42px)] font-extrabold leading-tight">
              {t("studioTitle")}
            </h2>
            <p className="mt-4 text-lg opacity-90">
              {t("studioBody")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge-light">Design pédagogique</span>
              <span className="badge-light">Localisation FR/EN</span>
              <span className="badge-light">Animations interactives</span>
              <span className="badge-light">Modules SCORM/xAPI</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        lead={t("ctaLead")}
      />
    </>
  );
}

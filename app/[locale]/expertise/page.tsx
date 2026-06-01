import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "expertise" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function ExpertisePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("expertise");

  const whyUs = [
    { icon: "🏗️", title: t("why1Title"), desc: t("why1Desc") },
    { icon: "🎨", title: t("why2Title"), desc: t("why2Desc") },
    { icon: "🚀", title: t("why3Title"), desc: t("why3Desc") },
    { icon: "✨", title: t("why4Title"), desc: t("why4Desc") },
    { icon: "⚡", title: t("why5Title"), desc: t("why5Desc") },
  ];

  const mosaicImages = [
    { src: "/assets/collage_03.png", alt: t("imgAlt1") },
    { src: "/assets/collage_09.png", alt: t("imgAlt2") },
    { src: "/assets/promo_06.png", alt: t("imgAlt3") },
  ];

  const bulletPoints = [t("li1"), t("li2"), t("li3"), t("li4")];

  return (
    <>
      <Hero
        variant="plain"
        kicker={t("heroKicker")}
        title={t("heroTitle")}
        lead={t("heroLead")}
      />

      {/* Section principale */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              title={t("sectionTitle")}
              lead={t("sectionLead")}
            />
            <ul className="mt-6 space-y-3 text-[15px]">
              {bulletPoints.map(item => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/expertise-field-training-realistic.webp"
              alt={t("imgAlt")}
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker={t("sectorsKicker")} title={t("sectorsTitle")} />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_07.png" alt={t("sector1Title")} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">{t("sector1Title")}</h3>
                <p className="mt-2 text-muted">{t("sector1Desc")}</p>
              </div>
            </div>
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_05.png" alt={t("sector2Title")} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">{t("sector2Title")}</h3>
                <p className="mt-2 text-muted">{t("sector2Desc")}</p>
              </div>
            </div>
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_04.png" alt={t("sector3Title")} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">{t("sector3Title")}</h3>
                <p className="mt-2 text-muted">{t("sector3Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker={t("whyKicker")}
            title={t("whyTitle")}
            lead={t("whyLead")}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="card-light">
                <div className="text-4xl">{w.icon}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-navy">{w.title}</h3>
                <p className="mt-2 text-[15px] text-navy/75">{w.desc}</p>
              </div>
            ))}
            {/* 6e cellule : CTA */}
            <div className="card-light flex flex-col items-start justify-between border-gold/30 bg-gradient-to-br from-white to-[#fffbf0]">
              <div>
                <div className="text-4xl">💬</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-navy">{t("why6Title")}</h3>
                <p className="mt-2 text-[15px] text-navy/75">{t("why6Desc")}</p>
              </div>
              <div className="mt-6">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">{t("why6Cta")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaïque terrain */}
      <section className="section section-light" style={{background:"linear-gradient(180deg,#f0f5fb,#fff)"}}>
        <div className="container-x">
          <SectionTitle kicker={t("mosaicKicker")} title={t("mosaicTitle")} lead={t("mosaicLead")} />
          <div className="grid gap-4 md:grid-cols-3">
            {mosaicImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl shadow-cardLight">
                <Image src={img.src} alt={img.alt} width={800} height={600} className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        lead={t("ctaLead")}
        primaryCta={{ href: CALENDLY_URL, label: t("ctaCta"), external: true }}
      />
    </>
  );
}

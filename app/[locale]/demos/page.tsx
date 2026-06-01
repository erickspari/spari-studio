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
  const t = await getTranslations({ locale, namespace: "demos" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function DemosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("demos");

  const beforeItems = [t("beforeItem1"), t("beforeItem2"), t("beforeItem3"), t("beforeItem4"), t("beforeItem5")];
  const afterItems = [t("afterItem1"), t("afterItem2"), t("afterItem3"), t("afterItem4"), t("afterItem5")];

  const demoCards = [
    { src: "/assets/promo_09.png", alt: t("demo1Alt"), title: t("demo1Title"), desc: t("demo1DescV2") },
    { src: "/assets/promo_03.png", alt: t("demo2Alt"), title: t("demo2Title"), desc: t("demo2DescV2") },
    { src: "/assets/promo_05.png", alt: t("demo3Alt"), title: t("demo3Title"), desc: t("demo3DescV2") },
  ];

  return (
    <>
      <Hero
        variant="plain"
        kicker={t("heroKicker")}
        title={t("heroTitle")}
        lead={t("heroLead")}
        primaryCta={{ href: CALENDLY_URL, label: t("heroCta"), external: true }}
      />

      {/* Bloc Avant / Après */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker={t("transformKicker")} title={t("transformTitle")} lead={t("transformLead")} />
          <div className="grid gap-6 md:grid-cols-2">
            {/* AVANT */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gray-600">
                {"📄 " + t("beforeLabel")}
              </div>
              <ul className="space-y-4 text-[15px] text-navy/80">
                {beforeItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* APRÈS */}
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white to-[#fffbf0] p-8 shadow-md">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gold">
                {"🎯 " + t("afterLabel")}
              </div>
              <ul className="space-y-4 text-[15px] text-navy/80">
                {afterItems.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/20 text-xs font-black text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples avec images */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker={t("examplesKicker")} title={t("examplesTitle")} />
          <div className="grid gap-6 md:grid-cols-3">
            {demoCards.map((c) => (
              <div key={c.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                <div className="h-52 overflow-hidden">
                  <Image src={c.src} alt={c.alt} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu visuel double */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker={t("visualKicker")} title={t("visualTitle")} lead={t("visualLead")} />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
              <Image src="/assets/demos-realistic-elearning-module.webp" alt={t("visualImg1Alt")} width={1200} height={800} className="h-auto w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
                <Image src="/assets/equipment-interactive-visualization.webp" alt={t("visualImg2Alt")} width={1200} height={800} className="h-auto w-full object-cover" />
              </div>
              <p className="text-center text-sm font-semibold text-navy/60">{t("visualImg2Caption")}</p>
            </div>
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

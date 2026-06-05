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
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  const isEn = locale === "en";
  const services = [
    { image: "/assets/services-localization-translation.webp", title: t("svc1Title"), description: t("svc1Desc"), benefits: [t("svc1Benefit1"), t("svc1Benefit2"), t("svc1Benefit3")] },
    { image: isEn ? "/assets/services-elearning-design-en.png" : "/assets/services-elearning-design.webp", title: t("svc2Title"), description: t("svc2Desc"), benefits: [t("svc2Benefit1"), t("svc2Benefit2"), t("svc2Benefit3")] },
    { image: "/assets/services-custom-adaptation.webp", title: t("svc3Title"), description: t("svc3Desc"), benefits: [t("svc3Benefit1"), t("svc3Benefit2"), t("svc3Benefit3")] },
    { image: isEn ? "/assets/services-sst-onboarding-en.png" : "/assets/services-sst-onboarding.webp", title: t("svc4Title"), description: t("svc4Desc"), benefits: [t("svc4Benefit1"), t("svc4Benefit2"), t("svc4Benefit3")] },
    { image: "/assets/services-visual-animation.webp", title: t("svc5Title"), description: t("svc5Desc"), benefits: [t("svc5Benefit1"), t("svc5Benefit2"), t("svc5Benefit3")] },
    { image: "/assets/services-lms-deployment.webp", title: t("svc6Title"), description: t("svc6Desc"), benefits: [t("svc6Benefit1"), t("svc6Benefit2"), t("svc6Benefit3")] },
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

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker={t("catalogueKicker")}
            title={t("catalogueTitle")}
            lead={t("catalogueLead")}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="card-light flex flex-col overflow-hidden p-0">
                <div className="h-[180px] overflow-hidden rounded-t-3xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-extrabold leading-tight text-navy">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-navy/75">{s.description}</p>
                  <div className="mt-4 flex-1">
                    <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">{t("benefitLabel")}</p>
                    <ul className="space-y-1.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[14px] text-navy/70">
                          <span className="mt-0.5 text-gold">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn w-full justify-center text-center">
                      {t("svcCta")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t("ctaTitle")}
        lead={t("ctaLead")}
        primaryCta={{ href: CALENDLY_URL, label: t("heroCta"), external: true }}
      />
    </>
  );
}

import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  const genericItems = [t("genericItem1"), t("genericItem2"), t("genericItem3"), t("genericItem4"), t("genericItem5")];
  const spariItems = [t("spariItem1"), t("spariItem2"), t("spariItem3"), t("spariItem4"), t("spariItem5")];

  const services = [
    { icon: "🌐", title: t("svc1Title"), desc: t("svc1Desc") },
    { icon: "🎯", title: t("svc2Title"), desc: t("svc2Desc") },
    { icon: "🛡️", title: t("svc3Title"), desc: t("svc3Desc") },
    { icon: "✨", title: t("svc4Title"), desc: t("svc4Desc") },
    { icon: "📄", title: t("svc5Title"), desc: t("svc5Desc") },
    { icon: "🚀", title: t("svc6Title"), desc: t("svc6Desc") },
  ];

  return (
    <>
      <Hero
        kicker={t("heroKicker")}
        title={t("heroTitle")}
        lead={t("heroLead")}
        primaryCta={{ label: t("heroCta1"), popup: true }}
        secondaryCta={{ href: "/demos", label: t("heroCta2") }}
        heroImage={{
          src: locale === "en"
            ? "/assets/home-hero-documents-to-elearning-en.png"
            : "/assets/home-hero-documents-to-elearning.webp",
          alt: t("heroImgAlt"),
        }}
        badges={[t("heroBadge1"), t("heroBadge2"), t("heroBadge3")]}
      />

      {/* Bande LMS */}
      <section className="compat-strip py-5">
        <div className="container-x flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-extrabold uppercase tracking-[.13em] text-navy/70">{t("lmsLabel")}</p>
          <div className="flex flex-wrap items-center gap-7">
            {['Moodle','Docebo','SAP Litmos','Cornerstone','TalentLMS'].map((name) => <span key={name} className="compat-name">{name}</span>)}
          </div>
          <p className="text-sm font-bold text-navy/65">{t("lmsPartner")}</p>
        </div>
      </section>

      {/* Section comparaison */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker={t("comparisonKicker")}
            title={t("comparisonTitle")}
            lead={t("comparisonLead")}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/* Carte gauche — générique */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-red-500">
                {"❌ " + t("genericLabel")}
              </div>
              <h3 className="font-display text-xl font-extrabold text-navy">{t("genericTitle")}</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                {genericItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Carte droite — Spari */}
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white to-[#fffbf0] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gold">
                {"✅ " + t("spariLabel")}
              </div>
              <h3 className="font-display text-xl font-extrabold text-navy">{t("spariTitle")}</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                {spariItems.map((item) => (
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

      {/* Section services */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker={t("servicesKicker")} title={t("servicesTitle")} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card-dark">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold">{s.title}</h3>
                <p className="mt-3 text-[15px] text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section processus */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker={t("processKicker")} title={t("processTitle")} lead={t("processLead")} />
          <div className="grid gap-6 md:grid-cols-4">
            <ProcessStep icon="document" num={1} title={t("step1Title")} description={t("step1Desc")} />
            <ProcessStep icon="shield" num={2} title={t("step2Title")} description={t("step2Desc")} />
            <ProcessStep icon="cube" num={3} title={t("step3Title")} description={t("step3Desc")} />
            <ProcessStep icon="cap" num={4} title={t("step4Title")} description={t("step4Desc")} />
          </div>
        </div>
      </section>

      {/* Section identité terrain */}
      <section className="section section-light" style={{background:"linear-gradient(180deg,#f0f5fb,#fff)"}}>
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/ownership-training-realistic.webp"
              alt={t("identityImgAlt")}
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <div className="kicker">{t("identityKicker")}</div>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-tight text-navy">{t("identityTitle")}</h2>
            <p className="mt-4 text-lg text-navy/85">{t("identityBody")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge-light">{t("badge1")}</span>
              <span className="badge-light">{t("badge2")}</span>
              <span className="badge-light">{t("badge3")}</span>
              <span className="badge-light">{t("badge4")}</span>
            </div>
            <div className="mt-8">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">{t("identityCta")}</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        kicker={t("ctaKicker")}
        title={t("ctaTitle")}
        lead={t("ctaLead")}
        primaryCta={{ label: t("ctaCta1"), popup: true }}
        secondaryCta={{ href: "/demos", label: t("ctaCta2") }}
      />
    </>
  );
}

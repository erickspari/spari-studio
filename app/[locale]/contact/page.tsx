import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <Hero
        variant="plain"
        kicker={t("heroKicker")}
        title={t("heroTitle")}
        lead={t("heroLead")}
      />

      <section className="section section-light">
        <div className="container-x grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold">{t("scheduleTitle")}</h2>
            <p className="mt-3 text-[15px]">
              {t("scheduleBody")}
            </p>

            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                {t("li1")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                {t("li2")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                {t("li3")}
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                {t("li4")}
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-navy/10 bg-navy/5 p-5">
              <p className="text-sm font-extrabold uppercase tracking-wider text-navy/70">
                {t("coordsLabel")}
              </p>
              <p className="mt-2 text-[15px]">{t("location")}</p>
              <a
                href={`mailto:${t("email")}`}
                className="mt-1 inline-block text-[15px] font-extrabold text-blue hover:underline"
              >
                {t("email")}
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <section className="section section-navy min-h-[60vh]">
      <div className="container-x text-center">
        <div className="kicker">{t("kicker")}</div>
        <h1 className="mt-3 font-display text-[clamp(36px,6vw,64px)]">{t("title")}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          {t("body")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn">{t("cta1")}</Link>
          <Link href="/contact" className="btn-secondary">{t("cta2")}</Link>
        </div>
      </div>
    </section>
  );
}

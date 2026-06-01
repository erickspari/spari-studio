import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="border-t border-white/10 bg-[#03070d] py-14">
      <div className="container-x grid gap-8 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-[15px] text-muted">
            {t("tagline")}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="badge">FR/EN</span><span className="badge">SCORM/xAPI</span><span className="badge">2D/3D</span>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">{t("nav")}</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-gold">{t("navHome")}</Link></li>
            <li><Link href="/services" className="hover:text-gold">{t("navServices")}</Link></li>
            <li><Link href="/expertise" className="hover:text-gold">{t("navExpertise")}</Link></li>
            <li><Link href="/demos" className="hover:text-gold">{t("navDemos")}</Link></li>
            <li><Link href="/a-propos" className="hover:text-gold">{t("navAbout")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">{t("servicesTitle")}</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>{t("service1")}</li><li>{t("service2")}</li><li>{t("service3")}</li><li>{t("service4")}</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">{t("contactTitle")}</h3>
          <p className="text-sm text-muted">{t("contactLocation")}</p>
          <a href={`mailto:${t("contactEmail")}`} className="text-sm text-muted hover:text-gold">{t("contactEmail")}</a>
          <div className="mt-4"><Link href="/contact" className="btn">{t("contactCta")}</Link></div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-[13px] text-[#8795a5]">© {new Date().getFullYear()} {t("copyright")}</div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import Logo from "./Logo";
import { CALENDLY_URL } from "@/config/links";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { href: "/services", label: t("services") },
    { href: "/expertise", label: t("expertise") },
    { href: "/demos", label: t("demos") },
    { href: "/a-propos", label: t("about") },
    { href: "/contact", label: t("contact") }
  ];

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="container-x flex items-center justify-between py-3.5">
        <Logo />
        <nav className="hidden items-center gap-7 text-[13px] font-extrabold uppercase tracking-[.12em] md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Link key={l.href} href={l.href as any} className={`relative transition-colors ${active ? "text-gold" : "text-white/80 hover:text-gold"}`}>
                {l.label}
                {active && <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gold" />}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={pathname}
            locale="fr"
            className={`rounded px-2 py-1 text-xs font-extrabold uppercase tracking-widest transition-colors ${
              locale === "fr" ? "text-gold underline underline-offset-4" : "text-white/50 hover:text-gold"
            }`}
          >
            FR
          </Link>
          <span className="text-white/30">|</span>
          <Link
            href={pathname}
            locale="en"
            className={`rounded px-2 py-1 text-xs font-extrabold uppercase tracking-widest transition-colors ${
              locale === "en" ? "text-gold underline underline-offset-4" : "text-white/50 hover:text-gold"
            }`}
          >
            EN
          </Link>
        </div>
        <div className="hidden md:block"><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">{t("cta")}</a></div>
        <button aria-label={open ? t("closeMenu") : t("openMenu")} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/20 bg-white/5 md:hidden">
          <span className="sr-only">Menu</span>
          <span className="relative block h-[2px] w-5 bg-white before:absolute before:left-0 before:top-[-6px] before:h-[2px] before:w-5 before:bg-white before:content-[''] after:absolute after:left-0 after:top-[6px] after:h-[2px] after:w-5 after:bg-white after:content-['']" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink md:hidden">
          <nav className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <Link key={l.href} href={l.href as any} className={`rounded-md px-3 py-3 text-base font-extrabold uppercase tracking-wide ${pathname === l.href ? "bg-white/5 text-gold" : "text-white/85 hover:bg-white/5"}`}>{l.label}</Link>
            ))}
            <div className="flex items-center gap-3 px-3 py-2">
              <Link href={pathname} locale="fr" className={`text-sm font-extrabold uppercase tracking-widest ${locale === "fr" ? "text-gold underline underline-offset-4" : "text-white/50"}`}>FR</Link>
              <span className="text-white/30">|</span>
              <Link href={pathname} locale="en" className={`text-sm font-extrabold uppercase tracking-widest ${locale === "en" ? "text-gold underline underline-offset-4" : "text-white/50"}`}>EN</Link>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn mt-2 w-full justify-center">{t("cta")}</a>
          </nav>
        </div>
      )}
    </header>
  );
}

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Icon from "./Icon";
import CalendlyButton from "./CalendlyButton";

type CtaItem = { href?: string; label: string; external?: boolean; popup?: boolean };

type HeroProps = {
  kicker?: string;
  title: string;
  lead?: string;
  primaryCta?: CtaItem;
  secondaryCta?: CtaItem;
  variant?: "image" | "plain";
  heroImage?: { src: string; alt: string };
  badges?: string[];
};

function HeroVisual() {
  return (
    <div className="device-stage" aria-hidden>
      <div className="floating-doc">
        <div className="mb-3 flex items-center justify-between">
          <Icon name="document" className="h-7 w-7 text-blue" />
          <span className="rounded-md bg-red-100 px-2 py-1 text-xs font-black text-red-600">PDF</span>
        </div>
        <div className="doc-lines"><span /><span style={{ width: "82%" }} /><span style={{ width: "65%" }} /><span style={{ width: "74%" }} /></div>
      </div>
      <div className="laptop">
        <div className="laptop-screen">
          <div className="screen-ui">
            <div className="kicker">Module interactif</div>
            <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">Vérification du chariot élévateur</h3>
            <p className="mt-3 text-sm text-muted">Scénario terrain, quiz, médias et suivi LMS.</p>
            <div className="mt-5 flex gap-2">
              <span className="badge">SCORM</span>
              <span className="badge">FR/EN</span>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-tablet">
        <div className="mb-3 flex items-center gap-2"><Icon name="play" className="h-6 w-6 text-gold" /><strong>Démo 3D</strong></div>
        <div className="h-24 rounded-xl bg-gradient-to-br from-blue/30 to-gold/20 p-4">
          <Icon name="cube" className="h-12 w-12 text-gold" />
        </div>
      </div>
      <div className="floating-phone">
        <Icon name="mobile" className="h-6 w-6 text-gold" />
        <p className="mt-2 text-xs font-bold">Accessible partout</p>
      </div>
    </div>
  );
}

function CtaButton({ cta, className }: { cta: CtaItem; className: string }) {
  if (cta.popup) {
    return <CalendlyButton label={cta.label} className={className} />;
  }
  if (cta.external && cta.href) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }
  if (cta.href) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <Link href={cta.href as any} className={className}>{cta.label}</Link>;
  }
  return null;
}

export default function Hero({
  kicker,
  title,
  lead,
  primaryCta,
  secondaryCta,
  variant = "image",
  heroImage,
  badges,
}: HeroProps) {
  if (variant === "plain") {
    return (
      <section className="section section-navy">
        <div className="container-x max-w-4xl py-8">
          {kicker && <div className="kicker">{kicker}</div>}
          <h1 className="mt-3 font-display text-[clamp(38px,6vw,72px)] leading-[1.02]">
            {title}
          </h1>
          {lead && <p className="mt-5 max-w-3xl text-lg text-muted md:text-xl">{lead}</p>}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && <CtaButton cta={primaryCta} className="btn" />}
              {secondaryCta && <CtaButton cta={secondaryCta} className="btn-secondary" />}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="hero-shell">
      <div className="container-x hero-content grid items-center gap-12 py-16 lg:grid-cols-[.94fr_1.06fr]">
        <div>
          {kicker && <div className="kicker">{kicker}</div>}
          <h1 className="hero-title mt-4 font-display font-extrabold">
            <span className="text-gradient">{title}</span>
          </h1>
          {lead && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{lead}</p>}
          {badges && badges.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b} className="badge">{b}</span>
              ))}
            </div>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-9 flex flex-wrap gap-4">
              {primaryCta && <CtaButton cta={primaryCta} className="btn" />}
              {secondaryCta && <CtaButton cta={secondaryCta} className="btn-secondary" />}
            </div>
          )}
        </div>
        {heroImage ? (
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : (
          <HeroVisual />
        )}
      </div>
    </section>
  );
}

import { Link } from "@/i18n/navigation";

type CtaItem = { href: string; label: string; external?: boolean };

type CTASectionProps = {
  kicker?: string;
  title: string;
  lead?: string;
  primaryCta?: CtaItem;
  secondaryCta?: CtaItem;
};

function CtaButton({ cta, className }: { cta: CtaItem; className: string }) {
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }
  return <Link href={cta.href} className={className}>{cta.label}</Link>;
}

export default function CTASection({
  kicker,
  title,
  lead,
  primaryCta = { href: "/contact", label: "Demander une démo" },
  secondaryCta
}: CTASectionProps) {
  return (
    <section className="section section-navy">
      <div className="container-x text-center">
        {kicker && <div className="kicker">{kicker}</div>}
        <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] leading-tight">
          {title}
        </h2>
        {lead && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{lead}</p>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CtaButton cta={primaryCta} className="btn" />
          {secondaryCta && (
            <CtaButton cta={secondaryCta} className="btn-secondary" />
          )}
        </div>
      </div>
    </section>
  );
}

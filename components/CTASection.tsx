import { Link } from "@/i18n/navigation";
import CalendlyButton from "./CalendlyButton";

type CtaItem = { href?: string; label: string; external?: boolean; popup?: boolean };

type CTASectionProps = {
  kicker?: string;
  title: string;
  lead?: string;
  primaryCta?: CtaItem;
  secondaryCta?: CtaItem;
};

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

export default function CTASection({
  kicker,
  title,
  lead,
  primaryCta,
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
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {primaryCta && <CtaButton cta={primaryCta} className="btn" />}
            {secondaryCta && (
              <CtaButton cta={secondaryCta} className="btn-secondary" />
            )}
          </div>
        )}
      </div>
    </section>
  );
}

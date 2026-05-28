import { Link } from "@/i18n/navigation";

type CTASectionProps = {
  kicker?: string;
  title: string;
  lead?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

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
          <Link href={primaryCta.href} className="btn">
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="btn-secondary">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

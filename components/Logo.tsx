import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Spari Studio - Accueil">
      <Image
        src="/brand/spari-mark.svg"
        alt="Spari Studio"
        width={compact ? 42 : 48}
        height={compact ? 42 : 48}
        className="logo-shadow transition-transform duration-300 group-hover:scale-105"
        priority
      />
      {compact ? (
        <span className="font-display text-xl font-extrabold tracking-wide">SPARI STUDIO</span>
      ) : (
        <span className="font-display leading-none">
          <span className="block text-[24px] font-extrabold tracking-[.08em]">SPARI</span>
          <small className="block text-gold tracking-[.36em] text-[10px] font-extrabold">
            STUDIO
          </small>
        </span>
      )}
    </Link>
  );
}

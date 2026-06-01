"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <Link href="/" aria-label="Spari Studio - Accueil" className="group">
      {/* Desktop: logo horizontal */}
      <Image
        src="/brand/spari-logo-horizontal-dark.png"
        alt="Spari Studio"
        width={200}
        height={52}
        className="hidden h-[52px] w-auto transition-opacity duration-300 group-hover:opacity-80 md:block"
        priority
      />
      {/* Mobile: marque seule */}
      <Image
        src="/brand/spari-mark.svg"
        alt="Spari Studio"
        width={44}
        height={44}
        className="block h-[44px] w-[44px] transition-opacity duration-300 group-hover:opacity-80 md:hidden"
        priority
      />
    </Link>
  );
}

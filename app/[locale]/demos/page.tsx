import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";


export const metadata: Metadata = {
  title: "Démos — Avant/Après",
  description:
    "Avant/Après : de vos documents à l’expérience interactive. Inspection chariot élévateur, procédure industrielle, formation d’accueil."
};


type Props = { params: Promise<{ locale: string }> };

export default async function DemosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="Démos"
        title="Avant / Après : de vos documents à l’expérience interactive"
        lead="Montrez-nous un PDF, un PowerPoint ou une procédure. Nous vous montrons comment le transformer en formation digitale."
        primaryCta={{ href: "/contact", label: "Demander un échantillon" }}
      />

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Exemples"
            title="Quelques transformations types"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Inspection chariot élévateur"
              description="Module interactif + visuels 3D pour comprendre les points de contrôle."
            />
            <ServiceCard
              title="Procédure industrielle"
              description="Transformation d’une procédure statique en scénario guidé."
            />
            <ServiceCard
              title="Formation d’accueil"
              description="Parcours digital avec vidéos, quiz, engagement et suivi."
            />
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle
            kicker="Aperçu visuel"
            title="Du document au module"
          />
          <div className="overflow-hidden rounded-2xl border border-white/15">
            <Image
              src="/assets/website-mockup.png"
              alt="Maquette site Spari Studio"
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Voir une démo personnalisée ?"
        lead="Envoyez-nous un extrait de vos contenus — nous construisons une mini-démo dédiée."
      />
    </>
  );
}

import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Expertise terrain — industrie, mines, SST",
  description:
    "Conçus pour l’industrie, les mines et la SST. Formations d’accueil, procédures critiques, modules bilingues FR/EN, contenus zéro papier adaptés au terrain."
};


type Props = { params: Promise<{ locale: string }> };

export default async function ExpertisePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="Expertise terrain"
        title="Conçus pour l’industrie, les mines et la SST"
        lead="Nous comprenons les réalités opérationnelles : sécurité, procédures, équipements, conformité et apprentissage terrain."
      />

      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              title="Des formations qui ressemblent à votre environnement"
              lead="Les travailleurs apprennent mieux quand ils reconnaissent leurs lieux, leurs équipements et leurs procédures. C’est pourquoi nous privilégions une approche personnalisée et concrète."
            />
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Formations d’accueil des nouveaux travailleurs
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Formations SST et procédures critiques
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Modules bilingues FR/EN
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Contenus zéro papier adaptés au terrain
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/family-booth.png"
              alt="Équipe Spari Studio en situation"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle
            kicker="Secteurs"
            title="Là où nous intervenons"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-dark">
              <h3 className="font-display text-xl font-extrabold">Industrie</h3>
              <p className="mt-2 text-muted">Procédures de production, maintenance, qualité, opérations critiques.</p>
            </div>
            <div className="card-dark">
              <h3 className="font-display text-xl font-extrabold">Mines</h3>
              <p className="mt-2 text-muted">Sécurité, équipements lourds, environnement souterrain, conformité.</p>
            </div>
            <div className="card-dark">
              <h3 className="font-display text-xl font-extrabold">SST</h3>
              <p className="mt-2 text-muted">Formations sécurité, accueil des travailleurs, gestion des risques.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Vos enjeux, notre méthode"
        lead="Parlons de vos procédures et de la meilleure façon de les transformer en formation."
      />
    </>
  );
}

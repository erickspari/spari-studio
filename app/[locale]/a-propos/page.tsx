import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";


export const metadata: Metadata = {
  title: "À propos",
  description:
    "Spari Studio aide les organisations à convertir leurs contenus existants en expériences e-learning personnalisées, bilingues et interactives."
};


type Props = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="À propos"
        title="Un studio spécialisé en transformation de formations"
        lead="Spari Studio aide les organisations à convertir leurs contenus existants en expériences e-learning personnalisées, bilingues et interactives."
      />

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            align="left"
            kicker="Notre approche"
            title="Pédagogie, design, terrain"
            lead="Nous combinons conception pédagogique, localisation, design visuel, production multimédia et animations 2D/3D pour créer des formations qui sont réellement utiles aux équipes terrain."
          />
          <p className="mt-2 max-w-3xl text-[16px] opacity-90">
            Notre force : rapidité, qualité, flexibilité et compréhension des
            réalités industrielles. Chaque mandat est cadré sur vos contraintes
            opérationnelles, et chaque livrable est conçu pour rester maintenable
            par vos équipes.
          </p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-x grid gap-6 md:grid-cols-4">
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">FR / EN</div>
            <p className="mt-2 text-muted">Modules bilingues livrés en parallèle.</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">SCORM / xAPI</div>
            <p className="mt-2 text-muted">Compatible avec vos plateformes LMS existantes.</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">2D / 3D</div>
            <p className="mt-2 text-muted">Vyond et Blender pour les scènes terrain.</p>
          </div>
          <div className="card-dark">
            <div className="font-display text-3xl font-extrabold text-gold">Sur-mesure</div>
            <p className="mt-2 text-muted">Vos visuels, vos procédures, votre propriété.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Travaillons ensemble"
        lead="Un projet, une refonte, un audit ? Écrivez-nous."
      />
    </>
  );
}

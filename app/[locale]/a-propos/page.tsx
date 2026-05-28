import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
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

      {/* Section approche avec image équipe */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              kicker="Notre approche"
              title="Pédagogie, design, terrain"
              lead="Nous combinons conception pédagogique, localisation, design visuel, production multimédia et animations 2D/3D pour créer des formations qui sont réellement utiles aux équipes terrain."
            />
            <p className="mt-2 max-w-xl text-[16px] opacity-90">
              Notre force : rapidité, qualité, flexibilité et compréhension des
              réalités industrielles. Chaque mandat est cadré sur vos contraintes
              opérationnelles, et chaque livrable est conçu pour rester maintenable
              par vos équipes.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/collage_08.png"
              alt="Deux membres de l'équipe Spari Studio travaillant ensemble sur un projet"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
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

      {/* Section studio / production */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/collage_06.png"
              alt="Modélisateur 3D travaillant sur des équipements industriels pour une formation"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <div className="kicker">Production multimédia</div>
            <h2 className="mt-2 font-display text-[clamp(28px,3.5vw,42px)] font-extrabold leading-tight">
              Un studio complet sous un même toit
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Conception pédagogique, scénarisation, design graphique, modélisation 3D, animation Vyond, localisation FR/EN — tout est réalisé en interne pour garantir cohérence, rapidité et qualité sur chaque livrable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge-light">Articulate Storyline</span>
              <span className="badge-light">Rise 360</span>
              <span className="badge-light">Vyond</span>
              <span className="badge-light">Blender 3D</span>
            </div>
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

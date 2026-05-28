import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Localisation FR/EN, conception e-learning, adaptation de formations existantes, animations 2D Vyond et 3D Blender, livraison SCORM/xAPI compatible avec vos plateformes LMS."
};

const services = [
  {
    title: "Localisation & traduction",
    description:
      "Traduction FR/EN fiable, terminologie SST, minière et industrielle, adaptation culturelle et pédagogique."
  },
  {
    title: "Conception e-learning",
    description:
      "Storyline, Rise, scénarisation, design pédagogique, quiz, interactions et narration."
  },
  {
    title: "Adaptation de formations existantes",
    description:
      "Nous reconstruisons vos contenus pour qu'ils reflètent votre réalité et deviennent votre propriété."
  },
  {
    title: "Animations 2D",
    description:
      "Animations Vyond pour expliquer une procédure, un risque ou une situation de travail."
  },
  {
    title: "Animations 3D",
    description:
      "Blender, visualisation d'équipements, chariots élévateurs, scènes de maintenance, inspections."
  },
  {
    title: "Déploiement LMS",
    description:
      "Modules SCORM/xAPI compatibles avec vos plateformes LMS existantes."
  }
];

type Props = { params: Promise<{ locale: string }> };

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="Services"
        title="Une offre complète pour transformer vos formations"
        lead="De la traduction spécialisée à la conception e-learning, jusqu'aux animations 2D et 3D."
        primaryCta={{ href: "/contact", label: "Discuter d'un projet" }}
      />

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Catalogue"
            title="Ce que nous livrons"
            lead="Chaque service est cadré à votre réalité — pas de gabarit générique."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Section visuelle : de la salle de cours au digital */}
      <section className="section section-navy">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="kicker">Formation en salle → Digital</div>
            <h2 className="mt-2 font-display text-[clamp(28px,3.5vw,42px)] font-extrabold leading-tight">
              Vos formations existent déjà. Nous les modernisons.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Vous avez des PowerPoint, des guides d'accueil, des procédures imprimées ou des formations en classe ? Nous les transformons en modules digitaux interactifs, accessibles en tout temps, depuis n'importe quel appareil.
            </p>
            <ul className="mt-6 space-y-3 text-[15px] text-muted">
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-gold" />Conversion de présentations PowerPoint</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-gold" />Numérisation de procédures terrain</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-gold" />Modernisation de formations existantes</li>
              <li className="flex gap-3"><span className="mt-1 h-2 w-2 flex-none rounded-full bg-gold" />Intégration de quiz et de suivi de complétion</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/promo_08.png"
                alt="Formateur présentant une procédure d'arrêt d'urgence en salle de cours"
                width={1200}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/collage_02.png"
                alt="Instructeur devant un écran affichant une procédure de sécurité minière"
                width={1200}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet en tête ?"
        lead="Envoyez-nous quelques documents — nous vous montrons ce qu'ils deviennent."
      />
    </>
  );
}

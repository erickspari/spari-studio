import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const runtime = "edge";

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
      "Nous reconstruisons vos contenus pour qu’ils reflètent votre réalité et deviennent votre propriété."
  },
  {
    title: "Animations 2D",
    description:
      "Animations Vyond pour expliquer une procédure, un risque ou une situation de travail."
  },
  {
    title: "Animations 3D",
    description:
      "Blender, visualisation d’équipements, chariots élévateurs, scènes de maintenance, inspections."
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
        lead="De la traduction spécialisée à la conception e-learning, jusqu’aux animations 2D et 3D."
        primaryCta={{ href: "/contact", label: "Discuter d’un projet" }}
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

      <CTASection
        title="Un projet en tête ?"
        lead="Envoyez-nous quelques documents — nous vous montrons ce qu’ils deviennent."
      />
    </>
  );
}

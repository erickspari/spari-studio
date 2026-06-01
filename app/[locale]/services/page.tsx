import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

export const metadata: Metadata = {
  title: "Services",
  description: "Localisation FR/EN, conception e-learning, adaptation de formations existantes, animations interactives, livraison SCORM/xAPI compatible avec vos plateformes LMS."
};

const services = [
  {
    image: "/assets/services-localization-translation.webp",
    title: "Localisation & traduction",
    description: "Traduction FR/EN fiable, terminologie SST, minière et industrielle, adaptation culturelle et pédagogique.",
    benefits: ["Terminologie technique validée", "Adaptation culturelle Québec/Canada", "Révision par des experts terrain"]
  },
  {
    image: "/assets/services-elearning-design.webp",
    title: "Conception e-learning",
    description: "Scénarisation, design pédagogique, quiz, interactions et narration à partir de vos contenus existants.",
    benefits: ["Modules engageants et clairs", "Quiz et évaluations intégrés", "Compatible tous appareils"]
  },
  {
    image: "/assets/services-custom-adaptation.webp",
    title: "Adaptation de formations existantes",
    description: "Nous reconstruisons vos contenus pour qu'ils reflètent votre réalité et deviennent votre propriété.",
    benefits: ["Vos visuels et procédures intégrés", "Propriété complète des livrables", "Mise à jour facile par vos équipes"]
  },
  {
    image: "/assets/services-sst-onboarding.webp",
    title: "Formations d'accueil & SST",
    description: "Parcours d'intégration, sécurité, procédures critiques et capsules adaptées aux nouveaux travailleurs.",
    benefits: ["Réduction du temps d'intégration", "Conformité réglementaire assurée", "Suivi de complétion automatisé"]
  },
  {
    image: "/assets/services-visual-animation.webp",
    title: "Visualisations & animations interactives",
    description: "Expliquez vos équipements, inspections et gestes de sécurité avec des animations claires et adaptées à vos opérations.",
    benefits: ["Compréhension visuelle immédiate", "Procédures complexes simplifiées", "Mémorisation améliorée"]
  },
  {
    image: "/assets/services-lms-deployment.webp",
    title: "Déploiement LMS",
    description: "Modules SCORM/xAPI compatibles avec vos plateformes LMS existantes, testés et prêts à déployer.",
    benefits: ["SCORM 1.2 et 2004, xAPI", "Compatible avec tous les LMS majeurs", "Tests de compatibilité inclus"]
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
        lead="De la traduction spécialisée à la conception e-learning, jusqu'aux animations interactives."
        primaryCta={{ href: CALENDLY_URL, label: "Planifier un RDV gratuit", external: true }}
      />

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Catalogue"
            title="Ce que nous livrons"
            lead="Chaque service est cadré à votre réalité — pas de gabarit générique."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="card-light flex flex-col overflow-hidden p-0">
                <div className="h-[180px] overflow-hidden rounded-t-3xl">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={360}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-extrabold leading-tight text-navy">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-navy/75">{s.description}</p>
                  <div className="mt-4 flex-1">
                    <p className="text-xs font-black uppercase tracking-widest text-gold mb-2">Résultat client</p>
                    <ul className="space-y-1.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[14px] text-navy/70">
                          <span className="mt-0.5 text-gold">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn w-full justify-center text-center">
                      Consultation gratuite
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un projet en tête ?"
        lead="Envoyez-nous quelques documents — nous vous montrons ce qu'ils deviennent."
        primaryCta={{ href: CALENDLY_URL, label: "Planifier un RDV gratuit", external: true }}
      />
    </>
  );
}

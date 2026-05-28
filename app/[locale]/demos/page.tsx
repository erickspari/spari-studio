import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Démos — Avant/Après",
  description:
    "Avant/Après : de vos documents à l'expérience interactive. Inspection chariot élévateur, procédure industrielle, formation d'accueil."
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
        title="Avant / Après : de vos documents à l'expérience interactive"
        lead="Montrez-nous un PDF, un PowerPoint ou une procédure. Nous vous montrons comment le transformer en formation digitale."
        primaryCta={{ href: "/contact", label: "Demander un échantillon" }}
      />

      {/* Exemples avec images */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Exemples"
            title="Quelques transformations types"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-cardLight">
              <div className="h-52 overflow-hidden">
                <Image
                  src="/assets/promo_09.png"
                  alt="Tablette interactive montrant un plan de site industriel avec zones annotées"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-navy">Inspection chariot élévateur</h3>
                <p className="mt-2 text-[15px] opacity-80">Module interactif + visuels 3D pour comprendre les points de contrôle.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-cardLight">
              <div className="h-52 overflow-hidden">
                <Image
                  src="/assets/promo_03.png"
                  alt="Concepteur devant un module de formation SST sur protection contre les chutes"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-navy">Procédure industrielle</h3>
                <p className="mt-2 text-[15px] opacity-80">Transformation d'une procédure statique en scénario guidé.</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-cardLight">
              <div className="h-52 overflow-hidden">
                <Image
                  src="/assets/promo_05.png"
                  alt="Laptop montrant un parcours d'accueil numérique pour nouveaux employés"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-navy">Formation d'accueil</h3>
                <p className="mt-2 text-[15px] opacity-80">Parcours digital avec vidéos, quiz, engagement et suivi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aperçu visuel — deux images côte à côte */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle
            kicker="Aperçu visuel"
            title="Du document au module"
            lead="Chaque formation est construite à partir de vos contenus réels — procédures, photos terrain, équipements, risques spécifiques."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/assets/promo_03.png"
                alt="Module SST protection contre les chutes de hauteur affiché sur écran"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/15">
              <Image
                src="/assets/promo_07.png"
                alt="Module vidéo interactif sur équipement minier — laptop en contexte terrain"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
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

import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

export const metadata: Metadata = {
  title: "Expertise terrain — industrie, mines, SST",
  description: "Conçus pour l'industrie, les mines et la SST. Formations d'accueil, procédures critiques, modules bilingues FR/EN, contenus zéro papier adaptés au terrain."
};

const whyUs = [
  { icon: "🏗️", title: "Compréhension terrain", desc: "Nous connaissons vos réalités opérationnelles : environnements exigeants, procédures critiques, contraintes de conformité." },
  { icon: "🎨", title: "Personnalisation complète", desc: "Vos équipements, vos photos, vos procédures, votre identité visuelle — intégrés à chaque module." },
  { icon: "🚀", title: "Déploiement flexible", desc: "SCORM, xAPI, PDF interactif, vidéo — nous livrons dans le format adapté à votre infrastructure." },
  { icon: "✨", title: "Qualité visuelle", desc: "Design soigné, animations claires, mises en page professionnelles qui valorisent votre organisation." },
  { icon: "⚡", title: "Rapidité d'exécution", desc: "Des livrables structurés, des délais respectés, une communication claire à chaque étape du projet." },
];

type Props = { params: Promise<{ locale: string }> };

export default async function ExpertisePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="Expertise terrain"
        title="Conçus pour l'industrie, les mines et la SST"
        lead="Nous comprenons les réalités opérationnelles : sécurité, procédures, équipements, conformité et apprentissage terrain."
      />

      {/* Section principale */}
      <section className="section section-light">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionTitle
              align="left"
              title="Des formations qui ressemblent à votre environnement"
              lead="Les travailleurs apprennent mieux quand ils reconnaissent leurs lieux, leurs équipements et leurs procédures. C'est pourquoi nous privilégions une approche personnalisée et concrète."
            />
            <ul className="mt-6 space-y-3 text-[15px]">
              {["Formations d'accueil des nouveaux travailleurs", "Formations SST et procédures critiques", "Modules bilingues FR/EN", "Contenus zéro papier adaptés au terrain"].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/expertise-field-training-realistic.webp"
              alt="Formation terrain réaliste en milieu industriel ou minier"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Secteurs */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker="Secteurs" title="Là où nous intervenons" />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_07.png" alt="Opérateur de chariot élévateur en entrepôt" width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">Industrie</h3>
                <p className="mt-2 text-muted">Procédures de production, maintenance, qualité, opérations critiques.</p>
              </div>
            </div>
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_05.png" alt="Camion minier sur site d'exploitation" width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">Mines</h3>
                <p className="mt-2 text-muted">Sécurité, équipements lourds, environnement souterrain, conformité.</p>
              </div>
            </div>
            <div className="card-dark overflow-hidden p-0">
              <div className="h-48 overflow-hidden">
                <Image src="/assets/collage_04.png" alt="Deux travailleurs en équipement de protection" width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold">SST</h3>
                <p className="mt-2 text-muted">Formations sécurité, accueil des travailleurs, gestion des risques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Pourquoi nous choisir"
            title="Pourquoi les entreprises nous font confiance"
            lead="Cinq raisons pour lesquelles les organisations choisissent Spari Studio pour leurs projets de formation."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="card-light">
                <div className="text-4xl">{w.icon}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-navy">{w.title}</h3>
                <p className="mt-2 text-[15px] text-navy/75">{w.desc}</p>
              </div>
            ))}
            {/* 6e cellule : CTA */}
            <div className="card-light flex flex-col items-start justify-between border-gold/30 bg-gradient-to-br from-white to-[#fffbf0]">
              <div>
                <div className="text-4xl">💬</div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-navy">Discutons de votre projet</h3>
                <p className="mt-2 text-[15px] text-navy/75">30 minutes pour évaluer vos besoins et vous proposer une approche concrète.</p>
              </div>
              <div className="mt-6">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">Planifier une consultation gratuite</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mosaïque terrain */}
      <section className="section section-light" style={{background:"linear-gradient(180deg,#f0f5fb,#fff)"}}>
        <div className="container-x">
          <SectionTitle kicker="Nos environnements" title="Du tunnel au chantier, du bureau à l'usine" lead="Nous créons des formations adaptées aux réalités les plus exigeantes." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { src: "/assets/collage_03.png", alt: "Mineur en tunnel souterrain avec tablette" },
              { src: "/assets/collage_09.png", alt: "Travailleur devant une usine pétrochimique la nuit" },
              { src: "/assets/promo_06.png", alt: "Techniciens en tenue de sécurité sur chantier" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl shadow-cardLight">
                <Image src={img.src} alt={img.alt} width={800} height={600} className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Vos enjeux, notre méthode"
        lead="Parlons de vos procédures et de la meilleure façon de les transformer en formation."
        primaryCta={{ href: CALENDLY_URL, label: "Planifier une consultation gratuite", external: true }}
      />
    </>
  );
}

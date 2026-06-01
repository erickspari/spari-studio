import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

export const metadata: Metadata = {
  title: "Démos — Avant/Après",
  description: "Avant/Après : de vos documents à l'expérience interactive. Inspection chariot élévateur, procédure industrielle, formation d'accueil."
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
        primaryCta={{ href: CALENDLY_URL, label: "Demander une démonstration", external: true }}
      />

      {/* Bloc Avant / Après */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker="Transformation" title="Avant / Après en un coup d'œil" lead="C'est ce que nous faisons concrètement avec vos contenus existants." />
          <div className="grid gap-6 md:grid-cols-2">
            {/* AVANT */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gray-200 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gray-600">
                📄 AVANT
              </div>
              <ul className="space-y-4 text-[15px] text-navy/80">
                {["PDF de 60 pages non interactif", "PowerPoint statique envoyé par courriel", "Procédure imprimée, rarement lue", "Formation en salle difficile à standardiser", "Aucun suivi de complétion possible"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* APRÈS */}
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white to-[#fffbf0] p-8 shadow-md">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gold">
                🎯 APRÈS
              </div>
              <ul className="space-y-4 text-[15px] text-navy/80">
                {["Module interactif accessible sur mobile", "Quiz et évaluations intégrés", "Visualisation animée des procédures", "Suivi de complétion dans votre LMS", "Mise à jour en quelques minutes"].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold/20 text-xs font-black text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples avec images */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker="Exemples" title="Quelques transformations types" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { src: "/assets/promo_09.png", alt: "Tablette interactive avec plan de site", title: "Inspection chariot élévateur", desc: "Module interactif + visualisation pour comprendre les points de contrôle." },
              { src: "/assets/promo_03.png", alt: "Écran formation SST chutes de hauteur", title: "Procédure industrielle", desc: "Transformation d'une procédure statique en scénario guidé avec quiz." },
              { src: "/assets/promo_05.png", alt: "Laptop parcours d'accueil numérique", title: "Formation d'accueil", desc: "Parcours digital avec médias, quiz, engagement et suivi LMS." },
            ].map((c) => (
              <div key={c.title} className="overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                <div className="h-52 overflow-hidden">
                  <Image src={c.src} alt={c.alt} width={800} height={500} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-extrabold">{c.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu visuel double */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker="Aperçu visuel" title="Du document au module interactif" lead="Chaque formation est construite à partir de vos contenus réels." />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
              <Image src="/assets/demos-realistic-elearning-module.webp" alt="Module e-learning réaliste affiché sur écran" width={1200} height={800} className="h-auto w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
                <Image src="/assets/equipment-interactive-visualization.webp" alt="Visualisation interactive d'équipement industriel" width={1200} height={800} className="h-auto w-full object-cover" />
              </div>
              <p className="text-center text-sm font-semibold text-navy/60">Visualisation interactive d&apos;équipement</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Voir une démo personnalisée ?"
        lead="Envoyez-nous un extrait de vos contenus — nous construisons une mini-démo dédiée."
        primaryCta={{ href: CALENDLY_URL, label: "Demander une démonstration", external: true }}
      />
    </>
  );
}

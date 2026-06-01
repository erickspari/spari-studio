import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";
import { CALENDLY_URL } from "@/config/links";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        kicker="E-learning • Localisation • Animations 2D & 3D"
        title="Vos formations en PDF ? Transformez-les en expériences interactives terrain."
        lead="Nous convertissons vos procédures, guides, PowerPoint et formations existantes en modules e-learning modernes, bilingues et prêts à déployer."
        primaryCta={{ href: CALENDLY_URL, label: "Planifier un RDV gratuit", external: true }}
        secondaryCta={{ href: "/demos", label: "Voir une démonstration" }}
        heroImage={{ src: "/assets/home-hero-documents-to-elearning.webp", alt: "Transformation de documents en formations e-learning interactives" }}
      />

      {/* Bande LMS */}
      <section className="compat-strip py-5">
        <div className="container-x flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-extrabold uppercase tracking-[.13em] text-navy/70">Compatible avec vos plateformes LMS existantes</p>
          <div className="flex flex-wrap items-center gap-7">
            {['Moodle','Docebo','SAP Litmos','Cornerstone','TalentLMS'].map((name) => <span key={name} className="compat-name">{name}</span>)}
          </div>
          <p className="text-sm font-bold text-navy/65">ou via partenaires technologiques</p>
        </div>
      </section>

      {/* Section comparaison */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Notre promesse"
            title="Des formations qui reflètent votre réalité"
            lead="Fini les contenus génériques. Nous adaptons vos formations à vos équipements, vos procédures, vos environnements et vos équipes — avec des livrables qui vous appartiennent."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {/* Carte gauche — générique */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-red-500">
                ❌ Contenus génériques
              </div>
              <h3 className="font-display text-xl font-extrabold text-navy">Quand la formation ne ressemble pas au terrain</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                {[
                  "Images et exemples non représentatifs",
                  "Personnalisation limitée ou absente",
                  "Faible appropriation par les équipes",
                  "Contenu que vous ne pouvez pas modifier",
                  "Réutilisation impossible dans votre contexte"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-100 text-xs font-black text-red-500">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Carte droite — Spari */}
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-white to-[#fffbf0] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/15 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-gold">
                ✅ Contenu Spari Studio
              </div>
              <h3 className="font-display text-xl font-extrabold text-navy">Des contenus construits autour de votre réalité</h3>
              <ul className="mt-5 space-y-3 text-[15px] text-navy/80">
                {[
                  "Vos équipements, vos photos, vos procédures",
                  "Adaptation pédagogique et visuelle complète",
                  "Meilleure reconnaissance du terrain",
                  "Livrables qui vous appartiennent entièrement",
                  "Réutilisables et maintenables par vos équipes"
                ].map((item) => (
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

      {/* Section services */}
      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker="Nos services" title="Des solutions complètes pour vos formations" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🌐", title: "Localisation & traduction fiable", desc: "Adaptation FR/EN avec terminologie industrielle, SST et minière, sans traduction littérale déconnectée du terrain." },
              { icon: "🎯", title: "Conception e-learning", desc: "Transformation de PDF, Word, PowerPoint et procédures en modules interactifs, clairs et engageants." },
              { icon: "🛡️", title: "Formations d'accueil & SST", desc: "Parcours d'intégration, sécurité, procédures critiques et capsules adaptées aux nouveaux travailleurs." },
              { icon: "✨", title: "Visualisations & animations interactives", desc: "Expliquez vos équipements, inspections et gestes de sécurité avec des animations claires et adaptées à vos opérations." },
              { icon: "📄", title: "Adaptation de contenus existants", desc: "Reconstruction de formations génériques pour refléter vos propres réalités opérationnelles." },
              { icon: "🚀", title: "Déploiement flexible", desc: "Livraison SCORM/xAPI compatible avec vos plateformes LMS existantes ou via partenaires technologiques." },
            ].map((s) => (
              <div key={s.title} className="card-dark">
                <div className="text-3xl">{s.icon}</div>
                <h3 className="mt-4 font-display text-xl font-extrabold">{s.title}</h3>
                <p className="mt-3 text-[15px] text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section processus */}
      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker="Notre processus" title="De vos documents à une formation performante" lead="Une méthode claire pour transformer rapidement vos contenus en expériences prêtes à déployer." />
          <div className="grid gap-6 md:grid-cols-4">
            <ProcessStep icon="document" num={1} title="Documents existants" description="PDF, Word, PPT, guides, procédures et supports de formation." />
            <ProcessStep icon="shield" num={2} title="Adaptation terrain" description="Vos équipements, vos visuels, vos risques, vos règles internes." />
            <ProcessStep icon="cube" num={3} title="Transformation interactive" description="Design pédagogique, médias, quiz, animations et interactivité." />
            <ProcessStep icon="cap" num={4} title="Formation performante" description="Modules testés, livrés et prêts pour votre LMS." />
          </div>
        </div>
      </section>

      {/* Section identité terrain */}
      <section className="section section-light" style={{background:"linear-gradient(180deg,#f0f5fb,#fff)"}}>
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-cardLight">
            <Image
              src="/assets/ownership-training-realistic.webp"
              alt="Travailleurs reconnaissant leurs équipements dans une formation e-learning"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <div className="kicker">Identité terrain</div>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-tight text-navy">Des formations qui vous appartiennent vraiment</h2>
            <p className="mt-4 text-lg text-navy/85">Vos équipes reconnaissent leurs lieux, leurs machines, leurs risques et leurs procédures. C&apos;est ce qui rend la formation plus crédible, plus utile et plus facile à retenir.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="badge-light">Zéro papier</span>
              <span className="badge-light">Accès mobile</span>
              <span className="badge-light">Mises à jour rapides</span>
              <span className="badge-light">Qualité professionnelle</span>
            </div>
            <div className="mt-8">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn">Planifier un RDV gratuit</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        kicker="Prêt à commencer ?"
        title="Apportez-nous vos documents — nous vous montrons ce qu'ils peuvent devenir."
        lead="Une procédure, un PowerPoint ou une formation existante suffit pour imaginer une première démo."
        primaryCta={{ href: CALENDLY_URL, label: "Planifier un RDV gratuit", external: true }}
        secondaryCta={{ href: "/demos", label: "Voir les démos" }}
      />
    </>
  );
}

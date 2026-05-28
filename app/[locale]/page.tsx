import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";



type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        kicker="E-learning • Localisation • Animations 2D & 3D"
        title="Transformez vos documents en formations interactives qui vous ressemblent"
        lead="De vos documents terrain à des formations digitales performantes, personnalisées, accessibles et sans papier."
        primaryCta={{ href: "/contact", label: "Demander une démo" }}
        secondaryCta={{ href: "/services", label: "Voir nos services" }}
      />

      <section className="compat-strip py-5">
        <div className="container-x flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-extrabold uppercase tracking-[.13em] text-navy/70">Compatible avec vos plateformes LMS existantes</p>
          <div className="flex flex-wrap items-center gap-7">
            {['Moodle','Docebo','SAP Litmos','Cornerstone','TalentLMS'].map((name) => <span key={name} className="compat-name">{name}</span>)}
          </div>
          <p className="text-sm font-bold text-navy/65">ou via partenaires technologiques</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle
            kicker="Notre promesse"
            title="Des formations qui reflètent votre réalité"
            lead="Fini les contenus génériques. Nous adaptons vos formations à vos équipements, vos procédures, vos environnements et vos équipes — avec des livrables qui vous appartiennent."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="comparison-card">
              <div className="kicker text-orange">Contenus génériques</div>
              <h3 className="mt-2 font-display text-2xl font-extrabold">Quand la formation ne ressemble pas au terrain</h3>
              <ul className="mt-5 space-y-3 text-[15px] opacity-85">
                <li>Images et exemples non représentatifs</li>
                <li>Personnalisation limitée</li>
                <li>Faible appropriation par les équipes</li>
                <li>Contrôle limité sur la propriété du contenu</li>
              </ul>
            </div>
            <div className="comparison-card border-gold/30 bg-gradient-to-br from-white to-[#fff7e8]">
              <div className="kicker">Spari Studio</div>
              <h3 className="mt-2 font-display text-2xl font-extrabold">Des contenus construits autour de votre réalité</h3>
              <ul className="mt-5 space-y-3 text-[15px] opacity-90">
                <li>Vos équipements, vos photos, vos procédures</li>
                <li>Adaptation pédagogique et visuelle</li>
                <li>Meilleure reconnaissance du terrain par les travailleurs</li>
                <li>Livrables personnalisés et réutilisables</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-x">
          <SectionTitle kicker="Nos services" title="Des solutions complètes pour vos formations" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard icon="globe" variant="dark" title="Localisation & traduction fiable" description="Adaptation FR/EN avec terminologie industrielle, SST et minière, sans traduction littérale déconnectée du terrain." />
            <ServiceCard icon="monitor" variant="dark" title="Conception e-learning" description="Transformation de PDF, Word, PowerPoint et procédures en modules interactifs, clairs et engageants." />
            <ServiceCard icon="shield" variant="dark" title="Formations d’accueil & SST" description="Parcours d’intégration, sécurité, procédures critiques et capsules adaptées aux nouveaux travailleurs." />
            <ServiceCard icon="cube" variant="dark" title="Animations 2D & 3D" description="Vyond et Blender pour expliquer les équipements, les inspections, les risques et les gestes de sécurité." />
            <ServiceCard icon="document" variant="dark" title="Adaptation de contenus existants" description="Reconstruction de formations génériques pour refléter vos propres réalités opérationnelles." />
            <ServiceCard icon="lms" variant="dark" title="Déploiement flexible" description="Livraison SCORM/xAPI compatible avec vos plateformes LMS existantes ou via partenaires technologiques." />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-x">
          <SectionTitle kicker="Notre processus" title="De vos documents à une formation performante" lead="Une méthode claire pour transformer rapidement vos contenus en expériences prêtes à déployer." />
          <div className="grid gap-6 md:grid-cols-4">
            <ProcessStep icon="document" num={1} title="Documents existants" description="PDF, Word, PPT, guides, procédures et supports de formation." />
            <ProcessStep icon="shield" num={2} title="Adaptation terrain" description="Vos équipements, vos visuels, vos risques, vos règles internes." />
            <ProcessStep icon="cube" num={3} title="Transformation interactive" description="Design pédagogique, médias, quiz, animations 2D/3D." />
            <ProcessStep icon="cap" num={4} title="Formation performante" description="Modules testés, livrés et prêts pour votre LMS." />
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <div className="kicker">Animations 2D & 3D</div>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-tight">Donnez vie à vos équipements et procédures</h2>
            <p className="mt-4 max-w-xl text-lg text-muted">Un chariot élévateur, une inspection, une zone dangereuse ou une procédure d’usine peuvent devenir des scènes animées, guidées et interactives.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ['Chariots élévateurs', 'Inspection classe 5 / 7'],
                ['Équipements miniers', 'Visualisation 3D'],
                ['Procédures SST', 'Scénarios animés'],
                ['Opérations terrain', 'Explications visuelles']
              ].map(([a,b]) => <div key={a} className="rounded-2xl border border-white/12 bg-white/5 p-4"><strong>{a}</strong><p className="text-sm text-muted">{b}</p></div>)}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['helmet','Chariot élévateur'],['cube','Simulation 3D'],['play','Capsule Vyond'],['chart','Procédé industriel']
            ].map(([icon,title]) => <div key={title} className="glass-panel rounded-3xl p-6"><Icon name={icon as any} className="h-12 w-12 text-gold" /><h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3><div className="mt-5 h-28 rounded-2xl bg-gradient-to-br from-blue/30 via-navy to-gold/20" /></div>)}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="visual-frame border-navy/10">
            <Image src="/assets/booth-mockup.png" alt="Mockup kiosque Spari Studio" width={1400} height={900} className="h-auto w-full object-cover" />
          </div>
          <div>
            <div className="kicker">Identité terrain</div>
            <h2 className="mt-2 font-display text-[clamp(30px,4vw,48px)] font-extrabold leading-tight">Des formations qui vous appartiennent vraiment</h2>
            <p className="mt-4 text-lg opacity-90">Vos équipes ne se sentent pas perdues : elles reconnaissent leurs lieux, leurs machines, leurs risques et leurs procédures. C’est ce qui rend la formation plus crédible, plus utile et plus facile à retenir.</p>
            <div className="mt-6 flex flex-wrap gap-3"><span className="badge-light">Zéro papier</span><span className="badge-light">Accès mobile</span><span className="badge-light">Mises à jour rapides</span><span className="badge-light">Qualité professionnelle</span></div>
          </div>
        </div>
      </section>

      <CTASection kicker="Prêt à commencer ?" title="Apportez-nous vos documents — nous vous montrons ce qu’ils peuvent devenir." lead="Une procédure, un PowerPoint ou une formation existante suffit pour imaginer une première démo." primaryCta={{ href: "/contact", label: "Demander une démo" }} secondaryCta={{ href: "/demos", label: "Voir les démos" }} />
    </>
  );
}

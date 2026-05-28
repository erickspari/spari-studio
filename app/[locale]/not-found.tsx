import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="section section-navy min-h-[60vh]">
      <div className="container-x text-center">
        <div className="kicker">Erreur 404</div>
        <h1 className="mt-3 font-display text-[clamp(36px,6vw,64px)]">Page introuvable</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
          Ce contenu n’existe pas ou a été déplacé.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn">Retour à l’accueil</Link>
          <Link href="/contact" className="btn-secondary">Nous écrire</Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@/i18n/navigation";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03070d] py-14">
      <div className="container-x grid gap-8 md:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-[15px] text-muted">
            Transformation de contenus de formation en expériences e-learning interactives,
            personnalisées et adaptées aux réalités terrain.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="badge">FR/EN</span><span className="badge">SCORM/xAPI</span><span className="badge">2D/3D</span>
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">Navigation</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-gold">Accueil</Link></li>
            <li><Link href="/services" className="hover:text-gold">Services</Link></li>
            <li><Link href="/expertise" className="hover:text-gold">Expertise</Link></li>
            <li><Link href="/demos" className="hover:text-gold">Démos</Link></li>
            <li><Link href="/a-propos" className="hover:text-gold">À propos</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">Services</h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>Localisation FR/EN</li><li>Conception e-learning</li><li>Animations 2D &amp; 3D</li><li>Formations d'accueil &amp; SST</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-base font-extrabold">Contact</h3>
          <p className="text-sm text-muted">Montréal / Québec, Canada</p>
          <a href="mailto:info@sparistudio.com" className="text-sm text-muted hover:text-gold">info@sparistudio.com</a>
          <div className="mt-4"><Link href="/contact" className="btn">Planifier un appel</Link></div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-white/10 pt-6 text-[13px] text-[#8795a5]">© {new Date().getFullYear()} Spari Studio. Tous droits réservés.</div>
    </footer>
  );
}

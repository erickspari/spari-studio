import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de vos documents, de vos objectifs et de la meilleure façon de les convertir en formation interactive. Montréal / Québec, Canada."
};


type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero
        variant="plain"
        kicker="Contact"
        title="Prêt à transformer vos formations ?"
        lead="Parlons de vos documents, de vos objectifs et de la meilleure façon de les convertir en formation interactive."
      />

      <section className="section section-light">
        <div className="container-x grid items-start gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold">Planifier un appel</h2>
            <p className="mt-3 text-[15px]">
              Envoyez-nous vos besoins : type de documents, langue, plateforme,
              délais et objectifs. Nous revenons vers vous sous 24 à 48 heures.
            </p>

            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Transformation PDF / Word / PPT
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Localisation FR / EN
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Animations 2D / 3D
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gold" />
                Livraison SCORM / xAPI compatible avec vos plateformes LMS existantes
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-navy/10 bg-navy/5 p-5">
              <p className="text-sm font-extrabold uppercase tracking-wider text-navy/70">
                Coordonnées
              </p>
              <p className="mt-2 text-[15px]">Montréal / Québec, Canada</p>
              <a
                href="mailto:info@sparistudio.com"
                className="mt-1 inline-block text-[15px] font-extrabold text-blue hover:underline"
              >
                info@sparistudio.com
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

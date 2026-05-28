# Spari Studio

Site marketing — transformation de documents en modules e-learning interactifs.

## Stack
Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS

## Démarrer

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000.

> ⚠️ Sous zsh (le shell par défaut sur macOS), `#` n'est **pas** un commentaire en mode interactif. Si tu copies-colles une ligne avec `# commentaire`, zsh l'envoie comme argument au programme. Tape juste la commande, sans rien après.

## Formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io). Crée un form, copie son ID et place-le dans `.env.local` :

```
NEXT_PUBLIC_FORMSPREE_ID=xxxxxxx
```

Sans configuration, le formulaire affiche un message d'erreur et le lien mailto direct reste fonctionnel.

## Structure

- `app/` — pages (App Router) + layout + global CSS
- `components/` — Header, Footer, Hero, ServiceCard, ProcessStep, CTASection, etc.
- `public/assets/` — visuels (mockups, logo)

## Build de production

```bash
npm run build
npm start
```

Le serveur production écoute sur http://localhost:3000.

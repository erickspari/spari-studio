# Claude Code — Correctifs V3 Spari Studio (UI, logo, images, conversion)

Tu travailles sur le site Next.js / Tailwind de Spari Studio.
Objectif : appliquer les remarques V3 pour rendre le site plus premium, plus visuel et plus orienté conversion.

## 0. Important
- Ne pas mentionner directement Global Formation, PAÉLO, Cognibox, Vyond ou Blender sur les sections publiques du site.
- Si un outil est nécessaire dans une page interne ou technique, utiliser une formulation neutre : “animations 2D et 3D”, “visualisations interactives”, “outils de production avancés”.
- Uniformiser tous les CTA vers la prise de rendez-vous : “Planifier un RDV gratuit”, “Consultation gratuite”, “Réserver une démonstration”.
- Prévoir Calendly pour les boutons de contact/RDV.

## 1. Remplacer le logo / marque
Copier les fichiers fournis dans le projet :
- public/brand/spari-mark.svg
- public/brand/spari-mark.png
- public/brand/spari-mark-512.png
- public/brand/spari-logo-horizontal.svg
- public/brand/spari-logo-horizontal-dark.png
- public/brand/spari-logo-horizontal-light.png
- public/brand/spari-mark-clean-vector.svg (optionnel si tu veux une version vectorielle simplifiée)

Remplacer l’ancien `/brand/spari-mark.svg` par le nouveau fichier fourni.
Dans le header, utiliser le logo horizontal lorsque l’espace le permet :
- desktop : `/brand/spari-logo-horizontal.svg` ou `/brand/spari-logo-horizontal-dark.png`
- mobile : `/brand/spari-mark.svg`

Conserver une hauteur adaptée :
- Desktop logo horizontal : height 48–60px, width auto
- Mobile mark : 42–48px

## 2. Page accueil `/fr`

### Hero
Titre recommandé :
“Vos formations sont encore en PDF ? Transformez-les en expériences interactives adaptées à votre réalité terrain.”

Sous-titre :
“Nous convertissons vos procédures, guides, PowerPoint et formations existantes en modules e-learning modernes, bilingues et prêts à déployer. Des formations personnalisées qui reflètent vos équipements, vos procédures et vos environnements de travail.”

CTA :
- Principal : “Planifier un RDV gratuit”
- Secondaire : “Voir une démonstration”

Image hero : utiliser `/assets/home-hero-documents-to-elearning.png` ou `.webp`.

### Section comparaison contenus génériques vs contenus personnalisés
Ajouter des styles de puces modernes, par exemple :
- puces avec icône check / cross
- cartes comparatives avec fond blanc et accent doré
- micro-animations hover

Remplacer les listes plates par des blocs :
Contenus génériques :
- Images et exemples non représentatifs
- Personnalisation limitée
- Faible appropriation par les équipes
- Contenu loué ou générique

Contenus construits autour de votre réalité :
- Vos équipements, vos photos, vos procédures
- Adaptation pédagogique et visuelle
- Meilleure reconnaissance du terrain par les travailleurs
- Livrables personnalisés et réutilisables

### Section “Des formations qui vous appartiennent vraiment”
Remplacer `booth-mockup.png` par :
`/assets/ownership-training-realistic.png`

Texte à renforcer :
“Vos équipes ne se sentent pas perdues : elles reconnaissent leurs lieux, leurs machines, leurs risques et leurs procédures. C’est ce qui rend la formation plus crédible, plus utile et plus facile à retenir.”

## 3. Section “Animations 2D & 3D”
Ne pas écrire “Vyond” ou “Blender” sur les tuiles.
Renommer la carte en :
“Visualisations & animations interactives”

Texte :
“Expliquez vos équipements, inspections, risques et gestes de sécurité avec des animations claires, réalistes et adaptées à vos opérations.”

Image conseillée : `/assets/services-visual-animation.png`

## 4. Page services `/fr/services`
Ajouter une image dans chaque tuile service.
Utiliser les assets :
- Localisation & traduction : `/assets/services-localization-translation.png`
- Conception e-learning : `/assets/services-elearning-design.png`
- Adaptation de formations existantes : `/assets/services-custom-adaptation.png`
- Formations d’accueil & SST : `/assets/services-sst-onboarding.png`
- Visualisations & animations interactives : `/assets/services-visual-animation.png`
- Déploiement LMS : `/assets/services-lms-deployment.png`

Chaque tuile doit avoir :
- image en haut avec border-radius 16–20px
- titre
- court texte
- “Résultat client” avec 2–3 bénéfices

CTA en bas de page :
“Planifier un RDV gratuit” ou “Consultation gratuite”.

## 5. Page expertise `/fr/expertise`
Remplacer `family-booth.png` par :
`/assets/expertise-field-training-realistic.png`

Objectif visuel : montrer le terrain, les travailleurs, les documents/procédures et la réalité opérationnelle.

Ajouter une section :
“Pourquoi les entreprises nous choisissent”
- Compréhension terrain
- Personnalisation complète
- Déploiement flexible
- Qualité visuelle
- Rapidité d’exécution

CTA : “Planifier une consultation gratuite”.

## 6. Page démos `/fr/demos`
Remplacer `website-mockup.png` par une image réaliste :
`/assets/demos-realistic-elearning-module.png`

Créer un bloc Avant / Après :
Avant : PDF, PowerPoint, procédure, document statique.
Après : module interactif, quiz, visualisation, suivi LMS.

Ajouter également :
`/assets/equipment-interactive-visualization.png`
pour la démonstration d’équipement / animation / inspection.

CTA : “Demander une démonstration”.

## 7. Contact / CTA global
Tous les boutons contact doivent aller vers une URL Calendly à configurer.
Créer une constante :
`const calendlyUrl = "https://calendly.com/TON-COMPTE/consultation";`

Remplacer les boutons génériques :
- “Contactez-nous”
- “Demander une démo”
par :
- “Planifier un RDV gratuit”
- “Consultation gratuite”
- “Réserver une démonstration”

## 8. UI visuelle
- Palette : #071B2F, #0A2A4A, #1472FF, #F5B83D, #FF9F1C, #F7F9FC, #D7E0EA, #050A10.
- Typographie : titres Exo 2 / Orbitron-like, texte Inter / Montserrat.
- Augmenter les espaces entre sections.
- Ajouter plus de contraste sur les CTA dorés.
- Les cartes doivent avoir : border subtil, gradient sombre, shadow douce, hover transform.
- Les images doivent être suffisamment grandes, réalistes, et cohérentes avec le texte.

## 9. Git
Après modifications :
1. npm run lint
2. npm run build
3. git status
4. git add .
5. git commit -m "V3 visual polish: logo, images, CTA and conversion improvements"
6. git push

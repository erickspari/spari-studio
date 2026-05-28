# Spari Studio — version visuelle peaufinée

Cette version améliore l’identité visuelle du site pour se rapprocher de la maquette premium validée : bleu nuit, or, style industriel/technologique, logo vectoriel, favicon et storytelling “documents existants → contenus interactifs → formation performante”.

## Lancer en local
```bash
npm install
npm run dev
```
Puis ouvrir : http://localhost:3000

## Build
```bash
npm run build
```

## Notes de design
- Logo vectoriel ajouté : `public/brand/spari-mark.svg`
- Favicon ajouté : `app/icon.svg`
- Palette principale :
  - #071B2F bleu nuit
  - #0A2A4A bleu profond
  - #1472FF bleu électrique
  - #F5B83D or premium
  - #FF9F1C orange-or
  - #F7F9FC blanc cassé
  - #050A10 noir industriel
- Fonts système utilisées pour éviter les erreurs de build hors ligne avec Google Fonts. Recommandation : Exo 2 / Inter si le projet peut charger Google Fonts en production.

## Positionnement conservé
- Transformation de documents existants en modules interactifs
- Formations qui reflètent la réalité terrain du client
- Localisation FR/EN
- Conception e-learning
- Animations 2D & 3D avec Vyond / Blender
- Formations d’accueil et SST
- Livraison SCORM/xAPI compatible LMS

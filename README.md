# ProcessoIA · refonte du site (novembre 2026)

Site statique : le dossier se sert tel quel (Netlify, Vercel, GitHub Pages...). Une seule étape avant chaque mise en ligne, si un texte a changé : régénérer les pages de langue (voir « Langues et référencement »).
Remplace la version Claude Design de `../2026-07-25_processoia-site/` (gardée pour mémoire).

Palette : jet black `#050505`, royal amethyst `#3b0a6b`, electric cyan `#00e5ff`.
Polices : Sora (titres), Inter (texte), JetBrains Mono (étiquettes), via Google Fonts.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page anglaise, et modèle des autres langues |
| `fr/index.html`, `pt/index.html` | Pages française et portugaise (Portugal), **générées** : ne pas les modifier à la main |
| `assets/js/i18n.js` | **Tous les textes** en EN / FR / PT, titres d'onglet et descriptions Google compris : c'est ici qu'on modifie le contenu |
| `sitemap.xml`, `robots.txt` | Plan du site et consignes pour les moteurs de recherche, générés |
| `assets/img/og-*.png` | Images de partage (LinkedIn, WhatsApp...), une par langue |
| `assets/js/main.js` | Orchestration : scroll fluide (Lenis), timeline du hero, animations des sections (GSAP), langues |
| `assets/js/hero-scene.js` | Scène 3D du hero (Three.js) : 14 000 particules, 6 500 sur mobile |
| `legal/`, `privacy/`, `fr/mentions-legales/`, `fr/confidentialite/`, `pt/aviso-legal/`, `pt/privacidade/` | Pages légales, **générées** depuis la clé `legal` de `i18n.js` |
| `assets/js/glsl.js` | Bruit simplex et sprite de particule partagés par les shaders |
| `assets/css/style.css` | Styles, couleurs en variables en tête de fichier |

## Contenu orienté conversion (refonte du 13/11/2026)

Ordre de la page : hero, Qui je suis (photo, parcours, LinkedIn, chiffres), 3 offres avec prix de départ, réalisations clients (CRM de Frédéric Parisse, relance prospects anonymisée), ce que Louison automatise pour lui (temps gagnés estimés), comment ça marche, pourquoi l'IA, tarifs, vos données, processus, FAQ, réservation Cal.com intégrée.

- **Prix et temps gagnés** : estimations dans `i18n.js` (clés `offers`, `pricing`, `faq`, `about.stats`, `lab`), à garder cohérents entre eux. Les chiffres « 5 » et « ≈30 h » sont aussi dans `index.html` (attributs `data-to`).
- **Témoignage** : renseigner `work.quote.text` dans les trois langues pour afficher le bloc citation (caché tant qu'il est vide). Ne jamais inventer de citation.
- **Cal.com** (cal.com/louison-paris-lpjayv/30min) : chaque bouton porte sa source (`utm_content`), la langue est ajoutée par `main.js` (`utm_campaign`). Le module intégré se charge à l'approche de la dernière section.
- **Mesure d'audience** : Cloudflare Web Analytics, sans cookie, jeton dans `scripts/processoia-site-langues.mjs` (`CLOUDFLARE_TOKEN`). Les statistiques ne remontent que depuis processoia.com, pas en local.
- **Images de partage** (`assets/img/og-*.png`) : refaites le 13/11 sans la mention des particuliers.
- **Captures du CRM** (`assets/img/realisations/`) : rangée courbée en 3D qui défile de droite à gauche (`initCurve()` dans `main.js`, inspirée du composant React « Tilted Grid Hero », réécrite sans React). Réglages dans les attributs `data-*` de `.curve` dans `index.html` : courbure (`data-bend`, `data-bend-mobile`), taille des captures (`data-tile`, `data-max`, `data-max-mobile`), écart (`data-gap`), secondes par capture (`data-speed`), fondu des bords (`data-fade`). Survol : arrêt et capture calée au centre ; glisser pour faire défiler ; clic ou bouton « Voir en grand » pour agrandir. Mouvement réduit : rangée immobile, glisser possible. Sans JavaScript, les trois captures s'affichent en grille. WebP recadrés au même format (badge Netlify retiré), une version 820 px et une pleine taille (`data-full`). Légendes dans `work.cases.0.shots`, mention « données fictives » dans `work.cases.0.note`. Originaux dans `context/import/`.

## Le hero piloté par le scroll

La première page est épinglée pendant 3 écrans de scroll (2,4 sur mobile). Le scroll fait avancer une histoire en 4 chapitres, et la scène 3D suit :

1. **Chaos** : un nuage de particules et des étiquettes de tâches qui flottent.
2. **Compréhension** : les étiquettes sont aspirées, les particules forment un noyau (l'IA).
3. **Automatisation** : des paquets de données circulent en orbite autour du noyau.
4. **Résultat** : tout se range en une grille calme, avec le bouton de prise de rendez-vous.

Les temps de la timeline sont dans `initHero()` de `main.js`.

## Langues et référencement

Chaque langue a sa propre adresse pour être trouvée par Google : `/` (anglais), `/fr/`, `/pt/`. Le menu des langues fait passer d'une page à l'autre ; à la première visite sur `/`, un navigateur en français ou en portugais est envoyé vers sa langue.

Après toute modification de `assets/js/i18n.js` ou de `index.html`, depuis la racine du workspace :

```
node scripts/processoia-site-langues.mjs livrables/sites-web/2026-11-06_processoia-refonte
```

Le script réécrit les trois pages avec, pour chacune : titre et description, adresse officielle (canonical), liens entre langues (hreflang), balises de partage (Open Graph), données structurées (service, site, FAQ), puis `sitemap.xml` et `robots.txt`. Il s'arrête avec une erreur si un texte manque.

## Tester en local

Les modules JS exigent un serveur (ouvrir le fichier directement ne marche pas) :

```
cd livrables/sites-web/2026-11-06_processoia-refonte
python -m http.server 8765
```

Puis ouvrir http://127.0.0.1:8765

## Mettre en ligne

- **Netlify** : glisser-déposer ce dossier sur app.netlify.com/drop, ou remplacer le contenu du dépôt `lsnparis74-bit/processoia-site` par ce dossier et connecter le dépôt (publish directory : la racine, pas de commande de build).
- Puis brancher le domaine processoia.com dans les réglages du site Netlify.

## À savoir

- Lien Cal.com (`cal.com/louison-paris-lpjayv/30min`) présent sur tous les boutons de `index.html` et dans `data-cal-link` : le remplacer partout si besoin.
- Accessibilité : `prefers-reduced-motion` respecté (scroll natif, pas de dérive automatique, états finaux affichés), navigation clavier, contrastes AA.
- Bibliothèques chargées par CDN, versions figées : GSAP 3.13.0 (ScrollTrigger, SplitText), Lenis 1.1.20, Three.js 0.170.0, Lucide 0.469.0.

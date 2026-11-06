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
| `assets/js/agent-orb.js` | Orbe 3D de la section Agents, chargée seulement à l'approche |
| `assets/js/glsl.js` | Bruit simplex et sprite de particule partagés par les shaders |
| `assets/css/style.css` | Styles, couleurs en variables en tête de fichier |

## Le hero piloté par le scroll

La première page est épinglée pendant ~4,4 écrans de scroll (3,4 sur mobile). Le scroll fait avancer une histoire en 4 chapitres, et la scène 3D suit :

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

- Lien Calendly (`calendly.com/lsnparis74/30min`) présent 6 fois dans `index.html` : le remplacer partout si besoin.
- « Privacy » et « Terms » ne sont pas encore des liens : il n'existe pas de pages pour l'instant.
- Accessibilité : `prefers-reduced-motion` respecté (scroll natif, pas de dérive automatique, états finaux affichés), navigation clavier, contrastes AA.
- Bibliothèques chargées par CDN, versions figées : GSAP 3.13.0 (ScrollTrigger, SplitText), Lenis 1.1.20, Three.js 0.170.0, Lucide 0.469.0.

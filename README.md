# ProcessoIA — site vitrine

Site vitrine pour l'activité freelance d'automatisation IA (processoia.com).

## Contenu

- `ProcessoIA.dc.html` : la page (format Claude Design, runtime autonome)
- `support.js`, `image-slot.js`, `_ds/` : runtime et design system associés
- `translations.js` : contenu en anglais, français et portugais (bascule dans le site)
- `index.html`, `_redirects` : redirection vers `ProcessoIA.dc.html` pour Netlify

## Déploiement (Netlify)

1. New site from Git → connecter ce repo GitHub
2. Build command : (aucun, site statique)
3. Publish directory : `/` (racine du repo)
4. Domaine personnalisé : processoia.com

## Notes

- Le lien de prise de rendez-vous pointe vers `https://calendly.com/lsnparis74/30min` (dans `ProcessoIA.dc.html`) — vérifier que ce créneau Calendly est actif.
- Format `.dc.html` : nécessite d'être servi en http(s), ne s'ouvre pas correctement en `file://` local.

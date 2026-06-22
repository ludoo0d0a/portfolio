# Portfolio — Ludovic

Site portfolio Astro (projets personnels + CV), prêt pour Netlify.

## Projets

Scora, Gaton, Vincent, Julius, Telma, MyTime, Resume

## Développement

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Personnalisation

| Fichier | Contenu |
|---------|---------|
| `src/data/cv.ts` | Nom, contact, `cvUrl` (`ludovicvalente.geoking.fr`), PDF |
| `src/content/projects/*.md` | Fiches projet (texte, tags, liens) |
| `astro.config.mjs` | URL du site (`https://portfolio.geoking.fr`) pour le sitemap |

## Déploiement Netlify

1. Pousser ce repo sur GitHub/GitLab
2. Netlify → **Add new site** → Import from Git
3. Build command : `npm run build`
4. Publish directory : `dist`

La config est déjà dans `netlify.toml`.

## Structure

```
src/
├── components/     # ProjectCard, ProjectGrid, CvSection, Timeline
├── content/projects/  # Markdown par projet
├── data/cv.ts      # Données CV
├── layouts/        # Base, ProjectLayout
└── pages/          # /, /cv, /projects/[slug]
```

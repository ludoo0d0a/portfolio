# Portfolio — Ludovic

Site portfolio Astro (projets personnels + CV), déployé sur Cloudflare Pages.

## Projets

Scora, Gaston, Vincent, Julius, Arthur, Telma, MyTime, Resume, Logbook Creator

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
| `astro.config.mjs` | URL du site (`https://www.geoking.fr`) pour le sitemap |

## Déploiement

Push sur `main` → GitHub Actions (`.github/workflows/deploy.yml`) build Astro et publie sur **Cloudflare Pages** (`portfolio` → https://www.geoking.fr / https://geoking.fr).

L’ancien site Geocaching est archivé sur https://geocaching.geoking.fr. `portfolio.geoking.fr` reste un alias du même projet Pages.

Secrets requis : `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

Déclenchement manuel : Actions → Deploy → Run workflow.

`netlify.toml` est conservé en secours local uniquement.

## Structure

```
src/
├── components/     # ProjectCard, ProjectGrid, CvSection, Timeline
├── content/projects/  # Markdown par projet
├── data/cv.ts      # Données CV
├── layouts/        # Base, ProjectLayout
└── pages/          # /, /cv, /projects/[slug]
```

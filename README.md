# Héctor Cózar - Personal Professional Website

Single-page React app built with Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize content

Most text, links, and image placeholders live in:

- `src/app/content/siteContent.js`

Update these placeholders first:

- `links.linkedinUrl`
- `links.cvUrl`
- `links.email`
- `images.heroPortrait`
- `images.story.*`
- `images.caseStudies.*`

If an image path is empty, the UI shows a styled placeholder instead of a broken layout.

## Project structure

- `src/app/App.jsx`: page composition and metadata sync
- `src/app/content/siteContent.js`: centralized editable content
- `src/components/*`: reusable UI building blocks
- `public/favicon.svg`: fallback favicon
- `public/og-cover.svg`: default social preview image
- `public/404.html`: simple static safeguard for incorrect routes

## Deployment notes

This is a single-page site intended for static hosting. Deploy the built `dist/` output to Vercel, Netlify, GitHub Pages, or any static host.

If your host supports custom 404 handling, keep `public/404.html` so incorrect routes still resolve to a helpful fallback page.

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To publish on GitHub Pages:

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set `Source` to `GitHub Actions`.
4. Push to `main` and the workflow will build and deploy automatically.

The Vite base path is computed automatically in CI:

- user or org site repo like `yourname.github.io` -> `/`
- project repo like `cv-landing-page` -> `/<repo-name>/`

Local development still works normally with:

```bash
npm run dev
```

# Héctor Cózar — Personal Website

Portfolio and professional landing page of Héctor Cózar.

**→ [hecogo1.github.io/cv-landing-page](https://hecogo1.github.io/cv-landing-page/)**

## Development

Built with React, Vite, Tailwind CSS, and Framer Motion.

```bash
npm install
npm run dev
```

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

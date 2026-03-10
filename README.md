# Héctor Cózar — Personal Website

Portfolio and professional landing page of Héctor Cózar.

**→ [hecogo1.github.io/cv-landing-page](https://hecogo1.github.io/cv-landing-page/)**

## Development

Built with React, Vite, Tailwind CSS, and Framer Motion.

```bash
npm install
npm run dev
```

## Recommended git flow

To avoid deploying unfinished changes to the official site:

1. `main` → production only.
2. `develop` → integration/testing branch.
3. feature branches (`feat/...`, `fix/...`) → open PRs into `develop`.
4. when ready, open a PR from `develop` into `main`.

This keeps production safe while still allowing fast iteration.

## GitHub Pages automation

This repository includes two workflows:

- `.github/workflows/deploy-pages.yml` → deploys production from `main`.
- `.github/workflows/pr-preview.yml` → creates a temporary preview URL for every PR and comments it in the PR.

### Initial setup (once)

1. In GitHub, open `Settings > Pages`.
2. Set `Source` to `GitHub Actions`.
3. Create and push a `develop` branch:

```bash
git checkout -b develop
git push -u origin develop
```

### Day-to-day workflow

```bash
# from develop
git checkout develop
git pull

# create a feature branch
git checkout -b feat/my-change
# ...work...
git push -u origin feat/my-change
```

Then:

1. Open PR `feat/my-change` → `develop`.
2. Check the preview URL posted by the workflow (works on mobile too).
3. Merge into `develop`.
4. Periodically open PR `develop` → `main` to publish official changes.

### About Vite base paths

The production base path is computed automatically in CI:

- user/org site repo like `yourname.github.io` → `/`
- project repo like `cv-landing-page` → `/<repo-name>/`

For PR previews, the preview workflow uses a per-PR path under `/pr-preview/pr-<number>/`.

Local development remains unchanged:

```bash
npm run dev
```

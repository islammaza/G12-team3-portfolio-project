# 🌟 G12 Team 3 — Portfolio Project

# Team Members

- **Islam Maza (Team Leader)** — @islammaza  
- **Alia Tliba** — @aliatliba  
- **Salsabil Laib** — @Salsabillaib  
- **Souha Bensimessaoud** — @bensimessaoudsouha  
- **Ryme Ait Belkacem** — @Ryme-ab

## Live site

https://islammaza.github.io/G12-team3-portfolio-project/

## Team Retrospective Analysis

The biggest technical challenge we faced was deployment. We started with a GitHub Actions workflow to build and publish the Vite app, but ran into several platform-specific problems. On Windows, `npm ci` failed at times with permission errors on native binaries. We also encountered build-time path issues where Vite reported an unexpected character in the project path. Finally, after the action ran, the site initially returned 404s for CSS and JavaScript because the app was served under the repository subpath and Vite was building asset URLs for the root path. We fixed this by setting `base: "/G12-team3-portfolio-project/"` in `vite.config`, adding a basename to the React router, and performing clean local builds to verify the output before redeploying. When Actions proved unreliable early on, we used the fallback approach of copying the built output to `docs/` and serving that from `main` until the automated flow was stable.

A concrete merge conflict occurred when merging Souha’s feature branch into `develop`. Both her branch and `develop` modified `Home.tsx` and `Portfolio.tsx`, so automatic merging failed. To resolve it we merged the latest `develop` into her branch locally to reproduce the conflict, opened the files side-by-side, and combined the intended UI changes with Souha’s content updates. We removed conflict markers, preserved the updated layout from `develop`, and kept Souha’s new profile content. After editing we ran the dev server and a production build to ensure no runtime errors, then committed the resolution and pushed the branch. This sequence ensured the integrated `develop` branch remained buildable.

The pull request and review process added measurable value. Reviews found layout regressions and suggested clearer commit messages and PR descriptions. Requiring at least one approval before merging helped reduce regressions and made the final `develop → main` release more stable which was created by the team leader Islam reviewed by Ryme. The final merge to `main` (35 commits, 88 files changed) was the product of careful local testing, manual conflict resolution, and peer review, and it resulted in a reliable deployed site.


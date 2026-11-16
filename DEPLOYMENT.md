# Deploy Tangier Furnish on Vercel

This is a static website. There is no build, database, payment integration or environment variable to configure. No deployment has been performed as part of this repair.

## Existing Tangier Furnish deployment

The existing production site is `https://tangier-furnish.vercel.app/`. Its Vercel project is `tangier-furnish`, linked to `laghmichmohcine6-coder/Tangier-Furnish`, production branch `main`. The branch and live alias were verified against Vercel during release preparation. Update this existing project through its Git integration; do not create another repository or Vercel project for this installation.

Important: the existing `tangier-furnish-v1` Vercel project is also connected to this repository's `main` branch with automatic deployments enabled. A push may update both projects. Confirm that scope with the owner before pushing; no integration settings are changed by these files.

After an authorized push, open the existing `tangier-furnish` project in Vercel → Deployments. Verify that the new deployment uses the pushed commit SHA and `main`, reaches Ready, and is assigned `tangier-furnish.vercel.app`. Then check the public home page, `/#product/1`, cart/checkout demo, local avatar and icon notice. Verify `/img_audit.zip` and `/img_audit/img_1123262.jpg` return 404. Retain `framework: null`, empty Build Command and Output Directory `.` from `vercel.json`; no secrets are needed.

The instructions below are for an independent installation by a future buyer. They are not the release path for the current connected project.

## Simplest path without GitHub

Vercel's CLI is a deployment tool only; Node.js is not a website dependency. If you prefer never to install Node.js, use the Git import alternative below.

1. Create or sign into your own Vercel account at https://vercel.com. You perform these account actions yourself.
2. If needed, install the Node.js LTS release from https://nodejs.org. Close and reopen your terminal afterward.
3. Open this project folder in File Explorer, right-click and choose "Open in Terminal". Confirm that the three application files, `assets/demo-avatar.svg`, `licenses/FEATHER-MIT.txt`, `.vercelignore` and `vercel.json` are present. Keep the dotfiles; they exclude private development material.
4. Run `npx vercel login` and follow Vercel's sign-in instructions. On PowerShell, use `npx.cmd` if script execution policy blocks `npx`.
5. Run `npx vercel` (or `npx.cmd vercel`). This uploads a preview only when you run it.
6. Choose your own account/scope, create a new project, give it a name such as `tangier-furnish-demo`, and use `./` as the code directory. Do not link it to an unrelated existing project.
7. Use Framework Preset `Other`, no Build Command, and Output Directory `.`. The included `vercel.json` sets these values. There is no install command or environment variable needed.
8. Open the preview URL printed by Vercel. Test home, catalog, a product, wishlist, cart and simulated checkout. Refresh `/#product/1` and check a mobile screen. Confirm that the demo disclosure remains visible.
9. Only when you want the site public, run `npx vercel --prod`. Share the production URL printed by the command. Check Vercel's deployment access settings if visitors are asked to sign in.

Future updates: edit the local files, repeat the preview, then run the production command yourself after review. No Git push is required. The CLI may create a local `.vercel` project-link folder; do not include account metadata in a buyer handover.

## Alternative: import a repository you manage yourself

1. Use a separate deployment repository containing only the three application files, `assets/demo-avatar.svg`, `licenses/FEATHER-MIT.txt`, `vercel.json` and `.vercelignore`. Do not import the current development repository root, which contains audit files. No repository was pushed or connected by this repair. The CLI path above avoids this preparation.
2. Set Root Directory to the folder containing this project's `index.html`.
3. Set Framework Preset to `Other`, override Build Command to empty, and Output Directory to `.`. Add no secrets. Deploy when you are ready.
4. Review the deployed files: `.vercelignore` governs CLI uploads; do not rely on it to remove development files from a Git import. Confirm `/.qa/results.json`, `/img_audit.zip` and `/README.md` return 404 before sharing.

## What is published

Only the frontend runtime and its icon notice are needed: `index.html`, `script.js`, `styles.css`, `assets/demo-avatar.svg`, `licenses/FEATHER-MIT.txt` and `vercel.json`. Hash URLs (`/#marketplace`, `/#product/1`) request the same homepage, so there are no server-side page routes to configure. Use those URLs; `/product/1` is not a page in this project. Audit-path rewrites target an intentionally nonexistent resource as additional defense; live Vercel behavior remains to be checked when you deploy.

Do not upload `.git`, `.vscode`, `.qa`, audit images/archives, credentials or buyer documents. The existing `img_audit/` and `img_audit.zip` are not used by the site. Keep them local pending a separate rights review. Never put private data in JavaScript: public source is downloadable.

Photos are remote Pexels illustrations; no Unsplash references remain. Fonts load from Google Fonts. The page works with system font fallbacks; photographs need network access. Retain the Feather MIT notice alongside the published source. See ASSET-RIGHTS.md for sale exclusions and the original-source cleanup. Do not advertise a real store, real payments or exclusive ownership of stock photographs, icons or fonts.

## Troubleshooting

- Homepage 404: confirm the project root contains `index.html` and Output Directory is `.`.
- Missing style/script: preserve exact filename spelling and include all three runtime files.
- Refresh problems: use the built-in `/#...` links, not invented path routes.
- Missing external image/font: check network access and provider availability. Do not remove the security headers to solve an unrelated image issue.
- Preview needs login: inspect Vercel Deployment Protection; use the production URL and access settings appropriate to your account.

Official references: [static build settings](https://vercel.com/docs/builds/configure-a-build), [project configuration](https://vercel.com/docs/project-configuration), [CLI project linking](https://vercel.com/docs/cli/project-linking).

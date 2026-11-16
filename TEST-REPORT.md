# Local release verification

Verified on 2026-11-16 against the repaired local source. No deployment, Git push, account connection, dependency installation or buyer archive was performed.

## Executed checks

- `node --check script.js`: passed syntax validation using the already-installed Node executable. Node is not required to run the website.
- `git diff --check`: passed without whitespace errors.
- `python .qa/static_check.py`: 13/13 checks passed. Evidence: `.qa/static-results.json`.
- `python .qa/browser_check.py`: 85/85 checks passed in installed headless Microsoft Edge (Chromium), rerun after the final asset changes. Evidence: `.qa/results.json`.
- `python .qa/asset_release_check.py`: 14/14 focused checks passed for image-source cleanup, fictional identity badges, licensed SVG geometry, retained notices, buyer allowlist, Git archive exclusions, deployment rules and preservation of unused audit originals. Evidence: `.qa/asset-release-results.json`.
- `python .qa/browser_check.py --assets-only`: 3/3 checks passed. All eight distinct replacement Pexels photos decoded successfully, all four static identity badges loaded, and no JavaScript exceptions occurred. Evidence: `.qa/asset-image-results.json`.
- Inspected desktop home and 390-pixel catalog screenshots locally. Screenshots are QA artifacts excluded from deployment and ignored by Git.

Final cleanup replaced the ten unverifiable Unsplash interior placements with eight existing Pexels catalog photos, six distinct Unsplash portrait sources with one local neutral badge, and three Pexels testimonial portraits with that badge. Canonical Feather geometry replaced legacy icons with an included MIT notice. Hero loading, local badge loading and the wishlist SVG structure were added to browser coverage. Layout rules and application workflows were retained. One asset-test count initially expected more than 100 licensed SVG instances; source inspection established 98 licensed instances plus eight dynamic/new-graphic wrappers, and the check was corrected to verify every actual instance against upstream geometry. All final checks passed.

Browser checks use a temporary local HTTP server with the same response headers declared in `vercel.json`, including CSP. The harness closes its browser process and local server afterward. No real payment or remote application API is used. Browser control required execution outside the sandbox after the sandboxed browser disconnected; the successful results are from the approved local run.

## Covered behavior

Initialization and 71-product catalog; category, city, price and stock filters; ascending/descending price and rating sorting; text search and empty results; safe malicious search/filter-tag and notification rendering; all 71 product-detail templates; gallery switching; cart arithmetic, quantities bounded by sample stock, removal and empty state; cart focus, keyboard wrap and Escape; wishlist saving, refresh persistence and removal; illustrative express delivery arithmetic; demo checkout confirmation; hash product refresh and browser back navigation; fixed demo seller session; unavailable publication feedback; local-only contact feedback; public read-only admin actions; tampered and malformed storage; blocked storage with functional in-memory state.

Horizontal document overflow checked on home, catalog, product, wishlist, contact, checkout, auth, admin, seller and tracking at 320, 390, 768 and 1440 CSS pixels. Mobile menu and filter open/close states checked at 390 pixels. The browser reported no uncaught JavaScript exceptions during the successful suite.

Static checks covered duplicate IDs, navigation targets, referenced local files, password/card input removal, absence of inline HTML event handlers, static Vercel configuration, CSP directives, runtime-only CLI upload rules, development/audit exclusions, common credential signatures, local machine paths and unwanted runtime network/evaluation APIs. No common secret signatures were found in the inspected runtime/configuration. This is a scoped source inspection, not a guarantee that every possible secret signature has been recognized.

## Fixes confirmed during verification

An initial cart focus check failed; moving focus after the drawer enters the viewport repaired it. Test selectors for card IDs and mobile filter state were corrected to reflect the actual DOM. Original inline image error handlers conflicted with CSP and were replaced by a central listener using a trusted illustration fallback. The mobile filter overlay lacked styling and now covers underlying navigation. Final results above contain no failed checks.

## Not verified

- Actual Vercel upload, live response headers, deployment protection or public URL: intentionally not deployed.
- Physical phones/tablets, Safari, Firefox, screen-reader output and a complete accessibility audit. Responsive checks use browser viewport emulation and DOM assertions; they do not prove every touch target or screen-reader sequence.
- Every external photo's availability or exact visual match, offline external image delivery, provider uptime or rights. Remote fonts/photos remain network dependencies; a trusted fallback handles image load errors.
- An independent legal warranty of every upstream contributor's rights, property/model releases, trademark clearance or the seller's original authorship. Provider licenses and icon/font notices are now documented in `ASSET-RIGHTS.md` and `THIRD-PARTY-NOTICES.md`; unverifiable Unsplash use and photographed endorsements have been removed. Unused local audit-image origins remain unverified but those files are outside the handover/runtime scope.
- Real accounts, administrator security, payment processing, order delivery or contact transmission: deliberately absent, not features claimed to pass production tests.

The scoped practical asset blockers have been addressed. The prototype is technically prepared for a static demonstration and an exclusive sale of seller-owned original code/design, with stock photos, Feather icons and fonts expressly excluded from exclusive ownership. No live deployment was performed or verified. Ordinary seller ownership representations and applicable third-party license obligations remain.

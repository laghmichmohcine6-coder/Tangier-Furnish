# Tangier Furnish

French furniture storefront frontend prototype, with 71 sample products and illustrative prices in Moroccan dirhams (MAD). The original warm editorial design is retained. This is source code for a demo, not an operating store or an established business.

## Technologies and local use

Plain HTML, CSS and JavaScript. No framework, application dependencies, build step, backend or database.

Open `index.html` for a quick preview. For reliable browser storage and navigation, serve this folder with an editor's static preview extension or, if Python is installed, run:

```text
python -m http.server 8080 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8080`. Stop the server with Ctrl+C. No Node.js installation is required for the website.

## Features

- Home, catalog, product details, wishlist, cart drawer, simulated checkout, confirmation, tracking, contact, persona selection, seller dashboard and read-only admin showcase.
- Search, categories, city and price filters, sorting, galleries, illustrative color selection and bounded cart quantities.
- Cart and wishlist persist in browser local storage; malformed or tampered saved data is validated against the bundled catalog.
- Static hash navigation, including direct product URLs such as `/#product/1`, supports refresh and browser history.
- Responsive layouts, keyboard controls, visible focus, cart focus management, live notifications and reduced-motion styles.

## Demonstration boundaries

All products, sellers, ratings, testimonials, stock, prices, dashboard statistics, delivery options and tracking stages are sample content. Images illustrate a design and are not authoritative product photographs. Product materials and dimensions are illustrative, including generated category defaults.

The persona selector opens an in-memory demo session with a fixed fictional identity. It does not verify identity, save passwords, create accounts, or protect resources. Admin is a public read-only mockup; seller publication and upload are unavailable. Color swatches are illustrative and are not separate cart variants.

Checkout calculates a fictitious total and clears the demo cart after confirmation. No payment, commercial order, email, SMS, shipment or refund occurs. Confirmation and tracking data disappear on refresh. Contact validates fields locally and explicitly reports that nothing was sent. OAuth, social links and legal/business resources are marked unavailable. Enter fictional information only.

Browser storage is optional and can be cleared in browser site settings. When storage is unavailable, state lasts only in the current page. External fonts and photographs require internet access and may send normal network metadata to their providers. The application sends no form data to any server.

## Deployment

Follow [DEPLOYMENT.md](DEPLOYMENT.md). Vercel serves the existing files directly, with no build or secrets. `.vercelignore` limits deployment to the three application files, neutral avatar, configuration and Feather license notice. Do not serve the entire development folder publicly with a generic server.

## Buyer customization

Edit `PRODUCTS` in `script.js` for catalog data. Keep unique numeric IDs, valid HTTPS image URLs and non-negative prices/stock; use trusted, reviewed catalog text only. Templates interpolate bundled catalog content, so remote feeds or user-authored listings require a new input-validation and rendering review. Change CSS variables in `styles.css` for colors and typography; update copy and navigation in `index.html`. Update the deployment CSP if adding approved image or font providers. Keep demo disclosures until actual backend services and business policies exist.

## Not included / sale scope

No backend, database, secure authentication, payment gateway, order fulfillment, working customer service, verified revenue, customers, domain, hosting account or transferable third-party asset ownership. No production-security certification. No new license or ownership claim is supplied; the existing repository license has not been changed.

An exclusive transfer covers only rights the seller actually owns. Review [ASSET-RIGHTS.md](ASSET-RIGHTS.md) and [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md) for the precise sale boundary and retained notices.

The intended exclusive sale covers the seller-owned original frontend code and interface design. The 56 remaining Pexels photographs, Feather 4.29.2 icons (MIT) and Jost/Playfair Display fonts (SIL OFL 1.1) remain nonexclusive third-party assets; their ownership and exclusive rights are not transferred. All 16 unverifiable Unsplash references were replaced with existing Pexels catalog illustrations or a neutral house badge. Photographed testimonial/seller identities were removed; fictional testimonials are explicitly labeled. The full license notices are in `licenses/`.

For the future buyer handover, use only the files listed in `BUYER-PACKAGE.json`, including the license notices. No buyer ZIP has been created. Exclude `img_audit/`, `img_audit.zip`, `.qa/`, `.git/`, editor settings and account metadata. `.gitattributes` excludes audit/QA material from Git archive exports; `.gitignore` does not remove existing tracked history. Do not publish the development repository wholesale. The audit files have been preserved locally but are not part of the deliverable.

## Verification

Local checks and evidence are described in [TEST-REPORT.md](TEST-REPORT.md). Optional maintainer QA in `.qa/` uses an already-installed Chromium browser and Python `websocket-client`; it is not part of the app or public deployment.

# Ashford Holdings PVT L.T.D rebranding report

Applied the exact requested company name across visible copy, route metadata, accessibility labels, legal names, copyright, navigation branding, shared header/mobile menu/footer, Open Graph, Twitter metadata and Organization JSON-LD. All route structures, engineering visuals and interactions are retained.

## Supplied logo

The latest user-supplied PNG is installed at `public/assets/brand/ashford-holdings-logo.png`, byte-for-byte identical to the attachment. Its intrinsic dimensions are 1299 x 1211. The shared header, mobile menu and footer use this asset, as do favicon/apple icon links and Organization schema. The previous white tile was removed so the supplied transparent artwork integrates with the dark design. Aspect ratio and accessible company alt text are preserved. Earlier JPEG remains unused.

## Content requiring company verification

The following inherited content was retained as requested; it is not verified as belonging to the new company:

- Contact page, footer, privacy/terms and contact forms: existing phone, address and `info@sairt.com`; original social links.
- SEO canonicals, sitemap, robots and structured data: existing `https://www.sairt.com` domain. No replacement domain was provided.
- Leadership page, About page and leadership sections: all six existing people, titles, credentials and biographies.
- About page: vision, values, 2032 mission, company positioning and existing tagline.
- Projects and project details: all existing clients, delivery locations, scope and outcomes.
- Testimonials, client logo wall and evidence in the Why section: original eight client testimonials, client relationships and quoted history.
- Brands/network map, industries and metrics: manufacturer countries, overseas delivery and sector coverage.
- Equipment catalogue, solutions and engineering claims: existing product applications, published capacity ranges, ATEX references and service scope.

No new address, contacts, people, projects, statistics, certifications or testimonials were invented. Review these inherited claims before publishing the new identity.

## QA

- TypeScript: passed (`tsc --noEmit`).
- Semantic ESLint rules: passed, with six existing Fast Refresh warnings in UI components.
- Changed-file ESLint: passed for all 24 edited TypeScript files, with zero errors or warnings.
- Full ESLint: failed on widespread formatting/Windows line-ending issues. Changed branding TypeScript files were formatted with the project formatter.
- Production build: attempted via npm and directly through Vite; blocked by `ENOSPC` (system drive out of space).
- Browser checks for all routes, desktop/tablet/mobile, menus, console errors, horizontal overflow and screenshots: not completed; build and browser tooling require available disk space. Responsive logo, longer heading and footer sizes were adjusted in CSS but are not browser-verified.
- Supplied asset integrity: source and destination SHA-256 hashes match.
- Source audit: no old company name in visible copy or SEO; remaining references are listed below.

## Remaining legacy references

Unmodified original-source comments and historical documents are retained for provenance. Two social URL destinations are retained because no replacement URLs were provided. They remain clickable public links and need verification. The canonical domain and email do not contain the old name but also need verification.

Legacy unused files retained (not referenced by rendering code): `public/assets/brand/sirocco-mark.png`, `public/assets/brand/sirocco-logo.svg`, `public/assets/brand/sirocco-logo-light.svg`, `public/assets/brand/sirocco-logo-dark@2x.png`. The previous `public/favicon.ico` is retained but is not used by the document's explicit favicon links.

The complete remaining text-match inventory, excluding dependencies and generated caches, follows. This audit report itself necessarily repeats those references.

- `COMPLETION-NOTES.md:7` ? - Restored missing `src/data/products.ts` with a concise Sirocco product catalogue based on current sairt.com product families.
- `COMPLETION-NOTES.md:8` ? - Restored missing `src/data/client-logos.ts` using only the eight client logos published alongside Sirocco testimonials.
- `COMPLETION-NOTES.md:10` ? - Replaced the leadership area with the current team published by Sirocco and a premium text-led editorial design (no fake portraits).
- `COMPLETION-NOTES.md:11` ? - Removed Jo Paradise client names from industry pages; only clients with published Sirocco feedback remain attached to sectors.
- `COMPLETION-NOTES.md:13` ? - Reworked the Brands page into a verified global manufacturing-network page using the five countries Sirocco publishes.
- `COMPLETION-NOTES.md:14` ? - Kept current Sirocco contact details across the site.
- `COMPLETION-NOTES.md:15` ? - Kept the eight named Sirocco testimonials as “Selected client feedback”, with no Google branding or fake stars.
- `COMPLETION-NOTES.md:40` ? See `SOURCE-NOTES.md` for the cleaned source-of-truth policy. Jo Paradise Holdings and Air Control Group material is explicitly excluded from Sirocco-facing claims.
- `SOURCE-NOTES.md:1` ? # Source notes — Sirocco Air Technologies website
- `SOURCE-NOTES.md:3` ? The public-facing content in this build has been cleaned so Sirocco is not mixed with the unrelated Jo Paradise Holdings or Air Control Group material that appeared earlier in the working files.
- `SOURCE-NOTES.md:12` ? | [WEB] | Sirocco product pages on sairt.com | Selected equipment families used by the `/products` catalogue |
- `SOURCE-NOTES.md:17` ? - `Company Profile.pdf` branded **Jo Paradise Holdings (Pvt) Ltd** is not used as a source for Sirocco leadership, clients, contact details or claims in this cleaned build.
- `SOURCE-NOTES.md:20` ? - No generated/fake leadership portraits are used. The official Sirocco team is shown in an editorial text-led treatment because verified portrait files are not present in this project ZIP.
- `SOURCE-NOTES.md:24` ? The site uses the contact details published on Sirocco's own current website:
- `SOURCE-NOTES.md:52` ? `src/data/feedback.ts` contains the eight named testimonials currently published by Sirocco on its own website. They are labelled **Selected client feedback**, not Google Reviews.
- `SOURCE-NOTES.md:62` ? The `/products` catalogue is a concise set of product families currently published on Sirocco's own website, including inline/mixed-flow fans, centrifugal inline fans, duct axial fans, HVLS fans, evaporative cooling, cooling towers and special-environment ventilation. Final make/model/certification remains subject to project selection and supplier documentation.
- `SOURCE-NOTES.md:68` ? - `public/assets/feedback/` — client logos used with the published Sirocco testimonials.
- `SOURCE-NOTES.md:69` ? - `public/assets/brand/` — Sirocco brand assets.
- `scripts/site-smoke.mjs:1` ? // Browser QA for the Sirocco site.
- `src/styles.css:9` ? * Sirocco Air Technologies — design system.
- `src/styles.css:47` ? /* Sirocco surfaces & type */
- `src/data/client-logos.ts:2` ? * Client logos published alongside named testimonials on Sirocco's own website.
- `src/data/disciplines.ts:2` ? * Sirocco's six solution disciplines, named and described as on the company's own
- `src/data/feedback.ts:2` ? * Client feedback published by Sirocco Air Technologies on its own website (sairt.com).
- `src/data/industries.ts:2` ? * Client sectors as listed on Sirocco's about page (sairt.com). The percentages
- `src/data/industries.ts:4` ? * general engineering conditions of each sector, not company claims. Client names shown here are limited to organisations with published feedback on Sirocco's own website.
- `src/data/products.ts:2` ? * Selected equipment families currently published by Sirocco on sairt.com.
- `src/data/projects.ts:7` ? * Sirocco publishes on sairt.com. Scope, location and outcome are limited to what
- `src/data/site.ts:2` ? * Central company data for Sirocco Air Technologies.
- `src/data/site.ts:34` ? href: "https://www.linkedin.com/company/sirocco-air-technologies-pvt-ltd/",
- `src/data/site.ts:36` ? { label: "Facebook", href: "https://www.facebook.com/SiroccoAirTech/" },
- `src/components/site/NetworkMap.tsx:9` ? * countries are those Sirocco lists on its own website; Bangladesh is shown as
- `src/components/site/site.css:2` ? Sirocco — component styles
- `src/components/site/site.css:2710` ? /* Leadership — editorial no-fake-portrait treatment for the verified Sirocco team. */

## Latest contact and presentation update

User-supplied screenshot replaces inherited phone, email and address across shared contact data: +94 76 666 8859, info.ashfordholdings@gmail.com, 227/6, Gemunu Mw, Watthegedara Road, Watthegedara, Maharaga, Sri Lanka. The screenshot truncates the postal code, so none is invented. WhatsApp +94 76 626 7717 links to https://wa.me/94766267717 in contact details and footer. Old contact details in the earlier verification list are now superseded; canonical domain and social destinations still need confirmation.

Footer brand text is on one line. A 1.8-second cinematic gold logo intro uses a native modal dialog, keyboard skip/Escape, a short fade-out, and a once-per-tab marker. Reduced-motion visitors bypass the intro. The site renders without a blocking overlay when JavaScript is disabled. Intro timing is decorative and does not claim actual load percentage.

Latest verification supersedes the earlier disk-space blocker: production build passed. TypeScript and lint passed for changed files. Chrome checks passed at 360, 390, 768, 1024 and 1440px for single-line footer branding, screenshot contact details and WhatsApp link, intro dismissal and once-per-tab behavior, no page errors and no horizontal overflow. Reduced-motion, skip-button and JavaScript-disabled checks passed. Screenshots are in `artifacts/branding/`; repeatable checks are in `scripts/branding-smoke.mjs` (supply a local Playwright module path).

# Completion notes

This project was cleaned and completed from the supplied Claude/Lovable working ZIP.

## What was corrected

- Restored missing `src/data/products.ts` with a concise Sirocco product catalogue based on current sairt.com product families.
- Restored missing `src/data/client-logos.ts` using only the eight client logos published alongside Sirocco testimonials.
- Removed all broken `/assets/profile/`, `/assets/brands/` and `/assets/leadership/` references.
- Replaced the leadership area with the current team published by Sirocco and a premium text-led editorial design (no fake portraits).
- Removed Jo Paradise client names from industry pages; only clients with published Sirocco feedback remain attached to sectors.
- Replaced the unverified “59 clients” metric with the count of published named client stories.
- Reworked the Brands page into a verified global manufacturing-network page using the five countries Sirocco publishes.
- Kept current Sirocco contact details across the site.
- Kept the eight named Sirocco testimonials as “Selected client feedback”, with no Google branding or fake stars.
- Regenerated the sitemap (58 URLs).
- Added Equipment to the primary navigation.
- Verified every local source import and every `/assets/...` reference points to an existing file.

## Hero / visual system

The existing premium dark visual system is preserved, including:

- full-screen engineering hero
- live airflow canvas
- cursor-reactive light on fine pointers
- technical grid/details
- scroll-linked hero movement
- reduced-motion fallback
- Airflow Intelligence animated section
- interactive solution system
- network map
- project bento
- testimonial slider
- infinite client-logo marquee
- responsive full-screen mobile navigation

## Source policy

See `SOURCE-NOTES.md` for the cleaned source-of-truth policy. Jo Paradise Holdings and Air Control Group material is explicitly excluded from Sirocco-facing claims.

## Local development

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
```

The package intentionally does not include stale `.output` files from the previous build.

# Source notes — Sirocco Air Technologies website

The public-facing content in this build has been cleaned so Sirocco is not mixed with the unrelated Jo Paradise Holdings or Air Control Group material that appeared earlier in the working files.

## Sources used

| Tag | Source | Used for |
| --- | --- | --- |
| [WEB] | https://www.sairt.com/ | Company positioning, published client feedback, contact details, official logo and current solution/product context |
| [WEB] | https://www.sairt.com/about/ | Leadership names/roles/credentials, vision, mission, values, sectors and partner countries |
| [WEB] | https://www.sairt.com/what-we-do/ | Six engineering disciplines and their published descriptions |
| [WEB] | Sirocco product pages on sairt.com | Selected equipment families used by the `/products` catalogue |
| [USER] | HVAC photographs already present in `public/assets/hvac/` | Visual engineering imagery throughout the site |

## Explicit exclusions

- `Company Profile.pdf` branded **Jo Paradise Holdings (Pvt) Ltd** is not used as a source for Sirocco leadership, clients, contact details or claims in this cleaned build.
- `Competitor's Company Profile 2027.pdf` belongs to **Air Control Group** and is not used.
- No fake Google reviews, review stars or fabricated testimonial names are used.
- No generated/fake leadership portraits are used. The official Sirocco team is shown in an editorial text-led treatment because verified portrait files are not present in this project ZIP.

## Current company details

The site uses the contact details published on Sirocco's own current website:

- Phone: +94 117 392 010
- Email: info@sairt.com
- Address: No. 44C, Kandawatta, Kalukodayawa, Malwana, Sri Lanka

## Leadership

The leadership page uses the team currently published at `sairt.com/about/`:

- Suren Chandraratna — Managing Director
- Rohan Rajaratnam — Head Communication & Marketing
- Dr. Prasan De Waas Tilakaratne — Group Engineering Director
- Harin Chandraratna — Engineering Systems Integrator
- Ravindra Alwis — General Manager - Sales
- Gayan Kodikara — Assistant General Manager / Engineering

## Metrics

Conflicting public figures such as “16+” versus “17” years and different project/client totals are intentionally not used in the metric strip. The homepage instead counts verifiable lists used by this build:

- engineering disciplines
- published industry sectors
- published named client stories
- partner countries

## Client feedback and trust logos

`src/data/feedback.ts` contains the eight named testimonials currently published by Sirocco on its own website. They are labelled **Selected client feedback**, not Google Reviews.

The moving client-logo wall uses the 63 marks from the logo sheet explicitly supplied and requested by the user. Original artwork was extracted from the matching page in `Company Profile.pdf`, including one vector mark rendered as a PNG. This user-requested roster is separate from the eight published testimonials; it does not add testimonials or project claims.

## Sri Lanka client network

At the user's request, the homepage Network section is now a simple heading and paragraph describing engineering work for local and international brands operating in Sri Lanka. Repeated client logos, the brand grid, filters and search have been removed from this section. The existing Clients logo marquee remains the dedicated place to display the supplied client artwork.

## Project case studies

Project pages are built only where named client feedback confirms a project or scope. Where no verified project-specific photograph is present in this ZIP, the UI explicitly labels the engineering photograph as a representative image or uses a technical racking drawing.

## Product catalogue

The `/products` catalogue is a concise set of product families currently published on Sirocco's own website, including inline/mixed-flow fans, centrifugal inline fans, duct axial fans, HVLS fans, evaporative cooling, cooling towers and special-environment ventilation. Final make/model/certification remains subject to project selection and supplier documentation.

## Images

- `public/assets/hvac/` — real engineering/HVAC photographs bundled with this project.
- `public/assets/hvac/hero/` — responsive WebP derivatives used in the hero.
- `public/assets/feedback/` — client logos used with the published Sirocco testimonials.
- `public/assets/brand/` — Sirocco brand assets.

No missing `/assets/profile/`, `/assets/brands/` or `/assets/leadership/` references remain in the source.

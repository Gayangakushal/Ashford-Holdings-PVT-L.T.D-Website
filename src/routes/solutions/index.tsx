import { createFileRoute } from "@tanstack/react-router";
import { SolutionCard } from "@/components/site/Cards";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionLabel";
import { SolutionFeature } from "@/components/site/SolutionFeature";
import { disciplines } from "@/data/disciplines";
import { process } from "@/data/site";
import { solutions } from "@/data/solutions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    seo({
      title: "Solutions — Ventilation, Air Conditioning, Purification, BMS & More",
      description:
        "Air conditioning & ventilation, air purification & filtration, BMS & air quality, fire & gas suppression, dust extraction and racking & material handling from Ashford Holdings PVT L.T.D, Sri Lanka.",
      path: "/solutions",
    }),
  component: Solutions,
});

function Solutions() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Six disciplines.
            <br />
            <span className="text-steel">One air path.</span>
          </>
        }
        intro="From the air a building breathes to the racking that stores what it produces — engineered, supplied and installed by one team."
        image="/assets/hvac/plate-heat-exchanger-plant.jpg"
        crumbs={[{ label: "Solutions" }]}
        meta={disciplines.slice(0, 4).map((d) => ({ label: d.index, value: d.short }))}
      />

      <div className="container-x">
        {disciplines.map((d, i) => (
          <SolutionFeature key={d.slug} discipline={d} flip={i % 2 === 1} />
        ))}
      </div>

      <section className="section-y" aria-labelledby="systems-title">
        <div className="container-x">
          <SectionHeading
            index="07"
            label="Engineering systems"
            id="systems-title"
            title="Systems in detail."
            intro="The individual systems and equipment applications that sit within each discipline."
          />
          <div className="card-grid mt-14">
            {solutions.map((s) => (
              <SolutionCard key={s.slug} solution={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-carbon" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeading
            index="08"
            label="Delivery"
            id="process-title"
            title={
              <>
                Survey to
                <br />
                commissioning.
              </>
            }
            intro="Every project follows the same engineering sequence, whatever the discipline."
          />
          <ol className="step-grid mt-14">
            {process.map((p) => (
              <li key={p.step}>
                <span className="step-num">{p.step}</span>
                <h3 className="t-h3 mt-8">{p.title}</h3>
                <p className="t-small mt-3">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTA />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { PageHero } from "@/components/site/PageHero";
import { industries } from "@/data/industries";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/")({
  head: () =>
    seo({
      title: "Industries — Manufacturing, FMCG, Apparel, Healthcare & More",
      description:
        "Ventilation, air conditioning, purification, extraction and racking for manufacturing, FMCG, apparel & textiles, food & hospitality, healthcare, plantation, energy and transport sectors in Sri Lanka.",
      path: "/industries",
    }),
  component: Industries,
});

function Industries() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Air systems designed
            <br />
            <span className="text-steel">around the process.</span>
          </>
        }
        intro={`Ashford Holdings PVT L.T.D serves ${industries.length} sectors. Each has its own heat, fume, dust, hygiene and storage conditions — the engineering starts there.`}
        image="/assets/hvac/ducted-air-distribution-2.jpg"
        crumbs={[{ label: "Industries" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <IndustryGrid />
        </div>
      </section>
      <CTA />
    </main>
  );
}

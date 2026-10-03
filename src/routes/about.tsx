import { createFileRoute } from "@tanstack/react-router";
import { AirflowIntelligence } from "@/components/site/AirflowIntelligence";
import { CTA } from "@/components/site/CTA";
import { NetworkMap } from "@/components/site/NetworkMap";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, SectionLabel } from "@/components/site/SectionLabel";
import { WhyAshford } from "@/components/site/WhyAshford";
import { disciplines } from "@/data/disciplines";
import { process, site, statements } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Ashford Holdings PVT L.T.D",
      description:
        "Ashford Holdings PVT L.T.D is an air and environmental engineering company in Sri Lanka — ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and racking.",
      path: "/about",
      image: "/assets/hvac/plate-heat-exchanger-plant.jpg",
    }),
  component: About,
});

function About() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About Ashford Holdings PVT L.T.D"
        title={
          <>
            {site.tagline.split(". ")[0]}.
            <br />
            <span className="text-steel">{site.tagline.split(". ")[1]}</span>
          </>
        }
        intro="Ashford Holdings PVT L.T.D leads in air and environmental engineering across Sri Lanka — and, alongside it, the racking, mezzanine and material-handling systems that keep facilities running."
        image="/assets/hvac/plate-heat-exchanger-plant.jpg"
        crumbs={[{ label: "About" }]}
      />

      <section className="section-y">
        <div className="container-x detail-grid">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Company</SectionLabel>
            <h2 className="t-h2 mt-10">One team for the whole air path.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-lead">
              Our work spans ventilation, air purification, cooling and air conditioning, fire and
              gas suppression, building management systems, workplace air quality, ducting and dust
              extraction.
            </p>
            <p className="t-body mt-6">
              The same engineering discipline extends to industrial storage — racking systems,
              mezzanines, conveyor networks and material-handling set-ups — for warehouses,
              logistics hubs and factories.
            </p>
            <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
              {disciplines.map((d) => (
                <li key={d.slug} className="flex items-baseline gap-4 bg-void p-5">
                  <span className="step-num">{d.index}</span>
                  <span>{d.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-carbon" aria-labelledby="vision-title">
        <div className="container-x">
          <SectionLabel index="02">Vision · Mission · Values</SectionLabel>
          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            <Reveal className="bg-carbon p-6 sm:p-10">
              <p className="eyebrow">Vision</p>
              <h2 id="vision-title" className="t-h3 mt-6">
                {statements.vision}
              </h2>
            </Reveal>
            <Reveal delay={100} className="bg-carbon p-6 sm:p-10">
              <p className="eyebrow">Mission</p>
              <p className="t-h3 mt-6">{statements.mission}</p>
            </Reveal>
            <Reveal delay={200} className="bg-carbon p-6 sm:p-10">
              <p className="eyebrow">Values</p>
              <ul className="mt-6 grid gap-3">
                {statements.values.map((v, i) => (
                  <li key={v} className="flex items-baseline gap-4 border-b border-line pb-3">
                    <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="t-h3">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <AirflowIntelligence index="03" />

      <section className="section-y" aria-labelledby="process-title">
        <div className="container-x">
          <SectionHeading
            index="04"
            label="Delivery"
            id="process-title"
            title="How a project runs."
            intro="Survey, engineer, select, fabricate, install, commission — one accountable team from first visit to handover."
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

      <NetworkMap index="05" />
      <WhyAshford index="06" />
      <CTA />
    </main>
  );
}

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
        "Ashford Holdings PVT L.T.D is an air and environmental engineering company in Sri Lanka, ventilation, air conditioning, purification, Kitchen ESP, dust extraction and HVLS fans.",
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
        intro="Ashford Holdings PVT L.T.D delivers ventilation, air conditioning, purification, Kitchen ESP and HVLS fan solutions across Sri Lanka."
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
              Our work spans ventilation, air purification, cooling and air conditioning, kitchen
              exhaust filtration, ducting and dust extraction.
            </p>
            <p className="t-body mt-6">
              HVLS fans bring gentle, wide-area circulation to factories, warehouses and commercial
              spaces, helping improve comfort and air distribution.
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

      <section className="section-y border-t border-line" aria-labelledby="leadership-message-title">
        <div className="container-x">
          <SectionLabel>A message from Gayan Wickramarathne</SectionLabel>
          <article className="about-message mt-12">
            <div className="about-message-portrait">
              <img
                src="/assets/team/gayan-wickramarathne.jpg"
                alt="Gayan Wickramarathne"
                width={1687}
                height={2160}
                loading="lazy"
              />
              <div className="about-message-caption">
                <p className="eyebrow">Ashford Holdings PVT L.T.D</p>
                <p className="t-h3 mt-3">Gayan Wickramarathne</p>
              </div>
            </div>
            <div className="about-message-copy">
              <span className="about-message-mark" aria-hidden="true">“</span>
              <p className="eyebrow">Our commitment to you</p>
              <h2 id="leadership-message-title" className="t-h2 mt-6">
                Better air.<br />Lasting relationships.
              </h2>
              <p className="t-lead mt-8">
                At Ashford Holdings, we believe good engineering begins with understanding the
                people and spaces we serve.
              </p>
              <div className="about-message-body t-body mt-6">
                <p>
                  Every workplace has its own challenges. Our approach brings together careful
                  planning, practical solutions and attention to detail to create environments
                  where people can work comfortably and confidently.
                </p>
                <p>
                  From ventilation and cooling to air purification and extraction, we focus on
                  solutions that suit each client's needs. Clear communication, responsible
                  workmanship and dependable support guide the way we work.
                </p>
                <p>
                  Thank you for considering Ashford Holdings. We look forward to working with
                  you and building a lasting relationship based on trust and care.
                </p>
              </div>
              <div className="about-message-signoff">
                <p className="t-h3">Gayan Wickramarathne</p>
                <p className="t-small mt-2">Ashford Holdings PVT L.T.D</p>
              </div>
            </div>
          </article>
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
            intro="Survey, engineer, select, fabricate, install, commission, one accountable team from first visit to handover."
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

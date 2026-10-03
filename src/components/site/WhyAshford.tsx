import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

/**
 * Each strength is backed by evidence in the source material: either the company's
 * own discipline list or wording from named client feedback.
 */
const reasons = [
  {
    title: "Integration",
    text: "Ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and racking from one engineering team — designed as one system, not six contracts.",
    evidence: "Six disciplines, one team",
  },
  {
    title: "Precision",
    text: "Systems are surveyed, calculated and drawn around the actual process, occupancy and building before equipment is selected.",
    evidence: "“Completed to our exacting standards” — Variosystems",
  },
  {
    title: "Reliability",
    text: "Delivery that holds to programme across Sri Lanka and overseas, including multi-country coordination.",
    evidence: "“Installed ahead of time” — DOK Solutions Lanka",
  },
  {
    title: "Partnership",
    text: "Long-term relationships built on post-installation support and continual improvement in energy efficiency.",
    evidence: "“For over 15 years, we have relied on their expertise” — CBL",
  },
];

export function WhyAshford({ index = "09" }: { index?: string }) {
  return (
    <section className="section-y why" aria-labelledby="why-title">
      <div className="container-x">
        <SectionLabel index={index}>Why Ashford Holdings PVT L.T.D</SectionLabel>
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <h2 id="why-title" className="why-title lg:col-span-4">
            Why
            <br />
            Ashford Holdings PVT L.T.D
          </h2>
          <ol className="why-list lg:col-span-8">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 80} className="why-item">
                <span className="why-index">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3">{r.title}</h3>
                <p className="t-body">{r.text}</p>
                <p className="t-tech why-evidence">{r.evidence}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

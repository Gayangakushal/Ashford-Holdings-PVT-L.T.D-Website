import { TextLink } from "@/components/site/Buttons";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { statements } from "@/data/site";

export function Intro() {
  return (
    <section className="section-y relative" aria-labelledby="intro-title">
      <div className="container-x">
        <SectionLabel index="03">Ashford Holdings PVT L.T.D</SectionLabel>
        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-8">
            <h2 id="intro-title" className="t-h2">
              Air and environmental engineering for facilities that{" "}
              <span className="text-steel">cannot afford to stop.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:pt-3">
            <p className="t-body">
              Ashford Holdings PVT L.T.D designs, supplies and installs the systems that move,
              clean, cool, monitor and protect the air inside industrial, commercial and
              infrastructure facilities — together with the racking and material-handling systems
              that keep those facilities running.
            </p>
            <TextLink href="/about" className="mt-8">
              About Ashford Holdings PVT L.T.D
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-line bg-line lg:mt-28 lg:grid-cols-12">
          <Reveal as="figure" variant="clip" className="intro-figure lg:col-span-7">
            <img
              src="/assets/hvac/plate-heat-exchanger-plant.jpg"
              alt="Plant room with insulated ductwork, pipework and air handling equipment"
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="t-tech">Fig. 03 — Plant room ductwork & pipework</figcaption>
          </Reveal>
          <div className="grid bg-void lg:col-span-5">
            <div className="intro-statement">
              <p className="eyebrow">Vision</p>
              <p className="t-h3 mt-4">{statements.vision}</p>
            </div>
            <div className="intro-statement border-t border-line">
              <p className="eyebrow">Mission</p>
              <p className="t-body mt-4">{statements.mission}</p>
            </div>
            <div className="intro-statement border-t border-line">
              <p className="eyebrow">Values</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {statements.values.map((v) => (
                  <li key={v} className="chip">
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

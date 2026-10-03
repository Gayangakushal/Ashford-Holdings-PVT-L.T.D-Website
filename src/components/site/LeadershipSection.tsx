import { TextLink } from "@/components/site/Buttons";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionLabel";
import { leadership } from "@/data/site";

export function LeadershipGrid() {
  return (
    <ol className="leader-grid leader-grid--editorial">
      {leadership.map((person, i) => (
        <Reveal as="li" key={person.name} delay={i * 70} className="leader-card leader-card--text">
          <div className="leader-card-top">
            <span className="leader-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="leader-status" aria-hidden="true" />
          </div>
          <div className="leader-body">
            <span className="leader-rule" aria-hidden="true" />
            <p className="t-tech">{person.role}</p>
            <h3 className="leader-name">{person.name}</h3>
            <p className="leader-credentials">{person.credentials}</p>
            <p className="leader-bio">{person.bio}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function LeadershipSection({
  index = "10",
  link = true,
}: {
  index?: string;
  link?: boolean;
}) {
  return (
    <section className="section-y leadership" aria-labelledby="leadership-title">
      <div className="container-x">
        <SectionHeading
          index={index}
          label="Leadership"
          id="leadership-title"
          title={
            <>
              The people behind
              <br />
              the system.
            </>
          }
          intro="Ashford Holdings PVT L.T.D's published leadership team across engineering, systems integration, sales and communications."
        />
        <div className="mt-14 lg:mt-20">
          <LeadershipGrid />
        </div>
        {link ? (
          <div className="mt-12 flex justify-end">
            <TextLink href="/leadership">Leadership</TextLink>
          </div>
        ) : null}
      </div>
    </section>
  );
}

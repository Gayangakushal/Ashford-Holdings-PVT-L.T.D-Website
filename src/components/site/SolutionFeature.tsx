import { TextLink } from "@/components/site/Buttons";
import { RackingDrawing } from "@/components/site/RackingDrawing";
import { Reveal } from "@/components/site/Reveal";
import type { Discipline } from "@/data/disciplines";
import { cn } from "@/lib/utils";

/** Large-format alternating editorial block for one discipline. */
export function SolutionFeature({
  discipline: d,
  flip = false,
}: {
  discipline: Discipline;
  flip?: boolean;
}) {
  return (
    <article className={cn("feature", flip && "is-flip")} aria-labelledby={`feature-${d.slug}`}>
      <Reveal as="figure" variant="clip" className="feature-media">
        {d.image ? (
          <img src={d.image} alt={d.imageAlt} loading="lazy" decoding="async" />
        ) : (
          <RackingDrawing label="Racking elevation" />
        )}
        <figcaption className="feature-media-tag">
          <span>{d.index}</span>
          <span>{d.short}</span>
        </figcaption>
      </Reveal>
      <Reveal className="feature-body" delay={120}>
        <span className="feature-index" aria-hidden="true">
          {d.index}
        </span>
        <h2 id={`feature-${d.slug}`} className="t-h2">
          {d.title}
        </h2>
        <p className="t-lead mt-6">{d.description}</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="t-tech">Capabilities</p>
            <ul className="feature-list">
              {d.capabilities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="t-tech">Applications</p>
            <ul className="feature-list">
              {d.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
        <TextLink href={`/solutions/${d.slug}`} className="mt-10">
          View solution
        </TextLink>
      </Reveal>
    </article>
  );
}

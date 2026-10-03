import { AppLink, Arrow } from "@/components/site/Buttons";
import { industries } from "@/data/industries";

export function IndustryGrid() {
  return (
    <ul className="industry-grid">
      {industries.map((ind) => (
        <li key={ind.slug}>
          <AppLink href={`/industries/${ind.slug}`} className="industry-cell">
            <span className="industry-cell-media" aria-hidden="true">
              <img src={ind.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="industry-cell-index">{ind.index}</span>
            <span className="industry-cell-name">{ind.name}</span>
            <span className="industry-cell-summary">{ind.summary}</span>
            <span className="industry-cell-flow" aria-hidden="true" />
            <span className="industry-cell-arrow" aria-hidden="true">
              <Arrow />
            </span>
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

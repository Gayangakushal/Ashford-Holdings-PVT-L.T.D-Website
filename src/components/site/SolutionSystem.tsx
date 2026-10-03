import { useState } from "react";
import { AppLink, Arrow, TextLink } from "@/components/site/Buttons";
import { RackingDrawing } from "@/components/site/RackingDrawing";
import { SectionLabel } from "@/components/site/SectionLabel";
import { disciplines } from "@/data/disciplines";
import { cn } from "@/lib/utils";

/**
 * "What we do": a stacked, interactive list of the six disciplines.
 * Desktop: hovering/focusing a row swaps the image plate and expands its detail.
 * Mobile: an accessible accordion with the image inside each panel.
 */
export function SolutionSystem({ index = "05" }: { index?: string }) {
  const [active, setActive] = useState(0);

  return (
    <section className="section-y solution-system" aria-labelledby="solutions-title">
      <div className="container-x">
        <SectionLabel index={index}>What we do</SectionLabel>
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 id="solutions-title" className="t-h2">
                Engineered for
                <br />
                how air moves.
              </h2>
              <p className="t-body mt-6 max-w-md">
                Six disciplines under one engineering team — so ventilation, conditioning,
                purification, controls, protection and storage are designed to work together.
              </p>
              <div className="solution-plate mt-10 hidden lg:block" aria-hidden="true">
                {disciplines.map((d, i) => (
                  <div
                    key={d.slug}
                    className={cn("solution-plate-layer", i === active && "is-active")}
                  >
                    {d.image ? (
                      <img src={d.image} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <RackingDrawing label="Racking elevation" />
                    )}
                  </div>
                ))}
                <div className="solution-plate-meta">
                  <span>{disciplines[active]!.index} / 06</span>
                  <span>{disciplines[active]!.short}</span>
                </div>
                <span className="solution-plate-scan" key={active} />
              </div>
            </div>
          </div>

          <ul className="solution-list lg:col-span-7">
            {disciplines.map((d, i) => {
              const isActive = i === active;
              return (
                <li
                  key={d.slug}
                  className={cn("solution-row", isActive && "is-active")}
                  onMouseEnter={() => setActive(i)}
                >
                  <h3>
                    <button
                      type="button"
                      className="solution-row-head"
                      aria-expanded={isActive}
                      aria-controls={`sol-${d.slug}`}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                    >
                      <span className="solution-row-index">{d.index}</span>
                      <span className="solution-row-title">{d.title}</span>
                      <span className="solution-row-plus" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    id={`sol-${d.slug}`}
                    className="solution-row-body"
                    role="region"
                    aria-label={d.title}
                    inert={!isActive}
                  >
                    <div className="solution-row-body-inner">
                      <div className="solution-row-media lg:hidden">
                        {d.image ? (
                          <img src={d.image} alt={d.imageAlt} loading="lazy" decoding="async" />
                        ) : (
                          <RackingDrawing label="Racking elevation" />
                        )}
                      </div>
                      <p className="t-body max-w-xl">{d.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {d.capabilities.slice(0, 4).map((c) => (
                          <li key={c} className="chip">
                            {c}
                          </li>
                        ))}
                      </ul>
                      <AppLink
                        href={`/solutions/${d.slug}`}
                        className="text-link mt-7"
                        tabIndex={isActive ? 0 : -1}
                      >
                        <span>View {d.short.toLowerCase()} solutions</span>
                        <Arrow />
                      </AppLink>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-14 flex justify-end">
          <TextLink href="/solutions">All solutions</TextLink>
        </div>
      </div>
    </section>
  );
}

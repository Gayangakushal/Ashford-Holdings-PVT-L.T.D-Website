import type { ReactNode } from "react";
import { ButtonLink } from "@/components/site/Buttons";
import { site } from "@/data/site";

/** Final call to action with airflow lines converging on the actions. */
export function CTA({
  title = (
    <>
      Ready to engineer
      <br />
      better air?
    </>
  ),
  text = "Tell us about your facility, project or engineering requirement.",
  image = "/assets/hvac/stainless-centrifugal-fans.jpg",
}: {
  title?: ReactNode;
  text?: string;
  image?: string;
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta-media" aria-hidden="true">
        <img src={image} alt="" loading="lazy" decoding="async" />
      </div>
      <svg
        className="cta-flow"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {Array.from({ length: 9 }, (_, i) => {
          const y = 60 + i * 60;
          return (
            <path
              key={i}
              d={`M0 ${y} C 480 ${y}, 760 ${300 + (y - 300) * 0.25}, 1180 ${300 + (y - 300) * 0.08} L1440 300`}
              style={{ animationDelay: `${i * -0.7}s` }}
            />
          );
        })}
      </svg>
      <div className="container-x cta-inner">
        <p className="eyebrow">Start a project</p>
        <h2 id="cta-title" className="t-h1 mt-6">
          {title}
        </h2>
        <p className="t-lead mt-6 max-w-xl">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact#enquiry" variant="primary">
            Start a project
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            Talk to our engineers
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

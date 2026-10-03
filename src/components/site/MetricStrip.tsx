import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { disciplines } from "@/data/disciplines";
import { feedback } from "@/data/feedback";
import { industries } from "@/data/industries";
import { partnerCountries } from "@/data/site";

/** Counts come from verifiable lists currently used by the site. */
const metrics = [
  {
    value: disciplines.length,
    label: "Engineering disciplines",
    note: "Air, safety, controls & storage",
  },
  {
    value: industries.length,
    label: "Industry sectors",
    note: "Published by Ashford Holdings PVT L.T.D",
  },
  {
    value: feedback.length,
    label: "Published client stories",
    note: "Named feedback on sairt.com",
  },
  {
    value: partnerCountries.length,
    label: "Partner countries",
    note: partnerCountries.join(" · "),
  },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setValue(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1200);
          setValue(Math.round((1 - Math.pow(1 - t, 4)) * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <span ref={ref} aria-hidden="true">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export function MetricStrip() {
  return (
    <section className="metric-strip" aria-labelledby="metrics-title">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <SectionLabel index="02">On record</SectionLabel>
            <h2 id="metrics-title" className="t-h3 mt-8 max-w-md uppercase tracking-[-0.01em]">
              Engineering air
              <br />
              across industries
            </h2>
          </div>
          <dl className="metric-grid lg:col-span-7">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 90} className="metric">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="metric-value">
                    <span className="sr-only">{m.value}</span>
                    <CountUp to={m.value} />
                  </span>
                  <span className="metric-label">{m.label}</span>
                  <span className="t-tech mt-1 block">{m.note}</span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

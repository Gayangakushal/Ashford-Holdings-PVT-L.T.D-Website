import { useEffect, useRef } from "react";
import { ButtonLink } from "@/components/site/Buttons";
import { AirflowCanvas } from "@/components/site/home/AirflowCanvas";
import { disciplines } from "@/data/disciplines";
import { site } from "@/data/site";

/**
 * Full-screen hero. Real installation photograph (supplied ducted air distribution),
 * live airflow simulation, cursor light and restrained technical overlay.
 * Scroll progress drives a subtle image scale and headline drift — no scroll hijacking.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const fine = matchMedia("(pointer: fine)").matches;
    let raf = 0;
    let mx = 0.62;
    let my = 0.4;
    let tx = mx;
    let ty = my;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -rect.top / rect.height));
      el.style.setProperty("--hero-p", p.toFixed(4));
      mx += (tx - mx) * 0.08;
      my += (ty - my) * 0.08;
      el.style.setProperty("--mx", mx.toFixed(4));
      el.style.setProperty("--my", my.toFixed(4));
      if (Math.abs(tx - mx) > 0.001 || Math.abs(ty - my) > 0.001)
        raf = requestAnimationFrame(update);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = (e.clientY - rect.top) / rect.height;
      schedule();
    };
    window.addEventListener("scroll", schedule, { passive: true });
    if (fine) el.addEventListener("pointermove", onMove, { passive: true });
    schedule();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <picture>
          <source
            type="image/webp"
            srcSet="/assets/hvac/hero/ducted-air-distribution-640.webp 640w, /assets/hvac/hero/ducted-air-distribution-1280.webp 1280w"
            sizes="100vw"
          />
          <img
            src="/assets/hvac/ducted-air-distribution.jpg"
            alt=""
            width={1280}
            height={960}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-light" aria-hidden="true" />
      <AirflowCanvas />
      <div className="hero-grain" aria-hidden="true" />

      {/* Technical overlay */}
      <div className="hero-overlay container-x" aria-hidden="true">
        <span className="hero-corner tl" />
        <span className="hero-corner tr" />
        <span className="hero-corner bl" />
        <span className="hero-corner br" />
        <div className="hero-meta hero-meta-right">
          <span>Airflow field · simulated</span>
          <span>Supply → plant → space</span>
        </div>
        <div className="hero-focus">
          <span className="hero-focus-ring" />
          <span className="hero-focus-label">Air distribution</span>
        </div>
        <div className="hero-ruler" />
      </div>

      <div className="container-x hero-content">
        <p className="hero-kicker">
          <span className="hero-kicker-dot" aria-hidden="true" />
          {site.name} <span className="text-steel">/ {site.discipline}</span>
        </p>
        <h1 id="hero-title" className="hero-title t-display">
          <span className="hero-line">
            <span>Engineered air.</span>
          </span>
          <span className="hero-line">
            <span className="text-mist">Controlled environments.</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-lede">
            Ventilation, air conditioning, purification, BMS and fire &amp; gas suppression —
            designed, supplied and installed for factories, commercial buildings and industrial
            facilities across Sri Lanka.
          </p>
          <div className="hero-ctas">
            <ButtonLink href="/solutions" variant="primary">
              Explore solutions
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start a project
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="hero-strip" aria-hidden="true">
        <div className="container-x hero-strip-inner">
          {disciplines.map((d) => (
            <span key={d.slug}>
              <em>{d.index}</em>
              {d.short}
            </span>
          ))}
          <span className="hero-scroll">
            Scroll <i />
          </span>
        </div>
      </div>
    </section>
  );
}

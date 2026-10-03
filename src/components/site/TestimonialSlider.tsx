import { useEffect, useState, type KeyboardEvent } from "react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { carouselFeedback, type Feedback } from "@/data/feedback";

export function TestimonialSlider({
  index = "11",
  items = carouselFeedback,
}: {
  index?: string;
  items?: Feedback[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const total = items.length;
  const autoplay = total > 1 && !paused && !interacting && !focused && !reducedMotion;
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % total);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [autoplay, total, active]);
  const go = (next: number) => setActive((next + total) % total);
  const onKey = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      go(active + (event.key === "ArrowRight" ? 1 : -1));
    }
  };
  if (!total) return null;
  const visible =
    total === 1 ? [items[0]!] : [items[active % total]!, items[(active + 1) % total]!];
  return (
    <section className="section-y feedback" aria-labelledby="feedback-title">
      <div className="container-x">
        <SectionLabel index={index}>Client feedback</SectionLabel>
        <div className="client-feedback-layout">
          <div className="client-feedback-intro">
            <h2 id="feedback-title" className="t-h2">
              What Our
              <br />
              Clients Say
            </h2>
            <p className="t-body mt-6">
              Client satisfaction is at the heart of everything we do. Hear what our clients have to
              say about working with us, from the design and installation to the support that
              follows.
            </p>
          </div>
          <div
            className="client-feedback-carousel"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
            onKeyDown={onKey}
            onMouseEnter={() => setInteracting(true)}
            onMouseLeave={() => setInteracting(false)}
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
            }}
          >
            <div className="client-feedback-cards" aria-live={autoplay ? "off" : "polite"} aria-atomic="true">
              {visible.map((item, position) => (
                <figure
                  key={`${active}-${item.client}`}
                  className={`client-review-card${position === 1 ? " client-review-secondary" : ""}`}
                  aria-roledescription="slide"
                  aria-label={`${((active + position) % total) + 1} of ${total}`}
                >
                  <blockquote>
                    <p>{item.quote}</p>
                  </blockquote>
                  <figcaption>
                    <span className="client-review-logo">
                      <img
                        src={item.logo}
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                    <span className="client-review-name">{item.client}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            {total > 1 && (
              <div className="client-feedback-navigation">
                {!reducedMotion && (
                  <button type="button" className="client-feedback-autoplay"
                    onClick={() => setPaused((current) => !current)}
                    aria-label={paused ? "Start automatic feedback slides" : "Pause automatic feedback slides"}>
                    {paused ? "Play" : "Pause"}
                  </button>
                )}
                <button
                  type="button"
                  className="client-feedback-arrow"
                  onClick={() => go(active - 1)}
                  aria-label="Previous feedback"
                >
                  ←
                </button>
                <div className="client-feedback-dots" aria-label="Choose client feedback">
                  {items.map((item, i) => (
                    <button
                      type="button"
                      key={item.client}
                      className={`client-feedback-dot${i === active ? " is-active" : ""}`}
                      onClick={() => go(i)}
                      aria-label={`Show feedback from ${item.client}`}
                      aria-current={i === active ? "true" : undefined}
                    >
                      <span />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="client-feedback-arrow"
                  onClick={() => go(active + 1)}
                  aria-label="Next feedback"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

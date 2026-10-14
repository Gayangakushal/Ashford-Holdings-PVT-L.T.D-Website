import { useEffect, useId, useRef, useState, type CSSProperties } from "react";

const circuits = [
  "M 426 222 C 425 292 419 389 372 422 C 322 457 161 459 126 420 C 99 390 109 288 134 252 C 164 211 268 203 369 213 C 394 215 418 216 426 222 Z",
  "M 443 224 C 442 300 443 388 405 423 C 375 451 202 445 167 408 C 147 387 149 303 172 275 C 202 239 302 226 384 221 C 415 219 437 218 443 224 Z",
  "M 474 222 C 475 292 481 389 528 422 C 578 457 739 459 774 420 C 801 390 791 288 766 252 C 736 211 632 203 531 213 C 506 215 482 216 474 222 Z",
  "M 457 224 C 458 300 457 388 495 423 C 525 451 698 445 733 408 C 753 387 751 303 728 275 C 698 239 598 226 516 221 C 485 219 463 218 457 224 Z",
];

/** Illustrative recirculation, not a calculated CFD or performance model. */
export function HvlsAirflow({
  active = true,
  compact = false,
}: {
  active?: boolean;
  compact?: boolean;
}) {
  const id = useId().replaceAll(":", "");
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry?.isIntersecting ?? false),
      {
        threshold: 0.12,
      },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const running = active && inView && visible && !reducedMotion && !paused;
  return (
    <div
      ref={ref}
      className={`hvls-airflow${compact ? " is-compact" : ""}`}
      data-running={running}
      data-reduced-motion={reducedMotion}
      style={{ "--fan-period": `${2.4 / speed}s` } as CSSProperties}
    >
      <div className="hvls-airflow-topline">
        <span>HVLS / Air circulation</span>
        <span className="hvls-airflow-status">
          {reducedMotion ? "Airflow schematic" : paused ? "Paused" : "Continuous circulation"}
        </span>
      </div>
      <svg viewBox="0 0 900 540" role="img" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>HVLS ceiling fan airflow in a building cross-section</title>
        <desc id={`${id}-description`}>
          Air moves down from the central ceiling fan, spreads outward across the floor, rises along
          both sides and returns towards the fan.
        </desc>
        <defs>
          <linearGradient id={`${id}-air`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#b7ecff" stopOpacity="0.18" />
            <stop offset="0.6" stopColor="#69d9f7" stopOpacity="0.7" />
            <stop offset="1" stopColor="#47bfea" stopOpacity="0.32" />
          </linearGradient>
          <radialGradient id={`${id}-floor`}>
            <stop stopColor="#67dcff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#67dcff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}-blade`}>
            <stop stopColor="#e9f3f8" />
            <stop offset="1" stopColor="#748b9a" />
          </linearGradient>
          <pattern id={`${id}-grid`} width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M30 0H0V30"
              fill="none"
              stroke="#9fb8c9"
              strokeOpacity="0.045"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="900" height="540" fill={`url(#${id}-grid)`} />
        <ellipse cx="450" cy="450" rx="345" ry="43" fill={`url(#${id}-floor)`} />
        <g className="hvls-architecture" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M75 470V195L450 72L825 195V470 M75 195H825 M95 195L450 93L805 195 M65 470H835"
            strokeWidth="2"
          />
          <path d="M95 470V201 M805 470V201 M75 217H95 M75 252H95 M75 287H95 M75 322H95 M75 357H95 M75 392H95 M75 427H95 M805 217H825 M805 252H825 M805 287H825 M805 322H825 M805 357H825 M805 392H825 M805 427H825" />
          {Array.from({ length: 12 }, (_, i) => {
            const x = 100 + i * 29;
            const y = 195 - ((x - 75) * 123) / 375;
            return (
              <path
                key={i}
                d={`M${x} 195V${y}L${x + 29} 195 M${900 - x} 195V${y}L${871 - x} 195`}
                strokeOpacity="0.55"
              />
            );
          })}
          <path
            d="M250 195V470 M650 195V470 M450 93V181 M95 338H805 M95 403H805"
            strokeOpacity="0.24"
          />
          <path
            d="M313 470V431H355V470 M545 470V431H587V470 M364 470V442H399V470 M501 470V442H536V470"
            strokeOpacity="0.38"
          />
          <path d="M90 476H810" strokeOpacity="0.2" />
        </g>
        <g fill="none" stroke={`url(#${id}-air)`} strokeWidth="2.2">
          {circuits.map((d, i) => (
            <path key={d} d={d} strokeOpacity={i % 2 ? 0.48 : 0.85} />
          ))}
        </g>
        <g
          className="hvls-air-curtain"
          fill="none"
          stroke="#6edbf7"
          strokeOpacity="0.22"
          strokeWidth="1"
        >
          <path d="M407 232C402 305 386 364 350 395 M493 232C498 305 514 364 550 395 M434 233L431 400 M466 233L469 400" />
        </g>
        <g fill="#78dcfa" opacity="0.8">
          <path d="M425 320l-5-10 5 3 5-3Z M475 320l-5-10 5 3 5-3Z M224 446l11-5-3 5 3 5Z M676 446l-11-5 3 5-3 5Z M110 338l-5 10 5-3 5 3Z M790 338l-5 10 5-3 5 3Z M274 210l-10-5 3 5-3 5Z M626 210l10-5-3 5 3 5Z" />
        </g>
        {circuits.map((d, circuit) => (
          <g key={d}>
            {Array.from({ length: 7 }, (_, particle) => (
              <circle
                key={particle}
                className="hvls-particle"
                r={particle % 3 === 0 ? 2.7 : 1.7}
                fill="#9ae9ff"
                style={{
                  offsetPath: `path("${d}")`,
                  animationDuration: `${(7.5 + circuit * 0.65) / speed}s`,
                  animationDelay: `${(-(particle / 7) * (7.5 + circuit * 0.65)) / speed}s`,
                }}
              />
            ))}
            <path
              className="hvls-flow-arrow"
              d="M7 0L-4-3L-2 0L-4 3Z"
              fill="#88e2ff"
              style={{
                offsetPath: `path("${d}")`,
                animationDuration: `${(9 + circuit * 0.6) / speed}s`,
                animationDelay: `${-circuit * 1.8}s`,
              }}
            />
          </g>
        ))}
        <g className="hvls-fan">
          <path d="M450 95V183" stroke="#93a5b3" strokeWidth="4" />
          <path d="M360 196L450 146L540 196" fill="none" stroke="#6a7e8b" strokeWidth="1" />
          <rect x="440" y="181" width="20" height="27" rx="4" fill="#303f4a" stroke="#93a5b3" />
          <g transform="translate(450 212) scale(1 .25)">
            <g className="hvls-rotor" fill={`url(#${id}-blade)`} stroke="#b9ccd6" strokeWidth="0.6">
              {Array.from({ length: 6 }, (_, i) => (
                <path key={i} transform={`rotate(${i * 60})`} d="M8-5L100-11Q106-10 105-3L17 8Z" />
              ))}
            </g>
          </g>
          <ellipse cx="450" cy="212" rx="13" ry="5" fill="#c3d9e3" />
          <path d="M442 215Q450 227 458 215" fill="#435f71" />
        </g>
        <g className="hvls-diagram-labels">
          <text x="450" y="508" textAnchor="middle">
            DOWNFLOW
          </text>
          <text x="168" y="508" textAnchor="middle">
            FLOOR SPREAD
          </text>
          <text x="732" y="508" textAnchor="middle">
            RETURN AIR
          </text>
        </g>
      </svg>
      {!compact && (
        <div className="hvls-airflow-controls">
          <span className="hvls-airflow-note">Illustrative airflow</span>
          {!reducedMotion && (
            <>
              <label htmlFor={`${id}-speed`}>
                Airflow{" "}
                <input
                  id={`${id}-speed`}
                  type="range"
                  min="0.65"
                  max="1.6"
                  step="0.05"
                  value={speed}
                  onChange={(event) => setSpeed(Number(event.target.value))}
                  aria-label="Illustrative airflow speed"
                />
              </label>
              <button
                type="button"
                onClick={() => setPaused((value) => !value)}
                aria-pressed={paused}
              >
                {paused ? "Resume" : "Pause"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

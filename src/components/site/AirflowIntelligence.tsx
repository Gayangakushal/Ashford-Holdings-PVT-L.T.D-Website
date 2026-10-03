import { useEffect, useRef, useState } from "react";
import { TextLink } from "@/components/site/Buttons";
import { SectionHeading } from "@/components/site/SectionLabel";
import { cn } from "@/lib/utils";

/**
 * Signature section: a building cross-section that walks the air path —
 * intake, filtration, conditioning, distribution, monitoring, extraction.
 * Stages auto-advance while in view (paused on hover/focus, off for reduced motion)
 * and can be selected directly.
 */
const stages = [
  {
    id: "intake",
    code: "A",
    title: "Air intake",
    text: "Outdoor air is drawn through louvred intakes positioned clear of discharge points and contamination sources.",
    discipline: { label: "Ventilation", href: "/solutions/air-conditioning-ventilation" },
  },
  {
    id: "filtration",
    code: "B",
    title: "Filtration",
    text: "Particulates, odours and microbes are removed — HEPA, UV-C, activated carbon or electrostatic stages, selected for the application.",
    discipline: { label: "Purification", href: "/solutions/air-purification-filtration" },
  },
  {
    id: "temperature",
    code: "C",
    title: "Temperature control",
    text: "Coils and plant condition the air to the measured load — cooling, dehumidifying or evaporatively cooling it.",
    discipline: { label: "Air conditioning", href: "/solutions/air-conditioning-ventilation" },
  },
  {
    id: "distribution",
    code: "D",
    title: "Air distribution",
    text: "Ductwork and terminals deliver air at the right volume, velocity and noise level to every zone.",
    discipline: { label: "Ventilation", href: "/solutions/air-conditioning-ventilation" },
  },
  {
    id: "monitoring",
    code: "E",
    title: "Monitoring",
    text: "BMS sensors track temperature, humidity and air quality and adjust plant in real time.",
    discipline: { label: "BMS & air quality", href: "/solutions/bms-air-quality" },
  },
  {
    id: "extraction",
    code: "F",
    title: "Extraction",
    text: "Heat, fume and dust are captured at source and discharged clear of the building.",
    discipline: { label: "Dust extraction", href: "/solutions/dust-extraction" },
  },
] as const;

type StageId = (typeof stages)[number]["id"];

export function AirflowIntelligence({ index = "04" }: { index?: string }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(Boolean(e?.isIntersecting)), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % stages.length), 3800);
    return () => window.clearInterval(t);
  }, [inView, paused]);

  const stage = stages[active]!;

  return (
    <section
      ref={ref}
      className="ai-section section-y"
      aria-labelledby="ai-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="tech-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHeading
          index={index}
          label="Airflow intelligence"
          id="ai-title"
          title={
            <>
              Every system follows <span className="text-steel">the air.</span>
            </>
          }
          intro="Ashford Holdings PVT L.T.D engineers the complete air path — not a single piece of equipment. Follow it through a building, stage by stage."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <ol className="ai-steps lg:col-span-4" aria-label="Air path stages">
            {stages.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  className={cn("ai-step", i === active && "is-active")}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  <span className="ai-step-code">{s.code}</span>
                  <span className="ai-step-title">{s.title}</span>
                  <span className="ai-step-bar" aria-hidden="true">
                    <span key={i === active && !paused && inView ? `run-${active}` : "idle"} />
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-8">
            <figure className="ai-figure">
              <AirPathDiagram active={stage.id} />
              <figcaption className="sr-only">
                Cross-section of a building showing air entering through an intake, passing
                filtration and conditioning in rooftop plant, being distributed to two floors,
                monitored by sensors and extracted through a rooftop fan.
              </figcaption>
            </figure>
            <div className="ai-readout" aria-live="polite">
              <div>
                <p className="t-tech">
                  Stage {stage.code} · {String(active + 1).padStart(2, "0")} / 06
                </p>
                <h3 className="t-h3 mt-3">{stage.title}</h3>
              </div>
              <p className="t-body max-w-md">{stage.text}</p>
              <TextLink href={stage.discipline.href}>{stage.discipline.label}</TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AirPathDiagram({ active }: { active: StageId }) {
  const diffusersTop = [300, 440, 580];
  const diffusersRight = [800];
  return (
    <svg viewBox="0 0 1200 640" className="ai-svg" data-active={active} role="presentation">
      <defs>
        <marker
          id="ai-arrow"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M0 0L10 5L0 10z" fill="currentColor" />
        </marker>
        <pattern
          id="ai-hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
        </pattern>
      </defs>

      {/* Ground + building shell */}
      <g className="ai-structure">
        <line x1="20" y1="600" x2="1180" y2="600" />
        <rect x="160" y="220" width="880" height="380" fill="url(#ai-hatch)" />
        <rect x="160" y="220" width="880" height="380" fill="none" />
        <line x1="160" y1="410" x2="1040" y2="410" />
        <text x="176" y="398" className="ai-dim">
          LEVEL 02
        </text>
        <text x="176" y="588" className="ai-dim">
          LEVEL 01
        </text>
        {/* dimension ticks */}
        {Array.from({ length: 23 }, (_, i) => (
          <line key={i} x1={160 + i * 40} y1="612" x2={160 + i * 40} y2={i % 5 === 0 ? 624 : 618} />
        ))}
      </g>

      {/* A · Intake */}
      <g data-stage="intake" className="ai-group">
        <rect x="70" y="146" width="64" height="64" className="ai-box" />
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="76"
            y1={156 + i * 11}
            x2="128"
            y2={152 + i * 11}
            className="ai-detail"
          />
        ))}
        <path d="M0 178 H66" className="ai-flow" markerEnd="url(#ai-arrow)" />
        <path d="M0 160 H66" className="ai-flow ai-flow-soft" />
        <path d="M0 196 H66" className="ai-flow ai-flow-soft" />
        <path d="M134 178 H230" className="ai-flow" />
        <AiTag x={70} y={130} code="A" label="Intake" />
      </g>

      {/* B · Filtration + C · Temperature (AHU) */}
      <g data-stage="filtration" className="ai-group">
        <rect x="230" y="128" width="140" height="80" className="ai-box" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${250 + i * 20} 136 l8 32 l-8 32`} className="ai-detail" fill="none" />
        ))}
        <path d="M232 178 H368" className="ai-flow" />
        <AiTag x={230} y={112} code="B" label="Filtration" />
      </g>
      <g data-stage="temperature" className="ai-group">
        <rect x="370" y="128" width="140" height="80" className="ai-box" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={i}
            x1={384 + i * 18}
            y1="138"
            x2={384 + i * 18}
            y2="198"
            className="ai-detail"
          />
        ))}
        <path d="M372 178 H508" className="ai-flow" />
        <AiTag x={370} y={112} code="C" label="Conditioning" />
      </g>

      {/* D · Distribution */}
      <g data-stage="distribution" className="ai-group">
        <rect x="510" y="128" width="110" height="80" className="ai-box" />
        <circle cx="565" cy="168" r="26" className="ai-detail" fill="none" />
        <circle cx="565" cy="168" r="4" className="ai-node" />
        <path d="M512 178 H700 V560" className="ai-flow" />
        <path d="M700 262 H250" className="ai-flow" />
        <path d="M700 262 H860" className="ai-flow" />
        <path d="M700 452 H250" className="ai-flow" />
        <path d="M700 452 H860" className="ai-flow" />
        <path d="M684 210 V560 M716 210 V560" className="ai-duct" />
        {[...diffusersTop, ...diffusersRight].map((x) => (
          <g key={`t${x}`}>
            <path d={`M${x - 16} 270 h32 l-8 8 h-16 z`} className="ai-box" />
            <path
              d={`M${x} 282 q-14 40 -4 78`}
              className="ai-flow ai-flow-soft"
              markerEnd="url(#ai-arrow)"
            />
          </g>
        ))}
        {[...diffusersTop, ...diffusersRight].map((x) => (
          <g key={`b${x}`}>
            <path d={`M${x - 16} 460 h32 l-8 8 h-16 z`} className="ai-box" />
            <path
              d={`M${x} 472 q14 40 4 78`}
              className="ai-flow ai-flow-soft"
              markerEnd="url(#ai-arrow)"
            />
          </g>
        ))}
        <AiTag x={510} y={112} code="D" label="Distribution" />
      </g>

      {/* E · Monitoring (BMS) */}
      <g data-stage="monitoring" className="ai-group">
        <rect x="196" y="500" width="54" height="70" className="ai-box" />
        <line x1="206" y1="514" x2="240" y2="514" className="ai-detail" />
        <line x1="206" y1="526" x2="232" y2="526" className="ai-detail" />
        {[
          [380, 340],
          [540, 330],
          [820, 350],
          [380, 530],
          [600, 540],
          [840, 530],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <path d={`M223 500 V${y! < 410 ? 392 : 488} H${x}  V${y}`} className="ai-signal" />
            <circle cx={x} cy={y} r="5" className="ai-node" />
            <circle cx={x} cy={y} r="12" className="ai-pulse" />
          </g>
        ))}
        <AiTag x={196} y={484} code="E" label="BMS" />
      </g>

      {/* F · Extraction */}
      <g data-stage="extraction" className="ai-group">
        <path d="M972 210 V540 M1004 210 V540" className="ai-duct" />
        <path d="M900 300 H988 V176" className="ai-flow" />
        <path d="M900 490 H988 V300" className="ai-flow" />
        <rect x="944" y="128" width="88" height="80" className="ai-box" />
        <circle cx="988" cy="168" r="24" className="ai-detail" fill="none" />
        <path d="M976 156 l24 24 M1000 156 l-24 24" className="ai-detail" />
        <path
          d="M1032 168 H1110 Q1150 168 1168 112"
          className="ai-flow"
          markerEnd="url(#ai-arrow)"
        />
        {[300, 490].map((y) => (
          <rect key={y} x="884" y={y - 8} width="16" height="16" className="ai-box" />
        ))}
        <AiTag x={944} y={112} code="F" label="Extraction" />
      </g>
    </svg>
  );
}

function AiTag({ x, y, code, label }: { x: number; y: number; code: string; label: string }) {
  return (
    <g className="ai-tag">
      <rect x={x} y={y - 12} width="16" height="16" />
      <text x={x + 8} y={y} textAnchor="middle" className="ai-tag-code">
        {code}
      </text>
      <text x={x + 24} y={y} className="ai-tag-label">
        {label.toUpperCase()}
      </text>
    </g>
  );
}

import { cn } from "@/lib/utils";

/**
 * Engineering elevation drawing used for storage projects and the racking discipline.
 * No project photography was supplied for racking, so a drawing is used instead of
 * an unrelated photograph. `height` adds a dimension callout only when it is stated
 * in the source (e.g. "40 ft").
 */
export function RackingDrawing({
  className,
  height,
  label = "Elevation — racking bay",
}: {
  className?: string | undefined;
  height?: string | undefined;
  label?: string;
}) {
  const bays = 5;
  const levels = 6;
  const x0 = 120;
  const y0 = 70;
  const bw = 150;
  const lh = 62;
  const totalW = bays * bw;
  const totalH = levels * lh;
  return (
    <svg
      viewBox="0 0 1000 560"
      className={cn("drawing", className)}
      role="img"
      aria-label={`Engineering drawing: ${label}${height ? `, ${height} high` : ""}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="1000" height="560" className="drawing-bg" />
      <g className="drawing-grid">
        {Array.from({ length: 26 }, (_, i) => (
          <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="560" />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 40} x2="1000" y2={i * 40} />
        ))}
      </g>
      {/* floor */}
      <line x1="60" y1={y0 + totalH} x2="940" y2={y0 + totalH} className="drawing-strong" />
      {/* uprights */}
      {Array.from({ length: bays + 1 }, (_, i) => (
        <g key={`u${i}`}>
          <line
            x1={x0 + i * bw}
            y1={y0}
            x2={x0 + i * bw}
            y2={y0 + totalH}
            className="drawing-strong"
          />
          <line
            x1={x0 + i * bw + 8}
            y1={y0}
            x2={x0 + i * bw + 8}
            y2={y0 + totalH}
            className="drawing-line"
          />
        </g>
      ))}
      {/* beams + pallets */}
      {Array.from({ length: levels }, (_, l) => (
        <g key={`l${l}`}>
          <line
            x1={x0}
            y1={y0 + l * lh + lh}
            x2={x0 + totalW}
            y2={y0 + l * lh + lh}
            className="drawing-accent"
          />
          {Array.from({ length: bays }, (_, b) =>
            (l * 7 + b * 3) % 5 !== 0 ? (
              <g key={`p${b}`}>
                <rect
                  x={x0 + b * bw + 20}
                  y={y0 + l * lh + 14}
                  width={bw - 32}
                  height={lh - 20}
                  className="drawing-load"
                />
                <line
                  x1={x0 + b * bw + 20}
                  y1={y0 + l * lh + lh - 10}
                  x2={x0 + b * bw + bw - 12}
                  y2={y0 + l * lh + lh - 10}
                  className="drawing-line"
                />
              </g>
            ) : null,
          )}
        </g>
      ))}
      {/* dimension */}
      <g className="drawing-dim">
        <line x1="80" y1={y0} x2="80" y2={y0 + totalH} />
        <line x1="72" y1={y0} x2="88" y2={y0} />
        <line x1="72" y1={y0 + totalH} x2="88" y2={y0 + totalH} />
        {height ? (
          <text
            x="64"
            y={y0 + totalH / 2}
            transform={`rotate(-90 64 ${y0 + totalH / 2})`}
            textAnchor="middle"
          >
            {height.toUpperCase()}
          </text>
        ) : null}
        <line x1={x0} y1={y0 + totalH + 34} x2={x0 + totalW} y2={y0 + totalH + 34} />
        <text x={x0 + totalW / 2} y={y0 + totalH + 54} textAnchor="middle">
          {bays} BAYS · {levels} BEAM LEVELS (ILLUSTRATIVE)
        </text>
      </g>
      <text x="940" y="40" textAnchor="end" className="drawing-title">
        {label.toUpperCase()}
      </text>
    </svg>
  );
}

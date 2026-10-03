import type { CSSProperties } from "react";
import { SectionLabel } from "@/components/site/SectionLabel";
import { clientLogos, type ClientLogoData } from "@/data/client-logos";

/**
 * Client trust wall. Only original logo artwork supplied with the project is used.
 * Each track holds two identical sets and translates by exactly one set width,
 * so the loop has no visible jump. Duplicates are hidden from assistive tech.
 * Reduced motion: no animation, duplicates removed, logos wrap.
 */
function Track({
  logos,
  reverse = false,
  label,
}: {
  logos: readonly ClientLogoData[];
  reverse?: boolean;
  label: string;
}) {
  return (
    <div className="marquee" role="group" aria-label={label}>
      <div className={reverse ? "marquee-track is-reverse" : "marquee-track"}
        style={{ animationDuration: `${logos.length * 8}s` }}>
        {[false, true].map((dup) => (
          <ul key={String(dup)} className="marquee-set" aria-hidden={dup || undefined}>
            {logos.map((logo) => (
              <li key={logo.src} className="marquee-item" title={logo.name}>
                <img
                  src={logo.src}
                  alt={dup ? "" : logo.name}
                  width={logo.width}
                  height={logo.height}
                  loading="lazy"
                  decoding="async"
                  style={{ "--w": `${Math.min(120, logo.width)}px` } as CSSProperties}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee({ index = "12" }: { index?: string }) {
  const rowSize = Math.ceil(clientLogos.length / 4);
  return (
    <section className="logos" aria-labelledby="logos-title">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={index} rule={false}>
              Clients
            </SectionLabel>
            <h2 id="logos-title" className="t-h3 mt-6 max-w-lg">
              Glimpse of our few clients.
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-px">
        {Array.from({ length: 4 }, (_, row) => (
          <Track key={row} logos={clientLogos.slice(row * rowSize, (row + 1) * rowSize)}
            reverse={row % 2 === 1} label={`Clients, row ${row + 1}`} />
        ))}
      </div>
    </section>
  );
}

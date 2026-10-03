import { useEffect, useRef } from "react";

/**
 * Airflow simulation for the hero.
 *
 * Streamlines enter from the left, converge through a focal "plant" zone (the
 * HVAC equipment in the photograph), then spread back out through the space.
 * Each particle follows an analytic streamline (lane offset × envelope), so the
 * motion reads as directed flow rather than random drift. The cursor locally
 * deflects the flow. Reduced motion renders a single static frame of streamlines.
 */

type Particle = {
  x: number;
  lane: number;
  speed: number;
  phase: number;
  warm: boolean;
  life: number;
};

export function AirflowCanvas({
  focusX = 0.66,
  focusY = 0.44,
}: {
  focusX?: number;
  focusY?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = matchMedia("(pointer: coarse)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, active: false, sx: -9999, sy: -9999 };

    const count = () => {
      const area = (w * h) / (1440 * 900);
      return Math.round((coarse || w < 768 ? 70 : 240) * Math.min(1.3, Math.max(0.5, area)));
    };

    const spawn = (initial: boolean): Particle => ({
      x: initial ? Math.random() * 1.1 - 0.05 : -0.05 - Math.random() * 0.1,
      lane: (Math.random() * 2 - 1) * (0.6 + Math.random() * 0.4),
      speed: 0.0009 + Math.random() * 0.0011,
      phase: Math.random() * Math.PI * 2,
      warm: Math.random() < 0.12,
      life: 0,
    });

    // Envelope: wide at the intake, pinched at the plant, opening again into the space.
    const envelope = (x: number) => {
      const d = x - focusX;
      const pinch = Math.exp(-(d * d) / 0.018);
      return (0.36 + (x > focusX ? 0.1 : 0)) * (1 - 0.82 * pinch);
    };
    // Centreline drifts gently down toward the plant and slightly up after it.
    const centre = (x: number) => focusY + 0.08 * Math.cos((x - focusX) * 2.6) - 0.06;

    const pos = (p: Particle, t: number) => {
      const y =
        centre(p.x) + p.lane * envelope(p.x) + 0.012 * Math.sin(p.phase + t * 0.0012 + p.x * 9);
      let px = p.x * w;
      let py = y * h;
      if (pointer.active) {
        const dx = px - pointer.sx;
        const dy = py - pointer.sy;
        const r2 = dx * dx + dy * dy;
        const R = Math.min(w, h) * 0.16;
        const f = Math.exp(-r2 / (R * R));
        py += (dy >= 0 ? 1 : -1) * f * R * 0.45;
        px += f * 6;
      }
      return [px, py] as const;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = Array.from({ length: count() }, () => spawn(true));
      if (reduced) drawStatic();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      for (let i = 0; i < 22; i++) {
        const lane = -1 + (i / 21) * 2;
        ctx.beginPath();
        for (let s = 0; s <= 80; s++) {
          const x = s / 80;
          const y = centre(x) + lane * envelope(x);
          if (s === 0) ctx.moveTo(x * w, y * h);
          else ctx.lineTo(x * w, y * h);
        }
        ctx.strokeStyle = i % 7 === 3 ? "rgba(201,180,138,0.22)" : "rgba(244,244,241,0.08)";
        ctx.stroke();
      }
    };

    const prev = new Map<Particle, readonly [number, number]>();

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      // Smooth pointer
      pointer.sx += (pointer.x - pointer.sx) * 0.12;
      pointer.sy += (pointer.y - pointer.sy) * 0.12;

      // Fade previous frame to leave short trails.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.085)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1;
      ctx.lineCap = "round";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;
        const a = prev.get(p) ?? pos(p, t);
        // Particles accelerate through the pinch, as flow does through a contraction.
        const env = envelope(p.x);
        p.x += p.speed * (0.7 + 0.3 / Math.max(env / 0.36, 0.25));
        p.life += 1;
        const b = pos(p, t);
        const fadeIn = Math.min(1, p.life / 40);
        const fadeOut = p.x > 0.92 ? Math.max(0, (1.05 - p.x) / 0.13) : 1;
        const alpha = fadeIn * fadeOut;
        ctx.strokeStyle = p.warm
          ? `rgba(201,180,138,${0.55 * alpha})`
          : `rgba(244,244,241,${0.32 * alpha})`;
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
        prev.set(p, b);
        if (p.x > 1.05) {
          prev.delete(p);
          particles[i] = spawn(false);
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (!pointer.active) {
        pointer.sx = pointer.x;
        pointer.sy = pointer.y;
      }
      pointer.active = pointer.y > 0 && pointer.y < rect.height;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting) && !document.hidden;
    });
    io.observe(canvas);
    const onVis = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVis);

    if (!reduced) {
      raf = requestAnimationFrame(frame);
      if (!coarse) {
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [focusX, focusY]);

  return <canvas ref={ref} className="airflow-canvas" aria-hidden="true" />;
}

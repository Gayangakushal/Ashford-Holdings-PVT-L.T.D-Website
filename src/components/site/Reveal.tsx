import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll reveal. Content is only hidden when JavaScript is running (html.js), so the
 * page stays fully readable without JS. Reduced-motion users see content immediately.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  variant = "rise",
  as: Tag = "div",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "fade" | "clip";
  as?: "div" | "section" | "li" | "article" | "figure";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset["shown"] = "";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.dataset["shown"] = "";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Index + label, e.g. "04 — Airflow intelligence", with a hairline that runs to the edge. */
export function SectionLabel({
  index,
  children,
  className,
  rule = true,
}: {
  index?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
  rule?: boolean;
}) {
  return (
    <div className={cn("section-label", className)}>
      {index ? <span className="section-label-index">{index}</span> : null}
      <span className="eyebrow">{children}</span>
      {rule ? <span aria-hidden="true" className="section-label-rule" /> : null}
    </div>
  );
}

/** Standard section heading block. */
export function SectionHeading({
  index,
  label,
  title,
  intro,
  className,
  as: Tag = "h2",
  id,
}: {
  index?: string | undefined;
  label: string;
  title: ReactNode;
  intro?: ReactNode | undefined;
  className?: string | undefined;
  as?: "h1" | "h2" | "h3";
  id?: string | undefined;
}) {
  return (
    <div className={cn("grid gap-8 lg:grid-cols-12 lg:gap-10", className)}>
      <SectionLabel index={index} className="lg:col-span-12">
        {label}
      </SectionLabel>
      <Tag id={id} className="t-h2 lg:col-span-7">
        {title}
      </Tag>
      {intro ? <div className="t-lead self-end lg:col-span-4 lg:col-start-9">{intro}</div> : null}
    </div>
  );
}

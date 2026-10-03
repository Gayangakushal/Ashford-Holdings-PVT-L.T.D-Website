import type { ReactNode } from "react";
import { AppLink } from "@/components/site/Buttons";

export type Crumb = { label: string; href?: string };

/** Inner-page hero. Shares the homepage hero's language at a calmer scale. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  crumbs = [],
  meta,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode | undefined;
  image?: string | undefined;
  imageAlt?: string;
  crumbs?: Crumb[];
  meta?: { label: string; value: string }[] | undefined;
  children?: ReactNode | undefined;
}) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      {image ? (
        <div className="page-hero-media">
          <img src={image} alt={imageAlt} fetchPriority="high" decoding="async" />
        </div>
      ) : null}
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="tech-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="container-x page-hero-inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <AppLink href="/">Home</AppLink>
            </li>
            {crumbs.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <AppLink href={c.href}>{c.label}</AppLink>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow mt-10 lg:mt-14">{eyebrow}</p>
        <h1 id="page-title" className="t-h1 mt-6 max-w-5xl">
          {title}
        </h1>
        {intro ? <div className="t-lead mt-8 max-w-2xl">{intro}</div> : null}
        {children ? <div className="mt-10">{children}</div> : null}
        {meta && meta.length ? (
          <dl className="page-hero-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="t-tech">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink, Arrow, TextLink } from "@/components/site/Buttons";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { ProjectVisual } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { disciplineBySlug } from "@/data/disciplines";
import { feedbackForProject, projectBySlug, projects } from "@/data/projects";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    if (!projectBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const p = projectBySlug(params.slug);
    if (!p) return { meta: [{ title: "Project not found | Ashford Holdings PVT L.T.D" }] };
    return seo({
      title: `${p.title} — ${p.client}`,
      description: p.summary,
      path: `/projects/${p.slug}`,
      image: p.image?.src,
    });
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const p = projectBySlug(slug);
  if (!p) return null;
  const quote = feedbackForProject(p.slug);
  const discipline = disciplineBySlug(p.disciplineSlug);
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length]!;

  return (
    <main id="main">
      <PageHero
        eyebrow={`Project P—${p.index}`}
        title={p.title}
        intro={p.summary}
        crumbs={[{ label: "Projects", href: "/projects" }, { label: p.client }]}
        meta={[
          { label: "Client", value: p.client },
          { label: "Industry", value: p.industry },
          { label: "Discipline", value: p.discipline },
          ...(p.location ? [{ label: "Location", value: p.location }] : []),
        ]}
      />

      <section className="section-y pt-0">
        <div className="container-x">
          <Reveal
            as="figure"
            variant="clip"
            className="feature-media mt-0"
            style={{ aspectRatio: "16 / 8" }}
          >
            <ProjectVisual project={p} />
            <figcaption className="feature-media-tag">
              <span>P—{p.index}</span>
              <span>
                {p.visual === "photo"
                  ? "Representative image — not the client site"
                  : "Engineering drawing — illustrative"}
              </span>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-x detail-grid">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Scope</SectionLabel>
            <ul className="feature-list mt-8">
              {p.scope.map((s) => (
                <li key={s} className="t-body">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel index="02">Outcome · as reported by the client</SectionLabel>
            <ul className="feature-list mt-8">
              {p.outcome.map((s) => (
                <li key={s} className="t-body">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {quote ? (
        <section className="section-y border-t border-line bg-carbon" aria-label="Client feedback">
          <div className="container-x">
            <SectionLabel index="03">Client feedback</SectionLabel>
            <figure className="mt-12 grid gap-10 lg:grid-cols-12">
              <span className="feedback-mark lg:col-span-1" aria-hidden="true">
                “
              </span>
              <blockquote className="lg:col-span-9">
                <p className="text-[clamp(1.5rem,1.05rem+1.9vw,2.75rem)] leading-[1.2] tracking-[-0.025em]">
                  {quote.quote}
                </p>
              </blockquote>
              <figcaption className="feedback-cite lg:col-span-9 lg:col-start-2">
                <span className="feedback-logo">
                  <img src={quote.logo} alt="" width={176} height={176} loading="lazy" />
                </span>
                <span className="feedback-client">{quote.client}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line">
        <div className="container-x flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
          {discipline ? (
            <TextLink href={`/solutions/${discipline.slug}`}>{discipline.title}</TextLink>
          ) : (
            <span />
          )}
          <AppLink
            href={`/projects/${next.slug}`}
            className="group flex items-center gap-6 text-right"
          >
            <span>
              <span className="t-tech block">Next project</span>
              <span className="t-h3 mt-2 block transition-colors group-hover:text-brass">
                {next.title}
              </span>
            </span>
            <Arrow className="h-3 w-7" />
          </AppLink>
        </div>
      </section>
      <CTA />
    </main>
  );
}

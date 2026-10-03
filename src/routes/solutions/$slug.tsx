import { createFileRoute, notFound } from "@tanstack/react-router";
import { ButtonLink, TextLink } from "@/components/site/Buttons";
import { ProductCard, SolutionCard } from "@/components/site/Cards";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { RackingDrawing } from "@/components/site/RackingDrawing";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading, SectionLabel } from "@/components/site/SectionLabel";
import { disciplineBySlug, disciplineForSystem, type Discipline } from "@/data/disciplines";
import { feedback } from "@/data/feedback";
import { solutionImages } from "@/data/media";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { solutionBySlug, solutions, type Solution } from "@/data/solutions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    if (!disciplineBySlug(params.slug) && !solutionBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const d = disciplineBySlug(params.slug);
    if (d)
      return seo({
        title: d.title,
        description: d.description,
        path: `/solutions/${d.slug}`,
        image: d.image || undefined,
      });
    const s = solutionBySlug(params.slug);
    if (s)
      return seo({
        title: s.title,
        description: s.summary,
        path: `/solutions/${s.slug}`,
        image: solutionImages[s.slug],
      });
    return { meta: [{ title: "Solution not found | Ashford Holdings PVT L.T.D" }] };
  },
  component: SolutionRoute,
});

function SolutionRoute() {
  const { slug } = Route.useParams();
  const d = disciplineBySlug(slug);
  if (d) return <DisciplinePage d={d} />;
  const s = solutionBySlug(slug);
  if (s) return <SystemPage s={s} />;
  return null;
}

function DisciplinePage({ d }: { d: Discipline }) {
  const systems = d.systems
    .map((slug) => solutionBySlug(slug))
    .filter((x): x is Solution => Boolean(x));
  const related = products.filter((p) => d.products.includes(p.slug));
  const relatedProjects = projects.filter((p) => p.disciplineSlug === d.slug);
  const quotes = feedback.filter((f) => relatedProjects.some((p) => p.slug === f.project));

  return (
    <main id="main">
      <PageHero
        eyebrow={`Solution ${d.index} / 06`}
        title={d.title}
        intro={d.description}
        image={d.image || undefined}
        imageAlt={d.imageAlt}
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: d.title }]}
      >
        <ButtonLink href="/contact#enquiry">Discuss a project</ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-x detail-grid">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Overview</SectionLabel>
            <p className="t-h3 mt-10">{d.statement}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="t-tech">Capabilities</p>
              <ul className="feature-list mt-4">
                {d.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="t-tech">Applications</p>
              <ul className="feature-list mt-4">
                {d.applications.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {d.schematic === "racking" ? (
          <div className="container-x mt-16">
            <Reveal
              variant="clip"
              as="figure"
              className="feature-media"
              style={{ aspectRatio: "16 / 8" }}
            >
              <RackingDrawing label="Racking elevation" />
            </Reveal>
          </div>
        ) : null}
      </section>

      {systems.length ? (
        <section
          className="section-y border-t border-line bg-carbon"
          aria-labelledby="systems-title"
        >
          <div className="container-x">
            <SectionHeading
              index="02"
              label="Systems"
              id="systems-title"
              title="Systems within this discipline."
            />
            <div className="card-grid mt-14">
              {systems.map((s) => (
                <SolutionCard key={s.slug} solution={s} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedProjects.length ? (
        <section className="section-y border-t border-line" aria-labelledby="projects-title">
          <div className="container-x">
            <SectionHeading
              index="03"
              label="Projects"
              id="projects-title"
              title="Delivered for clients."
            />
            <div className="projects-bento mt-14">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} size="md" />
              ))}
            </div>
            {quotes[0] ? (
              <figure className="quote-block mt-16 max-w-4xl">
                <blockquote>
                  <p>“{quotes[0].quote}”</p>
                </blockquote>
                <figcaption className="t-tech mt-5">— {quotes[0].client}</figcaption>
              </figure>
            ) : null}
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="section-y border-t border-line" aria-labelledby="equipment-title">
          <div className="container-x">
            <SectionHeading
              index="04"
              label="Equipment"
              id="equipment-title"
              title="Related equipment."
            />
            <div className="card-grid is-4 mt-14">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTA title={<>Discuss your {d.short.toLowerCase()} project.</>} />
    </main>
  );
}

function SystemPage({ s }: { s: Solution }) {
  const parent = disciplineForSystem(s.slug);
  const siblings = parent
    ? parent.systems
        .filter((x) => x !== s.slug)
        .slice(0, 3)
        .map((x) => solutionBySlug(x))
        .filter((x): x is Solution => Boolean(x))
    : solutions.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);

  return (
    <main id="main">
      <PageHero
        eyebrow={parent ? `${parent.title} · System` : s.category}
        title={s.title}
        intro={s.summary}
        image={solutionImages[s.slug]}
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          ...(parent ? [{ label: parent.short, href: `/solutions/${parent.slug}` }] : []),
          { label: s.title },
        ]}
      >
        <ButtonLink href="/contact#enquiry">Discuss this system</ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-x detail-grid">
          <div className="lg:col-span-6">
            <SectionLabel index="01">Overview</SectionLabel>
            {s.overview.map((p) => (
              <p key={p} className="t-body mt-6">
                {p}
              </p>
            ))}
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="t-tech">Typical applications</p>
            <ul className="feature-list mt-4">
              {s.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-carbon" aria-labelledby="how-title">
        <div className="container-x">
          <SectionHeading
            index="02"
            label="How it works"
            id="how-title"
            title="Engineered as a complete air path."
          />
          <ol className="step-grid is-4 mt-14">
            {s.how.map((h, i) => (
              <li key={h.title}>
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-8">{h.title}</h3>
                <p className="t-small mt-3">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-x detail-grid">
          <div className="lg:col-span-6">
            <SectionLabel index="03">Design intent</SectionLabel>
            <ul className="feature-list mt-8">
              {s.benefits.map((b) => (
                <li key={b} className="t-body">
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="t-tech">Related equipment</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.equipment.map((e) => (
                <li key={e} className="chip">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line" aria-labelledby="faq-title">
        <div className="container-x detail-grid">
          <div className="lg:col-span-4">
            <SectionLabel index="04">Questions</SectionLabel>
            <h2 id="faq-title" className="t-h2 mt-10">
              Common questions.
            </h2>
          </div>
          <dl className="spec lg:col-span-7 lg:col-start-6">
            {s.faqs.map((f) => (
              <div key={f.q} className="grid-cols-1!">
                <dt className="text-[0.9375rem]! normal-case! tracking-normal! text-paper!">
                  {f.q}
                </dt>
                <dd className="t-small">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {siblings.length ? (
        <section
          className="section-y border-t border-line bg-carbon"
          aria-labelledby="related-title"
        >
          <div className="container-x">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionLabel index="05" rule={false}>
                Related systems
              </SectionLabel>
              {parent ? (
                <TextLink href={`/solutions/${parent.slug}`}>{parent.title}</TextLink>
              ) : null}
            </div>
            <h2 id="related-title" className="sr-only">
              Related systems
            </h2>
            <div className="card-grid mt-10">
              {siblings.map((x) => (
                <SolutionCard key={x.slug} solution={x} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTA title={<>Discuss your {s.title.toLowerCase()} project.</>} />
    </main>
  );
}

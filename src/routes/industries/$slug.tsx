import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink, Arrow, ButtonLink } from "@/components/site/Buttons";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading, SectionLabel } from "@/components/site/SectionLabel";
import { disciplineBySlug, type Discipline } from "@/data/disciplines";
import { industryBySlug } from "@/data/industries";
import { projects } from "@/data/projects";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    if (!industryBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const i = industryBySlug(params.slug);
    if (!i) return { meta: [{ title: "Industry not found | Ashford Holdings PVT L.T.D" }] };
    return seo({
      title: `${i.name} — Industry`,
      description: i.summary,
      path: `/industries/${i.slug}`,
      image: i.image,
    });
  },
  component: IndustryDetail,
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  const i = industryBySlug(slug);
  if (!i) return null;
  const ds = i.disciplines
    .map((s) => disciplineBySlug(s))
    .filter((d): d is Discipline => Boolean(d));
  const related = projects.filter((p) => p.industrySlug === i.slug);

  return (
    <main id="main">
      <PageHero
        eyebrow={`Industry ${i.index}`}
        title={i.name}
        intro={i.summary}
        image={i.image}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: i.name }]}
      >
        <ButtonLink href="/contact#enquiry">Discuss a facility</ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-x detail-grid">
          <div className="lg:col-span-5">
            <SectionLabel index="01">Typical air challenges</SectionLabel>
            <ol className="mt-8 border-t border-line">
              {i.challenges.map((c, n) => (
                <li key={c} className="flex gap-5 border-b border-line py-4">
                  <span className="step-num pt-1">{String(n + 1).padStart(2, "0")}</span>
                  <span className="t-body text-paper!">{c}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionLabel index="02">Relevant disciplines</SectionLabel>
            <ul className="mt-8 border-t border-line">
              {ds.map((d) => (
                <li key={d.slug}>
                  <AppLink
                    href={`/solutions/${d.slug}`}
                    className="group flex items-center justify-between gap-6 border-b border-line py-5"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="step-num">{d.index}</span>
                      <span className="t-h3 transition-colors group-hover:text-brass">
                        {d.title}
                      </span>
                    </span>
                    <Arrow className="text-steel transition-transform group-hover:translate-x-1 group-hover:text-brass" />
                  </AppLink>
                </li>
              ))}
            </ul>
            {i.clients.length ? (
              <div className="mt-12">
                <p className="t-tech">Clients in this sector</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {i.clients.map((c) => (
                    <li key={c} className="chip">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section-y border-t border-line" aria-labelledby="ind-projects">
          <div className="container-x">
            <SectionHeading
              index="03"
              label="Projects"
              id="ind-projects"
              title="Delivered in this sector."
            />
            <div className="projects-bento mt-14">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} size="md" />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTA title={<>Engineering air for {i.name.toLowerCase()}.</>} />
    </main>
  );
}

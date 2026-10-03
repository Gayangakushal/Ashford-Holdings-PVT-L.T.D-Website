import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { projects } from "@/data/projects";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () =>
    seo({
      title: "Projects — Ventilation, Extraction & Racking",
      description:
        "Selected Ashford Holdings PVT L.T.D projects in ventilation, fume extraction and racking for clients including Variosystems, Ceylon Biscuits Limited, A&E Bangladesh and DOK Solutions Lanka.",
      path: "/projects",
    }),
  component: Projects,
});

const sizes = ["lg", "md", "md", "wide", "md", "md", "wide"] as const;

function Projects() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Delivered work,
            <br />
            <span className="text-steel">in clients’ words.</span>
          </>
        }
        intro="Every project here is confirmed by named client feedback. Scope, location and outcomes go no further than that feedback states."
        image="/assets/hvac/stainless-fan-pipework.jpg"
        crumbs={[{ label: "Projects" }]}
        meta={[
          { label: "Projects listed", value: String(projects.length).padStart(2, "0") },
          { label: "Countries", value: "Sri Lanka · Bangladesh" },
          { label: "Disciplines", value: "Ventilation · Extraction · Racking" },
        ]}
      />
      <section className="section-y">
        <div className="container-x">
          <div className="projects-bento">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} size={sizes[i % sizes.length] ?? "md"} />
            ))}
          </div>
          <p className="t-tech mt-10 max-w-2xl">
            Photographs marked “representative image” show comparable systems from Ashford Holdings
            PVT L.T.D’s supplied material, not the client’s site. Storage projects are shown as
            engineering drawings.
          </p>
        </div>
      </section>
      <TestimonialSlider index="02" />
      <CTA />
    </main>
  );
}

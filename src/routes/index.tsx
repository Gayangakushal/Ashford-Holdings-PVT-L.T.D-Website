import { createFileRoute } from "@tanstack/react-router";
import { AirflowIntelligence } from "@/components/site/AirflowIntelligence";
import { TextLink } from "@/components/site/Buttons";
import { ContactSection } from "@/components/site/ContactSection";
import { CTA } from "@/components/site/CTA";
import { Hero } from "@/components/site/home/Hero";
import { Intro } from "@/components/site/home/Intro";
import { IndustryGrid } from "@/components/site/IndustryGrid";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { MetricStrip } from "@/components/site/MetricStrip";
import { NetworkMap } from "@/components/site/NetworkMap";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionHeading } from "@/components/site/SectionLabel";
import { SolutionSystem } from "@/components/site/SolutionSystem";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { WhyAshford } from "@/components/site/WhyAshford";
import { projectBySlug, type Project } from "@/data/projects";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Ashford Holdings PVT L.T.D | HVAC, Ventilation & Air Engineering in Sri Lanka",
      description:
        "Ashford Holdings PVT L.T.D engineers ventilation, air conditioning, air purification, BMS, fire & gas suppression, dust extraction and racking systems for industrial and commercial facilities in Sri Lanka.",
      path: "/",
    }),
  component: Home,
});

const featured: { slug: string; size: "lg" | "md" | "wide" }[] = [
  { slug: "variosystems-fume-extraction", size: "lg" },
  { slug: "ae-bangladesh-factory-upgrade", size: "md" },
  { slug: "dok-narrow-aisle-racking", size: "md" },
  { slug: "cbl-factory-ventilation", size: "wide" },
];

function Home() {
  const items = featured
    .map((f) => ({ ...f, project: projectBySlug(f.slug) }))
    .filter((f): f is typeof f & { project: Project } => Boolean(f.project));

  return (
    <main id="main">
      <Hero />
      <MetricStrip />
      <Intro />
      <AirflowIntelligence index="04" />
      <SolutionSystem index="05" />

      <section className="section-y border-t border-line" aria-labelledby="industries-title">
        <div className="container-x">
          <SectionHeading
            index="06"
            label="Industries"
            id="industries-title"
            title={
              <>
                Built for demanding
                <br />
                environments.
              </>
            }
            intro="Heat, fume, dust, grease, occupancy and storage density change what a system must do. We start from the operating conditions of each sector."
          />
          <div className="mt-14 lg:mt-20">
            <IndustryGrid />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line" aria-labelledby="projects-title">
        <div className="container-x">
          <SectionHeading
            index="07"
            label="Selected projects"
            id="projects-title"
            title={
              <>
                Projects, in our
                <br />
                clients’ words.
              </>
            }
            intro="Each project below is confirmed by named client feedback. Scope and outcomes are stated exactly as far as that feedback goes."
          />
          <div className="projects-bento mt-14 lg:mt-20">
            {items.map(({ project, size }) => (
              <ProjectCard key={project.slug} project={project} size={size} />
            ))}
          </div>
          <div className="mt-12 flex justify-end">
            <TextLink href="/projects">All projects</TextLink>
          </div>
        </div>
      </section>

      <NetworkMap index="08" />
      <WhyAshford index="09" />
      <TestimonialSlider index="11" />
      <LogoMarquee index="12" />
      <CTA />
      <ContactSection index="14" />
    </main>
  );
}

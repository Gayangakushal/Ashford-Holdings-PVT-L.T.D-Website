import { createFileRoute, redirect } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { LeadershipGrid } from "@/components/site/LeadershipSection";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { leadership, siteFeatures, statements } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/leadership")({
  beforeLoad: () => {
    if (!siteFeatures.leadership) throw redirect({ to: "/about", replace: true });
  },
  head: () =>
    seo({
      title: "Leadership",
      description: `Leadership at Ashford Holdings PVT L.T.D: ${leadership.map((l) => `${l.name}, ${l.role}`).join("; ")}.`,
      path: "/leadership",
    }),
  component: Leadership,
});

function Leadership() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Leadership"
        title={
          <>
            The people behind
            <br />
            <span className="text-steel">the system.</span>
          </>
        }
        intro="Experienced leadership driving precision, reliability and engineered air solutions."
        crumbs={[{ label: "Leadership" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <LeadershipGrid />
        </div>
      </section>
      <section className="section-y border-t border-line bg-carbon">
        <div className="container-x detail-grid">
          <div className="lg:col-span-4">
            <SectionLabel index="02">What guides us</SectionLabel>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="t-h2">{statements.vision}</p>
            <ul className="mt-10 flex flex-wrap gap-2">
              {statements.values.map((v) => (
                <li key={v} className="chip">
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}

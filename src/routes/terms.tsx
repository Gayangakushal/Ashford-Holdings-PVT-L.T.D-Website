import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms",
      description: `Terms of use for the ${site.name} website.`,
      path: "/terms",
    }),
  component: Terms,
});

function Terms() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Terms" crumbs={[{ label: "Terms" }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="legal">
            <p>
              Information on this website is a general overview of {site.legalName}'s engineering
              services and equipment. Final selection, performance, certification and project scope
              are subject to technical review and formal quotation.
            </p>
            <h2>Images</h2>
            <p>
              Photographs come from the company’s supplied material. Where an image is labelled
              “representative”, it shows a comparable system, not the named client’s site. Storage
              projects are illustrated with engineering drawings.
            </p>
            <h2>Client feedback</h2>
            <p>
              Client feedback is reproduced as published by the company. It is not drawn from
              third-party review platforms.
            </p>
            <h2>Trademarks</h2>
            <p>
              Brand names and logos belong to their respective owners. Their appearance does not
              imply exclusive or authorised distributor status unless confirmed separately in
              writing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

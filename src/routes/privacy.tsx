import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy",
      description: `Privacy information for the ${site.name} website.`,
      path: "/privacy",
    }),
  component: Privacy,
});

function Privacy() {
  return (
    <main id="main">
      <PageHero eyebrow="Legal" title="Privacy" crumbs={[{ label: "Privacy" }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="legal">
            <p>
              This website presents the engineering services of {site.legalName} and provides ways
              to contact the company.
            </p>
            <h2>Enquiries</h2>
            <p>
              The enquiry form does not store submissions on a server. Submitting it opens your own
              email application with the enquiry prepared, addressed to {site.email}. What you send
              is then handled as ordinary email correspondence.
            </p>
            <h2>Analytics and cookies</h2>
            <p>
              No analytics, advertising or tracking tools are configured in this website build. If
              such tools are added, this page will be updated to describe what is collected and why.
            </p>
            <p>
              Your cookie preference is saved in local storage on your device. This lets the website
              remember your choice between visits. You can clear this preference through your
              browser's site data settings.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy questions, email{" "}
              <a href={site.emailHref} className="text-paper underline">
                {site.email}
              </a>{" "}
              or call {site.phone}.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

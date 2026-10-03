import { createFileRoute } from "@tanstack/react-router";
import { ContactDetails, ContactForm } from "@/components/site/ContactSection";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { site } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact — Start a Project",
      description: `Contact Ashford Holdings PVT L.T.D about ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction or racking. Call ${site.phone} or email ${site.email}.`,
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start a project.
            <br />
            <span className="text-steel">Talk to our engineers.</span>
          </>
        }
        intro="Tell us about the facility, the process and the problem. An engineer will review the requirement and come back to you."
        image="/assets/hvac/industrial-piping.jpg"
        crumbs={[{ label: "Contact" }]}
      />
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel index="01">Direct</SectionLabel>
            <div className="mt-10">
              <ContactDetails />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <SectionLabel index="02">Enquiry</SectionLabel>
            <h2 className="sr-only">Project enquiry form</h2>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

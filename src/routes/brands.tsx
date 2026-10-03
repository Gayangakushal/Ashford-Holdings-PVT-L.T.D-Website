import { createFileRoute } from "@tanstack/react-router";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionLabel";
import { partnerCountries } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/brands")({
  head: () =>
    seo({
      title: "Global Manufacturing Network",
      description:
        "Ashford Holdings PVT L.T.D works alongside manufacturers from Germany, Malaysia, Singapore, India and China to deliver air and environmental engineering solutions.",
      path: "/brands",
    }),
  component: Brands,
});

function Brands() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Global network"
        title={
          <>
            International technology.
            <br />
            <span className="text-steel">Local engineering.</span>
          </>
        }
        intro="Ashford Holdings PVT L.T.D publishes a manufacturing network spanning Germany, Malaysia, Singapore, India and China. Exact equipment make and model is selected against each project's duty and specification."
        image="/assets/hvac/stainless-centrifugal-fans.jpg"
        crumbs={[{ label: "Global network" }]}
      />
      <section className="section-y">
        <div className="container-x">
          <SectionHeading
            index="01"
            label="Partner countries"
            title="A network built around performance."
            intro="We avoid implying exclusive distributor status where it is not published. Final manufacturers, certifications and series are confirmed at project stage."
          />
          <ul className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5">
            {partnerCountries.map((country, i) => (
              <li
                key={country}
                className="min-h-48 border-b border-r border-line p-6 flex flex-col justify-between bg-carbon"
              >
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="t-h3">{country}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA
        title={
          <>
            Need equipment for
            <br />a specific duty?
          </>
        }
        text="Tell us the airflow, pressure, temperature, environment and application. Our team can propose a suitable configuration."
      />
    </main>
  );
}

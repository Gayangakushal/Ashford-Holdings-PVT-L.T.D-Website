import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/Cards";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { productCategories, products } from "@/data/products";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () =>
    seo({
      title: "Equipment — Fans, AHUs, Cooling, ESP, Ducting & Dampers",
      description:
        "Industrial fans, air handling and fan coil units, evaporative coolers, cooling towers, electrostatic precipitators, kitchen canopies, dust collectors, ducting, dampers and air terminals.",
      path: "/products",
      image: "/assets/hvac/stainless-centrifugal-fans.jpg",
    }),
  component: Products,
});

function Products() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Equipment"
        title={
          <>
            Equipment selected
            <br />
            <span className="text-steel">for the duty.</span>
          </>
        }
        intro="Fans, air handling, cooling, filtration, ducting and air distribution components from the supplied product range — specified against calculated airflow, pressure and temperature."
        image="/assets/hvac/stainless-centrifugal-fans.jpg"
        crumbs={[{ label: "Equipment" }]}
      />
      <section className="section-y">
        <div className="container-x grid gap-24">
          {productCategories.map((cat, n) => {
            const list = products.filter((p) => p.category === cat);
            if (!list.length) return null;
            return (
              <div key={cat}>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <SectionLabel index={String(n + 1).padStart(2, "0")} rule={false}>
                      Category
                    </SectionLabel>
                    <h2 className="t-h3 mt-4">{cat}</h2>
                  </div>
                  <span className="t-tech">{String(list.length).padStart(2, "0")} items</span>
                </div>
                <div className="card-grid is-4 mt-8 border-t border-line pt-8">
                  {list.map((p) => (
                    <ProductCard key={p.slug} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTA
        title={
          <>
            Need help selecting
            <br />
            equipment?
          </>
        }
        text="Share the airflow, pressure, temperature and site conditions. We’ll recommend the right configuration."
      />
    </main>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { ButtonLink } from "@/components/site/Buttons";
import { ProductCard } from "@/components/site/Cards";
import { CTA } from "@/components/site/CTA";
import { PageHero } from "@/components/site/PageHero";
import { SectionLabel } from "@/components/site/SectionLabel";
import { productImages } from "@/data/media";
import { productBySlug, products } from "@/data/products";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    if (!productBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const p = productBySlug(params.slug);
    if (!p) return { meta: [{ title: "Equipment not found | Ashford Holdings PVT L.T.D" }] };
    return seo({
      title: p.name,
      description: p.short,
      path: `/products/${p.slug}`,
      image: productImages[p.slug],
    });
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const p = productBySlug(slug);
  if (!p) return null;
  const related = products
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 4);

  return (
    <main id="main">
      <PageHero
        eyebrow={`${p.category}${p.series ? ` · ${p.series}` : ""}`}
        title={p.name}
        intro={p.short}
        image={productImages[p.slug]}
        crumbs={[{ label: "Equipment", href: "/products" }, { label: p.name }]}
      >
        <ButtonLink href="/contact#enquiry">Request a quotation</ButtonLink>
      </PageHero>

      <section className="section-y">
        <div className="container-x detail-grid">
          <div className="lg:col-span-6">
            <SectionLabel index="01">Overview</SectionLabel>
            {p.overview.map((x) => (
              <p key={x} className="t-body mt-6">
                {x}
              </p>
            ))}
            <p className="t-tech mt-12">Features</p>
            <ul className="feature-list mt-4 sm:grid-cols-2">
              {p.features.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <SectionLabel index="02">Technical</SectionLabel>
            <dl className="spec mt-8">
              {p.series ? (
                <div>
                  <dt>Series</dt>
                  <dd>{p.series}</dd>
                </div>
              ) : null}
              {p.technical.map((t) => (
                <div key={t.label}>
                  <dt>{t.label}</dt>
                  <dd>{t.value}</dd>
                </div>
              ))}
            </dl>
            <p className="t-tech mt-10">Applications</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.applications.map((a) => (
                <li key={a} className="chip">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length ? (
        <section
          className="section-y border-t border-line bg-carbon"
          aria-labelledby="related-title"
        >
          <div className="container-x">
            <SectionLabel index="03">Related equipment</SectionLabel>
            <h2 id="related-title" className="sr-only">
              Related equipment
            </h2>
            <div className="card-grid is-4 mt-10">
              {related.map((x) => (
                <ProductCard key={x.slug} product={x} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CTA title={<>Request a quotation for {p.name.toLowerCase()}.</>} />
    </main>
  );
}

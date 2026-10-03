import { AppLink, Arrow } from "@/components/site/Buttons";
import type { Product } from "@/data/products";
import type { Solution } from "@/data/solutions";
import { productImages, solutionImages } from "@/data/media";

/** Engineering system card (detailed systems grouped under each discipline). */
export function SolutionCard({ solution }: { solution: Solution }) {
  const image = solutionImages[solution.slug];
  return (
    <AppLink href={`/solutions/${solution.slug}`} className="sys-card">
      <span className="sys-card-media">
        {image ? <img src={image} alt="" loading="lazy" decoding="async" /> : null}
      </span>
      <span className="sys-card-body">
        <span className="t-tech">{solution.category}</span>
        <span className="sys-card-title">{solution.title}</span>
        <span className="sys-card-text">{solution.summary}</span>
        <span className="sys-card-arrow" aria-hidden="true">
          <Arrow />
        </span>
      </span>
    </AppLink>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <AppLink href={`/products/${product.slug}`} className="sys-card">
      <span className="sys-card-media">
        <img
          src={productImages[product.slug] ?? "/assets/hvac/centrifugal-fans.jpg"}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="sys-card-body">
        <span className="t-tech">
          {product.category}
          {product.series ? ` · ${product.series}` : ""}
        </span>
        <span className="sys-card-title">{product.name}</span>
        <span className="sys-card-text">{product.short}</span>
        <span className="sys-card-arrow" aria-hidden="true">
          <Arrow />
        </span>
      </span>
    </AppLink>
  );
}

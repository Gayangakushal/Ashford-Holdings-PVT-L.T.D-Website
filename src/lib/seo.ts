import { SITE_URL, site } from "@/data/site";

const DEFAULT_IMAGE = "/assets/hvac/ducted-air-distribution.jpg";

/** Builds per-route title, description, Open Graph, Twitter and canonical tags. */
export function seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  image?: string | undefined;
}) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const img = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const fullTitle =
    path === "/" || title.includes(site.name) ? title : `${title} | ${site.shortName}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

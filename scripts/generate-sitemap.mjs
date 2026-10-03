// Regenerates public/sitemap.xml from the route data. Run: node scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://www.sairt.com";
const slugs = (file, key = "slug") =>
  [
    ...readFileSync(new URL(`../src/data/${file}`, import.meta.url), "utf8").matchAll(
      new RegExp(`(?:^|\\s)${key}: "([a-z0-9-]+)"`, "gm"),
    ),
  ].map((m) => m[1]);

const paths = [
  "/",
  "/solutions",
  "/projects",
  "/industries",
  "/about",
  "/contact",
  "/products",
  "/brands",
  "/privacy",
  "/terms",
  ...slugs("disciplines.ts").map((s) => `/solutions/${s}`),
  ...slugs("solutions.ts").map((s) => `/solutions/${s}`),
  ...slugs("projects.ts").map((s) => `/projects/${s}`),
  ...slugs("industries.ts").map((s) => `/industries/${s}`),
  ...slugs("products.ts").map((s) => `/products/${s}`),
];
const unique = [...new Set(paths)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique.map((p) => `  <url><loc>${SITE}${p === "/" ? "/" : p}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap: ${unique.length} urls`);

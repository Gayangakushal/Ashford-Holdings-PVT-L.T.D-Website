import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { r as ButtonLink } from "./_ssr/site-Ck29ZWyQ.mjs";
import { t as productImages } from "./_ssr/media-Clrt4nID.mjs";
import { r as products, t as productBySlug } from "./_ssr/products-BzmRs_1f.mjs";
import { n as SectionLabel } from "./_ssr/SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./_ssr/CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./_ssr/PageHero-BUWsN1rz.mjs";
import { t as ProductCard } from "./_ssr/Cards-BazQSz8C.mjs";
import { t as Route } from "./_slug-BoBKYNNp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DZhKGoPr.js
var import_jsx_runtime = require_jsx_runtime();
function ProductDetail() {
	const { slug } = Route.useParams();
	const p = productBySlug(slug);
	if (!p) return null;
	const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: `${p.category}${p.series ? ` · ${p.series}` : ""}`,
				title: p.name,
				intro: p.short,
				image: productImages[p.slug],
				crumbs: [{
					label: "Equipment",
					href: "/products"
				}, { label: p.name }],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: "/contact#enquiry",
					children: "Request a quotation"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "01",
								children: "Overview"
							}),
							p.overview.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-body mt-6",
								children: x
							}, x)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-tech mt-12",
								children: "Features"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "feature-list mt-4 sm:grid-cols-2",
								children: p.features.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:col-start-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "02",
								children: "Technical"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "spec mt-8",
								children: [p.series ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Series" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: p.series })] }) : null, p.technical.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: t.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: t.value })] }, t.label))]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-tech mt-10",
								children: "Applications"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-wrap gap-2",
								children: p.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "chip",
									children: a
								}, a))
							})
						]
					})]
				})
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "related-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "03",
							children: "Related equipment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "related-title",
							className: "sr-only",
							children: "Related equipment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-grid is-4 mt-10",
							children: related.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: x }, x.slug))
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Request a quotation for ",
				p.name.toLowerCase(),
				"."
			] }) })
		]
	});
}
//#endregion
export { ProductDetail as component };

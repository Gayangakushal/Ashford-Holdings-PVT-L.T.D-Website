import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Arrow, t as AppLink } from "./site-Ck29ZWyQ.mjs";
import { n as solutionImages, t as productImages } from "./media-Clrt4nID.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Cards-BazQSz8C.js
var import_jsx_runtime = require_jsx_runtime();
/** Engineering system card (detailed systems grouped under each discipline). */
function SolutionCard({ solution }) {
	const image = solutionImages[solution.slug];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
		href: `/solutions/${solution.slug}`,
		className: "sys-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sys-card-media",
			children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				loading: "lazy",
				decoding: "async"
			}) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sys-card-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "t-tech",
					children: solution.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-title",
					children: solution.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-text",
					children: solution.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-arrow",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				})
			]
		})]
	});
}
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
		href: `/products/${product.slug}`,
		className: "sys-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sys-card-media",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: productImages[product.slug] ?? "/assets/hvac/centrifugal-fans.jpg",
				alt: "",
				loading: "lazy",
				decoding: "async"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sys-card-body",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "t-tech",
					children: [product.category, product.series ? ` · ${product.series}` : ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-title",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-text",
					children: product.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sys-card-arrow",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				})
			]
		})]
	});
}
//#endregion
export { SolutionCard as n, ProductCard as t };

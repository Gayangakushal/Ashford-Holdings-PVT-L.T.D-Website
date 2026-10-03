import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as AppLink } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BUWsN1rz.js
var import_jsx_runtime = require_jsx_runtime();
/** Inner-page hero. Shares the homepage hero's language at a calmer scale. */
function PageHero({ eyebrow, title, intro, image, imageAlt = "", crumbs = [], meta, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "page-hero",
		"aria-labelledby": "page-title",
		children: [
			image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-hero-media",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: imageAlt,
					fetchPriority: "high",
					decoding: "async"
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-hero-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tech-grid absolute inset-0 opacity-50",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x page-hero-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Breadcrumb",
						className: "crumbs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: "/",
							children: "Home"
						}) }), crumbs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: c.href,
							children: c.label
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-current": "page",
							children: c.label
						}) }, c.label))] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-10 lg:mt-14",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						id: "page-title",
						className: "t-h1 mt-6 max-w-5xl",
						children: title
					}),
					intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "t-lead mt-8 max-w-2xl",
						children: intro
					}) : null,
					children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children
					}) : null,
					meta && meta.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "page-hero-meta",
						children: meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "t-tech",
							children: m.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: m.value })] }, m.label))
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };

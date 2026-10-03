import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Arrow, t as AppLink } from "./site-Ck29ZWyQ.mjs";
import { t as industries } from "./industries-DtSQflgv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IndustryGrid-XqipysfU.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "industry-grid",
		children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
			href: `/industries/${ind.slug}`,
			className: "industry-cell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-media",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ind.image,
						alt: "",
						loading: "lazy",
						decoding: "async"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-index",
					children: ind.index
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-name",
					children: ind.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-summary",
					children: ind.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-flow",
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "industry-cell-arrow",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
				})
			]
		}) }, ind.slug))
	});
}
//#endregion
export { IndustryGrid as t };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as cn } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionLabel-WH9A3uhu.js
var import_jsx_runtime = require_jsx_runtime();
/** Index + label, e.g. "04 — Airflow intelligence", with a hairline that runs to the edge. */
function SectionLabel({ index, children, className, rule = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("section-label", className),
		children: [
			index ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "section-label-index",
				children: index
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children
			}),
			rule ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				className: "section-label-rule"
			}) : null
		]
	});
}
/** Standard section heading block. */
function SectionHeading({ index, label, title, intro, className, as: Tag = "h2", id }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("grid gap-8 lg:grid-cols-12 lg:gap-10", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index,
				className: "lg:col-span-12",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
				id,
				className: "t-h2 lg:col-span-7",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "t-lead self-end lg:col-span-4 lg:col-start-9",
				children: intro
			}) : null
		]
	});
}
//#endregion
export { SectionLabel as n, SectionHeading as t };

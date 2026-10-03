import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as site, r as ButtonLink } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTA-D9xA-PHW.js
var import_jsx_runtime = require_jsx_runtime();
/** Final call to action with airflow lines converging on the actions. */
function CTA({ title = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	"Ready to engineer",
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
	"better air?"
] }), text = "Tell us about your facility, project or engineering requirement.", image = "/assets/hvac/stainless-centrifugal-fans.jpg" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "cta",
		"aria-labelledby": "cta-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "cta-media",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: "",
					loading: "lazy",
					decoding: "async"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "cta-flow",
				viewBox: "0 0 1440 600",
				preserveAspectRatio: "none",
				"aria-hidden": "true",
				children: Array.from({ length: 9 }, (_, i) => {
					const y = 60 + i * 60;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M0 ${y} C 480 ${y}, 760 ${300 + (y - 300) * .25}, 1180 ${300 + (y - 300) * .08} L1440 300`,
						style: { animationDelay: `${i * -.7}s` }
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x cta-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Start a project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "cta-title",
						className: "t-h1 mt-6",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-lead mt-6 max-w-xl",
						children: text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: "/contact#enquiry",
							variant: "primary",
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: site.phoneHref,
							variant: "secondary",
							children: "Talk to our engineers"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { CTA as t };

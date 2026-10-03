import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as TextLink, d as process, s as cn } from "./site-Ck29ZWyQ.mjs";
import { r as disciplines } from "./disciplines-dBQSdk_D.mjs";
import { n as solutions } from "./solutions-JGMgkD27.mjs";
import { t as SectionHeading } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as Reveal } from "./Reveal-B4TwLp9k.mjs";
import { t as RackingDrawing } from "./RackingDrawing-BfKN06c3.mjs";
import { n as SolutionCard } from "./Cards-BazQSz8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-C35eIGBt.js
var import_jsx_runtime = require_jsx_runtime();
/** Large-format alternating editorial block for one discipline. */
function SolutionFeature({ discipline: d, flip = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("feature", flip && "is-flip"),
		"aria-labelledby": `feature-${d.slug}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "figure",
			variant: "clip",
			className: "feature-media",
			children: [d.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: d.image,
				alt: d.imageAlt,
				loading: "lazy",
				decoding: "async"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RackingDrawing, { label: "Racking elevation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "feature-media-tag",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.index }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.short })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "feature-body",
			delay: 120,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "feature-index",
					"aria-hidden": "true",
					children: d.index
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `feature-${d.slug}`,
					className: "t-h2",
					children: d.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "t-lead mt-6",
					children: d.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-tech",
						children: "Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "feature-list",
						children: d.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c }, c))
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-tech",
						children: "Applications"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "feature-list",
						children: d.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
					href: `/solutions/${d.slug}`,
					className: "mt-10",
					children: "View solution"
				})
			]
		})]
	});
}
function Solutions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Solutions",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Six disciplines.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "One air path."
					})
				] }),
				intro: "From the air a building breathes to the racking that stores what it produces — engineered, supplied and installed by one team.",
				image: "/assets/hvac/plate-heat-exchanger-plant.jpg",
				crumbs: [{ label: "Solutions" }],
				meta: disciplines.slice(0, 4).map((d) => ({
					label: d.index,
					value: d.short
				}))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: disciplines.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionFeature, {
					discipline: d,
					flip: i % 2 === 1
				}, d.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				"aria-labelledby": "systems-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "07",
						label: "Engineering systems",
						id: "systems-title",
						title: "Systems in detail.",
						intro: "The individual systems and equipment applications that sit within each discipline."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card-grid mt-14",
						children: solutions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionCard, { solution: s }, s.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "process-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "08",
						label: "Delivery",
						id: "process-title",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Survey to",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"commissioning."
						] }),
						intro: "Every project follows the same engineering sequence, whatever the discipline."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "step-grid mt-14",
						children: process.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "step-num",
								children: p.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "t-h3 mt-8",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-small mt-3",
								children: p.text
							})
						] }, p.step))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { Solutions as component };

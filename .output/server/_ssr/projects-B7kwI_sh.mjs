import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as projects } from "./projects-ARMA9LCP.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as ProjectCard } from "./ProjectCard-DTC673ke.mjs";
import { t as TestimonialSlider } from "./TestimonialSlider-CQEtHy9H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-B7kwI_sh.js
var import_jsx_runtime = require_jsx_runtime();
var sizes = [
	"lg",
	"md",
	"md",
	"wide",
	"md",
	"md",
	"wide"
];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Projects",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Delivered work,",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "in clients’ words."
					})
				] }),
				intro: "Every project here is confirmed by named client feedback. Scope, location and outcomes go no further than that feedback states.",
				image: "/assets/hvac/stainless-fan-pipework.jpg",
				crumbs: [{ label: "Projects" }],
				meta: [
					{
						label: "Projects listed",
						value: String(projects.length).padStart(2, "0")
					},
					{
						label: "Countries",
						value: "Sri Lanka · Bangladesh"
					},
					{
						label: "Disciplines",
						value: "Ventilation · Extraction · Racking"
					}
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "projects-bento",
						children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project: p,
							size: sizes[i % sizes.length] ?? "md"
						}, p.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-tech mt-10 max-w-2xl",
						children: "Photographs marked “representative image” show comparable systems from Ashford Holdings PVT L.T.D’s supplied material, not the client’s site. Storage projects are shown as engineering drawings."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSlider, { index: "02" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { Projects as component };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as process, f as site, m as statements } from "./site-Ck29ZWyQ.mjs";
import { r as disciplines } from "./disciplines-dBQSdk_D.mjs";
import { n as SectionLabel, t as SectionHeading } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as Reveal } from "./Reveal-B4TwLp9k.mjs";
import { n as NetworkMap, r as WhyAshford, t as AirflowIntelligence } from "./WhyAshford-DD6Hqjn4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-bOXAvHm_.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "About Ashford Holdings PVT L.T.D",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					site.tagline.split(". ")[0],
					".",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: site.tagline.split(". ")[1]
					})
				] }),
				intro: "Ashford Holdings PVT L.T.D leads in air and environmental engineering across Sri Lanka — and, alongside it, the racking, mezzanine and material-handling systems that keep facilities running.",
				image: "/assets/hvac/plate-heat-exchanger-plant.jpg",
				crumbs: [{ label: "About" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "01",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "t-h2 mt-10",
							children: "One team for the whole air path."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 lg:col-start-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-lead",
								children: "Our work spans ventilation, air purification, cooling and air conditioning, fire and gas suppression, building management systems, workplace air quality, ducting and dust extraction."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-body mt-6",
								children: "The same engineering discipline extends to industrial storage — racking systems, mezzanines, conveyor networks and material-handling set-ups — for warehouses, logistics hubs and factories."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-10 grid gap-px border border-line bg-line sm:grid-cols-2",
								children: disciplines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline gap-4 bg-void p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "step-num",
										children: d.index
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.title })]
								}, d.slug))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "vision-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "02",
						children: "Vision · Mission · Values"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-px border border-line bg-line lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								className: "bg-carbon p-6 sm:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "vision-title",
									className: "t-h3 mt-6",
									children: statements.vision
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 100,
								className: "bg-carbon p-6 sm:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Mission"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-h3 mt-6",
									children: statements.mission
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: 200,
								className: "bg-carbon p-6 sm:p-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Values"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 grid gap-3",
									children: statements.values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-baseline gap-4 border-b border-line pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "step-num",
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "t-h3",
											children: v
										})]
									}, v))
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AirflowIntelligence, { index: "03" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				"aria-labelledby": "process-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "04",
						label: "Delivery",
						id: "process-title",
						title: "How a project runs.",
						intro: "Survey, engineer, select, fabricate, install, commission — one accountable team from first visit to handover."
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkMap, { index: "05" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyAshford, { index: "06" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { About as component };

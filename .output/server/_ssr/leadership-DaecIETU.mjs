import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as leadership, m as statements } from "./site-Ck29ZWyQ.mjs";
import { n as SectionLabel } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as Reveal } from "./Reveal-B4TwLp9k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leadership-DaecIETU.js
var import_jsx_runtime = require_jsx_runtime();
function LeadershipGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "leader-grid leader-grid--editorial",
		children: leadership.map((person, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			as: "li",
			delay: i * 70,
			className: "leader-card leader-card--text",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leader-card-top",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "leader-index",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "leader-status",
					"aria-hidden": "true"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leader-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leader-rule",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-tech",
						children: person.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "leader-name",
						children: person.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leader-credentials",
						children: person.credentials
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leader-bio",
						children: person.bio
					})
				]
			})]
		}, person.name))
	});
}
function Leadership() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Leadership",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"The people behind",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "the system."
					})
				] }),
				intro: "Experienced leadership driving precision, reliability and engineered air solutions.",
				crumbs: [{ label: "Leadership" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadershipGrid, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "02",
							children: "What guides us"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 lg:col-start-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-h2",
							children: statements.vision
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-10 flex flex-wrap gap-2",
							children: statements.values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "chip",
								children: v
							}, v))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { Leadership as component };

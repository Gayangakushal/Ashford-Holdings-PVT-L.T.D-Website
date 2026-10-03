import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as partnerCountries } from "./site-Ck29ZWyQ.mjs";
import { t as SectionHeading } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-OooQxu1P.js
var import_jsx_runtime = require_jsx_runtime();
function Brands() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Global network",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"International technology.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "Local engineering."
					})
				] }),
				intro: "Ashford Holdings PVT L.T.D publishes a manufacturing network spanning Germany, Malaysia, Singapore, India and China. Exact equipment make and model is selected against each project's duty and specification.",
				image: "/assets/hvac/stainless-centrifugal-fans.jpg",
				crumbs: [{ label: "Global network" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "01",
						label: "Partner countries",
						title: "A network built around performance.",
						intro: "We avoid implying exclusive distributor status where it is not published. Final manufacturers, certifications and series are confirmed at project stage."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-5",
						children: partnerCountries.map((country, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "min-h-48 border-b border-r border-line p-6 flex flex-col justify-between bg-carbon",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "step-num",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "t-h3",
								children: country
							})]
						}, country))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Need equipment for",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"a specific duty?"
				] }),
				text: "Tell us the airflow, pressure, temperature, environment and application. Our team can propose a suitable configuration."
			})
		]
	});
}
//#endregion
export { Brands as component };

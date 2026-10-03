import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as industries } from "./industries-DtSQflgv.mjs";
import { t as IndustryGrid } from "./IndustryGrid-XqipysfU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-BZZ5pifB.js
var import_jsx_runtime = require_jsx_runtime();
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Industries",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Air systems designed",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "around the process."
					})
				] }),
				intro: `Ashford Holdings PVT L.T.D serves ${industries.length} sectors. Each has its own heat, fume, dust, hygiene and storage conditions — the engineering starts there.`,
				image: "/assets/hvac/ducted-air-distribution-2.jpg",
				crumbs: [{ label: "Industries" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryGrid, {})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { Industries as component };

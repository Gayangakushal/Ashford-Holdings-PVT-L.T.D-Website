import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as productCategories, r as products } from "./products-BzmRs_1f.mjs";
import { n as SectionLabel } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { t as ProductCard } from "./Cards-BazQSz8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BB9Qn8mr.js
var import_jsx_runtime = require_jsx_runtime();
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Equipment",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Equipment selected",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-steel",
						children: "for the duty."
					})
				] }),
				intro: "Fans, air handling, cooling, filtration, ducting and air distribution components from the supplied product range — specified against calculated airflow, pressure and temperature.",
				image: "/assets/hvac/stainless-centrifugal-fans.jpg",
				crumbs: [{ label: "Equipment" }]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x grid gap-24",
					children: productCategories.map((cat, n) => {
						const list = products.filter((p) => p.category === cat);
						if (!list.length) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: String(n + 1).padStart(2, "0"),
								rule: false,
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "t-h3 mt-4",
								children: cat
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "t-tech",
								children: [String(list.length).padStart(2, "0"), " items"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-grid is-4 mt-8 border-t border-line pt-8",
							children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
						})] }, cat);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Need help selecting",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"equipment?"
				] }),
				text: "Share the airflow, pressure, temperature and site conditions. We’ll recommend the right configuration."
			})
		]
	});
}
//#endregion
export { Products as component };

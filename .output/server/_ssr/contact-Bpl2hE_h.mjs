import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionLabel } from "./SectionLabel-WH9A3uhu.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
import { n as ContactForm, t as ContactDetails } from "./ContactSection-TbTGMZce.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bpl2hE_h.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Start a project.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-steel",
					children: "Talk to our engineers."
				})
			] }),
			intro: "Tell us about the facility, the process and the problem. An engineer will review the requirement and come back to you.",
			image: "/assets/hvac/industrial-piping.jpg",
			crumbs: [{ label: "Contact" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-14 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "01",
						children: "Direct"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, {})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 lg:col-start-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "02",
							children: "Enquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "sr-only",
							children: "Project enquiry form"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { Contact as component };

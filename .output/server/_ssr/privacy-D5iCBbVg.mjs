import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as site } from "./site-Ck29ZWyQ.mjs";
import { t as PageHero } from "./PageHero-BUWsN1rz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/privacy-D5iCBbVg.js
var import_jsx_runtime = require_jsx_runtime();
function Privacy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Legal",
			title: "Privacy",
			crumbs: [{ label: "Privacy" }]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "legal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"This website presents the engineering services of ",
							site.legalName,
							" and provides ways to contact the company."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Enquiries" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"The enquiry form does not store submissions on a server. Submitting it opens your own email application with the enquiry prepared, addressed to ",
							site.email,
							". What you send is then handled as ordinary email correspondence."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Analytics and cookies" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No analytics, advertising or tracking tools are configured in this website build. If such tools are added, this page will be updated to describe what is collected and why." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your cookie preference is saved in local storage on your device. This lets the website remember your choice between visits. You can clear this preference through your browser's site data settings." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Contact" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"For privacy questions, email",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.emailHref,
								className: "text-paper underline",
								children: site.email
							}),
							" ",
							"or call ",
							site.phone,
							"."
						] })
					]
				})
			})
		})]
	});
}
//#endregion
export { Privacy as component };

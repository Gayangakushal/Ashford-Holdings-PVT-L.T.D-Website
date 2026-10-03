import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-Ck29ZWyQ.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Internal links go through the router; external/tel/mailto links stay plain anchors. */
function AppLink({ href, className, children, ...rest }) {
	if (href.startsWith("/") && !href.startsWith("//") && !href.includes("#")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: href,
		className,
		...rest,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className,
		...rest,
		children
	});
}
function Arrow({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 20 10",
		"aria-hidden": "true",
		className: cn("btn-arrow h-2.5 w-5", className),
		fill: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 5h18M14 1l4 4-4 4",
			stroke: "currentColor",
			strokeWidth: "1.2"
		})
	});
}
function ButtonLink({ href, variant = "primary", children, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
		href,
		className: cn("btn", `btn-${variant}`, className),
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "btn-label",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
	});
}
/** Small mono uppercase link with a travelling arrow. */
function TextLink({ href, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
		href,
		className: cn("text-link", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
	});
}
/**
* Central company data for Sirocco Air Technologies.
*
* Sources (see SOURCE-NOTES.md):
*  [WEB]  sairt.com — the company's own published website (home + about pages).
*  [USER] Contact details and team confirmed by the client.
* Nothing here is invented. Figures that conflict between sources are omitted.
*/
var SITE_URL = "https://www.sairt.com";
var site = {
	name: "Ashford Holdings PVT L.T.D",
	shortName: "Ashford Holdings PVT L.T.D",
	legalName: "Ashford Holdings PVT L.T.D",
	/** [WEB] */
	tagline: "Engineering Air. Enhancing Lives.",
	discipline: "Air & Environmental Engineering",
	shortDescription: "Air and environmental engineering for industrial, commercial and infrastructure facilities in Sri Lanka — ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and material handling.",
	/** [USER] Contact details from the supplied Ashford screenshot; truncated postal code omitted. */
	phone: "+94 76 666 8859",
	phoneHref: "tel:+94766668859",
	email: "info.ashfordholdings@gmail.com",
	emailHref: "mailto:info.ashfordholdings@gmail.com",
	whatsapp: "+94 76 626 7717",
	whatsappHref: "https://wa.me/94766267717",
	address: {
		line1: "227/6, Gemunu Mw, Watthegedara Road",
		line2: "Watthegedara, Maharaga",
		country: "Sri Lanka"
	},
	social: [{
		label: "LinkedIn",
		href: "https://www.linkedin.com/company/sirocco-air-technologies-pvt-ltd/"
	}, {
		label: "Facebook",
		href: "https://www.facebook.com/SiroccoAirTech/"
	}]
};
var addressOneLine = `${site.address.line1}, ${site.address.line2}, ${site.address.country}`;
/** Temporarily hidden; enable when the leadership content is ready. */
var siteFeatures = { leadership: false };
var navigation = [
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Equipment",
		to: "/products"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
/** [WEB] about page. */
var statements = {
	vision: "The nation's most sought after ‘Environment Comfort’ engineering company.",
	mission: "Ashford Holdings PVT L.T.D will lead the field in Sri Lanka by 2032 and will effect a positive change in the lives of millions.",
	values: [
		"Trust",
		"Accountability",
		"Integrity",
		"Loyalty"
	]
};
/** [WEB] "We work alongside world-class manufacturers from Germany, Malaysia, Singapore, India, and China". */
var partnerCountries = [
	"Germany",
	"Malaysia",
	"Singapore",
	"India",
	"China"
];
/**
* [WEB] Team as published on sairt.com/about — names, titles and credentials only.
* No portraits are published there, so none are shown (no stand-in or generated faces).
*/
var leadership = [
	{
		name: "Suren Chandraratna",
		role: "Managing Director",
		credentials: "MBA UK, Dip. BM, F.I.M.S. UK",
		bio: "A management professional with more than 18 years in the industry, spanning sales, marketing, engineering, production and operations. Ashford Holdings PVT L.T.D credits him with pioneering evaporative-cooling adoption locally and contributing to large-scale ventilation, cooling and racking projects."
	},
	{
		name: "Rohan Rajaratnam",
		role: "Head Communication & Marketing",
		credentials: "B.Com",
		bio: "A marketing and communications professional with more than three decades of experience, including senior leadership roles across advertising and communications organisations in Sri Lanka."
	},
	{
		name: "Dr. Prasan De Waas Tilakaratne",
		role: "Group Engineering Director",
		credentials: "PhD, BE (Hons), MIE Aus",
		bio: "An engineering professional with experience in robotics, assembly systems, research and development, consultancy and patented engineering work."
	},
	{
		name: "Harin Chandraratna",
		role: "Engineering Systems Integrator",
		credentials: "Chartered Mechanical Engineer, M.I. Mech E, C.Eng",
		bio: "A specialist in thermodynamics and fluid mechanics with experience across refrigeration, ventilation, water systems, hospitality engineering and industrial research and development."
	},
	{
		name: "Ravindra Alwis",
		role: "General Manager - Sales",
		credentials: "B.Com Special",
		bio: "A ventilation and industrial-cooling specialist with extensive experience in applications engineering, factory ventilation, special-purpose air movement and energy management."
	},
	{
		name: "Gayan Kodikara",
		role: "Assistant General Manager / Engineering",
		credentials: "B.Eng (Hons), MBA (UK)",
		bio: "An engineering leader with exposure to manufacturing and cement operations before joining Ashford Holdings PVT L.T.D, where he leads professional engineers and design-drafting teams."
	}
];
/**
* Engineering approach. Process stages are described as engineering practice,
* not as performance claims.
*/
var process = [
	{
		step: "01",
		title: "Survey",
		text: "Site, process, occupancy and existing plant are assessed before anything is specified."
	},
	{
		step: "02",
		title: "Engineer",
		text: "Airflow, heat load, pressure and filtration requirements are calculated and drawn."
	},
	{
		step: "03",
		title: "Select",
		text: "Equipment is matched to the calculated duty from established manufacturers."
	},
	{
		step: "04",
		title: "Fabricate",
		text: "Ductwork, canopies, supports and assemblies are fabricated to drawing."
	},
	{
		step: "05",
		title: "Install",
		text: "Mechanical, electrical and controls interfaces are installed and assembled on site."
	},
	{
		step: "06",
		title: "Commission",
		text: "Systems are tested, balanced and handed over with documentation and support."
	}
];
//#endregion
export { TextLink as a, leadership as c, process as d, site as f, SITE_URL as i, navigation as l, statements as m, Arrow as n, addressOneLine as o, siteFeatures as p, ButtonLink as r, cn as s, AppLink as t, partnerCountries as u };

import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { n as Arrow, r as ButtonLink, t as AppLink } from "./_ssr/site-Ck29ZWyQ.mjs";
import { t as disciplineBySlug } from "./_ssr/disciplines-dBQSdk_D.mjs";
import { a as projects } from "./_ssr/projects-ARMA9LCP.mjs";
import { n as SectionLabel, t as SectionHeading } from "./_ssr/SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./_ssr/CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./_ssr/PageHero-BUWsN1rz.mjs";
import { t as ProjectCard } from "./_ssr/ProjectCard-DTC673ke.mjs";
import { n as industryBySlug } from "./_ssr/industries-DtSQflgv.mjs";
import { t as Route } from "./_slug-CDKlm-kk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DTICKl61.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryDetail() {
	const { slug } = Route.useParams();
	const i = industryBySlug(slug);
	if (!i) return null;
	const ds = i.disciplines.map((s) => disciplineBySlug(s)).filter((d) => Boolean(d));
	const related = projects.filter((p) => p.industrySlug === i.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: `Industry ${i.index}`,
				title: i.name,
				intro: i.summary,
				image: i.image,
				crumbs: [{
					label: "Industries",
					href: "/industries"
				}, { label: i.name }],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: "/contact#enquiry",
					children: "Discuss a facility"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "01",
							children: "Typical air challenges"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 border-t border-line",
							children: i.challenges.map((c, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-5 border-b border-line py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "step-num pt-1",
									children: String(n + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "t-body text-paper!",
									children: c
								})]
							}, c))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 lg:col-start-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "02",
								children: "Relevant disciplines"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 border-t border-line",
								children: ds.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
									href: `/solutions/${d.slug}`,
									className: "group flex items-center justify-between gap-6 border-b border-line py-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-baseline gap-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "step-num",
											children: d.index
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "t-h3 transition-colors group-hover:text-brass",
											children: d.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "text-steel transition-transform group-hover:translate-x-1 group-hover:text-brass" })]
								}) }, d.slug))
							}),
							i.clients.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-tech",
									children: "Clients in this sector"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-2",
									children: i.clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "chip",
										children: c
									}, c))
								})]
							}) : null
						]
					})]
				})
			}),
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "ind-projects",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "03",
						label: "Projects",
						id: "ind-projects",
						title: "Delivered in this sector."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "projects-bento mt-14",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project: p,
							size: "md"
						}, p.slug))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Engineering air for ",
				i.name.toLowerCase(),
				"."
			] }) })
		]
	});
}
//#endregion
export { IndustryDetail as component };

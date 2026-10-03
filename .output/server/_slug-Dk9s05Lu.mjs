import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { a as TextLink, n as Arrow, t as AppLink } from "./_ssr/site-Ck29ZWyQ.mjs";
import { t as disciplineBySlug } from "./_ssr/disciplines-dBQSdk_D.mjs";
import { a as projects, i as projectBySlug, r as feedbackForProject } from "./_ssr/projects-ARMA9LCP.mjs";
import { n as SectionLabel } from "./_ssr/SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./_ssr/CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./_ssr/PageHero-BUWsN1rz.mjs";
import { t as Reveal } from "./_ssr/Reveal-B4TwLp9k.mjs";
import { n as ProjectVisual } from "./_ssr/ProjectCard-DTC673ke.mjs";
import { t as Route } from "./_slug-CLKLn6CF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Dk9s05Lu.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const { slug } = Route.useParams();
	const p = projectBySlug(slug);
	if (!p) return null;
	const quote = feedbackForProject(p.slug);
	const discipline = disciplineBySlug(p.disciplineSlug);
	const i = projects.findIndex((x) => x.slug === p.slug);
	const next = projects[(i + 1) % projects.length];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: `Project P—${p.index}`,
				title: p.title,
				intro: p.summary,
				crumbs: [{
					label: "Projects",
					href: "/projects"
				}, { label: p.client }],
				meta: [
					{
						label: "Client",
						value: p.client
					},
					{
						label: "Industry",
						value: p.industry
					},
					{
						label: "Discipline",
						value: p.discipline
					},
					...p.location ? [{
						label: "Location",
						value: p.location
					}] : []
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y pt-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "figure",
						variant: "clip",
						className: "feature-media mt-0",
						style: { aspectRatio: "16 / 8" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { project: p }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "feature-media-tag",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["P—", p.index] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.visual === "photo" ? "Representative image — not the client site" : "Engineering drawing — illustrative" })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "01",
							children: "Scope"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-8",
							children: p.scope.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "t-body",
								children: s
							}, s))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 lg:col-start-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "02",
							children: "Outcome · as reported by the client"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-8",
							children: p.outcome.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "t-body",
								children: s
							}, s))
						})]
					})]
				})
			}),
			quote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-label": "Client feedback",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "03",
						children: "Client feedback"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "mt-12 grid gap-10 lg:grid-cols-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "feedback-mark lg:col-span-1",
								"aria-hidden": "true",
								children: "“"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "lg:col-span-9",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[clamp(1.5rem,1.05rem+1.9vw,2.75rem)] leading-[1.2] tracking-[-0.025em]",
									children: quote.quote
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "feedback-cite lg:col-span-9 lg:col-start-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "feedback-logo",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: quote.logo,
										alt: "",
										width: 176,
										height: 176,
										loading: "lazy"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "feedback-client",
									children: quote.client
								})]
							})
						]
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between",
					children: [discipline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						href: `/solutions/${discipline.slug}`,
						children: discipline.title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
						href: `/projects/${next.slug}`,
						className: "group flex items-center gap-6 text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "t-tech block",
							children: "Next project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "t-h3 mt-2 block transition-colors group-hover:text-brass",
							children: next.title
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-3 w-7" })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
		]
	});
}
//#endregion
export { ProjectDetail as component };

import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { a as TextLink, r as ButtonLink } from "./_ssr/site-Ck29ZWyQ.mjs";
import { n as disciplineForSystem, t as disciplineBySlug } from "./_ssr/disciplines-dBQSdk_D.mjs";
import { n as solutionImages } from "./_ssr/media-Clrt4nID.mjs";
import { r as products } from "./_ssr/products-BzmRs_1f.mjs";
import { a as projects, n as feedback } from "./_ssr/projects-ARMA9LCP.mjs";
import { n as solutions, t as solutionBySlug } from "./_ssr/solutions-JGMgkD27.mjs";
import { t as Route } from "./_slug-CSp9yLI1.mjs";
import { n as SectionLabel, t as SectionHeading } from "./_ssr/SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./_ssr/CTA-D9xA-PHW.mjs";
import { t as PageHero } from "./_ssr/PageHero-BUWsN1rz.mjs";
import { t as Reveal } from "./_ssr/Reveal-B4TwLp9k.mjs";
import { t as RackingDrawing } from "./_ssr/RackingDrawing-BfKN06c3.mjs";
import { t as ProjectCard } from "./_ssr/ProjectCard-DTC673ke.mjs";
import { n as SolutionCard, t as ProductCard } from "./_ssr/Cards-BazQSz8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BqcCsJZM.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionRoute() {
	const { slug } = Route.useParams();
	const d = disciplineBySlug(slug);
	if (d) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisciplinePage, { d });
	const s = solutionBySlug(slug);
	if (s) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPage, { s });
	return null;
}
function DisciplinePage({ d }) {
	const systems = d.systems.map((slug) => solutionBySlug(slug)).filter((x) => Boolean(x));
	const related = products.filter((p) => d.products.includes(p.slug));
	const relatedProjects = projects.filter((p) => p.disciplineSlug === d.slug);
	const quotes = feedback.filter((f) => relatedProjects.some((p) => p.slug === f.project));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: `Solution ${d.index} / 06`,
				title: d.title,
				intro: d.description,
				image: d.image || void 0,
				imageAlt: d.imageAlt,
				crumbs: [{
					label: "Solutions",
					href: "/solutions"
				}, { label: d.title }],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: "/contact#enquiry",
					children: "Discuss a project"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "section-y",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "01",
							children: "Overview"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-h3 mt-10",
							children: d.statement
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Capabilities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-4",
							children: d.capabilities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: c }, c))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Applications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-4",
							children: d.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
						})] })]
					})]
				}), d.schematic === "racking" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						variant: "clip",
						as: "figure",
						className: "feature-media",
						style: { aspectRatio: "16 / 8" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RackingDrawing, { label: "Racking elevation" })
					})
				}) : null]
			}),
			systems.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "systems-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "02",
						label: "Systems",
						id: "systems-title",
						title: "Systems within this discipline."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card-grid mt-14",
						children: systems.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionCard, { solution: s }, s.slug))
					})]
				})
			}) : null,
			relatedProjects.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "projects-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "03",
							label: "Projects",
							id: "projects-title",
							title: "Delivered for clients."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "projects-bento mt-14",
							children: relatedProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project: p,
								size: "md"
							}, p.slug))
						}),
						quotes[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "quote-block mt-16 max-w-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"“",
								quotes[0].quote,
								"”"
							] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "t-tech mt-5",
								children: ["— ", quotes[0].client]
							})]
						}) : null
					]
				})
			}) : null,
			related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "equipment-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "04",
						label: "Equipment",
						id: "equipment-title",
						title: "Related equipment."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "card-grid is-4 mt-14",
						children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Discuss your ",
				d.short.toLowerCase(),
				" project."
			] }) })
		]
	});
}
function SystemPage({ s }) {
	const parent = disciplineForSystem(s.slug);
	const siblings = parent ? parent.systems.filter((x) => x !== s.slug).slice(0, 3).map((x) => solutionBySlug(x)).filter((x) => Boolean(x)) : solutions.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: parent ? `${parent.title} · System` : s.category,
				title: s.title,
				intro: s.summary,
				image: solutionImages[s.slug],
				crumbs: [
					{
						label: "Solutions",
						href: "/solutions"
					},
					...parent ? [{
						label: parent.short,
						href: `/solutions/${parent.slug}`
					}] : [],
					{ label: s.title }
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: "/contact#enquiry",
					children: "Discuss this system"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "01",
							children: "Overview"
						}), s.overview.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-body mt-6",
							children: p
						}, p))]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:col-start-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Typical applications"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-4",
							children: s.applications.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "how-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "02",
						label: "How it works",
						id: "how-title",
						title: "Engineered as a complete air path."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "step-grid is-4 mt-14",
						children: s.how.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "step-num",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "t-h3 mt-8",
								children: h.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-small mt-3",
								children: h.text
							})
						] }, h.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "03",
							children: "Design intent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "feature-list mt-8",
							children: s.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "t-body",
								children: b
							}, b))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5 lg:col-start-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Related equipment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: s.equipment.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "chip",
								children: e
							}, e))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "faq-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x detail-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "04",
							children: "Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "faq-title",
							className: "t-h2 mt-10",
							children: "Common questions."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "spec lg:col-span-7 lg:col-start-6",
						children: s.faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid-cols-1!",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[0.9375rem]! normal-case! tracking-normal! text-paper!",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "t-small",
								children: f.a
							})]
						}, f.q))
					})]
				})
			}),
			siblings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line bg-carbon",
				"aria-labelledby": "related-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								index: "05",
								rule: false,
								children: "Related systems"
							}), parent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
								href: `/solutions/${parent.slug}`,
								children: parent.title
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "related-title",
							className: "sr-only",
							children: "Related systems"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "card-grid mt-10",
							children: siblings.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionCard, { solution: x }, x.slug))
						})
					]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, { title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Discuss your ",
				s.title.toLowerCase(),
				" project."
			] }) })
		]
	});
}
//#endregion
export { SolutionRoute as component };

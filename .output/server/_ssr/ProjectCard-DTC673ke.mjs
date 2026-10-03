import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Arrow, s as cn, t as AppLink } from "./site-Ck29ZWyQ.mjs";
import { t as RackingDrawing } from "./RackingDrawing-BfKN06c3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-DTC673ke.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectVisual({ project, className }) {
	if (project.visual === "racking" || !project.image) {
		const height = project.scope.find((s) => /\d+\s*ft/i.test(s))?.match(/(\d+\s*ft)/i)?.[1];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RackingDrawing, {
			className,
			height,
			label: `${project.client} — storage`
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: project.image.src,
		alt: project.image.alt,
		loading: "lazy",
		decoding: "async",
		className: cn("h-full w-full object-cover", className)
	});
}
function ProjectCard({ project, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: cn("project-card", `project-card-${size}`, className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
			href: `/projects/${project.slug}`,
			className: "project-card-link",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "project-card-media",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectVisual, { project }), project.visual === "photo" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "project-card-note",
					children: "Representative image"
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "project-card-body",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "project-card-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "project-card-index",
							children: ["P—", project.index]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "t-tech",
							children: project.discipline
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "project-card-title",
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "project-card-meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Client" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.client })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Industry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.industry })] }),
							project.location ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.location })] }) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "project-card-arrow",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})
					})
				]
			})]
		})
	});
}
//#endregion
export { ProjectVisual as n, ProjectCard as t };

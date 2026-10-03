import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { s as cn } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RackingDrawing-BfKN06c3.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Engineering elevation drawing used for storage projects and the racking discipline.
* No project photography was supplied for racking, so a drawing is used instead of
* an unrelated photograph. `height` adds a dimension callout only when it is stated
* in the source (e.g. "40 ft").
*/
function RackingDrawing({ className, height, label = "Elevation — racking bay" }) {
	const bays = 5;
	const levels = 6;
	const x0 = 120;
	const y0 = 70;
	const bw = 150;
	const lh = 62;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 1000 560",
		className: cn("drawing", className),
		role: "img",
		"aria-label": `Engineering drawing: ${label}${height ? `, ${height} high` : ""}`,
		preserveAspectRatio: "xMidYMid slice",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "1000",
				height: "560",
				className: "drawing-bg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "drawing-grid",
				children: [Array.from({ length: 26 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: i * 40,
					y1: "0",
					x2: i * 40,
					y2: "560"
				}, `v${i}`)), Array.from({ length: 15 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: i * 40,
					x2: "1000",
					y2: i * 40
				}, `h${i}`))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "60",
				y1: 442,
				x2: "940",
				y2: 442,
				className: "drawing-strong"
			}),
			Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x0 + i * bw,
				y1: y0,
				x2: x0 + i * bw,
				y2: 442,
				className: "drawing-strong"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x0 + i * bw + 8,
				y1: y0,
				x2: x0 + i * bw + 8,
				y2: 442,
				className: "drawing-line"
			})] }, `u${i}`)),
			Array.from({ length: levels }, (_, l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x0,
				y1: y0 + l * lh + lh,
				x2: 870,
				y2: y0 + l * lh + lh,
				className: "drawing-accent"
			}), Array.from({ length: bays }, (_, b) => (l * 7 + b * 3) % 5 !== 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: x0 + b * bw + 20,
				y: y0 + l * lh + 14,
				width: 118,
				height: 42,
				className: "drawing-load"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x0 + b * bw + 20,
				y1: y0 + l * lh + lh - 10,
				x2: x0 + b * bw + bw - 12,
				y2: y0 + l * lh + lh - 10,
				className: "drawing-line"
			})] }, `p${b}`) : null)] }, `l${l}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "drawing-dim",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "80",
						y1: y0,
						x2: "80",
						y2: 442
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "72",
						y1: y0,
						x2: "88",
						y2: y0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "72",
						y1: 442,
						x2: "88",
						y2: 442
					}),
					height ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "64",
						y: 256,
						transform: `rotate(-90 64 256)`,
						textAnchor: "middle",
						children: height.toUpperCase()
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x0,
						y1: 476,
						x2: 870,
						y2: 476
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
						x: 495,
						y: 496,
						textAnchor: "middle",
						children: [
							bays,
							" BAYS · ",
							levels,
							" BEAM LEVELS (ILLUSTRATIVE)"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "940",
				y: "40",
				textAnchor: "end",
				className: "drawing-title",
				children: label.toUpperCase()
			})
		]
	});
}
//#endregion
export { RackingDrawing as t };

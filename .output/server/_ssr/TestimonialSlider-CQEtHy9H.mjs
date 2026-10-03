import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as carouselFeedback } from "./projects-ARMA9LCP.mjs";
import { n as SectionLabel } from "./SectionLabel-WH9A3uhu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TestimonialSlider-CQEtHy9H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TestimonialSlider({ index = "11", items = carouselFeedback }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [interacting, setInteracting] = (0, import_react.useState)(false);
	const [focused, setFocused] = (0, import_react.useState)(false);
	const [reducedMotion, setReducedMotion] = (0, import_react.useState)(false);
	const total = items.length;
	const autoplay = total > 1 && !paused && !interacting && !focused && !reducedMotion;
	(0, import_react.useEffect)(() => {
		const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReducedMotion(preference.matches);
		update();
		preference.addEventListener("change", update);
		return () => preference.removeEventListener("change", update);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!autoplay) return;
		const timer = window.setInterval(() => {
			if (!document.hidden) setActive((current) => (current + 1) % total);
		}, 6500);
		return () => window.clearInterval(timer);
	}, [
		autoplay,
		total,
		active
	]);
	const go = (next) => setActive((next + total) % total);
	const onKey = (event) => {
		if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
			event.preventDefault();
			go(active + (event.key === "ArrowRight" ? 1 : -1));
		}
	};
	if (!total) return null;
	const visible = total === 1 ? [items[0]] : [items[active % total], items[(active + 1) % total]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y feedback",
		"aria-labelledby": "feedback-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index,
				children: "Client feedback"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "client-feedback-layout",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "client-feedback-intro",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "feedback-title",
						className: "t-h2",
						children: [
							"What Our",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Clients Say"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "t-body mt-6",
						children: "Client satisfaction is at the heart of everything we do. Hear what our clients have to say about working with us, from the design and installation to the support that follows."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "client-feedback-carousel",
					"aria-roledescription": "carousel",
					"aria-label": "Client testimonials",
					onKeyDown: onKey,
					onMouseEnter: () => setInteracting(true),
					onMouseLeave: () => setInteracting(false),
					onFocusCapture: () => setFocused(true),
					onBlurCapture: (event) => {
						if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "client-feedback-cards",
						"aria-live": autoplay ? "off" : "polite",
						"aria-atomic": "true",
						children: visible.map((item, position) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: `client-review-card${position === 1 ? " client-review-secondary" : ""}`,
							"aria-roledescription": "slide",
							"aria-label": `${(active + position) % total + 1} of ${total}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.quote }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "client-review-logo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.logo,
									alt: "",
									width: 96,
									height: 96,
									loading: "lazy",
									decoding: "async"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "client-review-name",
								children: item.client
							})] })]
						}, `${active}-${item.client}`))
					}), total > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "client-feedback-navigation",
						children: [
							!reducedMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "client-feedback-autoplay",
								onClick: () => setPaused((current) => !current),
								"aria-label": paused ? "Start automatic feedback slides" : "Pause automatic feedback slides",
								children: paused ? "Play" : "Pause"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "client-feedback-arrow",
								onClick: () => go(active - 1),
								"aria-label": "Previous feedback",
								children: "←"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "client-feedback-dots",
								"aria-label": "Choose client feedback",
								children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `client-feedback-dot${i === active ? " is-active" : ""}`,
									onClick: () => go(i),
									"aria-label": `Show feedback from ${item.client}`,
									"aria-current": i === active ? "true" : void 0,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
								}, item.client))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "client-feedback-arrow",
								onClick: () => go(active + 1),
								"aria-label": "Next feedback",
								children: "→"
							})
						]
					})]
				})]
			})]
		})
	});
}
//#endregion
export { TestimonialSlider as t };

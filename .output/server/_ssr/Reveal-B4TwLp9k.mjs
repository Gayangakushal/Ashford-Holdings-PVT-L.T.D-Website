import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { s as cn } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-B4TwLp9k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Scroll reveal. Content is only hidden when JavaScript is running (html.js), so the
* page stays fully readable without JS. Reduced-motion users see content immediately.
*/
function Reveal({ children, delay = 0, className, variant = "rise", as: Tag = "div", style }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.dataset["shown"] = "";
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				el.dataset["shown"] = "";
				io.disconnect();
			}
		}, {
			rootMargin: "0px 0px -10% 0px",
			threshold: .05
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-reveal": variant,
		style: {
			...style,
			transitionDelay: delay ? `${delay}ms` : void 0
		},
		className: cn(className),
		children
	});
}
//#endregion
export { Reveal as t };

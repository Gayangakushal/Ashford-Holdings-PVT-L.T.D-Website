import { n as __toESM } from "../_runtime.mjs";
import { i as performance_default } from "../_libs/h3-v2+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as TextLink, f as site, m as statements, n as Arrow, r as ButtonLink, s as cn, t as AppLink, u as partnerCountries } from "./site-Ck29ZWyQ.mjs";
import { r as disciplines } from "./disciplines-dBQSdk_D.mjs";
import { i as projectBySlug, n as feedback } from "./projects-ARMA9LCP.mjs";
import { n as SectionLabel, t as SectionHeading } from "./SectionLabel-WH9A3uhu.mjs";
import { t as CTA } from "./CTA-D9xA-PHW.mjs";
import { t as Reveal } from "./Reveal-B4TwLp9k.mjs";
import { t as RackingDrawing } from "./RackingDrawing-BfKN06c3.mjs";
import { t as ProjectCard } from "./ProjectCard-DTC673ke.mjs";
import { t as industries } from "./industries-DtSQflgv.mjs";
import { n as NetworkMap, r as WhyAshford, t as AirflowIntelligence } from "./WhyAshford-DD6Hqjn4.mjs";
import { r as ContactSection } from "./ContactSection-TbTGMZce.mjs";
import { t as IndustryGrid } from "./IndustryGrid-XqipysfU.mjs";
import { t as TestimonialSlider } from "./TestimonialSlider-CQEtHy9H.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2auN5JU-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AirflowCanvas({ focusX = .66, focusY = .44 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
		const coarse = matchMedia("(pointer: coarse)").matches;
		let w = 0;
		let h = 0;
		let dpr = 1;
		let particles = [];
		let raf = 0;
		let visible = true;
		const pointer = {
			x: -9999,
			y: -9999,
			active: false,
			sx: -9999,
			sy: -9999
		};
		const count = () => {
			const area = w * h / 1296e3;
			return Math.round((coarse || w < 768 ? 70 : 240) * Math.min(1.3, Math.max(.5, area)));
		};
		const spawn = (initial) => ({
			x: initial ? Math.random() * 1.1 - .05 : -.05 - Math.random() * .1,
			lane: (Math.random() * 2 - 1) * (.6 + Math.random() * .4),
			speed: 9e-4 + Math.random() * .0011,
			phase: Math.random() * Math.PI * 2,
			warm: Math.random() < .12,
			life: 0
		});
		const envelope = (x) => {
			const d = x - focusX;
			const pinch = Math.exp(-(d * d) / .018);
			return (.36 + (x > focusX ? .1 : 0)) * (1 - .82 * pinch);
		};
		const centre = (x) => focusY + .08 * Math.cos((x - focusX) * 2.6) - .06;
		const pos = (p, t) => {
			const y = centre(p.x) + p.lane * envelope(p.x) + .012 * Math.sin(p.phase + t * .0012 + p.x * 9);
			let px = p.x * w;
			let py = y * h;
			if (pointer.active) {
				const dx = px - pointer.sx;
				const dy = py - pointer.sy;
				const r2 = dx * dx + dy * dy;
				const R = Math.min(w, h) * .16;
				const f = Math.exp(-r2 / (R * R));
				py += (dy >= 0 ? 1 : -1) * f * R * .45;
				px += f * 6;
			}
			return [px, py];
		};
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			dpr = Math.min(window.devicePixelRatio || 1, 1.5);
			w = rect.width;
			h = rect.height;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			particles = Array.from({ length: count() }, () => spawn(true));
			if (reduced) drawStatic();
		};
		const drawStatic = () => {
			ctx.clearRect(0, 0, w, h);
			ctx.lineWidth = 1;
			for (let i = 0; i < 22; i++) {
				const lane = -1 + i / 21 * 2;
				ctx.beginPath();
				for (let s = 0; s <= 80; s++) {
					const x = s / 80;
					const y = centre(x) + lane * envelope(x);
					if (s === 0) ctx.moveTo(x * w, y * h);
					else ctx.lineTo(x * w, y * h);
				}
				ctx.strokeStyle = i % 7 === 3 ? "rgba(201,180,138,0.22)" : "rgba(244,244,241,0.08)";
				ctx.stroke();
			}
		};
		const prev = /* @__PURE__ */ new Map();
		const frame = (t) => {
			raf = requestAnimationFrame(frame);
			if (!visible) return;
			pointer.sx += (pointer.x - pointer.sx) * .12;
			pointer.sy += (pointer.y - pointer.sy) * .12;
			ctx.globalCompositeOperation = "destination-out";
			ctx.fillStyle = "rgba(0,0,0,0.085)";
			ctx.fillRect(0, 0, w, h);
			ctx.globalCompositeOperation = "source-over";
			ctx.lineWidth = 1;
			ctx.lineCap = "round";
			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];
				const a = prev.get(p) ?? pos(p, t);
				const env = envelope(p.x);
				p.x += p.speed * (.7 + .3 / Math.max(env / .36, .25));
				p.life += 1;
				const b = pos(p, t);
				const alpha = Math.min(1, p.life / 40) * (p.x > .92 ? Math.max(0, (1.05 - p.x) / .13) : 1);
				ctx.strokeStyle = p.warm ? `rgba(201,180,138,${.55 * alpha})` : `rgba(244,244,241,${.32 * alpha})`;
				ctx.beginPath();
				ctx.moveTo(a[0], a[1]);
				ctx.lineTo(b[0], b[1]);
				ctx.stroke();
				prev.set(p, b);
				if (p.x > 1.05) {
					prev.delete(p);
					particles[i] = spawn(false);
				}
			}
		};
		const onMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			pointer.x = e.clientX - rect.left;
			pointer.y = e.clientY - rect.top;
			if (!pointer.active) {
				pointer.sx = pointer.x;
				pointer.sy = pointer.y;
			}
			pointer.active = pointer.y > 0 && pointer.y < rect.height;
		};
		const onLeave = () => {
			pointer.active = false;
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		const io = new IntersectionObserver(([entry]) => {
			visible = Boolean(entry?.isIntersecting) && !document.hidden;
		});
		io.observe(canvas);
		const onVis = () => {
			visible = !document.hidden;
		};
		document.addEventListener("visibilitychange", onVis);
		if (!reduced) {
			raf = requestAnimationFrame(frame);
			if (!coarse) {
				window.addEventListener("pointermove", onMove, { passive: true });
				document.documentElement.addEventListener("pointerleave", onLeave);
			}
		}
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
			io.disconnect();
			document.removeEventListener("visibilitychange", onVis);
			window.removeEventListener("pointermove", onMove);
			document.documentElement.removeEventListener("pointerleave", onLeave);
		};
	}, [focusX, focusY]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "airflow-canvas",
		"aria-hidden": "true"
	});
}
/**
* Full-screen hero. Real installation photograph (supplied ducted air distribution),
* live airflow simulation, cursor light and restrained technical overlay.
* Scroll progress drives a subtle image scale and headline drift — no scroll hijacking.
*/
function Hero() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const fine = matchMedia("(pointer: fine)").matches;
		let raf = 0;
		let mx = .62;
		let my = .4;
		let tx = mx;
		let ty = my;
		const update = () => {
			raf = 0;
			const rect = el.getBoundingClientRect();
			const p = Math.min(1, Math.max(0, -rect.top / rect.height));
			el.style.setProperty("--hero-p", p.toFixed(4));
			mx += (tx - mx) * .08;
			my += (ty - my) * .08;
			el.style.setProperty("--mx", mx.toFixed(4));
			el.style.setProperty("--my", my.toFixed(4));
			if (Math.abs(tx - mx) > .001 || Math.abs(ty - my) > .001) raf = requestAnimationFrame(update);
		};
		const schedule = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		const onMove = (e) => {
			const rect = el.getBoundingClientRect();
			tx = (e.clientX - rect.left) / rect.width;
			ty = (e.clientY - rect.top) / rect.height;
			schedule();
		};
		window.addEventListener("scroll", schedule, { passive: true });
		if (fine) el.addEventListener("pointermove", onMove, { passive: true });
		schedule();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", schedule);
			el.removeEventListener("pointermove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "hero",
		"aria-labelledby": "hero-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-media",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					type: "image/webp",
					srcSet: "/assets/hvac/hero/ducted-air-distribution-640.webp 640w, /assets/hvac/hero/ducted-air-distribution-1280.webp 1280w",
					sizes: "100vw"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/assets/hvac/ducted-air-distribution.jpg",
					alt: "",
					width: 1280,
					height: 960,
					fetchPriority: "high",
					decoding: "async"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-shade",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-light",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AirflowCanvas, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-overlay container-x",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-corner tl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-corner tr" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-corner bl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-corner br" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-meta hero-meta-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Airflow field · simulated" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Supply → plant → space" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-focus",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-focus-ring" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-focus-label",
							children: "Air distribution"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-ruler" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x hero-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-kicker",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-kicker-dot",
								"aria-hidden": "true"
							}),
							site.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-steel",
								children: ["/ ", site.discipline]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						id: "hero-title",
						className: "hero-title t-display",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Engineered air." })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mist",
								children: "Controlled environments."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-lede",
							children: "Ventilation, air conditioning, purification, BMS and fire & gas suppression — designed, supplied and installed for factories, commercial buildings and industrial facilities across Sri Lanka."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-ctas",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: "/solutions",
								variant: "primary",
								children: "Explore solutions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: "/contact",
								variant: "secondary",
								children: "Start a project"
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-strip",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x hero-strip-inner",
					children: [disciplines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: d.index }), d.short] }, d.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero-scroll",
						children: ["Scroll ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
					})]
				})
			})
		]
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y relative",
		"aria-labelledby": "intro-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "03",
					children: "Ashford Holdings PVT L.T.D"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "intro-title",
							className: "t-h2",
							children: [
								"Air and environmental engineering for facilities that",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-steel",
									children: "cannot afford to stop."
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						className: "lg:col-span-4 lg:pt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-body",
							children: "Ashford Holdings PVT L.T.D designs, supplies and installs the systems that move, clean, cool, monitor and protect the air inside industrial, commercial and infrastructure facilities — together with the racking and material-handling systems that keep those facilities running."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
							href: "/about",
							className: "mt-8",
							children: "About Ashford Holdings PVT L.T.D"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-px overflow-hidden border border-line bg-line lg:mt-28 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "figure",
						variant: "clip",
						className: "intro-figure lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/assets/hvac/plate-heat-exchanger-plant.jpg",
							alt: "Plant room with insulated ductwork, pipework and air handling equipment",
							width: 800,
							height: 600,
							loading: "lazy",
							decoding: "async"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "t-tech",
							children: "Fig. 03 — Plant room ductwork & pipework"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid bg-void lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro-statement",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Vision"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-h3 mt-4",
									children: statements.vision
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro-statement border-t border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Mission"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-body mt-4",
									children: statements.mission
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "intro-statement border-t border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Values"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-2",
									children: statements.values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "chip",
										children: v
									}, v))
								})]
							})
						]
					})]
				})
			]
		})
	});
}
var clientLogos = [
	{
		"name": "Unilever",
		"src": "/assets/clients/client-46.jpeg",
		"width": 138,
		"height": 152
	},
	{
		"name": "Ceylon Biscuits Limited (CBL)",
		"src": "/assets/clients/client-63.jpeg",
		"width": 161,
		"height": 161
	},
	{
		"name": "Wijaya Products",
		"src": "/assets/clients/client-75.jpeg",
		"width": 238,
		"height": 212
	},
	{
		"name": "MD",
		"src": "/assets/clients/client-90.png",
		"width": 230,
		"height": 219
	},
	{
		"name": "Nestlé",
		"src": "/assets/clients/client-97.jpeg",
		"width": 178,
		"height": 178
	},
	{
		"name": "Diana",
		"src": "/assets/clients/client-98.jpeg",
		"width": 282,
		"height": 179
	},
	{
		"name": "Fab",
		"src": "/assets/clients/client-22.jpeg",
		"width": 156,
		"height": 101
	},
	{
		"name": "KFC",
		"src": "/assets/clients/client-21.jpeg",
		"width": 139,
		"height": 139
	},
	{
		"name": "Burger King",
		"src": "/assets/clients/client-19.jpeg",
		"width": 147,
		"height": 147
	},
	{
		"name": "Maliban",
		"src": "/assets/clients/client-17.png",
		"width": 300,
		"height": 123
	},
	{
		"name": "Cargills",
		"src": "/assets/clients/client-99.png",
		"width": 317,
		"height": 159
	},
	{
		"name": "Farm Chemie",
		"src": "/assets/clients/client-23.jpeg",
		"width": 154,
		"height": 177
	},
	{
		"name": "Lankem",
		"src": "/assets/clients/client-24.jpeg",
		"width": 274,
		"height": 126
	},
	{
		"name": "Chevron",
		"src": "/assets/clients/client-26.jpeg",
		"width": 134,
		"height": 150
	},
	{
		"name": "Baurs",
		"src": "/assets/clients/client-27.jpeg",
		"width": 512,
		"height": 512
	},
	{
		"name": "Orit",
		"src": "/assets/clients/client-29.jpeg",
		"width": 153,
		"height": 153
	},
	{
		"name": "Coats",
		"src": "/assets/clients/client-31.png",
		"width": 120,
		"height": 120
	},
	{
		"name": "Camso",
		"src": "/assets/clients/client-33.png",
		"width": 259,
		"height": 125
	},
	{
		"name": "Sil ueta",
		"src": "/assets/clients/client-34.png",
		"width": 277,
		"height": 277
	},
	{
		"name": "MAS",
		"src": "/assets/clients/client-36.jpeg",
		"width": 203,
		"height": 77
	},
	{
		"name": "ATG",
		"src": "/assets/clients/client-37.png",
		"width": 279,
		"height": 181
	},
	{
		"name": "Honda",
		"src": "/assets/clients/client-38.png",
		"width": 259,
		"height": 144
	},
	{
		"name": "Toyota",
		"src": "/assets/clients/client-40.jpeg",
		"width": 226,
		"height": 157
	},
	{
		"name": "DIMO",
		"src": "/assets/clients/client-41.jpeg",
		"width": 225,
		"height": 96
	},
	{
		"name": "AMW",
		"src": "/assets/clients/client-42.jpeg",
		"width": 225,
		"height": 166
	},
	{
		"name": "DPMC",
		"src": "/assets/clients/client-43.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "Nawaloka Hospitals",
		"src": "/assets/clients/client-44.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "Durdans Hospital",
		"src": "/assets/clients/client-47.png",
		"width": 225,
		"height": 131
	},
	{
		"name": "Lanka Hospitals",
		"src": "/assets/clients/client-49.png",
		"width": 220,
		"height": 231
	},
	{
		"name": "Suwasewana Hospitals",
		"src": "/assets/clients/client-51.png",
		"width": 359,
		"height": 92
	},
	{
		"name": "Asiri Health",
		"src": "/assets/clients/client-52.jpeg",
		"width": 265,
		"height": 139
	},
	{
		"name": "Amaya Lake",
		"src": "/assets/clients/client-53.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "Riverina",
		"src": "/assets/clients/riverina.png",
		"width": 160,
		"height": 176
	},
	{
		"name": "Araliya Green Hills",
		"src": "/assets/clients/client-55.png",
		"width": 225,
		"height": 133
	},
	{
		"name": "Jetwing",
		"src": "/assets/clients/client-57.jpeg",
		"width": 257,
		"height": 145
	},
	{
		"name": "Club Hotel Dolphin",
		"src": "/assets/clients/client-58.jpeg",
		"width": 216,
		"height": 216
	},
	{
		"name": "Palm Garden Hotel",
		"src": "/assets/clients/client-95.jpeg",
		"width": 143,
		"height": 143
	},
	{
		"name": "The Kingsbury",
		"src": "/assets/clients/client-66.jpeg",
		"width": 246,
		"height": 171
	},
	{
		"name": "Taj",
		"src": "/assets/clients/client-65.jpeg",
		"width": 150,
		"height": 134
	},
	{
		"name": "Cinnamon",
		"src": "/assets/clients/client-61.jpeg",
		"width": 225,
		"height": 125
	},
	{
		"name": "Hilton",
		"src": "/assets/clients/client-60.jpeg",
		"width": 174,
		"height": 122
	},
	{
		"name": "Colombo Swimming Club",
		"src": "/assets/clients/client-93.jpeg",
		"width": 283,
		"height": 178
	},
	{
		"name": "Oak Ray Hotels",
		"src": "/assets/clients/client-94.jpeg",
		"width": 147,
		"height": 154
	},
	{
		"name": "Abans",
		"src": "/assets/clients/client-67.jpeg",
		"width": 303,
		"height": 239
	},
	{
		"name": "Softlogic",
		"src": "/assets/clients/client-68.jpeg",
		"width": 226,
		"height": 149
	},
	{
		"name": "Civimech",
		"src": "/assets/clients/client-69.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "Sanken Construction",
		"src": "/assets/clients/client-70.jpeg",
		"width": 370,
		"height": 260
	},
	{
		"name": "Singer",
		"src": "/assets/clients/client-72.png",
		"width": 290,
		"height": 118
	},
	{
		"name": "Tritech Engineers",
		"src": "/assets/clients/client-73.png",
		"width": 225,
		"height": 154
	},
	{
		"name": "K&A Engineers (Pvt) Ltd.",
		"src": "/assets/clients/client-76.jpeg",
		"width": 86,
		"height": 86
	},
	{
		"name": "CD Engineering",
		"src": "/assets/clients/client-71.jpeg",
		"width": 200,
		"height": 200
	},
	{
		"name": "Cooltech",
		"src": "/assets/clients/client-78.jpeg",
		"width": 279,
		"height": 55
	},
	{
		"name": "Metropolitan",
		"src": "/assets/clients/client-80.jpeg",
		"width": 225,
		"height": 102
	},
	{
		"name": "Maga",
		"src": "/assets/clients/client-81.jpeg",
		"width": 185,
		"height": 121
	},
	{
		"name": "Access",
		"src": "/assets/clients/client-74.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "Fresco Engineering",
		"src": "/assets/clients/client-87.png",
		"width": 225,
		"height": 225
	},
	{
		"name": "ASDA Engineering",
		"src": "/assets/clients/client-86.jpeg",
		"width": 225,
		"height": 225
	},
	{
		"name": "Monarch",
		"src": "/assets/clients/client-82.jpeg",
		"width": 300,
		"height": 300
	},
	{
		"name": "Waverley Kitchens",
		"src": "/assets/clients/client-84.jpeg",
		"width": 265,
		"height": 66
	},
	{
		"name": "Kent Engineers",
		"src": "/assets/clients/client-89.png",
		"width": 295,
		"height": 81
	},
	{
		"name": "Fentons",
		"src": "/assets/clients/client-91.jpeg",
		"width": 225,
		"height": 119
	},
	{
		"name": "LTL Holdings",
		"src": "/assets/clients/client-85.jpeg",
		"width": 307,
		"height": 143
	},
	{
		"name": "Sperrys",
		"src": "/assets/clients/client-92.jpeg",
		"width": 300,
		"height": 300
	}
];
/**
* Client trust wall. Only original logo artwork supplied with the project is used.
* Each track holds two identical sets and translates by exactly one set width,
* so the loop has no visible jump. Duplicates are hidden from assistive tech.
* Reduced motion: no animation, duplicates removed, logos wrap.
*/
function Track({ logos, reverse = false, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee",
		role: "group",
		"aria-label": label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: reverse ? "marquee-track is-reverse" : "marquee-track",
			style: { animationDuration: `${logos.length * 8}s` },
			children: [false, true].map((dup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "marquee-set",
				"aria-hidden": dup || void 0,
				children: logos.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "marquee-item",
					title: logo.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo.src,
						alt: dup ? "" : logo.name,
						width: logo.width,
						height: logo.height,
						loading: "lazy",
						decoding: "async",
						style: { "--w": `${Math.min(120, logo.width)}px` }
					})
				}, logo.src))
			}, String(dup)))
		})
	});
}
function LogoMarquee({ index = "12" }) {
	const rowSize = Math.ceil(clientLogos.length / 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "logos",
		"aria-labelledby": "logos-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index,
					rule: false,
					children: "Clients"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "logos-title",
					className: "t-h3 mt-6 max-w-lg",
					children: "Glimpse of our few clients."
				})] })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px",
			children: Array.from({ length: 4 }, (_, row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
				logos: clientLogos.slice(row * rowSize, (row + 1) * rowSize),
				reverse: row % 2 === 1,
				label: `Clients, row ${row + 1}`
			}, row))
		})]
	});
}
/** Counts come from verifiable lists currently used by the site. */
var metrics = [
	{
		value: disciplines.length,
		label: "Engineering disciplines",
		note: "Air, safety, controls & storage"
	},
	{
		value: industries.length,
		label: "Industry sectors",
		note: "Published by Ashford Holdings PVT L.T.D"
	},
	{
		value: feedback.length,
		label: "Published client stories",
		note: "Named feedback on sairt.com"
	},
	{
		value: partnerCountries.length,
		label: "Partner countries",
		note: partnerCountries.join(" · ")
	}
];
function CountUp({ to }) {
	const ref = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(to);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (el.getBoundingClientRect().top < window.innerHeight) return;
		setValue(0);
		let raf = 0;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry?.isIntersecting) return;
			io.disconnect();
			const start = performance_default.now();
			const tick = (now) => {
				const t = Math.min(1, (now - start) / 1200);
				setValue(Math.round((1 - Math.pow(1 - t, 4)) * to));
				if (t < 1) raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		}, { threshold: .6 });
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		"aria-hidden": "true",
		children: String(value).padStart(2, "0")
	});
}
function MetricStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "metric-strip",
		"aria-labelledby": "metrics-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-12 lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "02",
						children: "On record"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "metrics-title",
						className: "t-h3 mt-8 max-w-md uppercase tracking-[-0.01em]",
						children: [
							"Engineering air",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"across industries"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "metric-grid lg:col-span-7",
					children: metrics.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						className: "metric",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "sr-only",
							children: m.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "metric-value",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: m.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, { to: m.value })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "metric-label",
								children: m.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "t-tech mt-1 block",
								children: m.note
							})
						] })]
					}, m.label))
				})]
			})
		})
	});
}
/**
* "What we do": a stacked, interactive list of the six disciplines.
* Desktop: hovering/focusing a row swaps the image plate and expands its detail.
* Mobile: an accessible accordion with the image inside each panel.
*/
function SolutionSystem({ index = "05" }) {
	const [active, setActive] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y solution-system",
		"aria-labelledby": "solutions-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index,
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:sticky lg:top-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									id: "solutions-title",
									className: "t-h2",
									children: [
										"Engineered for",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"how air moves."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-body mt-6 max-w-md",
									children: "Six disciplines under one engineering team — so ventilation, conditioning, purification, controls, protection and storage are designed to work together."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "solution-plate mt-10 hidden lg:block",
									"aria-hidden": "true",
									children: [
										disciplines.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("solution-plate-layer", i === active && "is-active"),
											children: d.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: d.image,
												alt: "",
												loading: "lazy",
												decoding: "async"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RackingDrawing, { label: "Racking elevation" })
										}, d.slug)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "solution-plate-meta",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [disciplines[active].index, " / 06"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: disciplines[active].short })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "solution-plate-scan" }, active)
									]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "solution-list lg:col-span-7",
						children: disciplines.map((d, i) => {
							const isActive = i === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: cn("solution-row", isActive && "is-active"),
								onMouseEnter: () => setActive(i),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "solution-row-head",
									"aria-expanded": isActive,
									"aria-controls": `sol-${d.slug}`,
									onClick: () => setActive(i),
									onFocus: () => setActive(i),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "solution-row-index",
											children: d.index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "solution-row-title",
											children: d.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "solution-row-plus",
											"aria-hidden": "true"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									id: `sol-${d.slug}`,
									className: "solution-row-body",
									role: "region",
									"aria-label": d.title,
									inert: !isActive,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "solution-row-body-inner",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "solution-row-media lg:hidden",
												children: d.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: d.image,
													alt: d.imageAlt,
													loading: "lazy",
													decoding: "async"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RackingDrawing, { label: "Racking elevation" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "t-body max-w-xl",
												children: d.description
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-5 flex flex-wrap gap-2",
												children: d.capabilities.slice(0, 4).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "chip",
													children: c
												}, c))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
												href: `/solutions/${d.slug}`,
												className: "text-link mt-7",
												tabIndex: isActive ? 0 : -1,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
													"View ",
													d.short.toLowerCase(),
													" solutions"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
											})
										]
									})
								})]
							}, d.slug);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						href: "/solutions",
						children: "All solutions"
					})
				})
			]
		})
	});
}
var featured = [
	{
		slug: "variosystems-fume-extraction",
		size: "lg"
	},
	{
		slug: "ae-bangladesh-factory-upgrade",
		size: "md"
	},
	{
		slug: "dok-narrow-aisle-racking",
		size: "md"
	},
	{
		slug: "cbl-factory-ventilation",
		size: "wide"
	}
];
function Home() {
	const items = featured.map((f) => ({
		...f,
		project: projectBySlug(f.slug)
	})).filter((f) => Boolean(f.project));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AirflowIntelligence, { index: "04" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionSystem, { index: "05" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "industries-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "06",
						label: "Industries",
						id: "industries-title",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Built for demanding",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"environments."
						] }),
						intro: "Heat, fume, dust, grease, occupancy and storage density change what a system must do. We start from the operating conditions of each sector."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 lg:mt-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryGrid, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y border-t border-line",
				"aria-labelledby": "projects-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
							index: "07",
							label: "Selected projects",
							id: "projects-title",
							title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Projects, in our",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"clients’ words."
							] }),
							intro: "Each project below is confirmed by named client feedback. Scope and outcomes are stated exactly as far as that feedback goes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "projects-bento mt-14 lg:mt-20",
							children: items.map(({ project, size }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								project,
								size
							}, project.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
								href: "/projects",
								children: "All projects"
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkMap, { index: "08" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyAshford, { index: "09" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSlider, { index: "11" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMarquee, { index: "12" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { index: "14" })
		]
	});
}
//#endregion
export { Home as component };

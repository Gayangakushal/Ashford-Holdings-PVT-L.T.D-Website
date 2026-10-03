import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as TextLink, s as cn } from "./site-Ck29ZWyQ.mjs";
import { n as SectionLabel, t as SectionHeading } from "./SectionLabel-WH9A3uhu.mjs";
import { t as Reveal } from "./Reveal-B4TwLp9k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/WhyAshford-DD6Hqjn4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Signature section: a building cross-section that walks the air path —
* intake, filtration, conditioning, distribution, monitoring, extraction.
* Stages auto-advance while in view (paused on hover/focus, off for reduced motion)
* and can be selected directly.
*/
var stages = [
	{
		id: "intake",
		code: "A",
		title: "Air intake",
		text: "Outdoor air is drawn through louvred intakes positioned clear of discharge points and contamination sources.",
		discipline: {
			label: "Ventilation",
			href: "/solutions/air-conditioning-ventilation"
		}
	},
	{
		id: "filtration",
		code: "B",
		title: "Filtration",
		text: "Particulates, odours and microbes are removed — HEPA, UV-C, activated carbon or electrostatic stages, selected for the application.",
		discipline: {
			label: "Purification",
			href: "/solutions/air-purification-filtration"
		}
	},
	{
		id: "temperature",
		code: "C",
		title: "Temperature control",
		text: "Coils and plant condition the air to the measured load — cooling, dehumidifying or evaporatively cooling it.",
		discipline: {
			label: "Air conditioning",
			href: "/solutions/air-conditioning-ventilation"
		}
	},
	{
		id: "distribution",
		code: "D",
		title: "Air distribution",
		text: "Ductwork and terminals deliver air at the right volume, velocity and noise level to every zone.",
		discipline: {
			label: "Ventilation",
			href: "/solutions/air-conditioning-ventilation"
		}
	},
	{
		id: "monitoring",
		code: "E",
		title: "Monitoring",
		text: "BMS sensors track temperature, humidity and air quality and adjust plant in real time.",
		discipline: {
			label: "BMS & air quality",
			href: "/solutions/bms-air-quality"
		}
	},
	{
		id: "extraction",
		code: "F",
		title: "Extraction",
		text: "Heat, fume and dust are captured at source and discharged clear of the building.",
		discipline: {
			label: "Dust extraction",
			href: "/solutions/dust-extraction"
		}
	}
];
function AirflowIntelligence({ index = "04" }) {
	const [active, setActive] = (0, import_react.useState)(0);
	const [paused, setPaused] = (0, import_react.useState)(false);
	const [inView, setInView] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => setInView(Boolean(e?.isIntersecting)), { threshold: .35 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!inView || paused) return;
		if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const t = window.setInterval(() => setActive((a) => (a + 1) % stages.length), 3800);
		return () => window.clearInterval(t);
	}, [inView, paused]);
	const stage = stages[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "ai-section section-y",
		"aria-labelledby": "ai-title",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		onFocus: () => setPaused(true),
		onBlur: () => setPaused(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tech-grid absolute inset-0 opacity-60",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index,
				label: "Airflow intelligence",
				id: "ai-title",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Every system follows ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-steel",
					children: "the air."
				})] }),
				intro: "Ashford Holdings PVT L.T.D engineers the complete air path — not a single piece of equipment. Follow it through a building, stage by stage."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "ai-steps lg:col-span-4",
					"aria-label": "Air path stages",
					children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("ai-step", i === active && "is-active"),
						"aria-pressed": i === active,
						onClick: () => setActive(i),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ai-step-code",
								children: s.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ai-step-title",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ai-step-bar",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}, i === active && !paused && inView ? `run-${active}` : "idle")
							})
						]
					}) }, s.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "ai-figure",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AirPathDiagram, { active: stage.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "sr-only",
							children: "Cross-section of a building showing air entering through an intake, passing filtration and conditioning in rooftop plant, being distributed to two floors, monitored by sensors and extracted through a rooftop fan."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ai-readout",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "t-tech",
								children: [
									"Stage ",
									stage.code,
									" · ",
									String(active + 1).padStart(2, "0"),
									" / 06"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "t-h3 mt-3",
								children: stage.title
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-body max-w-md",
								children: stage.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
								href: stage.discipline.href,
								children: stage.discipline.label
							})
						]
					})]
				})]
			})]
		})]
	});
}
function AirPathDiagram({ active }) {
	const diffusersTop = [
		300,
		440,
		580
	];
	const diffusersRight = [800];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 1200 640",
		className: "ai-svg",
		"data-active": active,
		role: "presentation",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
				id: "ai-arrow",
				viewBox: "0 0 10 10",
				refX: "6",
				refY: "5",
				markerWidth: "5",
				markerHeight: "5",
				orient: "auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0L10 5L0 10z",
					fill: "currentColor"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: "ai-hatch",
				width: "8",
				height: "8",
				patternUnits: "userSpaceOnUse",
				patternTransform: "rotate(45)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: "0",
					x2: "0",
					y2: "8",
					stroke: "rgba(255,255,255,0.06)",
					strokeWidth: "2"
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "ai-structure",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "20",
						y1: "600",
						x2: "1180",
						y2: "600"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "160",
						y: "220",
						width: "880",
						height: "380",
						fill: "url(#ai-hatch)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "160",
						y: "220",
						width: "880",
						height: "380",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "410",
						x2: "1040",
						y2: "410"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "176",
						y: "398",
						className: "ai-dim",
						children: "LEVEL 02"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "176",
						y: "588",
						className: "ai-dim",
						children: "LEVEL 01"
					}),
					Array.from({ length: 23 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 160 + i * 40,
						y1: "612",
						x2: 160 + i * 40,
						y2: i % 5 === 0 ? 624 : 618
					}, i))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "intake",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "70",
						y: "146",
						width: "64",
						height: "64",
						className: "ai-box"
					}),
					[
						0,
						1,
						2,
						3,
						4
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "76",
						y1: 156 + i * 11,
						x2: "128",
						y2: 152 + i * 11,
						className: "ai-detail"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 178 H66",
						className: "ai-flow",
						markerEnd: "url(#ai-arrow)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 160 H66",
						className: "ai-flow ai-flow-soft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M0 196 H66",
						className: "ai-flow ai-flow-soft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M134 178 H230",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 70,
						y: 130,
						code: "A",
						label: "Intake"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "filtration",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "230",
						y: "128",
						width: "140",
						height: "80",
						className: "ai-box"
					}),
					[
						0,
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${250 + i * 20} 136 l8 32 l-8 32`,
						className: "ai-detail",
						fill: "none"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M232 178 H368",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 230,
						y: 112,
						code: "B",
						label: "Filtration"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "temperature",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "370",
						y: "128",
						width: "140",
						height: "80",
						className: "ai-box"
					}),
					[
						0,
						1,
						2,
						3,
						4,
						5,
						6
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: 384 + i * 18,
						y1: "138",
						x2: 384 + i * 18,
						y2: "198",
						className: "ai-detail"
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M372 178 H508",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 370,
						y: 112,
						code: "C",
						label: "Conditioning"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "distribution",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "510",
						y: "128",
						width: "110",
						height: "80",
						className: "ai-box"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "565",
						cy: "168",
						r: "26",
						className: "ai-detail",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "565",
						cy: "168",
						r: "4",
						className: "ai-node"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M512 178 H700 V560",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M700 262 H250",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M700 262 H860",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M700 452 H250",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M700 452 H860",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M684 210 V560 M716 210 V560",
						className: "ai-duct"
					}),
					[...diffusersTop, ...diffusersRight].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x - 16} 270 h32 l-8 8 h-16 z`,
						className: "ai-box"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} 282 q-14 40 -4 78`,
						className: "ai-flow ai-flow-soft",
						markerEnd: "url(#ai-arrow)"
					})] }, `t${x}`)),
					[...diffusersTop, ...diffusersRight].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x - 16} 460 h32 l-8 8 h-16 z`,
						className: "ai-box"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${x} 472 q14 40 4 78`,
						className: "ai-flow ai-flow-soft",
						markerEnd: "url(#ai-arrow)"
					})] }, `b${x}`)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 510,
						y: 112,
						code: "D",
						label: "Distribution"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "monitoring",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "196",
						y: "500",
						width: "54",
						height: "70",
						className: "ai-box"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "206",
						y1: "514",
						x2: "240",
						y2: "514",
						className: "ai-detail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "206",
						y1: "526",
						x2: "232",
						y2: "526",
						className: "ai-detail"
					}),
					[
						[380, 340],
						[540, 330],
						[820, 350],
						[380, 530],
						[600, 540],
						[840, 530]
					].map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: `M223 500 V${y < 410 ? 392 : 488} H${x}  V${y}`,
							className: "ai-signal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: "5",
							className: "ai-node"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: "12",
							className: "ai-pulse"
						})
					] }, `${x}-${y}`)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 196,
						y: 484,
						code: "E",
						label: "BMS"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				"data-stage": "extraction",
				className: "ai-group",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M972 210 V540 M1004 210 V540",
						className: "ai-duct"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M900 300 H988 V176",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M900 490 H988 V300",
						className: "ai-flow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "944",
						y: "128",
						width: "88",
						height: "80",
						className: "ai-box"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "988",
						cy: "168",
						r: "24",
						className: "ai-detail",
						fill: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M976 156 l24 24 M1000 156 l-24 24",
						className: "ai-detail"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M1032 168 H1110 Q1150 168 1168 112",
						className: "ai-flow",
						markerEnd: "url(#ai-arrow)"
					}),
					[300, 490].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "884",
						y: y - 8,
						width: "16",
						height: "16",
						className: "ai-box"
					}, y)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiTag, {
						x: 944,
						y: 112,
						code: "F",
						label: "Extraction"
					})
				]
			})
		]
	});
}
function AiTag({ x, y, code, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		className: "ai-tag",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x,
				y: y - 12,
				width: "16",
				height: "16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x + 8,
				y,
				textAnchor: "middle",
				className: "ai-tag-code",
				children: code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x + 24,
				y,
				className: "ai-tag-label",
				children: label.toUpperCase()
			})
		]
	});
}
function NetworkMap({ index = "08" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "network section-y",
		"aria-labelledby": "network-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index,
				label: "Our Sri Lanka network",
				id: "network-title",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Working with businesses",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"across Sri Lanka."
				] }),
				intro: "We work with the Sri Lankan operations of local and international brands, delivering engineering solutions for factories, hospitals, hotels, retail spaces and commercial facilities."
			})
		})
	});
}
/**
* Each strength is backed by evidence in the source material: either the company's
* own discipline list or wording from named client feedback.
*/
var reasons = [
	{
		title: "Integration",
		text: "Ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and racking from one engineering team — designed as one system, not six contracts.",
		evidence: "Six disciplines, one team"
	},
	{
		title: "Precision",
		text: "Systems are surveyed, calculated and drawn around the actual process, occupancy and building before equipment is selected.",
		evidence: "“Completed to our exacting standards” — Variosystems"
	},
	{
		title: "Reliability",
		text: "Delivery that holds to programme across Sri Lanka and overseas, including multi-country coordination.",
		evidence: "“Installed ahead of time” — DOK Solutions Lanka"
	},
	{
		title: "Partnership",
		text: "Long-term relationships built on post-installation support and continual improvement in energy efficiency.",
		evidence: "“For over 15 years, we have relied on their expertise” — CBL"
	}
];
function WhyAshford({ index = "09" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y why",
		"aria-labelledby": "why-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index,
				children: "Why Ashford Holdings PVT L.T.D"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "why-title",
					className: "why-title lg:col-span-4",
					children: [
						"Why",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Ashford Holdings PVT L.T.D"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "why-list lg:col-span-8",
					children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 80,
						className: "why-item",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "why-index",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "t-h3",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-body",
								children: r.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-tech why-evidence",
								children: r.evidence
							})
						]
					}, r.title))
				})]
			})]
		})
	});
}
//#endregion
export { NetworkMap as n, WhyAshford as r, AirflowIntelligence as t };

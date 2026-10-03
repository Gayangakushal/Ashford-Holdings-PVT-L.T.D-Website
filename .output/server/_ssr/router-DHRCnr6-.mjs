import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, k as redirect, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as leadership, f as site, i as SITE_URL, l as navigation, o as addressOneLine, p as siteFeatures, r as ButtonLink, s as cn, t as AppLink } from "./site-Ck29ZWyQ.mjs";
import { r as disciplines } from "./disciplines-dBQSdk_D.mjs";
import { t as seo } from "./seo-BYo6w9D6.mjs";
import { t as Route$12 } from "../_slug-CSp9yLI1.mjs";
import { t as Route$13 } from "../_slug-CDKlm-kk.mjs";
import { t as Route$14 } from "../_slug-BoBKYNNp.mjs";
import { t as Route$15 } from "../_slug-CLKLn6CF.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DHRCnr6-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DyUrbkSF.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
/**
* Exact user-supplied artwork, displayed without recolouring or distortion.
*/
function Logo({ className, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": `${site.name} — home`,
		className: cn("logo-link", className),
		onClick,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/assets/brand/ashford-holdings-logo.png",
			alt: site.name,
			width: 1299,
			height: 1211,
			className: "logo-img",
			decoding: "async"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "logo-name",
			children: site.name
		})]
	});
}
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const triggerRef = (0, import_react.useRef)(null);
	const menuRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const close = (0, import_react.useCallback)(() => {
		setOpen(false);
		triggerRef.current?.focus();
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const root = document.documentElement;
		root.classList.add("menu-open");
		(menuRef.current?.querySelector("a, button"))?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") close();
			if (e.key === "Tab" && menuRef.current) {
				const items = Array.from(menuRef.current.querySelectorAll("a, button"));
				const firstEl = items[0];
				const lastEl = items[items.length - 1];
				if (!firstEl || !lastEl) return;
				if (e.shiftKey && document.activeElement === firstEl) {
					e.preventDefault();
					lastEl.focus();
				} else if (!e.shiftKey && document.activeElement === lastEl) {
					e.preventDefault();
					firstEl.focus();
				}
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			root.classList.remove("menu-open");
			window.removeEventListener("keydown", onKey);
		};
	}, [open, close]);
	const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "skip-link",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: cn("site-header", scrolled && "is-scrolled", open && "is-open"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x site-header-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "site-header-logo" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Primary",
						className: "site-nav",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: item.to,
							className: "site-nav-link",
							"aria-current": isActive(item.to) ? "page" : void 0,
							children: item.label
						}) }, item.to)) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "site-header-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: "/contact",
							variant: "secondary",
							className: "btn-sm hidden xl:inline-flex",
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							ref: triggerRef,
							type: "button",
							className: "menu-trigger lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-menu",
							onClick: () => open ? close() : setOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "t-tech text-paper",
								children: open ? "Close" : "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": "true",
								className: "menu-trigger-icon",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
							})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-menu",
			ref: menuRef,
			className: cn("mobile-menu", open && "is-open"),
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Site menu",
			"aria-hidden": !open,
			inert: !open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mobile-menu-grid tech-grid",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mobile-menu-inner",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-menu-top",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { onClick: () => setOpen(false) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "menu-trigger",
							onClick: close,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "t-tech text-paper",
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": "true",
								className: "menu-trigger-icon is-x",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Mobile",
						className: "mobile-menu-nav",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { children: navigation.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							style: { transitionDelay: open ? `${80 + i * 45}ms` : "0ms" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppLink, {
								href: item.to,
								className: "mobile-menu-link",
								"aria-current": isActive(item.to) ? "page" : void 0,
								onClick: () => setOpen(false),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mobile-menu-index",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mobile-menu-label",
									children: item.label
								})]
							})
						}, item.to)) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mobile-menu-foot",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: "/contact",
							variant: "primary",
							className: "w-full justify-between",
							onClick: () => setOpen(false),
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									className: "t-small hover:text-paper",
									children: site.phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.emailHref,
									className: "t-small hover:text-paper",
									children: site.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "t-tech mt-2",
									children: addressOneLine
								})
							]
						})]
					})
				]
			})]
		})
	] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "footer",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-small mt-6 max-w-sm",
							children: site.shortDescription
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Footer",
						className: "footer-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Navigate"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [navigation.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: n.to,
							children: n.label
						}) }, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: "/products",
							children: "Equipment"
						}) })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Solutions",
						className: "footer-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-tech",
							children: "Solutions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: disciplines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: `/solutions/${d.slug}`,
							children: d.title
						}) }, d.slug)) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "t-tech",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.phoneHref,
									children: site.phone
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: site.emailHref,
									children: site.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "t-small",
									children: addressOneLine
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: site.whatsappHref,
									target: "_blank",
									rel: "noopener noreferrer",
									children: ["WhatsApp: ", site.whatsapp]
								}) })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex gap-5",
								children: site.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer noopener",
									children: s.label
								}) }, s.label))
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "footer-bottom",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						site.legalName
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "footer-credit",
						children: [
							"Developed by",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://share.google/ghvEWdoY52yWD0uXs",
								target: "_blank",
								rel: "noopener noreferrer",
								children: "Novonex Software Solusions"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: "/privacy",
							children: "Privacy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
							href: "/terms",
							children: "Terms"
						})]
					})
				]
			})]
		})
	});
}
/** One intro per document load; internal navigation keeps the root mounted. */
function BrandLoader({ onComplete }) {
	const dialog = (0, import_react.useRef)(null);
	const [finished, setFinished] = (0, import_react.useState)(false);
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setFinished(true);
			return;
		}
		const element = dialog.current;
		if (!element || typeof element.showModal !== "function") {
			setFinished(true);
			return;
		}
		element.showModal();
		const timer = window.setTimeout(() => setLeaving(true), 1800);
		return () => {
			window.clearTimeout(timer);
			element.close();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (finished) {
			dialog.current?.close();
			onComplete();
		}
	}, [finished, onComplete]);
	(0, import_react.useEffect)(() => {
		if (!leaving) return;
		const timer = window.setTimeout(() => {
			dialog.current?.close();
			setFinished(true);
		}, 450);
		return () => window.clearTimeout(timer);
	}, [leaving]);
	if (finished) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dialog", {
		ref: dialog,
		className: `brand-loader${leaving ? " is-leaving" : ""}`,
		"aria-label": `${site.name} welcome`,
		onCancel: () => setFinished(true),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-loader-grid",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "brand-loader-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "brand-loader-emblem",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "brand-loader-orbit",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "brand-loader-orbit orbit-inner",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/brand/ashford-holdings-logo.png",
								alt: site.name,
								width: 1299,
								height: 1211
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "brand-loader-name",
						children: site.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "brand-loader-caption",
						children: site.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "brand-loader-line",
						"aria-hidden": "true"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "brand-loader-skip",
				onClick: () => setFinished(true),
				children: "Skip intro"
			})
		]
	});
}
var storageKey = "ashford-cookie-choice";
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [settings, setSettings] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const choice = localStorage.getItem(storageKey);
			setVisible(choice !== "all" && choice !== "essential");
		} catch {
			setVisible(true);
		}
	}, []);
	function saveChoice(choice) {
		try {
			localStorage.setItem(storageKey, choice);
		} catch {}
		setVisible(false);
	}
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "cookie-consent",
		role: "region",
		"aria-labelledby": "cookie-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "cookie-eyebrow",
				children: "YOUR PRIVACY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: "cookie-title",
				children: "Cookies"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cookie-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "What are cookies?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cookies are small files saved on your device that help websites work and remember your preferences." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Why do we use cookies?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We use browser storage to remember your cookie choice. This website currently has no analytics, advertising or tracking cookies." }),
					settings && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						id: "cookie-settings",
						className: "cookie-settings",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Types of cookies we use" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Essential preferences — always active." }), " Your choice is saved on this device so we can remember it on your next visit."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No optional cookies are currently configured." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppLink, {
						href: "/privacy",
						className: "cookie-policy",
						children: "Read our privacy policy"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cookie-actions",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cookie-accept",
						onClick: () => saveChoice("all"),
						children: "Accept all cookies"
					}),
					settings ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cookie-secondary",
						onClick: () => saveChoice("essential"),
						children: "Save essential only"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cookie-secondary",
						"aria-expanded": settings,
						"aria-controls": "cookie-settings",
						onClick: () => setSettings(true),
						children: "Cookie settings"
					}),
					!settings && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cookie-essential",
						onClick: () => saveChoice("essential"),
						children: "Essential only"
					})
				]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "relative flex min-h-[80svh] items-end",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tech-grid absolute inset-0 opacity-60",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative pb-24 pt-40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Error 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "t-h1 mt-6 max-w-3xl",
					children: "This path doesn’t lead anywhere."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "t-lead mt-6 max-w-xl",
					children: "The page may have moved. Start again from the homepage or our solutions."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						href: "/",
						children: "Home"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
						href: "/solutions",
						variant: "secondary",
						children: "Solutions"
					})]
				})
			]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		className: "container-x flex min-h-[80svh] flex-col justify-end pb-24 pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "System fault"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "t-h1 mt-6",
				children: "This page didn’t load."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "t-lead mt-6 max-w-xl",
				children: "Something went wrong on our side. Try again, or head back home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "btn btn-primary",
					onClick: () => {
						router.invalidate();
						reset();
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "btn-label",
						children: "Try again"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "btn btn-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "btn-label",
						children: "Go home"
					})
				})]
			})
		]
	});
}
var organizationLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: site.legalName,
	alternateName: site.name,
	url: SITE_URL,
	logo: `${SITE_URL}/assets/brand/ashford-holdings-logo.png`,
	email: site.email,
	telephone: site.phone,
	slogan: site.tagline,
	address: {
		"@type": "PostalAddress",
		streetAddress: `${site.address.line1}, ${site.address.line2}`,
		addressCountry: "LK"
	},
	sameAs: site.social.map((s) => s.href),
	description: site.shortDescription,
	areaServed: "Sri Lanka",
	knowsAbout: [
		"Industrial ventilation",
		"Air conditioning",
		"Air purification",
		"Building management systems",
		"Fire and gas suppression",
		"Dust extraction",
		"Racking and material handling"
	]
};
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: `${site.name} | Air & Environmental Engineering, Sri Lanka` },
			{
				name: "description",
				content: site.shortDescription
			},
			{
				name: "author",
				content: site.legalName
			},
			{
				name: "theme-color",
				content: "#080a0c"
			},
			{
				name: "color-scheme",
				content: "dark"
			},
			{
				property: "og:locale",
				content: "en_LK"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@300..700&family=Geist+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/assets/brand/ashford-holdings-logo.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/assets/brand/ashford-holdings-logo.png"
			}
		],
		scripts: [{ children: "document.documentElement.classList.add('js')" }, {
			type: "application/ld+json",
			children: JSON.stringify(organizationLd)
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	const [introFinished, setIntroFinished] = (0, import_react.useState)(false);
	const finishIntro = (0, import_react.useCallback)(() => setIntroFinished(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLoader, { onComplete: finishIntro }),
			introFinished && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-2auN5JU-.mjs");
var Route$10 = createFileRoute("/")({
	head: () => seo({
		title: "Ashford Holdings PVT L.T.D | HVAC, Ventilation & Air Engineering in Sri Lanka",
		description: "Ashford Holdings PVT L.T.D engineers ventilation, air conditioning, air purification, BMS, fire & gas suppression, dust extraction and racking systems for industrial and commercial facilities in Sri Lanka.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./about-bOXAvHm_.mjs");
var Route$9 = createFileRoute("/about")({
	head: () => seo({
		title: "About Ashford Holdings PVT L.T.D",
		description: "Ashford Holdings PVT L.T.D is an air and environmental engineering company in Sri Lanka — ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and racking.",
		path: "/about",
		image: "/assets/hvac/plate-heat-exchanger-plant.jpg"
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./brands-OooQxu1P.mjs");
var Route$8 = createFileRoute("/brands")({
	head: () => seo({
		title: "Global Manufacturing Network",
		description: "Ashford Holdings PVT L.T.D works alongside manufacturers from Germany, Malaysia, Singapore, India and China to deliver air and environmental engineering solutions.",
		path: "/brands"
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./contact-Bpl2hE_h.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => seo({
		title: "Contact — Start a Project",
		description: `Contact Ashford Holdings PVT L.T.D about ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction or racking. Call ${site.phone} or email ${site.email}.`,
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./leadership-DaecIETU.mjs");
var Route$6 = createFileRoute("/leadership")({
	beforeLoad: () => {
		if (!siteFeatures.leadership) throw redirect({
			to: "/about",
			replace: true
		});
	},
	head: () => seo({
		title: "Leadership",
		description: `Leadership at Ashford Holdings PVT L.T.D: ${leadership.map((l) => `${l.name}, ${l.role}`).join("; ")}.`,
		path: "/leadership"
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-D5iCBbVg.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => seo({
		title: "Privacy",
		description: `Privacy information for the ${site.name} website.`,
		path: "/privacy"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./terms-j3-zVERX.mjs");
var Route$4 = createFileRoute("/terms")({
	head: () => seo({
		title: "Terms",
		description: `Terms of use for the ${site.name} website.`,
		path: "/terms"
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./industries-BZZ5pifB.mjs");
var Route$3 = createFileRoute("/industries/")({
	head: () => seo({
		title: "Industries — Manufacturing, FMCG, Apparel, Healthcare & More",
		description: "Ventilation, air conditioning, purification, extraction and racking for manufacturing, FMCG, apparel & textiles, food & hospitality, healthcare, plantation, energy and transport sectors in Sri Lanka.",
		path: "/industries"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./products-BB9Qn8mr.mjs");
var Route$2 = createFileRoute("/products/")({
	head: () => seo({
		title: "Equipment — Fans, AHUs, Cooling, ESP, Ducting & Dampers",
		description: "Industrial fans, air handling and fan coil units, evaporative coolers, cooling towers, electrostatic precipitators, kitchen canopies, dust collectors, ducting, dampers and air terminals.",
		path: "/products",
		image: "/assets/hvac/stainless-centrifugal-fans.jpg"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-B7kwI_sh.mjs");
var Route$1 = createFileRoute("/projects/")({
	head: () => seo({
		title: "Projects — Ventilation, Extraction & Racking",
		description: "Selected Ashford Holdings PVT L.T.D projects in ventilation, fume extraction and racking for clients including Variosystems, Ceylon Biscuits Limited, A&E Bangladesh and DOK Solutions Lanka.",
		path: "/projects"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./solutions-C35eIGBt.mjs");
var Route = createFileRoute("/solutions/")({
	head: () => seo({
		title: "Solutions — Ventilation, Air Conditioning, Purification, BMS & More",
		description: "Air conditioning & ventilation, air purification & filtration, BMS & air quality, fire & gas suppression, dust extraction and racking & material handling from Ashford Holdings PVT L.T.D, Sri Lanka.",
		path: "/solutions"
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AboutRoute = Route$9.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$11
});
var BrandsRoute = Route$8.update({
	id: "/brands",
	path: "/brands",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var LeadershipRoute = Route$6.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => Route$11
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$11
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$11
});
var IndustriesIndexRoute = Route$3.update({
	id: "/industries/",
	path: "/industries/",
	getParentRoute: () => Route$11
});
var IndustriesSlugRoute = Route$13.update({
	id: "/industries/$slug",
	path: "/industries/$slug",
	getParentRoute: () => Route$11
});
var ProductsIndexRoute = Route$2.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$11
});
var ProductsSlugRoute = Route$14.update({
	id: "/products/$slug",
	path: "/products/$slug",
	getParentRoute: () => Route$11
});
var ProjectsIndexRoute = Route$1.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => Route$11
});
var ProjectsSlugRoute = Route$15.update({
	id: "/projects/$slug",
	path: "/projects/$slug",
	getParentRoute: () => Route$11
});
var SolutionsIndexRoute = Route.update({
	id: "/solutions/",
	path: "/solutions/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BrandsRoute,
	ContactRoute,
	LeadershipRoute,
	PrivacyRoute,
	TermsRoute,
	IndustriesSlugRoute,
	ProductsSlugRoute,
	ProjectsSlugRoute,
	SolutionsSlugRoute: Route$12.update({
		id: "/solutions/$slug",
		path: "/solutions/$slug",
		getParentRoute: () => Route$11
	}),
	IndustriesIndexRoute,
	ProductsIndexRoute,
	ProjectsIndexRoute,
	SolutionsIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as site, n as Arrow, o as addressOneLine } from "./site-Ck29ZWyQ.mjs";
import { r as disciplines } from "./disciplines-dBQSdk_D.mjs";
import { n as SectionLabel } from "./SectionLabel-WH9A3uhu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactSection-TbTGMZce.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Enquiry form. The project has no form backend, so submitting prepares an email
* to the company address in the visitor's mail client rather than silently
* discarding the enquiry.
*/
function ContactForm() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function submit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		if (!form.reportValidity()) return;
		const f = new FormData(form);
		const type = String(f.get("type") || "General enquiry");
		const subject = `Project enquiry — ${type}`;
		const body = [
			`Name: ${f.get("name")}`,
			`Company: ${f.get("company") || "-"}`,
			`Email: ${f.get("email")}`,
			`Phone: ${f.get("phone") || "-"}`,
			`Project type: ${type}`,
			"",
			String(f.get("message") || "")
		].join("\n");
		window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "enquiry",
		onSubmit: submit,
		className: "form",
		noValidate: false,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "form-grid",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					name: "name",
					autoComplete: "name",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Company",
					name: "company",
					autoComplete: "organization"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					name: "email",
					type: "email",
					autoComplete: "email",
					required: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Phone",
					name: "phone",
					type: "tel",
					autoComplete: "tel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field field-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "f-type",
						children: "Project type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "f-type",
						name: "type",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select a discipline"
							}),
							disciplines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: d.title,
								children: d.title
							}, d.slug)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Other / not sure",
								children: "Other / not sure"
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "field field-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: "f-message",
						children: ["Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "*"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "f-message",
						name: "message",
						rows: 5,
						required: true,
						placeholder: "Facility, process, size, current problem, timeline…"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "form-foot",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "submit",
				className: "btn btn-primary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "btn-label",
					children: "Send enquiry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "t-tech max-w-xs",
				role: "status",
				children: sent ? "Your email app should now open with the enquiry prepared." : "Submitting opens your email app with the enquiry prepared."
			})]
		})]
	});
}
function Field({ label, name, type = "text", required = false, autoComplete }) {
	const id = `f-${name}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			htmlFor: id,
			children: [
				label,
				" ",
				required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					children: "*"
				}) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id,
			name,
			type,
			required,
			autoComplete
		})]
	});
}
function ContactDetails() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
		className: "contact-details",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "t-tech",
				children: "Phone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.phoneHref,
				children: site.phone
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "t-tech",
				children: "Email"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.emailHref,
				children: site.email
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "t-tech",
				children: "WhatsApp"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.whatsappHref,
				target: "_blank",
				rel: "noopener noreferrer",
				children: site.whatsapp
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "t-tech",
				children: "Address"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("address", {
				className: "not-italic",
				children: addressOneLine
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "t-tech",
				children: "Follow"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "flex gap-5",
				children: site.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: s.href,
					target: "_blank",
					rel: "noreferrer noopener",
					children: s.label
				}, s.label))
			})] })
		]
	});
}
function ContactSection({ index = "14", headingLevel = "h2" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y contact",
		"aria-labelledby": "contact-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index,
				children: "Contact"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(headingLevel, {
							id: "contact-title",
							className: "t-h2",
							children: [
								"Talk to our",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"engineers."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "t-body mt-6 max-w-md",
							children: "Share the facility, the process and the problem. An engineer will review the requirement and respond."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, {})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				})]
			})]
		})
	});
}
//#endregion
export { ContactForm as n, ContactSection as r, ContactDetails as t };

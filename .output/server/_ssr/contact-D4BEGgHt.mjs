import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D4BEGgHt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var field = "w-full border border-[#b1b1b1] bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#b1b1b1] focus:border-accent";
function ContactPanel() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "contact-split text-white",
		style: { backgroundImage: "linear-gradient(222deg, #122a00 34%, #0e0e0e 58%)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[280px] lg:min-h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/contact/hero.jpg",
				alt: "Shine team members on a multifamily rooftop overlooking the city",
				className: "size-full min-h-[280px] object-cover object-[20%_center] lg:min-h-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-start justify-center px-5 py-16 lg:px-8 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-[512px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
						children: [
							"Get in Touch",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"With Our Team"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg leading-[30px] lg:text-xl",
						children: "We're here to answer any questions or provide a free analysis of your properties."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-lg leading-[30px] lg:text-xl",
						children: [
							"For partnership inquiries, contact",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@getshine.com",
								className: "font-bold text-accent underline underline-offset-2",
								children: "info@getshine.com"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-[60px]",
						children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-accent/40 px-6 py-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl text-accent",
								children: "Request received."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-white/80",
								children: "A member of the Shine team will review your property or portfolio details and follow up by email."
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-6",
							onSubmit: (event) => {
								event.preventDefault();
								setSubmitted(true);
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium",
										children: ["First name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "firstName",
											placeholder: "First name",
											className: `${field} mt-1.5`
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium",
										children: ["Last name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "lastName",
											placeholder: "Last name",
											className: `${field} mt-1.5`
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium",
									children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										name: "email",
										placeholder: "you@company.com",
										className: `${field} mt-1.5`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium",
									children: ["Phone number", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1.5 flex border border-[#b1b1b1] focus-within:border-accent",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1 border-r border-[#b1b1b1] px-4 text-base",
											children: ["US", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "phone",
											type: "tel",
											placeholder: "+1 (555) 000-0000",
											className: "w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#b1b1b1]"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-6 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium",
										children: ["Property location(s)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "location",
											placeholder: "City, State",
											className: `${field} mt-1.5`
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm font-medium",
										children: ["Approximate unit count", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "units",
											placeholder: "i.e. 24",
											className: `${field} mt-1.5`
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block text-sm font-medium",
									children: ["Message (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 4,
										placeholder: "Tell us a little about the project...",
										className: `${field} mt-1.5 resize-y`
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
									children: "Contact us"
								})
							]
						})
					})
				]
			})
		})]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactPanel, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ContactPage as component };

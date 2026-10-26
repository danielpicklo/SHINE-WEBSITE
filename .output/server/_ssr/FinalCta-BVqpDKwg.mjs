import { r as __toESM } from "../_runtime.mjs";
import { t as performance_default } from "../_libs/unenv.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as ChevronDown } from "../_libs/lucide-react.mjs";
import { l as proofPoints } from "./SiteFooter-B055aH9_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCta-BVqpDKwg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function parseFigure(figure) {
	const match = figure.match(/^([\d,.]+)(.*)$/);
	if (!match) return {
		value: 0,
		suffix: figure,
		decimals: 0
	};
	const numeric = match[1].replace(/,/g, "");
	const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
	return {
		value: Number(numeric),
		suffix: match[2],
		decimals
	};
}
function formatValue(value, decimals) {
	if (decimals > 0) return value.toFixed(decimals);
	return Math.round(value).toLocaleString("en-US");
}
function AnimatedFigure({ figure }) {
	const { value, suffix, decimals } = parseFigure(figure);
	const ref = (0, import_react.useRef)(null);
	const [display, setDisplay] = (0, import_react.useState)(0);
	const [started, setStarted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setStarted(true);
				observer.disconnect();
			}
		}, { threshold: .4 });
		observer.observe(node);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!started) return;
		const duration = 1400;
		const start = performance_default.now();
		let frame = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			setDisplay(value * eased);
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [started, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		ref,
		className: "font-display text-5xl leading-none tracking-[-1.2px] text-accent lg:text-[60px] lg:leading-[72px]",
		children: [formatValue(display, decimals), suffix]
	});
}
function ProofPointsBand({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `rounded-lg bg-[#091500] bg-[radial-gradient(circle_at_center,rgba(246,232,73,0.18),transparent_70%)] px-6 py-9 lg:px-12 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30",
			children: proofPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedFigure, { figure: point.figure }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-sm uppercase tracking-[0.7px] text-white",
					children: point.label
				})]
			}, point.figure))
		})
	});
}
function ProofPointsRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-[1068px] gap-8 sm:grid-cols-3 sm:divide-x sm:divide-white/30",
		children: proofPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedFigure, { figure: point.figure }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-sm uppercase tracking-[0.7px] text-white",
				children: point.label
			})]
		}, point.figure))
	});
}
function CoverageMap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[#f7f6f1] py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/homepage/map-wash.png",
			alt: "",
			className: "pointer-events-none absolute inset-0 size-full object-cover opacity-65"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1280px] px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
				children: "Turning Energy Into NOI Across the USA"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/homepage/map.png",
				alt: "Map of the United States showing Shine projects that are built, under construction, or both. Total built: 11.3 MW. Total under construction: 24.4 MW, as of September 2026.",
				className: "mx-auto mt-10 w-full max-w-[1100px]"
			})]
		})]
	});
}
var field = "w-full border border-[#b1b1b1] bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-[#b1b1b1] focus:border-accent";
function FinalCta() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 bg-[#0e0e0e] py-16 text-white lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1280px] items-start gap-12 px-5 lg:grid-cols-[450px_512px] lg:justify-center lg:gap-[60px] lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "max-w-sm text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]",
				children: "Find Out What Your Roof Is Worth"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-sm text-lg leading-[30px] lg:text-xl",
				children: "Get in touch with us to discover how solar delivers additional income. Whether you have one property or an entire portfolio, we’re happy to provide a free analysis."
			})] }), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-accent/40 px-6 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
								className: `${field} mt-1.5 focus:border-accent`
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
			})]
		})
	});
}
//#endregion
export { ProofPointsRow as i, FinalCta as n, ProofPointsBand as r, CoverageMap as t };

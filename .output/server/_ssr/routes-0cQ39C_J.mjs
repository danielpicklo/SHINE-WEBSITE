import { r as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger$1, c as require_jsx_runtime, i as AccordionItem$1, l as require_react, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, f as ChevronDown, m as ArrowRight, p as Check, s as Minus } from "../_libs/lucide-react.mjs";
import { a as faqs, c as projects, i as customerLogos, n as SiteHeader, o as housingColumns, r as comparisonRows, s as processSteps, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
import { n as FinalCta, r as ProofPointsBand, t as CoverageMap } from "./FinalCta-BVqpDKwg.mjs";
import { t as ProcessStepsCarousel } from "./ProcessStepsCarousel-CxFROwuV.mjs";
import { n as cn, t as ProjectCarousel } from "./ProjectCarousel-BguPQH0s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-0cQ39C_J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				src: "/homepage/hero.mp4",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
						children: "Turn Energy into NOI."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[632px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]",
						children: "Shine’s solar approach creates new income and cuts operating costs for affordable housing and market-rate multifamily communities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#calculator",
							className: "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
							children: "Calculate my Solar NOI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: "border-b border-white px-2 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-white",
							children: "Talk to our team"
						})]
					})
				]
			})
		]
	});
}
function LogoBar() {
	const logos = [...customerLogos, ...customerLogos];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden bg-[#0e0e0e] py-12",
		"aria-label": "Customers",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-max animate-marquee items-center gap-10 px-5 lg:gap-16",
			children: logos.map((logo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logo.src,
				alt: index < customerLogos.length ? logo.name : "",
				"aria-hidden": index >= customerLogos.length ? true : void 0,
				className: "h-10 w-auto max-w-none shrink-0 object-contain mix-blend-screen lg:h-12"
			}, `${logo.name}-${index}`))
		})
	});
}
function HousingSplit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "housing",
		className: "scroll-mt-20 bg-white py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1200px] lg:grid-cols-2",
			children: housingColumns.map((column, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col justify-between gap-12 px-6 py-10 lg:px-9 lg:py-9 ${index === 0 ? "border-b border-[#d0d0d0] lg:border-b-0 lg:border-r" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-xs uppercase tracking-[1.92px] text-[#0a0a0a]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 bg-accent" }), column.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
						children: column.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-5 pl-4",
						children: column.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-base leading-[22.5px] text-[#0e0e0e]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-0.5 h-4 w-4 shrink-0",
								strokeWidth: 2.5
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
						}, point))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: column.href,
					className: "mt-10 flex items-center gap-2 border-b-2 border-accent pb-1 font-display text-sm tracking-[-0.28px] text-[#0a0a0a]",
					children: [column.link, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}, column.eyebrow))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofPointsBand, { className: "mx-auto mt-16 max-w-[1164px]" })]
	});
}
function VideoStill() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white",
		"aria-label": "Multifamily rooftop solar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			className: "aspect-[1440/431] w-full object-cover",
			src: "/homepage/video-section.mp4",
			autoPlay: true,
			muted: true,
			loop: true,
			playsInline: true,
			"aria-label": "Aerial view of solar arrays across a multifamily community"
		})
	});
}
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "steps",
		className: "scroll-mt-20 overflow-hidden bg-[#0e0e0e] py-16 text-white lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-start gap-10 px-5 lg:grid-cols-[400px_1fr] lg:gap-16 lg:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]",
					children: "From Underwriting to Maintenance, Shine Handles It All"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-base leading-[22.5px]",
					children: ["A typical solar project involves an owner’s rep, a solar EPC to permit and build the system, a separate software company for resident billing, and a monitoring vendor to keep it all running. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Shine does all of it ourselves." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-[22.5px]",
					children: "From the first feasibility analysis to years of ongoing maintenance, we own the lifecycle of your solar program and stay accountable every step of the way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#calculator",
					className: "mt-12 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
					children: "Calculate my income with solar"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStepsCarousel, { steps: processSteps })]
		})
	});
}
function ComparisonTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#0e0e0e] py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[980px] px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-[26px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]",
				children: "Shine is the only solar EPC that installs on resident meters and common area meters in all 50 states."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 rounded-lg bg-white shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full table-fixed border-collapse text-left text-sm text-[#0e0e0e] sm:text-base",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "h-auto min-h-[60px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "bg-[#474747] px-3 py-3 font-display text-base font-semibold leading-tight tracking-[-0.6px] text-white sm:px-6 sm:text-2xl",
								children: "What You Get"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "w-[28%] bg-accent px-3 py-3 sm:w-[220px] sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/homepage/shine-wordmark.svg",
									alt: "Shine",
									className: "h-4 w-auto sm:h-5"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "bg-[#474747] px-3 py-3 font-display text-base font-semibold leading-tight tracking-[-0.6px] text-white sm:px-6 sm:text-2xl",
								children: "Other Solar Companies"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: comparisonRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-[#eaecf0]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "break-words px-3 py-3 leading-snug sm:px-6 sm:py-4 sm:leading-[22.5px]",
								children: row.feature
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "break-words border-x border-[#eaecf0] bg-[#fffcde] px-3 py-3 leading-snug sm:px-6 sm:py-4",
								children: row.shine
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "break-words px-3 py-3 leading-snug sm:px-6 sm:py-4 sm:leading-[22.5px]",
								children: row.others
							})
						]
					}, row.feature)) })]
				})
			})]
		})
	});
}
function Quote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[#00161c] py-20 text-white lg:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				className: "absolute inset-0 size-full object-cover",
				src: "/homepage/testimonials.mp4",
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[rgba(0,22,28,0.78)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex max-w-[824px] flex-col items-center px-5 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/homepage/logos/logo-equity-residential.png",
						alt: "Equity Residential",
						className: "h-12 w-auto mix-blend-screen"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "mt-8 text-[32px] leading-[1.2] tracking-[-1.2px] sm:text-5xl lg:text-[60px] lg:leading-[72px]",
						children: [
							"“The ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "best solar project"
							}),
							" EQR ever built is with Shine.”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xl leading-[30px]",
						children: "Kyle Hendricks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-base leading-[22.5px]",
						children: "VP, Head of Sustainability, Equity Residential"
					})
				]
			})
		]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "projects",
		className: "scroll-mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, {
			projects,
			heading: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Our projects increase",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"NOI by $620/unit"
			] })
		})
	});
}
function CalculatorPlaceholder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "calculator",
		className: "scroll-mt-20 bg-[#ececec] py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[980px] px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
					children: "Calculate Your Income Potential With Solar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mx-auto mt-4 max-w-2xl text-base leading-7 text-[#171717] lg:text-lg",
					children: [
						"Use the calculator for a quick preliminary estimate. For a free, detailed analysis,",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: "underline",
							children: "get in touch with us here"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 border border-[#d0d0d0] bg-white px-6 py-16 text-left sm:px-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl tracking-[-0.6px] text-[#171717]",
							children: "Calculator coming soon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-base leading-[22.5px] text-[#525252]",
							children: "Shine is still finishing this tool. Request a free analysis and the team will estimate system size, production, and potential NOI for your property or portfolio."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: "mt-8 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
							children: "Request a free analysis"
						})
					]
				})
			]
		})
	});
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-20 bg-[linear-gradient(203deg,#122a00_0%,#0e0e0e_79%)] py-16 text-white lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[768px] px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]",
				children: "Frequently asked questions"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				defaultValue: "faq-0",
				className: "mt-12",
				children: faqs.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${index}`,
					className: "border-[#3d3d3d]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger, {
						className: "group py-6 text-left font-display text-lg tracking-[-0.6px] text-white hover:no-underline [&>svg]:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "pr-6",
							children: item.question
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto grid size-6 shrink-0 place-items-center rounded-full border border-accent text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5 group-data-[state=open]:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "hidden h-3.5 w-3.5 group-data-[state=open]:block" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-6 text-base leading-[22.5px] text-white",
						children: item.answer
					})]
				}, item.question))
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousingSplit, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoStill, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonTable, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorPlaceholder, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverageMap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Index as component };

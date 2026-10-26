import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as DollarSign, i as Shield, n as Users, o as Pencil, r as TrendingUp, u as Landmark } from "../_libs/lucide-react.mjs";
import { c as projects, n as SiteHeader, s as processSteps, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
import { n as FinalCta, r as ProofPointsBand, t as CoverageMap } from "./FinalCta-BVqpDKwg.mjs";
import { t as ProcessStepsCarousel } from "./ProcessStepsCarousel-CxFROwuV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/affordable-housing-BPhn6bge.js
var import_jsx_runtime = require_jsx_runtime();
var button = "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black";
function AffordableHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[560px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/affordable/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
						children: [
							"Raise Net Rent Without",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Costing Tenants a Dime"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[772px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]",
						children: "Did you know solar delivers more income for affordable housing properties? By lowering your property's utility allowance, solar creates room to raise net max rent — dollar for dollar — while your residents' total housing costs stay the same."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/contact",
							className: button,
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
var incomeFeatures = [
	{
		icon: TrendingUp,
		title: "Lower UAs and increase max net rent",
		body: "We install solar to offset tenants' electric use. With Shine, each tenant has a small solar array interconnected to their meter. This design approach allows owners to reduce utility allowances through energy consumption model UA methodology."
	},
	{
		icon: DollarSign,
		title: "Increase gross potential rent (GPR)",
		body: "With higher net max rent, your increased income can either flow to you, increase loan proceeds as part of an LIHTC syndication, or act as an operating income buffer to cover unforeseen expenses."
	},
	{
		icon: Landmark,
		title: "Self-fund GAP financing",
		body: "When solar is installed in conjunction with a LIHTC syndication, tax equity reduces the cost of the system. The NOI lift from reduced UAs allows owners to generate additional loan proceeds in excess of the system's cost."
	},
	{
		icon: Shield,
		title: "Protect your net max rent",
		body: "Utility rates are climbing faster than area median incomes — eroding your NOI. Solar offsets a portion of that usage, isolating it from future utility rate increases. That protects your net max rent."
	},
	{
		icon: Pencil,
		title: "Keep underwriting moving",
		body: "We know affordable housing deals move through complex stages involving budgets, tax credit investors, and lenders. Shine turns around underwriting-ready estimates fast."
	},
	{
		icon: Users,
		title: "Work with a single team",
		body: "Other solar companies require you to work with multiple vendors to complete a project. From feasibility analysis through design, installation, and monitoring, Shine handles every stage ourselves. We're your one accountable partner."
	}
];
var stepCopy = {
	"1": "We evaluate a single property or your full portfolio to identify system size, project costs, potential net rent increases, and more.",
	"5": "We set up and manage billing for resident-facing systems with no SaaS fees."
};
var affordableSteps = processSteps.map((step) => stepCopy[step.n] ? {
	...step,
	body: stepCopy[step.n]
} : step);
function AffordableIncome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-white py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1216px] px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
					children: "How to Generate More Income With Shine"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-[30px] text-[#0e0e0e] lg:text-xl",
					children: "Shine’s solar programs let affordable housing properties:"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: incomeFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-10 place-items-center rounded-md bg-accent text-[#0e0e0e]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {
							className: "h-5 w-5",
							strokeWidth: 2
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-lg tracking-[-0.4px] text-[#171717]",
						children: feature.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base leading-[22.5px] text-[#0e0e0e]",
						children: feature.body
					})
				] }, feature.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofPointsBand, { className: "mx-auto mt-16 max-w-[1164px]" })]
	});
}
function AffordableAerial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white",
		"aria-label": "Affordable housing rooftop solar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/affordable/aerial.jpg",
			alt: "Aerial view of solar on an affordable housing community",
			className: "aspect-[1440/431] w-full object-cover"
		})
	});
}
var names = ["NMHC Top 10 Property", "An Affordable Housing Community"];
function AffordableProjects() {
	const cards = names.map((name) => projects.find((project) => project.name === name)).filter((project) => project != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-white py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/homepage/casestudies-bg.png",
			alt: "",
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 size-full object-cover object-right"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-[1280px] px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mx-auto max-w-3xl text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
				children: "See How Solar Increases Property Value for Affordable Housing Communities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10",
				children: cards.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-lg p-6 text-white sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.image,
							alt: "",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-4xl leading-tight tracking-[-1.2px] lg:text-5xl lg:leading-[1.1]",
									children: project.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-lg tracking-[-0.6px]",
									children: project.location
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-2 gap-4",
									children: project.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-white p-4 text-[#0a0a0a]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-2xl tracking-[-0.6px]",
											children: metric.value
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm leading-[18px] text-[#525252]",
											children: metric.label
										})]
									}, metric.label))
								})
							]
						})
					]
				}, project.name))
			})]
		})]
	});
}
function AffordableSteps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "overflow-hidden bg-[#0e0e0e] py-16 text-white lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-start gap-10 px-5 lg:grid-cols-[400px_1fr] lg:gap-16 lg:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] leading-10 tracking-[-0.6px] text-accent lg:text-[30px]",
					children: "One Solar Expert for All Stages of Your Project"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-base leading-[22.5px]",
					children: [
						"A typical solar project involves a portfolio consultant, a solar provider to design, permit, and build the system, a separate software company for resident billing, and a monitoring vendor to keep it all running.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Shine does all of it ourselves." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-[22.5px]",
					children: "From the first feasibility analysis to years of ongoing maintenance, we own the lifecycle of your solar program and stay accountable every step of the way."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/contact",
					className: "mt-12 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
					children: "Calculate my income with solar"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStepsCarousel, { steps: affordableSteps })]
		})
	});
}
function AffordableHousingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffordableHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffordableIncome, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffordableAerial, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffordableProjects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AffordableSteps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverageMap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AffordableHousingPage as component };

import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { d as DollarSign, n as Users, o as Pencil, r as TrendingUp, u as Landmark } from "../_libs/lucide-react.mjs";
import { c as projects, n as SiteHeader, s as processSteps, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
import { n as FinalCta, r as ProofPointsBand, t as CoverageMap } from "./FinalCta-BVqpDKwg.mjs";
import { t as ProcessStepsCarousel } from "./ProcessStepsCarousel-CxFROwuV.mjs";
import { t as ProjectCarousel } from "./ProjectCarousel-BguPQH0s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market-rate-housing-Cjn54yYi.js
var import_jsx_runtime = require_jsx_runtime();
var button = "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black";
function MarketRateHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/market-rate/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
						children: "Increase NOI With Solar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[772px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]",
						children: "Did you know solar creates new income lines for market-rate multifamily properties? By installing small solar systems on resident meters, Shine turns your property’s electrical load into a recurring revenue stream — on top of savings from common area solar."
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
var marketRateFeatures = [
	{
		icon: TrendingUp,
		title: "Turn resident electricity into a new income line",
		body: "A typical multifamily solar system installs only on common area meters, which cover 5% of a property's electrical load. Shine installs on resident meters — the other 95% — letting you capture 100% of the load. Residents pay for that electricity through a solar lease which flows to you as a new recurring income line."
	},
	{
		icon: DollarSign,
		title: "Combine common area and resident solar for maximum NOI",
		body: "Shine installs common area solar to cut your operating expenses on top of the new income you'll see from resident solar."
	},
	{
		icon: Landmark,
		title: "Get ahead of Building Performance Standards (BPS) penalties",
		body: "A growing number of municipalities now require multifamily properties to keep emissions below a set threshold or pay fines. Shine's resident meter approach helps you adhere to these standards and avoid expensive penalties."
	},
	{
		icon: Users,
		title: "Work with one team instead of several vendors",
		body: "Other solar companies require you to hire multiple vendors to complete a project. From feasibility analysis through design, installation, and monitoring, Shine handles every stage ourselves. We're your one accountable partner."
	},
	{
		icon: Pencil,
		title: "Roll out a cohesive solar program across your portfolio",
		body: "Shine's approach allows you to run the same solar strategy across every property in your portfolio, in all 50 states."
	}
];
var stepCopy = {
	"1": "We evaluate a single property or your full portfolio to identify system size, project costs, potential NOI, and more.",
	"5": "For resident-facing systems, we set up and manage billing, and we help establish solar leases for tenants with no SaaS fees."
};
var marketRateSteps = processSteps.map((step) => stepCopy[step.n] ? {
	...step,
	body: stepCopy[step.n]
} : step);
function MarketRateIncome() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-white py-16 lg:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1216px] px-5 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
					children: "How to Generate New Income With Shine"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg leading-[30px] text-[#0e0e0e] lg:text-xl",
					children: "Shine’s solar programs allow multifamily properties to:"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3",
				children: marketRateFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
function MarketRateAerial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white",
		"aria-label": "Market-rate multifamily rooftop solar",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/market-rate/aerial.jpg",
			alt: "Aerial view of solar on a market-rate multifamily community",
			className: "aspect-[1440/431] w-full object-cover"
		})
	});
}
var names = [
	"Southlands",
	"Helix",
	"RiNo"
];
function MarketRateProjects() {
	const cards = names.map((name) => projects.find((project) => project.name === name)).filter((project) => project != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, {
		projects: cards,
		heading: "Our projects increase NOI by $620/unit",
		headingClassName: "mx-auto max-w-3xl text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]"
	});
}
function MarketRateSteps() {
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
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessStepsCarousel, { steps: marketRateSteps })]
		})
	});
}
function MarketRateHousingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketRateHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketRateIncome, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketRateAerial, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketRateProjects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketRateSteps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverageMap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { MarketRateHousingPage as component };

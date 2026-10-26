import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteFooter-B055aH9_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		label: "Affordable Housing",
		href: "/affordable-housing"
	},
	{
		label: "Market Rate Housing",
		href: "/market-rate-housing"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Case Studies",
		href: "/case-studies"
	},
	{
		label: "Contact Us",
		href: "/contact"
	}
];
var headerCta = {
	label: "Get a Free Solar NOI Analysis",
	href: "/contact"
};
var customerLogos = [
	{
		name: "April Housing",
		src: "/homepage/logos/logo-april.png"
	},
	{
		name: "AvalonBay Communities",
		src: "/homepage/logos/logo-avalonbay.png"
	},
	{
		name: "Equity Residential",
		src: "/homepage/logos/logo-equity-residential.png"
	},
	{
		name: "Gorman & Company",
		src: "/homepage/logos/logo-gorman.png"
	},
	{
		name: "Hudson Valley Property Group",
		src: "/homepage/logos/logo-hudson-valley.png"
	},
	{
		name: "Lincoln Avenue Communities",
		src: "/homepage/logos/logo-lincoln.png"
	},
	{
		name: "The Michaels Organization",
		src: "/homepage/logos/logo-michaels.png"
	},
	{
		name: "the NRP group",
		src: "/homepage/logos/logo-nrp.png"
	},
	{
		name: "Related",
		src: "/homepage/logos/logo-related.png"
	},
	{
		name: "Jonathan Rose Companies",
		src: "/homepage/logos/logo-rose.png"
	}
];
var housingColumns = [{
	eyebrow: "Affordable Housing",
	title: "Why Affordable Housing Operators Choose Shine",
	points: [
		"Lower utility allowances to increase max net rent and protect against rising utility costs.",
		"Increase gross potential rent (GPR).",
		"Generate enough additional loan proceeds to self-fund your GAP financing.",
		"Get fast, accurate estimates that fit your underwriting timeline.",
		"Work with a single team for all stages, including design, installation, and monitoring."
	],
	link: "See how it works for affordable housing",
	href: "/affordable-housing"
}, {
	eyebrow: "Market-Rate Housing",
	title: "Why Market-Rate Multifamily Properties Choose Shine",
	points: [
		"Install solar on resident meters to add a new income line through solar leases.",
		"Combine resident solar with common area solar to cut OpEx while increasing NOI.",
		"Work with a single team for the full project lifecycle instead of juggling multiple vendors, reps, and platforms.",
		"Avoid Building Performance Standards penalties and fines.",
		"Roll out a solar program across your portfolio in all 50 states."
	],
	link: "See how it works for market rate",
	href: "/market-rate-housing"
}];
var proofPoints = [
	{
		figure: "40 MW",
		label: "Built or under construction"
	},
	{
		figure: "22 states",
		label: "Operating in today"
	},
	{
		figure: "50 states",
		label: "Available nationwide"
	}
];
var processSteps = [
	{
		n: "1",
		title: "Analysis",
		body: "We evaluate a single property or your full portfolio to identify system size, project costs, potential NOI, and more — for free.",
		image: "/homepage/step-analysis.jpg"
	},
	{
		n: "2",
		title: "Design",
		body: "We engineer around your property's roofs, electrical infrastructure, and unit configuration.",
		image: "/homepage/step-design.jpg"
	},
	{
		n: "3",
		title: "Permitting",
		body: "We manage the plans, permitting, and utility interconnection so the project keeps moving.",
		image: "/homepage/step-permitting.jpg"
	},
	{
		n: "4",
		title: "Installation",
		body: "We build and commission the system with the care an occupied apartment community requires.",
		image: "/homepage/step-installation.jpg"
	},
	{
		n: "5",
		title: "Resident Billing",
		body: "For resident-facing systems, we set up and manage billing, and we help establish solar leases for tenants with no SaaS fees.",
		image: "/homepage/step-billing.jpg"
	},
	{
		n: "6",
		title: "Monitoring",
		body: "We track system performance after commissioning at no additional cost.",
		image: "/homepage/step-monitoring.jpg"
	},
	{
		n: "7",
		title: "Maintenance",
		body: "Our optional long-term maintenance program includes inspections and repairs for the life of the system.",
		image: "/homepage/step-maintenance.jpg"
	}
];
var comparisonRows = [
	{
		feature: "Portfolio-level analysis",
		shine: "Included",
		others: "Extra cost or additional vendor required"
	},
	{
		feature: "Solar on resident meters (not just common areas)",
		shine: "Standard",
		others: "Not an option"
	},
	{
		feature: "Resident billing & reporting software",
		shine: "Included",
		others: "Additional vendor required with SaaS fees"
	},
	{
		feature: "Ongoing performance monitoring",
		shine: "Included, optional",
		others: "Additional vendor required with SaaS fees"
	},
	{
		feature: "Available nationwide",
		shine: "All 50 states",
		others: "Usually local, sometimes regional"
	}
];
var projects = [
	{
		owner: "AvalonBay Communities",
		name: "Southlands",
		location: "Aurora, Colorado",
		image: "/homepage/project-southlands.jpg",
		metrics: [
			{
				value: "1,060 kW",
				label: "System size"
			},
			{
				value: "$246,818",
				label: "Annual solar NOI"
			},
			{
				value: "18.6%",
				label: "Cash-on-cash return"
			},
			{
				value: "$4.25M",
				label: "Est. property value created"
			}
		]
	},
	{
		owner: "Equity Residential",
		name: "Helix",
		location: "Weymouth, Massachusetts",
		image: "/homepage/project-helix.jpg",
		metrics: [
			{
				value: "332.5 kW",
				label: "System size"
			},
			{
				value: "$131,158",
				label: "Annual solar NOI"
			},
			{
				value: "22.7%",
				label: "Cash-on-cash return"
			},
			{
				value: "$2.13M",
				label: "Est. property value created"
			}
		]
	},
	{
		owner: "AvalonBay Communities",
		name: "RiNo",
		location: "Denver, Colorado",
		image: "/homepage/project-rino.jpg",
		metrics: [
			{
				value: "602.3 kW",
				label: "System size"
			},
			{
				value: "$154,360",
				label: "Annual solar NOI"
			},
			{
				value: "19.3%",
				label: "Cash-on-cash return"
			},
			{
				value: "$2.51M",
				label: "Est. property value created"
			}
		]
	},
	{
		owner: "",
		name: "NMHC Top 10 Property",
		location: "Boston, Massachusetts",
		image: "/homepage/project-nmhc.jpg",
		metrics: [
			{
				value: "562.61 kW",
				label: "System size"
			},
			{
				value: "$236,000",
				label: "Annual solar NOI"
			},
			{
				value: "20.25%",
				label: "Yield on cost"
			},
			{
				value: "$3.78M",
				label: "Est. property value created"
			}
		]
	},
	{
		owner: "",
		name: "An Affordable Housing Community",
		location: "Miami, Florida",
		image: "/homepage/project-miami.jpg",
		metrics: [
			{
				value: "8,995.03 kW",
				label: "System size"
			},
			{
				value: "$164,200",
				label: "Annual solar NOI"
			},
			{
				value: "61.65%",
				label: "Yield on cost"
			},
			{
				value: "$3.03M",
				label: "Est. property value created"
			}
		]
	}
];
var faqs = [
	{
		question: "How does solar help affordable housing communities increase rent?",
		answer: "Solar helps to offset tenants' electric use. With Shine, each tenant has a small solar array interconnected to their meter. This design approach allows owners to reduce utility allowances through energy consumption model UA methodology. By lowering your property's utility allowance, solar creates room to raise net max rent — dollar for dollar — while your residents' total housing costs stay the same."
	},
	{
		question: "What's the difference between common area solar and resident (tenant) solar?",
		answer: "Common area solar powers shared spaces like the leasing office, fitness center, and hallways — a small slice of a property's total electricity use. Resident (tenant) solar powers individual units, which make up roughly 95% of the load. Shine installs a small system per apartment unit, which is what allows you to capture 100% of the electrical load in your apartment community and turn it into NOI."
	},
	{
		question: "How do multifamily properties increase NOI with solar?",
		answer: "Most solar systems only offset common area electricity — about 5% of a property's load — which reduces operating expenses. Shine focuses on installing solar on resident meters, the other 95%, which allows you to create an entirely new income line instead of just cutting a cost."
	},
	{
		question: "Didn’t the solar tax credit go away on July 4, 2026?",
		answer: "Yes. The OBBBA accelerated the phaseout of federal tax credits for new solar projects, making July 4, 2026 a critical construction deadline. However, standalone energy storage remains eligible for federal tax credits through at least 2032. As a result, solar projects now require a more comprehensive analysis that considers storage, financial optimization, FEOC compliance, and opportunities to qualify for domestic-content incentives."
	},
	{
		question: "What if I need a new roof?",
		answer: "A roof replacement is often the best time to install solar. Coordinating both projects creates design, labor, permitting, and mobilization efficiencies while avoiding the future cost of removing and reinstalling solar panels. Shine can evaluate the roof and solar scopes together to identify synergies, reduce overall project costs, and minimize disruption."
	},
	{
		question: "Does Shine offer financing?",
		answer: "Yes. Shine works with several financing partners that offer power purchase agreements (PPAs). A PPA allows you to install solar with no upfront capital investment and purchase the electricity the system generates at an agreed-upon rate. We evaluate your property and financial goals to help identify the best financing structure and partner for your project."
	},
	{
		question: "What is a solar EPC, and does it matter which one I choose?",
		answer: "EPC stands for engineering, procurement, and construction — the company that designs, permits, and builds your solar system. Most EPCs stop there and hand you off to separate vendors for billing software and performance monitoring. Shine also offers and manages those pieces, so you're working with one team instead of several."
	}
];
var footerColumns = [
	{
		title: "Solutions",
		links: [{
			label: "Affordable Housing Solar",
			href: "/affordable-housing"
		}, {
			label: "Market-Rate Multifamily Solar",
			href: "/market-rate-housing"
		}]
	},
	{
		title: "Company",
		links: [
			{
				label: "About Shine",
				href: "/about"
			},
			{
				label: "Projects",
				href: "/projects"
			},
			{
				label: "Contact",
				href: "/contact"
			}
		]
	},
	{
		title: "Resources",
		links: [{
			label: "Solar Calculator",
			href: "/#calculator"
		}, {
			label: "Free Solar NOI Analysis",
			href: "/contact"
		}]
	}
];
function TextLink({ item, className, onClick }) {
	if (!item.href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: item.label
	});
	if (item.href.startsWith("/") && !item.href.includes("#")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: item.href,
		className,
		onClick,
		children: item.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: item.href,
		className,
		onClick,
		children: item.label
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-[#0e0e0e] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					"aria-label": "Shine home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/homepage/logo-header.png",
						alt: "Shine",
						className: "h-8 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						item,
						className: "font-sans text-base font-medium text-white"
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: headerCta.href,
						className: "hidden bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black sm:inline-flex",
						children: headerCta.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "lg:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "border-t border-white/10 px-5 pb-6 lg:hidden",
			"aria-label": "Mobile",
			children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
				item,
				onClick: () => setOpen(false),
				className: "block border-b border-white/10 py-3 text-base"
			}, item.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: headerCta.href,
				onClick: () => setOpen(false),
				className: "mt-5 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
				children: headerCta.label
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#0e0e0e] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1280px] gap-12 px-5 py-16 lg:grid-cols-[320px_1fr] lg:px-20 lg:pb-12 lg:pt-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				"aria-label": "Shine home",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/homepage/logo-footer.png",
					alt: "Shine",
					className: "h-11 w-auto"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-base",
				children: "Solar for Multifamily."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-8 sm:grid-cols-4",
				children: footerColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm uppercase tracking-[0.7px] text-accent",
					children: column.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: column.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextLink, {
						item: link,
						className: "text-sm font-semibold text-white"
					}) }, link.label))
				})] }, column.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1280px] px-5 py-12 lg:px-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs",
				children: "© 2026 Shine. All rights reserved."
			})
		})]
	});
}
//#endregion
export { faqs as a, projects as c, customerLogos as i, proofPoints as l, SiteHeader as n, housingColumns as o, comparisonRows as r, processSteps as s, SiteFooter as t };

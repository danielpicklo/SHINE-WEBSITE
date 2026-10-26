import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as projects, n as SiteHeader, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
import { i as ProofPointsRow, n as FinalCta, t as CoverageMap } from "./FinalCta-BVqpDKwg.mjs";
import { t as ProjectCarousel } from "./ProjectCarousel-BguPQH0s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DhkmRRNJ.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectsHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate flex min-h-[400px] items-center justify-center overflow-hidden bg-[#0e0e0e] text-white lg:min-h-[444px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/projects/hero.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover object-[center_35%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-[1024px] flex-col items-center px-5 py-24 text-center lg:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
					children: "Shine's Projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-[772px] text-lg leading-relaxed sm:text-xl sm:leading-[30px]",
					children: "See how affordable housing and market-rate multifamily communities create new income and cut operating costs."
				})]
			})
		]
	});
}
function ProjectsProof() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#091500] bg-[radial-gradient(circle_at_center,rgba(246,232,73,0.12),transparent_70%)] px-5 py-9 lg:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProofPointsRow, {})
	});
}
var names$1 = ["NMHC Top 10 Property", "An Affordable Housing Community"];
function ProjectsAffordable() {
	const cards = names$1.map((name) => projects.find((project) => project.name === name)).filter((project) => project != null);
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
				children: "Affordable housing projects that unlock new revenue."
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
function ProjectsVideoStill() {
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
var names = [
	"Southlands",
	"Helix",
	"RiNo"
];
function ProjectsMarketRate() {
	const cards = names.map((name) => projects.find((project) => project.name === name)).filter((project) => project != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCarousel, {
		projects: cards,
		heading: "Market-rate multifamily projects that cut costs and create income.",
		headingClassName: "mx-auto max-w-3xl text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]"
	});
}
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsHero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsProof, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsAffordable, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsVideoStill, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsMarketRate, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverageMap, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ProjectsPage as component };

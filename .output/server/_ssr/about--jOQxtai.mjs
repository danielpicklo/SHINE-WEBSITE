import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Linkedin } from "../_libs/lucide-react.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-B055aH9_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about--jOQxtai.js
var import_jsx_runtime = require_jsx_runtime();
var button = "bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black";
function AboutStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-[linear-gradient(217deg,#122a00_34%,#0e0e0e_58%)] text-white lg:grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center py-16 lg:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full pl-5 pr-5 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[514px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
							children: [
								"It started",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"with our own apartment units."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-5 text-lg leading-[30px] sm:text-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before founding Shine, Owen Barrett and Earl Mohler acquired 650 apartment units and self-performed solar on their own properties from 2018 - 2021. When other multifamily property owners started asking them for solar, Shine was born." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today, we’re the only solar EPC that captures 100% of the electrical load in affordable housing and market-rate multifamily communities — and turns it into NOI." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We developed our own software and operating model because traditional solar EPCs required property owners and operators to juggle multiple vendors. Shine built what didn’t exist: one team for every phase of a solar project, from underwriting to maintenance." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#calculator",
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
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/about/story.jpg",
			alt: "Shine founders on a multifamily property",
			className: "h-[420px] w-full object-cover lg:h-full lg:min-h-[720px]"
		})]
	});
}
var team = [
	{
		name: "Owen Barrett",
		role: "Co-Founder and CEO",
		image: "/about/owen.jpg",
		linkedIn: "https://www.linkedin.com/in/owenmadsenbarrett/"
	},
	{
		name: "Earl Mohler",
		role: "Co-Founder and CTO",
		image: "/about/earl.jpg",
		linkedIn: "https://www.linkedin.com/in/earl-mohler/"
	},
	{
		name: "Justin Piotroski",
		role: "Chief Operating Officer",
		image: "/about/justin.png",
		linkedIn: "https://www.linkedin.com/in/justinpiotroski/"
	},
	{
		name: "David Perloe",
		role: "Director, Affordable Housing",
		image: "/about/david.png"
	},
	{
		name: "Angie Marks",
		role: "Director of Project Management",
		image: "/about/angie.jpg"
	},
	{
		name: "Brenton Schultz",
		role: "Director, Electrical Review & Quality Assurance",
		image: "/about/brenton.jpg",
		focus: "bottom"
	},
	{
		name: "Elisabetta Liumbruno",
		role: "Director, Electrical Design",
		image: "/about/elisabetta.jpg"
	},
	{
		name: "Brent Crangle",
		role: "Director, Revenue Operations",
		image: "/about/brent.jpg"
	},
	{
		name: "Amanda Weatherford",
		role: "Director, Interconnection and Grid Integration",
		image: "/about/amanda.jpg"
	},
	{
		name: "Ruby Cantu",
		role: "Electrical Designer",
		image: "/about/ruby.jpg"
	},
	{
		name: "Jasmine Novela",
		role: "Project Manager",
		image: "/about/jasmine.jpg"
	},
	{
		name: "Aran Lucas",
		role: "Finance Operations Analyst",
		image: "/about/aran.png"
	},
	{
		name: "Heather Lee Thorsby",
		role: "Project Coordinator",
		image: "/about/heather.png"
	},
	{
		name: "Keegan Acker",
		role: "Business Development Manager",
		image: "/about/keegan.jpg"
	},
	{
		name: "Brittany Rayner",
		role: "Sr. Project Manager",
		image: "/about/brittany.jpg"
	}
];
function Member({ person }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: person.image,
			alt: "",
			className: `aspect-[280/296] w-full object-cover ${person.focus === "bottom" ? "object-bottom" : "object-center"}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-6 text-2xl tracking-[-0.6px] text-[#0e0e0e]",
			children: person.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-sm uppercase leading-6 tracking-[0.7px] text-[#252e09]",
			children: person.role
		}),
		person.linkedIn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: person.linkedIn,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "mt-6 inline-flex text-[#0e0e0e] transition-opacity hover:opacity-70",
			"aria-label": `${person.name} on LinkedIn`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
				className: "h-6 w-6",
				"aria-hidden": "true"
			})
		}) : null
	] });
}
function AboutTeam() {
	const main = team.slice(0, 12);
	const last = team.slice(12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white py-16 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1280px] px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]",
					children: "Our Team"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4",
					children: main.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Member, { person }, person.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-8",
					children: last.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:w-[280px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Member, { person })
					}, person.name))
				})
			]
		})
	});
}
var collage = [
	{
		src: "/about/cta-collage-1.jpg",
		className: "absolute left-[calc(50%+21px)] top-2 h-[240px] w-[160px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover object-[30%_center]"
	},
	{
		src: "/about/cta-collage-5.jpg",
		className: "absolute left-[calc(50%-155px)] top-[59px] h-[189px] w-[160px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover"
	},
	{
		src: "/about/cta-collage-6.jpg",
		className: "absolute left-[calc(50%+197px)] top-[134px] h-[114px] w-[160px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover"
	},
	{
		src: "/about/cta-collage-3.jpg",
		className: "absolute left-[calc(50%-192px)] top-64 size-[192px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover object-[35%_center]"
	},
	{
		src: "/about/cta-collage-4.jpg",
		className: "absolute left-1/2 top-64 h-[240px] w-[160px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover"
	},
	{
		src: "/about/cta-collage-2.jpg",
		className: "absolute left-[calc(50%+192px)] top-64 h-[160px] w-[192px] -translate-x-1/2 overflow-hidden",
		imgClassName: "absolute inset-0 size-full object-cover object-[40%_center]"
	}
];
function AboutCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-[linear-gradient(226deg,#122a00_2%,#0e0e0e_72%)] py-16 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/about/cta-logo.png",
			alt: "",
			"aria-hidden": "true",
			className: "pointer-events-none absolute left-[40%] top-[10%] h-[80%] w-auto max-w-none opacity-5 mix-blend-screen lg:left-[43%]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2 lg:hidden",
					children: collage.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.src,
						alt: "",
						className: "aspect-[3/4] w-full object-cover"
					}, item.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative hidden h-[496px] lg:block",
					children: collage.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: item.className,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: "",
							className: item.imgClassName
						})
					}, item.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-lg text-[40px] leading-[1.15] text-accent sm:text-5xl lg:text-[60px] lg:leading-[72px] lg:tracking-[-1.2px]",
						children: "See the Results of a Shine Project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/case-studies",
						className: "mt-10 inline-flex bg-accent px-[18px] py-2.5 font-display text-sm font-semibold uppercase tracking-[0.7px] text-black",
						children: "Check out our case studies here"
					})]
				})
			]
		})]
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutStory, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutTeam, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };

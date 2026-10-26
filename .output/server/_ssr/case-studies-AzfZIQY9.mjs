import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-AzfZIQY9.js
var import_jsx_runtime = require_jsx_runtime();
var placeholders = [{
	category: "Affordable Housing",
	project: "Add project name",
	owner: "Add owner"
}, {
	category: "Market-Rate Housing",
	project: "Add project name",
	owner: "Add owner"
}];
function CaseStudiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-background pt-[72px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 lg:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1280px] px-5 lg:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-charcoal transition-colors hover:text-foreground",
						children: "← Back to home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-10 text-charcoal",
						children: "Case studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl text-4xl leading-[1.05] lg:text-5xl",
						children: "Multifamily solar projects, start to finish."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-lg leading-relaxed text-charcoal",
						children: "Detailed project profiles for affordable and market-rate apartment communities. Data coming soon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-8 lg:grid-cols-2",
						children: placeholders.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col border border-border bg-background",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[16/10] w-full bg-secondary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow text-charcoal",
										children: cs.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-3 text-2xl text-charcoal/40 lg:text-3xl",
										children: cs.project
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-charcoal/40",
										children: cs.owner
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-sm leading-relaxed text-charcoal/60",
										children: "Project details, system size, financial metrics, and owner outcomes will be added here once data is available."
									})
								]
							})]
						}, cs.category))
					})
				]
			})
		})
	});
}
//#endregion
export { CaseStudiesPage as component };

import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessStepsCarousel-CxFROwuV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProcessStepsCarousel({ steps }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl tracking-[-0.6px]",
				children: "What We Cover :"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-6 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				onScroll: (event) => {
					const el = event.currentTarget;
					const max = el.scrollWidth - el.clientWidth;
					setProgress(max > 0 ? el.scrollLeft / max : 0);
				},
				children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative flex h-[408px] w-[300px] shrink-0 flex-col justify-start overflow-hidden rounded-lg p-6 sm:w-[360px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: step.image,
							alt: "",
							className: "absolute inset-0 size-full object-cover opacity-20"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#0e0e0e]/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "text-[30px] leading-10 tracking-[-0.6px] text-accent",
								children: [
									step.n,
									". ",
									step.title
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-base leading-[22.5px]",
								children: step.body
							})]
						})
					]
				}, step.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-2 h-1 w-full bg-white/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 h-1 w-24 bg-white",
					style: { left: `calc((100% - 6rem) * ${progress})` }
				})
			})
		]
	});
}
//#endregion
export { ProcessStepsCarousel as t };

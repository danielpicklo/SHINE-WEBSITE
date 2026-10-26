import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as ArrowLeft, m as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCarousel-BguPQH0s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var arrowClass = "static top-auto left-auto right-auto size-11 shrink-0 translate-x-0 translate-y-0 rounded-[22px] border-0 bg-white/90 text-[#0e0e0e] shadow-none backdrop-blur-[4px] hover:bg-white disabled:opacity-40";
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "relative flex w-full flex-col justify-end overflow-hidden rounded-lg p-6 text-white sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-h-[420px] flex-col justify-end gap-6",
				children: [
					project.owner ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-fit rounded-full bg-accent px-3 py-1 font-display text-xs uppercase tracking-[0.6px] text-[#0e0e0e]",
						children: project.owner
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-8" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-4xl leading-tight tracking-[-1.2px] lg:text-5xl lg:leading-[1.1]",
						children: project.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg tracking-[-0.6px]",
						children: project.location
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-4",
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
	});
}
function ProjectCarousel({ projects, heading, headingClassName }) {
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
				className: headingClassName ?? "mx-auto max-w-3xl text-center text-4xl leading-tight tracking-[-1.2px] text-[#171717] lg:text-[60px] lg:leading-[72px]",
				children: heading
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Carousel, {
				opts: {
					align: "start",
					loop: false
				},
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: arrowClass }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
							className: "-ml-6 min-w-0 flex-1 lg:-ml-10",
							children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
								className: "basis-[85%] pl-6 sm:basis-[70%] md:basis-[55%] lg:basis-[48%] lg:pl-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project })
							}, project.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: arrowClass })
					]
				})
			})]
		})]
	});
}
//#endregion
export { cn as n, ProjectCarousel as t };

globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"686e-WFQWmN+Wuhm0t1Nn0OUYdKx9vZU\"",
		"mtime": "2026-10-24T13:51:45.532Z",
		"size": 26734,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-24T13:51:45.531Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/affordable/aerial.jpg": {
		"type": "image/jpeg",
		"etag": "\"782fb-zcs8rxsXQA8qI6mzEuZ8lwII67M\"",
		"mtime": "2026-10-24T13:51:45.454Z",
		"size": 492283,
		"path": "../public/affordable/aerial.jpg"
	},
	"/assets/ProcessStepsCarousel-Dmz91a1D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e7-tHccU7F/YIejineGKwgVFIGvces\"",
		"mtime": "2026-10-24T13:51:45.197Z",
		"size": 1255,
		"path": "../public/assets/ProcessStepsCarousel-Dmz91a1D.js"
	},
	"/assets/FinalCta-Cy1jV7HT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17ef-kzfRSRpyYxTaqXDVwdL9zTnPloA\"",
		"mtime": "2026-10-24T13:51:45.197Z",
		"size": 6127,
		"path": "../public/assets/FinalCta-Cy1jV7HT.js"
	},
	"/assets/about-BRmCWes3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f48-7NiFdJO0gVrhvgEfX2Y+oVVD+g4\"",
		"mtime": "2026-10-24T13:51:45.198Z",
		"size": 8008,
		"path": "../public/assets/about-BRmCWes3.js"
	},
	"/assets/ProjectCarousel-Bx6AXwtA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df18-vUO+ndjVo55FZQqzS/n5wHvfV8I\"",
		"mtime": "2026-10-24T13:51:45.197Z",
		"size": 57112,
		"path": "../public/assets/ProjectCarousel-Bx6AXwtA.js"
	},
	"/assets/affordable-housing-CVkywmqB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2130-sdRlg4hK09C47Y+p2VovqncnlnA\"",
		"mtime": "2026-10-24T13:51:45.198Z",
		"size": 8496,
		"path": "../public/assets/affordable-housing-CVkywmqB.js"
	},
	"/assets/case-studies-CF7THd4x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e2-MrNR8VjSypKD1Cm38FZmALm+rzM\"",
		"mtime": "2026-10-24T13:51:45.198Z",
		"size": 1762,
		"path": "../public/assets/case-studies-CF7THd4x.js"
	},
	"/assets/chevron-down-F8X9Lr-U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7a-tkbDVbhecDytd1nArPtFL5F5xoA\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 122,
		"path": "../public/assets/chevron-down-F8X9Lr-U.js"
	},
	"/assets/SiteFooter-iTSNY28H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3425-FKKnCdSYUDE2uuA3+hHP13VgMaM\"",
		"mtime": "2026-10-24T13:51:45.198Z",
		"size": 13349,
		"path": "../public/assets/SiteFooter-iTSNY28H.js"
	},
	"/assets/contact-MFF1MjRO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104a-fUScLxrAFa3UDqY9dlE9z98pu8o\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 4170,
		"path": "../public/assets/contact-MFF1MjRO.js"
	},
	"/assets/projects-DtZga-mE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5e-HIUP6qc8+1GINnA6RnzdUdzWevE\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 3934,
		"path": "../public/assets/projects-DtZga-mE.js"
	},
	"/assets/index-C5-iN07M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b2c7-KkI5NdVfwSa+oqrxUiM42ISp/Uk\"",
		"mtime": "2026-10-24T13:51:45.196Z",
		"size": 373447,
		"path": "../public/assets/index-C5-iN07M.js"
	},
	"/assets/market-rate-housing-B1rtGSqR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a71-kkjSlF58lAyu0jZyjWkuwF6rxd4\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 6769,
		"path": "../public/assets/market-rate-housing-B1rtGSqR.js"
	},
	"/about/amanda.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eec8-KukW263qMH+U7ko+f+pAbTZIJWs\"",
		"mtime": "2026-10-24T13:51:45.414Z",
		"size": 126664,
		"path": "../public/about/amanda.jpg"
	},
	"/about/angie.jpg": {
		"type": "image/jpeg",
		"etag": "\"23019-SAXa0+BDYdmE6mhOYLZFoayr4wQ\"",
		"mtime": "2026-10-24T13:51:45.425Z",
		"size": 143385,
		"path": "../public/about/angie.jpg"
	},
	"/about/aran.png": {
		"type": "image/png",
		"etag": "\"f888-kpceE3gBLadQCepYJkItWqo44pU\"",
		"mtime": "2026-10-24T13:51:45.442Z",
		"size": 63624,
		"path": "../public/about/aran.png"
	},
	"/about/brent.jpg": {
		"type": "image/jpeg",
		"etag": "\"16157-oEeNlfjrTcave1PtW8XNyocSRIY\"",
		"mtime": "2026-10-24T13:51:45.441Z",
		"size": 90455,
		"path": "../public/about/brent.jpg"
	},
	"/about/brenton.jpg": {
		"type": "image/jpeg",
		"etag": "\"1564d-O8kH3pBTwRngJ+rNLG7HL3M4FMQ\"",
		"mtime": "2026-10-24T13:51:45.437Z",
		"size": 87629,
		"path": "../public/about/brenton.jpg"
	},
	"/assets/routes-E-RIVjYX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8686-R3HcWvAvBmi3RQ+OadU0MHxi810\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 34438,
		"path": "../public/assets/routes-E-RIVjYX.js"
	},
	"/assets/users-CmWQdLMk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"472-ReKQClQtrr80xVxNIJUeaM3ziU4\"",
		"mtime": "2026-10-24T13:51:45.199Z",
		"size": 1138,
		"path": "../public/assets/users-CmWQdLMk.js"
	},
	"/assets/styles-TdrgTV-O.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15b73-fICoWMgXk9qMkCZnelqLQR0J1x4\"",
		"mtime": "2026-10-24T13:51:45.200Z",
		"size": 88947,
		"path": "../public/assets/styles-TdrgTV-O.css"
	},
	"/affordable/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"13bdb8-lDhLb1ysO99LB7r1o5PUWoFRNgk\"",
		"mtime": "2026-10-24T13:51:45.417Z",
		"size": 1293752,
		"path": "../public/affordable/hero.jpg"
	},
	"/about/collage-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"149ed-SroylOO5v/LhdwTLHp1eWqxqJsk\"",
		"mtime": "2026-10-24T13:51:45.430Z",
		"size": 84461,
		"path": "../public/about/collage-1.jpg"
	},
	"/about/brittany.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f649-tDIU7wXZFzFqMx6apCTVGIgCjcM\"",
		"mtime": "2026-10-24T13:51:45.430Z",
		"size": 128585,
		"path": "../public/about/brittany.jpg"
	},
	"/about/collage-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"28736-0OW9bBPcOlN/42Flzgqthyo+q+g\"",
		"mtime": "2026-10-24T13:51:45.434Z",
		"size": 165686,
		"path": "../public/about/collage-2.jpg"
	},
	"/about/collage-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"14c48-PHUXn164ex2TTZ2bmsedaMax3Lc\"",
		"mtime": "2026-10-24T13:51:45.435Z",
		"size": 85064,
		"path": "../public/about/collage-3.jpg"
	},
	"/about/collage-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"240a6-icGGxVsgYWDLvE35kTy8uQoVhf8\"",
		"mtime": "2026-10-24T13:51:45.438Z",
		"size": 147622,
		"path": "../public/about/collage-4.jpg"
	},
	"/about/cta-collage-1.jpg": {
		"type": "image/jpeg",
		"etag": "\"16754-/78F+tXy0iEtEkCuTjApWswRhKo\"",
		"mtime": "2026-10-24T13:51:45.441Z",
		"size": 91988,
		"path": "../public/about/cta-collage-1.jpg"
	},
	"/about/collage-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"4108d-01JyTNJnvUIXeK84F6JN8durJ6k\"",
		"mtime": "2026-10-24T13:51:45.438Z",
		"size": 266381,
		"path": "../public/about/collage-5.jpg"
	},
	"/about/cta-collage-3.jpg": {
		"type": "image/jpeg",
		"etag": "\"19442-D9mYlffNBPs6WUCibUqdvyISZSw\"",
		"mtime": "2026-10-24T13:51:45.443Z",
		"size": 103490,
		"path": "../public/about/cta-collage-3.jpg"
	},
	"/about/cta-collage-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"34313-vVBQGDSOm8xAdS+bnz1ZdzM5tNg\"",
		"mtime": "2026-10-24T13:51:45.444Z",
		"size": 213779,
		"path": "../public/about/cta-collage-2.jpg"
	},
	"/about/collage-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"38ea4-TEQSM011D9CwsmB4m9XPhyRMcyQ\"",
		"mtime": "2026-10-24T13:51:45.441Z",
		"size": 233124,
		"path": "../public/about/collage-6.jpg"
	},
	"/about/cta-logo.png": {
		"type": "image/png",
		"etag": "\"2fa8-33eb7l9uaDwhq3QxPknE6Stc9d8\"",
		"mtime": "2026-10-24T13:51:45.445Z",
		"size": 12200,
		"path": "../public/about/cta-logo.png"
	},
	"/about/david.png": {
		"type": "image/png",
		"etag": "\"d38a-u+1BX4W1R2fghSd/eymE6A9jUMY\"",
		"mtime": "2026-10-24T13:51:45.446Z",
		"size": 54154,
		"path": "../public/about/david.png"
	},
	"/about/earl.jpg": {
		"type": "image/jpeg",
		"etag": "\"e1d6-X3VTKjU3Px8u7JwbdUYh69nt5eE\"",
		"mtime": "2026-10-24T13:51:45.448Z",
		"size": 57814,
		"path": "../public/about/earl.jpg"
	},
	"/about/cta-collage-4.jpg": {
		"type": "image/jpeg",
		"etag": "\"2dcb9-JYVYHEwzzF+tzdlTI2t0F+xy8UM\"",
		"mtime": "2026-10-24T13:51:45.445Z",
		"size": 187577,
		"path": "../public/about/cta-collage-4.jpg"
	},
	"/about/cta-collage-5.jpg": {
		"type": "image/jpeg",
		"etag": "\"68f2e-PRmxarazKk0A6ko8WFGryc5RiQI\"",
		"mtime": "2026-10-24T13:51:45.445Z",
		"size": 429870,
		"path": "../public/about/cta-collage-5.jpg"
	},
	"/about/elisabetta.jpg": {
		"type": "image/jpeg",
		"etag": "\"f608-yb60kZIvo0ITXXyI4o+VR/jiSyU\"",
		"mtime": "2026-10-24T13:51:45.448Z",
		"size": 62984,
		"path": "../public/about/elisabetta.jpg"
	},
	"/about/justin.png": {
		"type": "image/png",
		"etag": "\"beaa-RsNdhrGMVEoIL+dnUBc/QoA5Gu0\"",
		"mtime": "2026-10-24T13:51:45.450Z",
		"size": 48810,
		"path": "../public/about/justin.png"
	},
	"/about/heather.png": {
		"type": "image/png",
		"etag": "\"10de2-JTU1BmOmt9trP4ld7ibzNaqNd80\"",
		"mtime": "2026-10-24T13:51:45.447Z",
		"size": 69090,
		"path": "../public/about/heather.png"
	},
	"/about/jasmine.jpg": {
		"type": "image/jpeg",
		"etag": "\"13ac5-8I3IY1hsk5UqyPDz49PnmcgfECo\"",
		"mtime": "2026-10-24T13:51:45.448Z",
		"size": 80581,
		"path": "../public/about/jasmine.jpg"
	},
	"/about/cta-collage-6.jpg": {
		"type": "image/jpeg",
		"etag": "\"58799-lXw2vQVlPgxzCYd1WjzEtnL2ex4\"",
		"mtime": "2026-10-24T13:51:45.446Z",
		"size": 362393,
		"path": "../public/about/cta-collage-6.jpg"
	},
	"/about/keegan.jpg": {
		"type": "image/jpeg",
		"etag": "\"174af-aFmuC9xZ+Zt7dLhHnmueUikzVjY\"",
		"mtime": "2026-10-24T13:51:45.449Z",
		"size": 95407,
		"path": "../public/about/keegan.jpg"
	},
	"/about/ruby.jpg": {
		"type": "image/jpeg",
		"etag": "\"10e53-/VpO1XW9NdeCA54OwsI8EstkMJA\"",
		"mtime": "2026-10-24T13:51:45.450Z",
		"size": 69203,
		"path": "../public/about/ruby.jpg"
	},
	"/about/owen.jpg": {
		"type": "image/jpeg",
		"etag": "\"c35a-R3FZHCW1W5OpYs+y91nujv58skU\"",
		"mtime": "2026-10-24T13:51:45.450Z",
		"size": 50010,
		"path": "../public/about/owen.jpg"
	},
	"/about/story.jpg": {
		"type": "image/jpeg",
		"etag": "\"41736-01NoLvst5AoPclg+6792k/qjCTY\"",
		"mtime": "2026-10-24T13:51:45.451Z",
		"size": 268086,
		"path": "../public/about/story.jpg"
	},
	"/homepage/logo-avalonbay.png": {
		"type": "image/png",
		"etag": "\"3e4d-WOrNf90vPdMYXJm22ixjKuFXCY0\"",
		"mtime": "2026-10-24T13:51:45.452Z",
		"size": 15949,
		"path": "../public/homepage/logo-avalonbay.png"
	},
	"/homepage/logo-footer.png": {
		"type": "image/png",
		"etag": "\"6de2-rMIDTuoBb887Voxqi/K7sHxWBek\"",
		"mtime": "2026-10-24T13:51:45.460Z",
		"size": 28130,
		"path": "../public/homepage/logo-footer.png"
	},
	"/homepage/logo-equity.png": {
		"type": "image/png",
		"etag": "\"1997f-x6J8OuQZ/Xn4FElk1c9cxLIrvt8\"",
		"mtime": "2026-10-24T13:51:45.457Z",
		"size": 104831,
		"path": "../public/homepage/logo-equity.png"
	},
	"/homepage/logo-gorman.png": {
		"type": "image/png",
		"etag": "\"ab5b-q8Kl5u3tlQ4JAjR7qxEis7Ajnr8\"",
		"mtime": "2026-10-24T13:51:45.529Z",
		"size": 43867,
		"path": "../public/homepage/logo-gorman.png"
	},
	"/homepage/logo-lincoln.png": {
		"type": "image/png",
		"etag": "\"cb0e-eJyyC8fVKCOd9rEiGA7Kq6nfXSI\"",
		"mtime": "2026-10-24T13:51:45.462Z",
		"size": 51982,
		"path": "../public/homepage/logo-lincoln.png"
	},
	"/homepage/logo-rose.png": {
		"type": "image/png",
		"etag": "\"b16a-uz6t9OgdMC295rRdd1m6O6mdEbw\"",
		"mtime": "2026-10-24T13:51:45.464Z",
		"size": 45418,
		"path": "../public/homepage/logo-rose.png"
	},
	"/homepage/project-helix.jpg": {
		"type": "image/jpeg",
		"etag": "\"4e2e5-2HmYHIGW63/qzOvT4ukqLxjuIWI\"",
		"mtime": "2026-10-24T13:51:45.470Z",
		"size": 320229,
		"path": "../public/homepage/project-helix.jpg"
	},
	"/homepage/project-miami.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c562-McPJxRfkKcRSVFUW++5vrDxou6s\"",
		"mtime": "2026-10-24T13:51:45.473Z",
		"size": 247138,
		"path": "../public/homepage/project-miami.jpg"
	},
	"/homepage/casestudies-bg.png": {
		"type": "image/png",
		"etag": "\"a33aa-oU/4W3FzfSeWCFN/wY8APZfxhs4\"",
		"mtime": "2026-10-24T13:51:45.456Z",
		"size": 668586,
		"path": "../public/homepage/casestudies-bg.png"
	},
	"/homepage/logo-header.png": {
		"type": "image/png",
		"etag": "\"6de2-rMIDTuoBb887Voxqi/K7sHxWBek\"",
		"mtime": "2026-10-24T13:51:45.461Z",
		"size": 28130,
		"path": "../public/homepage/logo-header.png"
	},
	"/homepage/logo-nrp.png": {
		"type": "image/png",
		"etag": "\"2c5e-8ZyiwkWg9WYgLX3lsgtEFFcsgtw\"",
		"mtime": "2026-10-24T13:51:45.461Z",
		"size": 11358,
		"path": "../public/homepage/logo-nrp.png"
	},
	"/homepage/map-wash.png": {
		"type": "image/png",
		"etag": "\"ad112-oGYk5op4ZSo3dm6ipp2v8PuvReY\"",
		"mtime": "2026-10-24T13:51:45.470Z",
		"size": 708882,
		"path": "../public/homepage/map-wash.png"
	},
	"/homepage/map.png": {
		"type": "image/png",
		"etag": "\"8065e-N//yYFHpp6DcI9T7yHapjJ6pZSQ\"",
		"mtime": "2026-10-24T13:51:45.472Z",
		"size": 525918,
		"path": "../public/homepage/map.png"
	},
	"/homepage/project-nmhc.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d362-9Josg36nn8PUGzoEEprUQhOwlSU\"",
		"mtime": "2026-10-24T13:51:45.477Z",
		"size": 250722,
		"path": "../public/homepage/project-nmhc.jpg"
	},
	"/homepage/project-southlands.jpg": {
		"type": "image/jpeg",
		"etag": "\"64b3d-+/m2zszsSxJKwoLZn3NKIpT68Lw\"",
		"mtime": "2026-10-24T13:51:45.482Z",
		"size": 412477,
		"path": "../public/homepage/project-southlands.jpg"
	},
	"/homepage/project-rino.jpg": {
		"type": "image/jpeg",
		"etag": "\"7ffae-drpcwCiME+XFiwVgOtgd6NLrbmg\"",
		"mtime": "2026-10-24T13:51:45.479Z",
		"size": 524206,
		"path": "../public/homepage/project-rino.jpg"
	},
	"/market-rate/aerial.jpg": {
		"type": "image/jpeg",
		"etag": "\"16a2ce-/6vTDhkAoptaukt5JvjqsclTj4Y\"",
		"mtime": "2026-10-24T13:51:45.419Z",
		"size": 1483470,
		"path": "../public/market-rate/aerial.jpg"
	},
	"/homepage/aerial.jpg": {
		"type": "image/jpeg",
		"etag": "\"135b9e-Wr26z0vbWo1koHy09/9MT7jtod0\"",
		"mtime": "2026-10-24T13:51:45.422Z",
		"size": 1268638,
		"path": "../public/homepage/aerial.jpg"
	},
	"/homepage/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"111413-abkO+4ZW4Se5Si5zBeiov6ZzWbY\"",
		"mtime": "2026-10-24T13:51:45.457Z",
		"size": 1119251,
		"path": "../public/homepage/hero.jpg"
	},
	"/market-rate/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"12168f-4TUUNQCuTnNJh1SwqI561mzdLjk\"",
		"mtime": "2026-10-24T13:51:45.501Z",
		"size": 1185423,
		"path": "../public/market-rate/hero.jpg"
	},
	"/homepage/quote-bg.jpg": {
		"type": "image/jpeg",
		"etag": "\"13363f-m8HxChIf4srBka049R0FBPJ9t6Y\"",
		"mtime": "2026-10-24T13:51:45.484Z",
		"size": 1259071,
		"path": "../public/homepage/quote-bg.jpg"
	},
	"/homepage/shine-wordmark.svg": {
		"type": "image/svg+xml",
		"etag": "\"bd3-gscA8ewCM7XJMADRZmDUGk6yQhg\"",
		"mtime": "2026-10-24T13:51:45.482Z",
		"size": 3027,
		"path": "../public/homepage/shine-wordmark.svg"
	},
	"/homepage/step-analysis.jpg": {
		"type": "image/jpeg",
		"etag": "\"2386f-0As/P3QctlYj5cGx2zaWZDR19+I\"",
		"mtime": "2026-10-24T13:51:45.485Z",
		"size": 145519,
		"path": "../public/homepage/step-analysis.jpg"
	},
	"/homepage/step-billing.jpg": {
		"type": "image/jpeg",
		"etag": "\"1473c-k5wgC/YdIHGMR4/dB0Sdhu/3XjE\"",
		"mtime": "2026-10-24T13:51:45.485Z",
		"size": 83772,
		"path": "../public/homepage/step-billing.jpg"
	},
	"/homepage/step-design.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f00c-IjPR7fxmGKPHJ3ZMr9YsjPgkgdQ\"",
		"mtime": "2026-10-24T13:51:45.489Z",
		"size": 126988,
		"path": "../public/homepage/step-design.jpg"
	},
	"/homepage/step-installation.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d36e-MHOM8sWp4yC1Oi6SfmKwoBPw9M4\"",
		"mtime": "2026-10-24T13:51:45.488Z",
		"size": 250734,
		"path": "../public/homepage/step-installation.jpg"
	},
	"/homepage/step-maintenance.jpg": {
		"type": "image/jpeg",
		"etag": "\"27ce4-HinM08CXO7t7elSo7qSdBnMkO04\"",
		"mtime": "2026-10-24T13:51:45.491Z",
		"size": 163044,
		"path": "../public/homepage/step-maintenance.jpg"
	},
	"/homepage/step-monitoring.jpg": {
		"type": "image/jpeg",
		"etag": "\"1df8b-fcXfiavedZJfBqmX7o/OE92dzjg\"",
		"mtime": "2026-10-24T13:51:45.492Z",
		"size": 122763,
		"path": "../public/homepage/step-monitoring.jpg"
	},
	"/homepage/step-permitting.jpg": {
		"type": "image/jpeg",
		"etag": "\"19350-PUslmsBqTdQNSy4m1bNXGdOKhAo\"",
		"mtime": "2026-10-24T13:51:45.492Z",
		"size": 103248,
		"path": "../public/homepage/step-permitting.jpg"
	},
	"/homepage/logos/logo-april.png": {
		"type": "image/png",
		"etag": "\"fd19-9NSqXtWSD9ze3+vJzo9qqKHK0uw\"",
		"mtime": "2026-10-24T13:51:45.433Z",
		"size": 64793,
		"path": "../public/homepage/logos/logo-april.png"
	},
	"/homepage/logos/logo-avalonbay.png": {
		"type": "image/png",
		"etag": "\"3e4d-WOrNf90vPdMYXJm22ixjKuFXCY0\"",
		"mtime": "2026-10-24T13:51:45.521Z",
		"size": 15949,
		"path": "../public/homepage/logos/logo-avalonbay.png"
	},
	"/homepage/logos/logo-equity-residential.png": {
		"type": "image/png",
		"etag": "\"1997f-x6J8OuQZ/Xn4FElk1c9cxLIrvt8\"",
		"mtime": "2026-10-24T13:51:45.510Z",
		"size": 104831,
		"path": "../public/homepage/logos/logo-equity-residential.png"
	},
	"/homepage/logos/logo-gorman.png": {
		"type": "image/png",
		"etag": "\"ab5b-q8Kl5u3tlQ4JAjR7qxEis7Ajnr8\"",
		"mtime": "2026-10-24T13:51:45.513Z",
		"size": 43867,
		"path": "../public/homepage/logos/logo-gorman.png"
	},
	"/homepage/logos/logo-hudson-valley.png": {
		"type": "image/png",
		"etag": "\"28590-rbv0WgoPjSupSpkbDY3sqiVRbB8\"",
		"mtime": "2026-10-24T13:51:45.516Z",
		"size": 165264,
		"path": "../public/homepage/logos/logo-hudson-valley.png"
	},
	"/homepage/logos/logo-lincoln.png": {
		"type": "image/png",
		"etag": "\"cb0e-eJyyC8fVKCOd9rEiGA7Kq6nfXSI\"",
		"mtime": "2026-10-24T13:51:45.522Z",
		"size": 51982,
		"path": "../public/homepage/logos/logo-lincoln.png"
	},
	"/homepage/logos/logo-michaels.png": {
		"type": "image/png",
		"etag": "\"47b3-tnJg9m4mXfWbt6Ffu4ajQcBrCEg\"",
		"mtime": "2026-10-24T13:51:45.516Z",
		"size": 18355,
		"path": "../public/homepage/logos/logo-michaels.png"
	},
	"/homepage/logos/logo-nrp.png": {
		"type": "image/png",
		"etag": "\"2c5e-8ZyiwkWg9WYgLX3lsgtEFFcsgtw\"",
		"mtime": "2026-10-24T13:51:45.520Z",
		"size": 11358,
		"path": "../public/homepage/logos/logo-nrp.png"
	},
	"/homepage/logos/logo-related.png": {
		"type": "image/png",
		"etag": "\"5450-x58LjL/QcjjeYZPBUQFRCyNQV3U\"",
		"mtime": "2026-10-24T13:51:45.523Z",
		"size": 21584,
		"path": "../public/homepage/logos/logo-related.png"
	},
	"/homepage/logos/logo-rose.png": {
		"type": "image/png",
		"etag": "\"b16a-uz6t9OgdMC295rRdd1m6O6mdEbw\"",
		"mtime": "2026-10-24T13:51:45.523Z",
		"size": 45418,
		"path": "../public/homepage/logos/logo-rose.png"
	},
	"/projects/aerial.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d9301-Uq8wON5VSXP2ji7lzvEoREOcBYo\"",
		"mtime": "2026-10-24T13:51:45.431Z",
		"size": 4035329,
		"path": "../public/projects/aerial.jpg"
	},
	"/contact/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"92069d-pifixK06dyYwKe5rDJjiAyZhnKA\"",
		"mtime": "2026-10-24T13:51:45.438Z",
		"size": 9569949,
		"path": "../public/contact/hero.jpg"
	},
	"/projects/hero.jpg": {
		"type": "image/jpeg",
		"etag": "\"73b777-OLpnqhL6nIHPmyTp4xUL3HRtKdc\"",
		"mtime": "2026-10-24T13:51:45.508Z",
		"size": 7583607,
		"path": "../public/projects/hero.jpg"
	},
	"/homepage/hero.mp4": {
		"type": "video/mp4",
		"etag": "\"c4154b-Ml0WaeGQVJr1PA95Nb7dSVJjp50\"",
		"mtime": "2026-10-24T13:51:45.487Z",
		"size": 12850507,
		"path": "../public/homepage/hero.mp4"
	},
	"/homepage/video-section.mp4": {
		"type": "video/mp4",
		"etag": "\"b46373-YELF8LjT34yOWcx5cUY5lLt/I2s\"",
		"mtime": "2026-10-24T13:51:45.525Z",
		"size": 11821939,
		"path": "../public/homepage/video-section.mp4"
	},
	"/homepage/testimonials.mp4": {
		"type": "video/mp4",
		"etag": "\"1089913-+RY7qw9eoCBmMbXlTFWlahmC+t8\"",
		"mtime": "2026-10-24T13:51:45.547Z",
		"size": 17340691,
		"path": "../public/homepage/testimonials.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_SYunfE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_SYunfE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

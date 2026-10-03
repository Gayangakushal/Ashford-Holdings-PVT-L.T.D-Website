globalThis.__nitro_main__ = import.meta.url;
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx+unenv.mjs";
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
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
	"/assets/about-6U-0q2UP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f65-+wOvNCYW+kVZUinV0afvqeIyiBI\"",
		"mtime": "2026-10-02T09:46:24.918Z",
		"size": 3941,
		"path": "../public/assets/about-6U-0q2UP.js"
	},
	"/assets/brands-D7FyqxaS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6dd-STvvkdprHbaZkB6d45ZVHaDgFNo\"",
		"mtime": "2026-10-02T09:46:24.919Z",
		"size": 1757,
		"path": "../public/assets/brands-D7FyqxaS.js"
	},
	"/assets/Cards-CVamO2ls.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"550-aVexh+C0jybOtkg/Vc0p763kSM0\"",
		"mtime": "2026-10-02T09:46:24.913Z",
		"size": 1360,
		"path": "../public/assets/Cards-CVamO2ls.js"
	},
	"/assets/contact-DJIwxtwC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c9-ei75qoBZDvIq0MTVAWHN1SVL/Go\"",
		"mtime": "2026-10-02T09:46:24.922Z",
		"size": 1225,
		"path": "../public/assets/contact-DJIwxtwC.js"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"1d8b-jqMjDTprvlUiT+IYer7z51SbTdE\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 7563,
		"path": "../public/favicon.ico"
	},
	"/assets/ContactSection-B9SF5-Sm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1177-vONVmSY6A5zWT8j4FOlh0juXOqQ\"",
		"mtime": "2026-10-02T09:46:24.913Z",
		"size": 4471,
		"path": "../public/assets/ContactSection-B9SF5-Sm.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"43-X9XTOCkncap7O3s7taWlQx47iO8\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 67,
		"path": "../public/robots.txt"
	},
	"/assets/CTA-C1_x_nsE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54c-7VwCtNDRGkSoE4JxMO2ClAf/huk\"",
		"mtime": "2026-10-02T09:46:24.910Z",
		"size": 1356,
		"path": "../public/assets/CTA-C1_x_nsE.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"10cc-4v8ErVDiD7m8ANT3Bezcpm53V6M\"",
		"mtime": "2026-10-01T17:57:18.000Z",
		"size": 4300,
		"path": "../public/sitemap.xml"
	},
	"/assets/industries-D4AmcKcy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"36d-O6TEgXTjstKtx31XVF9dKr5l+L0\"",
		"mtime": "2026-10-02T09:46:24.923Z",
		"size": 877,
		"path": "../public/assets/industries-D4AmcKcy.js"
	},
	"/assets/IndustryGrid-DUAdYu1H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"34f-8lqX8fbmpcHDemQh5u6o13TBJwY\"",
		"mtime": "2026-10-02T09:46:24.914Z",
		"size": 847,
		"path": "../public/assets/IndustryGrid-DUAdYu1H.js"
	},
	"/assets/index-CZglyUuK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"66820-PeD68kEhVZKGacAvHlOhtmao+0k\"",
		"mtime": "2026-10-02T09:46:24.910Z",
		"size": 419872,
		"path": "../public/assets/index-CZglyUuK.js"
	},
	"/assets/PageHero-B8XMmqlw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"58a-uwhhabasy4RyG+R+PbCzuFKg3vg\"",
		"mtime": "2026-10-02T09:46:24.914Z",
		"size": 1418,
		"path": "../public/assets/PageHero-B8XMmqlw.js"
	},
	"/assets/products-Bzzigxzp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ac-3BZ9uGCtGpPl+FkA0wunaGcxc5M\"",
		"mtime": "2026-10-02T09:46:24.924Z",
		"size": 1708,
		"path": "../public/assets/products-Bzzigxzp.js"
	},
	"/assets/ProjectCard-B6wNrorI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b6-Se11Tvm4sr3RhYti5AyvXs99oKI\"",
		"mtime": "2026-10-02T09:46:24.914Z",
		"size": 1718,
		"path": "../public/assets/ProjectCard-B6wNrorI.js"
	},
	"/assets/privacy-BVhKA7id.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5fa-MWoxITH1gQTPm4DF5ZDQV64aUTU\"",
		"mtime": "2026-10-02T09:46:24.924Z",
		"size": 1530,
		"path": "../public/assets/privacy-BVhKA7id.js"
	},
	"/assets/projects-CFGTurhV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f8-962TZtWaVDdj6k12THbWOa28cuc\"",
		"mtime": "2026-10-02T09:46:24.924Z",
		"size": 1528,
		"path": "../public/assets/projects-CFGTurhV.js"
	},
	"/assets/RackingDrawing-CBIbpb5c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7c6-uHs+Oa/paS32UDtVxqASlBh+9K4\"",
		"mtime": "2026-10-02T09:46:24.915Z",
		"size": 1990,
		"path": "../public/assets/RackingDrawing-CBIbpb5c.js"
	},
	"/assets/Reveal-BPB9U_k1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"28d-62Jc05JIcKu2tkhyb29T9xJzKAA\"",
		"mtime": "2026-10-02T09:46:24.915Z",
		"size": 653,
		"path": "../public/assets/Reveal-BPB9U_k1.js"
	},
	"/assets/SectionLabel-CZYj0XqS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"30e-f6Y4jd1w/35+UOa2dZp5hrv8KJo\"",
		"mtime": "2026-10-02T09:46:24.915Z",
		"size": 782,
		"path": "../public/assets/SectionLabel-CZYj0XqS.js"
	},
	"/assets/leadership-DxK6Ws_C.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7f6-7W8lq7kpgdErElVFZhulSD0EYpI\"",
		"mtime": "2026-10-02T09:46:24.923Z",
		"size": 2038,
		"path": "../public/assets/leadership-DxK6Ws_C.js"
	},
	"/assets/routes-CiPbW3u4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5778-TvNVw3LRiCg5rp3QQGAgKWQK+Hc\"",
		"mtime": "2026-10-02T09:46:24.924Z",
		"size": 22392,
		"path": "../public/assets/routes-CiPbW3u4.js"
	},
	"/assets/styles-DyUrbkSF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1f51a-unxpyZjm3VrfxRvi65+bTOU8yKo\"",
		"mtime": "2026-10-02T09:46:24.926Z",
		"size": 128282,
		"path": "../public/assets/styles-DyUrbkSF.css"
	},
	"/assets/solutions-DoQz0WVw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db3-VT4IGaQFXs7T0oMP78PeValFEsY\"",
		"mtime": "2026-10-02T09:46:24.925Z",
		"size": 3507,
		"path": "../public/assets/solutions-DoQz0WVw.js"
	},
	"/assets/terms-B_5u6eB9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"560-CAq8aCglgFa6vtjYgomFyBkOrtU\"",
		"mtime": "2026-10-02T09:46:24.925Z",
		"size": 1376,
		"path": "../public/assets/terms-B_5u6eB9.js"
	},
	"/assets/TestimonialSlider-mHBYmLCW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d3d-VXU0Ocjca9LK3ZGHBsyb2UZyW04\"",
		"mtime": "2026-10-02T09:46:24.916Z",
		"size": 3389,
		"path": "../public/assets/TestimonialSlider-mHBYmLCW.js"
	},
	"/assets/WhyAshford-DNoUnKxA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f09-2RG0FBfB2GOyUN/pKJJldzvxjf0\"",
		"mtime": "2026-10-02T09:46:24.916Z",
		"size": 12041,
		"path": "../public/assets/WhyAshford-DNoUnKxA.js"
	},
	"/assets/_slug-86qWrl1u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ca4-XEMO2UCKg/tIsL6zUOK67HZErOE\"",
		"mtime": "2026-10-02T09:46:24.916Z",
		"size": 7332,
		"path": "../public/assets/_slug-86qWrl1u.js"
	},
	"/assets/site-C8bkGFIh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c83-hjvFeNZV/QqTMYxz7Hk+sLEIexY\"",
		"mtime": "2026-10-02T09:46:24.925Z",
		"size": 68739,
		"path": "../public/assets/site-C8bkGFIh.js"
	},
	"/assets/_slug-Bv9zF-FI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"952-PYcIfG7X3AXGnT5XJ3QiR4vjx88\"",
		"mtime": "2026-10-02T09:46:24.917Z",
		"size": 2386,
		"path": "../public/assets/_slug-Bv9zF-FI.js"
	},
	"/assets/_slug-ClBDYdUt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae5-1hO89E5LycA4jMwgePq4RHa82bc\"",
		"mtime": "2026-10-02T09:46:24.918Z",
		"size": 2789,
		"path": "../public/assets/_slug-ClBDYdUt.js"
	},
	"/assets/_slug-C2wGJdz1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dce-cOjVDBs+HiayRXxH1Jp8YH+WT2k\"",
		"mtime": "2026-10-02T09:46:24.917Z",
		"size": 3534,
		"path": "../public/assets/_slug-C2wGJdz1.js"
	},
	"/assets/brand/ashford-holdings-logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b3ce-B9UaFrGVMDQswGrYj60WrRk7ixc\"",
		"mtime": "2026-10-01T17:03:46.000Z",
		"size": 111566,
		"path": "../public/assets/brand/ashford-holdings-logo.jpg"
	},
	"/assets/brand/sirocco-logo-dark@2x.png": {
		"type": "image/png",
		"etag": "\"286c-YhT241lNO6lZcvwhbrjw2ojL4eY\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 10348,
		"path": "../public/assets/brand/sirocco-logo-dark@2x.png"
	},
	"/assets/brand/sirocco-logo-light.svg": {
		"type": "image/svg+xml",
		"etag": "\"24de-X/pJWRsuRexlha3hntVOJMsLHOs\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 9438,
		"path": "../public/assets/brand/sirocco-logo-light.svg"
	},
	"/assets/brand/sirocco-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"24de-VBpZibXPlhN/Hkoh+LUuEsdVcNc\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 9438,
		"path": "../public/assets/brand/sirocco-logo.svg"
	},
	"/assets/feedback/bpl-teas-pvt-ltd.png": {
		"type": "image/png",
		"etag": "\"26f9-ZOmTCeiMcnhvA9PMj0tNgmWVNxE\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 9977,
		"path": "../public/assets/feedback/bpl-teas-pvt-ltd.png"
	},
	"/assets/feedback/ae-bangladesh.png": {
		"type": "image/png",
		"etag": "\"12f0-35tCrxrmGiGBllP1GkhZHveo1L0\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 4848,
		"path": "../public/assets/feedback/ae-bangladesh.png"
	},
	"/assets/feedback/dok-solutions-lanka.png": {
		"type": "image/png",
		"etag": "\"1a9e-26aS4qmpyDWotCQQuecBtdckf4M\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 6814,
		"path": "../public/assets/feedback/dok-solutions-lanka.png"
	},
	"/assets/feedback/george-steuart.png": {
		"type": "image/png",
		"etag": "\"2949-crDH7XTZJtQumhRfwHb1icbjfcY\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 10569,
		"path": "../public/assets/feedback/george-steuart.png"
	},
	"/assets/feedback/mas-intimates-bangladesh.png": {
		"type": "image/png",
		"etag": "\"1dcb-HyU2ofZxgLA2Ye4LJWqqk1NgBig\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 7627,
		"path": "../public/assets/feedback/mas-intimates-bangladesh.png"
	},
	"/assets/feedback/variosystems.png": {
		"type": "image/png",
		"etag": "\"1ecf-3WLFUdMjZKTte41Fj13V5+QJwrw\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 7887,
		"path": "../public/assets/feedback/variosystems.png"
	},
	"/assets/clients/client-17.png": {
		"type": "image/png",
		"etag": "\"2ace-xQxd40z1S1n0LOn4GrnLdLZTDBQ\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 10958,
		"path": "../public/assets/clients/client-17.png"
	},
	"/assets/clients/client-19.jpeg": {
		"type": "image/jpeg",
		"etag": "\"745c-mnoGiacVhfBxLq3pdDuRrHDKI3U\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 29788,
		"path": "../public/assets/clients/client-19.jpeg"
	},
	"/assets/clients/client-21.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7c95-QdLtysLtpXin1tzcGCBvG1T3WCk\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 31893,
		"path": "../public/assets/clients/client-21.jpeg"
	},
	"/assets/clients/client-22.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3fd9-iVoh+OH8QBwpeNIMamSkFVhDRqU\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 16345,
		"path": "../public/assets/clients/client-22.jpeg"
	},
	"/assets/clients/client-23.jpeg": {
		"type": "image/jpeg",
		"etag": "\"62e1-f25JWgM4w4RK4wKKmnrApDUPzs4\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 25313,
		"path": "../public/assets/clients/client-23.jpeg"
	},
	"/assets/clients/client-24.jpeg": {
		"type": "image/jpeg",
		"etag": "\"76b3-rEx84ulh+Seidwvy3Du7GcNcnGU\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 30387,
		"path": "../public/assets/clients/client-24.jpeg"
	},
	"/assets/clients/client-26.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4ce5-smaEBKsuiFLhVKG0e3aTmeXjw8I\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 19685,
		"path": "../public/assets/clients/client-26.jpeg"
	},
	"/assets/clients/client-27.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ffcf-fRRUzQ/i3Eit30VPG656D/YPZo4\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 65487,
		"path": "../public/assets/clients/client-27.jpeg"
	},
	"/assets/clients/client-29.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3005-anz1VC9a8ZkhUQLQOtUsp/GhR1k\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 12293,
		"path": "../public/assets/clients/client-29.jpeg"
	},
	"/assets/clients/client-31.png": {
		"type": "image/png",
		"etag": "\"26ed-1WXI9yYV6SFRrlO0xawnaJb+5tw\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 9965,
		"path": "../public/assets/clients/client-31.png"
	},
	"/assets/clients/client-33.png": {
		"type": "image/png",
		"etag": "\"2bc6-Fc6nCrctPap4LpRN423TleGy5d8\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 11206,
		"path": "../public/assets/clients/client-33.png"
	},
	"/assets/clients/client-34.png": {
		"type": "image/png",
		"etag": "\"2b78-a3fWv2kzxYqrNk+NI5Nkfbvtzac\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 11128,
		"path": "../public/assets/clients/client-34.png"
	},
	"/assets/clients/client-36.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4fe8-lvZT3U0aDxxn22vZx9PMmDldwOQ\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 20456,
		"path": "../public/assets/clients/client-36.jpeg"
	},
	"/assets/clients/client-37.png": {
		"type": "image/png",
		"etag": "\"18f0-2aMIrJAnzxE1ywyb168vlzr+agk\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 6384,
		"path": "../public/assets/clients/client-37.png"
	},
	"/assets/clients/client-38.png": {
		"type": "image/png",
		"etag": "\"2299-2XMw4uwwxsPhvi27OHh/xICeHn8\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 8857,
		"path": "../public/assets/clients/client-38.png"
	},
	"/assets/clients/client-40.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8db4-NTaU7QS5cOLyuoXJWQ61/IoeHFQ\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 36276,
		"path": "../public/assets/clients/client-40.jpeg"
	},
	"/assets/clients/client-41.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3f09-MA5XvN+Ou/qPb6ld2mSumwAv3ww\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 16137,
		"path": "../public/assets/clients/client-41.jpeg"
	},
	"/assets/clients/client-42.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4389-ZdzRukObUyyyYjy/AYX2XX7LhEQ\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 17289,
		"path": "../public/assets/clients/client-42.jpeg"
	},
	"/assets/clients/client-43.png": {
		"type": "image/png",
		"etag": "\"2686-SoGzbcIFBpPz8Dc1rmavunf8jlk\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 9862,
		"path": "../public/assets/clients/client-43.png"
	},
	"/assets/clients/client-44.png": {
		"type": "image/png",
		"etag": "\"2d27-rgh8hyyYx5b/41QvreIed/N8ZZM\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 11559,
		"path": "../public/assets/clients/client-44.png"
	},
	"/assets/brand/sirocco-mark.png": {
		"type": "image/png",
		"etag": "\"2c89-g99T1mm6es19VTvK+laKLRKURCc\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 11401,
		"path": "../public/assets/brand/sirocco-mark.png"
	},
	"/assets/feedback/ceylon-biscuits-limited.png": {
		"type": "image/png",
		"etag": "\"2ec0-dXr9NXNs1kAhcbokoWqfjPd+UHc\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 11968,
		"path": "../public/assets/feedback/ceylon-biscuits-limited.png"
	},
	"/assets/clients/client-46.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8f9a-kzpbnFXfzj3TT2i3p/ZtKN9+qSU\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 36762,
		"path": "../public/assets/clients/client-46.jpeg"
	},
	"/assets/clients/client-47.png": {
		"type": "image/png",
		"etag": "\"3374-v4RdtyUkIeXYT+nZC7fWuHhGK7A\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 13172,
		"path": "../public/assets/clients/client-47.png"
	},
	"/assets/clients/client-49.png": {
		"type": "image/png",
		"etag": "\"5c51-H5DDotgB1YYOZCUfmTWT1mP5J0c\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 23633,
		"path": "../public/assets/clients/client-49.png"
	},
	"/assets/clients/client-51.png": {
		"type": "image/png",
		"etag": "\"2779-LKuvsfqxHN0SWlj/+Bj7fAa1Thc\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 10105,
		"path": "../public/assets/clients/client-51.png"
	},
	"/assets/clients/client-52.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4a19-7yhwYuxxdXrkYAIMMOmB/7xstA0\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 18969,
		"path": "../public/assets/clients/client-52.jpeg"
	},
	"/assets/clients/client-53.png": {
		"type": "image/png",
		"etag": "\"2288-xsIVDOCVjA6MEEiEZiJiZCwYhS0\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 8840,
		"path": "../public/assets/clients/client-53.png"
	},
	"/assets/clients/client-55.png": {
		"type": "image/png",
		"etag": "\"3420-Q7CJdSVM9bqDE+EcCqQC91R/pec\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 13344,
		"path": "../public/assets/clients/client-55.png"
	},
	"/assets/clients/client-57.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4b75-PP/fnoTN4e2VJHoxk/UrEjLgn3o\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 19317,
		"path": "../public/assets/clients/client-57.jpeg"
	},
	"/assets/clients/client-58.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5772-IxWJGIvHImS6Wj4AWdUj41zBz+Y\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 22386,
		"path": "../public/assets/clients/client-58.jpeg"
	},
	"/assets/clients/client-60.jpeg": {
		"type": "image/jpeg",
		"etag": "\"538d-KmjgP3w0xP9++gjGGMgGKhOG634\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 21389,
		"path": "../public/assets/clients/client-60.jpeg"
	},
	"/assets/clients/client-61.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4cb8-leMMVQD4iDLLFh8Fo5dIqrCYK0A\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 19640,
		"path": "../public/assets/clients/client-61.jpeg"
	},
	"/assets/clients/client-63.jpeg": {
		"type": "image/jpeg",
		"etag": "\"400d-4EqDPC01Rt8qRV85PoYqYuA8Xgw\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 16397,
		"path": "../public/assets/clients/client-63.jpeg"
	},
	"/assets/clients/client-65.jpeg": {
		"type": "image/jpeg",
		"etag": "\"389a-vw7gHG42/rluO8zQVrX3BAlNmMU\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 14490,
		"path": "../public/assets/clients/client-65.jpeg"
	},
	"/assets/clients/client-66.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a8e6-7I3lK9BDYINzsIs6ihOIf2Wgye0\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 43238,
		"path": "../public/assets/clients/client-66.jpeg"
	},
	"/assets/clients/client-67.jpeg": {
		"type": "image/jpeg",
		"etag": "\"480a-Z2dm+8gBtyYH3jeV2ohHNHJuU3Y\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 18442,
		"path": "../public/assets/clients/client-67.jpeg"
	},
	"/assets/clients/client-68.jpeg": {
		"type": "image/jpeg",
		"etag": "\"560b-3nrlGTmzx0JvndOW2t0E7ro/ZqI\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 22027,
		"path": "../public/assets/clients/client-68.jpeg"
	},
	"/assets/clients/client-69.png": {
		"type": "image/png",
		"etag": "\"1909-w1G/lHls1xMoyats4LLaQ6kowAE\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 6409,
		"path": "../public/assets/clients/client-69.png"
	},
	"/assets/clients/client-70.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7112-nGFRnEEwZa1+madxrkYiJ+JyWJs\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 28946,
		"path": "../public/assets/clients/client-70.jpeg"
	},
	"/assets/clients/client-71.jpeg": {
		"type": "image/jpeg",
		"etag": "\"450f-BoKJr9l2De/iMVUTOxxPMoGdWiA\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 17679,
		"path": "../public/assets/clients/client-71.jpeg"
	},
	"/assets/clients/client-72.png": {
		"type": "image/png",
		"etag": "\"737c-qYMoXBcLheUXAJrM9EpdrDs3gok\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 29564,
		"path": "../public/assets/clients/client-72.png"
	},
	"/assets/clients/client-73.png": {
		"type": "image/png",
		"etag": "\"2cd2-3LwqYNJwZJlYvLB9dSu8kLwbqZE\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 11474,
		"path": "../public/assets/clients/client-73.png"
	},
	"/assets/clients/client-74.png": {
		"type": "image/png",
		"etag": "\"1de2-lKMAO6HVg5OPa6po5aDRA0rhfFQ\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 7650,
		"path": "../public/assets/clients/client-74.png"
	},
	"/assets/clients/client-75.jpeg": {
		"type": "image/jpeg",
		"etag": "\"7201-roiFuhgqluDyNtfCuSpFUlbE2Ac\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 29185,
		"path": "../public/assets/clients/client-75.jpeg"
	},
	"/assets/clients/client-76.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2035-HwRh6FEUu3uJtnAXLOj8nwCAgLA\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 8245,
		"path": "../public/assets/clients/client-76.jpeg"
	},
	"/assets/clients/client-78.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6c4b-eXRzXcPyMGfCC0UOEWeah6HRrog\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 27723,
		"path": "../public/assets/clients/client-78.jpeg"
	},
	"/assets/clients/client-80.jpeg": {
		"type": "image/jpeg",
		"etag": "\"52dd-NvlrkCjP+E+Vi23Pl7sj9bJOtlg\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 21213,
		"path": "../public/assets/clients/client-80.jpeg"
	},
	"/assets/clients/client-81.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6b49-NslRr8ybCD42/xhgKDN1AzbPFeg\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 27465,
		"path": "../public/assets/clients/client-81.jpeg"
	},
	"/assets/clients/client-82.jpeg": {
		"type": "image/jpeg",
		"etag": "\"94fa-RK+tEKMaW6Cve+nLV7h0OtjguqM\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 38138,
		"path": "../public/assets/clients/client-82.jpeg"
	},
	"/assets/clients/client-84.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ff4-Fv1tEsYzww40YXUEf9zHRQhT9p8\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 8180,
		"path": "../public/assets/clients/client-84.jpeg"
	},
	"/assets/clients/client-85.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4cb6-nQV/0qhn1Zl0B6ZvThuTAtqE9zk\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 19638,
		"path": "../public/assets/clients/client-85.jpeg"
	},
	"/assets/clients/client-86.jpeg": {
		"type": "image/jpeg",
		"etag": "\"c207-AY9gjt55toAsEzwKn8ENMjFhHgA\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 49671,
		"path": "../public/assets/clients/client-86.jpeg"
	},
	"/assets/clients/client-87.png": {
		"type": "image/png",
		"etag": "\"1ade-81wrnLiA8RxfAIrO9E6wgXnaujc\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 6878,
		"path": "../public/assets/clients/client-87.png"
	},
	"/assets/clients/client-89.png": {
		"type": "image/png",
		"etag": "\"156-QBqDT9SNNDXFagP33cbySpvzsxc\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 342,
		"path": "../public/assets/clients/client-89.png"
	},
	"/assets/clients/client-90.png": {
		"type": "image/png",
		"etag": "\"4c17-VpFl7M/8IL+3KZBvNMZOvm/3UIk\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 19479,
		"path": "../public/assets/clients/client-90.png"
	},
	"/assets/clients/client-91.jpeg": {
		"type": "image/jpeg",
		"etag": "\"498c-DMCK00tdE81WPZf7FFMfXwkRM6w\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 18828,
		"path": "../public/assets/clients/client-91.jpeg"
	},
	"/assets/clients/client-92.jpeg": {
		"type": "image/jpeg",
		"etag": "\"32b1-KJ5O6Y3sBEB/G6pPARBvUGVnM8Q\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 12977,
		"path": "../public/assets/clients/client-92.jpeg"
	},
	"/assets/clients/client-93.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ae18-0WXZt28qYvwf8N8ojQc11FH6PLY\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 44568,
		"path": "../public/assets/clients/client-93.jpeg"
	},
	"/assets/clients/client-94.jpeg": {
		"type": "image/jpeg",
		"etag": "\"4adf-w58GJPuX/royHSMYcaRMELO5z98\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 19167,
		"path": "../public/assets/clients/client-94.jpeg"
	},
	"/assets/clients/client-95.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5689-oSqLiNNHyvg7UsvHd0M10xTboWE\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 22153,
		"path": "../public/assets/clients/client-95.jpeg"
	},
	"/assets/clients/client-97.jpeg": {
		"type": "image/jpeg",
		"etag": "\"6d7e-GqDKSNmoDb9SIhw8iE27FB0U+iE\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 28030,
		"path": "../public/assets/clients/client-97.jpeg"
	},
	"/assets/clients/client-98.jpeg": {
		"type": "image/jpeg",
		"etag": "\"c973-Cn/CBx47riE8ZMynhiXuAghcZM0\"",
		"mtime": "2026-10-02T01:49:04.000Z",
		"size": 51571,
		"path": "../public/assets/clients/client-98.jpeg"
	},
	"/assets/clients/client-99.png": {
		"type": "image/png",
		"etag": "\"21f1-uqitdycYVFD6dr9t/eY+UnZXxxg\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 8689,
		"path": "../public/assets/clients/client-99.png"
	},
	"/assets/clients/riverina.png": {
		"type": "image/png",
		"etag": "\"1431-jHwe1EhT5wwoVX2mcq3q2K3PMq0\"",
		"mtime": "2026-10-02T01:49:06.000Z",
		"size": 5169,
		"path": "../public/assets/clients/riverina.png"
	},
	"/assets/hvac/cabinet-fan.jpg": {
		"type": "image/jpeg",
		"etag": "\"10538-jQZdCwiK3lwtkxCeiulQ7KVntug\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 66872,
		"path": "../public/assets/hvac/cabinet-fan.jpg"
	},
	"/assets/feedback/london-tea-exchange-kefro.png": {
		"type": "image/png",
		"etag": "\"55dd-6prgt6AfDEuojUKCBeRmzpcGCQk\"",
		"mtime": "2026-10-01T16:45:26.000Z",
		"size": 21981,
		"path": "../public/assets/feedback/london-tea-exchange-kefro.png"
	},
	"/assets/hvac/centrifugal-fans.jpg": {
		"type": "image/jpeg",
		"etag": "\"61166-1cz24luTr9rRgdc9e3x064NDXnM\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 397670,
		"path": "../public/assets/hvac/centrifugal-fans.jpg"
	},
	"/assets/hvac/duct-component.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d68-oNrwQHcs4XOwSVZpMBbZJefwkDg\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 36200,
		"path": "../public/assets/hvac/duct-component.jpg"
	},
	"/assets/hvac/ducted-air-distribution-2.jpg": {
		"type": "image/jpeg",
		"etag": "\"12f4f-vf0Z53J6C5rhVHfrdyuNeF758mM\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 77647,
		"path": "../public/assets/hvac/ducted-air-distribution-2.jpg"
	},
	"/assets/hvac/ducted-air-distribution.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e8c7-rdnlVeop/ro95EzEeLgQOBUZLLk\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 387271,
		"path": "../public/assets/hvac/ducted-air-distribution.jpg"
	},
	"/assets/hvac/dust-collector.jpg": {
		"type": "image/jpeg",
		"etag": "\"17507-y45IRfN6lYWhKh0EVsM73y0KQ4Q\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 95495,
		"path": "../public/assets/hvac/dust-collector.jpg"
	},
	"/assets/hvac/evaporative-cooling.jpg": {
		"type": "image/jpeg",
		"etag": "\"17d72-JC/CeAz5hSBJejRQMdaJUG+mtRE\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 97650,
		"path": "../public/assets/hvac/evaporative-cooling.jpg"
	},
	"/assets/hvac/extraction-installation.jpg": {
		"type": "image/jpeg",
		"etag": "\"12b59-dD9u2PCn8/OvQlULfvwp2l1L9Hg\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 76633,
		"path": "../public/assets/hvac/extraction-installation.jpg"
	},
	"/assets/hvac/industrial-air-conditioner.jpg": {
		"type": "image/jpeg",
		"etag": "\"1191-ugK4AR9TDbaY68VHVN4JjcWN/YU\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 4497,
		"path": "../public/assets/hvac/industrial-air-conditioner.jpg"
	},
	"/assets/hvac/industrial-piping.jpg": {
		"type": "image/jpeg",
		"etag": "\"24bb3-XV0iOdPMqMtP/RHV3uzpoEriMFQ\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 150451,
		"path": "../public/assets/hvac/industrial-piping.jpg"
	},
	"/assets/hvac/plate-heat-exchanger-plant.jpg": {
		"type": "image/jpeg",
		"etag": "\"30df3-ibvyetnA303JnAm7rplQhsP2cAI\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 200179,
		"path": "../public/assets/hvac/plate-heat-exchanger-plant.jpg"
	},
	"/assets/hvac/red-ducting.jpg": {
		"type": "image/jpeg",
		"etag": "\"fbf8-mdzX71ElOEwDME5t5d+ORev/q4A\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 64504,
		"path": "../public/assets/hvac/red-ducting.jpg"
	},
	"/assets/brand/ashford-holdings-logo.png": {
		"type": "image/png",
		"etag": "\"15779b-J71Hok4Rj9frupCZfxX1BfY3gq8\"",
		"mtime": "2026-10-01T17:19:00.000Z",
		"size": 1406875,
		"path": "../public/assets/brand/ashford-holdings-logo.png"
	},
	"/assets/hvac/stainless-centrifugal-fans.jpg": {
		"type": "image/jpeg",
		"etag": "\"59cc0-fCofk4iT1w3/NE2eBDNS6VJ1RjM\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 367808,
		"path": "../public/assets/hvac/stainless-centrifugal-fans.jpg"
	},
	"/assets/hvac/stainless-fan-pipework.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d87a-uJUpp1IDyqBdz/cVTWyO9d23G7I\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 186490,
		"path": "../public/assets/hvac/stainless-fan-pipework.jpg"
	},
	"/assets/hvac/wet-scrubber-unit.jpg": {
		"type": "image/jpeg",
		"etag": "\"a325-oTWikbJd5AHGhgcB0mm+aDZcCyo\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 41765,
		"path": "../public/assets/hvac/wet-scrubber-unit.jpg"
	},
	"/assets/industries/agriculture-plantation.jpg": {
		"type": "image/jpeg",
		"etag": "\"570db-Zs3/Z86suGHQga+tCApJHCzf9Mw\"",
		"mtime": "2026-10-02T06:03:09.995Z",
		"size": 356571,
		"path": "../public/assets/industries/agriculture-plantation.jpg"
	},
	"/assets/industries/apparel-textiles.jpg": {
		"type": "image/jpeg",
		"etag": "\"3dd75-wEZ9pYVwfjMSSJqjjTsqokL3zjA\"",
		"mtime": "2026-10-02T06:03:34.865Z",
		"size": 253301,
		"path": "../public/assets/industries/apparel-textiles.jpg"
	},
	"/assets/industries/banking-financial.jpg": {
		"type": "image/jpeg",
		"etag": "\"706a5-2aYQu+I2Ypg859kJA9i8+8xyeCE\"",
		"mtime": "2026-10-02T06:03:11.032Z",
		"size": 460453,
		"path": "../public/assets/industries/banking-financial.jpg"
	},
	"/assets/industries/conglomerates.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e7db-NpB4OCPSmcfVa+Qf42tMH7a2eGk\"",
		"mtime": "2026-10-02T06:03:11.691Z",
		"size": 190427,
		"path": "../public/assets/industries/conglomerates.jpg"
	},
	"/assets/industries/consumer-retail.jpg": {
		"type": "image/jpeg",
		"etag": "\"3534a-d0hpO3kvW80WNv3Nvi+DmCmJbYI\"",
		"mtime": "2026-10-02T06:03:12.172Z",
		"size": 217930,
		"path": "../public/assets/industries/consumer-retail.jpg"
	},
	"/assets/industries/fmcg.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d862-21wln77aOzRNWoxhw834QBQXkvw\"",
		"mtime": "2026-10-02T06:03:08.120Z",
		"size": 120930,
		"path": "../public/assets/industries/fmcg.jpg"
	},
	"/assets/industries/food-beverage-hospitality.jpg": {
		"type": "image/jpeg",
		"etag": "\"427ed-T+W4vPzzDEqqbOk5UcV5vD8H37Q\"",
		"mtime": "2026-10-02T06:03:35.401Z",
		"size": 272365,
		"path": "../public/assets/industries/food-beverage-hospitality.jpg"
	},
	"/assets/industries/government-state.jpg": {
		"type": "image/jpeg",
		"etag": "\"3119a-WutvfcToDENDUZXQZWSRdOEW5vc\"",
		"mtime": "2026-10-02T06:03:08.925Z",
		"size": 201114,
		"path": "../public/assets/industries/government-state.jpg"
	},
	"/assets/industries/healthcare.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f63e-EZzIHnPNVo1frUsmjoh6o9gtzK4\"",
		"mtime": "2026-10-02T06:03:12.823Z",
		"size": 128574,
		"path": "../public/assets/industries/healthcare.jpg"
	},
	"/assets/industries/transport-engineering.jpg": {
		"type": "image/jpeg",
		"etag": "\"7435b-BaYqJE/jmX12k4dVyPyxHpbBZuw\"",
		"mtime": "2026-10-02T06:02:39.575Z",
		"size": 475995,
		"path": "../public/assets/industries/transport-engineering.jpg"
	},
	"/assets/hvac/hero/cabinet-fan-1280.webp": {
		"type": "image/webp",
		"etag": "\"9700-VQRsCR3dhVCRLPax2NIXFpPV3kE\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 38656,
		"path": "../public/assets/hvac/hero/cabinet-fan-1280.webp"
	},
	"/assets/hvac/hero/cabinet-fan-640.webp": {
		"type": "image/webp",
		"etag": "\"5568-+IHleHHKY7rrkFrnZOxRzJtjRwo\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 21864,
		"path": "../public/assets/hvac/hero/cabinet-fan-640.webp"
	},
	"/assets/hvac/hero/centrifugal-fans-1280.webp": {
		"type": "image/webp",
		"etag": "\"2a1ca-Ob+HQG6a38oR6YqTwyBTUGqKObg\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 172490,
		"path": "../public/assets/hvac/hero/centrifugal-fans-1280.webp"
	},
	"/assets/hvac/hero/centrifugal-fans-640.webp": {
		"type": "image/webp",
		"etag": "\"ea20-s/GFpjE43UublqZuGO5mck8DYuk\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 59936,
		"path": "../public/assets/hvac/hero/centrifugal-fans-640.webp"
	},
	"/assets/hvac/hero/ducted-air-distribution-1280.webp": {
		"type": "image/webp",
		"etag": "\"231c0-wFj54JPU+UKaWUHygHXvypkW0rY\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 143808,
		"path": "../public/assets/hvac/hero/ducted-air-distribution-1280.webp"
	},
	"/assets/hvac/hero/ducted-air-distribution-640.webp": {
		"type": "image/webp",
		"etag": "\"9828-/UZrW0gW8J9NTt01YAy7aKdicbI\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 38952,
		"path": "../public/assets/hvac/hero/ducted-air-distribution-640.webp"
	},
	"/assets/hvac/hero/dust-collector-1280.webp": {
		"type": "image/webp",
		"etag": "\"9a50-vYuq20Z8qFsz9QFNYf3UYeAUpJ4\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 39504,
		"path": "../public/assets/hvac/hero/dust-collector-1280.webp"
	},
	"/assets/hvac/hero/dust-collector-640.webp": {
		"type": "image/webp",
		"etag": "\"9a50-vYuq20Z8qFsz9QFNYf3UYeAUpJ4\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 39504,
		"path": "../public/assets/hvac/hero/dust-collector-640.webp"
	},
	"/assets/hvac/hero/extraction-installation-1280.webp": {
		"type": "image/webp",
		"etag": "\"b722-eIPKmuUhB+qtFUgLfFQuLim5hsU\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 46882,
		"path": "../public/assets/hvac/hero/extraction-installation-1280.webp"
	},
	"/assets/hvac/hero/extraction-installation-640.webp": {
		"type": "image/webp",
		"etag": "\"95ee-nJVI0d/4aGS/nXtZ7EYMKlXx5aI\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 38382,
		"path": "../public/assets/hvac/hero/extraction-installation-640.webp"
	},
	"/assets/hvac/hero/industrial-piping-1280.webp": {
		"type": "image/webp",
		"etag": "\"f4c4-4+JmbXhpBJ32GuDMtplnmQV8XuY\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 62660,
		"path": "../public/assets/hvac/hero/industrial-piping-1280.webp"
	},
	"/assets/hvac/hero/industrial-piping-640.webp": {
		"type": "image/webp",
		"etag": "\"9954-/nNJsKOO2p5yq3a3ZvMu6/ppCJE\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 39252,
		"path": "../public/assets/hvac/hero/industrial-piping-640.webp"
	},
	"/assets/hvac/hero/plate-heat-exchanger-plant-1280.webp": {
		"type": "image/webp",
		"etag": "\"154dc-DHfqgUwKe6eNe0iUba2jp2NhJVw\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 87260,
		"path": "../public/assets/hvac/hero/plate-heat-exchanger-plant-1280.webp"
	},
	"/assets/hvac/hero/plate-heat-exchanger-plant-640.webp": {
		"type": "image/webp",
		"etag": "\"b050-drssLd8bodG3DBt1T5YsPr8JsMs\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 45136,
		"path": "../public/assets/hvac/hero/plate-heat-exchanger-plant-640.webp"
	},
	"/assets/hvac/hero/red-ducting-1280.webp": {
		"type": "image/webp",
		"etag": "\"7314-NOumlGjlGYaanCGh3GXkshSw7iM\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 29460,
		"path": "../public/assets/hvac/hero/red-ducting-1280.webp"
	},
	"/assets/hvac/hero/red-ducting-640.webp": {
		"type": "image/webp",
		"etag": "\"6502-7rKkLY6dFYebracLZ2Iz22p9p+s\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 25858,
		"path": "../public/assets/hvac/hero/red-ducting-640.webp"
	},
	"/assets/hvac/hero/stainless-centrifugal-fans-1280.webp": {
		"type": "image/webp",
		"etag": "\"262ee-QQpC++1mJQyzESuRO40tCzONnps\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 156398,
		"path": "../public/assets/hvac/hero/stainless-centrifugal-fans-1280.webp"
	},
	"/assets/hvac/hero/stainless-centrifugal-fans-640.webp": {
		"type": "image/webp",
		"etag": "\"d364-2vtHdgP0cPErSSEG54StpwUjueE\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 54116,
		"path": "../public/assets/hvac/hero/stainless-centrifugal-fans-640.webp"
	},
	"/assets/hvac/hero/stainless-fan-pipework-1280.webp": {
		"type": "image/webp",
		"etag": "\"1ecea-KPAzk46VVIbNLTSJpqawzJoF8bc\"",
		"mtime": "2026-10-01T16:45:30.000Z",
		"size": 126186,
		"path": "../public/assets/hvac/hero/stainless-fan-pipework-1280.webp"
	},
	"/assets/hvac/hero/stainless-fan-pipework-640.webp": {
		"type": "image/webp",
		"etag": "\"dbc0-kuOFTy07Zd4rz4z6ldiRCcigUe8\"",
		"mtime": "2026-10-01T16:45:28.000Z",
		"size": 56256,
		"path": "../public/assets/hvac/hero/stainless-fan-pipework-640.webp"
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
var _lazy_fttKTm = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_fttKTm
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

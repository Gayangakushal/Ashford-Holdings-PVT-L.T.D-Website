import { f as site, i as SITE_URL } from "./site-Ck29ZWyQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seo-BYo6w9D6.js
var DEFAULT_IMAGE = "/assets/hvac/ducted-air-distribution.jpg";
/** Builds per-route title, description, Open Graph, Twitter and canonical tags. */
function seo({ title, description, path, image = DEFAULT_IMAGE }) {
	const url = `${SITE_URL}${path === "/" ? "" : path}`;
	const img = image.startsWith("http") ? image : `${SITE_URL}${image}`;
	const fullTitle = path === "/" || title.includes(site.name) ? title : `${title} | ${site.shortName}`;
	return {
		meta: [
			{ title: fullTitle },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: fullTitle
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:image",
				content: img
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: site.name
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: fullTitle
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: img
			}
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
//#endregion
export { seo as t };

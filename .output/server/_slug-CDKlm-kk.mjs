import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as seo } from "./_ssr/seo-BYo6w9D6.mjs";
import { n as industryBySlug } from "./_ssr/industries-DtSQflgv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CDKlm-kk.js
var $$splitComponentImporter = () => import("./_slug-DTICKl61.mjs");
var Route = createFileRoute("/industries/$slug")({
	loader: ({ params }) => {
		if (!industryBySlug(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const i = industryBySlug(params.slug);
		if (!i) return { meta: [{ title: "Industry not found | Ashford Holdings PVT L.T.D" }] };
		return seo({
			title: `${i.name} — Industry`,
			description: i.summary,
			path: `/industries/${i.slug}`,
			image: i.image
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as projectBySlug } from "./_ssr/projects-ARMA9LCP.mjs";
import { t as seo } from "./_ssr/seo-BYo6w9D6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CLKLn6CF.js
var $$splitComponentImporter = () => import("./_slug-Dk9s05Lu.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		if (!projectBySlug(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const p = projectBySlug(params.slug);
		if (!p) return { meta: [{ title: "Project not found | Ashford Holdings PVT L.T.D" }] };
		return seo({
			title: `${p.title} — ${p.client}`,
			description: p.summary,
			path: `/projects/${p.slug}`,
			image: p.image?.src
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

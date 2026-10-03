import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as disciplineBySlug } from "./_ssr/disciplines-dBQSdk_D.mjs";
import { n as solutionImages } from "./_ssr/media-Clrt4nID.mjs";
import { t as solutionBySlug } from "./_ssr/solutions-JGMgkD27.mjs";
import { t as seo } from "./_ssr/seo-BYo6w9D6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CSp9yLI1.js
var $$splitComponentImporter = () => import("./_slug-BqcCsJZM.mjs");
var Route = createFileRoute("/solutions/$slug")({
	loader: ({ params }) => {
		if (!disciplineBySlug(params.slug) && !solutionBySlug(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const d = disciplineBySlug(params.slug);
		if (d) return seo({
			title: d.title,
			description: d.description,
			path: `/solutions/${d.slug}`,
			image: d.image || void 0
		});
		const s = solutionBySlug(params.slug);
		if (s) return seo({
			title: s.title,
			description: s.summary,
			path: `/solutions/${s.slug}`,
			image: solutionImages[s.slug]
		});
		return { meta: [{ title: "Solution not found | Ashford Holdings PVT L.T.D" }] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

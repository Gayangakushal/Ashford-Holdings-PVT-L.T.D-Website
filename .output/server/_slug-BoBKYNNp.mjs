import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as productImages } from "./_ssr/media-Clrt4nID.mjs";
import { t as productBySlug } from "./_ssr/products-BzmRs_1f.mjs";
import { t as seo } from "./_ssr/seo-BYo6w9D6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BoBKYNNp.js
var $$splitComponentImporter = () => import("./_slug-DZhKGoPr.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		if (!productBySlug(params.slug)) throw notFound();
	},
	head: ({ params }) => {
		const p = productBySlug(params.slug);
		if (!p) return { meta: [{ title: "Equipment not found | Ashford Holdings PVT L.T.D" }] };
		return seo({
			title: p.name,
			description: p.short,
			path: `/products/${p.slug}`,
			image: productImages[p.slug]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };

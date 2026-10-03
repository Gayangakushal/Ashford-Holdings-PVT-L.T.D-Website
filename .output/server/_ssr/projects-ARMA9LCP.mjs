//#region node_modules/.nitro/vite/services/ssr/assets/projects-ARMA9LCP.js
var feedback = [
	{
		client: "Ceylon Biscuits Limited (CBL)",
		quote: "For over 15 years, we have relied on their expertise to develop tailored ventilation systems across our factories. Their focus on energy efficiency and innovation continues to set new industry benchmarks.",
		logo: "/assets/clients/client-63.jpeg",
		discipline: "Ventilation",
		project: "cbl-factory-ventilation"
	},
	{
		client: "Variosystems Pvt Ltd",
		quote: "The fume extraction system installed at our Badalgama facility was completed to our exacting standards and well within schedule. They even developed an innovative energy-saving system, helping us significantly reduce our energy bill.",
		logo: "/assets/feedback/variosystems.png",
		discipline: "Fume extraction",
		location: "Badalgama, Sri Lanka",
		project: "variosystems-fume-extraction"
	},
	{
		client: "A&E Bangladesh",
		quote: "A complete ventilation and racking upgrade for our Bangladesh factory was delivered with exceptional coordination across three countries and flawless on-ground execution.",
		logo: "/assets/feedback/ae-bangladesh.png",
		discipline: "Ventilation & racking",
		location: "Bangladesh",
		project: "ae-bangladesh-factory-upgrade"
	},
	{
		client: "DOK Solutions Lanka Pvt Ltd",
		quote: "Our 40-foot high narrow aisle racking system was installed ahead of time with exceptional quality and attention to detail. Consistently outstanding results.",
		logo: "/assets/feedback/dok-solutions-lanka.png",
		discipline: "Narrow aisle racking",
		project: "dok-narrow-aisle-racking"
	},
	{
		client: "George Steuart Teas Pvt Ltd",
		quote: "We were impressed with how our complex racking installation at a new multi-level factory was handled. The staff were courteous, competent, and made the process seamless.",
		logo: "/assets/feedback/george-steuart.png",
		discipline: "Racking",
		project: "george-steuart-multi-level-racking"
	},
	{
		client: "MAS Intimates Bangladesh",
		quote: "A customized racking system introduced new efficiencies and cost savings, while meeting high operational standards across the board.",
		logo: "/assets/clients/client-36.jpeg",
		discipline: "Racking",
		location: "Bangladesh",
		project: "mas-intimates-racking"
	},
	{
		client: "BPL Teas Pvt Ltd",
		quote: "We've relied on them for storage solutions across multiple warehouses. Their design capabilities and post-installation support have been excellent.",
		logo: "/assets/feedback/bpl-teas-pvt-ltd.png",
		discipline: "Storage systems",
		project: "bpl-teas-warehouse-storage"
	},
	{
		client: "London Tea Exchange Kefro Pvt Ltd",
		quote: "We commend the design, quality, and professionalism displayed throughout the project. The solution was completed well ahead of the deadline with zero compromise on finish.",
		logo: "/assets/feedback/london-tea-exchange-kefro.png",
		discipline: "Engineering project"
	}
];
/** User-requested draft copy, explicitly labelled until clients approve it. */
var sampleFeedback = [
	{
		client: "Unilever",
		quote: "Clear communication, practical recommendations, and careful attention to the installation made the process easy to follow. We appreciated the team's responsive support.",
		logo: "/assets/clients/client-46.jpeg",
		discipline: "Engineering services",
		sample: true
	},
	{
		client: "Toyota",
		quote: "The team took time to understand our requirements and explain the available options. Their organised approach and attention to detail stood out throughout the work.",
		logo: "/assets/clients/client-40.jpeg",
		discipline: "Engineering services",
		sample: true
	},
	{
		client: "Jetwing",
		quote: "We appreciated the thoughtful planning and focus on day-to-day comfort. The team was approachable, kept us informed, and answered our questions clearly.",
		logo: "/assets/clients/client-57.jpeg",
		discipline: "Engineering services",
		sample: true
	},
	{
		client: "Abans",
		quote: "A professional team with a practical approach to our requirements. From the first discussion to the handover, communication was clear and the support was helpful.",
		logo: "/assets/clients/client-67.jpeg",
		discipline: "Engineering services",
		sample: true
	}
];
var carouselFeedback = [...feedback, ...sampleFeedback];
var projects = [
	{
		slug: "variosystems-fume-extraction",
		client: "Variosystems Pvt Ltd",
		title: "Fume extraction, Badalgama facility",
		industry: "Manufacturing & Industrial",
		industrySlug: "manufacturing-industrial",
		discipline: "Dust & fume extraction",
		disciplineSlug: "dust-extraction",
		location: "Badalgama, Sri Lanka",
		summary: "A fume extraction system for the client's Badalgama facility, delivered together with an energy-saving system developed for the installation.",
		scope: ["Fume extraction system", "Energy-saving system developed for the facility"],
		outcome: ["Completed to the client's standards and within schedule", "Client reports a significant reduction in its energy bill"],
		image: {
			src: "/assets/hvac/stainless-fan-pipework.jpg",
			alt: "Representative image: stainless steel extraction fan and pipework"
		},
		visual: "photo"
	},
	{
		slug: "ae-bangladesh-factory-upgrade",
		client: "A&E Bangladesh",
		title: "Factory ventilation & racking upgrade",
		industry: "Apparel & Textiles",
		industrySlug: "apparel-textiles",
		discipline: "Ventilation & racking",
		disciplineSlug: "air-conditioning-ventilation",
		location: "Bangladesh",
		summary: "A complete ventilation and racking upgrade for the client's factory in Bangladesh, coordinated across three countries.",
		scope: [
			"Factory ventilation upgrade",
			"Racking upgrade",
			"Coordination across three countries"
		],
		outcome: ["Client describes coordination as exceptional and on-ground execution as flawless"],
		image: {
			src: "/assets/hvac/ducted-air-distribution.jpg",
			alt: "Representative image: factory supply ductwork and air outlets"
		},
		visual: "photo"
	},
	{
		slug: "dok-narrow-aisle-racking",
		client: "DOK Solutions Lanka Pvt Ltd",
		title: "40-foot narrow aisle racking",
		industry: "Transport & Engineering",
		industrySlug: "transport-engineering",
		discipline: "Racking & material handling",
		disciplineSlug: "racking-material-handling",
		summary: "A 40-foot high narrow aisle racking system.",
		scope: ["40 ft high narrow aisle racking system"],
		outcome: ["Installed ahead of time", "Client cites exceptional quality and attention to detail"],
		visual: "racking"
	},
	{
		slug: "cbl-factory-ventilation",
		client: "Ceylon Biscuits Limited",
		title: "Tailored ventilation across factories",
		industry: "FMCG",
		industrySlug: "fmcg",
		discipline: "Ventilation",
		disciplineSlug: "air-conditioning-ventilation",
		summary: "A long-running relationship — over 15 years by the client's account — developing tailored ventilation systems across CBL's factories.",
		scope: ["Tailored ventilation systems", "Multiple factories"],
		outcome: ["Relationship maintained for over 15 years", "Client highlights energy efficiency and innovation"],
		image: {
			src: "/assets/hvac/stainless-centrifugal-fans.jpg",
			alt: "Representative image: industrial ventilation fan range from the company profile"
		},
		visual: "photo"
	},
	{
		slug: "george-steuart-multi-level-racking",
		client: "George Steuart Teas Pvt Ltd",
		title: "Racking for a new multi-level factory",
		industry: "Agriculture & Plantation",
		industrySlug: "agriculture-plantation",
		discipline: "Racking & material handling",
		disciplineSlug: "racking-material-handling",
		summary: "A complex racking installation at the client's new multi-level factory.",
		scope: ["Complex racking installation", "New multi-level factory"],
		outcome: ["Client describes the process as seamless and the staff as courteous and competent"],
		visual: "racking"
	},
	{
		slug: "mas-intimates-racking",
		client: "MAS Intimates Bangladesh",
		title: "Customised racking system",
		industry: "Apparel & Textiles",
		industrySlug: "apparel-textiles",
		discipline: "Racking & material handling",
		disciplineSlug: "racking-material-handling",
		location: "Bangladesh",
		summary: "A customised racking system for MAS Intimates in Bangladesh.",
		scope: ["Customised racking system"],
		outcome: ["Client reports new efficiencies and cost savings", "Met high operational standards"],
		visual: "racking"
	},
	{
		slug: "bpl-teas-warehouse-storage",
		client: "BPL Teas Pvt Ltd",
		title: "Storage across multiple warehouses",
		industry: "Agriculture & Plantation",
		industrySlug: "agriculture-plantation",
		discipline: "Racking & material handling",
		disciplineSlug: "racking-material-handling",
		summary: "Storage solutions across several of the client's warehouses, including design and post-installation support.",
		scope: [
			"Storage solutions",
			"Multiple warehouses",
			"Design and post-installation support"
		],
		outcome: ["Client rates design capability and post-installation support as excellent"],
		visual: "racking"
	}
].map((p, i) => ({
	...p,
	index: String(i + 1).padStart(2, "0")
}));
var projectBySlug = (slug) => projects.find((p) => p.slug === slug);
var feedbackForProject = (slug) => feedback.find((f) => f.project === slug);
//#endregion
export { projects as a, projectBySlug as i, feedback as n, feedbackForProject as r, carouselFeedback as t };

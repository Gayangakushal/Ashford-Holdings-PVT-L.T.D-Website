import { feedback } from "./feedback";

/**
 * Project record.
 *
 * Every entry is a client engagement confirmed by named client feedback that
 * Sirocco publishes on sairt.com. Scope, location and outcome are limited to what
 * that feedback states — nothing is extrapolated. No project-specific photography
 * was supplied, so ventilation/extraction entries use representative system imagery
 * (clearly labelled) and storage entries use an engineering elevation drawing.
 */
export type Project = {
  slug: string;
  index: string;
  client: string;
  title: string;
  industry: string;
  industrySlug: string;
  discipline: string;
  disciplineSlug: string;
  location?: string;
  summary: string;
  scope: string[];
  outcome: string[];
  image?: { src: string; alt: string };
  visual: "photo" | "racking" | "ventilation";
};

const raw: Omit<Project, "index">[] = [
  {
    slug: "variosystems-fume-extraction",
    client: "Variosystems Pvt Ltd",
    title: "Fume extraction, Badalgama facility",
    industry: "Manufacturing & Industrial",
    industrySlug: "manufacturing-industrial",
    discipline: "Dust & fume extraction",
    disciplineSlug: "dust-extraction",
    location: "Badalgama, Sri Lanka",
    summary:
      "A fume extraction system for the client's Badalgama facility, delivered together with an energy-saving system developed for the installation.",
    scope: ["Fume extraction system", "Energy-saving system developed for the facility"],
    outcome: [
      "Completed to the client's standards and within schedule",
      "Client reports a significant reduction in its energy bill",
    ],
    image: {
      src: "/assets/hvac/stainless-fan-pipework.jpg",
      alt: "Representative image: stainless steel extraction fan and pipework",
    },
    visual: "photo",
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
    summary:
      "A complete ventilation and racking upgrade for the client's factory in Bangladesh, coordinated across three countries.",
    scope: [
      "Factory ventilation upgrade",
      "Racking upgrade",
      "Coordination across three countries",
    ],
    outcome: ["Client describes coordination as exceptional and on-ground execution as flawless"],
    image: {
      src: "/assets/hvac/ducted-air-distribution.jpg",
      alt: "Representative image: factory supply ductwork and air outlets",
    },
    visual: "photo",
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
    outcome: [
      "Installed ahead of time",
      "Client cites exceptional quality and attention to detail",
    ],
    visual: "racking",
  },
  {
    slug: "cbl-factory-ventilation",
    client: "Ceylon Biscuits Limited",
    title: "Tailored ventilation across factories",
    industry: "FMCG",
    industrySlug: "fmcg",
    discipline: "Ventilation",
    disciplineSlug: "air-conditioning-ventilation",
    summary:
      "A long-running relationship — over 15 years by the client's account — developing tailored ventilation systems across CBL's factories.",
    scope: ["Tailored ventilation systems", "Multiple factories"],
    outcome: [
      "Relationship maintained for over 15 years",
      "Client highlights energy efficiency and innovation",
    ],
    image: {
      src: "/assets/hvac/stainless-centrifugal-fans.jpg",
      alt: "Representative image: industrial ventilation fan range from the company profile",
    },
    visual: "photo",
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
    visual: "racking",
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
    visual: "racking",
  },
  {
    slug: "bpl-teas-warehouse-storage",
    client: "BPL Teas Pvt Ltd",
    title: "Storage across multiple warehouses",
    industry: "Agriculture & Plantation",
    industrySlug: "agriculture-plantation",
    discipline: "Racking & material handling",
    disciplineSlug: "racking-material-handling",
    summary:
      "Storage solutions across several of the client's warehouses, including design and post-installation support.",
    scope: ["Storage solutions", "Multiple warehouses", "Design and post-installation support"],
    outcome: ["Client rates design capability and post-installation support as excellent"],
    visual: "racking",
  },
];

export const projects: Project[] = raw.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, "0"),
}));

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const feedbackForProject = (slug: string) => feedback.find((f) => f.project === slug);

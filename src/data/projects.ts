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
    slug: "cbl-factory-ventilation",
    client: "Ceylon Biscuits Limited",
    title: "Tailored ventilation across factories",
    industry: "FMCG",
    industrySlug: "fmcg",
    discipline: "Ventilation",
    disciplineSlug: "air-conditioning-ventilation",
    summary:
      "A long-running relationship, over 15 years by the client's account, developing tailored ventilation systems across CBL's factories.",
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
];

export const projects: Project[] = raw.map((p, i) => ({
  ...p,
  index: String(i + 1).padStart(2, "0"),
}));

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const feedbackForProject = (slug: string) => feedback.find((f) => f.project === slug);

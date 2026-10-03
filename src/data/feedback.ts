/**
 * Client feedback published by Sirocco Air Technologies on its own website (sairt.com).
 * Quotes are reproduced word for word. These are company-published testimonials,
 * not third-party (e.g. Google) reviews, and are labelled accordingly.
 */
export type Feedback = {
  client: string;
  quote: string;
  logo: string;
  /** Discipline confirmed by the wording of the quote itself. */
  discipline: string;
  /** Location only where the quote states it. */
  location?: string;
  project?: string;
  sample?: boolean;
};

export const feedback: Feedback[] = [
  {
    client: "Ceylon Biscuits Limited (CBL)",
    quote:
      "For over 15 years, we have relied on their expertise to develop tailored ventilation systems across our factories. Their focus on energy efficiency and innovation continues to set new industry benchmarks.",
    logo: "/assets/clients/client-63.jpeg",
    discipline: "Ventilation",
    project: "cbl-factory-ventilation",
  },
  {
    client: "Variosystems Pvt Ltd",
    quote:
      "The fume extraction system installed at our Badalgama facility was completed to our exacting standards and well within schedule. They even developed an innovative energy-saving system, helping us significantly reduce our energy bill.",
    logo: "/assets/feedback/variosystems.png",
    discipline: "Fume extraction",
    location: "Badalgama, Sri Lanka",
    project: "variosystems-fume-extraction",
  },
  {
    client: "A&E Bangladesh",
    quote:
      "A complete ventilation and racking upgrade for our Bangladesh factory was delivered with exceptional coordination across three countries and flawless on-ground execution.",
    logo: "/assets/feedback/ae-bangladesh.png",
    discipline: "Ventilation & racking",
    location: "Bangladesh",
    project: "ae-bangladesh-factory-upgrade",
  },
  {
    client: "DOK Solutions Lanka Pvt Ltd",
    quote:
      "Our 40-foot high narrow aisle racking system was installed ahead of time with exceptional quality and attention to detail. Consistently outstanding results.",
    logo: "/assets/feedback/dok-solutions-lanka.png",
    discipline: "Narrow aisle racking",
    project: "dok-narrow-aisle-racking",
  },
  {
    client: "George Steuart Teas Pvt Ltd",
    quote:
      "We were impressed with how our complex racking installation at a new multi-level factory was handled. The staff were courteous, competent, and made the process seamless.",
    logo: "/assets/feedback/george-steuart.png",
    discipline: "Racking",
    project: "george-steuart-multi-level-racking",
  },
  {
    client: "MAS Intimates Bangladesh",
    quote:
      "A customized racking system introduced new efficiencies and cost savings, while meeting high operational standards across the board.",
    logo: "/assets/clients/client-36.jpeg",
    discipline: "Racking",
    location: "Bangladesh",
    project: "mas-intimates-racking",
  },
  {
    client: "BPL Teas Pvt Ltd",
    quote:
      "We've relied on them for storage solutions across multiple warehouses. Their design capabilities and post-installation support have been excellent.",
    logo: "/assets/feedback/bpl-teas-pvt-ltd.png",
    discipline: "Storage systems",
    project: "bpl-teas-warehouse-storage",
  },
  {
    client: "London Tea Exchange Kefro Pvt Ltd",
    quote:
      "We commend the design, quality, and professionalism displayed throughout the project. The solution was completed well ahead of the deadline with zero compromise on finish.",
    logo: "/assets/feedback/london-tea-exchange-kefro.png",
    discipline: "Engineering project",
  },
];

/** User-requested draft copy, explicitly labelled until clients approve it. */
export const sampleFeedback: Feedback[] = [
  {
    client: "Unilever",
    quote: "Clear communication, practical recommendations, and careful attention to the installation made the process easy to follow. We appreciated the team's responsive support.",
    logo: "/assets/clients/client-46.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Toyota",
    quote: "The team took time to understand our requirements and explain the available options. Their organised approach and attention to detail stood out throughout the work.",
    logo: "/assets/clients/client-40.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Jetwing",
    quote: "We appreciated the thoughtful planning and focus on day-to-day comfort. The team was approachable, kept us informed, and answered our questions clearly.",
    logo: "/assets/clients/client-57.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Abans",
    quote: "A professional team with a practical approach to our requirements. From the first discussion to the handover, communication was clear and the support was helpful.",
    logo: "/assets/clients/client-67.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
];

export const carouselFeedback: Feedback[] = [...feedback, ...sampleFeedback];

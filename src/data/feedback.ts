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
    client: "OREL Corporation",
    quote:
      "Clear communication, practical recommendations, and careful attention to the installation made the process easy to follow. We appreciated the team's responsive support.",
    logo: "/assets/clients/orel-corporation.png",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Toyota",
    quote:
      "The team took time to understand our requirements and explain the available options. Their organised approach and attention to detail stood out throughout the work.",
    logo: "/assets/clients/client-40.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Jetwing",
    quote:
      "We appreciated the thoughtful planning and focus on day-to-day comfort. The team was approachable, kept us informed, and answered our questions clearly.",
    logo: "/assets/clients/client-57.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
  {
    client: "Abans",
    quote:
      "A professional team with a practical approach to our requirements. From the first discussion to the handover, communication was clear and the support was helpful.",
    logo: "/assets/clients/client-67.jpeg",
    discipline: "Engineering services",
    sample: true,
  },
];

export const carouselFeedback: Feedback[] = [
  ...sampleFeedback.slice(0, 1),
  ...feedback,
  ...sampleFeedback.slice(1),
];

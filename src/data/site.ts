/**
 * Central company data for Sirocco Air Technologies.
 *
 * Sources (see SOURCE-NOTES.md):
 *  [WEB]  sairt.com — the company's own published website (home + about pages).
 *  [USER] Contact details and team confirmed by the client.
 * Nothing here is invented. Figures that conflict between sources are omitted.
 */

export const SITE_URL = "https://www.sairt.com";

export const site = {
  name: "Ashford Holdings PVT L.T.D",
  shortName: "Ashford Holdings PVT L.T.D",
  legalName: "Ashford Holdings PVT L.T.D",
  /** [WEB] */
  tagline: "Engineering Air. Enhancing Lives.",
  discipline: "Air & Environmental Engineering",
  shortDescription:
    "Air and environmental engineering for industrial, commercial and infrastructure facilities in Sri Lanka — ventilation, air conditioning, purification, BMS, fire & gas suppression, dust extraction and material handling.",
  /** [USER] Contact details from the supplied Ashford screenshot; truncated postal code omitted. */
  phone: "+94 76 666 8859",
  phoneHref: "tel:+94766668859",
  email: "info.ashfordholdings@gmail.com",
  emailHref: "mailto:info.ashfordholdings@gmail.com",
  whatsapp: "+94 76 626 7717",
  whatsappHref: "https://wa.me/94766267717",
  address: {
    line1: "227/6, Gemunu Mw, Watthegedara Road",
    line2: "Watthegedara, Maharaga",
    country: "Sri Lanka",
  },
  social: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61581003546208",
    },
  ],
} as const;

export const addressOneLine = `${site.address.line1}, ${site.address.line2}, ${site.address.country}`;

/** Temporarily hidden; enable when the leadership content is ready. */
export const siteFeatures = { leadership: false };

export const navigation = [
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Equipment", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

/** [WEB] about page. */
export const statements = {
  vision: "The nation's most sought after ‘Environment Comfort’ engineering company.",
  mission:
    "Ashford Holdings PVT L.T.D will lead the field in Sri Lanka by 2032 and will effect a positive change in the lives of millions.",
  values: ["Trust", "Accountability", "Integrity", "Loyalty"],
};

/** [WEB] "We work alongside world-class manufacturers from Germany, Malaysia, Singapore, India, and China". */
export const partnerCountries = ["Germany", "Malaysia", "Singapore", "India", "China"] as const;

/** [WEB] Countries where delivered projects are confirmed by named client feedback. */
export const deliveryCountries = ["Bangladesh"] as const;

/**
 * [WEB] Team as published on sairt.com/about — names, titles and credentials only.
 * No portraits are published there, so none are shown (no stand-in or generated faces).
 */
export const leadership = [
  {
    name: "Suren Chandraratna",
    role: "Managing Director",
    credentials: "MBA UK, Dip. BM, F.I.M.S. UK",
    bio: "A management professional with more than 18 years in the industry, spanning sales, marketing, engineering, production and operations. Ashford Holdings PVT L.T.D credits him with pioneering evaporative-cooling adoption locally and contributing to large-scale ventilation, cooling and racking projects.",
  },
  {
    name: "Rohan Rajaratnam",
    role: "Head Communication & Marketing",
    credentials: "B.Com",
    bio: "A marketing and communications professional with more than three decades of experience, including senior leadership roles across advertising and communications organisations in Sri Lanka.",
  },
  {
    name: "Dr. Prasan De Waas Tilakaratne",
    role: "Group Engineering Director",
    credentials: "PhD, BE (Hons), MIE Aus",
    bio: "An engineering professional with experience in robotics, assembly systems, research and development, consultancy and patented engineering work.",
  },
  {
    name: "Harin Chandraratna",
    role: "Engineering Systems Integrator",
    credentials: "Chartered Mechanical Engineer, M.I. Mech E, C.Eng",
    bio: "A specialist in thermodynamics and fluid mechanics with experience across refrigeration, ventilation, water systems, hospitality engineering and industrial research and development.",
  },
  {
    name: "Ravindra Alwis",
    role: "General Manager - Sales",
    credentials: "B.Com Special",
    bio: "A ventilation and industrial-cooling specialist with extensive experience in applications engineering, factory ventilation, special-purpose air movement and energy management.",
  },
  {
    name: "Gayan Kodikara",
    role: "Assistant General Manager / Engineering",
    credentials: "B.Eng (Hons), MBA (UK)",
    bio: "An engineering leader with exposure to manufacturing and cement operations before joining Ashford Holdings PVT L.T.D, where he leads professional engineers and design-drafting teams.",
  },
] as const;

/**
 * Engineering approach. Process stages are described as engineering practice,
 * not as performance claims.
 */
export const process = [
  {
    step: "01",
    title: "Survey",
    text: "Site, process, occupancy and existing plant are assessed before anything is specified.",
  },
  {
    step: "02",
    title: "Engineer",
    text: "Airflow, heat load, pressure and filtration requirements are calculated and drawn.",
  },
  {
    step: "03",
    title: "Select",
    text: "Equipment is matched to the calculated duty from established manufacturers.",
  },
  {
    step: "04",
    title: "Fabricate",
    text: "Ductwork, canopies, supports and assemblies are fabricated to drawing.",
  },
  {
    step: "05",
    title: "Install",
    text: "Mechanical, electrical and controls interfaces are installed and assembled on site.",
  },
  {
    step: "06",
    title: "Commission",
    text: "Systems are tested, balanced and handed over with documentation and support.",
  },
];

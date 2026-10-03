/**
 * Client sectors as listed on Sirocco's about page (sairt.com). The percentages
 * shown there do not add up and are not used. "Typical air challenges" describe
 * general engineering conditions of each sector, not company claims. Client names shown here are limited to organisations with published feedback on Sirocco's own website.
 */
export type Industry = {
  slug: string;
  index: string;
  name: string;
  summary: string;
  challenges: string[];
  disciplines: string[];
  clients: string[];
  image: string;
};

const raw: Omit<Industry, "index">[] = [
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    summary:
      "Production floors where process heat, fume and dust have to be controlled without interrupting output.",
    challenges: [
      "Heat build-up under roofs and around machinery",
      "Process fume and welding smoke",
      "Airborne dust from cutting and finishing",
      "Make-up air for extracted volumes",
    ],
    disciplines: ["air-conditioning-ventilation", "dust-extraction", "racking-material-handling"],
    clients: ["Variosystems Pvt Ltd"],
    image: "/assets/hvac/extraction-installation.jpg",
  },
  {
    slug: "fmcg",
    name: "FMCG",
    summary:
      "High-throughput food and consumer goods plants where hygiene, heat and storage density set the brief.",
    challenges: [
      "Oven and process heat",
      "Hygienic air supply to production",
      "Dense storage of finished goods",
      "Continuous operation",
    ],
    disciplines: [
      "air-conditioning-ventilation",
      "air-purification-filtration",
      "racking-material-handling",
    ],
    clients: ["Ceylon Biscuits Limited (CBL)"],
    image: "https://images.pexels.com/photos/4176427/pexels-photo-4176427.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "consumer-retail",
    name: "Consumer Products & Retail",
    summary:
      "Stores, showrooms and distribution space where comfort and stock handling run side by side.",
    challenges: [
      "Comfort cooling for customers and staff",
      "Fresh air for occupancy",
      "Back-of-house storage",
      "Energy use across long trading hours",
    ],
    disciplines: ["air-conditioning-ventilation", "bms-air-quality", "racking-material-handling"],
    clients: [],
    image: "https://images.pexels.com/photos/16211537/pexels-photo-16211537.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "food-beverage-hospitality",
    name: "Food, Beverage & Hospitality",
    summary:
      "Hotels, restaurants and kitchens where guest comfort sits next to heavy grease, smoke and heat loads.",
    challenges: [
      "Grease and smoke capture over cooking lines",
      "Odour at discharge",
      "Noise near guest areas",
      "Kitchen fire protection",
    ],
    disciplines: [
      "air-purification-filtration",
      "fire-gas-suppression",
      "air-conditioning-ventilation",
    ],
    clients: [],
    image: "https://images.pexels.com/photos/6375553/pexels-photo-6375553.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "government-state",
    name: "Government, Military & State-Owned",
    summary:
      "Public facilities and state enterprises requiring dependable, maintainable engineering systems.",
    challenges: [
      "Long service life",
      "Maintainability",
      "Critical-room protection",
      "Compliance with specification",
    ],
    disciplines: ["air-conditioning-ventilation", "fire-gas-suppression", "bms-air-quality"],
    clients: [],
    image: "https://images.pexels.com/photos/14544989/pexels-photo-14544989.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "apparel-textiles",
    name: "Apparel & Textiles",
    summary:
      "Garment and textile factories where large floor plates, lint and heat call for engineered air movement.",
    challenges: [
      "Heat across large production halls",
      "Lint and fibre dust",
      "Operator comfort",
      "Raw material and finished goods storage",
    ],
    disciplines: ["air-conditioning-ventilation", "dust-extraction", "racking-material-handling"],
    clients: ["MAS Intimates Bangladesh", "A&E Bangladesh"],
    image: "https://images.pexels.com/photos/31019576/pexels-photo-31019576.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Hospitals and clinics where filtration, air changes and pressure regimes are part of the clinical requirement.",
    challenges: [
      "Filtered supply air",
      "Controlled pressure between areas",
      "Low noise in patient areas",
      "Continuous plant operation",
    ],
    disciplines: ["air-purification-filtration", "air-conditioning-ventilation", "bms-air-quality"],
    clients: [],
    image: "https://images.pexels.com/photos/20186736/pexels-photo-20186736.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "agriculture-plantation",
    name: "Agriculture & Plantation",
    summary:
      "Tea and plantation processing where storage, ventilation and product handling decide throughput.",
    challenges: [
      "Warehouse storage density",
      "Multi-level factory layouts",
      "Process ventilation",
      "Dust from processing",
    ],
    disciplines: ["racking-material-handling", "air-conditioning-ventilation", "dust-extraction"],
    clients: ["George Steuart Teas Pvt Ltd", "BPL Teas Pvt Ltd", "London Tea Exchange Kefro Pvt Ltd"],
    image: "https://images.pexels.com/photos/35574282/pexels-photo-35574282.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    summary:
      "Plant rooms, generation and utility sites where equipment reliability depends on heat rejection and ventilation.",
    challenges: [
      "Generator and switch room ventilation",
      "Heat rejection",
      "Gas detection",
      "Unattended operation",
    ],
    disciplines: ["air-conditioning-ventilation", "fire-gas-suppression", "bms-air-quality"],
    clients: [],
    image: "/assets/hvac/plate-heat-exchanger-plant.jpg",
  },
  {
    slug: "banking-financial",
    name: "Banking & Financial Services",
    summary:
      "Branches, offices and data rooms that need quiet comfort, clean air and protected critical equipment.",
    challenges: [
      "Quiet comfort cooling",
      "Fresh air for occupancy",
      "Critical-room protection",
      "Energy monitoring across sites",
    ],
    disciplines: ["air-conditioning-ventilation", "bms-air-quality", "fire-gas-suppression"],
    clients: [],
    image: "https://images.pexels.com/photos/35076215/pexels-photo-35076215.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "transport-engineering",
    name: "Transport & Engineering",
    summary:
      "Automotive, logistics and engineering facilities handling exhaust, welding fume and high-bay storage.",
    challenges: [
      "Vehicle exhaust in workshops",
      "Welding and grinding fume",
      "High-bay and narrow aisle storage",
      "Heat in service bays",
    ],
    disciplines: ["dust-extraction", "air-conditioning-ventilation", "racking-material-handling"],
    clients: ["DOK Solutions Lanka Pvt Ltd"],
    image: "https://images.pexels.com/photos/4483608/pexels-photo-4483608.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
  {
    slug: "conglomerates",
    name: "Conglomerates & Multi-sector",
    summary: "Groups operating across sectors that need one engineering partner for diverse sites.",
    challenges: [
      "Consistent standards across sites",
      "Mixed-use facilities",
      "Centralised monitoring",
      "Phased delivery",
    ],
    disciplines: ["air-conditioning-ventilation", "bms-air-quality", "racking-material-handling"],
    clients: [],
    image: "https://images.pexels.com/photos/8782684/pexels-photo-8782684.jpeg?auto=compress&cs=tinysrgb&w=1280",
  },
];

export const industries: Industry[] = raw.map((i, n) => ({
  ...i,
  index: String(n + 1).padStart(2, "0"),
}));

/** Earlier industry URLs that still resolve. */
const aliases: Record<string, string> = {
  manufacturing: "manufacturing-industrial",
  "food-and-beverage": "food-beverage-hospitality",
  hospitality: "food-beverage-hospitality",
  "commercial-buildings": "consumer-retail",
  automotive: "transport-engineering",
  warehousing: "transport-engineering",
  "industrial-facilities": "energy-utilities",
};

export const industryBySlug = (slug: string) =>
  industries.find((i) => i.slug === (aliases[slug] ?? slug));

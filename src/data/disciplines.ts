/**
 * Sirocco's six solution disciplines, named and described as on the company's own
 * "What we do" page (sairt.com). Detailed engineering systems that already existed
 * in this project (src/data/solutions.ts) are grouped under each discipline.
 */
export type Schematic =
  "airflow" | "purification" | "bms" | "suppression" | "extraction" | "racking";

export type Discipline = {
  slug: string;
  index: string;
  title: string;
  short: string;
  /** Company wording [WEB]. */
  description: string;
  statement: string;
  applications: string[];
  capabilities: string[];
  systems: string[];
  products: string[];
  image: string;
  imageAlt: string;
  schematic: Schematic;
  keywords: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "air-conditioning-ventilation",
    index: "01",
    title: "Air Conditioning & Ventilation",
    short: "Ventilation & AC",
    description:
      "Precision-engineered air conditioning and ventilation systems built for energy efficiency, reliability and comfort — customised for optimal airflow and temperature control year-round.",
    statement:
      "Ventilation systems designed for efficient air movement, purification and cooling, supporting green building certification through energy-efficient design.",
    applications: ["Industrial plants", "Commercial buildings", "High-rise developments"],
    capabilities: [
      "Industrial, commercial and residential air conditioning",
      "Mechanical ventilation, supply and extract",
      "Hot air extraction and fresh air supply",
      "HVLS fans and evaporative cooling",
      "GI and pre-insulated ductwork",
    ],
    systems: [
      "hvac",
      "ventilation-systems",
      "hot-air-extraction",
      "fresh-air-inflow",
      "industrial-air-conditioning",
      "cooling-towers",
      "gi-ducting",
      "pir-ducting",
      "industrial-centrifugal-fans",
      "acoustic-cabinet-fans",
      "cylindrical-axial-fans",
    ],
    products: [
      "inline-mixed-flow-fans",
      "centrifugal-inline-fans",
      "duct-axial-fans",
      "hvls-fans",
      "evaporative-cooling",
      "cooling-towers",
    ],
    image: "/assets/hvac/ducted-air-distribution.jpg",
    imageAlt: "Galvanised supply ductwork and air distribution outlets across a factory floor",
    schematic: "airflow",
    keywords: "air conditioning Sri Lanka, industrial ventilation Sri Lanka, HVAC engineering",
  },
  {
    slug: "air-purification-filtration",
    index: "02",
    title: "Air Purification & Filtration",
    short: "Purification",
    description:
      "Air purification and filtration systems tailored to eliminate airborne pollutants, viruses and odours using technologies such as HEPA filtration, UV-C, ozone and activated carbon.",
    statement:
      "Systems that remove airborne contaminants and enhance indoor air quality across all applications.",
    applications: ["Hospitals", "Cleanrooms", "Offices", "Food manufacturing facilities"],
    capabilities: [
      "HEPA filtration",
      "UV-C treatment",
      "Ozone treatment",
      "Activated carbon odour control",
      "Electrostatic precipitators for smoke, fume and grease",
    ],
    systems: ["industrial-kitchen-esp", "industrial-kitchen-canopy", "fresh-air-inflow"],
    products: ["inline-mixed-flow-fans"],
    image: "/assets/hvac/red-ducting.jpg",
    imageAlt: "Stainless steel commercial kitchen extraction canopy above a cooking line",
    schematic: "purification",
    keywords:
      "air purification Sri Lanka, HEPA filtration, electrostatic precipitator, indoor air quality",
  },
  {
    slug: "bms-air-quality",
    index: "03",
    title: "BMS & Air Quality",
    short: "BMS",
    description:
      "Smart building management platforms that integrate HVAC, lighting, energy and air quality controls into one unified system — with real-time data, analytics and automation.",
    statement:
      "Air quality monitoring, energy efficiency and real-time control for healthier, more efficient buildings.",
    applications: ["Commercial buildings", "Industrial facilities"],
    capabilities: [
      "HVAC, lighting and energy integration",
      "Workplace air quality monitoring",
      "Real-time data and analytics",
      "Automated control strategies",
    ],
    systems: ["hvac"],
    products: [],
    image: "/assets/hvac/plate-heat-exchanger-plant.jpg",
    imageAlt: "Plant room with plate heat exchanger, valves, pumps and instrumented pipework",
    schematic: "bms",
    keywords: "BMS Sri Lanka, building management system, air quality monitoring",
  },
  {
    slug: "fire-gas-suppression",
    index: "04",
    title: "Fire & Gas Suppression",
    short: "Fire & Gas",
    description:
      "Fire suppression and gas detection systems that provide rapid, intelligent protection — including kitchen suppression, clean agent gas systems and early leak detection, designed to international safety standards.",
    statement: "Rapid, intelligent protection for kitchens, critical rooms and process areas.",
    applications: ["Commercial kitchens", "Critical equipment rooms", "Gas-fired plant"],
    capabilities: [
      "Kitchen fire suppression",
      "Clean agent gas suppression",
      "Early gas leak detection",
      "Fire-rated dampers within air systems",
    ],
    systems: ["industrial-kitchen-canopy"],
    products: ["atex-ventilation"],
    image: "/assets/hvac/industrial-piping.jpg",
    imageAlt: "Insulated pipework with actuated control valve and isolation valves",
    schematic: "suppression",
    keywords:
      "fire suppression Sri Lanka, gas suppression, kitchen fire suppression, gas detection",
  },
  {
    slug: "dust-extraction",
    index: "05",
    title: "Dust Extraction",
    short: "Dust",
    description:
      "Dust extraction and ducting solutions engineered to maintain clean, compliant workspaces, with a focus on efficiency, safety and emissions control.",
    statement: "Capture at source, convey cleanly, discharge within limits.",
    applications: ["Textile", "Woodworking", "Food processing", "Heavy manufacturing"],
    capabilities: [
      "Pulse-jet dust collection",
      "Fume and process extraction",
      "Industrial centrifugal fans",
      "Extraction ductwork and hoods",
    ],
    systems: ["pulse-jet-dust-collectors", "industrial-centrifugal-fans", "hot-air-extraction"],
    products: ["centrifugal-inline-fans", "corrosive-environment-fans"],
    image: "/assets/hvac/stainless-fan-pipework.jpg",
    imageAlt: "Stainless steel centrifugal fan with flexible connectors and extraction pipework",
    schematic: "extraction",
    keywords: "dust extraction Sri Lanka, fume extraction, dust collector, industrial extraction",
  },
  {
    slug: "racking-material-handling",
    index: "06",
    title: "Racking & Material Handling",
    short: "Racking",
    description:
      "High-strength racking systems, modular mezzanine floors and conveyor systems — from custom storage design to project optimisation, delivering scalable warehousing tailored to operational needs.",
    statement: "Storage engineered around load, height, aisle and throughput.",
    applications: ["Warehouses", "Logistics hubs", "Factories"],
    capabilities: [
      "Heavy-duty racking",
      "Narrow aisle racking",
      "Modular mezzanines",
      "Conveyor systems",
    ],
    systems: [],
    products: [],
    image: "",
    imageAlt: "",
    schematic: "racking",
    keywords: "racking Sri Lanka, warehouse racking, mezzanine floors, material handling",
  },
];

export const disciplineBySlug = (slug: string) => disciplines.find((d) => d.slug === slug);

export const disciplineForSystem = (systemSlug: string) =>
  disciplines.find((d) => d.systems.includes(systemSlug));

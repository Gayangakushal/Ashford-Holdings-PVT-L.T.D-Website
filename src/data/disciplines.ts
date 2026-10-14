/**
 * Sirocco's six solution disciplines, named and described as on the company's own
 * "What we do" page (sairt.com). Detailed engineering systems that already existed
 * in this project (src/data/solutions.ts) are grouped under each discipline.
 */
export type Schematic = "airflow" | "purification" | "extraction" | "racking";

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
      "Precision-engineered air conditioning and ventilation systems built for energy efficiency, reliability and comfort, customised for optimal airflow and temperature control year-round.",
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
    image: "/assets/equipment/air-purifier.jpg",
    imageAlt: "HEPA and activated carbon air purification unit",
    schematic: "purification",
    keywords:
      "air purification Sri Lanka, HEPA filtration, electrostatic precipitator, indoor air quality",
  },
  {
    slug: "kitchen-esp",
    index: "03",
    title: "Kitchen ESP",
    short: "Kitchen ESP",
    description:
      "Commercial kitchen electrostatic precipitator systems that capture smoke, grease and fine airborne particles from cooking exhaust.",
    statement: "Cleaner kitchen exhaust, from canopy capture to filtered discharge.",
    applications: ["Commercial kitchens", "Hotels", "Restaurants", "Food courts"],
    capabilities: [
      "Electrostatic grease and smoke filtration",
      "Kitchen exhaust extraction",
      "Canopy and ductwork integration",
      "Filter cleaning and maintenance access",
    ],
    systems: ["industrial-kitchen-esp", "industrial-kitchen-canopy"],
    products: ["centrifugal-inline-fans"],
    image: "/assets/equipment/kitchen-esp.jpg",
    imageAlt: "Kitchen electrostatic precipitator with removable collector cells",
    schematic: "purification",
    keywords: "Kitchen ESP Sri Lanka, electrostatic precipitator, kitchen exhaust filtration",
  },
  {
    slug: "dust-extraction",
    index: "04",
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
    slug: "hvls-fans",
    index: "05",
    title: "HVLS Fan",
    short: "HVLS Fan",
    description:
      "High Volume Low Speed fans circulate a large volume of air gently across open spaces, improving comfort and supporting energy-efficient cooling.",
    statement: "Wide-area air circulation for comfortable, productive spaces.",
    applications: [
      "Factories",
      "Warehouses",
      "Hotels and restaurants",
      "Shopping malls",
      "Large halls",
    ],
    capabilities: [
      "Large-diameter ceiling fans",
      "Low-speed, wide-area circulation",
      "Air mixing and destratification",
      "Fan selection and installation",
    ],
    systems: ["ventilation-systems"],
    products: ["hvls-fans"],
    image: "/assets/hvac/hvls-fan-interior.jpg",
    imageAlt: "Gorilla X Range HVLS fans installed across a high-ceiling industrial space",
    schematic: "airflow",
    keywords: "HVLS Fan Sri Lanka, Gorilla X Range, high volume low speed fans",
  },
];

export const disciplineBySlug = (slug: string) => disciplines.find((d) => d.slug === slug);

export const disciplineForSystem = (systemSlug: string) =>
  disciplines.find((d) => d.systems.includes(systemSlug));

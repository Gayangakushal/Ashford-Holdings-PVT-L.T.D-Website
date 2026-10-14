/**
 * Supplied installation photos and manufacturer equipment-family imagery.
 * Sources for corrected equipment visuals are recorded in assets/equipment/SOURCES.json.
 */
export const media = {
  extraction: "/assets/hvac/extraction-installation.jpg",
  piping: "/assets/hvac/industrial-piping.jpg",
  ducts: "/assets/hvac/ducted-air-distribution.jpg",
  ducts2: "/assets/hvac/ducted-air-distribution-2.jpg",
  centrifugal: "/assets/hvac/centrifugal-fans.jpg",
  stainlessFans: "/assets/hvac/stainless-centrifugal-fans.jpg",
  fanPipework: "/assets/hvac/stainless-fan-pipework.jpg",
  heatExchanger: "/assets/hvac/plate-heat-exchanger-plant.jpg",
  dust: "/assets/hvac/dust-collector.jpg",
  cabinetFan: "/assets/hvac/cabinet-fan.jpg",
  industrialAc: "/assets/hvac/industrial-air-conditioner.jpg",
  cooling: "/assets/hvac/evaporative-cooling.jpg",
  redDuct: "/assets/hvac/red-ducting.jpg",
  ductComponent: "/assets/hvac/duct-component.jpg",
  wetScrubber: "/assets/hvac/wet-scrubber-unit.jpg",
  kitchenEsp: "/assets/equipment/kitchen-esp.jpg",
  kitchenCanopy: "/assets/equipment/kitchen-canopy.jpg",
  airPurifier: "/assets/equipment/air-purifier.jpg",
  mixedFlow: "/assets/equipment/inline-mixed-flow-fan.jpg",
  inlineCentrifugal: "/assets/equipment/centrifugal-inline-fan.jpg",
  ductAxial: "/assets/equipment/duct-axial-fan.jpg",
  coolingTower: "/assets/equipment/cooling-tower.jpg",
  atexFan: "/assets/equipment/atex-ventilation-fan.jpg",
  corrosiveFan: "/assets/equipment/corrosive-environment-fan.jpg",
  insulatedDuct: "/assets/equipment/pre-insulated-duct.jpg",
  industrialCooling: "/assets/equipment/industrial-air-conditioning.jpg",
} as const;

export const solutionImages: Record<string, string> = {
  hvac: media.heatExchanger,
  "ventilation-systems": media.ducts,
  "hot-air-extraction": media.extraction,
  "fresh-air-inflow": media.ducts2,
  "industrial-air-conditioning": media.industrialCooling,
  "industrial-kitchen-canopy": media.kitchenCanopy,
  "industrial-kitchen-esp": media.kitchenEsp,
  "gi-ducting": media.ducts,
  "pir-ducting": media.insulatedDuct,
  "cooling-towers": media.coolingTower,
  "pulse-jet-dust-collectors": media.dust,
  "industrial-centrifugal-fans": media.stainlessFans,
  "acoustic-cabinet-fans": media.cabinetFan,
  "cylindrical-axial-fans": media.ductAxial,
};

export const productImages: Record<string, string> = {
  "inline-mixed-flow-fans": media.mixedFlow,
  "centrifugal-inline-fans": media.inlineCentrifugal,
  "duct-axial-fans": media.ductAxial,
  "hvls-fans": "/assets/hvac/hvls-fan-interior.jpg",
  "evaporative-cooling": media.cooling,
  "cooling-towers": media.coolingTower,
  "atex-ventilation": media.atexFan,
  "corrosive-environment-fans": media.corrosiveFan,
};

/**
 * Real engineering photography supplied with this project. No unrelated company
 * profile images or competitor material are referenced here.
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
} as const;

export const solutionImages: Record<string, string> = {
  hvac: media.heatExchanger,
  "ventilation-systems": media.ducts,
  "hot-air-extraction": media.extraction,
  "fresh-air-inflow": media.ducts2,
  "industrial-air-conditioning": media.heatExchanger,
  "industrial-kitchen-canopy": media.redDuct,
  "industrial-kitchen-esp": media.wetScrubber,
  "gi-ducting": media.ducts,
  "pir-ducting": media.ducts2,
  "cooling-towers": media.cooling,
  "pulse-jet-dust-collectors": media.dust,
  "industrial-centrifugal-fans": media.stainlessFans,
  "acoustic-cabinet-fans": media.cabinetFan,
  "cylindrical-axial-fans": media.centrifugal,
};

export const productImages: Record<string, string> = {
  "inline-mixed-flow-fans": media.ductComponent,
  "centrifugal-inline-fans": media.centrifugal,
  "duct-axial-fans": media.centrifugal,
  "hvls-fans": media.ducts,
  "evaporative-cooling": media.cooling,
  "cooling-towers": media.cooling,
  "atex-ventilation": media.stainlessFans,
  "corrosive-environment-fans": media.fanPipework,
};

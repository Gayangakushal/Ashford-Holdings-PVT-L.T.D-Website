import { clientLogos } from "@/data/client-logos";

/** City-level coordinates, not building entrances. Addresses are from linked sources. */
const cities = {
  London: [51.5074, -0.1278, "United Kingdom"],
  Vevey: [46.4628, 6.8419, "Switzerland"],
  Plano: [33.0198, -96.6989, "United States"],
  Miami: [25.7617, -80.1918, "United States"],
  Houston: [29.7604, -95.3698, "United States"],
  McLean: [38.9339, -77.1773, "United States"],
  Magog: [45.2668, -72.1491, "Canada"],
  Tokyo: [35.6762, 139.6503, "Japan"],
  "Toyota City": [35.0824, 137.1563, "Japan"],
  Mumbai: [19.076, 72.8777, "India"],
  Colombo: [6.9271, 79.8612, "Sri Lanka"],
  Pannipitiya: [6.8465, 79.9448, "Sri Lanka"],
  Dodangoda: [6.545, 80.022, "Sri Lanka"],
  Matale: [7.4675, 80.6234, "Sri Lanka"],
  Ratmalana: [6.8196, 79.8801, "Sri Lanka"],
  Homagama: [6.8412, 80.0034, "Sri Lanka"],
  Malwana: [6.95, 80.0167, "Sri Lanka"],
  Battaramulla: [6.9029, 79.9164, "Sri Lanka"],
  Katunayake: [7.1699, 79.8841, "Sri Lanka"],
  Kandy: [7.2906, 80.6337, "Sri Lanka"],
  "Nuwara Eliya": [6.9497, 80.7891, "Sri Lanka"],
  Waikkal: [7.2807, 79.8533, "Sri Lanka"],
  Kohuwala: [6.863, 79.885, "Sri Lanka"],
  Makola: [6.974, 79.958, "Sri Lanka"],
  Bokundara: [6.824, 79.928, "Sri Lanka"],
  Moratuwa: [6.773, 79.8816, "Sri Lanka"],
  Nugegoda: [6.8649, 79.8997, "Sri Lanka"],
  "Mount Lavinia": [6.833, 79.865, "Sri Lanka"],
  Piliyandala: [6.8018, 79.9227, "Sri Lanka"],
  "Sri Jayawardenepura Kotte": [6.8941, 79.9025, "Sri Lanka"],
} as const;

type Office = [city: keyof typeof cities, address: string, source: string, kind?: "Hotel location" | "Corporate office" | "Primary office"];

/** Verified 2026-10-02. Global brand offices are used rather than Sri Lankan franchise branches. */
const offices: Record<string, Office> = {
  Unilever: ["London", "Unilever House, 100 Victoria Embankment, London EC4Y 0DY", "https://www.unilever.com/contact/"],
  "Ceylon Biscuits Limited (CBL)": ["Pannipitiya", "555, High Level Road, Makumbura, Pannipitiya", "https://www.cbllk.com/contact-us"],
  "Wijaya Products": ["Dodangoda", "Thudugala Junction, Dodangoda, Kalutara", "https://www.srilankabusiness.com/exporters-directory/company-profiles/wijaya-products-pvt-ltd/", "Primary office"],
  MD: ["Colombo", "Lanka Canneries, 45/75, Narahenpita Road, Colombo 05", "https://mdfood.lk/contact-us/", "Primary office"],
  "Nestlé": ["Vevey", "Avenue Nestlé 55, 1800 Vevey", "https://www.nestle.com/about/locations/global-addresses"],
  Diana: ["Matale", "Diana Biscuits Company, Weragama, Kaikawala, Matale", "https://diana.lk/contact/"],
  Fab: ["Ratmalana", "Fab Foods, 29, Aththidiya Road, Ratmalana", "https://thefab.lk/", "Primary office"],
  KFC: ["Plano", "7100 Corporate Drive, Plano, Texas 75024", "https://ir.yumchina.com/static-files/b860fd22-dbf0-42d4-adb1-50183734b945"],
  "Burger King": ["Miami", "Miami, Florida", "https://www.linkedin.com/company/burger-king"],
  Maliban: ["Ratmalana", "389, Galle Road, Ratmalana", "https://www.malibangroup.com/contact-us/", "Primary office"],
  Cargills: ["Colombo", "40, York Street, Colombo 01", "https://www.cargillsceylon.com/"],
  "Farm Chemie": ["Homagama", "78, Industrial Zone, Katuwana, Homagama", "https://farmchemie.com/2622-2/", "Primary office"],
  Lankem: ["Colombo", "98, Sri Sangaraja Mawatha, Colombo 10", "https://lankem.lk/contact-us/", "Primary office"],
  Chevron: ["Houston", "1400 Smith Street, Houston, Texas 77002", "https://www.chevron.com/who-we-are/contact/chevron"],
  Baurs: ["Colombo", "A. Baur & Co., 5, Upper Chatham Street, Colombo 01", "https://baurs.com/"],
  Orit: ["Colombo", "Level 7, East Tower, World Trade Center, Colombo 01", "https://rainbowpages.lk/shopping/costume-jewellery/orit-apparels-lanka-pvt-ltd/", "Primary office"],
  Coats: ["London", "4th Floor, 14 Aldermanbury Square, London EC2V 7HS", "https://www.coats.com/en/about/corporate-contacts/", "Corporate office"],
  Camso: ["Magog", "2633, rue MacPherson, Magog, Québec J1X 0E6", "https://camso.co/es/acerca-de/notificacion-legal/", "Corporate office"],
  "Sil ueta": ["Malwana", "Silueta, Lot 14, Zone 01, Biyagama EPZ, Walgama, Malwana", "https://www.srilankabusiness.com/exporters-directory/company-profiles/silueta-pvt-ltd/", "Primary office"],
  MAS: ["Battaramulla", "MAS Holdings, 199, Kaduwela Road, Battaramulla", "https://masholdings.com/impact_report/2025/introduction/"],
  ATG: ["Katunayake", "Spur Road 7, Phase 2, EPZ, Katunayake", "https://www.srilankabusiness.com/exporters-directory/company-profiles/a-t-g-occupational-pvt-ltd/", "Primary office"],
  Honda: ["Tokyo", "Toranomon Alcea Tower, 2-2-3 Toranomon, Minato-ku, Tokyo", "https://global.honda/en/about/overview.html"],
  Toyota: ["Toyota City", "1 Toyota-Cho, Toyota City, Aichi 471-8571", "https://global.toyota/en/company/profile/overview/"],
  DIMO: ["Colombo", "65, Jetawana Road, Colombo 14", "https://www.dimolanka.com/2024-2025-dimo-annual-report/pdf/DIMO-PLC-AR-2024-25.pdf"],
  AMW: ["Colombo", "185, Union Place, Colombo 02", "https://www.amwltd.com/contact/"],
  DPMC: ["Battaramulla", "120, 120A, Pannipitiya Road, Battaramulla", "https://www.dpg.lk/public/assets/images/home/DPMC_CompanyProfile.pdf"],
  "Nawaloka Hospitals": ["Colombo", "23, Deshamanya H. K. Dharmadasa Mawatha, Colombo 02", "https://nawaloka2024-25.annualreports.lk/corporate_information/corporate_information.html"],
  "Durdans Hospital": ["Colombo", "3, Alfred Place, Colombo 03", "https://www.durdans.com/contact/", "Primary office"],
  "Lanka Hospitals": ["Colombo", "578, Elvitigala Mawatha, Colombo 05", "https://www.lankahospitals.com/lh-international/contact/", "Primary office"],
  "Suwasewana Hospitals": ["Kandy", "532, Peradeniya Road, Kandy", "https://suwasevana.lk/contact-us/", "Primary office"],
  "Asiri Health": ["Colombo", "181, Kirula Road, Colombo 05", "https://asirihealth.com/asiri-laboratories/service/322", "Primary office"],
  "Amaya Lake": ["Colombo", "Amaya Resorts corporate office, Level 27, East Tower, World Trade Center, Colombo 01", "https://www.amayaresorts.com/contact-us/", "Corporate office"],
  "Araliya Green Hills": ["Nuwara Eliya", "10, Glenfall Road, Nuwara Eliya", "https://www.araliyaresorts.com/araliya-green-hills/", "Hotel location"],
  Jetwing: ["Colombo", "Jetwing House, 46/26, Navam Mawatha, Colombo 02", "https://www.jetwinghotels.com/terms-and-conditions/"],
  "Club Hotel Dolphin": ["Waikkal", "Kammala South, Waikkal", "https://www.brownshotels.com/clubhoteldolphin/contact-us/", "Hotel location"],
  "The Kingsbury": ["Colombo", "48, Janadhipathi Mawatha, Colombo 01", "https://www.thekingsburyhotel.com/contact-us", "Hotel location"],
  Taj: ["Mumbai", "IHCL corporate office, Barrister Rajini Patel Marg, Nariman Point, Mumbai 400021", "https://www.ihcltata.com/contact-us", "Corporate office"],
  Cinnamon: ["Colombo", "Cinnamon Hotel Management, 5, Justice Akbar Mawatha, Colombo 02", "https://www.cinnamonhotels.com/get-in-touch-events", "Corporate office"],
  Hilton: ["McLean", "7930 Jones Branch Drive, McLean, Virginia 22102", "https://ir.hilton.com/investor-resources/faq"],
  "Colombo Swimming Club": ["Colombo", "148, Storm Lodge, Galle Road, Colombo 03", "https://www.colomboswimmingclub.org/contact/", "Primary office"],
  "Oak Ray Hotels": ["Kandy", "Devani Rajasinghe Mawatha, Getambe, Kandy", "https://www.oakrayhotels.com/contact-us/", "Primary office"],
  Abans: ["Colombo", "Abans PLC, 498, Galle Road, Colombo 03", "https://abansgroup.com/contact-us/"],
  Softlogic: ["Colombo", "14, De Fonseka Place, Colombo 05", "https://www.softlogic.lk/contact-us"],
  Civimech: ["Kohuwala", "118, Dutugemunu Street, Kohuwala, Dehiwala", "https://civimech.com/projects/"],
  "Sanken Construction": ["Colombo", "295, Madampitiya Road, Colombo 14", "https://sankenconstruction.com/contact-us/"],
  Singer: ["Colombo", "Singer (Sri Lanka) PLC, 112, Havelock Road, Colombo 05", "https://www.singersl.com/contact-us"],
  "Tritech Engineers": ["Makola", "87, Makola South, Makola", "https://nationalchamber.lk/membership-directory/name/tritech-engineers-pvt-ltd/", "Primary office"],
  "K&A Engineers (Pvt) Ltd.": ["Bokundara", "336/4, Colombo Road, Bokundara", "https://www.kandaeng.com/officebuildings.php", "Primary office"],
  Cooltech: ["Moratuwa", "21, St. Peter's Road, Moratuwa", "https://cooltech.lk/system-design/"],
  Metropolitan: ["Nugegoda", "150A, Nawala Road, Nawala, Nugegoda", "https://www.metropolitan.lk/regional.html"],
  Maga: ["Colombo", "200, Nawala Road, Narahenpita, Colombo 05", "https://www.maga.lk/contact-us/"],
  Access: ["Colombo", "Access Towers, 278, Union Place, Colombo 02", "https://access.lk/business-sectors/engineering-construction/"],
  "Fresco Engineering": ["Colombo", "5C, Level 5, Valiant Towers, Nawam Mawatha, Colombo 02", "https://www.linkedin.com/company/fresco-engineering", "Primary office"],
  "ASDA Engineering": ["Battaramulla", "649, Suboothi Mawatha, Battaramulla", "https://www.cida.gov.lk/sea_con/search_name_con_1.php?id=EM%2F0151", "Primary office"],
  Monarch: ["Piliyandala", "Monarch Lanka Engineering, 8/1/C2, Maharagama Road, Makuluduwa, Piliyandala", "https://monarchlanka.com/our-team/", "Primary office"],
  "Waverley Kitchens": ["Mount Lavinia", "26, Templers Road, Mount Lavinia", "https://www.waverley.lk/contact-us/", "Primary office"],
  "Kent Engineers": ["Kohuwala", "27, Malwatta Avenue, Kohuwala, Nugegoda", "https://kentengineers.net/contact-us.php"],
  Fentons: ["Colombo", "Hayleys Fentons, 180, Deans Road, Colombo 10", "https://hayleysfentons.com/contact/"],
  "LTL Holdings": ["Colombo", "Corporate office, 67, Park Street, Colombo 02", "https://www.ltl.lk/esg/", "Corporate office"],
  Sperrys: ["Sri Jayawardenepura Kotte", "Sri Jayawardenepura Mawatha, Sri Jayawardenepura Kotte", "https://lankainformation.lk/directory/food/food-service-equipment/36415-sperrys-commercial-equipment-pvt-ltd", "Primary office"],
};

const pending: Record<string, string> = {
  Riverina: "This is a legacy hotel brand. A current headquarters has not been confirmed.",
  "Palm Garden Hotel": "This is a legacy hotel brand. A current headquarters has not been confirmed.",
  "CD Engineering": "The exact company represented by this logo needs confirmation before a headquarters can be mapped.",
};

export const brandLocations = clientLogos.map((logo) => {
  const office = offices[logo.name];
  if (!office) return { ...logo, location: null, note: pending[logo.name] ?? "Headquarters not yet confirmed." };
  const [city, address, source, kind = "Headquarters"] = office;
  const [latitude, longitude, country] = cities[city];
  return { ...logo, location: { city, address, source, kind, latitude, longitude, country }, note: "" };
});

export const headquartersCountries = [...new Set(brandLocations.flatMap((brand) => brand.location ? [brand.location.country] : []))].sort();

/** Match the existing world-dots equirectangular projection. */
export function projectLocation(latitude: number, longitude: number): readonly [number, number] {
  return [(longitude + 170) / 360 * 1000, (80 - latitude) / 138 * 460];
}

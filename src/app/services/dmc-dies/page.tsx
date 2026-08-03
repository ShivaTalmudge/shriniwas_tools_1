import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC & SMC Thermoset Dies Pune | Shriniwas Tools & Equipments",
  description: "Specialized manufacturing of Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) dies in Pune. Heat-resistant tooling for electrical and automotive parts.",
  keywords: "DMC dies Pune, SMC dies Bhosari, thermoset molding, compression molding dies, electrical switchgear tooling",
};

const data: ServiceData = {
  serviceName: "DMC & SMC Dies",
  hero: {
    title: "DMC & SMC Dies",
    subtitle: "Heavy-duty compression dies engineered for extreme heat and high-pressure thermoset molding.",
    bgImage: "/company_machines/edm_sparking.png",
  },
  overview: {
    title: "Mastering Thermoset Compression Tooling",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Unlike thermoplastic injection molding, thermoset materials like Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) undergo irreversible chemical curing under intense heat and pressure. We specialize in designing the heavy-duty compression dies required to facilitate this demanding process.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Because thermoset compounds can be highly abrasive and emit gasses during curing, our die designs incorporate robust wear-resistant tool steels, heavy hard-chroming, and highly strategic venting layouts to prevent trapped air and surface defects.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We deeply understand the intricacies of internal heating elements and cartridge layouts. By ensuring uniform heat distribution across the mold cavities, we guarantee that your DMC or SMC components cure evenly, yielding exceptional mechanical strength and arc resistance for electrical applications.
        </p>
      </>
    ),
    image: "/company_machines/m1tr_milling.png",
  },
  keyFeatures: [
    { title: "Heat Distribution", description: "Engineered heating layouts for perfectly uniform thermoset curing.", icon: "Flame" },
    { title: "Wear Resistance", description: "Hard-chromed cavities to withstand abrasive glass-filled compounds.", icon: "ShieldCheck" },
    { title: "Strategic Venting", description: "Optimal exhaust channels to eliminate trapped gasses and porosity.", icon: "Wind" },
    { title: "Heavy-Duty Build", description: "Thick mold bases designed to endure immense compression press tonnage.", icon: "Settings" },
    { title: "Ejection Systems", description: "Custom engineered knock-out mechanisms for safe part removal without cracking.", icon: "Box" },
    { title: "Precision Inserts", description: "Interchangeable cavity inserts for multi-variant part manufacturing.", icon: "Layers" },
  ],
  industries: [
    { name: "Electrical Switchgear", icon: "Zap", description: "Arc-resistant housings and internal phase barriers." },
    { name: "Automotive (Under-Hood)", icon: "Car", description: "Heat-resistant casings for engine compartment electronics." },
    { name: "Railway Components", icon: "Settings", description: "Heavy-duty insulating blocks for high-voltage transit." },
    { name: "Heavy Engineering", icon: "Factory", description: "Rigid structural parts for industrial equipment." },
  ],
  process: [
    { title: "Thermal & Flow Design", description: "Modeling heat distribution and compound flow behavior." },
    { title: "Base Machining", description: "Heavy-duty milling of the main mold base and core inserts." },
    { title: "Cavity Polishing & Chroming", description: "Applying hard chrome to resist abrasive glass-filled resins." },
    { title: "Heater Integration", description: "Installing precisely rated heating cartridges across the mold." },
    { title: "Compression Trials", description: "Testing the mold under high tonnage to verify uniform curing." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC & Thermoset Molding Services Pune | Shriniwas Tools",
  description: "Complete Dough Moulding Compound (DMC) production runs and thermoset molding services in Bhosari. Delivering heat-resistant, high-strength electrical components.",
  keywords: "DMC molding Pune, thermoset molding production, compression molding services Bhosari, electrical component manufacturing",
};

const data: ServiceData = {
  serviceName: "DMC Molding Production",
  hero: {
    title: "DMC Molding Production",
    subtitle: "High-volume compression molding runs for heat-resistant and arc-resistant thermoset components.",
    bgImage: "/company_machines/yuzumi_moulding.png",
  },
  overview: {
    title: "End-to-End Thermoset Component Manufacturing",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Beyond designing and building DMC dies, Shriniwas Tools & Equipments offers full-scale production runs using our dedicated hydraulic compression molding presses. We provide a complete turnkey solution, from raw compound handling to final deflashing and inspection.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Dough Moulding Compound (DMC) yields components with outstanding electrical insulation, high mechanical strength, and superb dimensional stability at elevated temperatures. Our experienced press operators closely monitor temperature zones, cure times, and pressure curves to guarantee that every batch meets stringent ISO 9001 quality metrics.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you need low-volume prototype runs or high-volume production of electrical insulators, switchgear housings, or automotive structural parts, we have the capacity and the technical know-how to deliver defect-free components on schedule.
        </p>
      </>
    ),
    image: "/company_machines/hero_bakelite_mould.png",
  },
  keyFeatures: [
    { title: "Turnkey Production", description: "Seamless transition from in-house die manufacturing to mass production.", icon: "Factory" },
    { title: "Process Control", description: "Strict monitoring of curing temperatures, pressures, and cycle times.", icon: "Settings" },
    { title: "Post-Processing", description: "Efficient deflashing, drilling, and finishing of cured components.", icon: "Wrench" },
    { title: "Quality Assurance", description: "Rigorous ISO 9001 compliant testing for strength and dimensional stability.", icon: "CheckCircle2" },
    { title: "High-Volume Capacity", description: "Multiple compression presses operating round-the-clock to meet massive order demands.", icon: "Factory" },
    { title: "Material Expertise", description: "Deep knowledge of DMC compounds to ensure optimal curing and mechanical properties.", icon: "Shield" },
  ],
  industries: [
    { name: "Electrical Insulators", icon: "Zap", description: "Mass production of high-voltage insulators and MCB bases." },
    { name: "Automotive Parts", icon: "Car", description: "High-strength, thermally stable parts for combustion engines." },
    { name: "Industrial Equipment", icon: "Settings", description: "Wear-resistant housings for heavy machinery." },
    { name: "Consumer Appliances", icon: "Box", description: "Heat-resistant handles and structural bases." },
  ],
  process: [
    { title: "Compound Preparation", description: "Weighing and pre-heating the raw thermoset dough material." },
    { title: "Mold Heating & Loading", description: "Bringing the die to the exact curing temperature before loading." },
    { title: "Compression & Curing", description: "Applying high tonnage to force the material into the cavity." },
    { title: "Ejection & Deflashing", description: "Removing the cured part and mechanically trimming any flash." },
    { title: "Final QA Inspection", description: "Testing the component for structural and electrical integrity." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

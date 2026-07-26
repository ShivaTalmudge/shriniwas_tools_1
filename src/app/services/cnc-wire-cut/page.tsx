import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC Wire Cut EDM Services Pune | Shriniwas Tools & Equipments",
  description: "9 Electronica CNC wire cut machines for high-precision sparking and wire cutting. We produce complex die profiles and extrusion dies in Bhosari, Pune.",
};

const data: ServiceData = {
  serviceName: "CNC Wire Cut EDM",
  hero: {
    title: "CNC Wire Cut EDM",
    subtitle: "Extrusion dies, complex punches, and ultra-hard metal profiling.",
    bgImage: "/company_machines/wire_cut_machine_imp1.png",
  },
  overview: {
    title: "High-Precision Wire Cut EDM",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          With 9 Electronica CNC wire cut machines on the floor, we specialize in high-precision sparking and wire cutting for hard conductive metals. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          This setup allows us to rapidly produce complex die profiles, punches, and extrusion dies that conventional milling simply cannot reach.
        </p>
      </>
    ),
    image: "/company_machines/wire_cut_machine_2_imp.png",
  },
  keyFeatures: [
    { title: "Fleet of 9 Machines", description: "High volume capacity with rapid turnaround times.", icon: "Factory" },
    { title: "Ultra-Hard Metals", description: "Effortless cutting of hardened steel and alloys.", icon: "ShieldCheck" },
    { title: "Complex Profiles", description: "Machining intricate internal corners and shapes.", icon: "Settings" },
    { title: "High Precision", description: "Micron-level accuracy and superior surface finish.", icon: "CheckCircle2" },
  ],
  industries: [
    { name: "Tool & Die", icon: "Wrench" },
    { name: "Automotive", icon: "Car" },
    { name: "Aerospace", icon: "Plane" },
    { name: "Medical Devices", icon: "Heart" },
  ],
  process: [
    "Programming",
    "Material Prep",
    "Wire Cutting",
    "Surface Finish",
    "Inspection"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

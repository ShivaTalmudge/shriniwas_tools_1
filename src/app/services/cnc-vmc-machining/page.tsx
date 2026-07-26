import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC & VMC Machining Services Pune | Shriniwas Tools & Equipments",
  description: "Precision CNC and VMC machining services in Bhosari, Pune. We machine complex 3D profiles and hardened tool steel with micron-level accuracy.",
};

const data: ServiceData = {
  serviceName: "CNC & VMC Machining",
  hero: {
    title: "CNC & VMC Machining",
    subtitle: "High-tolerance industrial components, mould bases, and aerospace-grade parts.",
    bgImage: "/company_machines/VMC_2.png",
  },
  overview: {
    title: "Precision VMC Machining",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          We run three dedicated Vertical Machining Centers (VMCs) capable of handling bed sizes up to 1300x600x600 mm. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Combined with our M1TR and milling machines, we produce highly complex 3D profiles and core/cavity inserts from hardened tool steel with micron-level repeatability.
        </p>
      </>
    ),
    image: "/company_machines/VMC1.png",
  },
  keyFeatures: [
    { title: "High Tolerance", description: "Achieving dimensional accuracy down to 5 microns.", icon: "CheckCircle2" },
    { title: "Large Bed Size", description: "Machining capacity up to 1300x600x600 mm.", icon: "Maximize" },
    { title: "Hardened Steel", description: "Specialized in machining pre-hardened and tough materials.", icon: "Shield" },
    { title: "Complex 3D", description: "Advanced CAM programming for intricate 3D profiling.", icon: "Box" },
  ],
  industries: [
    { name: "Aerospace", icon: "Plane" },
    { name: "Automotive", icon: "Car" },
    { name: "Heavy Engineering", icon: "Settings" },
    { name: "Tool & Die", icon: "Wrench" },
  ],
  process: [
    "CAD/CAM",
    "Setup & Fixturing",
    "Roughing",
    "Finishing",
    "CMM Inspection"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

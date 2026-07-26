import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding Services | Shriniwas Tools & Equipments",
  description: "Custom plastic injection moulding — mould design, tool building, and production — for thermoplastic components. In-house at our ISO 9001:2015 certified facility, Bhosari, Pune.",
};

const data: ServiceData = {
  serviceName: "Plastic Injection Moulding",
  hero: {
    title: "Plastic Injection Moulding",
    subtitle: "Thermoplastic components for engineering, electrical, and industrial use.",
    bgImage: "/company_machines/horizonatl_injection_moulding_machine_1.png",
  },
  overview: {
    title: "End-to-End Plastic Injection Moulding",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          We design and build injection moulds in-house, then run production on them ourselves — using our Haitian (90/300 Ton) and Yuzumi (120 Ton) moulding machines. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          That means we understand a part&apos;s full journey from CAD file to finished component, and we work to the tolerance your assembly actually needs.
        </p>
      </>
    ),
    image: "/company_machines/horizontal_injection_moulding_machine.png",
  },
  keyFeatures: [
    { title: "High Precision", description: "Micron-level accuracy for critical components.", icon: "CheckCircle2" },
    { title: "Rapid Cycle Times", description: "Optimized cooling channels for faster production.", icon: "Zap" },
    { title: "Cost Effective", description: "Reduced material waste and automated processing.", icon: "TrendingUp" },
    { title: "Superior Finish", description: "Flawless aesthetics with custom textures.", icon: "Award" },
  ],
  industries: [
    { name: "Automotive", icon: "Car" },
    { name: "Medical Devices", icon: "Heart" },
    { name: "Consumer Electronics", icon: "Smartphone" },
    { name: "Packaging", icon: "Package" },
  ],
  process: [
    "DFM Analysis",
    "Mould Design",
    "Tooling",
    "Production",
    "QA & Delivery"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

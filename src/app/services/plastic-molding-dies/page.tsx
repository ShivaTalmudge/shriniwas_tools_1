import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding Manufacturer in Pune, India | Shriniwas Tools",
  description: "Leading plastic injection moulding manufacturer in Pune. High-volume precision plastic components and injection moulds for automotive & electrical sectors.",
};

const data: ServiceData = {
  serviceName: "Plastic Injection Moulding",
  hero: {
    title: "Plastic Injection Moulding",
    subtitle: "High-volume precision plastic components and injection moulds for automotive, electrical, and engineering sectors across India.",
    bgImage: "/company_machines/hero_injection_machine.png",
  },
  overview: {
    title: "End-to-End Plastic Injection Moulding",
    description: (
      <>
        <p className="mb-4">
          Shriniwas Tools is a premier plastic injection moulding manufacturer. Since 2006, we have specialized in delivering high-volume, defect-free plastic components that meet the stringent requirements of industrial buyers.
        </p>
        <p>
          We provide a complete turnkey solution—from in-house tool room mould design to final part production. Whether you are an automotive OEM or an electronics manufacturer, our ISO 9001:2015 certified processes guarantee consistency across millions of cycles.
        </p>
      </>
    ),
    image: "/company_machines/horizonatl_injection_moulding_machine_1.png",
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

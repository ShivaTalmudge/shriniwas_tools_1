import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC & Bakelite Moulds Manufacturer Pune | Shriniwas Tools",
  description: "Design and manufacturing of high-quality DMC and Bakelite moulds for electrical components and switchgear. Built for high temperature and pressure.",
};

const data: ServiceData = {
  serviceName: "DMC & Bakelite Moulds",
  hero: {
    title: "DMC & Bakelite Moulds",
    subtitle: "Switchgear components, electrical insulators, and heat-resistant parts.",
    bgImage: "/images/products-cropped/Image1.png",
  },
  overview: {
    title: "Thermoset Plastic Tooling",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Thermosetting plastics require robust tooling that can withstand high temperatures and pressure without warping. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We have over a decade of experience designing and manufacturing DMC and Bakelite moulds that deliver flash-free electrical components and heavy-duty switchgear parts.
        </p>
      </>
    ),
    image: "/images/products-cropped/Image1.png",
  },
  keyFeatures: [
    { title: "Heat Resistant", description: "Tooling designed for extreme thermoset temperatures.", icon: "Zap" },
    { title: "Flash-Free Parts", description: "Precision machining ensures tight shut-offs.", icon: "CheckCircle2" },
    { title: "High Pressure", description: "Robust designs to withstand moulding pressures.", icon: "ShieldCheck" },
    { title: "Decade of Experience", description: "Proven track record in thermoset tooling.", icon: "Award" },
  ],
  industries: [
    { name: "Electrical", icon: "Zap" },
    { name: "Switchgear", icon: "Settings" },
    { name: "Automotive", icon: "Car" },
    { name: "Heavy Engineering", icon: "Factory" },
  ],
  process: [
    "Tool Design",
    "Material Selection",
    "CNC Machining",
    "Heat Treatment",
    "Assembly & Trials"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

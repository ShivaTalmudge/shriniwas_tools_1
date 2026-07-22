import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Jigs and Fixtures Manufacturer in Pune | Shriniwas Tools",
  description: "Leading jigs and fixtures manufacturer in Pune. We engineer custom workholding solutions, inspection gauges, and automated assembly fixtures.",
};

const data: ServiceData = {
  serviceName: "Jigs & Fixtures",
  hero: {
    title: "Jigs & Fixtures",
    subtitle: "Custom-engineered workholding and assembly solutions to maximize your production efficiency and accuracy.",
    bgImage: "/company_machines/bannerimage2.png",
  },
  overview: {
    title: "Optimizing the Assembly Line",
    description: (
      <>
        <p className="mb-4">
          Precision manufacturing and high-speed assembly rely entirely on robust, accurate, and ergonomic workholding. As a specialized jigs and fixtures manufacturer, Shriniwas Tools engineers custom solutions that ensure perfect repeatability while reducing operator fatigue.
        </p>
        <p>
          From heavy-duty CNC machining fixtures to delicate Go/No-Go inspection gauges and poka-yoke assembly jigs, our tooling team builds solutions that physically prevent human error during mass production.
        </p>
      </>
    ),
    image: "/company_machines/milling_machine.png",
  },
  keyFeatures: [
    { title: "Poka-Yoke Design", description: "Fool-proof designs that prevent incorrect part loading.", icon: "ShieldCheck" },
    { title: "Automated Clamping", description: "Pneumatic/hydraulic integration for fast loading.", icon: "Zap" },
    { title: "High Wear Resistance", description: "Hardened resting pads and locating pins.", icon: "CheckCircle2" },
    { title: "Ergonomics", description: "Lightweight aluminum frames to reduce operator fatigue.", icon: "Award" },
  ],
  industries: [
    { name: "Automotive Assembly", icon: "Car" },
    { name: "Aerospace Machining", icon: "Plane" },
    { name: "Electronics Testing", icon: "Zap" },
    { name: "Heavy Welding", icon: "Box" },
  ],
  process: [
    "Process Study",
    "3D Design",
    "Machining",
    "Assembly",
    "Calibration"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

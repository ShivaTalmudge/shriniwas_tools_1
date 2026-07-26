import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Jigs, Fixtures & Gauges Manufacturer Pune | Shriniwas Tools",
  description: "Design and manufacturing of custom machining fixtures, welding jigs, and inspection gauges. Built for repeatability and precision in Bhosari, Pune.",
};

const data: ServiceData = {
  serviceName: "Jigs & Fixtures",
  hero: {
    title: "Jigs & Fixtures",
    subtitle: "Welding jigs, CNC fixtures, checking gauges, and assembly aids.",
    bgImage: "/images/products-cropped/Image3.png",
  },
  overview: {
    title: "Precision Jigs & Custom Fixtures",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          A great component means nothing if you can&apos;t measure it or hold it properly during production. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We design and build custom machining fixtures, welding jigs, and inspection gauges that guarantee repeatability on your assembly line, regardless of operator skill level.
        </p>
      </>
    ),
    image: "/images/products-cropped/Image3.png",
  },
  keyFeatures: [
    { title: "High Repeatability", description: "Guarantee consistent quality across mass production.", icon: "CheckCircle2" },
    { title: "Operator Friendly", description: "Poka-yoke designs to prevent assembly errors.", icon: "ThumbsUp" },
    { title: "Custom Solutions", description: "Tailor-made for your specific CNC or welding setup.", icon: "Settings" },
    { title: "Durable Build", description: "Hardened contact points for long-term use.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Automotive", icon: "Car" },
    { name: "Aerospace", icon: "Plane" },
    { name: "Heavy Machinery", icon: "Factory" },
    { name: "Electronics", icon: "Zap" },
  ],
  process: [
    "Requirement Analysis",
    "3D Concept Design",
    "Precision Machining",
    "Assembly & Calibration",
    "Tryout & Handover"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Press Tool Manufacturer in Pune | Shriniwas Tools",
  description: "Leading press tool manufacturer in Pune. High-speed progressive, compound, and deep draw dies engineered for millions of flawless stamping cycles.",
};

const data: ServiceData = {
  serviceName: "Press Tools",
  hero: {
    title: "Press Tools",
    subtitle: "High-speed progressive and compound dies engineered for millions of flawless sheet metal stamping cycles.",
    bgImage: "/company_machines/bannerimage2.png",
  },
  overview: {
    title: "Sheet Metal Stamping Excellence",
    description: (
      <>
        <p className="mb-4">
          Sheet metal stamping demands tooling that can endure extreme impact forces millions of times without losing its cutting edge. As a premier press tool manufacturer, Shriniwas Tools engineers and builds high-performance stamping dies designed to maximize your press uptime.
        </p>
        <p>
          Utilizing top-grade D2, powder metallurgy steels, and Tungsten Carbide inserts, coupled with our ultra-precise in-house Wire EDM capabilities, we create punch and matrix assemblies with exact clearances down to the micron level for high-speed progressive and compound dies.
        </p>
      </>
    ),
    image: "/company_machines/VMC1.png",
  },
  keyFeatures: [
    { title: "Progressive Dies", description: "Multi-station tools for high-speed automated stamping.", icon: "TrendingUp" },
    { title: "Compound Dies", description: "Single-stroke piercing and blanking for perfect concentricity.", icon: "CheckCircle2" },
    { title: "Deep Drawing", description: "Specialized tools for cylindrical/box sheet metal forming.", icon: "Box" },
    { title: "Carbide Tooling", description: "Tungsten carbide inserts for extreme longevity.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Automotive Body", icon: "Car" },
    { name: "White Goods", icon: "Home" },
    { name: "Electrical Connectors", icon: "Zap" },
    { name: "Aerospace Brackets", icon: "Plane" },
  ],
  process: [
    "Strip Layout",
    "Die Design",
    "Wire EDM",
    "Assembly",
    "Tryout"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

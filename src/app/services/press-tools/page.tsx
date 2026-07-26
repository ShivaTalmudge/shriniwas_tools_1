import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Press Tools & Sheet Metal Dies Manufacturer Pune | Shriniwas Tools",
  description: "Manufacturer of high-speed progressive, compound, and forming dies for sheet metal stamping. Burr-free blanks and accurate forming in Bhosari, Pune.",
};

const data: ServiceData = {
  serviceName: "Press Tools",
  hero: {
    title: "Press Tools",
    subtitle: "Automotive brackets, electrical contacts, and complex sheet metal forming.",
    bgImage: "/images/products-cropped/Image2.png",
  },
  overview: {
    title: "High-Speed Sheet Metal Stamping Dies",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          We design and manufacture progressive, compound, and forming dies tailored for high-speed sheet metal stamping. 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our tooling is built from premium grades of steel and heavily tested on our own floor to ensure burr-free blanks and accurate forming before we ever ship the die to you.
        </p>
      </>
    ),
    image: "/images/products-cropped/Image2.png",
  },
  keyFeatures: [
    { title: "Progressive Dies", description: "Multi-station tooling for high-volume production.", icon: "Settings" },
    { title: "Burr-Free Blanks", description: "Precision clearances ensure clean, accurate cuts.", icon: "CheckCircle2" },
    { title: "Compound Dies", description: "Blanking and piercing in a single stroke.", icon: "Zap" },
    { title: "Premium Steel", description: "High-grade tool steel for extended die life.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Automotive", icon: "Car" },
    { name: "Electrical", icon: "Zap" },
    { name: "Home Appliances", icon: "Home" },
    { name: "Consumer Goods", icon: "Package" },
  ],
  process: [
    "Strip Layout Design",
    "Die Design",
    "Wire Cut & VMC",
    "Assembly & Fitting",
    "Press Trial & QA"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

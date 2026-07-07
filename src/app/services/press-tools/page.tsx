import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Press Tool Manufacturer in Pune | Shriniwas Tools",
  description: "Leading press tool manufacturer in Pune. High-speed progressive, compound, and deep draw dies engineered for millions of flawless stamping cycles.",
};

const data: ServiceData = {
  serviceName: "Press Tools",
  hero: {
    title: "Press Tool Manufacturer",
    subtitle: "High-speed progressive and compound dies engineered for millions of flawless sheet metal stamping cycles.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "Sheet Metal Stamping Excellence in Pune",
    description: (
      <>
        <p className="mb-4">
          Sheet metal stamping demands tooling that can endure extreme impact forces millions of times without losing its cutting edge. As a premier <strong>press tool manufacturer</strong> in Pune, Shriniwas Tools engineers and builds high-performance stamping dies designed to maximize your press uptime.
        </p>
        <p className="mb-4">
          Utilizing top-grade D2, powder metallurgy steels, and Tungsten Carbide inserts, coupled with our ultra-precise in-house Wire EDM capabilities, we create punch and matrix assemblies with exact clearances down to the micron level.
        </p>
        <p>
          Whether you require a high-speed progressive die with multiple bending and forming stages for automotive clips, or a highly concentric compound die for industrial washers, we deliver robust press tooling that performs relentlessly across high-volume production runs.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
    { step: "01", title: "Strip Layout", description: "Optimizing material usage." },
    { step: "02", title: "Die Design", description: "3D CAD simulation of forming stages." },
    { step: "03", title: "Wire EDM", description: "Micron-accurate punch/die cutting." },
    { step: "04", title: "Assembly", description: "Fitting pillars, springs, and punches." },
    { step: "05", title: "Tryout", description: "Stamping press test runs." },
  ],
  machinery: [
    {
      name: "Electronica Wirecut EDM",
      capacity: "400x300x200 mm",
      specs: "0.25mm wire, fine skimming",
      applications: "Punch and matrix cutting",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "High-Speed VMC",
      capacity: "1000x500x500 mm",
      specs: "Heavy rigid milling",
      applications: "Die set and backing plates",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "D2 Tool Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Tungsten Carbide", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Tooling Types", value: "Progressive, Compound, Deep Draw, Blanking" },
    { label: "Sheet Materials", value: "CRCA, Stainless Steel, Brass, Copper, Aluminum" },
    { label: "Die Life", value: "Up to 5,000,000 strokes (with Carbide)" },
    { label: "Clearance Accuracy", value: "±0.005 mm" },
  ],
  faqs: [
    { question: "What is a Progressive Die?", answer: "A progressive die feeds a continuous coil of sheet metal through multiple stations. Each station performs a different operation (piercing, bending, forming) so that one complete part drops out with every single stroke of the press. We specialize in manufacturing these complex multi-stage tools." },
    { question: "How do you ensure punches don't break on thick materials?", answer: "As an experienced press tool manufacturer, we use high-grade shock-resisting tool steels, calculate precise cutting clearances via CAD simulation, and utilize guided stripper plates to support the punch right down to the material surface." },
    { question: "Can you manufacture dies with Tungsten Carbide?", answer: "Yes, for extremely high-volume production or abrasive sheet metals, we utilize Tungsten Carbide inserts for the punches and matrices, significantly increasing the die's lifespan between sharpenings." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Jigs & Fixtures", href: "/services/jigs-fixtures", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "The 12-stage progressive die designed by Shriniwas Tools runs at 200 SPM without a hitch. It's increased our output significantly.", author: "Plant Head", company: "AutoStamping Inc." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

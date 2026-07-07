import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Mould Manufacturer in Pune | Shriniwas Tools",
  description: "Leading DMC mould manufacturer in Pune. We engineer robust, heavy-duty thermoset compression moulds for electrical and industrial applications.",
};

const data: ServiceData = {
  serviceName: "DMC Moulds",
  hero: {
    title: "DMC Mould Manufacturer",
    subtitle: "Robust, heavy-duty thermoset tooling engineered in Pune to withstand immense compression and high-temperature curing cycles.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "Heavy-Duty Compression Tooling",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) requires a fundamentally different tooling approach compared to thermoplastic injection moulding. DMC moulds must endure extreme compressive forces and sustained high temperatures to bake the thermoset material effectively.
        </p>
        <p className="mb-4">
          As an expert <strong>DMC mould manufacturer</strong> in Pune, Shriniwas Tools & Equipments designs and builds ultra-rigid compression dies using premium H13 and P20 tool steels. Our engineering team incorporates optimized heating cartridge layouts to ensure uniform heat distribution across the cavity, which is critical for preventing un-cured spots in the final DMC part.
        </p>
        <p>
          From intricate electrical switchgear components to large structural insulators, we deliver thermoset moulds that guarantee millions of cycles without flashing or degradation, ensuring your production line runs seamlessly.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  },
  keyFeatures: [
    { title: "Thermal Optimization", description: "Uniform heating arrays for perfect curing.", icon: "Zap" },
    { title: "Extreme Rigidity", description: "Built to withstand 300+ tons of compression.", icon: "ShieldCheck" },
    { title: "Hard Chrome Plating", description: "Cavities treated for abrasive glass-fiber wear.", icon: "Award" },
    { title: "Zero Flash Design", description: "Precision land areas prevent material leakage.", icon: "CheckCircle2" },
  ],
  industries: [
    { name: "Switchgear", icon: "Zap" },
    { name: "Electrical Distribution", icon: "Settings" },
    { name: "Heavy Machinery", icon: "Box" },
    { name: "Railways", icon: "Train" },
  ],
  process: [
    { step: "01", title: "Thermal Analysis", description: "Heating layout design." },
    { step: "02", title: "Core/Cavity CNC", description: "Rough and finish VMC milling." },
    { step: "03", title: "Hardening", description: "Heat treatment to 48-52 HRC." },
    { step: "04", title: "Plating", description: "Hard chrome surface treatment." },
    { step: "05", title: "Tryout", description: "In-house compression testing." },
  ],
  machinery: [
    {
      name: "Heavy Duty VMC",
      capacity: "1300x600x600 mm",
      specs: "High torque spindle",
      applications: "Large DMC mould bases",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Surface Grinder",
      capacity: "600x300X300 mm",
      specs: "Micron-level flatness",
      applications: "Parting line optimization",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "H13 Tool Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "P20 Alloy Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Mould Size", value: "Up to 1000 x 800 mm" },
    { label: "Steel Hardness", value: "48 - 52 HRC (Core/Cavity)" },
    { label: "Heating Mechanism", value: "Electrical Cartridges / Oil Heating" },
    { label: "Ejection", value: "Hydraulic or Mechanical Pin Ejection" },
  ],
  faqs: [
    { question: "Why do DMC moulds need hard chrome plating?", answer: "DMC contains highly abrasive glass fibers that can rapidly wear down steel cavities during compression. As an experienced DMC mould manufacturer, we hard chrome plate our cavities to provide a frictionless, wear-resistant barrier that drastically extends mould life." },
    { question: "Can you run trials of the mould before shipping?", answer: "Absolutely. We have our own 100T and 200T compression presses in-house to run T0 and T1 trials and provide you with production-ready samples for approval." },
    { question: "How do you ensure uniform heating in the mould?", answer: "We use thermal analysis during the CAD stage to design optimized electrical cartridge or oil heating layouts, ensuring zero cold spots and perfect curing of the thermoset compound." }
  ],
  relatedServices: [
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Bakelite Moulds", href: "/services/backlite-dies-components", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "The DMC mould we commissioned for our heavy-duty insulators performs beautifully. Zero flash and perfectly uniform curing.", author: "Head of Tooling", company: "PowerGrid Equipments" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

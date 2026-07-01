import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Moulds Manufacturing | Shriniwas Tools",
  description: "Heavy-duty DMC compression mould manufacturing engineered for high heat and pressure resistance.",
};

const data: ServiceData = {
  serviceName: "DMC Moulds",
  hero: {
    title: "DMC Mould Manufacturing",
    subtitle: "Robust, heavy-duty thermoset tooling engineered to withstand immense compression and high-temperature curing cycles.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "Tooling for Tough Environments",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) requires a fundamentally different tooling approach compared to thermoplastic injection moulding. DMC moulds must endure extreme compressive forces and sustained high temperatures to bake the thermoset material.
        </p>
        <p className="mb-4">
          Our engineering team designs ultra-rigid compression dies using premium H13 and P20 tool steels. We incorporate optimized heating cartridge layouts to ensure uniform heat distribution across the cavity, which is critical for preventing un-cured spots in the final DMC part.
        </p>
        <p>
          From intricate switchgear components to large structural automotive insulators, we deliver DMC moulds that guarantee millions of cycles without flashing or degradation.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Surface Grinder",
      capacity: "600x300X300 mm",
      specs: "Micron-level flatness",
      applications: "Parting line optimization",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "H13 Tool Steel", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "P20 Alloy Steel", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Mould Size", value: "Up to 1000 x 800 mm" },
    { label: "Steel Hardness", value: "48 - 52 HRC (Core/Cavity)" },
    { label: "Heating Mechanism", value: "Electrical Cartridges / Oil Heating" },
    { label: "Ejection", value: "Hydraulic or Mechanical Pin Ejection" },
  ],
  faqs: [
    { question: "Why do DMC moulds need hard chrome plating?", answer: "DMC contains highly abrasive glass fibers that can rapidly wear down steel cavities during compression. Hard chrome plating provides a frictionless, wear-resistant barrier that drastically extends mould life." },
    { question: "Can you run trials of the mould before shipping?", answer: "Absolutely. We have 100T and 200T compression presses in-house to run T0 and T1 trials and provide you with production-ready samples." }
  ],
  relatedServices: [
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { title: "Bakelite Moulds", href: "/services/backlite-dies-components", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "The DMC mould we commissioned for our heavy-duty insulators performs beautifully. Zero flash and perfectly uniform curing.", author: "Head of Tooling", company: "PowerGrid Equipments" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Moulding Services in Pune | Shriniwas Tools",
  description: "Specialized DMC (Dough Moulding Compound) moulding services in Pune for heavy electrical and automotive components.",
};

const data: ServiceData = {
  serviceName: "DMC Moulding",
  hero: {
    title: "DMC Moulding Services",
    subtitle: "High-strength, thermoset Dough Moulding Compound solutions for superior electrical insulation and heat resistance.",
    bgImage: "/images/hero_machinery.png",
  },
  overview: {
    title: "Thermoset Moulding Excellence",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) is a vital thermosetting polymer used where exceptional electrical insulation, mechanical strength, and dimensional stability at high temperatures are required. 
        </p>
        <p className="mb-4">
          Based in Pune, Shriniwas Tools is a leading manufacturer of precision DMC components. Our hydraulic compression moulding presses and highly trained operators ensure that every DMC part is fully cured and free from porosity.
        </p>
        <p>
          We cater heavily to the electrical switchgear and heavy machinery sectors, producing components that can withstand arc resistance, track resistance, and severe thermal shock without compromising their structural integrity.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "High Heat Resistance", description: "Maintains stability in extreme temperatures.", icon: "Zap" },
    { title: "Electrical Insulation", description: "High dielectric strength for switchgears.", icon: "ShieldCheck" },
    { title: "Structural Rigidity", description: "Incredible compressive strength.", icon: "Box" },
    { title: "Flame Retardant", description: "Meets stringent UL flammability ratings.", icon: "Award" },
  ],
  industries: [
    { name: "Heavy Electricals", icon: "Zap" },
    { name: "Switchgear Manufacturing", icon: "Shield" },
    { name: "Automotive (Under-hood)", icon: "Car" },
    { name: "Railway Components", icon: "Train" },
    { name: "Industrial Machinery", icon: "Settings" },
  ],
  process: [
    { step: "01", title: "Tool Heating", description: "Pre-heating compression dies." },
    { step: "02", title: "Charge Prep", description: "Weighing raw DMC compound." },
    { step: "03", title: "Compression", description: "Applying high tonnage pressure." },
    { step: "04", title: "Curing", description: "Controlled temperature baking." },
    { step: "05", title: "Deflashing", description: "Removing excess flash and QA." },
  ],
  machinery: [
    {
      name: "Hydraulic Compression Press 200T",
      capacity: "200 Tons",
      specs: "Heated platens, programmable curing cycles",
      applications: "Large switchgear enclosures",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Hydraulic Compression Press 100T",
      capacity: "100 Tons",
      specs: "Fast approach speed, accurate tonnage",
      applications: "Busbar supports, MCB parts",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "DMC (Glass Filled)", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "SMC (Sheet Moulding)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
    { name: "Phenolic Resin", image: "https://images.unsplash.com/photo-1580828369019-ea23709bc872?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Moulding Tonnage", value: "50 to 300 Tons" },
    { label: "Max Platen Size", value: "800 x 800 mm" },
    { label: "Material Capability", value: "DMC, SMC, Bakelite" },
    { label: "Post-Processing", value: "Deflashing, Thread Tapping, Buffing" },
    { label: "Quality Check", value: "High Voltage (HV) Test capability" },
  ],
  faqs: [
    { question: "What is DMC?", answer: "Dough Moulding Compound (DMC) is a fiberglass-reinforced thermosetting polymer primarily consisting of polyester resin, chopped glass fibers, and mineral fillers." },
    { question: "Why use DMC over standard plastics?", answer: "DMC does not melt once cured. It offers vastly superior heat resistance, arc resistance, and mechanical strength compared to standard thermoplastics." },
    { question: "Can inserts be moulded into DMC parts?", answer: "Yes, we routinely mould brass and steel threaded inserts directly into DMC components for strong fastening points in electrical applications." }
  ],
  relatedServices: [
    { title: "DMC Moulds", href: "/services/dmc-dies", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { title: "Bakelite Moulds", href: "/services/backlite-dies-components", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "Their DMC moulding quality is second to none. The switchgear components we receive are always free of porosity and dimensionally perfect.", author: "VP Operations", company: "National Electrical Grid Supplier" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

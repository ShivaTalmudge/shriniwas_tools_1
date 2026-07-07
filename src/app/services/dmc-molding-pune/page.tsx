import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Moulding Manufacturer in Pune | Shriniwas Tools",
  description: "Leading DMC moulding manufacturer in Pune, India. Specializing in high-strength thermoset Dough Moulding Compound parts for electrical & automotive sectors.",
};

const data: ServiceData = {
  serviceName: "DMC Moulding",
  hero: {
    title: "DMC Moulding Manufacturer",
    subtitle: "High-strength, thermoset Dough Moulding Compound solutions for superior electrical insulation and heat resistance.",
    bgImage: "/images/hero_machinery.png",
  },
  overview: {
    title: "Thermoset Moulding Excellence in Pune",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) is a vital thermosetting polymer used where exceptional electrical insulation, mechanical strength, and dimensional stability at high temperatures are required. 
        </p>
        <p className="mb-4">
          As a prominent <strong>DMC moulding manufacturer</strong> based in Pune, Shriniwas Tools & Equipments produces high-performance thermoset components. Our facility utilizes advanced hydraulic compression moulding presses operated by a highly trained team, ensuring every DMC part is fully cured, dimensionally accurate, and free from porosity.
        </p>
        <p>
          We cater heavily to the electrical switchgear, heavy machinery, and automotive sectors. Our components are designed to withstand severe thermal shock, high arc resistance, and track resistance without compromising their structural integrity.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Hydraulic Compression Press 100T",
      capacity: "100 Tons",
      specs: "Fast approach speed, accurate tonnage",
      applications: "Busbar supports, MCB parts",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "DMC (Glass Filled)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "SMC (Sheet Moulding)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Phenolic Resin", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
    { question: "Why should we choose you as our DMC moulding manufacturer?", answer: "We bring over 18 years of tooling and moulding expertise. Our in-house tool room ensures mould precision, while our dedicated compression moulding facility guarantees consistent, high-quality thermoset production." },
    { question: "Can inserts be moulded into DMC parts?", answer: "Yes, we routinely mould brass and steel threaded inserts directly into DMC components to provide strong fastening points for heavy electrical switchgear applications." },
    { question: "Do you manufacture the DMC moulds as well?", answer: "Yes, we design and manufacture the heavy-duty DMC compression moulds in our own tool room before starting mass production." }
  ],
  relatedServices: [
    { title: "DMC Moulds", href: "/services/dmc-dies", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Bakelite Moulds", href: "/services/backlite-dies-components", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "Their DMC moulding quality is second to none. The switchgear components we receive are always free of porosity and dimensionally perfect.", author: "VP Operations", company: "National Electrical Grid Supplier" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bakelite Moulds & Components | Shriniwas Tools",
  description: "Precision Bakelite thermoset compression moulds and end-component manufacturing.",
};

const data: ServiceData = {
  serviceName: "Bakelite Moulds & Components",
  hero: {
    title: "Bakelite Moulds & Components",
    subtitle: "High-precision thermoset tooling and manufacturing for superior electrical insulation and heat-resistant applications.",
    bgImage: "/images/hero_machinery.png",
  },
  overview: {
    title: "The Standard for Heat Resistance",
    description: (
      <>
        <p className="mb-4">
          Bakelite (Phenolic resin) remains one of the most reliable thermosetting plastics for applications demanding extremely high heat resistance and electrical non-conductivity. 
        </p>
        <p className="mb-4">
          Shriniwas Tools offers an end-to-end Bakelite solution. We design and manufacture highly polished, abrasion-resistant compression moulds specifically tailored for phenolic materials. Additionally, we operate a dedicated press shop to manufacture the final Bakelite components for our clients.
        </p>
        <p>
          From intricate electrical switches to robust kitchenware handles, we ensure flash-free moulding and excellent dimensional stability across millions of cycles.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "High Polish Finish", description: "SPI A2/A3 finishes for glossy components.", icon: "Award" },
    { title: "Flash-Free Moulding", description: "Precision land-area matching in cavities.", icon: "CheckCircle2" },
    { title: "Turnkey Production", description: "From mould design to final component delivery.", icon: "Settings" },
    { title: "Durability", description: "Hard chrome treated for abrasive phenolic flow.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Electrical Switches", icon: "Zap" },
    { name: "Kitchenware", icon: "Home" },
    { name: "Automotive Relays", icon: "Car" },
    { name: "Industrial Machinery", icon: "Settings" },
  ],
  process: [
    { step: "01", title: "Mould Engineering", description: "Calculating exact shrinkage rates." },
    { step: "02", title: "Tool Machining", description: "VMC and Wire Cut EDM shaping." },
    { step: "03", title: "Polishing & Plating", description: "Mirror polishing and hard chrome." },
    { step: "04", title: "Compression", description: "Heated platen moulding process." },
    { step: "05", title: "Deflashing", description: "Automated tumbling and cleaning." },
  ],
  machinery: [
    {
      name: "Compression Press 100T",
      capacity: "100 Tons",
      specs: "Multi-cavity Bakelite moulding",
      applications: "Electrical sockets, handles",
      image: "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "CNC VMC",
      capacity: "1000x500x500 mm",
      specs: "10,000 RPM Spindle",
      applications: "Core and cavity machining",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "Phenolic Resin (Bakelite)", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Tool Steel (H13)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Mould Size", value: "Up to 800 x 600 mm" },
    { label: "Cavities", value: "Single to 64-Cavity Moulds" },
    { label: "Production Tonnage", value: "50T to 200T" },
    { label: "Post-Processing", value: "Tumbling, Drilling, Tapping" },
  ],
  faqs: [
    { question: "Do you only make the mould, or can you produce the Bakelite parts?", answer: "We offer both. We can manufacture the mould and ship it to you, or we can keep the mould in our facility and manufacture the Bakelite components for you as a turnkey solution." },
    { question: "Why is Bakelite still used instead of modern plastics?", answer: "Bakelite is unmatched for its combination of extreme heat resistance (it doesn't melt, it only chars at very high temps), electrical non-conductivity, and rigidity, making it essential for cookware handles and electrical switchgear." }
  ],
  relatedServices: [
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { title: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "Our kitchenware handles require a flawless glossy finish direct from the mould. Shriniwas Tools delivered perfectly.", author: "Product Manager", company: "Premium Cookware Brand" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

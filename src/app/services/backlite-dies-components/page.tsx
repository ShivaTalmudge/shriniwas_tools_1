import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bakelite Components Manufacturer in Pune | Shriniwas Tools",
  description: "Leading Bakelite components manufacturer in Pune. We provide end-to-end thermoset tooling and manufacturing for highly heat-resistant electrical parts.",
};

const data: ServiceData = {
  serviceName: "Bakelite Moulds & Components",
  hero: {
    title: "Bakelite Components Manufacturer",
    subtitle: "High-precision thermoset tooling and turnkey manufacturing for superior electrical insulation and heat-resistant industrial applications.",
    bgImage: "/images/hero_machinery.png",
  },
  overview: {
    title: "End-to-End Bakelite Manufacturing",
    description: (
      <>
        <p className="mb-4">
          Bakelite (Phenolic resin) remains one of the most reliable thermosetting plastics for applications demanding extremely high heat resistance and electrical non-conductivity. 
        </p>
        <p className="mb-4">
          As a prominent <strong>Bakelite components manufacturer</strong> in Pune, Shriniwas Tools offers a complete end-to-end solution. We design and build highly polished, abrasion-resistant compression moulds specifically tailored for phenolic materials in our advanced tool room. Furthermore, we operate a dedicated press shop to manufacture the final Bakelite components for our OEM clients.
        </p>
        <p>
          From intricate electrical switches and relays to robust industrial and kitchenware handles, we ensure flash-free moulding and excellent dimensional stability across millions of production cycles.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "CNC VMC",
      capacity: "1000x500x500 mm",
      specs: "10,000 RPM Spindle",
      applications: "Core and cavity machining",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "Phenolic Resin (Bakelite)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Tool Steel (H13)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Mould Size", value: "Up to 800 x 600 mm" },
    { label: "Cavities", value: "Single to 64-Cavity Moulds" },
    { label: "Production Tonnage", value: "50T to 200T" },
    { label: "Post-Processing", value: "Tumbling, Drilling, Tapping" },
  ],
  faqs: [
    { question: "Are you a full-service Bakelite components manufacturer?", answer: "Yes. We offer turnkey solutions. We can manufacture the precision Bakelite mould and either ship it to your facility, or keep it in our Pune press shop to manufacture the final Bakelite components for you." },
    { question: "Why is Bakelite still used instead of modern thermoplastics?", answer: "Bakelite is unmatched for its combination of extreme heat resistance (it does not melt, it only chars at very high temperatures), electrical insulation, and structural rigidity, making it essential for heavy electrical switchgear and heat-exposed handles." },
    { question: "Can you achieve a glossy finish on Bakelite parts?", answer: "Yes, our tool room achieves SPI A2/A3 mirror finishes on the mould cavities, which translates to a flawless, glossy surface finish directly on the moulded Bakelite component." }
  ],
  relatedServices: [
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "Our kitchenware handles require a flawless glossy finish direct from the mould. Shriniwas Tools delivered perfectly.", author: "Product Manager", company: "Premium Cookware Brand" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

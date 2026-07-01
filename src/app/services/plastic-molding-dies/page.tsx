import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding | Shriniwas Tools",
  description: "High-precision plastic injection moulding and mould manufacturing services. ISO certified quality.",
};

const data: ServiceData = {
  serviceName: "Plastic Injection Moulding",
  hero: {
    title: "Precision Plastic Injection Moulding",
    subtitle: "High-volume, flawless plastic component manufacturing backed by advanced tooling and ISO-certified processes.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "End-to-End Injection Moulding Solutions",
    description: (
      <>
        <p className="mb-4">
          Plastic injection moulding is the cornerstone of modern mass production. At Shriniwas Tools, we offer comprehensive injection moulding services, from initial mould design and tool manufacturing to high-volume production of complex plastic components.
        </p>
        <p className="mb-4">
          Our advanced facility is equipped with state-of-the-art injection moulding machines capable of processing a wide variety of engineering plastics, including ABS, PC, Nylon, and POM. We cater to stringent tolerances and critical surface finish requirements demanded by the automotive, medical, and electronics industries.
        </p>
        <p>
          Whether you need a prototype run or millions of parts, our rigorous quality control ensures zero defects and unparalleled consistency across every batch.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "High Precision", description: "Micron-level accuracy for critical components.", icon: "CheckCircle2" },
    { title: "Rapid Cycle Times", description: "Optimized cooling channels for faster production.", icon: "Zap" },
    { title: "Cost Effective", description: "Reduced material waste and automated processing.", icon: "TrendingUp" },
    { title: "Superior Finish", description: "Flawless aesthetics with custom textures.", icon: "Award" },
  ],
  industries: [
    { name: "Automotive", icon: "Car" },
    { name: "Medical Devices", icon: "Heart" },
    { name: "Consumer Electronics", icon: "Smartphone" },
    { name: "Packaging", icon: "Package" },
    { name: "Home Appliances", icon: "Home" },
  ],
  process: [
    { step: "01", title: "DFM Analysis", description: "Design for manufacturability." },
    { step: "02", title: "Mould Design", description: "3D CAD/CAM tooling design." },
    { step: "03", title: "Tooling", description: "CNC and EDM mould creation." },
    { step: "04", title: "Production", description: "Automated injection moulding." },
    { step: "05", title: "QA & Delivery", description: "Inspection and global shipping." },
  ],
  machinery: [
    {
      name: "Haitian 300 TON",
      capacity: "300 Tons",
      specs: "Servo-hydraulic, high-speed injection",
      applications: "Large automotive and appliance parts",
      image: "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Yizumi 120 TON",
      capacity: "120 Tons",
      specs: "Precision electric injection",
      applications: "Small intricate electronic components",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "CNC Machining Center",
      capacity: "1000x500x500mm",
      specs: "12000 RPM Spindle",
      applications: "Mould core and cavity cutting",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "ABS", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Polycarbonate (PC)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
    { name: "Nylon (PA66)", image: "https://images.unsplash.com/photo-1580828369019-ea23709bc872?auto=format&fit=crop&q=80&w=300" },
    { name: "POM (Delrin)", image: "https://images.unsplash.com/photo-1591124611422-bc57ccff472e?auto=format&fit=crop&q=80&w=300" },
    { name: "HDPE", image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1563906660682-1bf738f61536?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=600"
  ],
  specs: [
    { label: "Tolerance", value: "±0.01 mm to ±0.05 mm" },
    { label: "Clamping Force", value: "90 Tons to 300 Tons" },
    { label: "Max Shot Weight", value: "Up to 800 grams" },
    { label: "Mould Life", value: "Up to 1,000,000 shots (H13 Steel)" },
    { label: "Surface Finish", value: "SPI A1 (Mirror) to VDI3400 (Texture)" },
    { label: "Lead Time", value: "2 to 6 weeks for tooling" },
  ],
  faqs: [
    { question: "What plastics can you inject?", answer: "We work with almost all engineering and commodity plastics including ABS, PC, Nylon, POM, PP, PE, and specialized glass-filled grades." },
    { question: "Do you manufacture the moulds in-house?", answer: "Yes, we have a fully equipped in-house tool room with CNC and EDM machines to manufacture precision moulds." },
    { question: "What is your minimum order quantity (MOQ)?", answer: "While we specialize in high-volume production, we are flexible and can accommodate lower minimum order quantities for specialized components." },
    { question: "Can you achieve mirror finishes?", answer: "Yes, using SPI A1 polishing standards, we can achieve flawless mirror finishes required for optical or highly aesthetic parts." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { title: "Rubber Moulds", href: "/services/rubber-molds", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400" }
  ],
  testimonials: [
    { quote: "The injection moulds manufactured by Shriniwas Tools have run for over 500,000 cycles without any degradation. Exceptional quality.", author: "Production Head", company: "Leading Automotive Tier 1" },
    { quote: "Their ability to maintain extremely tight tolerances on complex PC components is remarkable. Delivery is always on time.", author: "Sourcing Manager", company: "Global Electronics Brand" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

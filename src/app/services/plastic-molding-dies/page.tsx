import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Plastic Injection Moulding Manufacturer in Pune, India | Shriniwas Tools",
  description: "Leading plastic injection moulding manufacturer in Pune. High-volume precision plastic components and injection moulds for automotive & electrical sectors.",
};

const data: ServiceData = {
  serviceName: "Plastic Injection Moulding",
  hero: {
    title: "Plastic Injection Moulding Manufacturer",
    subtitle: "High-volume precision plastic components and injection moulds for automotive, electrical, and engineering sectors across India.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "End-to-End Plastic Injection Moulding Services in Pune",
    description: (
      <>
        <p className="mb-4">
          Shriniwas Tools & Equipments is a premier <strong>plastic injection moulding manufacturer in Pune, India</strong>. Since 2006, we have specialized in delivering high-volume, defect-free plastic components that meet the stringent requirements of industrial buyers.
        </p>
        <p className="mb-4">
          Our advanced Pune-based manufacturing facility is equipped with state-of-the-art injection moulding machines, allowing us to process a comprehensive range of engineering plastics. From ABS and Polycarbonate to specialized glass-filled grades, we manufacture components with tight dimensional tolerances and exceptional surface finishes.
        </p>
        <p>
          We provide a complete turnkey solution—from in-house tool room mould design to final part production. Whether you are an automotive OEM or an electronics manufacturer, our ISO 9001:2015 certified processes guarantee consistency across millions of cycles.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Yizumi 120 TON",
      capacity: "120 Tons",
      specs: "Precision electric injection",
      applications: "Small intricate electronic components",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "CNC Machining Center",
      capacity: "1000x500x500mm",
      specs: "12000 RPM Spindle",
      applications: "Mould core and cavity cutting",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "ABS", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Polycarbonate (PC)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Nylon (PA66)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "POM (Delrin)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "HDPE", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
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
    { question: "Are you a plastic injection moulding manufacturer in Pune?", answer: "Yes, Shriniwas Tools & Equipments operates a full-scale plastic injection moulding facility and tool room in MIDC Bhosari, Pune, serving clients across India." },
    { question: "Do you design and manufacture the injection moulds in-house?", answer: "Absolutely. We have a fully equipped in-house tool room with advanced CNC and EDM machinery to design and manufacture precision injection moulds before starting production." },
    { question: "What engineering plastics do you mould?", answer: "We process a wide range of materials including ABS, Polycarbonate (PC), Nylon (PA66), POM (Delrin), and various glass-filled engineering plastics required by the automotive and electrical sectors." },
    { question: "What is your typical production capacity?", answer: "With machines ranging up to 300 Tons clamping force, we handle both specialized low-volume runs and high-volume mass production of up to millions of components." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "DMC Moulding", href: "/services/dmc-molding-pune", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Rubber Moulds", href: "/services/rubber-molds", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" }
  ],
  testimonials: [
    { quote: "The injection moulds manufactured by Shriniwas Tools have run for over 500,000 cycles without any degradation. Exceptional quality.", author: "Production Head", company: "Leading Automotive Tier 1" },
    { quote: "Their ability to maintain extremely tight tolerances on complex PC components is remarkable. Delivery is always on time.", author: "Sourcing Manager", company: "Global Electronics Brand" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC & VMC Precision Machining | Shriniwas Tools",
  description: "High-precision CNC and VMC machining services for complex metal and plastic components.",
};

const data: ServiceData = {
  serviceName: "CNC & VMC Machining",
  hero: {
    title: "Precision CNC & VMC Machining",
    subtitle: "Delivering aerospace-grade precision for complex components using advanced multi-axis machining centers.",
    bgImage: "/images/hero_capabilities.png",
  },
  overview: {
    title: "Subtractive Manufacturing Perfected",
    description: (
      <>
        <p className="mb-4">
          Computer Numerical Control (CNC) and Vertical Machining Center (VMC) operations form the backbone of modern precision engineering. Shriniwas Tools operates a cutting-edge machine shop dedicated to tight-tolerance subtractive manufacturing.
        </p>
        <p className="mb-4">
          Our advanced multi-axis VMCs and CNC turning centers allow us to machine complex geometries out of hardened tool steels, aerospace aluminum, titanium, and engineering plastics with absolute repeatability.
        </p>
        <p>
          Whether manufacturing core inserts for injection moulds, intricate aerospace components, or high-volume industrial fittings, our skilled programmers and operators ensure exact compliance to your CAD models.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "Tight Tolerances", description: "Consistently holding tolerances down to ±0.005mm.", icon: "CheckCircle2" },
    { title: "Complex Geometries", description: "Multi-axis capability for intricate 3D profiling.", icon: "Settings" },
    { title: "High-Speed Machining", description: "12,000 RPM spindles for rapid material removal.", icon: "Zap" },
    { title: "Hard Milling", description: "Machining hardened steels up to 60 HRC.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Aerospace", icon: "Plane" },
    { name: "Automotive", icon: "Car" },
    { name: "Medical Implants", icon: "Heart" },
    { name: "Mould Making", icon: "Box" },
    { name: "Oil & Gas", icon: "Zap" },
  ],
  process: [
    { step: "01", title: "CAM Programming", description: "Mastercam toolpath generation." },
    { step: "02", title: "Setup", description: "Fixture design and zeroing." },
    { step: "03", title: "Roughing", description: "High material removal rate cutting." },
    { step: "04", title: "Finishing", description: "High-speed precision passes." },
    { step: "05", title: "CMM Inspection", description: "Coordinate measuring validation." },
  ],
  machinery: [
    {
      name: "AMS VMC Machine",
      capacity: "1300x600x600 mm",
      specs: "4-Axis, 10,000 RPM, 24 ATC",
      applications: "Large mould bases and plates",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Batliboi VMC",
      capacity: "1000x500x500 mm",
      specs: "High-speed spindle for core/cavity",
      applications: "Precision 3D profiling",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "CNC Turning Center",
      capacity: "Ø250 x 500 mm",
      specs: "8-station turret, rigid tapping",
      applications: "Shafts, pins, and round inserts",
      image: "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "Tool Steel (H13, P20)", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Aluminum (6061, 7075)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
    { name: "Stainless Steel", image: "https://images.unsplash.com/photo-1580828369019-ea23709bc872?auto=format&fit=crop&q=80&w=300" },
    { name: "Brass & Copper", image: "https://images.unsplash.com/photo-1591124611422-bc57ccff472e?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Max Workpiece Size", value: "1300 x 600 x 600 mm" },
    { label: "Spindle Speeds", value: "Up to 12,000 RPM" },
    { label: "Positional Accuracy", value: "±0.003 mm" },
    { label: "Programming", value: "Mastercam / Delcam" },
  ],
  faqs: [
    { question: "What is the difference between CNC and VMC?", answer: "CNC (Computer Numerical Control) is the general term for computer-controlled machining. A VMC (Vertical Machining Center) is a specific type of CNC milling machine where the spindle axis is vertically oriented." },
    { question: "Can you machine hardened tool steel?", answer: "Yes, our rigid VMCs and advanced carbide cutting tools allow us to hard-mill materials up to 60 HRC." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { title: "Jigs & Fixtures", href: "/services/jigs-fixtures", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "Shriniwas Tools handles our aerospace aluminum components with absolute precision. Their CMM inspection reports give us total confidence.", author: "Quality Director", company: "Aerospace Components LLC" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

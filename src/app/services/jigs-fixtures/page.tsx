import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Jigs & Fixtures Manufacturing | Shriniwas Tools",
  description: "Custom engineered workholding solutions, inspection jigs, and assembly fixtures for precision manufacturing.",
};

const data: ServiceData = {
  serviceName: "Jigs & Fixtures",
  hero: {
    title: "Custom Jigs & Fixtures",
    subtitle: "Robust, ergonomic workholding and inspection solutions designed to eliminate errors and drastically improve production throughput.",
    bgImage: "/images/hero_quality.png",
  },
  overview: {
    title: "Optimizing the Assembly Line",
    description: (
      <>
        <p className="mb-4">
          Precision manufacturing and high-speed assembly rely entirely on robust, accurate, and ergonomic workholding. Shriniwas Tools engineers custom jigs and fixtures that ensure perfect repeatability on your shop floor while reducing operator fatigue.
        </p>
        <p className="mb-4">
          From heavy-duty CNC machining fixtures holding immense clamping forces, to delicate Go/No-Go inspection gauges and poka-yoke assembly jigs, our team builds solutions that prevent human error.
        </p>
        <p>
          We integrate advanced pneumatic and hydraulic clamping systems into our fixtures for automated, one-touch part loading and unloading.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "Poka-Yoke Design", description: "Fool-proof designs that prevent incorrect part loading.", icon: "ShieldCheck" },
    { title: "Automated Clamping", description: "Pneumatic/hydraulic integration for fast loading.", icon: "Zap" },
    { title: "High Wear Resistance", description: "Hardened resting pads and locating pins.", icon: "CheckCircle2" },
    { title: "Ergonomics", description: "Lightweight aluminum frames to reduce operator fatigue.", icon: "Award" },
  ],
  industries: [
    { name: "Automotive Assembly", icon: "Car" },
    { name: "Aerospace Machining", icon: "Plane" },
    { name: "Electronics Testing", icon: "Zap" },
    { name: "Heavy Welding", icon: "Box" },
  ],
  process: [
    { title: "Process Study", step: "01", description: "Analyzing the client's assembly line." },
    { title: "3D Design", step: "02", description: "Ergonomic CAD fixture design." },
    { title: "Machining", step: "03", description: "Precision CNC milling of bases." },
    { title: "Assembly", step: "04", description: "Integrating clamps and pneumatics." },
    { title: "Calibration", step: "05", description: "CMM verification of locating points." },
  ],
  machinery: [
    {
      name: "AMS VMC Machine",
      capacity: "1300x600x600 mm",
      specs: "Large bed for fixture plates",
      applications: "Machining large base plates",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Surface Grinder",
      capacity: "600x300X300 mm",
      specs: "Micron-level flatness",
      applications: "Grinding resting pads",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "Aluminum (6061)", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Tool Steel (O1, D2)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
    { name: "Delrin / PTFE", image: "https://images.unsplash.com/photo-1580828369019-ea23709bc872?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1563906660682-1bf738f61536?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Fixture Types", value: "Machining, Welding, Assembly, Inspection" },
    { label: "Actuation", value: "Manual Toggle, Pneumatic, Hydraulic" },
    { label: "Locating Tolerance", value: "±0.005 mm" },
    { label: "Materials", value: "Mild Steel, Aluminum, Tool Steel, Delrin" },
  ],
  faqs: [
    { question: "What is a Poka-Yoke fixture?", answer: "Poka-Yoke is a Japanese term meaning 'mistake-proofing'. We design fixtures with physical barriers or specific locating pins that make it physically impossible for an operator to load the part in the wrong orientation." },
    { question: "Do you provide CMM reports for inspection jigs?", answer: "Yes, all inspection receiver gauges and jigs are delivered with a full Coordinate Measuring Machine (CMM) dimensional report to guarantee accuracy." }
  ],
  relatedServices: [
    { title: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { title: "Press Tools", href: "/services/press-tools", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "The pneumatic welding fixtures built by Shriniwas Tools cut our frame assembly time in half. Brilliant engineering.", author: "Manufacturing Engineer", company: "Heavy Machinery Corp" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

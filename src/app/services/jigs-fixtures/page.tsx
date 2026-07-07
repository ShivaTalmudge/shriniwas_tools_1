import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Jigs and Fixtures Manufacturer in Pune | Shriniwas Tools",
  description: "Leading jigs and fixtures manufacturer in Pune. We engineer custom workholding solutions, inspection gauges, and automated assembly fixtures.",
};

const data: ServiceData = {
  serviceName: "Jigs & Fixtures",
  hero: {
    title: "Jigs and Fixtures Manufacturer",
    subtitle: "Robust, ergonomic workholding and inspection solutions engineered to eliminate assembly errors and drastically improve production throughput.",
    bgImage: "/images/hero_quality.png",
  },
  overview: {
    title: "Optimizing the Assembly Line in Pune",
    description: (
      <>
        <p className="mb-4">
          Precision manufacturing and high-speed assembly rely entirely on robust, accurate, and ergonomic workholding. As a specialized <strong>jigs and fixtures manufacturer</strong> in Pune, Shriniwas Tools engineers custom solutions that ensure perfect repeatability on your shop floor while reducing operator fatigue.
        </p>
        <p className="mb-4">
          From heavy-duty CNC machining fixtures engineered to hold immense clamping forces, to delicate Go/No-Go inspection gauges and poka-yoke assembly jigs, our tooling team builds solutions that physically prevent human error during mass production.
        </p>
        <p>
          We also integrate advanced pneumatic and hydraulic clamping systems into our fixtures for automated, one-touch part loading and unloading, significantly reducing cycle times for automotive and heavy engineering clients.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Surface Grinder",
      capacity: "600x300X300 mm",
      specs: "Micron-level flatness",
      applications: "Grinding resting pads",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "Aluminum (6061)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Tool Steel (O1, D2)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Delrin / PTFE", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Fixture Types", value: "Machining, Welding, Assembly, Inspection" },
    { label: "Actuation", value: "Manual Toggle, Pneumatic, Hydraulic" },
    { label: "Locating Tolerance", value: "±0.005 mm" },
    { label: "Materials", value: "Mild Steel, Aluminum, Tool Steel, Delrin" },
  ],
  faqs: [
    { question: "What is a Poka-Yoke fixture?", answer: "Poka-Yoke is a Japanese term meaning 'mistake-proofing'. As a precision jigs and fixtures manufacturer, we design tooling with physical barriers or specific locating pins that make it physically impossible for an operator to load a part in the wrong orientation." },
    { question: "Do you provide CMM reports for inspection jigs?", answer: "Yes, all inspection receiver gauges and verification jigs we manufacture are delivered with a comprehensive Coordinate Measuring Machine (CMM) dimensional report to guarantee accuracy." },
    { question: "Can you automate the clamping process on a machining fixture?", answer: "Absolutely. We routinely integrate pneumatic cylinders or hydraulic clamping arrays into our CNC fixtures, allowing the operator to lock and unlock the workpiece with the flip of a single switch." }
  ],
  relatedServices: [
    { title: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Press Tools", href: "/services/press-tools", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "The pneumatic welding fixtures built by Shriniwas Tools cut our frame assembly time in half. Brilliant engineering.", author: "Manufacturing Engineer", company: "Heavy Machinery Corp" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC Machining Services in Pune | VMC Machining | Shriniwas Tools",
  description: "High-precision CNC and VMC machining services in Pune. We deliver complex metal and plastic components with micron-level accuracy for industrial applications.",
};

const data: ServiceData = {
  serviceName: "CNC & VMC Machining",
  hero: {
    title: "CNC Machining Services",
    subtitle: "Delivering aerospace-grade precision for complex components using advanced multi-axis VMC machining centers in Pune.",
    bgImage: "/images/hero_capabilities.png",
  },
  overview: {
    title: "Precision VMC Machining Services in Pune",
    description: (
      <>
        <p className="mb-4">
          Computer Numerical Control (CNC) and Vertical Machining Center (VMC) operations form the backbone of modern precision engineering. Shriniwas Tools operates a cutting-edge machine shop in Pune dedicated to tight-tolerance subtractive manufacturing.
        </p>
        <p className="mb-4">
          As a trusted provider of <strong>CNC machining services in Pune</strong>, our advanced multi-axis VMCs and CNC turning centers allow us to machine complex geometries out of hardened tool steels, aluminum, titanium, and engineering plastics with absolute repeatability.
        </p>
        <p>
          Whether manufacturing core inserts for injection moulds, intricate industrial components, or high-volume precision fittings, our skilled programmers and operators ensure exact compliance to your CAD models. Our <strong>VMC machining services</strong> guarantee exceptional surface finishes and dimensional accuracy for every project.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Batliboi VMC",
      capacity: "1000x500x500 mm",
      specs: "High-speed spindle for core/cavity",
      applications: "Precision 3D profiling",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "CNC Turning Center",
      capacity: "Ø250 x 500 mm",
      specs: "8-station turret, rigid tapping",
      applications: "Shafts, pins, and round inserts",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "Tool Steel (H13, P20)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Aluminum (6061, 7075)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Stainless Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Brass & Copper", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Max Workpiece Size", value: "1300 x 600 x 600 mm" },
    { label: "Spindle Speeds", value: "Up to 12,000 RPM" },
    { label: "Positional Accuracy", value: "±0.003 mm" },
    { label: "Programming", value: "Mastercam / Delcam" },
  ],
  faqs: [
    { question: "Do you provide CNC machining services in Pune?", answer: "Yes, our fully equipped tool room in Bhosari, Pune provides comprehensive CNC and VMC machining services for clients across India." },
    { question: "What is the difference between CNC and VMC?", answer: "CNC (Computer Numerical Control) is the broad term for computer-controlled machining. A VMC (Vertical Machining Center) is a specific highly accurate CNC milling machine where the spindle axis is vertically oriented." },
    { question: "Can your VMC machining services handle hardened steel?", answer: "Yes, our rigid VMCs and advanced carbide cutting tools allow us to perform hard-milling on materials up to 60 HRC, which is essential for precision mould making." },
    { question: "What software do you use for CAM programming?", answer: "Our engineers utilize industry-leading CAM software like Mastercam and Delcam to generate optimized toolpaths for complex 3D profiles." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "Jigs & Fixtures", href: "/services/jigs-fixtures", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "Shriniwas Tools handles our aerospace aluminum components with absolute precision. Their CMM inspection reports give us total confidence.", author: "Quality Director", company: "Aerospace Components LLC" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

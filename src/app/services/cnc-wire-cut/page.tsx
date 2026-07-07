import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Wire Cut EDM Services in Pune | Shriniwas Tools",
  description: "Specialized Wire Cut EDM services in Pune. We achieve micron-level precision in conductive metals and hard alloys for complex tooling.",
};

const data: ServiceData = {
  serviceName: "CNC Wire Cut EDM",
  hero: {
    title: "Wire Cut EDM Services",
    subtitle: "Achieving impossible geometries and micron-level accuracy in the hardest conductive materials using advanced Electrical Discharge Machining.",
    bgImage: "/images/hero_quality.png",
  },
  overview: {
    title: "Precision Wire Cut EDM Services in Pune",
    description: (
      <>
        <p className="mb-4">
          When traditional subtractive machining cannot achieve the required internal corners, fine details, or when the material is simply too hard to mill, <strong>Wire Cut EDM services</strong> offer the ultimate solution. 
        </p>
        <p className="mb-4">
          At Shriniwas Tools & Equipments in Pune, our wire EDM department utilizes electrically charged brass wire (as thin as 0.1mm) to slice through conductive metals via microscopic electrical sparks. This contactless cutting process means there is zero mechanical stress on the workpiece, ensuring absolute flatness and structural integrity.
        </p>
        <p>
          We employ a battery of 9 Electronica Wire Cut machines, running round-the-clock to produce highly accurate extrusion dies, punch matrices, and intricate aerospace components. Our extensive capacity ensures we can deliver fast turnarounds on critical tooling projects.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  },
  keyFeatures: [
    { title: "Zero Cutting Force", description: "No mechanical stress on fragile or thin-walled parts.", icon: "Zap" },
    { title: "Extreme Accuracy", description: "Achieving tolerances as tight as ±0.002 mm.", icon: "CheckCircle2" },
    { title: "Hardness Independent", description: "Cuts Tungsten Carbide as easily as Aluminum.", icon: "ShieldCheck" },
    { title: "Complex Tapers", description: "Multi-axis capability for complex conical shapes.", icon: "Settings" },
  ],
  industries: [
    { name: "Tool & Die Making", icon: "Settings" },
    { name: "Medical Devices", icon: "Heart" },
    { name: "Extrusion Profiles", icon: "Zap" },
    { name: "Aerospace", icon: "Plane" },
  ],
  process: [
    { step: "01", title: "CAD Import", description: "Loading precise 2D/3D profiles." },
    { step: "02", title: "Start Hole", description: "EDM drilling the wire insertion hole." },
    { step: "03", title: "Threading", description: "Passing the brass wire through the block." },
    { step: "04", title: "Spark Erosion", description: "Submerged electrical cutting." },
    { step: "05", title: "Skim Passes", description: "Fine passes for mirror finish." },
  ],
  machinery: [
    {
      name: "Electronica Wirecut (9 Machines)",
      capacity: "400x300x200 mm",
      specs: "0.1mm to 0.25mm wire, auto-threading",
      applications: "Punch matrices, complex gears",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Sparking EDM",
      capacity: "500X300X200 mm",
      specs: "Z-axis plunge EDM",
      applications: "Blind cavities, sharp internal corners",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "EDM Drill (Hole Popper)",
      capacity: "200X300 mm",
      specs: "High-speed brass tube drilling",
      applications: "Start holes in hardened steel",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "Tungsten Carbide", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Hardened Tool Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Titanium", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Max Workpiece Size", value: "400 x 300 x 200 mm" },
    { label: "Wire Diameter", value: "0.1 mm to 0.25 mm (Brass/Coated)" },
    { label: "Cutting Accuracy", value: "±0.002 mm" },
    { label: "Surface Finish (Ra)", value: "Up to 0.2 µm" },
  ],
  faqs: [
    { question: "What materials can you process with your Wire Cut EDM services?", answer: "Any material that is electrically conductive can be wire cut, regardless of its hardness. This includes mild steel, D2 tool steel, tungsten carbide, copper, and titanium." },
    { question: "What is the smallest internal corner radius possible?", answer: "The internal corner radius is dictated by the wire diameter used. Using our standard 0.25mm wire, the minimum radius is approximately 0.13mm, allowing for extremely sharp internal geometries." },
    { question: "Why choose your Wire Cut EDM services in Pune?", answer: "We operate a dedicated facility with 9 Electronica Wire Cut machines, ensuring we have the capacity to handle large-scale matrix cutting and complex tool and die making with rapid turnaround times." }
  ],
  relatedServices: [
    { title: "Press Tools", href: "/services/press-tools", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "We rely heavily on Shriniwas Tools' wire cut department for our progressive die matrices. The clearances are always flawless.", author: "Tooling Engineer", company: "Stamping Solutions Inc." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

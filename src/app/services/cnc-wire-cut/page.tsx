import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC Wire Cut EDM Services | Shriniwas Tools",
  description: "Micron-level precision CNC Wire Cut Electrical Discharge Machining for complex tool making and exotic metals.",
};

const data: ServiceData = {
  serviceName: "CNC Wire Cut EDM",
  hero: {
    title: "CNC Wire Cut EDM",
    subtitle: "Achieving impossible geometries and micron-level accuracy in the hardest conductive materials using Electrical Discharge Machining.",
    bgImage: "/images/hero_quality.png",
  },
  overview: {
    title: "Electrical Discharge Machining",
    description: (
      <>
        <p className="mb-4">
          When traditional subtractive machining cannot achieve the required internal corners, fine details, or when the material is too hard to mill, CNC Wire Cut EDM is the ultimate solution. 
        </p>
        <p className="mb-4">
          Our wire EDM department utilizes electrically charged brass wire (as thin as 0.1mm) to slice through conductive metals via microscopic electrical sparks. This completely contactless cutting process means there is zero mechanical stress on the workpiece, ensuring absolute flatness and integrity.
        </p>
        <p>
          We employ a battery of Electronica Wire Cut machines, running 24/7 to produce highly accurate extrusion dies, punch matrices, and intricate aerospace components.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=800",
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
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Sparking EDM",
      capacity: "500X300X200 mm",
      specs: "Z-axis plunge EDM",
      applications: "Blind cavities, sharp internal corners",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "EDM Drill (Hole Popper)",
      capacity: "200X300 mm",
      specs: "High-speed brass tube drilling",
      applications: "Start holes in hardened steel",
      image: "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "Tungsten Carbide", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Hardened Tool Steel", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
    { name: "Titanium", image: "https://images.unsplash.com/photo-1580828369019-ea23709bc872?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1af?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Max Workpiece Size", value: "400 x 300 x 200 mm" },
    { label: "Wire Diameter", value: "0.1 mm to 0.25 mm (Brass/Coated)" },
    { label: "Cutting Accuracy", value: "±0.002 mm" },
    { label: "Surface Finish (Ra)", value: "Up to 0.2 µm" },
  ],
  faqs: [
    { question: "What materials can be Wire Cut?", answer: "Any material that is electrically conductive can be wire cut, regardless of its hardness. This includes mild steel, tool steel, carbide, copper, and titanium." },
    { question: "What is the smallest internal corner radius possible?", answer: "The internal corner radius is dictated by the wire diameter. Using a 0.25mm wire, the minimum radius is approximately 0.13mm." }
  ],
  relatedServices: [
    { title: "Press Tools", href: "/services/press-tools", image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=400" },
    { title: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "We rely heavily on Shriniwas Tools' wire cut department for our progressive die matrices. The clearances are always flawless.", author: "Tooling Engineer", company: "Stamping Solutions Inc." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}

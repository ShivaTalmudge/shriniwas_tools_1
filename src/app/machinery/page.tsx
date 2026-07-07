import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Room Machinery & Equipment List | Shriniwas Tools Pune",
  description: "Explore our state-of-the-art tool room machinery in Pune, featuring multi-axis VMCs, 9 Wire Cut EDM machines, and precision metrology equipment.",
};

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Power, Maximize } from "lucide-react";

export default function Machinery() {
  const demoImage = "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon";

  const machines = [
    {
      name: "High-Speed VMC (BATLIBOI / AMS)",
      type: "Vertical Machining Center",
      capacity: "1300x600x600, 1000x500x500, 500x400x400 mm",
      qty: "03",
      application: "3-axis precision milling of hardened tool steel blocks for mould bases and cavities, delivering volumetric accuracy down to 5 microns.",
      image: demoImage
    },
    {
      name: "Electronica Wire Cut",
      type: "CNC Wire Cut EDM",
      capacity: "400x300x200 mm",
      qty: "09",
      application: "Micron-level slicing of intricate profiles and extrusion dies using 0.25mm brass wire, completely eliminating mechanical stress on workpieces.",
      image: demoImage
    },
    {
      name: "Plunge EDM (Sparking)",
      type: "Electrical Discharge Machining",
      capacity: "500X300X200 mm",
      qty: "01",
      application: "Precision erosion of complex blind cavities and sharp internal corners where traditional rotating cutting tools cannot reach.",
      image: demoImage
    },
    {
      name: "Jones & Shipman Grinder",
      type: "Precision Surface Grinder",
      capacity: "600x300X300 mm",
      qty: "02",
      application: "High-precision surface finishing of die plates and inserts to achieve perfect flatness and mirror-like surface textures.",
      image: demoImage
    },
    {
      name: "Bridgeport Milling",
      type: "M1TR Turret Milling",
      capacity: "350x700, 1270X254 mm",
      qty: "02",
      application: "Versatile manual milling for custom jigs, fixtures, and rapid squaring of raw material blocks prior to CNC operations.",
      image: demoImage
    },
    {
      name: "EDM Hole Popper (Taiwan)",
      type: "High-Speed EDM Drill",
      capacity: "200X300 mm",
      qty: "01",
      application: "Rapid electrical drilling of start holes in hardened tool steel blocks to facilitate subsequent wire cut operations.",
      image: demoImage
    },
    {
      name: "Haitian Injection Moulding",
      type: "Servo-Hydraulic IMM",
      capacity: "90 to 300 Tons",
      qty: "02",
      application: "High-volume mass production and rigorous in-house mould proving for automotive and consumer plastic components.",
      image: demoImage
    },
    {
      name: "Yizumi Injection Moulding",
      type: "Precision IMM",
      capacity: "120 Tons",
      qty: "01",
      application: "High-speed injection moulding specifically calibrated for small, intricate engineering plastic and electrical components.",
      image: demoImage
    }
  ];

  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_machinery.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Our Machinery & Infrastructure</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Precision requires the right tools. Our state-of-the-art, temperature-controlled facility in Pune is equipped with a formidable battery of advanced VMCs, Wire Cut EDMs, and high-tonnage moulding presses to handle the most demanding manufacturing challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {machines.map((machine, i) => (
              <div
                key={i}
                className="group border border-gray-100 rounded-3xl overflow-hidden hover:border-brand-accent transition-colors bg-white shadow-xl shadow-gray-200/50 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 bg-brand-dark text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    Qty: {machine.qty}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-1">{machine.name}</h3>
                  <p className="text-brand-accent font-medium mb-6">{machine.type}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Maximize className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Capacity</div>
                        <div className="text-brand-dark font-medium">{machine.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Application</div>
                        <div className="text-brand-dark font-medium">{machine.application}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Settings, Zap, Cpu, Maximize } from "lucide-react";

export default function Infrastructure() {
  const demoImage = "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon";

  const machines = [
    {
      name: "High-Speed VMC (BATLIBOI / AMS)",
      type: "Vertical Machining Center",
      capacity: "1300x600x600, 1000x500x500, 500x400x400 mm",
      qty: "03",
      application: "3-axis precision milling of hardened tool steel blocks for mould bases and cavities, delivering volumetric accuracy down to 5 microns.",
      image: "/company_machines/VMC1.png"
    },
    {
      name: "Electronica Wire Cut",
      type: "CNC Wire Cut EDM",
      capacity: "400x300x200 mm",
      qty: "09",
      application: "Micron-level slicing of intricate profiles and extrusion dies using 0.25mm brass wire, completely eliminating mechanical stress on workpieces.",
      image: "/company_machines/wire_cut_machine_imp1.png"
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
      image: "/company_machines/milling_machine.png"
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
      image: "/company_machines/horizonatl_injection_moulding_machine_1.png"
    },
    {
      name: "Yizumi Injection Moulding",
      type: "Precision IMM",
      capacity: "120 Tons",
      qty: "01",
      application: "High-speed injection moulding specifically calibrated for small, intricate engineering plastic and electrical components.",
      image: "/company_machines/horizontal_injection_moulding_machine.png"
    }
  ];

  return (
    <>
      {/* Infrastructure Hero */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12">
        <div className="absolute inset-0 bg-brand-primary z-0" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="/company_machines/wire_cut_floor.png"
            alt="Factory Floor"
            fill
            className="object-cover mix-blend-overlay grayscale opacity-40"
          />
        </motion.div>
        
        <div className="container relative z-20 px-4 md:px-8 text-left text-white mt-20 w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
              Our Infrastructure
            </h1>
            <div className="w-24 h-1 bg-brand-accent mb-6" />
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Explore our advanced 50,000 sq.ft manufacturing facility in Pune, powered by world-class CNC technology, temperature-controlled inspection labs, and a robust press shop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:-mt-32 relative z-30">
            {[
              { title: "Precision Tool Room", icon: <Settings className="w-8 h-8 text-white" />, desc: "High-speed 3-Axis & 4-Axis CNCs and Wire Cut EDMs for micrometer accuracy in mould and die making." },
              { title: "Moulding & Press Shop", icon: <Building2 className="w-8 h-8 text-white" />, desc: "Fully automated injection and compression moulding presses ranging from 50T to 300T for mass production." },
              { title: "Metrology & QA Lab", icon: <Zap className="w-8 h-8 text-white" />, desc: "Advanced CMM, VMM and surface testing equipment housed in a strictly temperature-controlled environment." }
            ].map((facility, i) => (
              <div
                key={i}
                className="bg-brand-dark p-8 rounded-2xl shadow-2xl text-white group hover:bg-brand-primary transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${400 + i * 100}ms`, animationFillMode: "both" }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                <p className="text-gray-400 group-hover:text-blue-100 transition-colors leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-2">Shop Floor Excellence</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Optimized Layout</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our Pune manufacturing facility is designed entirely around lean manufacturing principles. Material flows seamlessly from raw tool steel storage, through the high-speed CNC machining centers, and directly into the QA inspection lab without bottlenecks.
              </p>
              <ul className="space-y-4">
                {[
                  "Optimized Material Flow (Lean Layout)",
                  "Climate Controlled CMM Room",
                  "Dedicated Assembly & Trials Area",
                  "Overhead EOT Cranes (Up to 15 Tons)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                    <span className="font-medium text-brand-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              {/* Abstract Blueprint / Floor Plan Graphic */}
              <div className="aspect-[4/3] bg-brand-primary rounded-3xl p-8 relative shadow-2xl overflow-hidden border-4 border-white transition-transform hover:scale-[1.02] duration-500">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 w-full h-full border-2 border-dashed border-white/50 rounded-xl flex items-center justify-center flex-col">
                   <Building2 className="w-16 h-16 text-white/50 mb-4" />
                   <p className="text-white/70 font-mono text-center max-w-xs">Virtual Factory Tour Integration Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merged Machinery Section */}
      <section className="py-20 bg-white" id="machinery">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Equipment List</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Our Machinery</h3>
            <p className="text-gray-600 text-lg">A formidable battery of advanced VMCs, Wire Cut EDMs, and high-tonnage moulding presses to handle the most demanding manufacturing challenges.</p>
          </div>
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

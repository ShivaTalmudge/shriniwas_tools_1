"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Settings, Zap } from "lucide-react";

export default function Infrastructure() {
  return (
    <>
      {/* Infrastructure Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary z-0" />
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src="https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
            alt="Factory Floor"
            fill
            className="object-cover mix-blend-overlay grayscale"
          />
        </motion.div>
        
        <div className="container relative z-20 px-4 md:px-8 text-center text-white mt-20">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-widest mb-6">
              Our Infrastructure
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-xl max-w-3xl mx-auto font-light text-blue-100 leading-relaxed">
              Explore our advanced 50,000 sq.ft manufacturing facility in Pune, powered by world-class CNC technology, temperature-controlled inspection labs, and a robust press shop.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
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

      {/* 3D Factory Layout Placeholder */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-2">Shop Floor Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Optimized Layout</h3>
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
    </>
  );
}

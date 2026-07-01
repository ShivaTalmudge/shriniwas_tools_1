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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
            alt="Factory Floor"
            fill
            className="object-cover mix-blend-overlay grayscale"
          />
        </motion.div>
        
        <div className="container relative z-20 px-4 md:px-8 text-center text-white mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold uppercase tracking-widest mb-6">
              Infrastructure
            </h1>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-xl max-w-2xl mx-auto font-light text-blue-100">
              50,000 sq.ft of advanced manufacturing capability powered by global technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-30">
            {[
              { title: "Tool Room", icon: <Settings className="w-8 h-8 text-white" />, desc: "High-speed CNCs and VMCs for micrometer accuracy tooling." },
              { title: "Moulding Shop", icon: <Building2 className="w-8 h-8 text-white" />, desc: "Fully automated injection moulding machines ranging from 50T to 800T." },
              { title: "Inspection Lab", icon: <Zap className="w-8 h-8 text-white" />, desc: "CMM, VMM and metallurgical testing equipment in a temperature-controlled environment." }
            ].map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="bg-brand-dark p-8 rounded-2xl shadow-2xl text-white group hover:bg-brand-primary transition-colors"
              >
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{facility.title}</h3>
                <p className="text-gray-400 group-hover:text-blue-100 transition-colors">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Factory Layout Placeholder */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-2">Virtual Tour</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Interactive Floor Plan</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our shop floor is designed for lean manufacturing. Material flows seamlessly from raw steel storage, through the CNC machining centers, and directly into the QA inspection lab.
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
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] bg-brand-primary rounded-3xl p-8 relative shadow-2xl overflow-hidden border-4 border-white"
              >
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="relative z-10 w-full h-full border-2 border-dashed border-white/50 rounded-xl flex items-center justify-center flex-col">
                   <Building2 className="w-16 h-16 text-white/50 mb-4" />
                   <p className="text-white/70 font-mono text-center max-w-xs">3D Factory Walkthrough Component will be initialized here in Phase 4</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

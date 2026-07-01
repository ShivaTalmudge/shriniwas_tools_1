"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Activity, Ruler } from "lucide-react";

export default function Quality() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_quality.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Zero Defect Policy</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Our commitment to quality is absolute. Through stringent metrology and ISO certified processes, we guarantee precision down to the last micron.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">ISO 9001:2015 Certified</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Quality is not just a department at Shriniwas Tools; it is ingrained in our culture. Every component that leaves our facility undergoes a rigorous multi-stage inspection process.
              </p>
              
              <ul className="space-y-4">
                {[
                  "In-process inspection at every machining stage",
                  "100% Final Inspection before dispatch",
                  "Material traceability and certification",
                  "Regular calibration of all testing instruments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
                <Ruler className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="font-bold text-brand-dark">CMM Inspection</h4>
                <p className="text-sm text-gray-500 mt-2">Zeiss Coordinate Measuring Machine</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center mt-8">
                <Activity className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="font-bold text-brand-dark">Surface Finish</h4>
                <p className="text-sm text-gray-500 mt-2">Mitutoyo Surface Roughness Testers</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

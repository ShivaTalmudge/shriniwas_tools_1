import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance & ISO 9001:2015 | Shriniwas Tools Pune",
  description: "Explore our stringent quality control processes. As an ISO 9001:2015 certified manufacturer in Pune, we guarantee zero-defect precision tooling and components.",
};

import { motion } from "framer-motion";
import { CheckCircle2, Activity, Ruler } from "lucide-react";

export default function Quality() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed" 
          style={{ backgroundImage: 'url(/company_machines/bannerimage2.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left mt-10 w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">Zero Defect Policy</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
              Our commitment to manufacturing excellence is absolute. Through stringent metrology and strictly governed ISO 9001:2015 processes, we guarantee dimensional accuracy down to the last micron.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-6">ISO 9001:2015 Certified</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At Shriniwas Tools & Equipments, quality assurance is deeply ingrained into every stage of our production cycle. Operating out of our Pune facility, our dedicated quality control department ensures that every tool, die, and component strictly adheres to international manufacturing standards.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Rigorous in-process inspection at every machining stage",
                  "100% Final Inspection before any dispatch",
                  "Complete material traceability and authentic certification",
                  "Scheduled periodic calibration of all testing instruments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                     <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center animate-in zoom-in-95 duration-500 hover:-translate-y-1 transition-transform">
                <Ruler className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="font-bold text-brand-dark">CMM Inspection</h4>
                <p className="text-sm text-gray-500 mt-2">Zeiss Coordinate Measuring Machine</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center mt-8 animate-in zoom-in-95 duration-500 delay-150 hover:-translate-y-1 transition-transform">
                <Activity className="w-10 h-10 text-brand-accent mb-4" />
                <h4 className="font-bold text-brand-dark">Surface Finish</h4>
                <p className="text-sm text-gray-500 mt-2">Mitutoyo Surface Roughness Testers</p>
              </div>
            </div>
          </div>

          {/* Testing Equipment */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Advanced Metrology & Testing Lab</h3>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Our quality control lab is equipped with precision instruments to measure tolerances down to 0.001mm.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  "Digital Vernier Calipers (Mitutoyo)",
                  "Digital Micrometers (Mitutoyo)",
                  "Digital Height Gauges",
                  "Slip Gauge Blocks (Grade 0)",
                  "Dial Indicators & Bore Gauges",
                  "Surface Roughness Testers",
                  "Hardness Testing Machine",
                  "Profile Projector"
                ].map((equip, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                    <span className="text-sm font-medium text-gray-200">{equip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

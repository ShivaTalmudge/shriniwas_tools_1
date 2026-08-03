"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShieldCheck, CheckCircle2, PhoneCall, Target, FileSearch, ShieldAlert, Users, PenTool, CheckSquare, Search, Truck } from "lucide-react";

export default function QualityAssurance() {
  return (
    <div className="bg-white min-h-screen text-brand-dark">
      {/* Quality Hero (Dark Mode Enterprise) */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/metrology_cmm.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container relative z-20 px-4 md:px-8 text-left mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Quality Assurance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-white mb-8 leading-tight tracking-tight">
              Precision You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-500">Measure.</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-3xl">
              For us, quality isn&apos;t a department. It is the fundamental architecture of our manufacturing process—guaranteed through strict ISO standards and cutting-edge metrology.
            </p>

            {/* Hero KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.8<span className="text-brand-accent">%</span></div>
                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">&lt;1<span className="text-brand-accent">%</span></div>
                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Rework Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">±0.01<span className="text-brand-accent">mm</span></div>
                <div className="text-sm uppercase tracking-widest text-gray-500 font-bold">Micron Tolerances</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formal Quality Policy & Certification */}
      <section className="py-20 md:py-32 relative bg-white">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            
            {/* Policy Statement */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-brand-accent"></div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark tracking-tight">Official Quality Policy</h2>
              </div>
              
              <div className="bg-brand-light/50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-dark/5 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-accent to-orange-600 group-hover:w-3 transition-all duration-500" />
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-8" />
                
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light italic mb-8">
                  &quot;Shriniwas Tools &amp; Equipments is committed to achieving total customer satisfaction by delivering precision-engineered dies, moulds, and components of the highest quality, exactly on time. We achieve this through rigorous adherence to ISO 9001:2015 standards, continuous technological upgrades, and the fostering of a zero-defect culture among all employees.&quot;
                </p>
                
                <div className="border-t border-gray-200 pt-8 flex items-center justify-between">
                  <div>
                    <h4 className="text-brand-dark font-bold text-lg">Management Team</h4>
                    <p className="text-brand-primary text-sm uppercase tracking-widest font-bold">Shriniwas Tools & Equipments</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm mb-1 font-bold">Certified for</p>
                    <p className="text-brand-dark font-mono font-medium">Manufacture of Dies & Moulds</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ISO Certificate */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl shadow-2xl border-8 border-white overflow-hidden group">
                <Image 
                  src="/iso-9001-2015-certificate.png" 
                  alt="ISO 9001:2015 Certificate" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-black/5 z-10 pointer-events-none rounded-sm" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Visual QA Workflow (Timeline) */}
      <section className="py-20 md:py-32 bg-brand-light border-y border-gray-200 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">The QA Pipeline</h2>
            <p className="text-gray-600 text-lg">Quality isn&apos;t a final check—it&apos;s an interconnected process. Every part moves through our 4-stage pipeline before it ever reaches you.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-300 hidden lg:block" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              
              {/* Stage 1 */}
              <div className="relative group">
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:border-brand-accent transition-colors duration-500 relative z-10 shadow-sm">
                  <PenTool className="w-10 h-10 text-gray-400 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center lg:text-left">1. Raw Material</h3>
                <p className="text-gray-600 text-center lg:text-left leading-relaxed">
                  Incoming steel and alloys are checked against detailed Material Test Reports (MTRs) to verify chemical composition and hardness before cutting begins.
                </p>
              </div>

              {/* Stage 2 */}
              <div className="relative group">
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:border-brand-accent transition-colors duration-500 relative z-10 shadow-sm">
                  <Search className="w-10 h-10 text-gray-400 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center lg:text-left">2. In-Process</h3>
                <p className="text-gray-600 text-center lg:text-left leading-relaxed">
                  Machine operators perform first-off inspections and routine interval checks at the machine to ensure tool wear doesn&apos;t affect tolerances.
                </p>
              </div>

              {/* Stage 3 */}
              <div className="relative group">
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-brand-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/20 relative z-10 group-hover:scale-105 transition-transform duration-300">
                  <CheckSquare className="w-10 h-10 text-brand-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center lg:text-left">3. Final Metrology</h3>
                <p className="text-gray-600 text-center lg:text-left leading-relaxed">
                  Completed components are brought to our temperature-controlled inspection lab for rigorous dimensional verification using advanced gauges and surface plates.
                </p>
              </div>

              {/* Stage 4 */}
              <div className="relative group">
                <div className="w-24 h-24 mx-auto lg:mx-0 bg-white border-4 border-gray-200 rounded-2xl flex items-center justify-center mb-8 group-hover:border-brand-accent transition-colors duration-500 relative z-10 shadow-sm">
                  <Truck className="w-10 h-10 text-gray-400 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center lg:text-left">4. Dispatch</h3>
                <p className="text-gray-600 text-center lg:text-left leading-relaxed">
                  Final sign-off by the Quality Head. Components are securely packaged with their dimensional reports, guaranteeing 100% traceability upon delivery.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Advanced Metrology Section (Images) */}
      <section className="py-20 md:py-32 relative bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-5/12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8">Advanced Metrology</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <Target className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Micron-Level Precision</h4>
                    <p className="text-gray-600 leading-relaxed">Our advanced inspection lab ensures tolerances are met down to ±0.01mm, guaranteeing perfect fitment for complex assemblies.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <ShieldAlert className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Zero Defect Policy</h4>
                    <p className="text-gray-600 leading-relaxed">We employ rigorous in-process checks and continuous improvement methodologies to strive for a 0 PPM rejection rate.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <Users className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-dark mb-2">Expert QA Team</h4>
                    <p className="text-gray-600 leading-relaxed">Our dedicated Quality Inspectors undergo regular training to stay updated with the latest metrology standards and equipment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 grid grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-4 pt-12 md:pt-24">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-gray-100">
                  <Image src="/metrology_vernier.png" alt="Vernier Measurement" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-sm tracking-widest uppercase">Precision Checking</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-gray-100">
                  <Image src="/metrology_cmm.png" alt="CMM Inspection" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-sm tracking-widest uppercase">Advanced CMM</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Light Mode Inspection Capability Table */}
      <section className="py-20 md:py-32 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Inspection Instrument List</h2>
            <p className="text-gray-600 text-lg">The tools we use to guarantee every micron.</p>
          </div>
          
          <div className="overflow-x-auto max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-dark text-white border-b border-brand-dark">
                  <th className="py-6 px-8 font-bold uppercase tracking-widest text-xs">Instrument</th>
                  <th className="py-6 px-8 font-bold uppercase tracking-widest text-xs text-center">Range (mm)</th>
                  <th className="py-6 px-8 font-bold uppercase tracking-widest text-xs text-center">Least Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Digital Vernier Caliper", range: "0-250", count: "0.01" },
                  { name: "Outside Micrometer", range: "50-150", count: "0.01" },
                  { name: "Bore Gauge", range: "50x150", count: "0.01" },
                  { name: "Height Gauge", range: "0-600", count: "0.01" },
                  { name: "Surface Plate", range: "600x400", count: "—" },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                    <td className="py-5 px-8 font-bold text-brand-dark flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center border border-gray-200 group-hover:border-brand-accent group-hover:bg-brand-accent/20 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      </div>
                      {item.name}
                    </td>
                    <td className="py-5 px-8 text-center">
                      <span className="bg-gray-50 text-gray-600 border border-gray-200 font-mono text-sm px-4 py-1.5 rounded-lg group-hover:border-brand-accent/30 transition-colors">{item.range}</span>
                    </td>
                    <td className="py-5 px-8 text-center">
                      <span className="font-mono text-sm text-brand-primary font-bold bg-brand-primary/10 px-4 py-1.5 rounded-lg">{item.count}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      <section className="py-8 bg-gray-50 border-t border-gray-100 mt-12">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-lg font-heading font-bold text-brand-dark">Looking for a supplier with zero-defect commitment?</p>
          <Link href="/contact" className="px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md">
            Talk to QA
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Factory, ArrowRight } from "lucide-react";

export default function Infrastructure() {
  return (
    <>
      {/* Infrastructure Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/wire_cut_floor.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container relative z-20 px-4 md:px-8 text-left text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Infrastructure</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Our Infrastructure & Machinery
            </h1>
            <div className="w-24 h-1 bg-brand-accent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Our shop floor is built to keep a job moving from wire cut to VMC to mould assembly without losing accuracy at any handoff. Here&apos;s exactly what we run.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Machinery Grid Redesign */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Manufacturing Capability</h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">Our shop floor is equipped with high-end, precision machinery to handle everything from initial milling to micro-level sparking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "VMC Machine", make: "Batili Boi / AMS", capacity: "1300x600, 1000x500", qty: "3", img: "/company_machines/VMC1.png" },
              { name: "CNC Wire Cut", make: "Electronica", capacity: "400x300x200", qty: "9", img: "/company_machines/wire_cut.png" },
              { name: "Sparking (EDM)", make: "Electronica", capacity: "500x300x200", qty: "1", img: "/company_machines/edm_sparking.png" },
              { name: "Surface Grinder", make: "Jones-Shipman", capacity: "600x300x300", qty: "2", img: "/company_machines/surface_grinder.png" },
              { name: "M1TR Milling", make: "Bridgeport / Jasjit", capacity: "350x700", qty: "2", img: "/company_machines/m1tr_milling.png" },
              { name: "Milling Machine", make: "Varnier", capacity: "1000x400x800", qty: "1", img: "/company_machines/milling_machine.png" },
              { name: "EDM Drill", make: "Taiwan", capacity: "200x300", qty: "1", img: "/company_machines/edm_drill.png" },
              { name: "Moulding M/C", make: "Preet", capacity: "300 Ton", qty: "1", img: "/company_machines/horizontal_injection_moulding_machine.png" },
              { name: "Moulding M/C", make: "Preet", capacity: "150 Ton", qty: "1", img: "/company_machines/horizonatl_injection_moulding_machine_1.png" },
              { name: "Moulding M/C", make: "Yuzumi", capacity: "120 Ton", qty: "1", img: "/company_machines/yuzumi_moulding.png" },
            ].map((machine, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image src={machine.img} alt={machine.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    QTY: {machine.qty}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">{machine.name}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-brand-light/50 p-4 rounded-xl border border-gray-50">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Make</p>
                      <p className="text-sm font-medium text-brand-dark line-clamp-1">{machine.make}</p>
                    </div>
                    <div className="bg-brand-light/50 p-4 rounded-xl border border-gray-50">
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Capacity</p>
                      <p className="text-sm font-mono font-medium text-brand-dark line-clamp-1">{machine.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Capability & Workforce Tables */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Inspection */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-2">Inspection Capability</h2>
                <div className="w-16 h-1 bg-brand-accent"></div>
              </div>
              <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Instrument</th>
                      <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Range</th>
                      <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Least Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Digital Vernier Caliper</td>
                      <td className="py-4 px-6 text-gray-600">0-250</td>
                      <td className="py-4 px-6 text-gray-600">0.01</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                      <td className="py-4 px-6 font-bold text-brand-dark">Outside Micrometer</td>
                      <td className="py-4 px-6 text-gray-600">50-150</td>
                      <td className="py-4 px-6 text-gray-600">0.01</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Bore Gauge</td>
                      <td className="py-4 px-6 text-gray-600">50 x 150</td>
                      <td className="py-4 px-6 text-gray-600">0.01</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                      <td className="py-4 px-6 font-bold text-brand-dark">Height Gauge</td>
                      <td className="py-4 px-6 text-gray-600">0-600</td>
                      <td className="py-4 px-6 text-gray-600">0.01</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Surface Plate</td>
                      <td className="py-4 px-6 text-gray-600">600 x 400</td>
                      <td className="py-4 px-6 text-gray-600">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Workforce */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-heading font-bold text-brand-dark mb-2">Workforce</h2>
                <div className="w-16 h-1 bg-brand-accent"></div>
              </div>
              <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-brand-dark text-white">
                      <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm">Category</th>
                      <th className="py-4 px-6 font-bold uppercase tracking-wider text-sm text-center">Strength</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Production Supervisor</td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-center">2</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                      <td className="py-4 px-6 font-bold text-brand-dark">Quality Inspector</td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-center">2</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Skilled Operator</td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-center">4</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                      <td className="py-4 px-6 font-bold text-brand-dark">Semi-Skilled</td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-center">2</td>
                    </tr>
                    <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default bg-white">
                      <td className="py-4 px-6 font-bold text-brand-dark">Helpers</td>
                      <td className="py-4 px-6 font-bold text-brand-primary text-center">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Plant Layout Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto p-10 bg-brand-dark text-white rounded-2xl shadow-xl relative overflow-hidden border-b-4 border-brand-accent">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
               <Factory className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-heading font-bold text-brand-accent mb-4">Plant Layout</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Our facility is laid out with wire cut and EDM stations on one side, VMC and milling on the other, and a dedicated mould assembly and inspection area in between — minimizing part movement between processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-light border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Have a spec that needs this kind of capacity?</h2>
          <div className="mt-10 flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-brand-accent to-orange-500 hover:brightness-110 text-white font-bold rounded-full transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-brand-accent/40 uppercase tracking-wider text-sm group">
              Get a Quote <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

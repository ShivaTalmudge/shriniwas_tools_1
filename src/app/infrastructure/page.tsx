"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Factory } from "lucide-react";

export default function Infrastructure() {
  return (
    <>
      {/* Infrastructure Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden pt-[160px] pb-8 md:pt-[180px] md:pb-12 bg-brand-dark">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: 'url(/company_machines/wire_cut_floor.png)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50 z-10" />
        </div>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-6 leading-tight tracking-tight">
              Our Infrastructure & Machinery
            </h1>
            <div className="w-24 h-1 bg-brand-accent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Our shop floor is built to keep a job moving from wire cut to VMC to mould assembly without losing accuracy at any handoff. Here&apos;s exactly what we run.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Capability Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-2">Manufacturing Capability</h2>
            <div className="w-16 h-1 bg-brand-accent"></div>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Photo</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Machine</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Make</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm text-center">Capacity</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm text-center">Qty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-white">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/VMC1.png" alt="VMC machine, Batili Boi, 1300x600x600 at Shriniwas Tools Bhosari facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">VMC Machine</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Batili Boi / AMS</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">1300x600, 1000x500</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">3</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/wire_cut.png" alt="CNC Wire Cut machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">CNC Wire Cut</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Electronica</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">400x300x200</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">9</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-white">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/edm_sparking.png" alt="Sparking EDM machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Sparking (EDM)</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Electronica</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">500x300x200</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/surface_grinder.png" alt="Surface Grinder at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Surface Grinder</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Jones-Shipman</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">600x300x300</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">2</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-white">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/m1tr_milling.png" alt="M1TR Milling machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">M1TR</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Bridgeport / Jasjit</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">350x700, 1270x254</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">2</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/milling_machine.png" alt="Milling Machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Milling Machine</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Varnier</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">1000x400x800</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-white">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/edm_drill.png" alt="EDM Drill at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">EDM Drill</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Taiwan</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">200x300</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/horizontal_injection_moulding_machine.png" alt="Moulding Machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Moulding M/C</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Preet</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">300 Ton</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-white">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/horizonatl_injection_moulding_machine_1.png" alt="Moulding Machine at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Moulding M/C</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Preet</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">150 Ton</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
                <tr className="hover:bg-brand-light/80 hover:-translate-y-0.5 transition-all duration-300 group shadow-sm hover:shadow-md cursor-default bg-gray-50/50">
                  <td className="py-4 px-6">
                    <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-gray-200 group-hover:border-brand-accent/50 transition-colors shadow-inner">
                      <Image src="/company_machines/yuzumi_moulding.png" alt="Yuzumi 120T Moulding M/C at Shriniwas Tools facility" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-brand-dark group-hover:text-brand-primary transition-colors">Moulding M/C</td>
                  <td className="py-4 px-6 text-gray-600 font-medium">Yuzumi</td>
                  <td className="py-4 px-6 text-gray-600 text-center font-mono text-sm">
                    <span className="bg-gray-100 px-2 py-1 rounded">120 Ton</span>
                  </td>
                  <td className="py-4 px-6 font-black text-brand-primary text-center text-lg">1</td>
                </tr>
              </tbody>
            </table>
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
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Have a spec that needs this kind of capacity?</h2>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider text-sm text-center">
              Get a Quote <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

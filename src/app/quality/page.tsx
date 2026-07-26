"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";

export default function QualityAssurance() {
  return (
    <>
      {/* Quality Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12 bg-brand-dark">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: 'url(/company_machines/surface_plate.jpg)' }}>
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
              <span className="text-white">Quality Assurance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white mb-6 leading-tight tracking-tight">
              Quality Assurance
            </h1>
            <div className="w-24 h-1 bg-brand-accent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Quality isn&apos;t a final check for us — it&apos;s built into every stage, from design sign-off to the last inspection before a part leaves our shop floor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certification & Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Certification</h2>
                <div className="p-8 bg-brand-light rounded-2xl border border-gray-200 flex items-start gap-4">
                  <ShieldCheck className="w-10 h-10 text-brand-accent shrink-0" />
                  <p className="text-gray-700 leading-relaxed text-lg font-medium">
                    We are <strong className="text-brand-dark">ISO 9001:2015 certified</strong> (Certificate No. 305022091354Q, issued by QRO Certification LLP) for the manufacture of dies, moulds and moulded products.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Our Inspection Process</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every component is checked using calibrated digital vernier calipers, outside micrometers, bore gauges, height gauges, and surface plates before it leaves our facility. Our QA team, led by our Quality Head, signs off at critical stages during production — not just at final inspection — so issues get caught while they&apos;re still cheap to fix.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 flex justify-center lg:justify-end"
            >
              {/* ISO Certificate Placeholder */}
              <div className="relative w-full max-w-md aspect-[3/4] bg-gray-200 rounded-2xl shadow-2xl border-2 border-dashed border-gray-400 overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                <span className="text-gray-500 font-bold uppercase tracking-widest text-lg">[PLACEHOLDER: Add iso-9001-2015-certificate.png here in full readable size]</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Inspection Capability Table */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Inspection Capability</h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
          </div>
          
          <div className="overflow-x-auto max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Instrument</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Range</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-sm">Least Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-brand-dark flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Digital Vernier Caliper
                  </td>
                  <td className="py-4 px-6 text-gray-600">0-250</td>
                  <td className="py-4 px-6 text-gray-600">0.01</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-brand-dark flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Outside Micrometer
                  </td>
                  <td className="py-4 px-6 text-gray-600">50-150</td>
                  <td className="py-4 px-6 text-gray-600">0.01</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-brand-dark flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Bore Gauge
                  </td>
                  <td className="py-4 px-6 text-gray-600">50 x 150</td>
                  <td className="py-4 px-6 text-gray-600">0.01</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-6 font-medium text-brand-dark flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Height Gauge
                  </td>
                  <td className="py-4 px-6 text-gray-600">0-600</td>
                  <td className="py-4 px-6 text-gray-600">0.01</td>
                </tr>
                <tr className="hover:bg-brand-light/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-brand-dark flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent" /> Surface Plate
                  </td>
                  <td className="py-4 px-6 text-gray-600">600 x 400</td>
                  <td className="py-4 px-6 text-gray-600">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Questions about our quality process?</h2>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider text-sm text-center">
              Talk to Our QA Team <PhoneCall className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

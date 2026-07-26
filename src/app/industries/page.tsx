"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Car, Zap, Settings, Plane, ChevronRight, PhoneCall, CheckCircle2 } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: <Car className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Dashboards, brackets, under-hood components",
    details: "We supply high-precision plastic injection moulds and press tools for critical automotive components. Our tooling ensures consistent dimensional stability required by Tier-1 OEM suppliers."
  },
  {
    title: "Electrical & Switchgear",
    icon: <Zap className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "DMC insulators, contact housings",
    details: "Expertise in manufacturing heavy-duty DMC and Bakelite compression moulds for high-voltage applications where dielectric strength and thermal resistance are paramount."
  },
  {
    title: "Heavy Engineering",
    icon: <Settings className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Gears, custom fixtures, heavy machinery parts",
    details: "Manufacturing robust and durable components that can withstand extreme industrial environments and heavy mechanical loads."
  },
  {
    title: "Aerospace & Defense",
    icon: <Plane className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "High-tolerance CNC milled components",
    details: "Aerospace-grade multi-axis precision machining. Our advanced tool room consistently holds tolerances down to ±0.005mm for complex industrial geometries."
  }
];

export default function Industries() {
  return (
    <>
      {/* High-Impact Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[70vh] flex flex-col lg:flex-row items-stretch overflow-hidden pt-[100px] md:pt-[120px] bg-brand-dark">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex items-center relative z-10 order-2 lg:order-1 bg-brand-dark lg:bg-transparent">
          <div className="w-full max-w-3xl ml-auto px-4 md:px-8 py-16 lg:py-24 xl:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Industries</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                Industries We Serve
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Different sectors have different tolerance thresholds and material requirements. We have the machinery and experience to meet them.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative min-h-[35vh] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/company_machines/wire_machines_room.png)' }}
          >
            {/* Soft gradient fade into the image from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            {/* Soft gradient fade into the image from the bottom on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28 bg-brand-light relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-accent/50 group h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all duration-500 shadow-inner">
                  {ind.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-2 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {ind.title}
                </h3>
                
                <p className="text-brand-accent font-medium mb-4">{ind.desc}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {ind.details}
                </p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted By</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder icons since we don't have logos yet */}
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> Industry Leaders</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> OEM Partners</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> Global Brands</div>
          </div>
          
          {/* [Client names/logos to be added here once permission is confirmed: Welmade Locking Systems, Chemische Global, Flowair, Jayashree, Pioneer CAD & Engineering] */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">Looking for a manufacturing partner?</h2>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl uppercase tracking-wider text-sm text-center">
              Get in Touch <PhoneCall className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

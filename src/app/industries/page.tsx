"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Car, Zap, Settings, Plane, ChevronRight, PhoneCall, CheckCircle2, Tractor, Heart, Smartphone, Package } from "lucide-react";

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
    title: "Agriculture & Farming",
    icon: <Tractor className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Tractor components, irrigation systems",
    details: "Robust tooling and heavy engineering components designed to withstand the harsh, demanding environments of modern agricultural machinery and irrigation infrastructure."
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
  },
  {
    title: "Medical Devices",
    icon: <Heart className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Surgical instruments, diagnostic housings",
    details: "Clean-room compatible molds and burr-free precision components manufactured to the strict hygienic and dimensional standards of the medical industry."
  },
  {
    title: "Consumer Electronics",
    icon: <Smartphone className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Smart device enclosures, structural bezels",
    details: "High-cavitation, rapid-cycle injection molds for flawless surface finishes and complex geometries required by modern consumer electronics."
  },
  {
    title: "Packaging",
    icon: <Package className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Caps, closures, thin-wall containers",
    details: "High-speed, multi-cavity injection molds designed for maximum productivity and consistent wall thickness in FMCG packaging."
  }
];

export default function Industries() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/wire_machines_room.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold drop-shadow-md">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Industries</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                Industries We Serve
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
                Delivering high-precision engineering and custom manufacturing solutions tailored to the stringent demands of global sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES GRID SECTION */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Sector Expertise
            </h2>
            <p className="text-lg text-gray-600">
              From robust agricultural machinery to delicate medical devices, our advanced tool room provides precision tooling across every major industrial vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-accent/50 hover:-translate-y-2 group flex flex-col h-full text-center items-center"
              >
                <div className="w-20 h-20 bg-brand-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all duration-500 shadow-inner">
                  {ind.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {ind.title}
                </h3>
                
                <p className="text-brand-accent font-semibold mb-4 text-sm uppercase tracking-wide">{ind.desc}</p>
                
                <p className="text-gray-600 leading-relaxed flex-grow text-sm">
                  {ind.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUSTED BY SECTION */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl font-heading font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted By</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> Industry Leaders</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> OEM Partners</div>
            <div className="text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-6 h-6" /> Global Brands</div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-4xl font-heading font-black mb-8 tracking-tight">
            Ready to Build for Your Industry?
          </h2>
          <p className="text-xl md:text-2xl text-brand-light/90 mb-12 max-w-3xl mx-auto font-light">
            Contact us today for a technical consultation tailored to your sector's requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/quote" className="w-full sm:w-auto px-12 py-5 bg-white text-brand-primary font-black rounded-full hover:bg-gray-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 uppercase tracking-widest text-lg">
              Request a Quote
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-brand-dark/30 backdrop-blur-md border border-white/20 text-white font-black rounded-full hover:bg-brand-dark/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-widest text-lg">
              <PhoneCall className="w-6 h-6" /> Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

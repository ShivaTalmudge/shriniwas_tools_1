"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, PhoneCall, Factory, ShieldCheck, Calendar, Zap, LayoutDashboard, Settings } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Unified Hero Section */}
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
                <span className="text-white">About Us</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                Our Company Profile
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Reliable and cost-effective manufacturing solutions for the global market, backed by ISO 9001:2015 certification.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative min-h-[35vh] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/company_machines/milling_machine.png)' }}
          >
            {/* Soft gradient fade into the image from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            {/* Soft gradient fade into the image from the bottom on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden relative border-[12px] border-brand-light shadow-2xl">
                <Image
                  src="/images/hero/hero_about.png"
                  alt="Factory Hero Photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 md:bottom-10 md:right-10 bg-brand-accent p-4 md:p-6 rounded-2xl shadow-xl text-white w-48 sm:w-auto sm:max-w-xs z-10">
                <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-1">Since 2006</div>
                <div className="text-xs sm:text-sm font-medium">Of Manufacturing Excellence</div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 tracking-tight">Our Story</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>
                  Shriniwas Tools & Equipments started in 2006 in Bhosari, Pune, developing and manufacturing thermoplastic and thermoset component moulds, moulded parts, jigs, fixtures, and engineering job work to customer specification. 
                </p>
                <p>
                  In 2014, the company was restructured under a new partnership, and by 2018 had partnered with Priya Industries and expanded to 2 VMCs and a drilling machine — the beginning of the tool room you see today.
                </p>
                <p>
                  That expansion continued steadily: a 3rd VMC in early 2019, a 4th by October 2019, EDM and a surface grinder added in 2020, and ISO 9001:2015 certification the same year. Today we run 9 CNC wire cut machines, 3 VMCs, and a full mould assembly and inspection line — all added because clients kept coming back for more work, not because of a marketing plan.
                </p>
              </div>

              <div className="p-8 bg-brand-light rounded-2xl border border-gray-200">
                <h3 className="font-bold text-xl mb-3 tracking-tight text-brand-dark">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  &quot;To provide reliable and cost-effective manufacturing solutions for the global market.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers Section */}
      <section className="py-16 bg-brand-dark relative border-t-4 border-brand-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">Since 2006</h3>
              <p className="text-gray-400 font-medium">Manufacturing Excellence</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">9 Machines</h3>
              <p className="text-gray-400 font-medium">CNC Wire Cut Setup</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">3 VMCs</h3>
              <p className="text-gray-400 font-medium">High-Speed Machining</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 mx-auto bg-brand-accent/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">ISO 9001</h3>
              <p className="text-gray-400 font-medium">2015 Certified</p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">Leadership & Team</h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto italic mb-8">
              It&apos;s a flat structure by design — a design query or a tolerance question goes straight to the person who can answer it.
            </p>
            {/* Team Photo Placeholder */}
            <div className="max-w-4xl mx-auto bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl h-64 flex items-center justify-center mb-12">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-lg">[PLACEHOLDER: Add real team photo here]</span>
            </div>
          </div>

          <div className="max-w-5xl mx-auto flex flex-col items-center mt-8">
            {/* Director Node */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-brand-primary rounded-2xl shadow-xl p-6 text-center w-72 relative z-10"
            >
              <div className="bg-brand-primary text-white py-2 px-6 rounded-lg font-bold text-lg mb-4 -mt-11 mx-auto w-max shadow-md uppercase tracking-wider">
                Director
              </div>
              <h3 className="font-heading font-black text-2xl text-brand-dark">Nagendra Sheregar</h3>
            </motion.div>

            {/* Desktop Connecting Lines */}
            <div className="relative w-full hidden md:block h-16">
              <div className="absolute left-1/2 top-0 w-[2px] h-1/2 bg-brand-primary/30 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-brand-primary/30"></div>
              <div className="absolute top-1/2 left-[12.5%] w-[2px] h-1/2 bg-brand-primary/30 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-[37.5%] w-[2px] h-1/2 bg-brand-primary/30 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-[62.5%] w-[2px] h-1/2 bg-brand-primary/30 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-[87.5%] w-[2px] h-1/2 bg-brand-primary/30 -translate-x-1/2"></div>
            </div>

            {/* Children Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 w-full mt-8 md:mt-0 relative z-10">
              {[
                { role: "Design Head", name: "Sandip Sutar" },
                { role: "Production Head", name: "Sachin Patil" },
                { role: "QA Head", name: "Avadhesh" },
                { role: "Maintenance Head", name: "Ganesh" }
              ].map((member, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center px-2"
                >
                  {/* Mobile Connecting Line */}
                  <div className="w-[2px] h-8 bg-brand-primary/30 block md:hidden -mt-8 mb-0"></div>
                  
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-5 pb-6 text-center w-full max-w-[240px] hover:border-brand-accent hover:shadow-xl transition-all duration-300 relative group flex flex-col items-center">
                    <div className="bg-brand-dark group-hover:bg-brand-accent transition-colors text-white py-1.5 px-4 rounded-lg font-bold text-sm mb-4 -mt-9 mx-auto w-max shadow-md uppercase tracking-wider text-center">
                      {member.role}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-dark">{member.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Want to see how we work?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            From precision machining to final inspection, explore our fully-equipped tool room or request a quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/infrastructure" className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider text-sm text-center">
              View Our Infrastructure <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-secondary border border-brand-primary text-white font-bold rounded-md transition-all duration-300 hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider text-sm text-center">
              Get a Quote <Factory className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

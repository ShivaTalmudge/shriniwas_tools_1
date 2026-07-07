"use client";

import { motion } from "framer-motion";
import { Handshake, Target, ShieldCheck, Clock } from "lucide-react";

export default function Clients() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_home.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Our Clients</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Trusted by over 100 industrial manufacturers and OEM partners across India since 2006.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section (Industry Categories) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Client Network</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Industries That Trust Us</h3>
            <p className="text-gray-600 text-lg">Due to Non-Disclosure Agreements (NDAs), we protect the specific identities of our clients. However, our footprint spans across major manufacturing sectors in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Automotive Tier 1 & Tier 2 Suppliers",
              "Heavy Electrical Switchgear Manufacturers",
              "Consumer Electronics Brands",
              "Industrial Pump & Valve Makers",
              "Medical Equipment Manufacturers",
              "Aerospace Component Suppliers",
              "Home Appliance Manufacturers",
              "Packaging Solutions Providers"
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-brand-light p-6 rounded-xl border border-gray-100 flex items-center justify-center text-center h-32 hover:border-brand-primary hover:shadow-lg transition-all"
              >
                <span className="font-bold text-brand-dark">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach Content */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-2">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">The Partnership Approach</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We do not view ourselves merely as a vendor, but as an extended manufacturing arm of your business. Our goal is to enhance your production capabilities through robust, reliable tooling.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Handshake, title: "Collaborative DFM", desc: "We work with your engineers to optimize part designs for manufacturability." },
                  { icon: ShieldCheck, title: "Total Confidentiality", desc: "Strict NDAs ensure your intellectual property is always protected." },
                  { icon: Target, title: "Long-Term Reliability", desc: "Our moulds are built for millions of shots, ensuring uninterrupted production." },
                  { icon: Clock, title: "On-Time Delivery", desc: "Rigorous project management ensures your tooling arrives on schedule." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-8 text-center text-brand-accent">Client Testimonials</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      quote: "Shriniwas Tools delivered a complex multi-cavity DMC mould 2 weeks ahead of schedule. The dimensional accuracy on the first trial was spot on. A highly dependable tooling partner.",
                      author: "VP of Manufacturing",
                      company: "Leading Switchgear Company"
                    },
                    {
                      quote: "Their wire cut EDM capabilities are exceptional. We rely on them for all our high-precision progressive die matrices. Zero defects over 5 years of partnership.",
                      author: "Sourcing Director",
                      company: "Automotive Stamping Unit"
                    }
                  ].map((test, i) => (
                    <div key={i} className="bg-brand-dark p-6 rounded-2xl border border-white/5 relative">
                      <div className="text-4xl text-white/10 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-300 italic mb-4 relative z-10 pt-2">"{test.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
                          {test.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{test.author}</div>
                          <div className="text-brand-accent text-xs">{test.company}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

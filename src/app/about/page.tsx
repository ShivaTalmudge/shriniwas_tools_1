"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, Clock, FileBadge } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_about.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Established in 2006, Shriniwas Tools & Equipments is a premier manufacturer specializing in Thermoplastics and high-precision Engineering components.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden relative border-[12px] border-brand-light shadow-2xl">
                <Image
                  src="https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
                  alt="Engineering Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 md:bottom-10 md:right-10 bg-brand-accent p-4 md:p-6 rounded-2xl shadow-xl text-white w-48 sm:w-auto sm:max-w-xs z-10">
                <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-1">25+ Years</div>
                <div className="text-xs sm:text-sm font-medium">Of Manufacturing Excellence</div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Vision & Mission</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>
                  <strong>Our Vision:</strong> To be a global benchmark in precision tool-making and injection molding, recognized for innovation, technological leadership, and sustainable engineering solutions.
                </p>
                <p>
                  <strong>Our Mission:</strong> To deliver reliable, cost-effective, and high-precision manufacturing solutions that empower our clients' global growth through engineering excellence and timely delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-primary transition-colors">
                  <Award className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Quality First</h4>
                  <p className="text-gray-500 text-sm">ISO certified processes ensuring zero-defect deliverables.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-primary transition-colors">
                  <Briefcase className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Global Reach</h4>
                  <p className="text-gray-500 text-sm">Exporting high-precision dies to over 15 countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From a small workshop to a massive industrial presence.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-primary/30 md:-translate-x-1/2"></div>
            
            {[
              { year: "2006", title: "Foundation", desc: "Foundation of Shriniwas Tools" },
              { year: "2014", title: "Strategic Partnership", desc: "Expanded our capabilities and formed strategic partnerships" },
              { year: "2018", title: "Advanced Tooling", desc: "Upgraded our facility with high-end machinery for advanced tooling" },
              { year: "2019", title: "Digitalization & Tech", desc: "Implemented smart technology in our manufacturing processes" },
              { year: "2020", title: "ISO 9001:2015", desc: "ISO 9001:2015 Achieved for quality management systems" },
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative pl-10 md:pl-0 mb-12 flex flex-col md:flex-row items-start md:items-center group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 -translate-x-1/2 mt-2.5 md:mt-0 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-dark group-hover:scale-150 transition-transform z-10" />
                
                <div className="w-full md:w-1/2 md:text-right md:pr-12 mb-2 md:mb-0">
                  <div className="text-3xl font-heading font-black text-brand-primary opacity-50 group-hover:opacity-100 transition-opacity">{milestone.year}</div>
                </div>
                
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                    <h4 className="text-xl font-bold mb-2 text-brand-accent">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 bg-brand-light text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-2xl md:text-4xl font-heading font-medium text-brand-dark italic leading-relaxed mb-8">
            "At Shriniwas, we don't just manufacture parts; we engineer reliability into every micron. Our synergy of advanced technology and decades of craftsmanship makes us the partner of choice for global OEMs."
          </p>
          <div className="text-xl font-bold text-brand-primary">— Nagendra M. Sheregar, Founder</div>
        </div>
      </section>
    </>
  );
}

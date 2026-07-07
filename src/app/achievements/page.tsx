"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Users, CheckCircle2, Box } from "lucide-react";

export default function Achievements() {
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
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Achievements & Milestones</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Two decades of engineering excellence, continuous growth, and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "18+", label: "Years of Experience" },
              { icon: Box, value: "500+", label: "Precision Moulds Delivered" },
              { icon: Users, value: "100+", label: "Satisfied OEM Clients" },
              { icon: Award, value: "ISO", label: "9001:2015 Certified" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-black mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-blue-100 font-medium tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Journey</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Milestones of Growth</h3>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-brand-light transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {[
                { year: "2006", title: "Foundation", desc: "Shriniwas Tools & Equipments was established by Mr. Nagendra M. Sheregar with a vision to provide world-class tooling solutions." },
                { year: "2010", title: "CNC Capabilities Added", desc: "Upgraded our manufacturing capabilities by installing our first high-speed VMC machines to meet rising precision demands." },
                { year: "2015", title: "Wire Cut EDM Expansion", desc: "Massive expansion of our EDM division, installing multiple Electronica Wire Cut machines for complex die manufacturing." },
                { year: "2018", title: "ISO 9001:2015 Certification", desc: "Achieved international quality certification, formalizing our rigorous inspection processes and zero-defect policy." },
                { year: "2023", title: "Injection Moulding Division", desc: "Added in-house servo-hydraulic injection moulding machines (up to 300T) to provide end-to-end component manufacturing." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}
                >
                  <div className="md:w-1/2"></div>
                  
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-brand-primary rounded-full border-4 border-white shadow-md transform -translate-x-1/2 flex items-center justify-center z-10 mt-1 md:mt-0">
                    <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
                  </div>
                  
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"}`}>
                    <div className="bg-brand-light p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary transition-colors hover:shadow-md">
                      <span className="text-brand-accent font-black text-2xl mb-2 block">{item.year}</span>
                      <h4 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Quality Assurance</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">ISO 9001:2015 Certified</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our operations are certified to international quality management standards. This certification reflects our commitment to continuous improvement, customer satisfaction, and strict adherence to technical specifications.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Standardized Manufacturing Processes",
                  "Traceability of Raw Materials",
                  "Rigorous Stage-wise Inspections",
                  "Commitment to Customer Satisfaction"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-3xl shadow-2xl relative"
              >
                <div className="absolute inset-0 border-2 border-brand-accent rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                <div className="w-64 h-80 bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-brand-dark border-4 border-gray-200 p-6 text-center">
                   <Award className="w-20 h-20 text-brand-primary mb-4" />
                   <h4 className="font-bold text-xl mb-2">ISO 9001:2015</h4>
                   <p className="text-sm text-gray-500 font-medium">Quality Management System</p>
                   <div className="mt-4 pt-4 border-t border-gray-300 w-full">
                     <p className="text-xs text-gray-400">Certificate No: [Available on Request]</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

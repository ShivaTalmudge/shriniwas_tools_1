"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, PenTool, Laptop, Factory, PackageCheck } from "lucide-react";

export default function About() {
  const steps = [
    {
      title: "1. Tooling Design & Engineering",
      desc: "Our engineering department utilizes industry-leading software like SolidWorks and MasterCAM to design intricate 3D mould assemblies and generate optimized, collision-free G-code for complex multi-axis CNC machining.",
      icon: <Laptop className="w-8 h-8 text-brand-dark" />,
      img: "/company_machines/programmer_office.png"
    },
    {
      title: "2. Precision CNC Machining",
      desc: "Raw blocks of premium tool steel are heavily milled and profiled on our rigid 3-axis and 4-axis VMCs. Our high-speed machining centers achieve dimensional tolerances down to an exacting 5 microns.",
      icon: <Factory className="w-8 h-8 text-brand-dark" />,
      img: "/company_machines/VMC_2.png"
    },
    {
      title: "3. Wire Cut & EDM Sparking",
      desc: "When conventional milling cannot reach sharp internal corners or process ultra-hardened steels, our battery of Wire Cut and Spark Erosion (EDM) machines deliver flawless surface finishes and complex profiles.",
      icon: <PenTool className="w-8 h-8 text-brand-dark" />,
      img: "/company_machines/wire_cut_machine_imp1.png"
    },
    {
      title: "4. Assembly & Mould Trials",
      desc: "Highly experienced toolmakers manually assemble and fit the die components. We then conduct rigorous T0 and T1 in-house trials on our own injection and compression moulding machines to validate the final part design.",
      icon: <PackageCheck className="w-8 h-8 text-brand-dark" />,
      img: "/company_machines/horizonatl_injection_moulding_machine_1.png"
    }
  ];

  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/company_machines/bannerimage2.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Since 2006, Shriniwas Tools & Equipments has operated as a leading engineering tool room in Pune, specializing in high-precision plastic injection moulds, DMC moulds, and industrial press tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-square rounded-full overflow-hidden relative border-[12px] border-brand-light shadow-2xl">
                <Image
                  src="/company_machines/VMC1.png"
                  alt="Engineering Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 md:bottom-10 md:right-10 bg-brand-accent p-4 md:p-6 rounded-2xl shadow-xl text-white w-48 sm:w-auto sm:max-w-xs z-10">
                <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-1">18+ Years</div>
                <div className="text-xs sm:text-sm font-medium">Of Manufacturing Excellence</div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Vision & Mission</h2>
              <div className="prose prose-lg text-gray-600 mb-10">
                <p>
                  <strong>Our Vision:</strong> To establish Shriniwas Tools as the benchmark for precision tool-making in India by consistently adopting advanced machining technologies and delivering robust, defect-free moulds.
                </p>
                <p>
                  <strong>Our Mission:</strong> To provide the automotive, electrical, and engineering sectors with reliable, cost-effective manufacturing solutions. We focus on micron-level accuracy, stringent quality control, and timely delivery to empower our clients&apos; production lines.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Award className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Quality First</h4>
                  <p className="text-gray-500 text-sm">ISO 9001:2015 certified processes ensuring rigorous CMM inspection and zero-defect production.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-primary hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-brand-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Trusted Partner</h4>
                  <p className="text-gray-500 text-sm">Reliable supplier to over 100 industrial manufacturers and OEM clients across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merged Capabilities Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-light relative" id="capabilities">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">Manufacturing Process</h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">Experience a seamless workflow from digital CAD concept to physical mass production reality. Our fully integrated in-house capabilities in Pune ensure absolute quality control at every stage.</p>
          </div>
          
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                
                <div className="lg:w-1/2 relative animate-in fade-in zoom-in-95 duration-700">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl group">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className={`absolute -bottom-4 md:-bottom-8 ${index % 2 !== 0 ? "left-4 md:-left-8" : "right-4 md:-right-8"} bg-brand-accent w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center border-4 md:border-8 border-white shadow-lg`}>
                    {step.icon}
                  </div>
                </div>

                <div className="lg:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
                  <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">{step.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-dark text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-left max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-brand-accent mb-6" />
            <p className="text-gray-300 text-lg">From a small workshop to a massive industrial presence, building precision into every era.</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-[15px] md:left-[23px] top-4 bottom-0 w-[2px] bg-white/10"></div>
            
            {[
              { year: "2006", title: "The Beginning", desc: "Shriniwas Tools was founded in Bhosari, Pune by Nagendra M. Sheregar to provide reliable tooling solutions." },
              { year: "2014", title: "Capacity Expansion", desc: "Expanded the tool room infrastructure and added dedicated plastic injection moulding capabilities." },
              { year: "2018", title: "Advanced CNC & EDM", desc: "Upgraded the facility with high-end CNC VMC and Wire Cut EDM machinery for sub-micron accuracy." },
              { year: "2019", title: "Specialized Moulds", desc: "Mastered the production of high-tolerance DMC and Bakelite compression moulds for electrical sectors." },
              { year: "2020", title: "ISO 9001:2015", desc: "Achieved ISO 9001:2015 certification, formalizing our commitment to strict quality management systems." },
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20 mb-10 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-4 top-4 w-4 h-4 bg-brand-dark border-[3px] border-brand-accent rounded-full group-hover:bg-brand-accent group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300 z-10" />
                
                <div className="bg-white/5 border border-white/10 hover:border-brand-accent/50 p-6 md:p-8 rounded-2xl group-hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                    <span className="text-3xl md:text-4xl font-heading font-black text-brand-primary opacity-60 group-hover:opacity-100 transition-opacity">
                      {milestone.year}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                      {milestone.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 md:py-20 lg:py-24 bg-white text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <p className="text-2xl md:text-4xl font-heading font-medium text-brand-dark italic leading-relaxed mb-8">
            &quot;At Shriniwas Tools, our focus has always been on precision and durability. We understand that a flawless mould is the foundation of our clients&apos; success. Our commitment is to engineer reliability into every piece of steel we cut.&quot;
          </p>
          <div className="text-xl font-bold text-brand-primary">— Nagendra M. Sheregar, Founder</div>
        </div>
      </section>
    </>
  );
}

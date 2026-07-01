"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool, Laptop, Factory, PackageCheck } from "lucide-react";

export default function Capabilities() {
  const steps = [
    {
      title: "1. CAD/CAM Design",
      desc: "Our engineering department utilizes SolidWorks and MasterCAM to design 3D models and generate optimized G-code for complex CNC machining.",
      icon: <Laptop className="w-8 h-8 text-brand-dark" />,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "2. Precision Machining",
      desc: "Raw blocks of premium tool steel are machined on 3-axis and 4-axis VMCs, achieving tolerances up to 5 microns.",
      icon: <Factory className="w-8 h-8 text-brand-dark" />,
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cb71b14?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "3. Wire Cut & EDM",
      desc: "For intricate cavities and sharp corners, our Spark Erosion (EDM) and Wire-Cut machines deliver flawless surface finishes.",
      icon: <PenTool className="w-8 h-8 text-brand-dark" />,
      img: "https://images.unsplash.com/photo-1565439390115-08a5141e610b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "4. Assembly & Trials",
      desc: "Experienced toolmakers assemble the die, followed by rigorous in-house trials on our own injection moulding machines to validate the design.",
      icon: <PackageCheck className="w-8 h-8 text-brand-dark" />,
      img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_capabilities.png)' }}
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
              Production Process
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-light">
              A seamless flow from digital concept to physical reality. Our integrated manufacturing capabilities ensure quality control at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2 relative"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`absolute -bottom-8 ${index % 2 !== 0 ? "-left-8" : "-right-8"} bg-brand-accent w-24 h-24 rounded-full flex items-center justify-center border-8 border-white shadow-lg`}>
                    {step.icon}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-1/2"
                >
                  <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">{step.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

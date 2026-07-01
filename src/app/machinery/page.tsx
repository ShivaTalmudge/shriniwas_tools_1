"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cpu, Power, Maximize } from "lucide-react";

export default function Machinery() {
  const demoImage = "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon";

  const machines = [
    {
      name: "BATILI BOI / AMS",
      type: "VMC Machine",
      capacity: "1300x600x600, 1000x500x500, 500x400x400",
      qty: "03",
      application: "Precision Machining",
      image: demoImage
    },
    {
      name: "Electronica",
      type: "CNC Wirecut",
      capacity: "400x300x200",
      qty: "09",
      application: "Complex Tool Cutting",
      image: demoImage
    },
    {
      name: "Electronica",
      type: "Sparking",
      capacity: "500X300X200",
      qty: "01",
      application: "Spark Erosion",
      image: demoImage
    },
    {
      name: "Jones-Shipman",
      type: "Surface grinder",
      capacity: "600x300X300",
      qty: "02",
      application: "Surface Finishing",
      image: demoImage
    },
    {
      name: "Bridgeport / Jasjit Machine",
      type: "M1TR",
      capacity: "350x700, 1270X254MM",
      qty: "02",
      application: "General Milling",
      image: demoImage
    },
    {
      name: "Varnier",
      type: "Milling Machine",
      capacity: "1000x400x800",
      qty: "01",
      application: "General Machining",
      image: demoImage
    },
    {
      name: "TAIWAN",
      type: "EDM Drill",
      capacity: "200X300",
      qty: "01",
      application: "Hole Drilling",
      image: demoImage
    },
    {
      name: "Haitian",
      type: "Moulding M/C",
      capacity: "90 / 300 TON",
      qty: "02",
      application: "Mass Production",
      image: demoImage
    },
    {
      name: "YUZUMI",
      type: "Moulding M/C",
      capacity: "120 TON",
      qty: "01",
      application: "Mass Production",
      image: demoImage
    }
  ];

  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_machinery.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Our Machinery</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              A highly advanced, temperature-controlled facility equipped with the finest machinery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {machines.map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border border-gray-100 rounded-3xl overflow-hidden hover:border-brand-accent transition-colors bg-white shadow-xl shadow-gray-200/50"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 right-4 bg-brand-dark text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    Qty: {machine.qty}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-1">{machine.name}</h3>
                  <p className="text-brand-accent font-medium mb-6">{machine.type}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Maximize className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Capacity</div>
                        <div className="text-brand-dark font-medium">{machine.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="text-xs text-gray-500 font-bold uppercase">Application</div>
                        <div className="text-brand-dark font-medium">{machine.application}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

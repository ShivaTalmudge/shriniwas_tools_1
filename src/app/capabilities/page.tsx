import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tool Room Capabilities & Manufacturing Process | Shriniwas Tools Pune",
  description: "Explore our complete tool room capabilities in Pune. From CAD/CAM design to precision CNC machining and wire cut EDM for flawless mould manufacturing.",
};

import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool, Laptop, Factory, PackageCheck } from "lucide-react";

export default function Capabilities() {
  const steps = [
    {
      title: "1. Tooling Design & Engineering",
      desc: "Our engineering department utilizes industry-leading software like SolidWorks and MasterCAM to design intricate 3D mould assemblies and generate optimized, collision-free G-code for complex multi-axis CNC machining.",
      icon: <Laptop className="w-8 h-8 text-brand-dark" />,
      img: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
    },
    {
      title: "2. Precision CNC Machining",
      desc: "Raw blocks of premium tool steel are heavily milled and profiled on our rigid 3-axis and 4-axis VMCs. Our high-speed machining centers achieve dimensional tolerances down to an exacting 5 microns.",
      icon: <Factory className="w-8 h-8 text-brand-dark" />,
      img: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
    },
    {
      title: "3. Wire Cut & EDM Sparking",
      desc: "When conventional milling cannot reach sharp internal corners or process ultra-hardened steels, our battery of Wire Cut and Spark Erosion (EDM) machines deliver flawless surface finishes and complex profiles.",
      icon: <PenTool className="w-8 h-8 text-brand-dark" />,
      img: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
    },
    {
      title: "4. Assembly & Mould Trials",
      desc: "Highly experienced toolmakers manually assemble and fit the die components. We then conduct rigorous T0 and T1 in-house trials on our own injection and compression moulding machines to validate the final part design.",
      icon: <PackageCheck className="w-8 h-8 text-brand-dark" />,
      img: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
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
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
              Our Manufacturing Process
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Experience a seamless workflow from digital CAD concept to physical mass production reality. Our fully integrated in-house capabilities in Pune ensure absolute quality control at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 items-center`}>
                
                <div className="lg:w-1/2 relative animate-in fade-in zoom-in-95 duration-700">
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
    </>
  );
}

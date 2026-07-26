"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Users, Target, ArrowRight , ChevronRight} from "lucide-react";

const openPositions = [
  {
    title: "Senior CNC VMC Operator",
    department: "Machining Division",
    experience: "3-5 Years",
    type: "Full-Time",
    desc: "Seeking an experienced VMC operator proficient in Fanuc controllers and MasterCAM programming. Must have experience working with hardened tool steels.",
  },
  {
    title: "Precision Tool & Die Maker",
    department: "Tool Room",
    experience: "5+ Years",
    type: "Full-Time",
    desc: "Looking for a meticulous tool maker with deep expertise in benching, polishing, and assembling complex multi-cavity injection moulds and progressive dies.",
  },
  {
    title: "Quality Control Inspector",
    department: "Quality Assurance",
    experience: "2-4 Years",
    type: "Full-Time",
    desc: "Requires hands-on experience with Zeiss CMMs, surface roughness testers, and strong knowledge of GD&T. ISO 9001 audit experience is a plus.",
  }
];

export default function Careers() {
  return (
    <>
            {/* Unified Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col lg:flex-row items-stretch overflow-hidden pt-[100px] md:pt-[120px] bg-brand-dark">
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
                <span className="text-white">Careers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                Build Your Career With Us
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Join a team of passionate engineers shaping the future of precision manufacturing in India.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative min-h-[35vh] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/company_machines/horizontal_injection_moulding_machine.png)' }}
          >
            {/* Soft gradient fade into the image from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            {/* Soft gradient fade into the image from the bottom on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Life at Shriniwas</h2>
            <h3 className="text-4xl font-heading font-bold text-brand-dark mb-6">Our Work Culture</h3>
            <p className="text-gray-600 text-lg">We believe in empowering our workforce. We provide continuous training, a safe working environment, and the opportunity to work on complex engineering projects for global brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation Driven", desc: "We encourage our team to constantly seek better, more efficient machining and design methodologies." },
              { icon: Users, title: "Collaborative Team", desc: "Our flat hierarchy ensures that every engineer and machinist has a voice on the shop floor." },
              { icon: Target, title: "Skill Development", desc: "Regular training sessions on the latest CAD/CAM software and metrology equipment." }
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-light p-8 rounded-2xl border border-gray-100 hover:border-brand-primary transition-colors hover:shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <perk.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h4 className="font-bold text-xl text-brand-dark mb-3">{perk.title}</h4>
                <p className="text-gray-600 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Join the Team</h2>
              <h3 className="text-3xl md:text-3xl font-heading font-bold">Open Positions</h3>
            </div>
            <div className="mt-6 md:mt-0">
              <a href="mailto:shriniwastools2020@gmail.com" className="bg-brand-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-colors">
                Email Resume <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center"
              >
                <div className="lg:w-2/3">
                  <h4 className="text-2xl font-bold mb-2">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.department}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">{job.experience}</span>
                    <span className="px-3 py-1 bg-white/10 rounded-full">{job.type}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{job.desc}</p>
                </div>
                
                <div className="lg:w-1/3 flex lg:justify-end w-full">
                  <a 
                    href={`mailto:shriniwastools2020@gmail.com?subject=Application for ${job.title}`}
                    className="border-2 border-brand-primary hover:bg-brand-primary text-white font-bold py-3 px-6 rounded-lg transition-colors w-full lg:w-auto text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-400 text-sm">
            Don&apos;t see a role that fits? Send your resume to <a href="mailto:shriniwastools2020@gmail.com" className="text-brand-accent hover:underline">shriniwastools2020@gmail.com</a> and we&apos;ll keep you in mind for future openings.
          </div>
        </div>
      </section>
    </>
  );
}

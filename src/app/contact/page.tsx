"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
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
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">Contact Our Engineering Team</h1>
            <p className="text-lg md:text-xl lg:text-xl text-gray-200 max-w-3xl font-light leading-relaxed">
              Whether you need a complex progressive die, a multi-cavity injection mould, or precision CNC machining, our tooling experts in Pune are ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div 
              className="lg:w-2/3 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-brand-dark/5 animate-in fade-in slide-in-from-left-8 duration-700"
            >
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8">Send us an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="Last Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="email@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-lg w-full md:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div 
              className="lg:w-1/3 flex flex-col gap-8 animate-in fade-in slide-in-from-right-8 duration-700 delay-150"
              style={{ animationFillMode: "both" }}
            >
              <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary rounded-full blur-[80px] opacity-30" />
                
                <h3 className="text-2xl font-heading font-bold mb-10 relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                      <p className="text-gray-400 leading-relaxed">S-96, MIDC, Bhosari, Pune - 411026, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-400">+91 9860822818</p>
                      <p className="text-gray-400">+91 7276086077</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-400 break-all">shriniwas_tools@rediffmail.com</p>
                      <p className="text-gray-400 break-all">shriniwastools2020@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.892695029471!2d73.83447957583648!3d18.623912170366667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8871bd97f51%3A0xeabdebd41c8868c2!2sS-96%2C%20MIDC%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411026!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </>
  );
}

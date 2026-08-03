"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, FileSearch, CalendarDays, Rocket } from "lucide-react";

export default function Contact() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shriniwas Tools & Equipments",
    image: "https://shriniwastools.com/company_machines/wire_cut_machine_2_imp.png",
    "@id": "https://shriniwastools.com",
    url: "https://shriniwastools.com/contact",
    telephone: "+91-9860822818",
    email: "shriniwastools@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "PAP-74, MIDC, Bhosari",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411026",
      addressCountry: "IN"
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/VMC1.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-brand-accent mb-6" />
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Send us your CAD file, technical drawing, or simply a description of your requirement. Our engineering team will review it and get back to you with a detailed quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white relative -mt-10 z-20 rounded-t-[40px] shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h2 className="text-3xl font-heading font-bold text-brand-dark mb-8 tracking-tight">Send us an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Company Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="Company Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-none" placeholder="Tell us about your requirement..."></textarea>
                </div>
                <button type="button" className="bg-gradient-to-r from-brand-accent to-orange-500 hover:brightness-110 text-white font-bold py-4 px-10 rounded-full w-full md:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-brand-accent/40 uppercase tracking-wider text-sm group">
                  <Send className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:w-1/3 flex flex-col gap-8">
              <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary rounded-full blur-[80px] opacity-20" />
                
                <h3 className="text-2xl font-heading font-bold mb-10 relative z-10 tracking-tight">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                      <Link 
                        href="https://maps.google.com/?q=PAP-74,+MIDC,+Bhosari,+Pune,+Maharashtra+411026" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors leading-relaxed block"
                      >
                        PAP-74, MIDC, Bhosari, <br />Pune, Maharashtra 411026
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Phone className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <Link href="tel:+919860822818" className="text-gray-300 hover:text-white transition-colors block">
                        +91 98608 22818
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <Link href="mailto:shriniwastools@gmail.com" className="text-gray-300 hover:text-white transition-colors block">
                        shriniwastools@gmail.com
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl shrink-0">
                      <Clock className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-300">Mon - Sat: 9:00 AM to 6:00 PM</p>
                      <p className="text-gray-400 text-sm mt-1">Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* What Happens After & How to Reach Us */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* What Happens After */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">What Happens After You Contact Us?</h2>
                <div className="w-16 h-1 bg-brand-accent"></div>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                
                {/* Step 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-brand-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    <FileSearch className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-brand-dark text-lg">1. Engineering Review</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Our technical team reviews your drawing, CAD model, or specifications for feasibility and optimal manufacturing approach.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-brand-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-brand-dark text-lg">2. Quotation & Timeline</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">We provide a detailed commercial quote along with a clear timeline for tooling and production.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-brand-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-brand-dark text-lg">3. Project Kickoff</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">Upon approval, raw materials are procured and the job immediately hits our shop floor.</p>
                  </div>
                </div>
                
              </div>
            </div>

            {/* How to Reach Us - Map */}
            <div>
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">How to Reach Us</h2>
                <div className="w-16 h-1 bg-brand-accent"></div>
              </div>
              <div className="w-full h-[400px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273181829633!2d73.8415779!3d18.6517173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b842b069d275%3A0xc4eb090df4506c9a!2sShriniwas%20Tools%20And%20Equipments!5e0!3m2!1sen!2sin!4v1709666014389!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shriniwas Tools Google Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

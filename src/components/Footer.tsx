import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-gray-300 py-10 md:py-12 border-t border-white/5 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-12 lg:col-span-3">
            <Link href="/" className="inline-flex items-center mb-6 h-12 relative">
              <Image 
                src="/images/logos/logo_main-bg.png" 
                alt="Shriniwas Tools & Equipments Logo" 
                width={643} 
                height={388} 
                className="w-auto h-full object-contain origin-left"
              />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              Since 2006, Shriniwas Tools & Equipments has been a trusted manufacturer of precision plastic injection moulds, DMC moulds, rubber moulds, and engineering components in Pune, India. ISO 9001:2015 certified.
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10 text-gray-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10 text-gray-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all duration-300 border border-white/10 text-gray-400">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Profile</Link></li>
              <li><Link href="/infrastructure" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Infrastructure</Link></li>
              <li><Link href="/quality" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Quality</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services - Spanning 2 Columns within */}
          <div className="md:col-span-8 lg:col-span-4">
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              <li><Link href="/services/plastic-molding-dies" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Plastic Injection Moulding</Link></li>
              <li><Link href="/services/cnc-vmc-machining" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">CNC & VMC Machining</Link></li>
              <li><Link href="/services/cnc-wire-cut" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">CNC Wire Cut EDM</Link></li>
              <li><Link href="/services/backlite-dies-components" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">DMC & Bakelite Moulds</Link></li>
              <li><Link href="/services/press-tools" className="text-sm text-gray-400 hover:text-brand-accent transition-colors">Press Tools</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  S-96, MIDC, Bhosari,<br />
                  Pune - 411026, Maharashtra, India
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-gray-400 leading-relaxed">
                  <span>+91 9860822818</span>
                  <span>+91 7276086077</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-gray-400 leading-relaxed break-all">
                  <a href="mailto:shriniwastools2020@gmail.com" className="hover:text-brand-accent transition-colors">shriniwastools2020@gmail.com</a>
                  <a href="mailto:shriniwas_tools@rediffmail.com" className="hover:text-brand-accent transition-colors mt-0.5">shriniwas_tools@rediffmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shriniwas Tools & Equipments. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-center">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <Link href="/sitemap" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

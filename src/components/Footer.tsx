import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] text-white pt-16 pb-28 md:pb-14 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md shadow-emerald-950">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21 C 8 16, 2 13, 2 6 C 6 8, 9 10.5, 12 15 C 15 10.5, 18 8, 22 6 C 22 13, 16 16, 12 21 Z" stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 15 V 21" stroke="#A7F3D0" strokeWidth="1.2" opacity="0.9" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-white">GARUDA</span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-emerald-400 uppercase">CLEANING SERVICES</span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Tirupati&apos;s certified residential & commercial deep-cleaning company. Certified hygiene, verified staff, and upfront transparent quotes with zero hidden fees.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-900 transition-colors"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-300">Quick Links</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">All 22 Services</Link></li>
              <li><Link to="/commercial" className="hover:text-emerald-400 transition-colors font-medium text-emerald-400">Commercial Solutions</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Garuda</Link></li>
              <li><Link to="/transformations" className="hover:text-emerald-400 transition-colors">Transformations</Link></li>
              <li><Link to="/faq" className="hover:text-emerald-400 transition-colors">FAQ & Policy</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Book Inspection</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-300">Popular Services</h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">1 & 2 BHK Deep Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Bathroom Hard-Water Descaling</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Kitchen Degreasing & Chimney</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Sofa Shampoo & Extraction</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">6-Stage Water Tank Sanitization</Link></li>
              <li><Link to="/commercial" className="hover:text-emerald-400 transition-colors">Hotel & Office Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-300">Contact Desk</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                <span className="text-zinc-500 block">Phone / WhatsApp:</span>
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-white font-semibold hover:text-[#F59E0B]">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <span className="text-zinc-500 block">Email:</span>
                <a href={`mailto:${siteConfig.email}`} className="text-white font-medium hover:text-[#F59E0B]">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <span className="text-zinc-500 block">Address:</span>
                <span className="text-zinc-300">{siteConfig.address.street}, {siteConfig.city}, {siteConfig.state}</span>
              </p>
              <p>
                <span className="text-zinc-500 block">Hours:</span>
                <span className="text-zinc-300">{siteConfig.hours}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} {siteConfig.businessName}. All rights reserved. Tirupati, Andhra Pradesh.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">Free Inspection</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Client Policy</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

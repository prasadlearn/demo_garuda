import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    locality: '',
    service: siteConfig.services[0].name
  });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      name: quickForm.name,
      phone: quickForm.phone,
      locality: quickForm.locality,
      service: quickForm.service
    }).toString();
    navigate(`/contact?${query}`);
  };

  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-emerald-50/40 via-white to-white pt-32 sm:pt-36 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-zinc-200/70"
    >
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-100/40 to-transparent rounded-full filter blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Location & Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Certified Cleaning Crew Across Tirupati</span>
            </div>

            {/* Main Primary SEO Heading (Single h1) */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Tirupati&apos;s Trusted{' '}
              <span className="text-emerald-700 block sm:inline">
                Deep Cleaning
              </span>{' '}
              Specialists
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              From complete 1 & 2 BHK homes and sprawling villas to bathroom hard-water descaling, sofa shampooing, and commercial spaces. Delivered by 100% verified staff with a free on-site inspection and satisfaction guarantee.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20 text-center transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Book Free Inspection</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-emerald-950 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 shadow-sm text-center transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-currentColor text-emerald-600" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* High-Trust Value Highlights */}
            <div className="pt-6 border-t border-zinc-200 grid grid-cols-3 gap-4 text-xs font-medium text-zinc-700">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Verified Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Free On-Site Quote</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Converting Quick Lead Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/90 shadow-xl shadow-zinc-200/50 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-emerald-700 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-sm">
                100% Free Inspection
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-zinc-900 mb-1">
                Schedule An Inspection
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm mb-6">
                Our supervisor visits your site in Tirupati and provides a clear upfront quote.
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quick-name" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    id="quick-name"
                    type="text"
                    required
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="quick-phone" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="quick-phone"
                    type="tel"
                    required
                    value={quickForm.phone}
                    onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="quick-locality" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Tirupati Area
                    </label>
                    <select
                      id="quick-locality"
                      value={quickForm.locality}
                      onChange={(e) => setQuickForm({ ...quickForm, locality: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg text-xs bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                    >
                      <option value="">Select Area</option>
                      {siteConfig.localities.map(loc => (
                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                      ))}
                      <option value="Other">Other Area</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quick-service" className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Service
                    </label>
                    <select
                      id="quick-service"
                      value={quickForm.service}
                      onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg text-xs bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                    >
                      {siteConfig.services.slice(0, 10).map(s => (
                        <option key={s.id} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-700/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Free Inspection</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <p className="text-[11px] text-zinc-400 text-center">
                  🔒 No spam. Our local supervisor will call to confirm your convenient timing.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { WhyUs } from '../components/WhyUs';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { siteConfig } from '../config/siteConfig';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredServices = siteConfig.services.slice(0, 6);

  const handleBookService = (serviceName: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="w-full bg-white text-zinc-900">
      {/* Professional Conversion Hero */}
      <Hero />

      {/* Trust Badges Bar */}
      <TrustBar />

      {/* Featured Services Preview Section */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <span>Featured Capabilities</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
                POPULAR CLEANING SERVICES
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-2">
                Specialized hygiene and deep-cleaning solutions for Tirupati homes and commercial premises.
              </p>
            </div>

            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <span>Explore All 22 Services</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* 6 Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                      <span role="img" aria-label={service.name}>{service.icon}</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleBookService(service.name)}
                    className="text-xs font-bold tracking-wider uppercase text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Book Inspection</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-[11px] text-zinc-400 font-medium">Tirupati</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-zinc-100 border border-zinc-300 text-zinc-800 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-xs"
            >
              <span>View Full Directory (22 Services)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <WhyUs />

      {/* Interactive Transformation Demo Slider */}
      <Gallery />

      {/* Honest Community Trust Review Card */}
      <Testimonials />

      {/* Commercial & Corporate Solutions Spotlight */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>B2B & Enterprise Sanitation</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
              COMMERCIAL & CORPORATE CLEANING
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Tailored facility deep-cleaning for Tirupati hotels, corporate tech spaces, diagnostic clinics, and retail showrooms. Complete GST invoicing and zero operational downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xl mb-4 group-hover:scale-105 transition-transform">
                🏨
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">Hotels & Chaultries</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                High-turnover pilgrim room deep sanitation, banquet carpet steam extraction, and lobby marble restoration near Tirumala.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Fast Room Turnaround</div>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xl mb-4 group-hover:scale-105 transition-transform">
                🏢
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">Offices & IT Hubs</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                Workstation row disinfection, ergonomic mesh chair foam shampooing, conference room sanitization, and pantry hygiene.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Weekend & Night Shifts</div>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xl mb-4 group-hover:scale-105 transition-transform">
                🏥
              </div>
              <h3 className="font-heading font-bold text-lg text-zinc-900 mb-2">Healthcare & Clinics</h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                Clinical-grade antimicrobial touchpoint decontamination, hospital OPD waiting lounge tile scrubbing, and non-toxic disinfection.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">Hospital-Grade Safe</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/commercial"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all duration-200"
            >
              <span>Explore Full Commercial Solutions & GST Quotations</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Banner leading to /contact */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 text-center border-t border-zinc-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
            Ready For A Healthier, Cleaner Property in Tirupati?
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Schedule your free on-site inspection today. Transparent quote upfront, zero hidden charges, and satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all duration-200"
            >
              Book Free Inspection
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappPrefillText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white border border-emerald-300 text-emerald-800 hover:bg-emerald-50 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

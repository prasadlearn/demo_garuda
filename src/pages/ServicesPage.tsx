import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

type CategoryType = 'All' | 'Residential' | 'Deep Cleaning' | 'Specialized' | 'Commercial';
const categories: CategoryType[] = ['All', 'Residential', 'Deep Cleaning', 'Specialized', 'Commercial'];

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const filteredServices = siteConfig.services.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  const handleBook = (serviceName: string) => {
    navigate(`/contact?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Comprehensive Directory</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-3">
            TWENTY-TWO SPECIALIZED SERVICES
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            From residential flats and sprawling villas to bathroom hard-water descaling, sofa shampooing, and commercial retail spaces across Tirupati.
          </p>

          {/* Search Input */}
          <div className="max-w-md mx-auto mt-8 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Sofa, Bathroom, Tank)..."
              className="w-full px-4 py-3 pl-11 rounded-xl text-sm bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-hidden focus:border-emerald-600 shadow-2xs transition-all"
            />
            <svg className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 text-xs font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${siteConfig.services.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.article
                layout
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl hover:shadow-zinc-200/60 transition-all duration-200 group"
              >
                <div>
                  {/* Service Card Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 flex items-center justify-center text-xl shadow-xs">
                      <span role="img" aria-label={service.name}>{service.icon}</span>
                    </div>
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/90 backdrop-blur-md border border-emerald-200/80 px-2.5 py-1 rounded-full shadow-xs">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h2 className="font-heading text-xl font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2">
                      {service.name}
                    </h2>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-zinc-100 mb-2">
                      <div className="text-[10px] uppercase tracking-wider text-emerald-800 font-bold mb-2">
                        Scope & What&apos;s Included
                      </div>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-600">
                            <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <button
                    type="button"
                    onClick={() => handleBook(service.name)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50/80 border border-emerald-200/80 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-150 flex items-center justify-between cursor-pointer group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
                  >
                    <span>Book This Service</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-zinc-500 text-sm">
            No service matched &ldquo;{searchQuery}&rdquo;. We offer tailored deep cleaning for any premises in Tirupati.
            <div className="mt-4">
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="px-6 py-2 rounded-full text-xs font-bold text-white bg-[#D97706]"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Free Inspection Reassurance Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-2">
              Free On-Site Inspection for Every Service
            </h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Every home and commercial space in Tirupati has unique dimensions, surface materials, and cleaning requirements. Our supervisor visits your site free of charge, inspects the work, and presents a 100% upfront quote. No guesswork, no surprise fees.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="shrink-0 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
          >
            Schedule Free Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export const ServiceArea: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredLocalities = siteConfig.localities.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section id="service-area" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Local Service Coverage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            WHERE WE WORK
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Professional deep cleaning teams deployed throughout Tirupati city and suburban zones.
          </p>
        </div>

        {/* Locality Search Input */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Find your Tirupati neighborhood..."
              className="w-full px-4 py-3 pl-11 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-hidden focus:border-[#D97706] transition-all"
            />
            <svg className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 text-xs cursor-pointer font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Localities Chip Grid - SEO-Critical Real Text */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredLocalities.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 8) * 0.03 }}
              className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all ${
                loc.highlight
                  ? 'border-amber-300 bg-amber-50/60 text-zinc-900 font-semibold shadow-2xs'
                  : 'border-zinc-200 bg-zinc-50 text-zinc-700'
              }`}
            >
              <svg className="w-4 h-4 text-[#D97706] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xs sm:text-sm">{loc.name}</span>
            </motion.div>
          ))}
        </div>

        {filteredLocalities.length === 0 && (
          <div className="text-center py-6 text-zinc-500 text-sm">
            No exact match for &ldquo;{searchTerm}&rdquo;. We still cover your locality! Call us at{' '}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-[#D97706] font-semibold underline">
              {siteConfig.phone}
            </a>.
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-zinc-900 font-bold text-sm">Need deep cleaning in suburban Tirupati?</p>
            <p className="text-zinc-500 text-xs mt-0.5">We dispatch supervisors across a 15 km radius for villas, factories, and schools.</p>
          </div>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="shrink-0 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D97706] to-[#B45309] shadow-xs"
          >
            Check Service Pin Code
          </a>
        </div>
      </div>
    </section>
  );
};

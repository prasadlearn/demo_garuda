import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, ServiceItem } from '../config/siteConfig';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

type CategoryType = 'All' | 'Residential' | 'Deep Cleaning' | 'Specialized' | 'Commercial';
const categories: CategoryType[] = ['All', 'Residential', 'Deep Cleaning', 'Specialized', 'Commercial'];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const filteredServices = activeCategory === 'All'
    ? siteConfig.services
    : siteConfig.services.filter(s => s.category === activeCategory);

  const handleBookService = (service: ServiceItem) => {
    onSelectService(service.name);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Specialized Hygiene Solutions</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
            WHAT WE CLEAN
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Twenty-two specialized services, one standard of precision.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80'
                }`}
              >
                {cat}
                {cat === 'All' && ` (${siteConfig.services.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Services Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <h3 className="font-heading text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 pt-3 border-t border-zinc-100 mb-2">
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

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <button
                    type="button"
                    onClick={() => handleBookService(service)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-50/80 border border-emerald-200/80 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-150 flex items-center justify-between cursor-pointer group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
                  >
                    <span>Book This Service</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

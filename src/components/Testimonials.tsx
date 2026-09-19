import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="testimonials" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-3">
          <span>Client Reviews & Trust</span>
        </div>

        {/* Section Title */}
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
          WHAT CLIENTS SAY
        </h2>

        <p className="text-zinc-600 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Honesty and genuine client trust come before everything we do.
        </p>

        {/* "Be Our First 5-Star Review" Card - Zero Fabricated Data */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-5 shadow-xs">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
            Be Our First 5-Star Review in Tirupati
          </h3>

          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            As a newly launched, dedicated cleaning company in Tirupati, we take pride in absolute transparency. We refuse to publish fabricated testimonials, paid endorsements, or fake star ratings. Real trust is built in your living room, bathroom, and kitchen.
          </p>

          <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 max-w-xl mb-8 text-xs text-zinc-700 leading-relaxed text-left sm:text-center">
            <span className="text-emerald-700 font-bold">Our Launch Guarantee:</span> Book your free inspection today. If our cleaning does not exceed your expectations, our supervisor personally returns to re-clean at no charge. We look forward to earning your honest review!
          </div>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md shadow-emerald-600/20 flex items-center gap-2"
          >
            <span>Book A Free Inspection</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

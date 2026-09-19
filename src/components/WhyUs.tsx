import React from 'react';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      title: 'Verified & Trained Staff',
      description: 'Every cleaner is identity-verified, background-screened, uniformed, and professionally trained on heavy-duty equipment and surface-safe protocols.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Free On-Site Inspection',
      description: 'Zero guesswork and zero commitments. Our field supervisor visits your location across Tirupati, assesses the exact scope, and gives you a clear quote before work starts.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: 'Eco-Conscious Products',
      description: 'We prioritize professional-grade, low-fume, non-hazardous solutions that eliminate dirt and bacteria while remaining safe for kids, elders, and domestic pets.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'We conduct a joint walkthrough before completing the handover. If any area does not meet your expectations, we re-clean it on the spot with no hesitation.',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Heritage */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span>The Garuda Standard</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
              Built on Trust. <br />
              <span className="text-emerald-700">Driven by Precision.</span>
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                Garuda Cleaning Services was founded to bring a genuinely dependable, professional cleaning standard to Tirupati — trained staff, real equipment, and total transparency, with no hidden charges and no guesswork.
              </p>
              <p>
                Just like the eagle for which we are named — the sacred mount (vahana) of Lord Venkateswara watching over Tirumala — we believe in executing every assignment with vigilant precision, speed, and complete reliability.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21 C 8 16, 2 13, 2 6 C 6 8, 9 10.5, 12 15 C 15 10.5, 18 8, 22 6 C 22 13, 16 16, 12 21 Z" stroke="#047857" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 15 V 21" stroke="#059669" strokeWidth="1" />
                </svg>
              </div>
              <div>
                <p className="text-zinc-900 font-bold text-sm">Local Pride. World-Class Hygiene.</p>
                <p className="text-zinc-500 text-xs">Serving Tirupati homes & businesses 7 days a week</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-zinc-900 font-bold text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

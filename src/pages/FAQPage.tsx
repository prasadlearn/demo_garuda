import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

interface CategorizedFAQ {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

const detailedFaqs: CategorizedFAQ[] = [
  {
    category: 'Pricing & Free Inspection',
    items: [
      {
        question: 'How do you determine the cost of cleaning without fixed prices online?',
        answer: 'Every property in Tirupati is unique in its square footage, marble/tile condition, level of grease or hard water stains, and ceiling heights. Rather than advertising generic prices and adding hidden charges later, we provide a 100% free, zero-obligation on-site inspection. Our supervisor gives you an exact, transparent quote before any work starts.'
      },
      {
        question: 'Is the on-site inspection completely free?',
        answer: 'Yes, 100% free with no commitment required. Our supervisor visits your home or commercial premise across Tirupati, examines the surfaces, and explains the recommended scope. You are free to accept or decline with zero pressure.'
      },
      {
        question: 'Are there any hidden travel charges for suburban locations?',
        answer: 'No. All costs — including travel across Tirupati, consumables, machinery setup, and waste disposal — are included in your written quote.'
      }
    ]
  },
  {
    category: 'Staff Verification & Safety',
    items: [
      {
        question: 'How do you vet and verify your cleaning crew?',
        answer: 'Every cleaner at Garuda undergoes mandatory identity checks, government ID verification, and background screening. Our team members arrive in clean branded uniforms with supervisor oversight on every project.'
      },
      {
        question: 'Can I leave the house while the cleaning team works?',
        answer: 'Yes. Many clients hand over the keys after the initial morning briefing and return for the final walkthrough. Our supervisor remains on-site throughout the service to ensure total safety and security.'
      }
    ]
  },
  {
    category: 'Equipment & Eco-Conscious Agents',
    items: [
      {
        question: 'What machines and equipment do you bring?',
        answer: 'Our service vehicles arrive equipped with industrial single-disc orbital floor scrubbers, high-pressure wet extraction machines, steam vaporizers for kitchen degreasing, HEPA vacuum cleaners, and telescopic window squeegees.'
      },
      {
        question: 'Are the cleaning solutions safe for infants and pets?',
        answer: 'Yes. We strictly avoid toxic, pungent acids that ruin tile glaze and emit choking fumes. We use neutral pH cleaners, enzyme-based degreasers, and non-hazardous descalers safe for children and domestic pets.'
      }
    ]
  },
  {
    category: 'Satisfaction Guarantee & Handover',
    items: [
      {
        question: 'What happens if I notice a missed spot after the cleaning?',
        answer: 'We conduct a thorough joint walkthrough before concluding any job. If you spot any area that does not meet our high standards, our crew re-cleans it immediately on the spot. If you notice an issue within 24 hours of service, we dispatch a team member to make it right.'
      },
      {
        question: 'How much notice is required to book or reschedule a service?',
        answer: 'We recommend booking 24 to 48 hours in advance, especially for full-home packages or weekend slots. However, we also accommodate urgent same-day requests in Tirupati whenever team slots are available.'
      }
    ]
  }
];

export const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [openIndex, setOpenIndex] = useState<string | null>('Pricing & Free Inspection-0');

  const categories = ['All', ...detailedFaqs.map(c => c.category)];

  const allItems = detailedFaqs.flatMap(c =>
    c.items.map(i => ({ ...i, category: c.category }))
  );

  const displayedItems = activeTab === 'All'
    ? allItems
    : allItems.filter(i => i.category === activeTab);

  const toggleAccordion = (key: string) => {
    setOpenIndex(prev => (prev === key ? null : key));
  };

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': allItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Knowledge & Guidelines</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Clear, honest answers regarding our free inspection model, certified safety protocols, and quality standards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                activeTab === cat
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {displayedItems.map((item, idx) => {
            const key = `${item.category}-${idx}`;
            const isOpen = openIndex === key;

            return (
              <div
                key={key}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-400 shadow-md shadow-zinc-200/50'
                    : 'border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(key)}
                  className="w-full px-6 py-4.5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-emerald-700 block mb-1">
                      {item.category}
                    </span>
                    <span className="text-base font-bold text-zinc-900">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isOpen
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700 rotate-180'
                        : 'border-zinc-200 bg-zinc-50 text-zinc-500'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom WhatsApp Help Card */}
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm text-center">
          <h3 className="font-heading text-xl font-bold text-zinc-900 mb-1">Have a question specific to your space?</h3>
          <p className="text-zinc-600 text-xs sm:text-sm max-w-md mx-auto mb-5">
            Our Tirupati team is available 7 days a week from 7:00 AM to 8:30 PM.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello, I have a specific question about Garuda Cleaning Services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-sm shadow-emerald-600/20"
          >
            <span>Ask Us Directly On WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Heritage & Mission</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-3">
            THE GARUDA STORY
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Swift, powerful, protective, and precise — bringing professional deep-cleaning standards to our holy city of Tirupati.
          </p>
        </div>

        {/* Section: The Spiritual & Local Connection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900">
              Inspired by the Divine Guardian of Tirumala
            </h2>
            <p>
              In our holy city of Tirupati, the name <strong>Garuda</strong> carries deep local resonance. As the divine eagle and sacred mount (vahana) of Lord Venkateswara presiding atop Tirumala, Garuda embodies four eternal virtues: swift flight, keen vision, protective strength, and flawless precision.
            </p>
            <p>
              We established Garuda Cleaning Services to reflect those very virtues in professional property care. Cleaning is not merely wiping down surfaces; it is an act of restoration, safeguarding your family&apos;s health, and elevating your living space to sanctuary-level hygiene.
            </p>
            <p>
              Whether we are descaling hard-water mineral buildup in a Balaji Colony apartment, shampooing upholstery in an Alipiri villa, or sanitizing a commercial complex on Renigunta Road, our crew operates with vigilant attention to every detail.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-zinc-200 shadow-md shadow-zinc-200/50 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5 shadow-xs">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21 C 8 16, 2 13, 2 6 C 6 8, 9 10.5, 12 15 C 15 10.5, 18 8, 22 6 C 22 13, 16 16, 12 21 Z" stroke="#059669" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M12 15 V 21" stroke="#10B981" strokeWidth="1" />
              </svg>
            </div>
            <div className="text-zinc-900 font-heading font-bold text-xl mb-1">Garuda Cleaning Services</div>
            <div className="text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-3">Tirupati, Andhra Pradesh</div>
            <p className="text-zinc-500 text-xs leading-relaxed">
              &ldquo;We don&apos;t just clean homes. We bring a sense of purity, freshness, and protective calm to every doorstep in Tirupati.&rdquo;
            </p>
          </div>
        </div>

        {/* Section: Why We Started (The Market Problem) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-sm mb-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900">
              Why We Founded Garuda in Tirupati
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              For years, homeowners and business managers in Tirupati were caught between two extremes: unreliable informal cleaners who lacked modern equipment, or distant aggregator apps that charged hidden fees with zero staff accountability.
            </p>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              We built Garuda to provide an authentic, trustworthy alternative: a homegrown service business with verified local staff, industrial-grade machinery, transparent upfront inspection pricing, and an unwavering commitment to our clients.
            </p>
          </div>
        </div>

        {/* Section: 4 Non-Negotiable Standards */}
        <div className="mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-zinc-900 mb-10">
            Our 4 Non-Negotiable Standards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm mb-4">
                1
              </div>
              <h3 className="font-heading font-bold text-base text-zinc-900 mb-2">Verified Personnel</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Background-checked, identity-verified, uniformed staff who treat your home with complete dignity and respect.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm mb-4">
                2
              </div>
              <h3 className="font-heading font-bold text-base text-zinc-900 mb-2">Free On-Site Inspection</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                We assess your space in person first. Transparent, written quote before a single brush touches your floor.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm mb-4">
                3
              </div>
              <h3 className="font-heading font-bold text-base text-zinc-900 mb-2">Eco-Conscious Agents</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Low-fume, acid-free, family-safe cleaning solutions that sanitize without damaging tile glaze or harming pets.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm mb-4">
                4
              </div>
              <h3 className="font-heading font-bold text-base text-zinc-900 mb-2">On-Site Guarantee</h3>
              <p className="text-zinc-600 text-xs leading-relaxed">
                Joint supervisor walkthrough before payment. If anything is missed, we re-clean it immediately at no extra cost.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="text-center p-10 rounded-3xl bg-white border border-emerald-200 shadow-md">
          <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-2">
            Experience The Garuda Difference Yourself
          </h3>
          <p className="text-zinc-600 text-sm max-w-md mx-auto mb-6">
            Book a free inspection today or speak directly with our team in Tirupati.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-700/20 transition-all"
            >
              Book An Inspection
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-all"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

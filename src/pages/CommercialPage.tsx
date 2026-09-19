import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

interface SectorItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  scope: string[];
}

const commercialSectors: SectorItem[] = [
  {
    id: 'hospitality',
    title: 'Hotels, Chaultries & Guest Houses',
    subtitle: 'High-turnover guest room sanitation, banquet halls, and lobby marble restoration near Tirumala and temple corridors.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    tag: 'Hospitality',
    scope: [
      'Guest room mattress extraction & linen sanitization',
      'Lobby vitrified tile & Italian marble buffing',
      'Commercial kitchen chimney degreasing',
      'Restroom hard-water mineral removal'
    ]
  },
  {
    id: 'offices',
    title: 'Corporate Offices & IT Workspaces',
    subtitle: 'Comprehensive hygiene for workstation rows, executive cabins, boardrooms, and server rooms across Tirupati.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tag: 'Corporate',
    scope: [
      'Cubicle desk, keyboard & chair steam disinfection',
      'Office carpet high-pressure foam extraction',
      'Acoustic ceiling & partition dusting',
      'Pantry & cafeteria sanitation'
    ]
  },
  {
    id: 'healthcare',
    title: 'Hospitals, Clinics & Diagnostic Labs',
    subtitle: 'Surface-safe, clinical-grade sanitization conforming to infection prevention protocols with non-toxic agents.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    tag: 'Healthcare',
    scope: [
      'Clinical examination room deep sanitization',
      'Patient waiting lounge floor buffing',
      'Diagnostic equipment exterior decontamination',
      'Touchpoint antimicrobial misting'
    ]
  },
  {
    id: 'retail',
    title: 'Retail Showrooms & Shopping Outlets',
    subtitle: 'Pristine storefronts, display window polish, and high-footfall aisle floor maintenance for retail stores.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tag: 'Retail & Commercial',
    scope: [
      'Showcase glass scratch-free streakless polish',
      'Heavy-footprint tile scrubbing & buffing',
      'Inventory rack & storage area detail cleaning',
      'Entrance facade & signage wash'
    ]
  },
  {
    id: 'education',
    title: 'Educational Institutions & Colleges',
    subtitle: 'Auditoriums, computer labs, classrooms, libraries, and campus facilities cleaned during semester breaks and weekends.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    tag: 'Institutional',
    scope: [
      'Multi-bench classroom desk cleaning',
      'Auditorium seating foam shampooing',
      'Library rack & book zone dust clearance',
      'Hostel block sanitary descaling'
    ]
  },
  {
    id: 'banking',
    title: 'Banks & Financial Institutions',
    subtitle: 'Confidential, secure, after-hours deep cleaning tailored for banking branches and administrative complexes.',
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80',
    tag: 'Finance & Banking',
    scope: [
      'Cash teller counter sanitization',
      'Customer waiting lounge carpet vacuuming',
      'Security glass & partition wiping',
      'Manager cabin detail furniture polish'
    ]
  }
];

const corporateFeatures = [
  {
    title: 'Zero Business Disruption',
    description: 'We deploy crews during your non-business hours — night shifts, early mornings, or weekends — so your daily operations continue uninterrupted.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'GST Invoicing & Compliance',
    description: '100% formalized B2B billing with full GST credit invoices, official vendor verification, and documented service sign-offs.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Industrial Heavy Machinery',
    description: 'Equipped with 1800W single-disc rotary scrubbers, twin-motor wet extraction vacuums, steam vaporizers, and microfiber wiping gear.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: 'Designated Site Supervisor',
    description: 'Every commercial deployment is led by a dedicated Garuda supervisor who oversees quality checks and conducts the final walk-through with your facility manager.',
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const CommercialPage: React.FC = () => {
  const [b2bForm, setB2bForm] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    sector: 'Corporate Office',
    approxSqft: '1,000 – 3,000 sq ft',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleB2bSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = `*B2B Commercial Inquiry - Garuda Cleaning Services*%0A` +
      `*Company:* ${b2bForm.companyName}%0A` +
      `*Contact Person:* ${b2bForm.contactPerson}%0A` +
      `*Phone:* ${b2bForm.phone}%0A` +
      `*Sector:* ${b2bForm.sector}%0A` +
      `*Approx Area:* ${b2bForm.approxSqft}%0A` +
      `*Notes:* ${b2bForm.notes || 'None'}`;
    
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide uppercase mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>B2B & Institutional Deep Cleaning</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            COMMERCIAL & CORPORATE CLEANING
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            From guest houses and pilgrim hotels to corporate IT offices, diagnostic centers, retail showrooms, and campuses across Tirupati. Scheduled around your operating hours with zero business downtime.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="#b2b-form"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              Request Commercial Inspection
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-800 bg-white border border-zinc-200 hover:border-emerald-500 hover:text-emerald-700 shadow-xs transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Corporate Desk: {siteConfig.phone}</span>
            </a>
          </div>
        </div>

        {/* 4 Corporate Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {corporateFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200/80 p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="font-heading text-base font-bold text-zinc-900 mb-2">
                {feat.title}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Specialized Commercial Sectors */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
              Tailored Solutions By Industry
            </h2>
            <p className="text-zinc-600 text-sm">
              Engineered protocols designed for the distinct regulatory and hygiene demands of commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialSectors.map((sec) => (
              <motion.article
                key={sec.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-emerald-950 bg-emerald-100/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                      {sec.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2">
                      {sec.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {sec.subtitle}
                    </p>

                    <div className="pt-3 border-t border-zinc-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-2.5">
                        Key Inclusions
                      </div>
                      <ul className="space-y-2">
                        {sec.scope.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                            <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href="#b2b-form"
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-150 flex items-center justify-between cursor-pointer"
                  >
                    <span>Request Sector Proposal</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Commercial Inspection Request Form */}
        <div id="b2b-form" className="bg-white rounded-3xl border border-zinc-200/90 p-8 sm:p-12 shadow-xl shadow-zinc-200/50 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <span>Free On-Site Facility Audit</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
              Schedule A Commercial Inspection
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Our operations supervisor will conduct a zero-cost facility inspection across Tirupati and submit an itemized proposal with clear scope documentation.
            </p>
          </div>

          <form onSubmit={handleB2bSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Company / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={b2bForm.companyName}
                  onChange={(e) => setB2bForm({ ...b2bForm, companyName: e.target.value })}
                  placeholder="e.g. Sree Balaji Residency / Tech Labs Ltd"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Contact Person & Designation *
                </label>
                <input
                  type="text"
                  required
                  value={b2bForm.contactPerson}
                  onChange={(e) => setB2bForm({ ...b2bForm, contactPerson: e.target.value })}
                  placeholder="e.g. Ramesh Reddy (Facility Manager)"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={b2bForm.phone}
                  onChange={(e) => setB2bForm({ ...b2bForm, phone: e.target.value })}
                  placeholder="e.g. 98765 43210"
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Facility Sector
                </label>
                <select
                  value={b2bForm.sector}
                  onChange={(e) => setB2bForm({ ...b2bForm, sector: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                >
                  <option value="Hotels & Hospitality">Hotels & Hospitality</option>
                  <option value="Corporate Office">Corporate Office</option>
                  <option value="Hospital & Clinic">Hospital & Clinic</option>
                  <option value="Retail & Showroom">Retail & Showroom</option>
                  <option value="School & College">School & College</option>
                  <option value="Bank & Financial">Bank & Financial</option>
                  <option value="Other Commercial">Other Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Approx. Floor Area
                </label>
                <select
                  value={b2bForm.approxSqft}
                  onChange={(e) => setB2bForm({ ...b2bForm, approxSqft: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-800 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
                >
                  <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                  <option value="1,000 – 3,000 sq ft">1,000 – 3,000 sq ft</option>
                  <option value="3,000 – 8,000 sq ft">3,000 – 8,000 sq ft</option>
                  <option value="8,000 – 20,000 sq ft">8,000 – 20,000 sq ft</option>
                  <option value="20,000+ sq ft (Campus)">20,000+ sq ft (Campus)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Specific Cleaning Requirements / Shift Timing
              </label>
              <textarea
                rows={3}
                value={b2bForm.notes}
                onChange={(e) => setB2bForm({ ...b2bForm, notes: e.target.value })}
                placeholder="Mention any specific timing needs (e.g. night shift only, Sunday morning deep scrub, marble buffing, etc.)..."
                className="w-full px-4 py-3 rounded-xl text-sm bg-zinc-50 border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-emerald-600 focus:outline-hidden transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Commercial Audit Request (WhatsApp Dispatch)</span>
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </button>

            {submitted && (
              <p className="text-center text-xs text-emerald-700 font-medium">
                Thank you. Redirecting to WhatsApp to send your commercial inquiry directly to our supervisory desk!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

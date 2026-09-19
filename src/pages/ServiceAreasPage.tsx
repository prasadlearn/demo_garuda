import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';

interface AreaZone {
  zoneName: string;
  description: string;
  popularLocalities: string[];
  serviceHighlight: string;
}

const areaZones: AreaZone[] = [
  {
    zoneName: 'Central & University Corridor',
    description: 'High-density residential apartments, staff quarters, and professor residences.',
    popularLocalities: ['S.V. University Area', 'Balaji Colony', 'Bhavani Nagar', 'Vinayaka Nagar'],
    serviceHighlight: '1 & 2 BHK Full Home Deep Cleaning, Bathroom Descaling'
  },
  {
    zoneName: 'Alipiri & Foothill Zone',
    description: 'Luxury independent villas, pilgrim cottages, and serene residential retreats near the sacred hills.',
    popularLocalities: ['Alipiri Road', 'Peruru', 'Kapila Theertham Surrounds', 'Cherlopalli'],
    serviceHighlight: 'Multi-Floor Villa Deep Cleaning, Exterior Balcony Washing'
  },
  {
    zoneName: 'Commercial & Transport Corridors',
    description: 'Bustling retail shops, corporate offices, hotel guest houses, and medical clinics.',
    popularLocalities: ['AIR Bypass Road', 'Renigunta Road', 'K.T. Road', 'Leela Mahal Circle'],
    serviceHighlight: 'Office Sanitization, Commercial Floor Scrubbing, Display Glass Polish'
  },
  {
    zoneName: 'Southern & Eastern Expansion',
    description: 'Rapidly growing family apartment townships, new construction projects, and pilgrimage hubs.',
    popularLocalities: ['Tiruchanoor Road', 'M.R. Palle', 'Padmavathi Puram', 'Tirupati Bypass Road'],
    serviceHighlight: 'Move-In / Move-Out Cleaning, Post-Construction Debris Clearance'
  },
  {
    zoneName: 'Heritage & Western Suburban Belt',
    description: 'Sprawling farmhouses, standalone residences, educational institutions, and heritage villas.',
    popularLocalities: ['Chandragiri Road', 'Mallavaram', 'Narayanagiri', 'Mangalam'],
    serviceHighlight: 'Water Tank 6-Stage Cleaning, Classroom & Institutional Sanitation'
  }
];

export const ServiceAreasPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredLocalities = siteConfig.localities.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide uppercase mb-3">
            <span>Local Coverage</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-3">
            WHERE WE OPERATE
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Prompt cleaning crews deployed directly across every residential neighborhood, bypass road, and suburban township in Tirupati.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your Tirupati locality..."
              className="w-full px-4 py-3 pl-11 rounded-xl text-sm bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:outline-hidden focus:border-[#D97706] shadow-2xs transition-all"
            />
            <svg className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 text-xs font-medium cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Real-Text Localities Grid */}
        <div className="mb-16">
          <h2 className="font-heading text-xl font-bold text-zinc-900 mb-4 text-center">
            Recognized Localities & Areas in Tirupati
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredLocalities.map((loc) => (
              <div
                key={loc.name}
                className={`p-3.5 rounded-xl border flex items-center gap-2.5 transition-all ${
                  loc.highlight
                    ? 'border-amber-300 bg-amber-50/70 text-zinc-900 font-semibold shadow-2xs'
                    : 'border-zinc-200 bg-white text-zinc-700'
                }`}
              >
                <svg className="w-4 h-4 text-[#D97706] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-xs sm:text-sm">{loc.name}</span>
              </div>
            ))}
          </div>

          {filteredLocalities.length === 0 && (
            <div className="text-center py-6 text-zinc-500 text-sm">
              Your locality &ldquo;{searchTerm}&rdquo; is not explicitly listed, but we likely cover it! Call us at{' '}
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-[#D97706] font-semibold underline">
                {siteConfig.phone}
              </a>{' '}
              for instant dispatch confirmation.
            </div>
          )}
        </div>

        {/* Regional Zone Guides */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
              Tirupati Zone Cleaning Guide
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Tailored cleaning protocols structured for different architectural structures across our city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaZones.map((zone, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B45309] mb-1.5">
                    Zone {idx + 1}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-zinc-900 mb-2">
                    {zone.zoneName}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {zone.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">Key Neighborhoods:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {zone.popularLocalities.map((pl, pIdx) => (
                        <span key={pIdx} className="text-xs bg-zinc-100 px-2 py-0.5 rounded text-zinc-700 font-medium">
                          {pl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-600">
                  <span className="text-[#B45309] font-bold block">Most Booked:</span>
                  {zone.serviceHighlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dispatch & Travel Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold text-zinc-900 mb-1">
              Same-Day Dispatch & On-Site Inspection
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-xl">
              We operate equipped mobile service vans. Our supervisors carry specialized surface inspection tools to provide accurate estimates with zero travel charge anywhere in Tirupati.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D97706] to-[#B45309] hover:from-[#B45309] hover:to-[#92400E] shadow-sm shadow-amber-600/30 transition-all"
          >
            Check Service Availability
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface DemoCase {
  id: string;
  title: string;
  category: string;
  beforeTitle: string;
  afterTitle: string;
  beforeImage: string;
  afterImage: string;
  details: string;
  equipmentUsed: string;
}

const demoCases: DemoCase[] = [
  {
    id: 'sofa',
    title: 'Fabric Sofa Foam Shampooing',
    category: 'Upholstery Care',
    beforeTitle: 'Before: Embedded Dust & Surface Stains',
    afterTitle: 'After: High-Pressure Moisture Extraction',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of deep-fiber foam agitation breaking down embedded oils, followed by industrial moisture vacuuming.',
    equipmentUsed: 'Twin-motor wet extraction vacuum & fabric-safe shampoo'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Hard-Water Descaling',
    category: 'Sanitary Deep Clean',
    beforeTitle: 'Before: Heavy Calcium & Limescale Build-up',
    afterTitle: 'After: Acid-Free Descaled Mirror Finish',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of non-fuming descaling paste dissolving mineral glaze on ceramic tiles, glass partitions, and chrome taps.',
    equipmentUsed: 'Rotary tile buffer & non-corrosive descaling solution'
  },
  {
    id: 'kitchen',
    title: 'Kitchen Chimney & Tile Degreasing',
    category: 'Kitchen Revival',
    beforeTitle: 'Before: Carbonized Grease & Oil Film',
    afterTitle: 'After: Steam Vapor Dissolved Polish',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of high-temperature vapor cutting through polymerized oil around stove hobs and exhaust baffles.',
    equipmentUsed: 'Dry steam vapor generator & food-safe degreaser'
  },
  {
    id: 'floor',
    title: 'Vitrified Tile & Marble Buffing',
    category: 'Floor Restoration',
    beforeTitle: 'Before: Darkened Grout & Footprint Haze',
    afterTitle: 'After: Neutral pH Single-Disc Machine Buff',
    beforeImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of single-disc orbital scrubbing lifting ground-in grime from grout lines and floor pores.',
    equipmentUsed: 'Single-disc rotary scrubbing machine & neutral detergent'
  }
];

export const TransformationsPage: React.FC = () => {
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = demoCases[activeCaseIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <div className="w-full pt-32 sm:pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 min-h-screen text-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Process & Results</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-3">
            TRANSFORMATIONS & WORKFLOW
          </h1>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Drag the comparison slider to preview our deep-cleaning precision standards, and explore our 5-stage hygiene workflow.
          </p>
        </div>

        {/* Authenticity Notice */}
        <div className="mb-10 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                Real Client Transformations Coming Soon
              </span>
              <span className="text-xs text-zinc-500 font-medium">100% Genuine Photography Standard</span>
            </div>
            <p className="text-zinc-700 text-xs sm:text-sm mt-1 leading-relaxed">
              We stand strictly against using fake or stock transformation photos. The interactive slider below illustrates our surface cleaning methodology. Genuine high-definition before/after case studies from our inaugural Tirupati customer jobs are currently being documented and will be featured here shortly!
            </p>
          </div>
        </div>

        {/* Demo Case Switcher */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {demoCases.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCaseIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                activeCaseIdx === idx
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="bg-zinc-100 rounded-3xl border border-zinc-200 p-4 sm:p-6 shadow-xl shadow-zinc-200/50 mb-20">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[340px] sm:h-[440px] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none"
          >
            {/* AFTER Layer */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={currentCase.afterImage}
                alt={currentCase.afterTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
                <div className="flex justify-end">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600/90 text-white shadow-md border border-emerald-400/30">
                    Result Simulation
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-white text-base sm:text-xl font-bold">{currentCase.afterTitle}</div>
                  <div className="text-emerald-200 text-xs mt-1">Deep Cleaned & Sanitized</div>
                  <div className="text-white/60 text-[10px] tracking-widest uppercase mt-2.5 font-semibold">[ ILLUSTRATIVE PREVIEW ]</div>
                </div>

                <div className="text-right text-xs text-emerald-100 font-medium">
                  Method: {currentCase.equipmentUsed}
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img
                src={currentCase.beforeImage}
                alt={currentCase.beforeTitle}
                className="w-full h-full object-cover filter contrast-75 brightness-75 sepia-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
                <div className="flex justify-start">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
                    Initial Condition
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-white text-base sm:text-xl font-bold">{currentCase.beforeTitle}</div>
                  <div className="text-stone-300 text-xs mt-1">Accumulated Dust, Grease & Scale</div>
                  <div className="text-white/60 text-[10px] tracking-widest uppercase mt-2.5 font-semibold">[ ILLUSTRATIVE PREVIEW ]</div>
                </div>

                <div className="text-left text-xs text-stone-300 font-medium">
                  Initial Inspection Point
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-xl border-2 border-emerald-600">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
            <span className="italic">{currentCase.details}</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              ↔ Drag slider handle to compare
            </span>
          </div>
        </div>

        {/* 5-Stage Precision Process */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
              Our 5-Stage Precision Workflow
            </h2>
            <p className="text-zinc-600 text-sm">
              How our certified team turns cluttered, stained spaces into hygienic sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Free On-Site Inspection',
                desc: 'Our supervisor inspects square footage, tile materials, and stain depth to give you an upfront written quote.'
              },
              {
                step: '02',
                title: 'Dry Preparation',
                desc: 'Deep HEPA dry vacuuming of ceiling cobwebs, floor grit, and upholstery crevices before applying solutions.'
              },
              {
                step: '03',
                title: 'Machine Deep Scrub',
                desc: 'Rotary single-disc floor scrubbing, wet extraction for fabric, or steam vapor application for kitchen grease.'
              },
              {
                step: '04',
                title: 'Sanitization & Buffing',
                desc: 'Anti-bacterial wipe-down of touchpoints, chrome polishing, and streak-free squeegee glass finish.'
              },
              {
                step: '05',
                title: 'Joint Walkthrough',
                desc: 'You inspect room-by-room with our supervisor. We only complete the handover when you are 100% happy.'
              }
            ].map((p, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between hover:border-emerald-300 hover:shadow-md transition-all">
                <div>
                  <div className="text-2xl font-bold font-heading text-emerald-700 mb-2">{p.step}</div>
                  <h3 className="font-heading font-bold text-base text-zinc-900 mb-1.5">{p.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-100 text-[10px] uppercase font-bold text-emerald-600">
                  Garuda Standard
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-white border border-emerald-200 shadow-md">
          <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-2">Ready to witness the transformation?</h3>
          <p className="text-zinc-600 text-sm mb-6">Book a free inspection for your home, villa, or office in Tirupati today.</p>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 inline-block transition-all"
          >
            Schedule Free Inspection
          </Link>
        </div>
      </div>
    </div>
  );
};

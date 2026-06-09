import React, { useState } from 'react';
import { startupPortfolio } from '../data/researchData';
import { Building, TrendingUp, Users, ArrowRight, Zap, Target, Bookmark, Sparkles } from 'lucide-react';
import { StartupPortfolio } from '../types';

export default function StartupHubView() {
  const [selectedStartup, setSelectedStartup] = useState<StartupPortfolio>(startupPortfolio[0]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Editorial Header */}
      <div className="border-b border-[#DADCE0] pb-12 mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ VENTURE TRANSLATION</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
          Startup Hub
        </h1>
        <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
          Uncompromised research translates into commercial ventures. Kumaraguru Incubators provide patented material formulations and computational engines with seed capital and legal structures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Card - Active Selected Startup Detail */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 pb-4 border-b">
              <div>
                <span className="text-[9px] uppercase font-mono bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded font-bold">
                  PORTFOLIO CO-VENTURE REGISTER
                </span>
                <h3 className="font-display font-bold text-neutral-900 text-xl mt-2.5 leading-tight">
                  {selectedStartup.name}
                </h3>
                <span className="text-xs text-[#5F6368] block mt-1 italic">&ldquo;{selectedStartup.tagline}&rdquo;</span>
              </div>

              {/* Status info */}
              <div className="text-right shrink-0">
                <span className="text-[10px] font-mono text-[#5F6368] block">Stage • Funding</span>
                <span className="font-display font-semibold text-xs text-neutral-800 bg-[#F8F9FA] px-2.5 py-1 border rounded-md block mt-1.5 whitespace-nowrap">
                  {selectedStartup.fundingStage}
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">The Commercial Venture</span>
              <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed font-sans">{selectedStartup.description}</p>
            </div>

            {/* Inception journey */}
            <div className="p-4 bg-purple-50/20 border border-purple-100 rounded-xl">
              <span className="text-[10px] font-mono uppercase text-purple-700 block font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Incubation &amp; Research Inception Journey
              </span>
              <p className="text-neutral-500 text-[11px] mt-1.5 leading-relaxed">{selectedStartup.journey}</p>
            </div>

            {/* Impact stats metric loops */}
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-2.5">Societal / Ecological Impact Realized</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(selectedStartup.impactMetrics).map(([key, value]) => (
                  <div key={key} className="p-3 bg-neutral-50 border border-neutral-150 rounded-lg">
                    <span className="text-[9px] font-mono text-[#5F6368] uppercase block">{key}</span>
                    <span className="text-xs font-semibold text-[#202124] mt-1 block">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-[#5F6368] pt-4 border-t mt-6 border-neutral-100">
            <span>Portfolio Status: {selectedStartup.status}</span>
            <span>Venture Incubation ID: RE-INC-{selectedStartup.id.toUpperCase()}</span>
          </div>
        </div>

        {/* Right Card - Incubation pipeline process tracking steps */}
        <div className="lg:col-span-4 flex flex-col justify-between border border-neutral-200 bg-[#F8F9FA] rounded-2xl p-6">
          <div>
            <span className="text-[10px] uppercase font-mono text-[#5F6368] block">INCUBATION CORRIDOR PIPELINE</span>
            <p className="text-neutral-400 text-[10px] mt-0.5">How RE research translates into commercial products.</p>
            
            <div className="space-y-4 mt-6">
              {[
                { name: '01. Raw Hypothesis', state: 'Completed', detail: 'Fellows prove baseline mechanical or algorithmic values early.' },
                { name: '02. Patent Protection', state: 'Completed', detail: 'Venture legal advisors submit structural patents to secure assets.' },
                { name: '03. Pilot Integration', state: 'Active', detail: 'Building physical production facilities or scaling cloud servers.' },
                { name: '04. Seed Investment', state: 'Active', detail: 'Connecting scholars to local angels and seed impact capital.' }
              ].map((step, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-purple-300">
                  <span className="absolute -left-1.5 top-1.5 w-2.5 h-2.5 bg-purple-500 rounded-full"></span>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#202124]">{step.name}</span>
                    <span className="text-[8px] font-mono bg-purple-100 px-1.5 h-3.5 flex items-center rounded text-purple-700 tracking-wider uppercase font-semibold">{step.state}</span>
                  </div>
                  <p className="text-neutral-500 text-[10px] leading-tight mt-1">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Incubation join help */}
          <div className="mt-8 pt-4 border-t border-neutral-200">
            <span className="text-[9px] font-mono text-neutral-450 uppercase block">Have a project?</span>
            <a href="#join" className="text-xs font-bold text-neutral-900 hover:text-purple-600 flex items-center gap-1 mt-1 transition-colors">
              Submit Venture Proposal <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Startup directory */}
      <div>
        <h3 className="font-display font-bold text-lg text-neutral-900 mb-4 block">Active Spin-off Portfolios</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {startupPortfolio.map((s) => (
            <div
              id={`startup-selector-card-${s.id}`}
              key={s.id}
              onClick={() => setSelectedStartup(s)}
              className={`p-5 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${
                selectedStartup.id === s.id 
                  ? 'bg-purple-50/10 border-purple-500 shadow-sm' 
                  : 'bg-white border-neutral-200 hover:border-neutral-500'
              }`}
            >
              <div className="p-3 bg-[#F8F9FA] text-neutral-600 rounded-lg shrink-0">
                <Building className="w-5 h-5 text-purple-600" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-sm text-[#202124] truncate">{s.name}</h4>
                <p className="text-neutral-550 text-xs mt-1 truncate">{s.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

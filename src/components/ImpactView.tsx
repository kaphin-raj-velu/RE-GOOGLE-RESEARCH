import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  TrendingUp, 
  ShieldAlert, 
  HelpCircle, 
  Sparkles, 
  DollarSign, 
  Compass,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function ImpactView() {
  const [activeChartYear, setActiveChartYear] = useState<string>('2026');

  // Stats
  const metrics = [
    { label: 'Total Researchers Funded', val: '240+', trend: '+18% YoY', icon: Award, color: 'text-blue-600 bg-blue-50 border-blue-100' },
    { label: 'Scopus Indexed Papers', val: '64+', trend: '+22% YoY', icon: BookOpen, color: 'text-green-600 bg-green-50 border-green-100' },
    { label: 'Secured Commercial Patents', val: '8 Filed / 4 Active', trend: 'Global filings', icon: TrendingUp, color: 'text-amber-600 bg-amber-50 border-amber-100' },
    { label: 'Consolidated State Grants', val: '₹3.8 Cr+', trend: 'DST, BIRAC, Industry', icon: DollarSign, color: 'text-purple-600 bg-purple-50 border-purple-100' }
  ];

  // Sharded chart data logs
  const yearlyTrend = [
    { year: '2020', papers: 14, patents: 1, grants: '₹40L', heightPct: '20%' },
    { year: '2021', papers: 22, patents: 2, grants: '₹85L', heightPct: '35%' },
    { year: '2022', papers: 35, patents: 4, grants: '₹1.4Cr', heightPct: '55%' },
    { year: '2023', papers: 44, patents: 5, grants: '₹2.1Cr', heightPct: '70%' },
    { year: '2024', papers: 51, patents: 6, grants: '₹2.8Cr', heightPct: '82%' },
    { year: '2025', papers: 58, patents: 7, grants: '₹3.4Cr', heightPct: '94%' },
    { year: '2026', papers: 64, patents: 8, grants: '₹3.8Cr', heightPct: '100%' }
  ];

  const activeData = yearlyTrend.find(y => y.year === activeChartYear) || yearlyTrend[6];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Editorial Header */}
      <div className="border-b border-neutral-100 pb-8 mb-10">
        <span className="text-xs uppercase tracking-widest font-mono text-neutral-400">RÉ EMPIRICAL METRICS REGISTER</span>
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#202124] mt-1 tracking-tight">
          Systemic Research Impact
        </h1>
        <p className="text-neutral-500 font-sans text-sm mt-3 max-w-2xl leading-relaxed">
          Tracking the translation of simple student curiosity into publications, filed patent assets, central government grants, and real-world technology deployments in local industries.
        </p>
      </div>

      {/* Numerical Metrics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {metrics.map((m) => (
          <div key={m.label} className="p-5 bg-white border border-[#DADCE0] rounded-xl flex flex-col justify-between group">
            <div>
              <div className={`p-2 w-9 h-9 rounded-lg flex items-center justify-center ${m.color} mb-4`}>
                <m.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] uppercase font-mono text-[#5F6368] block">{m.label}</span>
              <span className="font-display font-extrabold text-2xl text-[#202124] mt-1.5 block">{m.val}</span>
            </div>
            <span className="text-[9px] font-mono text-neutral-400 mt-4 block">{m.trend}</span>
          </div>
        ))}
      </div>

      {/* Grid: SVG Charts and Domain Allocations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        
        {/* Left Card - Research Output Growth (Cubic line-chart mockup) */}
        <div className="lg:col-span-8 border border-neutral-200 rounded-2xl p-6 bg-white flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#5F6368] block">PERFORMANCE PROGRESSIONS</span>
                <h3 className="font-display font-bold text-neutral-900 text-base mt-0.5">Scopus Papers &amp; Patents Velocity</h3>
              </div>
              <div className="flex gap-1 overflow-x-auto">
                {yearlyTrend.map((y) => (
                  <button
                    id={`chart-btn-year-${y.year}`}
                    key={y.year}
                    onClick={() => setActiveChartYear(y.year)}
                    className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-md cursor-pointer transition-all ${
                      activeChartYear === y.year 
                        ? 'bg-neutral-900 text-white' 
                        : 'bg-neutral-50 text-[#5F6368] hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {y.year}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive SVG Line Plot */}
            <div className="w-full h-56 mt-6 relative flex items-end">
              {/* Background grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                <div className="border-b border-[#DADCE0] w-full h-0"></div>
                <div className="border-b border-[#DADCE0] w-full h-0"></div>
                <div className="border-b border-[#DADCE0] w-full h-0"></div>
                <div className="border-b border-[#DADCE0] w-full h-0"></div>
              </div>

              {/* Graphical Plot container */}
              <svg className="w-full h-full max-h-[180px] absolute inset-x-0 bottom-0" viewBox="0 0 700 150">
                <defs>
                  <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4285F4" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#4285F4" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                {/* Under area shaded glow */}
                <path d="M50,130 C130,105 230,85 330,65 C430,48 530,35 650,22 L650,140 L50,140 Z" fill="url(#areaGlow)" />
                
                {/* Horizontal reference lines */}
                <path d="M50,130 C130,105 230,85 330,65 C430,48 530,35 650,22" fill="none" stroke="#4285F4" strokeWidth="2.5" />
                
                {/* Plot Nodes */}
                <circle cx="50" cy="130" r="4.5" fill="#4285F4" />
                <circle cx="150" cy="115" r="4" fill="#4285F4" />
                <circle cx="260" cy="92" r="4" fill="#4285F4" />
                <circle cx="370" cy="71" r="4" fill="#4285F4" />
                <circle cx="480" cy="52" r="4" fill="#4285F4" />
                <circle cx="580" cy="38" r="4" fill="#4285F4" />
                <circle cx="650" cy="22" r="5" fill="#34A853" />
              </svg>

              {/* Year marker visual text lines */}
              <div className="absolute inset-x-0 bottom-0 flex justify-between px-2 pt-2 text-[9px] font-mono font-medium text-neutral-400 select-none">
                <span>2020</span>
                <span>2021</span>
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
                <span>2026</span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-neutral-400 font-mono mt-6 border-t pt-3 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-500" /> Active Chart Selected Focus: {activeData.year} Output metrics → {activeData.papers} Scopus publications, {activeData.patents} patents filed, seed grant capital of {activeData.grants}.
          </p>
        </div>

        {/* Right Card - Sector resource allocations (Donut chart representation) */}
        <div className="lg:col-span-4 border border-neutral-200 bg-white rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#5F6368] block">RESOURCE DISTRIBUTIONS</span>
            <h3 className="font-display font-bold text-neutral-900 text-base mt-0.5">Budget Allotment by Sector</h3>
            
            {/* Modular custom vector representation */}
            <div className="relative w-40 h-40 mx-auto my-7 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#DADCE0" strokeWidth="11" fill="none" />
                {/* Natural composite segment */}
                <circle cx="50" cy="50" r="38" stroke="#FBBC05" strokeWidth="12" strokeDasharray="238" strokeDashoffset="50" fill="none" />
                {/* AI / Epigraphy segment */}
                <circle cx="50" cy="50" r="38" stroke="#4285F4" strokeWidth="12" strokeDasharray="238" strokeDashoffset="130" fill="none" />
                {/* MedTech segment */}
                <circle cx="50" cy="50" r="38" stroke="#EA4335" strokeWidth="12" strokeDasharray="238" strokeDashoffset="190" fill="none" />
                {/* Water Harvesting segment */}
                <circle cx="50" cy="50" r="38" stroke="#34A853" strokeWidth="12" strokeDasharray="238" strokeDashoffset="220" fill="none" />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display font-extrabold text-[#202124] text-lg leading-none">6 Sectors</span>
                <span className="text-[10px] font-mono text-neutral-400 mt-1 uppercase">Under study</span>
              </div>
            </div>

            {/* Segment legend list */}
            <div className="space-y-2 mt-4 text-xs font-semibold text-neutral-800">
              <div className="flex items-center justify-between text-neutral-600">
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-xs"></span>
                  <span>NFRC Bio-Composites</span>
                </div>
                <span className="font-mono font-medium text-[11px]">35%</span>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-xs"></span>
                  <span>Neural Computing</span>
                </div>
                <span className="font-mono font-medium text-[11px]">28%</span>
              </div>
              <div className="flex items-center justify-between text-neutral-600">
                <div className="flex items-center gap-1.5 font-sans">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-xs"></span>
                  <span>MedTech Interfaces</span>
                </div>
                <span className="font-mono font-medium text-[11px]">22%</span>
              </div>
            </div>
          </div>

          <span className="text-[9px] font-mono text-neutral-400 border-t pt-3 mt-6 block uppercase tracking-widest text-center">
            RE FINANCE BOARD INDEPENDENT CERTIFICATION
          </span>
        </div>
      </div>

      {/* Narrative Success Stories block */}
      <div>
        <h3 className="font-display font-bold text-xl text-neutral-900 mb-4 block">Regional Social Actions &amp; Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-neutral-200">
            <h4 className="font-display font-bold text-base text-[#202124]">Sirumugai Silk Co-op Transition</h4>
            <p className="text-[#5F6368] text-xs leading-relaxed mt-2.5 font-sans">
              Deployment of the custom REFLECT Pneumatic Loom assists restored livelihoods for 18 handloom weavers whose spinal issues barred them from traditional pedaling. Today, the Sirumugai weaving guild has registered a 25% throughput increase without compromising handcraft specifications.
            </p>
          </div>

          <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-neutral-200">
            <h4 className="font-display font-bold text-base text-[#202124]">National Bio-Composite Patent Translation</h4>
            <p className="text-[#5F6368] text-xs leading-relaxed mt-2.5 font-sans">
              Our patented chemical washing agents treating cellulose coir have been officially licensed to local packaging entities, displacing polystyrene sheets inside domestic electric motor shipping casings across South India.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { RESEARCH_CIRCLES } from '../dataResearchCircles';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Sprout, ShieldAlert, Cpu, HeartPulse, TreePine, Zap, Navigation, GraduationCap, Compass } from 'lucide-react';

interface ResearchAreasPageProps {
  onNavigate: (hash: string) => void;
}

export default function ResearchAreasPage({ onNavigate }: ResearchAreasPageProps) {
  
  // Icon helper to correspond to each Research Circle
  const getCircleIcon = (id: string) => {
    switch (id) {
      case 'environmental-science':
        return <TreePine className="h-6 w-6 text-[#34A853]" />;
      case 'bioscience':
        return <HeartPulse className="h-6 w-6 text-[#EA4335]" />;
      case 'renewable-energy':
        return <Zap className="h-6 w-6 text-[#FBBC05]" />;
      case 'automotive':
        return <Navigation className="h-6 w-6 text-[#1A73E8]" />;
      case 'educational':
        return <Cpu className="h-6 w-6 text-[#9333EA]" />;
      case 'design-society':
        return <Compass className="h-6 w-6 text-[#FF6D00]" />;
      default:
        return <Cpu className="h-6 w-6 text-slate-500" />;
    }
  };

  const bannerImages: Record<string, string> = {
    "environmental-science": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop",
    "bioscience": "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?q=80&w=600&auto=format&fit=crop",
    "renewable-energy": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop",
    "automotive": "https://images.unsplash.com/photo-1516594798947-e6f55041993c?q=80&w=600&auto=format&fit=crop",
    "educational": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    "design-society": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop"
  };

  return (
    <div className="w-full bg-white font-sans text-gray-900 selection:bg-[#4285F4]/10 pb-24">
      
      {/* ================= EDITORIAL HERO BLOCK ================= */}
      <section className="relative overflow-hidden py-24 border-b border-[#DADCE0] bg-white bg-grid-pattern" id="circles-hero">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20 relative z-10 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-6">


            <h1 className="font-display text-[44px] sm:text-[64px] lg:text-[76px] font-black tracking-tight text-gray-900 leading-[1.05] select-none text-center">
              Explore our Research Circles
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-8 max-w-4xl mx-auto" id="hero-intro-cards">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between" id="intro-card-1">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#4285F4]/10 text-[#4285F4]">
                    <GraduationCap className="h-6 w-6" id="intro-card-icon-1" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900">
                    Long-term Communities
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-900 leading-relaxed font-normal">
                    Research at Ré is organized through Research Circles—long-term communities where students, faculty mentors, and researchers investigate questions that matter.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between" id="intro-card-2">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-[#34A853]/10 text-[#34A853]">
                    <Sparkles className="h-6 w-6" id="intro-card-icon-2" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900">
                    Ecosystem & Impact
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-gray-900 leading-relaxed font-normal">
                    Each circle represents a distinct area of inquiry, built on years of accumulated knowledge, collaborative exploration, and documented discoveries. Together, they form the foundation of Ré's research ecosystem. Whether you're passionate about sustainability, healthcare, mobility, energy, culture, design, or emerging technologies, there is a circle waiting for your contribution.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTERMEDIARY SEPARATOR & MOTIVATION BANNER ================= */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-20 py-16 border-b border-[#E5E7EB]" id="circles-inquiry">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-mono font-bold text-[#34A853] uppercase tracking-widest block">Be part of the inquiry.</span>
          <h2 className="font-display text-[24px] sm:text-[28px] font-bold text-gray-900 tracking-tight">Research thrives when curious minds come together.</h2>
          <p className="text-[15px] text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            Every Research Circle is more than a research group. It is a living community of inquiry where ideas are explored, knowledge is documented, and discoveries are carried forward by future generations of researchers.
          </p>
        </div>
      </section>

      {/* ================= RESEARCH CIRCLES CATALOG ================= */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-20 py-20" id="circles-catalog">
        <div className="space-y-24">
          {RESEARCH_CIRCLES.map((circle, index) => (
            <div 
              key={circle.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-b border-[#E5E7EB] pb-20 last:border-b-0 last:pb-0 text-left"
              id={`circle-card-${circle.id}`}
            >
              
              {/* Left visual column / Image collage & Category wrapper (cols 5) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="h-[260px] w-full rounded-[24px] overflow-hidden border border-gray-100 shadow-sm relative group bg-gray-50 select-none">
                  <img 
                    src={bannerImages[circle.id]} 
                    alt={circle.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Absolute circle icon overlay */}
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-white/20 flex items-center justify-center">
                    {getCircleIcon(circle.id)}
                  </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="block text-xs font-bold text-[#4285F4] uppercase tracking-wider mb-2 font-mono">Featured Research Papers & Prototypes</span>
                  <ul className="space-y-2 text-sm text-gray-700 font-light leading-relaxed">
                    {circle.featuredResearch.map((res, ridx) => (
                      <li key={ridx} className="flex items-start space-x-2">
                        <span className="text-[#34A853] font-bold select-none">•</span>
                        <span>{res.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right text column / Areas of Investigation (cols 7) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-gray-900 tracking-tight leading-snug">
                    {circle.title}
                  </h2>
                  <p className="text-[15px] font-medium text-[#34A853] block">
                    {circle.tagline}
                  </p>
                  <p className="text-[15px] sm:text-[16px] text-gray-500 font-light leading-relaxed">
                    {circle.description}
                  </p>
                </div>

                {/* Areas of Investigation Bullet Points */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Areas of Investigation</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {circle.areasOfInvestigation.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-500 shrink-0" />
                        <span className="text-sm font-semibold text-gray-700">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Circle Action Click Button */}
                <div className="pt-6">
                  <button
                    onClick={() => onNavigate(`#/research-circle/${circle.id}`)}
                    className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-black text-white px-6 py-3.5 rounded-full font-bold text-[14px] shadow-sm transition-all hover:scale-[1.01] cursor-pointer group"
                  >
                    <span>→ Explore Circle</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ================= PHILOSOPHICAL MOTIVATION SEPARATOR ================= */}
      <section className="bg-gray-50 border-y border-[#E5E7EB] py-20" id="circles-continuity">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-20 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-1 text-xs font-bold text-[#4285F4] uppercase tracking-widest bg-[#4285F4]/5 border border-[#4285F4]/10 px-3 py-1 rounded-full">
              <Sparkles className="h-3 w-3" />
              <span>Sustained Scientific Continuity</span>
            </span>
            
            <h2 className="font-display text-[26px] sm:text-[34px] font-bold text-gray-900 tracking-tight leading-snug">
              Research that compounds over time.
            </h2>
            
            <p className="text-[17px] text-gray-500 font-light leading-relaxed">
              Most student projects end when students graduate. Research Circles are designed differently.
            </p>
            
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Every cohort inherits documented findings, advances ongoing investigations, and contributes knowledge for future researchers to build upon. This continuity transforms individual effort into collective progress. It is how research culture is sustained.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL FIND YOUR CIRCLE CTA CARD ================= */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-20 py-20" id="circles-cta">
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-black rounded-[36px] p-8 sm:p-14 text-center text-white relative overflow-hidden select-none shadow-xl border border-white/5">
          
          {/* Elegant glowing blurs */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#4285F4]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 tracking-widest uppercase bg-emerald-500/[0.08] px-3.5 py-1.5 rounded-full border border-emerald-500/20 shadow-xs">
              <GraduationCap className="h-4 w-4" />
              <span>Join us</span>
            </span>
            
            <h2 className="font-display text-[26px] sm:text-[34px] font-semibold tracking-tight text-white leading-tight">
              Be part of the inquiry.
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-gray-400 font-light leading-relaxed">
              Every Research Circle is more than a study group. It is a living community of inquiry where discoveries are documented and carried forward by future generations of student researchers. Connect with our mentors to explore.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('#/careers')}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-[1.01] shadow-sm cursor-pointer h-[48px]"
              >
                Apply to Fellowships
              </button>
              <button
                onClick={() => onNavigate('#/about')}
                className="bg-white/10 hover:bg-white/15 text-white border border-white/10 font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:scale-[1.01] cursor-pointer h-[48px]"
              >
                Contact Dean's Board
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight, BookOpen, Layers, Cpu, Zap, Globe, HeartPulse, Sparkles, GraduationCap, Award, Building, Compass, History, HelpCircle, Users } from 'lucide-react';

interface HeaderProps {
  currentHash: string;
  onNavigate: (hash: string) => void;
  onSearchOpen?: () => void;
}

export default function Header({ currentHash, onNavigate, onSearchOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'research' | 'programs' | 'about' | null>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Autofocus search input when expanded
  useEffect(() => {
    if (searchExpanded) {
      searchInputRef.current?.focus();
    }
  }, [searchExpanded]);

  const handleMouseEnter = (menu: 'research' | 'programs' | 'about') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleNavClick = (hash: string) => {
    onNavigate(hash);
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setSearchExpanded(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Trigger search overlay via hash or fallback trigger
      if (onSearchOpen) {
        onSearchOpen();
      } else {
        onNavigate('#/projects'); 
      }
    }
  };

  const isActive = (hash: string) => {
    if (hash === '#/research-areas') {
      return (
        currentHash === '#/research-areas' ||
        currentHash === '#/projects' ||
        currentHash === '#/publications' ||
        currentHash === '#/labs' ||
        currentHash === '#/challenges'
      );
    }
    if (hash === '#/programs') return currentHash === '#/programs';
    if (hash === '#/events') return currentHash === '#/events';
    if (hash === '#/careers') return currentHash === '#/careers';
    if (hash === '#/about') return currentHash === '#/about';
    if (hash === '#/resources') return currentHash === '#/resources';
    return false;
  };

  return (
    <header 
      className="sticky top-0 z-50 h-[80px] w-full border-b border-[#DADCE0] bg-white/95 backdrop-blur-md text-[#202124] select-none shadow-sm font-sans"
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-20 relative">
        
        {/* ================= NORMAL LAYOUT: LEFT SIDE WORDMARK & NAV ================= */}
        {!searchExpanded ? (
          <>
            {/* Logo Wordmark - Rendered as Full High-Fidelity horizontal logo branding */}
            <div 
              onClick={() => handleNavClick('#/')}
              className="flex cursor-pointer items-center space-x-3 group select-none"
              id="header-logo-container"
            >
              {/* Custom SVG Research Logo Emblem matching Google schema */}
              <div className="flex items-center space-x-2">
                <svg 
                  className="h-[36px] w-[36px] flex-shrink-0 select-none transition-transform duration-300 group-hover:scale-105" 
                  viewBox="0 0 240 240" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="15" y="45" width="160" height="80" rx="12" transform="rotate(-30 95 85)" fill="#75D1B5" />
                  <rect x="65" y="115" width="160" height="80" rx="12" transform="rotate(-30 145 155)" fill="#1C2E4A" />
                  <path d="M 120 195 L 50 155 L 180 125 L 110 85" stroke="white" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="155" r="20" fill="white" /><circle cx="50" cy="155" r="10" fill="#75D1B5" />
                  <circle cx="120" cy="195" r="20" fill="white" /><circle cx="120" cy="195" r="10" fill="#75D1B5" />
                  <circle cx="180" cy="125" r="20" fill="white" /><circle cx="180" cy="125" r="10" fill="#1C2E4A" />
                  <circle cx="110" cy="85" r="20" fill="white" /><circle cx="110" cy="85" r="10" fill="#1C2E4A" />
                </svg>
                <span className="font-sans text-[28px] font-black tracking-tight text-[#1C2E4A] lowercase leading-none select-none transition-transform duration-300 group-hover:scale-[1.03]">
                  re
                </span>
              </div>
              
              <div className="hidden sm:block h-6 w-[1px] bg-[#DADCE0]"></div>
              
              <div className="hidden sm:flex flex-col text-left justify-center select-none leading-none">
                <span className="font-sans text-[8.5px] font-bold tracking-[0.12em] text-[#5F6368] uppercase">
                  KCT&apos;S PLATFORM FOR
                </span>
                <span className="font-sans text-[9.5px] font-black tracking-widest text-[#1C2E4A] uppercase mt-0.5">
                  RESEARCH &amp; EXPLORATION
                </span>
              </div>
            </div>

            {/* Center Navigation Links (Matching precise research.google template) */}
            <nav className="hidden xl:flex items-center space-x-7 font-sans font-medium text-[#202124]/90 text-[14px]">
              
              {/* 1. Research Button (Trigger mega-menu on hover) */}
              <div 
                className="relative py-7"
                onMouseEnter={() => handleMouseEnter('research')}
              >
                <button
                  onClick={() => handleNavClick('#/research-areas')}
                  className={`flex items-center space-x-1.5 py-1 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none ${
                    isActive('#/research-areas') ? 'text-[#4285F4] font-semibold' : ''
                  }`}
                >
                  <span>Research Circles</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {isActive('#/research-areas') && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#4285F4]" />
                )}
              </div>

              {/* 2. Programs & Opportunities button */}
              <button
                onClick={() => handleNavClick('#/programs')}
                className={`py-7 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none relative ${
                  isActive('#/programs') ? 'text-[#4285F4] font-semibold' : ''
                }`}
              >
                <span>Programs & Opportunities</span>
                {isActive('#/programs') && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#4285F4]" />
                )}
              </button>



              {/* 4. Conferences & Events Block */}
              <button
                onClick={() => handleNavClick('#/events')}
                className={`py-7 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none relative ${
                  isActive('#/events') ? 'text-[#4285F4] font-semibold' : ''
                }`}
              >
                Conferences & events
                {isActive('#/events') && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#4285F4]" />
                )}
              </button>

              {/* 5. Careers Block */}
              <button
                onClick={() => handleNavClick('#/careers')}
                className={`py-7 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none relative ${
                  isActive('#/careers') ? 'text-[#4285F4] font-semibold' : ''
                }`}
              >
                Careers
                {isActive('#/careers') && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#4285F4]" />
                )}
              </button>

              {/* 6. Publications/Blog Block */}
              <button
                onClick={() => handleNavClick('#/publications')}
                className="py-7 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none relative"
              >
                Blog
              </button>

              {/* 7. About Button (Trigger mega-menu on hover) */}
              <div 
                className="relative py-7"
                onMouseEnter={() => handleMouseEnter('about')}
              >
                <button
                  onClick={() => handleNavClick('#/about')}
                  className={`flex items-center space-x-1.5 py-1 cursor-pointer hover:text-[#4285F4] transition-colors focus:outline-none ${
                    isActive('#/about') ? 'text-[#4285F4] font-semibold' : ''
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {isActive('#/about') && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#4285F4]" />
                )}
              </div>

            </nav>
          </>
        ) : (
          /* ================= SEARCH EXPANDED LAYOUT: REPLACES WORDMARK & NAV ================= */
          <form 
            onSubmit={handleSearchSubmit} 
            className="flex-1 flex items-center justify-between animate-fadeIn max-w-[1200px] w-full mx-auto bg-gray-50 rounded-full border border-[#DADCE0] px-6 py-2.5 h-[50px] relative transition-all duration-300"
          >
            <div className="flex items-center space-x-3 w-full">
              <Search className="h-5 w-5 text-gray-400 shrink-0" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search research areas, papers, publications, labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-[15px] text-[#202124] placeholder-gray-500 font-sans font-medium"
              />
            </div>
            {searchQuery && (
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs font-semibold text-[#4285F4] uppercase bg-[#4285F4]/10 hover:bg-[#4285F4]/20 px-2.5 py-1 rounded-full mr-4 transition-all"
              >
                Clear
              </button>
            )}
            <button 
              type="button" 
              onClick={() => setSearchExpanded(false)}
              className="p-1 px-3 text-[#5F6368] hover:text-[#202124] font-bold text-sm tracking-widest border-l border-[#DADCE0]"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Right Search Pill Indicator & Mobile trigger (Visible when NOT expanded) */}
        {!searchExpanded && (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setSearchExpanded(true);
                if (onSearchOpen) onSearchOpen();
              }}
              className="flex items-center space-x-2 border border-[#DADCE0] hover:border-[#1A73E8]/50 hover:bg-[#1A73E8]/[0.02] bg-white text-[#5F6368] hover:text-[#1A73E8] px-4 py-2 rounded-full transition-all duration-200 cursor-pointer text-[13px] font-bold shadow-sm"
              title="Expand Search Bar"
              id="header-search-trigger"
            >
              <Search className="h-4 w-4 text-[#5F6368] group-hover:text-[#1A73E8]" />
              <span className="hidden sm:inline">Search</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#202124] hover:bg-gray-100 rounded-full cursor-pointer focus:outline-none"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        )}

      </div>

      {/* ================= MEGA DROPDOWNS (FROSTED ACCENT PANELS) ================= */}
      
      {/* 1. Research Dropdown (2-Column Premium Layout) */}
      {activeMenu === 'research' && (
        <div 
          className="absolute left-0 w-full bg-white/90 backdrop-blur-lg border-b border-[#DADCE0] shadow-[0_15px_30px_rgba(0,0,0,0.06)] py-10 z-50 animate-fadeIn"
          onMouseEnter={() => handleMouseEnter('research')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto max-w-[1440px] px-20">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Left description sidebar */}
              <div className="col-span-4 border-r border-[#DADCE0] pr-8 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold text-[#5F6368] uppercase tracking-widest block mb-2">Academic Exploration</span>
                  <h3 className="font-display text-[22px] font-extrabold text-[#202124] leading-tight mb-4">
                    Pure undergraduate curiosity supported by scientific direction.
                  </h3>
                  <p className="text-sm text-[#5F6368] leading-relaxed mb-6 font-light">
                    We organize research across six focus sectors to build structural models, ancient translation registries, and sustainable materials.
                  </p>
                </div>
                <button 
                  onClick={() => handleNavClick('#/research-areas')}
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#1A73E8] hover:underline"
                >
                  <span>Browse focus sectors</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* 2-Column Links Grid representation */}
              <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6 pl-4">
                
                {/* Cell 1: Research Areas */}
                <div 
                  onClick={() => handleNavClick('#/research-areas')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#4285F4]/10 text-[#4285F4] rounded-lg group-hover:scale-105 transition-transform">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#4285F4] text-sm mb-1 transition-colors">Research Domains</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Explore AI Diagnostics, Earth hydrology, composites & Vatteluttu transcription.
                    </p>
                  </div>
                </div>

                {/* Cell 2: Projects */}
                <div 
                  onClick={() => handleNavClick('#/projects')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#34A853]/10 text-[#34A853] rounded-lg group-hover:scale-105 transition-transform">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#34A853] text-sm mb-1 transition-colors">Active Projects</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Discover underway studies, prototyping frameworks, and industry translations.
                    </p>
                  </div>
                </div>

                {/* Cell 3: Research labs */}
                <div 
                  onClick={() => handleNavClick('#/labs')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#FBBC05]/10 text-[#FBBC05] rounded-lg group-hover:scale-105 transition-transform">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#FBBC05] text-sm mb-1 transition-colors">Advanced Laboratories</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Equipped spaces engineered for physical prototyping, materials and digital compute.
                    </p>
                  </div>
                </div>

                {/* Cell 4: Open Challenges */}
                <div 
                  onClick={() => handleNavClick('#/challenges')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#EA4335]/10 text-[#EA4335] rounded-lg group-hover:scale-105 transition-transform">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EA4335] text-sm mb-1 transition-colors">Open Challenges</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Collaborative problem pools seeking software algorithms or composites formulations.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}



      {/* 3. About Dropdown */}
      {activeMenu === 'about' && (
        <div 
          className="absolute left-0 w-full bg-white/90 backdrop-blur-lg border-b border-[#DADCE0] shadow-[0_15px_30px_rgba(0,0,0,0.06)] py-10 z-50 animate-fadeIn"
          onMouseEnter={() => handleMouseEnter('about')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto max-w-[1440px] px-20">
            <div className="grid grid-cols-12 gap-8">
              
              <div className="col-span-4 border-r border-[#DADCE0] pr-8 flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-bold text-[#5F6368] uppercase tracking-widest block mb-2">Centre Overview</span>
                  <h3 className="font-display text-[22px] font-extrabold text-[#202124] leading-tight mb-4">
                    Our People and Ecosystem
                  </h3>
                  <p className="text-sm text-[#5F6368] leading-relaxed mb-6 font-light">
                    Translating curiosity into indexed accomplishments, state partnerships and product launches.
                  </p>
                </div>
                <button 
                  onClick={() => handleNavClick('#/about')}
                  className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#1A73E8] hover:underline"
                >
                  <span>Read our backstory</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="col-span-8 grid grid-cols-2 gap-x-8 gap-y-6 pl-4">
                
                {/* Cell 1: Team & Scholars */}
                <div 
                  onClick={() => handleNavClick('#/about')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#4285F4]/10 text-[#4285F4] rounded-lg group-hover:scale-105 transition-transform">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#4285F4] text-sm mb-1 transition-colors">People & Scholars</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Meet faculty leads, peer-review advisors, and undergraduate explorers.
                    </p>
                  </div>
                </div>

                {/* Cell 2: Cooperation Network */}
                <div 
                  onClick={() => handleNavClick('#/about')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#34A853]/10 text-[#34A853] rounded-lg group-hover:scale-105 transition-transform">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#34A853] text-sm mb-1 transition-colors">Ecosystem Affiliation</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Alliances with State bodies, Aalto University and Noyyal conservation collectives.
                    </p>
                  </div>
                </div>

                {/* Cell 3: History */}
                <div 
                  onClick={() => handleNavClick('#/about')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#FBBC05]/10 text-[#FBBC05] rounded-lg group-hover:scale-105 transition-transform">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#FBBC05] text-sm mb-1 transition-colors">Backstory & Core Values</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Tracing the decade timeline of Centre for Exploratory Research since launch.
                    </p>
                  </div>
                </div>

                {/* Cell 4: Careers */}
                <div 
                  onClick={() => handleNavClick('#/careers')}
                  className="p-4 rounded-xl hover:bg-gray-50/80 border border-transparent hover:border-gray-100 transition-all cursor-pointer flex items-start space-x-4 group"
                >
                  <div className="p-3 bg-[#EA4335]/10 text-[#EA4335] rounded-lg group-hover:scale-105 transition-transform">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#EA4335] text-sm mb-1 transition-colors">Join RÉ Community</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">
                      Review active researcher listings, fellowships, and administrative roles.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}


      {/* Mobile Drawer Navigation (Frosted Glass Panel matching clean Google styling) */}
      {mobileMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#DADCE0] shadow-xl md:hidden animate-fadeIn h-[calc(100vh-80px)] overflow-y-auto z-40">
          <div className="flex flex-col space-y-4 px-6 py-6 font-sans">
            <button onClick={() => handleNavClick('#/research-areas')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">Research Circles</button>
            <button onClick={() => handleNavClick('#/programs')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">Programs & Opportunities</button>

            <button onClick={() => handleNavClick('#/events')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">Conferences & events</button>
            <button onClick={() => handleNavClick('#/careers')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">Careers</button>
            <button onClick={() => handleNavClick('#/publications')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">Blog</button>
            <button onClick={() => handleNavClick('#/about')} className="text-left text-lg font-bold py-2 border-b border-[#F8F9FA] text-[#202124]">About</button>
          </div>
        </div>
      )}
    </header>
  );
}

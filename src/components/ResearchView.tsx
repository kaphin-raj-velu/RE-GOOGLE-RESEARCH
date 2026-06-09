import React, { useState, useEffect } from 'react';
import { 
  researchDomains, 
  researchProjects, 
  scholarProfiles, 
  facultyProfiles 
} from '../data/researchData';
import { 
  Search, 
  Layers, 
  Activity, 
  Brain, 
  Leaf, 
  Cpu, 
  Users, 
  Shield, 
  Lightbulb, 
  Sparkles, 
  ArrowLeft, 
  BookOpen, 
  Database,
  ExternalLink,
  ChevronRight,
  Globe,
  Heart,
  Eye,
  Binary,
  MessageSquare,
  Terminal,
  MousePointerClick
} from 'lucide-react';
import { ResearchDomain, ResearchProject } from '../types';

// Simple icon lookup helper
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Brain': return <Brain className="w-5 h-5 text-[#1a73e8]" />;
    case 'Leaf': return <Leaf className="w-5 h-5 text-[#34a853]" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-[#fbbc05]" />;
    case 'Activity': return <Activity className="w-5 h-5 text-[#ea4335]" />;
    case 'Users': return <Users className="w-5 h-5 text-[#8a3ffc]" />;
    case 'Shield': return <Shield className="w-5 h-5 text-[#ff7d00]" />;
    case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#00b4d8]" />;
    default: return <Sparkles className="w-5 h-5 text-neutral-600" />;
  }
};

interface ResearchViewProps {
  initialProjectId?: string | null;
  onNavigateToStaff?: (view: string, id: string) => void;
}

export default function ResearchView({ initialProjectId, onNavigateToStaff }: ResearchViewProps) {
  // Navigation internal state: home is the stunning Google Research landing page
  const [activeTab, setActiveTab] = useState<'home' | 'domains' | 'projects'>('home');
  const [selectedDomain, setSelectedDomain] = useState<ResearchDomain | null>(null);
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  // Filter conditions
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomainFilter, setSelectedDomainFilter] = useState<string>('All');

  // Handle deep-linked project routing
  useEffect(() => {
    if (initialProjectId) {
      const proj = researchProjects.find(p => p.id === initialProjectId);
      if (proj) {
        setSelectedProject(proj);
        setActiveTab('projects');
      }
    }
  }, [initialProjectId]);

  // Handle returning to Home overview
  const handleBackToLibrary = () => {
    setSelectedProject(null);
    setSelectedDomain(null);
    setActiveTab('home');
  };

  // Switch to specific domain Matrix
  const handleDomainSelect = (domain: ResearchDomain) => {
    setSelectedDomain(domain);
    setSelectedProject(null);
  };

  // Switch to direct project
  const handleProjectSelect = (project: ResearchProject) => {
    setSelectedProject(project);
    setSelectedDomain(null);
  };

  // Interactive focus handler
  const handleFocusClick = (domainId: string) => {
    const matchedDomain = researchDomains.find(d => d.id === domainId);
    if (matchedDomain) {
      setSelectedDomain(matchedDomain);
      setSelectedProject(null);
    }
  };

  // Filtered projects for browsing
  const filteredProjects = researchProjects.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.overview.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDomain = selectedDomainFilter === 'All' || p.domainId === selectedDomainFilter;
    return matchSearch && matchDomain;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      
      {/* 1. PROJECT DETAIL VIEW */}
      {selectedProject ? (
        <div id="project-detail-panel" className="animate-fade-in">
          {/* Back Action Bar */}
          <button 
            id="back-to-library-btn"
            onClick={handleBackToLibrary}
            className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-[#1a73e8] mb-8 transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO ECOSYSTEM OVERVIEW
          </button>

          {/* Heading block */}
          <div className="border-b border-neutral-150 pb-8 mb-10">
            <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#5F6368] block">
              {researchDomains.find(d => d.id === selectedProject.domainId)?.name} Project Portal
            </span>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mt-2">
              <h1 className="font-display font-semibold text-3xl md:text-4xl text-[#202124] tracking-tight max-w-3xl leading-tight">
                {selectedProject.title}
              </h1>
              <div className="shrink-0 flex items-center gap-1.5 self-start">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase ${
                  selectedProject.status === 'Active' ? 'bg-[#e8f0fe] text-[#1967d2]' :
                  selectedProject.status === 'Translational' ? 'bg-[#fef7e0] text-[#b06000]' : 'bg-[#e6f4ea] text-[#137333]'
                }`}>
                  {selectedProject.status} Phase
                </span>
              </div>
            </div>
            <p className="text-[#5F6368] font-sans font-medium text-base mt-4 max-w-3xl leading-relaxed">
              &quot;{selectedProject.tagline}&quot;
            </p>
          </div>

          {/* Structured Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Columns */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h3 className="font-display font-semibold text-[#202124] text-xl mb-3">Project Overview</h3>
                <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed">{selectedProject.overview}</p>
              </div>

              <div>
                <h3 className="font-display font-semibold text-[#202124] text-xl mb-3">The Research Challenge</h3>
                <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h3 className="font-display font-semibold text-[#202124] text-xl mb-3">The Advanced Technical Approach</h3>
                <p className="text-neutral-600 font-sans text-sm md:text-base leading-relaxed">{selectedProject.approach}</p>
              </div>

              <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-neutral-200">
                <h3 className="font-display font-semibold text-neutral-900 text-sm mb-3">Experimental Methodology</h3>
                <p className="text-neutral-600 font-sans text-xs leading-relaxed">{selectedProject.methodology}</p>
              </div>

              {/* Physical Gallery */}
              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div>
                  <h3 className="font-display font-semibold text-[#202124] text-sm mb-4">Field &amp; Lab Snapshots</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-neutral-200 h-48 bg-neutral-100">
                        <img 
                          src={img} 
                          alt="Lab verification snapshot" 
                          className="w-full h-full object-cover select-none"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar metadata columns */}
            <div className="lg:col-span-4 space-y-6">
              {/* Personnel Box */}
              <div className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-xs">
                <h4 className="font-mono text-[10px] uppercase. text-[#5F6368] mb-4 border-b pb-2">INVESTIGATIVE TEAM</h4>
                
                {/* Faculty Mentor */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase font-mono text-neutral-400">Principal Investigator</span>
                  <div className="flex items-center gap-2.5 mt-1.5">
                    <div className="font-semibold text-xs text-neutral-900 hover:text-[#1a73e8] hover:underline cursor-pointer"
                      onClick={() => onNavigateToStaff && onNavigateToStaff('faculty', selectedProject.investigator.replace('Dr. ', '').replace('Prof. ', '').replace(/\s+/g, '-').toLowerCase())}
                    >
                      {selectedProject.investigator}
                    </div>
                  </div>
                </div>

                {/* Scholars matched */}
                <div>
                  <span className="text-[10px] uppercase font-mono text-neutral-400">Collaborative Scholars</span>
                  <div className="space-y-1.5 mt-2">
                    {selectedProject.scholars.map((sch) => (
                      <div 
                        key={sch} 
                        onClick={() => onNavigateToStaff && onNavigateToStaff('scholars', sch.toLowerCase().replace(/\s+/g, '-'))}
                        className="text-xs text-neutral-700 font-medium hover:text-[#1a73e8] hover:underline cursor-pointer flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-neutral-450 shrink-0" />
                        {sch}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Publications & Assets */}
              {selectedProject.publications && selectedProject.publications.length > 0 && (
                <div className="border border-neutral-200 rounded-2xl p-6 bg-[#f8f9fa]">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#5f6368] mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#1a73e8]" /> PEER-REVIEWED PAPERS
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.publications.map((p, i) => (
                      <div key={i} className="text-xs text-neutral-600 leading-relaxed font-sans bg-white p-3 rounded-xl border border-neutral-200 font-medium">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Associated Datasets */}
              {selectedProject.datasets && selectedProject.datasets.length > 0 && (
                <div className="border border-neutral-200 rounded-2xl p-6 bg-[#e8f0fe]/30">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#1a73e8] mb-3 flex items-center gap-1.5 font-bold">
                    <Database className="w-4 h-4 text-[#1a73e8]" /> ASSOCIATED DATASETS
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.datasets.map((d, i) => (
                      <div key={i} className="text-xs font-mono font-medium text-neutral-800 flex items-center justify-between p-2.5 bg-white rounded-lg border border-neutral-200 hover:border-[#1a73e8] transition-colors">
                        <span>{d}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      /* 2. DOMAIN DETAIL VIEW */
      ) : selectedDomain ? (
        <div id="domain-detail-panel" className="animate-fade-in">
          {/* Back Action Bar */}
          <button 
            id="back-to-domains-btn"
            onClick={handleBackToLibrary}
            className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-[#1a73e8] mb-8 transition-colors cursor-pointer bg-transparent border-0"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO OVERVIEW
          </button>

          {/* Heading */}
          <div className="border-b border-neutral-150 pb-8 mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-9">
              <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-neutral-400 block">
                 Kumaraguru Research Domain Profile
              </span>
              <h1 className="font-display font-semibold text-3xl md:text-4xl text-neutral-900 mt-2 max-w-2xl leading-tight">
                {selectedDomain.name}
              </h1>
              <p className="text-neutral-500 text-sm md:text-base mt-4 leading-relaxed max-w-3xl">
                {selectedDomain.longDescription}
              </p>
            </div>
            
            {/* Quick Metrics Badge */}
            <div className="md:col-span-3 bg-[#f8f9fa] border border-[#dadce0] p-5 rounded-2xl grid grid-cols-2 gap-3 text-center">
              <div>
                <span className="text-[10px] font-mono text-neutral-405 block uppercase tracking-wider">Funding</span>
                <span className="font-display font-bold text-base text-[#1a73e8] mt-1.5 block">{selectedDomain.metrics.funding}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-405 block uppercase tracking-wider">Scholars</span>
                <span className="font-display font-bold text-base text-[#202124] mt-1.5 block">{selectedDomain.metrics.scholarsCount}+</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Details and Labs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Key research topics */}
              <div className="bg-[#f8f9fa] border border-neutral-200 rounded-2xl p-5">
                <h3 className="font-display font-semibold text-[#202124] text-xs uppercase tracking-wider mb-4">Principal Investigations</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedDomain.keyTopics.map((topic) => (
                    <span key={topic} className="px-3 py-1.5 text-xs bg-white text-neutral-700 rounded-full border border-[#dadce0] font-medium font-sans">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Focused laboratory suites */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-5">
                <h3 className="font-display font-semibold text-[#202124] text-xs uppercase tracking-wider mb-4">Active Research Labs</h3>
                <div className="space-y-3">
                  {selectedDomain.labs.map((lab) => (
                    <div key={lab} className="p-3.5 bg-[#f8f9fa] border border-neutral-200 rounded-xl text-xs font-mono font-medium text-neutral-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34a853]"></span>
                      {lab}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Listed Active Projects */}
            <div className="lg:col-span-8">
              <h2 className="font-display font-semibold text-xl text-[#202124] mb-4 block">Active Domain Projects ({researchProjects.filter(p => p.domainId === selectedDomain.id).length})</h2>
              
              <div className="space-y-4">
                {researchProjects.filter(p => p.domainId === selectedDomain.id).map((proj) => (
                  <div
                    id={`domain-proj-card-${proj.id}`}
                    key={proj.id}
                    onClick={() => setSelectedProject(proj)}
                    className="p-5 bg-white border border-[#dadce0] hover:border-[#1a73e8] rounded-2xl cursor-pointer transition-all hover:shadow-[0_4px_16px_rgba(26,115,232,0.04)] group flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#5F6368]">{proj.investigator} • Principal</span>
                      <h3 className="font-display font-semibold text-base text-[#202124] group-hover:text-[#1a73e8] transition-colors mt-1">
                        {proj.title}
                      </h3>
                      <p className="text-neutral-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {proj.tagline}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-neutral-300 shrink-0 self-center group-hover:text-[#1a73e8] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      /* 3. CORE SUB-DASHBOARDS */
      ) : (
        <div id="library-browser" className="animate-fade-in">
          
          {/* Double-rail inner selector matching Official Google Research navigation */}
          <div className="flex items-center gap-6 border-b border-[#DADCE0] pb-0 mb-8 overflow-x-auto no-scrollbar">
            <button
              id="library-selector-home"
              onClick={() => setActiveTab('home')}
              className={`pb-3 text-sm font-medium tracking-tight relative transition-all cursor-pointer whitespace-nowrap border-0 bg-transparent ${
                activeTab === 'home' ? 'text-[#1a73e8] font-semibold' : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              Research Home
              {activeTab === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a73e8] rounded-t-full"></span>
              )}
            </button>
            <button
              id="library-selector-domains"
              onClick={() => setActiveTab('domains')}
              className={`pb-3 text-sm font-medium tracking-tight relative transition-all cursor-pointer whitespace-nowrap border-0 bg-transparent ${
                activeTab === 'domains' ? 'text-[#1a73e8] font-semibold' : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              Research Domains Matrix
              {activeTab === 'domains' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a73e8] rounded-t-full"></span>
              )}
            </button>
            <button
              id="library-selector-projects"
              onClick={() => setActiveTab('projects')}
              className={`pb-3 text-sm font-medium tracking-tight relative transition-all cursor-pointer whitespace-nowrap border-0 bg-transparent ${
                activeTab === 'projects' ? 'text-[#1a73e8] font-semibold' : 'text-[#5f6368] hover:text-[#202124]'
              }`}
            >
              All Direct Projects
              {activeTab === 'projects' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a73e8] rounded-t-full"></span>
              )}
            </button>
          </div>

          {/* TAB A: THE SPECTACULAR GOOGLE RESEARCH HOME SCREEN */}
          {activeTab === 'home' ? (
            <div className="space-y-16">
                           {/* Section 1: Visual Hero Header with Monarch Butterfly & Trajectory Satellite */}
              <div className="relative pt-4 pb-12 w-full overflow-hidden select-none" id="google-research-hero-container">
                {/* Embedded trajectory satellite element matching Screenshot 4 */}
                <div className="absolute top-1/2 right-12 -translate-y-20 select-none pointer-events-none opacity-95 hidden lg:block animate-pulse">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=260" 
                    alt="Satellite sensor tracker" 
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#1a73e8]/20 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                  <div className="mt-2 flex items-center justify-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-150 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#fbbc05] block animate-ping"></span>
                    <span className="font-mono text-[9px] font-bold text-neutral-500 uppercase tracking-widest mt-0.5">coimbatore sensor trajectory</span>
                  </div>
                </div>

                <div className="max-w-5xl space-y-2 relative z-10">
                  <div className="text-6xl md:text-8xl lg:text-[105px] font-display font-medium tracking-tight text-[#202124] leading-tight select-none flex flex-wrap items-center">
                    <span>Research,</span>
                    <div className="relative inline-block w-28 h-22 md:w-36 md:h-28 mx-4 align-middle group cursor-pointer">
                      <img 
                        src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=350" 
                        alt="Interactive Research butterfly" 
                        className="w-full h-full object-contain rounded-2xl transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-700 ease-out select-none"
                        referrerPolicy="no-referrer"
                      />
                      {/* Trajectory stroke annotation arrow */}
                      <div className="absolute -top-3 -right-2 pointer-events-none select-none opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg className="w-8 h-8 text-[#ea4335]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h1 className="text-6xl md:text-8xl lg:text-[105px] font-display font-medium tracking-tight text-[#202124] leading-tight select-none pt-1">
                    to reality.
                  </h1>
                </div>

                {/* Left alignment block showing mission, corresponding exactly to Screenshot 4 layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-11 md:mt-12">
                  <div className="md:col-span-6 lg:col-span-5">
                    <p className="text-[#5F6368] font-sans text-sm md:text-base leading-relaxed tracking-normal font-medium">
                      Our mission is to coordinate breakthroughs that translate pure curiosity into robust, regional physical systems, supporting local communities, resource recovery, and young scholars.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: "Explore our many areas of focus" Interactive Card Overlay */}
              <div className="relative pt-12" id="areas-of-focus-block">
                {/* Background ambient text mimicking Screenshot 1's massive text overlay logic */}
                <div className="absolute -top-16 left-0 text-neutral-100/55 font-sans font-black text-[12vw] select-none pointer-events-none uppercase tracking-tighter leading-none select-none select-none pointer-events-none">
                  RESEARCH
                </div>

                <div className="relative z-10 rounded-[2.2rem] bg-white border border-[#dadce0] p-8 md:p-12 shadow-[0_12px_45px_rgba(0,0,0,0.03),0_1px_3px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.05)] transition-shadow duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                    <h2 className="font-display font-medium text-2xl md:text-3xl text-[#202124] tracking-tight">Explore our many areas of focus</h2>
                    <button
                      id="focus-explorer-all-btn"
                      onClick={() => setActiveTab('domains')}
                      className="px-6 py-2.5 bg-white border border-[#dadce0] hover:border-[#1a73e8] hover:bg-[#e8f0fe]/35 rounded-full text-xs font-semibold text-[#202124] hover:text-[#1a73e8] transition-all cursor-pointer shadow-2xs self-start sm:self-center shrink-0"
                    >
                      Explore all research areas
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Column 1: Applied AI & sciences */}
                    <div className="space-y-4">
                      <span className="font-sans font-semibold text-xs text-[#5f6368] uppercase tracking-wider block mb-2">Applied AI & sciences</span>
                      <ul className="space-y-4">
                        <li>
                          <button onClick={() => handleFocusClick('ai-ds')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Globe className="w-4 h-4" /></span>
                            <span className="hover:underline">Earth AI</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('healthcare')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#fce8e6] text-[#ea4335] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#ea4335] group-hover:text-white transition-all"><Heart className="w-4 h-4" /></span>
                            <span className="hover:underline">Health AI</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('ai-ds')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Brain className="w-4 h-4" /></span>
                            <span className="hover:underline">Science AI</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('sustainability')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#e6f4ea] text-[#34a853] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#34a853] group-hover:text-white transition-all"><Leaf className="w-4 h-4" /></span>
                            <span className="hover:underline">Sustainability &amp; Resilience</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: Foundational ML / Algorithms */}
                    <div className="space-y-4">
                      <span className="font-sans font-semibold text-xs text-[#5f6368] uppercase tracking-wider block mb-2">Foundational ML &amp; algorithms</span>
                      <ul className="space-y-4">
                        <li>
                          <button onClick={() => handleFocusClick('ai-ds')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Binary className="w-4 h-4" /></span>
                            <span className="hover:underline">Algorithms &amp; theory</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('ai-ds')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Search className="w-4 h-4" /></span>
                            <span className="hover:underline">Information retrieval</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('ai-ds')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Cpu className="w-4 h-4" /></span>
                            <span className="hover:underline">Machine intelligence</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('heritage-culture')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Eye className="w-4 h-4" /></span>
                            <span className="hover:underline">Machine perception &amp; OCR</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3: People, systems & technology */}
                    <div className="space-y-4">
                      <span className="font-sans font-semibold text-xs text-[#5f6368] uppercase tracking-wider block mb-2">People, systems &amp; technology</span>
                      <ul className="space-y-4">
                        <li>
                          <button onClick={() => handleFocusClick('social-innovation')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f3e8fd] text-[#8a3ffc] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#8a3ffc] group-hover:text-white transition-all"><Users className="w-4 h-4" /></span>
                            <span className="hover:underline">Human-computer interaction</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('emerging-tech')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Terminal className="w-4 h-4" /></span>
                            <span className="hover:underline">Networking &amp; Swarms</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('materials-science')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#e1f5fe] text-[#0288d1] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#0288d1] group-hover:text-white transition-all"><Lightbulb className="w-4 h-4" /></span>
                            <span className="hover:underline">Advanced Materials Science</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => handleFocusClick('social-innovation')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f1f3f4] text-[#5f6368] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Shield className="w-4 h-4" /></span>
                            <span className="hover:underline">Responsible tech &amp; Loom mechanics</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column 4: Learn More Shortcuts */}
                    <div className="space-y-4">
                      <span className="font-sans font-semibold text-xs text-[#5f6368] uppercase tracking-wider block mb-2">Learn More</span>
                      <ul className="space-y-4">
                        <li>
                          <button onClick={() => setActiveTab('projects')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f8f9fa] text-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><BookOpen className="w-4 h-4" /></span>
                            <span className="font-semibold underline">Publications List</span>
                          </button>
                        </li>
                        <li>
                          <button onClick={() => setActiveTab('projects')} className="flex items-center gap-2.5 text-left text-sm text-[#202124] hover:text-[#1a73e8] font-medium transition-all cursor-pointer group w-full bg-transparent border-0">
                            <span className="w-8 h-8 rounded-full bg-[#f8f9fa] text-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-[#1a73e8] group-hover:text-white transition-all"><Layers className="w-4 h-4" /></span>
                            <span className="font-semibold underline">Ongoing Projects</span>
                          </button>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>


              {/* Section 3: The River-Delta Beautiful Quote Banner (Exact Replica from Screenshot 2) */}
              <div className="relative w-full rounded-[2.2rem] overflow-hidden my-16 bg-[#12221b] text-white min-h-[390px] flex items-center p-8 md:p-14 border border-emerald-950 shadow-sm">
                {/* Pixel-perfect Unsplash river delta overlay */}
                <img 
                  src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&q=80&w=1200" 
                  alt="High latitude river delta"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay gradient to keep typography fully high-contrast compliant */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#03100a]/90 via-[#03100a]/50 to-transparent z-0"></div>

                <div className="relative z-10 space-y-8 max-w-4xl">
                  <p className="font-sans font-medium text-xl md:text-[28px] leading-relaxed tracking-tight text-[#f8f9fa] font-display">
                    &ldquo;The magic cycle of research is accelerating. Research breakthroughs are leading to greater impact on products, science, and society—with greater opportunities for AI to amplify human ingenuity and capacity.&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" 
                      alt="Yossi Matias photo" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-md select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-semibold text-base text-white">Yossi Matias</h4>
                      <p className="text-white/70 text-xs font-medium tracking-wide mt-1 uppercase">Vice President, Google &amp; Head of Google Research</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Section 4: See our impact across other projects Row (Exact Replica from Screenshot 3) */}
              <div className="space-y-8 my-16" id="impact-projects-feed">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="font-display font-medium text-3xl md:text-3.5xl text-[#202124] tracking-tight">See our impact across other projects</h2>
                  
                  <button
                    id="impact-row-all-btn"
                    onClick={() => setActiveTab('projects')}
                    className="px-6 py-2.5 bg-[#202124] hover:bg-black text-white text-xs font-semibold rounded-full hover:shadow-xs transition-all cursor-pointer whitespace-nowrap self-start sm:self-center"
                  >
                    See more projects
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: Flood Forecasting */}
                  <div 
                    onClick={() => handleProjectSelect(researchProjects.find(p => p.id === 'stroke-kinetics-wearable') || researchProjects[0])}
                    className="group flex flex-col justify-between cursor-pointer space-y-3"
                  >
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video relative bg-neutral-100 border border-neutral-150">
                      <img 
                        src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?auto=format&fit=crop&q=80&w=600" 
                        alt="High latitude river delta water" 
                        className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider block mt-1.5">FLOOD FORECASTING</span>
                      <h3 className="font-display font-medium text-[20px] leading-snug text-[#202124] mt-2 group-hover:text-[#1a73e8] transition-colors">
                        The Flood Forecasting Initiative uses AI to make flood forecasting information universally accessible
                      </h3>
                    </div>
                  </div>

                  {/* Card 2: Open Buildings */}
                  <div 
                    onClick={() => handleProjectSelect(researchProjects.find(p => p.id === 'ananas-tex-composite') || researchProjects[1])}
                    className="group flex flex-col justify-between cursor-pointer space-y-3"
                  >
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video relative bg-neutral-100 border border-neutral-150">
                      <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" 
                        alt="Geometric outlines of mapping grids" 
                        className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider block mt-1.5">OPEN BUILDINGS</span>
                      <h3 className="font-display font-medium text-[20px] leading-snug text-[#202124] mt-2 group-hover:text-[#1a73e8] transition-colors">
                        A dataset of building footprints to support social good applications
                      </h3>
                    </div>
                  </div>

                   {/* Card 3: Geospatial Reasoning */}
                  <div 
                    onClick={() => handleProjectSelect(researchProjects.find(p => p.id === 'tamil-epigraphy-ocr') || researchProjects[2])}
                    className="group flex flex-col justify-between cursor-pointer space-y-3"
                  >
                    <div className="rounded-[1.5rem] overflow-hidden aspect-video relative bg-[#1E251E] border border-neutral-150 flex items-center justify-center">
                      {/* Premium Aerial Forest Road Image from Unsplash */}
                      <img 
                        src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600" 
                        alt="Aerial forest road path" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                        referrerPolicy="no-referrer"
                      />
                      {/* Elegant semi-opaque gradient overlay to maintain design hierarchy */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#141b15]/60 to-[#0d120e]/80 opacity-90" />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a4a3d_1px,transparent_1px),linear-gradient(to_bottom,#3a4a3d_1px,transparent_1px)] bg-[size:16px_16px] opacity-20" />
                      
                      {/* GIS Vector Topographic Lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-65 text-emerald-400" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-10 40 Q 50 10 100 60 T 210 20" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                        <path d="M-10 60 Q 40 30 110 80 T 210 40" stroke="currentColor" strokeWidth="1" />
                        <path d="M-10 80 Q 60 50 120 100 T 210 60" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
                        
                        {/* Aerial Route Path representing "Forest Road" */}
                        <path d="M 20 100 C 60 80, 80 40, 140 35 C 170 30, 180 15, 195 10" stroke="#34A853" strokeWidth="2.5" strokeLinecap="round" className="animate-pulse" />
                        
                        {/* Active geospatial tracking node pins */}
                        <circle cx="80" cy="55" r="3" fill="#EA4335" />
                        <circle cx="80" cy="55" r="7" stroke="#EA4335" strokeWidth="0.75" className="animate-pulse" />
                        
                        <circle cx="140" cy="35" r="3" fill="#4285F4" />
                      </svg>

                      {/* Technical GIS Metadata watermark configured neatly in JetBrains Mono */}
                      <div className="absolute bottom-3 left-4 font-mono text-[8px] text-[#A2C4A2] tracking-wider bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs select-none">
                        LAT: 11.0168° N | EXP_GEOSPATIAL_PATH
                      </div>
                      
                      {/* Overlay active simulator flag */}
                      <div className="absolute top-3 right-4 font-mono text-[8px] text-emerald-400 font-bold tracking-widest bg-[#141b15]/90 border border-emerald-950 px-2 py-0.5 rounded-full uppercase flex items-center gap-1 scale-90">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                        GIS FLIGHT
                      </div>
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-semibold text-[#5F6368] uppercase tracking-wider block mt-1.5">GEOSPATIAL REASONING</span>
                      <h3 className="font-display font-medium text-[20px] leading-snug text-[#202124] mt-2 group-hover:text-[#1a73e8] transition-colors">
                        A research effort aiming to bring together foundation models with generative AI to accelerate geospatial problem solving
                      </h3>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          /* TAB B: INTERACTIVE DOMAINS GRID */
          ) : activeTab === 'domains' ? (
            <div className="space-y-6">
              <div className="max-w-2xl pb-2">
                <h2 className="font-display font-semibold text-2xl md:text-3.5xl text-[#202124] tracking-tight">Explore Key Domains</h2>
                <p className="text-[#5f6368] text-sm mt-2 leading-relaxed">
                  Click on an individual domain panel below to explore primary investigatory tracks, focused laboratory suites, and associated patents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {researchDomains.map((dom) => (
                  <div
                    id={`domain-card-${dom.id}`}
                    key={dom.id}
                    onClick={() => handleDomainSelect(dom)}
                    className="p-6 rounded-2xl border border-[#DADCE0] hover:border-[#1a73e8] bg-white hover:shadow-[0_8px_24px_rgba(26,115,232,0.06)] transition-all duration-350 cursor-pointer flex flex-col justify-between min-h-[240px] group transform hover:-translate-y-1"
                  >
                    <div>
                      <div className="p-2.5 w-10 h-10 rounded-xl bg-[#F8F9FA] border border-[#DADCE0] text-[#5F6368] flex items-center justify-center mb-4 transition-all group-hover:bg-[#e8f0fe] group-hover:text-[#1a73e8] group-hover:border-[#d2e3fc]">
                        {getIcon(dom.icon)}
                      </div>
                      <h3 className="font-display font-semibold text-base text-[#202124] group-hover:text-[#1a73e8] transition-colors leading-snug">
                        {dom.name}
                      </h3>
                      <p className="text-[#5f6368] text-xs leading-relaxed mt-2 line-clamp-3">
                        {dom.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-medium text-[#5f6368] mt-4 border-t pt-3 border-[#f1f3f4]">
                      <span className="font-mono bg-[#f1f3f4] px-2 py-0.5 rounded text-[10px] text-neutral-600 font-bold">{dom.metrics.projectsCount} PROJECTS</span>
                      <span className="text-[#1a73e8] font-semibold group-hover:translate-x-1.5 transition-transform flex items-center gap-0.5">
                        Profile <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          /* TAB C: PROJECT LIST WITH ADVANCED KEYWORDS SEARCH FILTER */
          ) : (
            <div className="space-y-6">
              
              {/* Structured Filter Headers */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F8F9FA] p-4 rounded-2xl border border-[#DADCE0]">
                {/* Search query */}
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#5f6368]" />
                  <input
                    type="text"
                    className="w-full bg-white text-xs text-[#202124] pl-10 pr-4 py-3 border border-[#DADCE0] rounded-xl focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8]"
                    placeholder="Search direct projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Domain selector chip filter list */}
                <div className="flex items-center overflow-x-auto gap-1.5 no-scrollbar pb-1 md:pb-0">
                  {['All', ...researchDomains.map(d => d.id)].map((fid) => (
                    <button
                      id={`filter-chip-${fid}`}
                      key={fid}
                      onClick={() => setSelectedDomainFilter(fid)}
                      className={`px-3.5 py-1.5 text-xs rounded-full shrink-0 font-medium transition-all border cursor-pointer whitespace-nowrap bg-transparent ${
                        selectedDomainFilter === fid 
                          ? 'bg-[#e8f0fe] text-[#1967d2] border-[#d2e3fc] shadow-sm font-semibold' 
                          : 'bg-white text-[#5f6368] border-[#DADCE0] hover:text-[#202124] hover:bg-[#f1f3f4]'
                      }`}
                    >
                      {fid === 'All' ? 'All Domains' : researchDomains.find(d => d.id === fid)?.name.split(' & ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of raw filter results */}
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-[#DADCE0] rounded-2xl text-[#5f6368] text-sm">
                  No active projects match your search keywords or category filters.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((proj) => (
                    <div
                      id={`project-thumb-card-${proj.id}`}
                      key={proj.id}
                      onClick={() => handleProjectSelect(proj)}
                      className="group bg-white rounded-2xl border border-[#DADCE0] hover:border-[#1a73e8] hover:shadow-[0_8px_30px_rgba(26,115,232,0.1)] overflow-hidden cursor-pointer transition-all duration-350 flex flex-col justify-between min-h-[380px] transform hover:-translate-y-1.5"
                    >
                      {/* Image header with smooth hover scale */}
                      <div className="h-48 bg-neutral-100 overflow-hidden relative">
                        <img 
                          src={proj.gallery[0] || 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600'} 
                          alt={proj.title} 
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out select-none"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/95 text-[#202124] shadow-sm">
                          {proj.status}
                        </span>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#f1f3f4] text-[#5f6368] group-hover:bg-[#e8f0fe] group-hover:text-[#1a73e8] transition-colors inline-block tracking-tight">
                            {researchDomains.find(d => d.id === proj.domainId)?.name}
                          </span>
                          <h3 className="font-display font-semibold text-base text-[#202124] group-hover:text-[#1a73e8] transition-colors mt-2.5 line-clamp-2 leading-snug">
                            {proj.title}
                          </h3>
                          <p className="text-[#5f6368] text-xs leading-relaxed mt-2 line-clamp-2">
                            {proj.tagline}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[11px] font-medium text-[#5F6368] pt-3.5 border-t border-[#f1f3f4] mt-4">
                          <span className="font-medium">By {proj.investigator.replace('Dr. ', '').replace('Prof. ', '')}</span>
                          <span className="text-[#1a73e8] font-semibold flex items-center gap-0.5 group-hover:translate-x-1  transition-transform">
                            Learn more <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      )}

    </div>
  );
}

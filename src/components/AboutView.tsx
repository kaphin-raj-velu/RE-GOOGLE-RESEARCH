import React, { useState } from 'react';
import { milestones } from '../data/researchData';
import { 
  Shield, Sparkles, Footprints, Award, Bookmark, 
  ArrowUpRight, History, Heart, Activity, Globe,
  Briefcase, Compass, Leaf, Landmark, Radio, Cpu
} from 'lucide-react';

export default function AboutView() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(milestones.length - 1);
  const activeMilestone = milestones[activeMilestoneIndex];

  // Render high-fidelity contextual photography with elegant labels based on active milestone year
  const renderMilestoneGraphic = (year: string) => {
    const images: Record<string, { url: string; label: string; location: string; details: string }> = {
      '2016': {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
        label: 'INCEPTION SANDBOX COHORT',
        location: 'Coimbatore, India',
        details: 'First Grassroots Research Group'
      },
      '2018': {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
        label: 'KREST COHORT COLLABORATION',
        location: 'West Wing Laboratories',
        details: 'Baseline Fellowship Launch'
      },
      '2020': {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
        label: 'NFRC COMPOSITES FACILITY',
        location: 'NFRC Laboratory Core',
        details: 'Agri-Waste Mechanical R&D'
      },
      '2022': {
        url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600',
        label: 'PATENT INTEGRITY & LICENSING',
        location: 'IP Intellectual Cell',
        details: 'Spin-Off Venture Deployments'
      },
      '2024': {
        url: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
        label: 'EPIGRAPHY TRANSLATION WORK',
        location: 'Rock Carvings Site Visit',
        details: 'Nithilam Ancient GIS Scanning'
      },
      '2026': {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
        label: 'UNIFIED RÉ RESEARCH PLATFORM',
        location: 'Global Digital Portal',
        details: 'Academic & Commercial Synergy'
      }
    };

    const data = images[year] || images['2016'];

    return (
      <div className="absolute inset-0 bg-[#0F172A] flex flex-col justify-between overflow-hidden group">
        <img 
          src={data.url} 
          alt={data.label}
          className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-black/30" />
        
        {/* Metatable Info Overlay */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-white tracking-widest select-none bg-[#1a73e8] px-2.5 py-0.5 rounded-full uppercase font-bold">
          {data.label}
        </div>
        
        <div className="absolute inset-x-0 bottom-4 px-5 flex justify-between text-[9px] font-mono text-slate-300 pt-2 bg-gradient-to-t from-black/80 to-transparent pb-1">
          <span>{data.details}</span>
          <span className="text-white font-bold">{data.location}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Huge Bold Google-styled Editorial Header with Large Whitespace */}
      <div className="border-b border-[#DADCE0] pb-16 mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ COHORT NARRATIVE</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#202124] mt-5 tracking-tighter leading-[1.02]">
          Where Curiosity <br className="hidden sm:block"/>
          <span className="text-[#1a73e8]">Finds Direction.</span>
        </h1>
        <p className="text-[#5F6368] font-sans text-lg md:text-xl mt-6 max-w-4xl leading-relaxed">
          RÉ at Kumaraguru Institutions is not merely a department; it is India&apos;s leading grassroots research ecosystem, empowering young, exploratory minds to ask the hard questions that reshape traditional industries.
        </p>
      </div>

      {/* Grid: Our Story & Philosophy with Gorgeous Glassmorphic Elements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-[#DADCE0] p-8 md:p-10 space-y-6 shadow-2xs">
          <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#202124] tracking-tight flex items-center gap-3">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>
            Our Story & Heritage
          </h2>
          <div className="space-y-5 text-[#5F6368] font-sans text-sm md:text-base leading-relaxed">
            <p>
              In 2016, a small dynamic team of faculty members at Kumaraguru Institutions noticed a critical bottleneck: undergraduate engineering students were often forced to compile boilerplate coursework, stifling natural scientific curiosity.
            </p>
            <p>
              Why not provide a secure, sandbox environment where the primary currency is intellectual exploration? Thus, <strong className="text-[#202124]">RÉ</strong> (the Sanskrit radical representing flow, speed, and creative impetus) was founded.
            </p>
            <p>
              Over the last decade, RÉ has grown from a physical student prototyping garage to an integrated multidisciplinary ecosystem housing specialized research centers like the Natural Fibre Research Centre (NFRC), and computational humanities labs like Nithilam.
            </p>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-[#DADCE0] p-8 md:p-10 space-y-6 shadow-2xs flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-[#202124] tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-6 bg-green-600 rounded-full shrink-0"></span>
              The Exploratory Philosophy
            </h2>
            <div className="space-y-5 text-[#5F6368] font-sans text-sm md:text-base leading-relaxed">
              <p>
                We believe research is a creative act of civic responsibility. True learning does not stop when you score well on exams—it accelerates when you are thrown into unresolved, ambiguous real-world situations.
              </p>
              <p>
                Whether it is cataloging undocumented 8th-century stone wall rubbings or measuring the flexural stiffness of pineapple stem cellulose composts, we build the bridges that carry theory from high-performance workstations to the margins of local society.
              </p>
            </div>
          </div>
          
          <div className="pt-6 border-t border-[#DADCE0]/60">
            <p className="font-mono text-xs text-blue-600 bg-blue-50/50 p-4.5 rounded-[1.25rem] border border-blue-100 flex items-start gap-3">
              <Sparkles className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">&quot;Curiosity, once trained through rigorous computational and empirical design, becomes systemic innovation.&quot;</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Vision, and Values with Premium Glassmorphism and Hover Scaling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: Bookmark,
            title: 'Our Mission',
            desc: 'To establish decentralized, accessible research models that bridge technical higher education with localized ecological, archival, and mechanical challenges in India.',
            tag: 'Empower Youth',
            color: 'text-blue-600',
            bg: 'hover:border-blue-400'
          },
          {
            icon: Shield,
            title: 'Our Vision',
            desc: 'By 2035, to cultivate an active, self-sustaining network of 1,000+ localized student innovators, fostering cross-disciplinary regional patents, publications, and startup spinoffs.',
            tag: 'Vision 2035',
            color: 'text-green-600',
            bg: 'hover:border-green-400'
          },
          {
            icon: Footprints,
            title: 'Core Values',
            desc: 'Decentered collaboration, absolute technical integrity, deep civic empathy, and a relentless passion for resolving localized industrial bottlenecks.',
            tag: 'RÉ Standards',
            color: 'text-amber-500',
            bg: 'hover:border-amber-400'
          }
        ].map((item, idx) => (
          <div 
            key={idx}
            className={`p-8 bg-white/60 backdrop-blur-md rounded-[1.5rem] border border-[#DADCE0] shadow-2xs flex flex-col justify-between ${item.bg}`}
          >
            <div className="space-y-4">
              <item.icon className={`w-8 h-8 ${item.color}`} />
              <h3 className="font-sans font-bold text-xl text-neutral-900">{item.title}</h3>
              <p className="text-[#5F6368] text-[13px] leading-relaxed">
                {item.desc}
              </p>
            </div>
            <span className="text-[10px] font-mono text-neutral-400 mt-8 block uppercase tracking-widest font-bold">
              {item.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Interactive Milestone Timeline Container */}
      <div className="bg-white/80 backdrop-blur-lg rounded-[2rem] border border-[#DADCE0] overflow-hidden p-8 md:p-12 mb-24 shadow-2xs">
        
        {/* Header elements inside timeline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#DADCE0] gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-[#1a73e8] font-bold">A DECADE OF IMMERSIVE RESEARCH</span>
            <h2 className="font-sans font-extrabold text-3xl text-neutral-900 mt-2 tracking-tight">RÉ Historical Milestones</h2>
          </div>
          <div className="bg-[#e8f0fe] border border-[#1a73e8]/10 rounded-full px-4 py-1.5 text-xs font-mono font-bold text-[#1a73e8]">
            CURRENT VIEW: <span className="text-[#202124]">{activeMilestone.year} ARCHIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Side: Modular Year Selectors styled like polished sub-tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 lg:pr-6 lg:border-r border-[#DADCE0] max-h-[380px] scrollbar-thin">
            {milestones.map((m, idx) => {
              const isSelected = activeMilestoneIndex === idx;
              return (
                <button
                  id={`milestone-${m.year}`}
                  key={m.year}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  className={`w-full text-left px-5 py-4 text-xs font-mono font-bold rounded-[1.25rem] cursor-pointer flex flex-col justify-between shrink-0 lg:shrink min-w-[155px] lg:min-w-0 border-2 ${
                    isSelected 
                      ? 'bg-[#e8f0fe] border-[#1a73e8] text-[#1a73e8] shadow-sm' 
                      : 'bg-[#F8F9FA] border-[#DADCE0] text-[#5F6368] hover:bg-[#3c4043] hover:border-[#3c4043] hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] tracking-wider uppercase ${isSelected ? 'opacity-80' : 'opacity-60'}`}>
                    HISTORIC LANDMARK
                  </span>
                  <div className="flex items-center justify-between mt-2.5 w-full">
                    <span className="font-sans font-extrabold text-lg tracking-tight">{m.year}</span>
                    <span className="text-[10px] truncate max-w-[100px] block opacity-80">{m.title.slice(0, 15)}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Content & Custom SVG Dynamic Graphics without complex transitions */}
          <div className="lg:col-span-8 flex flex-col lg:flex-row gap-8 justify-between min-h-[320px]">
            {/* Dynamic visual box */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-6xl md:text-7xl font-extrabold font-mono text-neutral-300 leading-none select-none">
                  {activeMilestone.year}
                </div>
                <h3 className="font-sans font-extrabold text-2xl md:text-3xl text-neutral-900 tracking-tight leading-tight">
                  {activeMilestone.title}
                </h3>
                <p className="text-[#5F6368] font-sans text-sm md:text-base leading-relaxed">
                  {activeMilestone.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#DADCE0]/60 flex items-center gap-2 text-xs font-mono text-[#1a73e8] font-bold">
                <History className="w-4 h-4 text-[#1a73e8]" />
                <span>RÉ Landmark Achievements Registry</span>
              </div>
            </div>

            {/* Illustration Graphic - Static frame */}
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto rounded-[1.5rem] overflow-hidden relative border border-[#DADCE0] shadow-2xs">
              <div className="absolute inset-0 w-full h-full">
                {renderMilestoneGraphic(activeMilestone.year)}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Gallery & Image Grid with Premium overlay effects & Hover scaling */}
      <div className="border-t border-[#DADCE0] pt-20 mb-12">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[#1a73e8] font-mono text-xs uppercase tracking-widest font-bold">ATMOSPHERE ARCHIVES</span>
            <h2 className="font-sans font-extrabold text-3xl text-neutral-900 mt-2 tracking-tight">Our Exploratory Atmosphere</h2>
          </div>
          <p className="text-[#5F6368] text-sm max-w-lg leading-relaxed">
            A visual glance inside high-density experiments, localized field archivation trips, and natural composite stresses co-created by RE fellows in Coimbatore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div 
            className="group rounded-[1.5rem] border border-[#DADCE0] overflow-hidden bg-neutral-100 relative h-64 shadow-2xs cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
              alt="High Precision Chemical Treatment"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphic bottom label banner */}
            <div className="absolute inset-x-4 bottom-4 p-4 bg-white/70 backdrop-blur-md rounded-[1.25rem] border border-white/40 flex items-center justify-between group-hover:bg-white/90">
              <div className="space-y-0.5">
                <span className="block font-mono text-[8px] uppercase tracking-wider text-[#1a73e8] font-bold">COMPOSITES LAB</span>
                <span className="block text-xs font-extrabold text-neutral-900 leading-none">NFRC Fiber Matrix Prep</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 shrink-0" />
            </div>
          </div>

          <div 
            className="group rounded-[1.5rem] border border-[#DADCE0] overflow-hidden bg-neutral-100 relative h-64 shadow-2xs cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600" 
              alt="Archival Epigraphy Team Scanning"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphic bottom label banner */}
            <div className="absolute inset-x-4 bottom-4 p-4 bg-white/70 backdrop-blur-md rounded-[1.25rem] border border-white/40 flex items-center justify-between group-hover:bg-white/90">
              <div className="space-y-0.5">
                <span className="block font-mono text-[8px] uppercase tracking-wider text-green-600 font-bold">DIGITAL ARCHAEOLOGY</span>
                <span className="block text-xs font-extrabold text-neutral-900 leading-none">Nithilam Ancient Inscriptions</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 shrink-0" />
            </div>
          </div>

          <div 
            className="group rounded-[1.5rem] border border-[#DADCE0] overflow-hidden bg-neutral-100 relative h-64 shadow-2xs cursor-pointer col-span-1 sm:col-span-2 md:col-span-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=600" 
              alt="Biokinetic Hand rehabilitation exoskeleton"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphic bottom label banner */}
            <div className="absolute inset-x-4 bottom-4 p-4 bg-white/70 backdrop-blur-md rounded-[1.25rem] border border-white/40 flex items-center justify-between group-hover:bg-white/90">
              <div className="space-y-0.5">
                <span className="block font-mono text-[8px] uppercase tracking-wider text-amber-500 font-bold">MEDTECH BLUEPRINTS</span>
                <span className="block text-xs font-extrabold text-neutral-900 leading-none">Haptic Exoskeleton Tuning</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-neutral-500 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

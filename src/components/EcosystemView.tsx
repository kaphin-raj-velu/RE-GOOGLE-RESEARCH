import React, { useState } from 'react';
import { 
  Cpu, 
  Leaf, 
  MapPin, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  Dna,
  ArrowRight,
  TrendingUp,
  Target,
  FlaskConical,
  Compass,
  ArrowUpRight,
  Database
} from 'lucide-react';

interface EcosystemUnit {
  id: string;
  name: string;
  tagline: string;
  category: string;
  summary: string;
  location: string;
  labArea: string;
  patents: string;
  extraLabel: string;
  extraValue: string;
  heroImage: string;
  domains: {
    icon: React.ElementType;
    title: string;
    desc: string;
    metrics?: string;
  }[];
  outcomes: {
    title: string;
    desc: string;
    impact: string;
  }[];
}

const units: EcosystemUnit[] = [
  {
    id: 'nfrc',
    name: 'Natural Fibre Research Centre',
    tagline: 'Engineering Organic Biomass into High-Performance Materials',
    category: 'AGRICULTURAL RESIDUE CYCLES',
    summary: 'NFRC was established with central development funding to convert agricultural waste products—coconut coir, pineapple crowns, and banana pseudostems—into durable, high-tensile industrial substrates. By pairing structural cellulose with advanced bio-based epoxies, NFRC designs high-tensile composite materials suitable for automative, aerospace, and eco-packaging frameworks.',
    location: 'Coimbatore Campus Core - Wing A',
    labArea: '4,200 Sq Ft',
    patents: '4 Active Patents',
    extraLabel: 'BIO-EPID CONTACT',
    extraValue: 'ASTM-Compliant Lab',
    heroImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    domains: [
      {
        icon: Leaf,
        title: 'Fibre Decortication Systems',
        desc: 'Specialized stripping rotors developed in-house to extract unbroken raw cellulose strands from tough pineapple leaf sheaves without compromising intrinsic tensile strengths.',
        metrics: '1,200 N Tensile Limit'
      },
      {
        icon: Cpu,
        title: 'High-Tensile Characterization',
        desc: 'ASTM-compliant mechanical testbeds measuring stress-strain variables, flexural elastic modules, and impact absorption limits across different chemical washes.',
        metrics: 'Sub-Micron Calibration'
      },
      {
        icon: Dna,
        title: 'Bio-Resin Compounding',
        desc: 'Formulating vegetable-derived epoxy matrices targeting high-temperature applications, completely eliminating traditional carbon footprints in materials sizing steps.',
        metrics: '100% Biodegradable Base'
      }
    ],
    outcomes: [
      {
        title: 'Automotive Interior Licensing',
        desc: 'Licensed lightweight structural bio-panels to Indian EV manufacturers, reducing cabin dashboard carcass weights by 40%.',
        impact: '40% Weight Reduction'
      },
      {
        title: '100% Compostable Packaging Sleeves',
        desc: 'Formulated coconut-coir matrices to displace polystyrene shipping corners, protecting industrial motor casings shipped from Coimbatore.',
        impact: 'Zero Polystyrene Goal'
      }
    ]
  },
  {
    id: 'nithilam',
    name: 'Nithilam Archaeo-Physics Lab',
    tagline: 'Preserving Ancient Inscriptions with Neural Net Systems & Physics',
    category: 'COMPUTATIONAL ARCHAEOLOGY',
    summary: 'Nithilam is our premier digital archaeo-physics initiative. By applying multispectral high-resolution photography, ray-traced acoustic simulation models, and custom vision transformers to centuries-old Tamil rock carvings and historical stone temple layouts, Nithilam bridges ancient cultural heritage with cutting-edge computational sciences.',
    location: 'Central Library Tower - Level 4',
    labArea: '2,800 Sq Ft',
    patents: '8,500 Inscriptions Digitized',
    extraLabel: 'OCR CONFIDENCE',
    extraValue: '89.4% Match Rate',
    heroImage: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=800',
    domains: [
      {
        icon: Layers,
        title: 'Vatteluttu Neural Models',
        desc: 'Specialized Vision Transformers (ViT) that read stone surface rubbings, translating deteriorated, eroded symbols directly into readable contemporary unicode text sequences.',
        metrics: 'Transformer Based OCR'
      },
      {
        icon: Cpu,
        title: 'Acoustic Ray-Tracing',
        desc: 'Gathering sweep metrics inside millennia-old structural halls to analyze ancient structural reflections and scatterings governing clear assemblies acoustics.',
        metrics: 'Acoustical Simulation'
      },
      {
        icon: Calendar,
        title: 'Historical Manuscript Digits',
        desc: 'Utilizing specific narrow wavelength lamps to scan, read, and index fragile historical palm-leaf manuscripts without physically burning delicate ancient materials.',
        metrics: 'Non-Destructive Spectral'
      }
    ],
    outcomes: [
      {
        title: 'Rock Carving Transcription App',
        desc: 'Deployed a mobile-tablet app running lightweight models, enabling archaeologists in deep remote temples to read epigraphs instantly Offline.',
        impact: 'Real-time Epigraphy scan'
      },
      {
        title: 'Sirumugai Temple Acoustic Map',
        desc: 'Completed full parametric structural acoustic blueprints of ancient mandapams, preserving physical sonic scattering structures digitally.',
        impact: 'Preserving Ancient Acoustics'
      }
    ]
  }
];

export default function EcosystemView() {
  const [activeUnitId, setActiveUnitId] = useState<string>('nfrc');
  const activeUnit = units.find(u => u.id === activeUnitId) || units[0];

  // Render high-fidelity contextual photography with elegant labels based on research cores
  const renderFloatingCoreGraphic = (unitId: string) => {
    const images: Record<string, { url: string; label: string; tag: string; description: string; tagColor: string }> = {
      'nfrc': {
        url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=600',
        label: 'NFRC COCONUT COIR CORE',
        tag: 'BIOMASS LABS',
        description: 'ASTM Standard Flexible Organic Panels',
        tagColor: 'text-emerald-400 border-emerald-950 bg-emerald-950/70'
      },
      'nithilam': {
        url: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&q=80&w=600',
        label: 'NITHILAM STONE TRANSLATION',
        tag: 'COMPUTATIONAL GIS',
        description: 'Vatteluttu Digital Archaeology OCR',
        tagColor: 'text-orange-400 border-orange-950 bg-orange-950/70'
      }
    };

    const data = images[unitId] || images['nfrc'];

    return (
      <div className="absolute inset-0 bg-[#0A100B] overflow-hidden flex flex-col justify-end group">
        <img 
          src={data.url} 
          alt={data.label}
          className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
        
        {/* JetBrains Mono metadata display overlay */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-white tracking-wider select-none bg-[#1a73e8] px-2.5 py-0.5 rounded uppercase font-bold">
          {data.label}
        </div>
        
        <div className={`absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[8px] select-none border px-2.5 py-0.5 rounded-full uppercase tracking-widest scale-90 ${data.tagColor}`}>
          <span className="w-1.5 h-1.5 bg-current rounded-full" />
          {data.tag}
        </div>

        <div className="absolute inset-x-0 bottom-4 px-6 flex items-center justify-between border-t border-white/10 pt-2 text-[8px] font-mono text-slate-300 bg-gradient-to-t from-black/80 to-transparent">
          <span>{data.description}</span>
          <span className="text-[#34D399] font-bold">ACTIVE REGISTRATION</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Huge Bold Google-styled Editorial Header */}
      <div className="border-b border-[#DADCE0] pb-16 mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">STATE-FUNDED SPECIALIZED INFRASTRUCTURE</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#202124] mt-5 tracking-tighter leading-[1.02]">
          Strategic <br className="hidden sm:block"/>
          <span className="text-[#1a73e8]">Research Cores.</span>
        </h1>
        <p className="text-[#5F6368] font-sans text-lg md:text-xl mt-6 max-w-4xl leading-relaxed">
          Explore our premier state-funded research centers. We host high-precision material laboratories paired with ancient historical digitizing computational divisions to solve structural global limits.
        </p>
      </div>

      {/* Center Selector Tabs styled as Premium Glassmorphic cards with Greyblack hover treatment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 font-sans">
        {units.map((unit) => {
          const isSelected = activeUnitId === unit.id;
          return (
            <button
              id={`eco-tab-${unit.id}`}
              key={unit.id}
              onClick={() => setActiveUnitId(unit.id)}
              className={`p-6 rounded-[1.5rem] border-2 text-left cursor-pointer flex flex-col justify-between h-36 group relative overflow-hidden ${
                isSelected 
                  ? 'bg-[#e8f0fe] border-[#1a73e8] shadow-sm' 
                  : 'bg-white/70 backdrop-blur-md border-[#DADCE0] text-neutral-700 hover:bg-[#3c4043] hover:border-[#3c4043] hover:text-white'
              }`}
            >
              <span className={`font-mono text-[9px] uppercase tracking-wider font-bold ${
                isSelected 
                  ? 'text-[#1a73e8]/80' 
                  : 'text-[#5F6368] group-hover:text-white/60'
              }`}>
                {unit.category}
              </span>
              <div>
                <h2 className={`font-sans font-extrabold text-xl md:text-2xl leading-tight tracking-tight ${
                  isSelected ? 'text-[#1a73e8]' : 'text-neutral-900 group-hover:text-white'
                }`}>
                  {unit.name}
                </h2>
                <span className={`text-[12px] block mt-1.5 truncate ${
                  isSelected ? 'text-[#1a73e8]/90' : 'text-[#4e5256] group-hover:text-white/80'
                }`}>
                  {unit.location}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Core Content Panel (Static without Framer Motion) */}
      <div
        key={activeUnitId}
        className="bg-white/80 backdrop-blur-lg rounded-[2rem] border border-[#DADCE0] overflow-hidden p-8 md:p-12 mb-24 shadow-2xs"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Extensive specs & story */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${
                  activeUnitId === 'nfrc' ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-orange-700'
                }`}>
                  {activeUnit.category}
                </span>
                <span className="w-1.5 h-1.5 bg-[#DADCE0] rounded-full" />
                <span className="font-mono text-[10px] text-[#5F6368] uppercase tracking-widest">STATE-ESTABLISHED</span>
              </div>

              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#202124] tracking-tight leading-tight">
                {unitIdToTagName(activeUnitId)} <br />
                <span className="text-[#1a73e8] font-sans font-extrabold text-[22px] md:text-2xl mt-1.5 block tracking-normal leading-snug">{activeUnit.tagline}</span>
              </h2>

              <p className="text-[#5F6368] font-sans text-base leading-relaxed pt-2">
                {activeUnit.summary}
              </p>
            </div>

            {/* Technical Specifications Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 bg-[#F8F9FA] rounded-[1.25rem] border border-[#DADCE0]/80">
                <span className="text-[10px] font-mono uppercase text-[#5F6368] tracking-widest font-bold block">Laboratory Space</span>
                <span className="text-base font-bold text-neutral-900 mt-2 block leading-none">{activeUnit.labArea}</span>
              </div>
              <div className="p-5 bg-[#F8F9FA] rounded-[1.25rem] border border-[#DADCE0]/80">
                <span className="text-[10px] font-mono uppercase text-[#5F6368] tracking-widest font-bold block">Operational Metric</span>
                <span className="text-base font-bold text-neutral-900 mt-2 block leading-none">{activeUnit.patents}</span>
              </div>
              <div className="p-5 bg-[#F8F9FA] rounded-[1.25rem] border border-[#DADCE0]/80">
                <span className="text-[10px] font-mono uppercase text-[#1a73e8] tracking-widest font-bold block">{activeUnit.extraLabel}</span>
                <span className="text-base font-bold text-[#1a73e8] mt-2 block leading-none">{activeUnit.extraValue}</span>
              </div>
            </div>

            {/* Commercial Outcomes block with check symbols */}
            <div className="space-y-4 border-t border-[#DADCE0] pt-8">
              <h3 className="font-sans font-bold text-neutral-900 text-base flex items-center gap-2">
                <Target className="w-5 h-5 text-[#1a73e8]" />
                <span>Landmark Strategic Infrastructure Outcomes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {activeUnit.outcomes.map((otc, idx) => (
                  <div key={idx} className="p-5 bg-[#F8F9FA] rounded-xl border border-[#DADCE0]/60 space-y-2 flex flex-col justify-between">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase text-[#34A853] font-bold tracking-widest flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>OUTCOME VALIDATED</span>
                      </span>
                      <h4 className="font-sans font-bold text-sm text-[#202124]">{otc.title}</h4>
                      <p className="text-[#5F6368] text-[12px] leading-relaxed">{otc.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-[#DADCE0]/40 mt-3 text-[11px] font-sans font-semibold text-[#1a73e8] flex items-center justify-between">
                      <span>Impact:</span>
                      <span className="font-mono text-[10px] bg-white px-2 py-0.5 border border-[#DADCE0] rounded">{otc.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Floating Illustration Box & Equipment Tech bento */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            {/* Premium Floating Illustration Frame */}
            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative shadow-sm border border-[#DADCE0]">
              {renderFloatingCoreGraphic(activeUnit.id)}
            </div>

            {/* Real Imagery Frame with Premium Overlay */}
            <div className="aspect-video bg-neutral-100 rounded-[1.5rem] overflow-hidden relative shadow-sm border border-[#DADCE0] group">
              <img 
                src={activeUnit.heroImage} 
                alt={activeUnit.name}
                className="absolute inset-0 w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
                <div className="space-y-0.5 text-white">
                  <span className="font-mono text-[8px] uppercase tracking-wider block text-white/70">LAB AREA ENCLOSURE</span>
                  <h4 className="font-sans font-semibold text-sm tracking-tight">{activeUnit.name}</h4>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="p-5 bg-[#F1F3F4]/80 rounded-[1.5rem] border border-[#DADCE0] flex items-center gap-3.5">
              <div className="p-2 bg-white rounded-xl border border-[#DADCE0] text-[#1a73e8]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#5F6368] tracking-widest font-bold block">Facility Core Location</span>
                <span className="text-[13px] font-extrabold text-neutral-900 mt-0.5 block leading-normal">{activeUnit.location}</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Tech Domains Bento Grid Container */}
      <div className="border-t border-[#DADCE0] pt-20 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 text-[11px] font-mono bg-[#E8F0FE] text-[#1A73E8] rounded-full font-extrabold uppercase tracking-widest shadow-2xs">
            Infrastructure Domains
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#202124] mt-5 tracking-tight">
            Specialized Characterization Modules
          </h2>
          <p className="text-[#5F6368] text-sm md:text-base mt-2.5 max-w-xl mx-auto leading-relaxed">
            Discover the custom micro-equipment pipelines assembled inside {activeUnit.name} to run high-density research projects.
          </p>
        </div>

        {/* Dynamic Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeUnit.domains.map((dom, idx) => {
            const IconComponent = dom.icon;
            return (
              <div 
                key={idx}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-[1.5rem] border border-[#DADCE0] flex flex-col justify-between group hover:shadow-lg hover:border-neutral-400 h-80"
              >
                <div className="space-y-4">
                  <div className={`p-2.5 w-10 h-10 rounded-xl flex items-center justify-center border ${
                    activeUnitId === 'nfrc' 
                      ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                      : 'text-orange-700 bg-orange-50 border-orange-200'
                  }`}>
                    <IconComponent className="w-5.5 h-5.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#5F6368] font-bold tracking-wider block">CAPABILITY MODULE 0{idx + 1}</span>
                    <h3 className="font-sans font-bold text-neutral-900 text-base leading-snug">{dom.title}</h3>
                  </div>
                  <p className="text-[#5F6368] text-xs leading-relaxed pt-1">{dom.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#DADCE0]/50 mt-4 flex items-center justify-between font-mono text-[10px] text-[#5F6368]">
                  <span>BENCHMARK RES:</span>
                  <span className="font-semibold text-neutral-900">{dom.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Simple text label helper
function unitIdToTagName(unitId: string): string {
  if (unitId === 'nfrc') {
    return 'The Natural Fibre Research Centre';
  }
  return 'Nithilam Archaeo-Physics Laboratory';
}

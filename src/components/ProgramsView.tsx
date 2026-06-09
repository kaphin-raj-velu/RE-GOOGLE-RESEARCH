import React, { useState } from 'react';
import { 
  Award, Target, Milestone, Cpu, Compass, 
  ArrowRight, Zap, CheckCircle2, Shield, Activity, 
  FileText, Users, Network, TrendingUp
} from 'lucide-react';

interface ProgramDetail {
  id: string;
  name: string;
  tagline: string;
  focus: string;
  eligibility: string;
  stipend: string;
  summary: string;
  objectives: string[];
  journeySteps: string[];
  successStory: {
    title: string;
    description: string;
  };
}

const programs: ProgramDetail[] = [
  {
    id: 'krest',
    name: 'KREST',
    tagline: 'Kumaraguru Research Fellowship Scheme for Students',
    focus: 'Undergraduate Academic Research & Patents',
    eligibility: 'Second and Third-Year Engineering Students with GPA > 8.0',
    stipend: '₹12,000 / month research fellowship support',
    summary: 'KREST represents our crown-jewel fellowship scheme. Selected scholars are relieved of standard lab routines to pursue rigorous, long-term scientific explorations under dedicated faculty guides, resulting in international peer-reviewed journals or patents.',
    objectives: [
      'Encourage peer-reviewed publications early in undergraduate curriculums.',
      'Bridge the gap between basic engineering coursework and state-of-the-art laboratory research.',
      'Provide monthly stipends to enable researchers to focus completely on their scientific inquiries.'
    ],
    journeySteps: [
      'Call for proposals: Students draft hypothesis frameworks in emerging fields.',
      'Technical Screening Panel defense under expert external researchers.',
      'Cohort Allocation: Matched with high-performance computational or chemical labs.',
      'Mid-term progress checks: Presentation of empirical models.',
      'Final submission, peer validation, and manuscript preparation.'
    ],
    successStory: {
      title: 'Deciphering Vatteluttu Rock Carvings using Deep Transformers',
      description: 'Anirudh Srinivasan (Class of 2024) designed a localized vision-transformer during his 18-month KREST tenure. His published work was featured in elite computational linguistics repositories.'
    }
  },
  {
    id: 'krip',
    name: 'KRIP',
    tagline: 'Kumaraguru Research Internship Program',
    focus: 'Intensive Seasonal Internship Experience',
    eligibility: 'Open to outside and internal undergraduate students globally',
    stipend: '₹8,000 / month seasonal stipend support',
    summary: 'KRIP is a concentrated 8-to-12 week seasonal research internship. It transforms vacation periods into deep experiential sprints inside RE labs, combining rapid design cycles with academic review sessions.',
    objectives: [
      'Offer focused physical lab access to student researchers outside Kumaraguru campuses.',
      'Deliver baseline competencies in design methods, statistics, and prototyping.',
      'Select top-performing interns to seamlessly transition into long-term KREST fellowships.'
    ],
    journeySteps: [
      'Define themed research modules: Summer (May-July) / Winter (Dec-Jan).',
      'Intense technical pairing with RE research assistants and guides.',
      'Twice-weekly colloquium discussions on data modeling and empirical design.',
      'Fabrication of physical test rigs and experimental stress-curve captures.',
      'Symposium Day: Project display and peer-evaluation reviews.'
    ],
    successStory: {
      title: 'Pineapple Cellulose Fiber Modification Research',
      description: 'During a 10-week summer KRIP internship, Abinaya Sundar modified cellulose leaf structures silanes, logging stress tables that formed NFRC\'s latest auto-panel composites.'
    }
  },
  {
    id: 'reflect',
    name: 'REFLECT',
    tagline: 'Socially-Driven Local Community Innovation Labs',
    focus: 'Participatory Design & Grassroots Empathy',
    eligibility: 'Co-design cohorts of students, social sociologists, and artisans',
    stipend: 'Fully funded material component budgets up to ₹50,000 per project',
    summary: 'REFLECT is our social design-action engine. Grounded in participatory action principles, these labs place engineering tools inside cottage-industry clusters (weaving, agriculture, stone masonry) to solve physical spinal strain and output bottlenecks.',
    objectives: [
      'Ground technical knowledge in deep, localized social awareness and participatory design.',
      'Co-create physical ergonomic mechanical tools alongside traditional artisans.',
      'Foster low-cost mechanical optimization in the unorganized domestic labor sectors.'
    ],
    journeySteps: [
      'Field Immersion: Immersive stays in Sirumugai weaving and Palladam poultry blocks.',
      'Ergonomics & Strain Studies: Mapping joint stresses of traditional weavers.',
      'Co-designing sessions: Building simple scaled timber models beside artisans.',
      'Prototype formulation: Integrating low-maintenance pneumatic or mechanical pulleys.',
      'Deployment: Field trials inside traditional work environments with feedback-adjusts.'
    ],
    successStory: {
      title: 'Pneumatic Pedals retrofitted to Sirumugai Weaving Looms',
      description: 'Suresh Kumar co-designed an assistive pedal rig reducing Weaver leg strain from 180 N to 5 N, preventing chronic joint issues while speeding up daily silk saree weaving times.'
    }
  },
  {
    id: 'core',
    name: 'CORE',
    tagline: 'Coimbatore Research Circle',
    focus: 'Interdisciplinary Mentor Cohorts & Grant-Writing Labs',
    eligibility: 'Kumaraguru Faculty, Post-Docs, and visiting distinguished peers',
    stipend: 'Internal Seed Capital grants up to ₹5,00,000',
    summary: 'CORE acts as the interdisciplinary faculty assembly. It groups researchers from chemical, textiles, mechanical, and computer disciplines into modular cohorts to pursue high-value national scientific grants.',
    objectives: [
      'Catalyze interdisciplinary technical projects challenging complex industrial limits.',
      'Provide structured grant-writing labs to secure central funding support from DST and BIRAC.',
      'Encourage mentorship relationships by pairing seasoned faculty investigators with KREST fellows.'
    ],
    journeySteps: [
      'Cross-departmental roundtables on materials, machine learning, and bio-kinetics.',
      'Formulating hypothesis papers targeting specific state-sponsored grants.',
      'Co-mentoring undergraduate researcher cohorts in shared chemical or vision labs.',
      'Pre-submission reviews under visiting computational and manufacturing consultants.',
      'Tracking patent filings and commercial startup ventures.'
    ],
    successStory: {
      title: 'Stroke Rehabilitation Glove DST Grant Success',
      description: 'Dr. Preetha Chandran and Dr. Ramakrishnan secured a ₹45 Lakhs central grant from DST by combing mechatronics and computer-vision neural loops for grip sensor rehab.'
    }
  }
];

export default function ProgramsView() {
  const [activeTab, setActiveTab] = useState<'krest' | 'krip' | 'reflect' | 'core'>('krest');
  const activeProgram = programs.find(p => p.id === activeTab) || programs[0];

  // Helper component to render high-fidelity contextual photography representing programs
  const renderFloatingGraphic = (programId: string) => {
    const images: Record<string, { url: string; label: string; tag: string; description: string }> = {
      'krest': {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
        label: 'KREST ACADEMIC SCHOLARSHIP',
        tag: 'RESEARCH COHORT',
        description: 'Elite Long-Term Undergraduate Fellows'
      },
      'krip': {
        url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600',
        label: 'KRIP SEASONAL RESEARCH LABS',
        tag: 'INTENSIVE SPRINT',
        description: 'Accelerated 12-Week Innovation Cycle'
      },
      'reflect': {
        url: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&q=80&w=600',
        label: 'SIRUMUGAI FIELD DEPLOYMENT',
        tag: 'COMMUNITY IMPACT',
        description: 'Ergonomic Weaving Assistive Tools'
      },
      'core': {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
        label: 'COIMBATORE RESEARCH CIRCLE',
        tag: 'FACULTY PEER ROUNDTABLE',
        description: 'DST & BIRAC Strategic Grant Assembly'
      }
    };

    const data = images[programId] || images['krest'];

    return (
      <div className="absolute inset-0 bg-[#0B101D] overflow-hidden flex flex-col justify-end group">
        <img 
          src={data.url} 
          alt={data.label}
          className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30" />
        
        {/* JetBrains Mono metadata display overlay */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-white tracking-wider select-none bg-[#1a73e8] px-2.5 py-0.5 rounded uppercase font-bold">
          {data.label}
        </div>
        
        <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 select-none bg-black/50 border border-emerald-950 px-2.5 py-0.5 rounded-full uppercase tracking-widest scale-90">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          {data.tag}
        </div>

        <div className="absolute inset-x-0 bottom-5 px-6 flex items-center justify-between border-t border-white/10 pt-3 bg-gradient-to-t from-black/80 to-transparent pb-1">
          <span className="font-mono text-[9px] text-slate-350 uppercase">{data.description}</span>
          <span className="font-mono text-[9px] text-[#34D399] uppercase font-bold">Verified Run</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      {/* Huge Bold Google-styled Editorial Header */}
      <div className="border-b border-[#DADCE0] pb-16 mb-20">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ STRATEGIC COHORTS</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl text-[#202124] mt-5 tracking-tighter leading-[1.02]">
          Exploratory <br className="hidden sm:block"/>
          <span className="text-[#1a73e8]">Initiatives.</span>
        </h1>
        <p className="text-[#5F6368] font-sans text-lg md:text-xl mt-6 max-w-4xl leading-relaxed">
          Discover our specialized frameworks designed to transition raw, passionate student minds into world-class scientists and patented founders through structured fellowships, seasonal internships, and localized social actions.
        </p>
      </div>

      {/* Program Quick Selector Tabs with Glassmorphic effects */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 font-sans">
        {programs.map((prog) => {
          const isSelected = activeTab === prog.id;
          return (
            <button
              id={`prog-tab-${prog.id}`}
              key={prog.id}
              onClick={() => setActiveTab(prog.id as any)}
              className={`p-6 rounded-[1.5rem] border-2 text-left cursor-pointer flex flex-col justify-between h-36 transition-all duration-350 hover:scale-[1.01] group relative overflow-hidden ${
                isSelected 
                  ? 'bg-[#e8f0fe] border-[#1a73e8] shadow-sm' 
                  : 'bg-white/70 backdrop-blur-md border-[#DADCE0] text-neutral-700 hover:bg-[#3c4043] hover:border-[#3c4043] hover:text-white'
              }`}
            >
              <span className={`font-mono text-[9px] uppercase tracking-wider font-bold transition-colors duration-300 ${
                isSelected 
                  ? 'text-[#1a73e8]/80' 
                  : 'text-[#5F6368] group-hover:text-white/60'
              }`}>
                Program Platform
              </span>
              <div>
                <h2 className={`font-sans font-extrabold text-[20px] leading-tight tracking-tight transition-colors duration-350 ${
                  isSelected ? 'text-[#1a73e8]' : 'text-neutral-900 group-hover:text-white'
                }`}>
                  {prog.name}
                </h2>
                <span className={`text-[11px] block mt-1.5 truncate transition-colors duration-350 ${
                  isSelected ? 'text-[#1a73e8]/90' : 'text-[#4e5256] group-hover:text-white/80'
                }`}>
                  {prog.focus}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Program Card Layout with Animations and Floating Illustrations */}
      <div 
        key={activeTab}
        className="bg-white/80 backdrop-blur-lg rounded-[2rem] border border-[#DADCE0] overflow-hidden p-8 md:p-12 mb-24 shadow-2xs"
      >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Extensive Details with Huge Typography */}
            <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#1a73e8] font-bold bg-[#e8f0fe] px-3 py-1 rounded-full">
                    {activeProgram.name} Initiative
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#DADCE0] rounded-full" />
                  <span className="font-mono text-[10px] text-[#5F6368] uppercase tracking-widest">STIPENDIARY</span>
                </div>
                
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#202124] tracking-tight leading-tight">
                  {activeProgram.tagline}
                </h2>
                
                <p className="text-[#5F6368] font-sans text-base leading-relaxed pt-2">
                  {activeProgram.summary}
                </p>
              </div>

              {/* Eligibility & Benefits Split Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-[#F8F9FA] rounded-[1.25rem] border border-[#DADCE0]/80">
                  <span className="text-[10px] font-mono uppercase text-[#5F6368] tracking-widest font-bold block">Cohort Eligibility</span>
                  <span className="text-sm font-bold text-neutral-900 mt-2 block leading-snug">{activeProgram.eligibility}</span>
                </div>
                <div className="p-5 bg-[#F8F9FA] rounded-[1.25rem] border border-[#DADCE0]/80">
                  <span className="text-[10px] font-mono uppercase text-[#1a73e8] tracking-widest font-bold block">Fellowship Benefits</span>
                  <span className="text-sm font-bold text-[#1a73e8] mt-2 block leading-snug">{activeProgram.stipend}</span>
                </div>
              </div>

              {/* Objectives lists with Target Icon */}
              <div className="space-y-4 border-t border-[#DADCE0] pt-8">
                <h3 className="font-sans font-bold text-neutral-900 text-base flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#1a73e8]" /> 
                  <span>Core Objectives & Deliverables</span>
                </h3>
                <ul className="grid grid-cols-1 gap-3.5 text-sm text-[#5F6368]">
                  {activeProgram.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#34A853] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Floating Illustration Box & Pathway Story */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              
              {/* Premium Graphic Container (Floating Illustration) */}
              <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden relative shadow-sm border border-[#DADCE0]">
                {renderFloatingGraphic(activeProgram.id)}
              </div>

              {/* Milestone Pipeline Tracks */}
              <div className="bg-[#F8F9FA] p-6 rounded-[1.5rem] border border-[#DADCE0] space-y-4">
                <h3 className="font-sans font-bold text-neutral-900 text-xs uppercase tracking-widest flex items-center gap-2">
                  <Milestone className="w-4.5 h-4.5 text-[#34A853]" /> 
                  <span>Milestone Pipeline Steps</span>
                </h3>
                
                <div className="relative pl-4 space-y-5 border-l border-[#DADCE0] ml-2">
                  {activeProgram.journeySteps.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[21px] top-1.5 w-2 h-2 bg-white rounded-full border-2 border-[#34A853] transition-all group-hover:scale-125" />
                      <span className="font-mono text-[9px] text-[#5F6368] font-bold tracking-wider block">PHASE 0{idx + 1}</span>
                      <p className="text-neutral-800 text-[12.5px] mt-0.5 leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Landmark Outcome Story / Highlight Card */}
              <div className="bg-[#F1F3F4]/80 p-6 rounded-[1.5rem] border border-[#DADCE0] space-y-3">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#1a73e8] font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#1a73e8]" /> 
                  <span>Landmark Cohort Impact</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#202124] leading-snug">
                  {activeProgram.successStory.title}
                </h4>
                <p className="text-[#5F6368] text-[12px] leading-relaxed">
                  {activeProgram.successStory.description}
                </p>
              </div>

            </div>

          </div>
        </div>

      {/* Interactive Pathway Roadmap Section with Huge Empty Gaps & Perfect Details */}
      <div className="border-t border-[#DADCE0] pt-20 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1 text-[11px] font-mono bg-[#E8F0FE] text-[#1A73E8] rounded-full font-extrabold uppercase tracking-widest shadow-2xs">
            Innovation Pipeline Map
          </span>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#202124] mt-5 tracking-tight">
            The Kumaraguru Research Student Pathway
          </h2>
          <p className="text-[#5F6368] text-sm md:text-base mt-2.5 max-w-xl mx-auto leading-relaxed">
            Follow a student&apos;s conceptual transformation step-by-step from raw regional problem exploration to global product launches.
          </p>
        </div>

        {/* Visual blocks */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Spot & Explore',
              subtitle: 'Participatory design',
              desc: 'Students complete local field-tours mapping agricultural and textile bottlenecks of Western TN.',
              icon: Compass,
              color: 'text-amber-600 bg-amber-50 border-amber-200'
            },
            {
              step: '02',
              title: 'Incubate & Prove',
              subtitle: 'Fellowship allocation',
              desc: 'Selected KREST fellows secure monthly stipends and high-performance labs with a mentor guidance.',
              icon: Cpu,
              color: 'text-blue-600 bg-blue-50 border-blue-200'
            },
            {
              step: '03',
              title: 'Verify & Models',
              subtitle: 'Empirical verification',
              desc: 'Empirical testing, microchip firmware programming, and stress-strain testing curves.',
              icon: Target,
              color: 'text-purple-600 bg-purple-50 border-purple-200'
            },
            {
              step: '04',
              title: 'Publish & Protect',
              subtitle: 'Intellectual asset',
              desc: 'Manuscript submitted to Scopus-indexed entities. Prototyped materials filed as central patents.',
              icon: Award,
              color: 'text-green-600 bg-green-50 border-green-200'
            },
            {
              step: '05',
              title: 'Translate Market',
              subtitle: 'Student entrepreneur',
              desc: 'Transferred into seed incubated startups, delivering commercial biodegradeables to industries.',
              icon: Zap,
              color: 'text-rose-600 bg-rose-50 border-rose-200'
            }
          ].map((block, idx) => (
            <div 
              key={idx} 
              className="bg-white/70 backdrop-blur-sm p-6 rounded-[1.5rem] border border-[#DADCE0] flex flex-col justify-between group hover:shadow-lg hover:border-neutral-400 hover:scale-[1.01] transition-all duration-300 relative h-72"
            >
              <div className="space-y-4">
                <div className={`p-2.5 w-10 h-10 rounded-xl flex items-center justify-center ${block.color} border transition-all duration-300 group-hover:rotate-6`}>
                  <block.icon className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-neutral-450 block font-bold">STAGE {block.step}</span>
                  <h3 className="font-sans font-bold text-neutral-900 text-[15px] mt-1 leading-snug">{block.title}</h3>
                  <span className="text-[10px] block text-neutral-400 font-mono italic mt-0.5">{block.subtitle}</span>
                </div>
                <p className="text-[#5F6368] text-[12px] leading-relaxed pt-1">{block.desc}</p>
              </div>

              {idx < 4 && (
                <div className="hidden md:flex absolute -right-3.5 top-24 z-10 p-1 bg-white rounded-full border border-[#DADCE0] shadow-2xs">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

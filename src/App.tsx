import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceCard from './components/ResourceCard';
import EcosystemBlock from './components/EcosystemBlock';
import Spotlight from './components/Spotlight';
import SearchOverlay from './components/SearchOverlay';

// Detailed Subpages
import ResearchAreasPage from './pages/ResearchAreasPage';
import ResearchCircleDetailPage from './pages/ResearchCircleDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ResearchLabsPage from './pages/ResearchLabsPage';
import OpenChallengesPage from './pages/OpenChallengesPage';

import ProgramsPage from './pages/ProgramsPage';
import CareersPage from './pages/CareersPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';

import { ArrowUpRight, Award, Library, Users, Building, Activity, Calendar, Newspaper, ArrowRight, ArrowLeft, Star, Sparkles, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RiverDeltaBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-35 bg-gradient-to-b from-[#0e2c1e]/98 to-[#133c2a]">
    <svg className="w-full h-full" width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="none">
      <path d="M 500 500 Q 520 320, 500 160" fill="none" stroke="#2a664e" strokeWidth="14" strokeLinecap="round" />
      <path d="M 506 290 Q 400 240, 240 180" fill="none" stroke="#255b46" strokeWidth="9" strokeLinecap="round" />
      <path d="M 500 250 Q 600 190, 760 140" fill="none" stroke="#255b46" strokeWidth="9" strokeLinecap="round" />
      <path d="M 240 180 Q 160 140, 80 110" fill="none" stroke="#20503d" strokeWidth="5" strokeLinecap="round" />
      <path d="M 240 180 Q 230 100, 210 40" fill="none" stroke="#20503d" strokeWidth="5" strokeLinecap="round" />
      <path d="M 760 140 Q 820 80, 910 50" fill="none" stroke="#20503d" strokeWidth="5" strokeLinecap="round" />
      <path d="M 760 140 Q 720 70, 680 20" fill="none" stroke="#20503d" strokeWidth="5" strokeLinecap="round" />
      <path d="M 500 160 Q 440 110, 420 20" fill="none" stroke="#1d4838" strokeWidth="7" strokeLinecap="round" />
    </svg>
  </div>
);

export const SafeImage = ({ src, alt, fallbackGradient, fallbackSvg }: { src: string; alt: string; fallbackGradient: string; fallbackSvg: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
    }
  }, [src]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#F1F3F4] select-none flex items-center justify-center">
      {isLoading && (
        <div className="absolute inset-0 bg-[#E8EAED] animate-pulse flex flex-col items-center justify-center p-6 space-y-3 z-10 transition-opacity duration-300">
          <div className="w-8 h-8 rounded-full border-2 border-[#DADCE0] border-t-[#4285F4] animate-spin" />
          <p className="text-[10px] font-bold text-[#5F6368] tracking-widest uppercase">Loading Asset</p>
        </div>
      )}

      {hasError ? (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-6 transition-all duration-550`}>
          <div className="flex flex-col items-center text-center space-y-2">
            {fallbackSvg}
            <span className="text-[11px] font-mono font-semibold text-gray-500 tracking-wider">Asset Unavailable</span>
          </div>
        </div>
      ) : (
        <img 
          ref={imgRef}
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

// High Fidelity Testimonial Dataset as per the e-bike style reference
const RE_TESTIMONIALS = [
  {
    id: "testm-1",
    text: "My research journey at RÉ is so nice, and the mentors received me very politely. The prototyping and writing experience are also very good. Very green/smart workspace. I never experienced such a kind of high-performance research pipeline. Great support.",
    stars: 5,
    author: "Karan",
    role: "KRIP Scholar",
    date: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "testm-2",
    text: "I love my research fellowship at RÉ and the mentor support is excellent. They respond in a timely manner with loads of constructive advice and information about green composites, acoustics, and patent filing workflows.",
    stars: 5,
    author: "Catherine",
    role: "KREST Fellow",
    date: "10 days ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "testm-3",
    text: "Visited the RÉ laboratory facilities. The focus on experimental setups, particularly characterization testing of local natural composites, was stellar. We co-engineered premium eco-acoustic models and were highly satisfied.",
    stars: 5,
    author: "Peter",
    role: "REFLECT Scholar",
    date: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "testm-4",
    text: "My experience working on Vatteluttu OCR is excellent. The support in natural language processing and heritage digital characterization enabled us to publish our research paper securely. Excellent, pure scientific thrill.",
    stars: 5,
    author: "Anjali",
    role: "NLP Research Intern",
    date: "3 weeks ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  }
];

export default function App() {
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash || '#/');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState<string>('krip');
  const [selectedAreaId, setSelectedAreaId] = useState<string>('ai-data-science');
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [latestPage, setLatestPage] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Handle Hash routing and scrolling context
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
    setCurrentHash(hash);
  };

  const handleTagClick = (tag: string) => {
    navigateTo('#/projects');
  };

  const handleProgramClick = (progId: string) => {
    setSelectedProgramId(progId);
    navigateTo('#/programs');
  };

  // Structured dataset for paginated "Read the latest" section
  const latestPublications = [
    [
      {
        id: "lat-1",
        src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800&auto=format&fit=crop",
        alt: "Classical Vatteluttu Stone",
        tag: "NLP & Epigraphy",
        date: "JUNE 08, 2026",
        category: "PROJECT PUBLICATION",
        title: "Unlocking classical Vatteluttu stone characters with deep local architectures",
        desc: "How RÉ interns co-developed an OCR system utilizing local glyph segmentation to reconstruct historic 9th century epigraph indices.",
        gradient: "from-[#FCE8E6] to-[#FAD2CF]",
        iconColor: "text-[#EA4335]",
        svg: (
          <svg className="w-20 h-20 text-[#EA4335]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeDasharray="3 3" strokeWidth="1" />
            <rect x="30" y="30" width="40" height="40" rx="4" strokeWidth="1.5" />
            <path d="M40 45 h 20 M35 55 h 30 M45 35 v 30" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )
      },
      {
        id: "lat-2",
        src: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=800&auto=format&fit=crop",
        alt: "Diagnostics Microscope",
        tag: "Diagnostics AI",
        date: "JUNE 04, 2026",
        category: "MEDICAL TECH",
        title: "Diagnosing diabetic retinopathy with clinical edge-convolution weights",
        desc: "Compiling mobile convolutional neural networks designed to evaluate retinal scans under bandwidth-sensitive rural settings.",
        gradient: "from-[#E6F4EA] to-[#CEEAD6]",
        iconColor: "text-[#34A853]",
        svg: (
          <svg className="w-20 h-20 text-[#34A853]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="30" strokeWidth="1.5" />
            <path d="M50 20 v 60 M20 50 h 60 M30 30 l 40 40 M30 70 l 40 -40" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        )
      },
      {
        id: "lat-3",
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
        alt: "Noyyal Valley River",
        tag: "Hydrology Science",
        date: "MAY 29, 2026",
        category: "ECO SYSTEM ENVIRONMENT",
        title: "Localized Noyyal Valley eco-telemetry and open-source models",
        desc: "How open hydrology scripts and chemical sensor readings aid flood and chemical discharge diagnostics for urban water authorities.",
        gradient: "from-[#E8F0FE] to-[#D2E3FC]",
        iconColor: "text-[#4285F4]",
        svg: (
          <svg className="w-20 h-20 text-[#4285F4]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M15 50 C30 40, 45 60, 60 40 C75 30, 85 50, 95 40" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M15 65 C30 55, 45 75, 60 55" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        )
      }
    ],
    [
      {
        id: "lat-4",
        src: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=800&auto=format&fit=crop",
        alt: "Bamboo Fiber Material",
        tag: "Green Composites",
        date: "MAY 24, 2026",
        category: "MATERIALS RESEARCH",
        title: "Mechanical optimization of bamboo-reinforced biodegradable polymers",
        desc: "Characterizing tensile strengths and structural degradation curves of bio-friendly matrix materials to substitute single-use plastics.",
        gradient: "from-[#F3E8FF] to-[#E9D5FF]",
        iconColor: "text-[#9333EA]",
        svg: (
          <svg className="w-20 h-20 text-[#9333EA]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="25" y="25" width="50" height="50" rx="10" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M35 50 l 30 0" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: "lat-5",
        src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        alt: "Drone farm diagnostics",
        tag: "Smart Agriculture",
        date: "MAY 18, 2026",
        category: "AGRO-METEOROLOGY",
        title: "Drone spatial multispectral leaf nitrogen indexing in red soils",
        desc: "Developing localized multispectral indices for soil nitrogen classification to guide targeted fertilizer micro-dosages.",
        gradient: "from-[#FEF7E0] to-[#FEEFC3]",
        iconColor: "text-[#FBBC05]",
        svg: (
          <svg className="w-20 h-20 text-[#FBBC05]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <polygon points="50,15 85,75 15,75" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="50" cy="55" r="10" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: "lat-6",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        alt: "Logic Gates configure",
        tag: "Quantum Logic",
        date: "MAY 10, 2026",
        category: "COMPUTATIONAL THEORY",
        title: "Reversible undergraduate computing logic gate configurations",
        desc: "Analysing power dispersion and signal delay limits of reversible Feynman logic gates modeled on standard standard cell designs.",
        gradient: "from-[#E2F1F8] to-[#B0BEC5]",
        iconColor: "text-[#37474F]",
        svg: (
          <svg className="w-20 h-20 text-[#37474F]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M25 35 h 35 a 15 15 0 0 1 0 30 h -35 z" strokeWidth="2" />
            <line x1="15" y1="45" x2="25" y2="45" strokeWidth="2" />
            <line x1="15" y1="55" x2="25" y2="55" strokeWidth="2" />
            <line x1="60" y1="50" x2="80" y2="50" strokeWidth="2" />
          </svg>
        )
      }
    ]
  ];

  const handleNextLatest = () => {
    setLatestPage((prev) => (prev + 1) % latestPublications.length);
  };

  const handlePrevLatest = () => {
    setLatestPage((prev) => (prev - 1 + latestPublications.length) % latestPublications.length);
  };

  // Match the hash to render appropriate view
  const renderView = () => {
    if (currentHash === '#/' || currentHash === '') {
      return renderHome();
    }

    if (currentHash.startsWith('#/research-circle/')) {
      const circleId = currentHash.replace('#/research-circle/', '');
      return (
        <ResearchCircleDetailPage 
          circleId={circleId} 
          onBack={() => navigateTo('#/research-areas')} 
          onNavigate={navigateTo} 
        />
      );
    }

    switch (currentHash) {
      case '#/research-areas':
        return <ResearchAreasPage onNavigate={navigateTo} />;
      case '#/projects':
        return <ProjectsPage />;
      case '#/publications':
        return <PublicationsPage />;
      case '#/labs':
        return <ResearchLabsPage />;
      case '#/challenges':
        return <OpenChallengesPage />;
      case '#/careers':
        return <CareersPage />;
      case '#/events':
        return <EventsPage />;
      case '#/about':
        return <AboutPage />;

      default:
        if (currentHash === '#/programs' || currentHash.startsWith('#/programs/')) {
          const selectedId = currentHash.startsWith('#/programs/') ? currentHash.replace('#/programs/', '') : undefined;
          return <ProgramsPage onNavigate={navigateTo} selectedProgramId={selectedId} />;
        }
        return renderHome();
    }
  };

  const renderHome = () => {
    return (
      <div className="w-full text-[#202124] bg-white select-none" id="homepage-root">
        
        {/* ================= SECTION 1: HERO (CENTERED HERO CONTENT) ================= */}
        <section 
          className="relative overflow-hidden py-24 lg:py-32 border-b border-[#DADCE0] bg-white bg-[linear-gradient(to_right,#F3F4F6_1px,transparent_1px),linear-gradient(to_bottom,#F3F4F6_1px,transparent_1px)] [background-size:48px_48px]" 
          id="home-hero"
        >
          {/* Glowing blurred ambient blobs for a modern, high-end design overlay */}
          <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#34A853]/6 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse duration-10000" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#1A73E8]/6 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse duration-8000" />
          
          <div className="mx-auto max-w-[1440px] px-6 lg:px-20 relative z-10 w-full text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Joined, completely bolded heading matching the user request */}
              <h1 className="font-display text-[46px] sm:text-[68px] lg:text-[80px] font-black tracking-tight text-[#202124] leading-[1.1] select-none text-center">
                Research, to reality.
              </h1>

              {/* Clean structured description matching the attached image perfectly */}
              <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[#5F6368] leading-relaxed max-w-3xl mx-auto font-light text-center">
                RÉ acts as the central research gateway of Kumaraguru Institutions. By structuring undergraduate curiosity, we co-engineer ecological composites, custom neural architectures, and classical Tamil script registries to unlock regional economic vitality.
              </p>

              {/* Centered actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => navigateTo('#/research-areas')}
                  className="bg-[#202124] hover:bg-black text-white font-sans text-[15px] font-bold px-7 py-4 rounded-full transition-all hover:scale-[1.01] flex items-center space-x-2.5 cursor-pointer shadow-sm h-[48px]"
                >
                  <span>Explore Research Circles</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => navigateTo('#/projects')}
                  className="bg-white hover:bg-gray-50 text-[#202124] border border-[#DADCE0] font-sans text-[15px] font-bold px-7 py-4 rounded-full transition-all hover:scale-[1.01] cursor-pointer h-[48px] shadow-sm"
                >
                  Browse Projects
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 2: QUOTE BLOCK WITH BACKGROUND IMAGE AND AUTHOR POSITIONING ================= */}
        <section className="mx-auto max-w-[1440px] px-6 lg:px-20 py-10 lg:py-14 font-sans border-b border-[#DADCE0]" id="home-quote">
          <div 
            className="relative w-full overflow-hidden rounded-[32px] bg-cover bg-center min-h-[360px] flex flex-col justify-center items-center text-center p-8 sm:p-14 shadow-xl border border-[#DADCE0]/40 transition-transform duration-300 hover:scale-[1.005]"
            style={{ backgroundImage: `url('/src/assets/images/hero_science_curiosity_1781713989413.jpg')` }}
          >
            {/* Rich ChatGPT dark-slate tint overlay for beautiful contrast and legibility */}
            <div className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-[1px] pointer-events-none z-0" />
            
            {/* Faint elegant ChatGPT logo watermark spinning slowly behind the quote text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none z-0 overflow-hidden">
              <svg 
                viewBox="0 0 24 24" 
                className="w-[420px] h-[420px] text-white fill-current animate-[spin_120s_linear_infinite]"
              >
                <path d="M21.74 11.45a3.81 3.81 0 0 0-1.81-3 3.82 3.82 0 0 0 .61-3.4 3.86 3.86 0 0 0-2.42-2.42 3.82 3.82 0 0 0-3.4.61 3.81 3.81 0 0 0-3-1.81 3.82 3.82 0 0 0-3.4.61 3.86 3.86 0 0 0-2.42 2.42 3.82 3.82 0 0 0 .61 3.4 3.81 3.81 0 0 0-1.81 3 3.82 3.82 0 0 0-.61 3.4 3.86 3.86 0 0 0 2.42 2.42 3.82 3.82 0 0 0 3.4-.61 3.81 3.81 0 0 0 3 1.81 3.82 3.82 0 0 0 3.4-.61 3.86 3.86 0 0 0 2.42-2.42 3.82 3.82 0 0 0-.61-3.4 3.81 3.81 0 0 0 1.81-3M12 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5m4.77-5.06a3.83 3.83 0 0 0-1-.38 3.82 3.82 0 0 0-.52-1.39 12.18 12.18 0 0 0 .84-.71 1.34 1.34 0 0 1 1.88.13 1.35 1.35 0 0 1-.09 1.9c-.31.29-.71.45-1.11.45M6.41 7a1.34 1.34 0 0 1 1.88-.13c.27.24.56.48.84.71a3.82 3.82 0 0 0-.52 1.39 3.83 3.83 0 0 0-1 .38c-.4-.01-.81-.17-1.11-.45a1.35 1.35 0 0 1-.1-.1c-.44-.45-.44-1.22.01-1.8M5.8 15a1.35 1.35 0 0 1 .1-1.9c.31-.29.7-.45 1.1-.45a3.8 3.8 0 0 0 1 .38 3.82 3.82 0 0 0 .52 1.39 12.18 12.18 0 0 0-.84.71a1.34 1.34 0 0 1-1.88-.13 1.33 1.33 0 0 1-.1-1.88m11.83 2a1.34 1.34 0 0 1-1.88.13c-.27-.24-.56-.48-.84-.71a3.82 3.82 0 0 0 .52-1.39 3.83 3.83 0 0 0 1-.38c.4 0 .8.16 1.11.45a1.35 1.35 0 0 1 .09 1.9" />
              </svg>
            </div>
            
            <div className="relative z-10 max-w-4xl space-y-4 mx-auto">
              <span className="text-[#34A853]/60 text-[64px] font-serif leading-[0.1] font-extrabold select-none block -mt-2">
                “
              </span>
              
              {/* Reduced size as requested */}
              <h2 className="font-sans text-[16px] sm:text-[20px] lg:text-[22px] font-normal text-slate-100 leading-relaxed tracking-tight max-w-3xl mx-auto">
                "The magic cycle of undergraduate research is shifting. Local scientific breakthroughs lead immediately to greater real-world impact for society and regional industries—unlocking limitless curiosities."
              </h2>
            </div>
 
            {/* Centered author details inside the quote card */}
            <div className="relative z-10 flex flex-col items-center space-y-2 pt-6 border-t border-white/10 mt-6 w-full max-w-xs mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop" 
                alt="Prof. K. Ramesh" 
                className="h-[44px] w-[44px] rounded-full object-cover border border-white/20 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <h4 className="font-sans font-bold text-sm text-white leading-tight">Prof. K. Ramesh</h4>
                <p className="text-[11px] text-[#A7F3D0] font-medium tracking-wide mt-0.5">
                  Dean of Research & Innovation, Kumaraguru Institutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: HIGH-FIDELITY TESTIMONIAL SLIDER ================= */}
        <section className="bg-[#F8F9FA] py-20 lg:py-24 border-b border-[#DADCE0] relative overflow-hidden font-sans" id="home-testimonials">
          
          {/* Faint ChatGPT logo behind quote/text exactly as requested */}
          <div className="absolute top-1/2 left-[5%] -translate-y-1/2 opacity-[0.05] pointer-events-none select-none z-0">
            <svg 
              viewBox="0 0 24 24" 
              className="w-[280px] h-[280px] text-gray-900 fill-current animate-[spin_100s_linear_infinite]"
            >
              <path d="M21.74 11.45a3.81 3.81 0 0 0-1.81-3 3.82 3.82 0 0 0 .61-3.4 3.86 3.86 0 0 0-2.42-2.42 3.82 3.82 0 0 0-3.4.61 3.81 3.81 0 0 0-3-1.81 3.82 3.82 0 0 0-3.4.61 3.86 3.86 0 0 0-2.42 2.42 3.82 3.82 0 0 0 .61 3.4 3.81 3.81 0 0 0-1.81 3 3.82 3.82 0 0 0-.61 3.4 3.86 3.86 0 0 0 2.42 2.42 3.82 3.82 0 0 0 3.4-.61 3.81 3.81 0 0 0 3 1.81 3.82 3.82 0 0 0 3.4-.61 3.86 3.86 0 0 0 2.42-2.42 3.82 3.82 0 0 0-.61-3.4 3.81 3.81 0 0 0 1.81-3M12 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5m4.77-5.06a3.83 3.83 0 0 0-1-.38 3.82 3.82 0 0 0-.52-1.39 12.18 12.18 0 0 0 .84-.71 1.34 1.34 0 0 1 1.88.13 1.35 1.35 0 0 1-.09 1.9c-.31.29-.71.45-1.11.45M6.41 7a1.34 1.34 0 0 1 1.88-.13c.27.24.56.48.84.71a3.82 3.82 0 0 0-.52 1.39 3.83 3.83 0 0 0-1 .38c-.4-.01-.81-.17-1.11-.45a1.35 1.35 0 0 1-.1-.1c-.44-.45-.44-1.22.01-1.8M5.8 15a1.35 1.35 0 0 1 .1-1.9c.31-.29.7-.45 1.1-.45a3.8 3.8 0 0 0 1 .38 3.82 3.82 0 0 0 .52 1.39 12.18 12.18 0 0 0-.84.71a1.34 1.34 0 0 1-1.88-.13 1.33 1.33 0 0 1-.1-1.88m11.83 2a1.34 1.34 0 0 1-1.88.13c-.27-.24-.56-.48-.84-.71a3.82 3.82 0 0 0 .52-1.39 3.83 3.83 0 0 0 1-.38c.4 0 .8.16 1.11.45a1.35 1.35 0 0 1 .09 1.9" />
            </svg>
          </div>

          <div className="mx-auto max-w-[1440px] px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Header / Arrows Block (cols 4) */}
            <div className="lg:col-span-4 space-y-6 text-left relative z-10">
              {/* Giant quote mark icon */}
              <div className="text-[#80868B] text-[100px] font-serif leading-[0.1] font-extrabold select-none pt-4">
                “
              </div>
              <h2 className="font-display text-[32px] md:text-[38px] font-extrabold text-[#202124] tracking-tight leading-tight max-w-[280px]">
                What our scholars are saying
              </h2>

              {/* Slider tracker control group as per reference */}
              <div className="flex items-center space-x-4 pt-4 select-none">
                <button 
                  onClick={() => setTestimonialIndex(prev => (prev - 1 + RE_TESTIMONIALS.length) % RE_TESTIMONIALS.length)}
                  className="p-2 border border-[#DADCE0] hover:bg-[#F1F3F4] text-gray-600 rounded-full transition-all cursor-pointer"
                  title="Previous"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                
                {/* Visual Line Slider track */}
                <div className="w-20 md:w-28 h-[2px] bg-[#DADCE0] relative">
                  <div 
                    className="absolute h-2 w-2 bg-gray-900 rounded-full top-1/2 -translate-y-1/2 transition-all duration-300"
                    style={{ left: `${(testimonialIndex / (RE_TESTIMONIALS.length - 1)) * 100}%` }}
                  />
                  <div 
                    className="h-full bg-gray-900 transition-all duration-300"
                    style={{ width: `${(testimonialIndex / (RE_TESTIMONIALS.length - 1)) * 100}%` }}
                  />
                </div>

                <button 
                  onClick={() => setTestimonialIndex(prev => (prev + 1) % RE_TESTIMONIALS.length)}
                  className="p-2 border border-[#DADCE0] hover:bg-[#F1F3F4] text-gray-600 rounded-full transition-all cursor-pointer"
                  title="Next"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Testimonials row (cols 8) - sliding container showing 2 cards on desktop */}
            <div className="lg:col-span-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                {[0, 1].map((offset) => {
                  const itemIndex = (testimonialIndex + offset) % RE_TESTIMONIALS.length;
                  const item = RE_TESTIMONIALS[itemIndex];
                  
                  return (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex flex-col space-y-4"
                    >
                      {/* Speech Bubble shaped panel */}
                      <div className="bg-white border border-[#E0E2E6] rounded-[24px] p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between min-h-[220px]">
                        <p className="text-[15px] text-[#4A4D50] leading-relaxed font-light">
                          "{item.text}"
                        </p>
                        
                        <div className="pt-4 flex items-center space-x-1">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#34A853] text-[#34A853]" />
                          ))}
                        </div>

                        {/* Triangulating speech arrow pointer */}
                        <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-white border-r border-b border-[#E0E2E6] rotate-45 transform" />
                      </div>

                      {/* Author Details details underneath bubble */}
                      <div className="flex items-center space-x-3.5 pl-6 pt-1">
                        <img 
                          src={item.avatar} 
                          alt={item.author} 
                          className="h-[44px] w-[44px] rounded-full object-cover border border-[#DADCE0] select-none"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                          <h4 className="font-sans font-bold text-sm text-gray-900 leading-tight">
                            {item.author}
                          </h4>
                          <p className="text-[11px] text-[#5F6368] font-semibold tracking-wider uppercase mt-0.5">
                            {item.role} • {item.date}
                          </p>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>


        {/* ================= SECTION 3: 'READ THE LATEST' (WITH PAGINATION AND CAROUSEL CONTROLS) ================= */}
        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:py-24 lg:px-20 font-sans border-b border-[#DADCE0]" id="home-latest-research">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#4285F4] text-xs font-bold uppercase tracking-widest mb-3">
                <Newspaper className="h-4 w-4" />
                <span>Intellectual Disseminations</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[42px] font-bold tracking-tight text-gray-900 leading-tight">
                Read the latest
              </h2>
            </div>
            
            {/* Two Black Pill CTA buttons in top-right */}
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              <button 
                onClick={() => navigateTo('#/publications')} 
                className="rounded-full bg-[#202124] hover:bg-black text-white text-[13px] font-bold px-6 py-3.5 transition-all cursor-pointer h-[48px] shadow-sm select-none"
              >
                See more publications
              </button>
              <button 
                onClick={() => navigateTo('#/projects')} 
                className="rounded-full bg-[#202124] hover:bg-black text-white text-[13px] font-bold px-6 py-3.5 transition-all cursor-pointer h-[48px] shadow-sm select-none"
              >
                See more blog posts
              </button>
            </div>
          </div>

          {/* 3-Column Card Grid with smooth item rendering */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPublications[latestPage].map((pub) => (
              <div 
                key={pub.id}
                className="group border border-[#DADCE0] hover:border-[#1A73E8]/50 hover:shadow-xl hover:shadow-[#1A73E8]/[0.03] transition-all duration-300 rounded-[28px] overflow-hidden bg-white flex flex-col justify-between animate-fadeIn"
              >
                <div>
                  {/* Visual Accent Box with Premium Image & Fallback */}
                  <div className="h-[210px] border-b border-[#DADCE0]/60 relative select-none overflow-hidden bg-gray-100">
                    <SafeImage 
                      src={pub.src} 
                      alt={pub.alt}
                      fallbackGradient={pub.gradient}
                      fallbackSvg={pub.svg}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none" />
                    
                    {/* Tag badge with small circular avatar/stat details overlay */}
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full shadow-sm flex items-center space-x-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{pub.tag}</span>
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-[#5F6368] uppercase tracking-widest block font-mono">
                      {pub.date} • {pub.category}
                    </span>
                    <h3 
                      onClick={() => navigateTo('#/projects')}
                      className="font-display font-bold text-[19px] sm:text-[20px] text-gray-900 group-hover:text-[#1A73E8] leading-snug cursor-pointer transition-colors max-h-[56px] overflow-hidden line-clamp-2"
                    >
                      {pub.title}
                    </h3>
                    <p className="text-[#5F6368] text-sm leading-relaxed font-light line-clamp-3">
                      {pub.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button onClick={() => navigateTo('#/projects')} className="text-sm font-bold text-[#1A73E8] hover:underline flex items-center space-x-1 cursor-pointer">
                    <span>Read blog post</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right pagination controls styled below the grid */}
          <div className="flex items-center justify-center space-x-6 mt-12 pt-6 border-t border-[#DADCE0]/50">
            <button 
              onClick={handlePrevLatest}
              className="p-3 border border-[#DADCE0] hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-full transition-all cursor-pointer focus:outline-none"
              title="Previous Page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs font-mono font-bold text-[#5F6368] tracking-widest uppercase">
              PAGE {latestPage + 1} OF {latestPublications.length}
            </span>
            <button 
              onClick={handleNextLatest}
              className="p-3 border border-[#DADCE0] hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-full transition-all cursor-pointer focus:outline-none"
              title="Next Page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </section>

      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-[#4285F4]/20">
      
      {/* Sticky Header */}
      <Header 
        currentHash={currentHash} 
        onNavigate={navigateTo} 
        onSearchOpen={() => setSearchOpen(true)} 
      />

      {/* Main Dynamic View Workspace */}
      <main className="flex-grow">
        {renderView()}
      </main>

      {/* Mandatory Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Search Overlay */}
      {searchOpen && (
        <SearchOverlay 
          onClose={() => setSearchOpen(false)} 
          onNavigate={navigateTo} 
        />
      )}

      {/* High-Fidelity Scientific Film Modal */}
      {filmModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-[960px] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setFilmModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/80 border border-white/10 text-white rounded-full transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/c1v8fN7I6Q8?autoplay=1"
                title="RÉ Research Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResourceCard from './components/ResourceCard';
import EcosystemBlock from './components/EcosystemBlock';
import Spotlight from './components/Spotlight';
import SearchOverlay from './components/SearchOverlay';
import heroImage from './assets/images/hero_science_curiosity_1781713989413.jpg';
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
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
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

  // Structured dataset for paginated "Featured Research Projects" section
  const latestPublications = [
    [
      {
        id: "proj-1",
        src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop",
        alt: "Battery Energy Storage System",
        tag: "BESS",
        owner: "Battery Research Circle",
        stage: "Product",
        date: "ACTIVE INFRASTRUCTURE",
        category: "CLEAN ENERGY",
        title: "Battery Energy Storage System",
        desc: "Battery Energy Storage System (BESS) is an energy management solution that stores excess electrical energy generated from solar photovoltaic systems and supplies power during periods of low generation or high demand. The system enhances energy reliability, improves grid stability, and enables efficient integration of renewable energy sources.",
        gradient: "from-[#E6F4EA] to-[#CEEAD6]",
        iconColor: "text-[#34A853]",
        svg: (
          <svg className="w-20 h-20 text-[#34A853]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <rect x="30" y="20" width="40" height="60" rx="8" strokeWidth="2" />
            <line x1="40" y1="35" x2="60" y2="35" strokeWidth="2" />
            <line x1="45" y1="50" x2="55" y2="50" strokeWidth="2" />
            <line x1="45" y1="65" x2="55" y2="65" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: "proj-2",
        src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop",
        alt: "Small Scale Wind Turbine",
        tag: "Wind Energy",
        owner: "Team Sulal",
        stage: "Prototype",
        date: "RESEARCH FEATURE",
        category: "RENEWABLE CAPTURE",
        title: "Small Scale Wind Turbine",
        desc: "This small-scale wind turbine utilizes sustainable and environmentally friendly materials, including eco-conscious composite blades, to efficiently convert wind energy into clean electricity. Its optimized aerodynamic design enhances energy capture while reducing environmental impact, supporting renewable energy adoption and sustainable power generation.",
        gradient: "from-[#E8F0FE] to-[#D2E3FC]",
        iconColor: "text-[#4285F4]",
        svg: (
          <svg className="w-20 h-20 text-[#4285F4]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="10" strokeWidth="2" />
            <path d="M50 20 L50 40 M50 60 L50 80 M20 50 L40 50 M60 50 L80 50" strokeWidth="2" />
          </svg>
        )
      },
      {
        id: "proj-3",
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
        alt: "Assistive Communication Device for Hard of Hearing Individuals",
        tag: "Assistive Tech",
        owner: "Educational Research Circle",
        stage: "Prototype",
        date: "RESEARCH FEATURE",
        category: "INCLUSION & ACCESS",
        title: "Assistive Communication Device for Hard of Hearing Individuals",
        desc: "A platform that converts live multilingual speech into accessible captions for Deaf and Hard-of-Hearing users. Designed for Indian classrooms and everyday communication, it provides speech recognition, translation, speaker identification, and simplified captions to improve inclusion, comprehension, and accessibility.",
        gradient: "from-[#FCE8E6] to-[#FAD2CF]",
        iconColor: "text-[#EA4335]",
        svg: (
          <svg className="w-20 h-20 text-[#EA4335]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M20 30 h 60 v 40 h -60 z" strokeWidth="2" />
            <path d="M30 45 h 40 M30 55 h 30" strokeWidth="2" strokeLinecap="round" />
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
          <section
  className="relative overflow-hidden w-full h-[calc(100vh-64px)] md:h-[calc(100vh-72px)] min-h-[550px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[850px] border-b border-[#DADCE0] bg-white bg-contain bg-center bg-no-repeat flex items-center justify-center"
  backgroundImage: `url(${heroImage})`
}}
          id="home-hero"
        >
          {/* Subtle bottom padding container to position standard action buttons elegantly */}
             <div className="absolute inset-0 flex justify-center pt-32 z-10">
             <div className="max-w-4xl mx-auto px-6 -mt-96 border-4 border-red-500">

    <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => navigateTo('#/research-areas')}
                  className="bg-[#202124] hover:bg-black text-white font-sans text-[15px] font-bold px-7 py-4 rounded-full transition-all hover:scale-[1.02] flex items-center space-x-2.5 cursor-pointer shadow-lg active:scale-95 h-[48px] select-none"
                >
                  <span>Explore Research Circles</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => navigateTo('#/projects')}
                  className="bg-white hover:bg-gray-50 text-[#202124] border border-[#DADCE0] font-sans text-[15px] font-bold px-7 py-4 rounded-full transition-all hover:scale-[1.02] cursor-pointer active:scale-95 h-[48px] shadow-lg select-none"
                >
                  Browse Projects
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SCHOLAR TESTIMONIALS ================= */}
        <section className="bg-[#F8F9FA] py-20 lg:py-24 border-b border-[#DADCE0] relative overflow-hidden font-sans">

          <div className="mx-auto max-w-[1440px] px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side */}
            <div className="lg:col-span-4 space-y-6">

              <div className="text-[#80868B] text-[100px] font-serif leading-[0.1] font-extrabold">
                “
              </div>

              <h2 className="font-display text-[32px] md:text-[38px] font-extrabold text-[#202124] tracking-tight leading-tight max-w-[280px]">
                What our scholars are saying
              </h2>

              <div className="flex items-center space-x-4 pt-4">

                <button
                  onClick={() =>
                    setTestimonialIndex(
                      prev =>
                        (prev - 1 + RE_TESTIMONIALS.length) %
                        RE_TESTIMONIALS.length
                    )
                  }
                  className="p-2 border border-[#DADCE0] hover:bg-[#F1F3F4] rounded-full"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="w-28 h-[2px] bg-[#DADCE0] relative">

                  <div
                    className="absolute h-2 w-2 bg-black rounded-full top-1/2 -translate-y-1/2 transition-all"
                    style={{
                      left: `${(testimonialIndex /
                          (RE_TESTIMONIALS.length - 1)) *
                        100
                        }%`
                    }}
                  />

                  <div
                    className="h-full bg-black transition-all"
                    style={{
                      width: `${(testimonialIndex /
                          (RE_TESTIMONIALS.length - 1)) *
                        100
                        }%`
                    }}
                  />

                </div>

                <button
                  onClick={() =>
                    setTestimonialIndex(
                      prev =>
                        (prev + 1) %
                        RE_TESTIMONIALS.length
                    )
                  }
                  className="p-2 border border-[#DADCE0] hover:bg-[#F1F3F4] rounded-full"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>

              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {[0, 1].map(offset => {

                  const itemIndex =
                    (testimonialIndex + offset) %
                    RE_TESTIMONIALS.length;

                  const item =
                    RE_TESTIMONIALS[itemIndex];

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white border border-[#E0E2E6] rounded-[24px] p-6 shadow-sm relative min-h-[220px]">

                        <p className="text-[15px] text-[#4A4D50] leading-relaxed">
                          "{item.text}"
                        </p>

                        <div className="pt-4 flex items-center space-x-1">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-[#34A853] text-[#34A853]"
                            />
                          ))}
                        </div>

                        <div className="absolute -bottom-2.5 left-8 w-5 h-5 bg-white border-r border-b border-[#E0E2E6] rotate-45" />

                      </div>

                      <div className="flex items-center space-x-3.5 pl-6 pt-4">

                        <img
                          src={item.avatar}
                          alt={item.author}
                          className="h-[44px] w-[44px] rounded-full object-cover border border-[#DADCE0]"
                        />

                        <div>
                          <h4 className="font-bold text-sm text-gray-900">
                            {item.author}
                          </h4>

                          <p className="text-[11px] text-[#5F6368] font-semibold uppercase">
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

        {/* ================= SECTION 3: FEATURED RESEARCH PROJECTS SHOWCASE ================= */}
        <section className="mx-auto max-w-[1440px] px-6 py-20 lg:py-24 lg:px-20 font-sans border-b border-[#DADCE0]" id="home-latest-research">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative">
            <div>
              <div className="inline-flex items-center space-x-2 text-[#4285F4] text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="h-4 w-4 text-[#4285F4] animate-pulse" />
                <span>Innovation Showcase</span>
              </div>
              <h2 className="font-display text-[32px] sm:text-[42px] font-bold tracking-tight text-gray-900 leading-tight mb-3">
                Featured Research Projects
              </h2>
              <p className="text-sm sm:text-base text-[#5F6368] font-light max-w-2xl leading-relaxed">
                Showcase innovative projects, prototypes, and products developed by Kumaraguru research communities.
              </p>
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
                See more projects
              </button>
            </div>
          </div>

          {/* 3-Column Card Grid with smooth item rendering */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPublications[latestPage].map((pub: any) => (
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

                    {/* Stage Badge in top-right */}
                    <span className={`absolute top-3 right-3 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 bg-white border border-[#DADCE0] rounded-full shadow-sm ${pub.stage === 'Product'
                        ? 'text-[#34A853]'
                        : 'text-[#4285F4]'
                      }`}>
                      {pub.stage}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-xs font-bold text-[#5F6368] uppercase tracking-widest block font-mono">
                      {pub.date} • {pub.category}
                    </span>
                    <div className="space-y-1">
                      <h3
                        onClick={() => navigateTo('#/projects')}
                        className="font-display font-bold text-[19px] sm:text-[20px] text-gray-900 group-hover:text-[#1A73E8] leading-snug cursor-pointer transition-colors max-h-[56px] overflow-hidden line-clamp-2"
                      >
                        {pub.title}
                      </h3>
                      {/* Project Owner directly beneath the project title */}
                      <span className="block text-xs font-semibold text-[#5F6368] tracking-wide">
                        By {pub.owner}
                      </span>
                    </div>
                    <p className="text-[#5F6368] text-sm leading-relaxed font-light line-clamp-4">
                      {pub.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button onClick={() => navigateTo('#/projects')} className="text-sm font-bold text-[#1A73E8] hover:underline flex items-center space-x-1 cursor-pointer">
                    <span>Explore Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Left/Right pagination controls display only if we have multiple pages */}
          {latestPublications.length > 1 && (
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
          )}

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

import React, { useEffect, useRef } from 'react';
import { 
  Award, 
  Sparkles, 
  GraduationCap, 
  Users, 
  BookOpen, 
  ArrowRight, 
  Check, 
  Compass, 
  Layers, 
  Briefcase 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface ProgramsPageProps {
  onNavigate: (hash: string) => void;
  selectedProgramId?: string;
}

export default function ProgramsPage({ onNavigate, selectedProgramId }: ProgramsPageProps) {
  
  // Smooth scroll handler helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Listen to URL hash or prop updates and auto scroll
  useEffect(() => {
    if (selectedProgramId) {
      // Delay slightly to allow full mounting
      const timer = setTimeout(() => {
        scrollToSection(selectedProgramId);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [selectedProgramId]);

  return (
    <div className="w-full font-sans text-gray-900 bg-[#FAFAFA]" id="programs-page-root">
      {/* Editorial Page Title Header - Images hidden, Left-aligned for high editorial feel */}
      <PageHeader 
        category="RÉ ACADEMIC PATHWAYS"
        title="Programs & Pathways"
        description="Every researcher starts somewhere. Research is not a single moment of discovery. It is a journey shaped by curiosity, mentorship, exploration, and practice."
        accentColor="green"
        gradientTheme="blue"
        center={false}
        hideImages={true}
      />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-16 py-12">
        
        {/* ================= SECTION 1: PROGRAMS OVERVIEW & SUMMARY ================= */}
        <section id="programs-intro" className="mb-20">
          <div className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm transition-all duration-300">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A73E8] mb-4">At Ré</h3>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
              Our programs are designed to help students engage with research at different stages of their academic journey—whether they are taking their first step into inquiry or contributing to advanced investigations. Each program serves a distinct purpose, but together they create a pathway that transforms curiosity into capability.
            </p>
          </div>
        </section>

        {/* ================= SECTION 3: RECT-STRUCTURED METHODOLOGY DETAILS ================= */}
        <section className="space-y-16" id="structured-programs-details">
          
          {/* Card 1: KREST */}
          <div 
            id="krest" 
            className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="p-3 bg-[#34A853]/15 text-[#34A853] rounded-xl">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#34A853] uppercase tracking-wider block">Program Module . 01</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">KREST</h3>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
              The foundation of research capability.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              KREST introduces students to the mindset, methods, and practices that underpin meaningful research. Designed as an entry point into the research ecosystem, KREST helps learners understand how questions are framed, evidence is gathered, and knowledge is created. Students develop the confidence to think critically, explore systematically, and approach problems with a research perspective. For many students, KREST is where the research journey begins.
            </p>

            <div className="p-6 bg-[#34A853]/5 rounded-xl border border-[#34A853]/10 mb-8 max-w-2xl">
              <h4 className="text-sm font-bold text-[#34A853] uppercase tracking-wider mb-4 flex items-center">
                <span className="mr-2">Through KREST, students learn to</span>
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Ask meaningful questions",
                  "Observe critically",
                  "Investigate systematically",
                  "Evaluate evidence",
                  "Document findings",
                  "Communicate ideas effectively"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <Check className="h-4.5 w-4.5 text-[#34A853] mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('#/careers')}
              className="inline-flex items-center text-sm font-bold text-[#1A73E8] hover:text-blue-700 transition-colors"
            >
              <span>Explore KREST opportunities</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

          {/* Card 2: REFLECT */}
          <div 
            id="reflect" 
            className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="p-3 bg-[#FBBC05]/15 text-[#FBBC05] rounded-xl">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider block">Program Module . 02</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">REFLECT</h3>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
              Learning through inquiry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              REFLECT encourages students to engage deeply with ideas, experiences, and observations through structured reflection and exploration. The program helps learners develop habits of critical thinking, intellectual curiosity, and self-directed inquiry. Rather than focusing solely on outcomes, REFLECT emphasizes the importance of asking better questions and learning through the process of investigation.
            </p>

            <div className="p-6 bg-[#FBBC05]/5 rounded-xl border border-amber-200/20 mb-8 max-w-2xl">
              <h4 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4">Focus Areas</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Reflective Practice",
                  "Critical Thinking",
                  "Inquiry-Based Learning",
                  "Documentation & Synthesis",
                  "Research Communication"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <Check className="h-4.5 w-4.5 text-amber-500 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => scrollToSection('programs-intro')}
              className="inline-flex items-center text-sm font-bold text-[#1A73E8] hover:text-blue-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

          {/* Card 3: KRIP */}
          <div 
            id="krip" 
            className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="p-3 bg-[#4285F4]/15 text-[#4285F4] rounded-xl">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#4285F4] uppercase tracking-wider block">Program Module . 03</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">KRIP</h3>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
              Research beyond the classroom.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              The Kumaraguru Research Internship Programme (KRIP) provides students with opportunities to engage in immersive research experiences under the guidance of faculty mentors. Participants investigate real-world challenges, work on ongoing research initiatives, and contribute to projects that extend beyond academic coursework. KRIP bridges the gap between learning and practice, enabling students to experience research as it is conducted in professional environments.
            </p>

            <div className="p-6 bg-[#4285F4]/5 rounded-xl border border-blue-100 mb-8 max-w-2xl">
              <h4 className="text-sm font-bold text-[#4285F4] uppercase tracking-wider mb-4">What Students Gain</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Hands-on Research Experience",
                  "Faculty Mentorship",
                  "Field Investigation Exposure",
                  "Research Documentation Skills",
                  "Collaborative Learning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <Check className="h-4.5 w-4.5 text-[#4285F4] mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('#/careers')}
              className="inline-flex items-center text-sm font-bold text-[#1A73E8] hover:text-blue-700 transition-colors"
            >
              <span>Explore KRIP Positions</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

          {/* Card 4: Research Circles */}
          <div 
            id="circles" 
            className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="p-3 bg-[#EA4335]/15 text-[#EA4335] rounded-xl">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#EA4335] uppercase tracking-wider block">Program Module . 04</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">Research Circles</h3>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
              Communities built around questions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Research Circles are the heart of the Ré ecosystem. These long-term communities of inquiry bring together students and mentors around shared domains of exploration. Every circle builds upon previous discoveries, ensuring that knowledge grows rather than disappears. Students contribute to ongoing investigations, participate in collaborative projects, and become part of a research culture that extends across generations.
            </p>

            <div className="p-6 bg-[#EA4335]/5 rounded-xl border border-red-100 mb-8 max-w-2xl">
              <h4 className="text-sm font-bold text-[#EA4335] uppercase tracking-wider mb-4">Research Circle Domains</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Environmental Science & Systems",
                  "Bioscience",
                  "Renewable Energy",
                  "Automotive Research",
                  "Educational Research",
                  "Design Research"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <Check className="h-4.5 w-4.5 text-[#EA4335] mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('#/research-areas')}
              className="inline-flex items-center text-sm font-bold text-[#1A73E8] hover:text-blue-700 transition-colors"
            >
              <span>Explore Research Circles</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

          {/* Card 5: UROP */}
          <div 
            id="urop" 
            className="p-8 md:p-12 bg-white border border-[#DADCE0] rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
          >
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="p-3 bg-gray-100 text-gray-700 rounded-xl">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Program Module . 05</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-display">UROP</h3>
              </div>
            </div>

            <p className="text-lg font-bold text-gray-800 leading-relaxed mb-4">
              Undergraduate Research Opportunities Program (UROP)
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
              Faculty-Led Research provides opportunities for students to engage directly with ongoing investigations guided by experienced mentors. Students gain exposure to research methodologies, contribute to meaningful work, and develop the skills required to participate in larger research initiatives. These collaborations often become gateways to publications, innovation projects, conferences, and advanced research opportunities.
            </p>

            <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 mb-8 max-w-2xl">
              <h4 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Opportunities Include</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Research Assistantships",
                  "Interdisciplinary Projects",
                  "Publication Support",
                  "Conference Participation",
                  "Innovation & Prototyping"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                    <Check className="h-4.5 w-4.5 text-gray-500 mr-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => onNavigate('#/careers')}
              className="inline-flex items-center text-sm font-bold text-[#1A73E8] hover:text-blue-700 transition-colors"
            >
              <span>Discover Opportunities</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

        </section>

        {/* ================= SECTION 4: ONE ECOSYSTEM. MULTIPLE PATHWAYS. ================= */}
        <section className="mt-24 border-t border-[#DADCE0] pt-16" id="ecosystem-pathways">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-8 md:p-12 border border-[#DADCE0] rounded-2xl">
            <div className="md:col-span-4">
              <span className="text-xs font-bold text-[#1A73E8] uppercase tracking-wider block mb-2">Unification</span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                One Ecosystem. Multiple Pathways.
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-gray-600 leading-relaxed">
                Every student enters research differently. Some begin with KREST. Some discover their interests through REFLECT. Others immerse themselves in KRIP or join a Research Circle. What connects them all is a shared commitment to inquiry, discovery, and continuous learning. No matter where you start, each pathway leads toward a deeper understanding of research and a greater capacity to contribute meaningfully.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: BEGIN YOUR JOURNEY ================= */}
        <section className="mt-16 mb-16" id="begin-journey">
          <div className="p-8 md:p-12 bg-gradient-to-br from-gray-900 via-slate-800 to-slate-950 text-white rounded-2xl shadow-lg border border-slate-700 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] -z-10" />
            
            <h3 className="font-display text-2xl md:text-3xl font-black mb-6">Begin your journey.</h3>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 text-[15px] font-light">
              The most important question is not what you already know. It is what you are willing to explore. Discover the pathway that matches your curiosity and take your first step into the Ré research ecosystem.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('#/careers')}
                className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-sm text-sm tracking-wide transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Join KREST</span>
                <ArrowRight className="h-4.5 w-4.5 text-slate-900" />
              </button>

              <button 
                onClick={() => onNavigate('#/research-areas')}
                className="bg-transparent hover:bg-white/10 border border-slate-500 hover:border-white text-white font-bold px-6 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Explore Research Circles</span>
                <ArrowRight className="h-4.5 w-4.5 text-slate-300" />
              </button>

              <button 
                onClick={() => onNavigate('#/careers')}
                className="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white font-bold px-6 py-3 rounded-xl text-sm tracking-wide transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>View Research Opportunities</span>
                <ArrowRight className="h-4.5 w-4.5 text-slate-400" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

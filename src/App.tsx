import React, { useState } from 'react';
import { 
  Building, 
  HelpCircle, 
  Search, 
  Compass, 
  Layers, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Database, 
  Briefcase, 
  Brain, 
  UserPlus, 
  Lightbulb,
  Globe
} from 'lucide-react';

// Import newly polished views
import AboutView from './components/AboutView';
import ProgramsView from './components/ProgramsView';
import ResearchView from './components/ResearchView';
import EcosystemView from './components/EcosystemView';
import PeopleView from './components/PeopleView';
import AlumniView from './components/AlumniView';
import InsightsView from './components/InsightsView';
import DatasetsView from './components/DatasetsView';
import StartupHubView from './components/StartupHubView';
import AIHubView from './components/AIHubView';
import JoinUsView from './components/JoinUsView';
import GlobalSearch from './components/GlobalSearch';
import ReLogo from './components/ReLogo';

type TabID = 
  | 'about' 
  | 'programs' 
  | 'research' 
  | 'ecosystem' 
  | 'people' 
  | 'alumni' 
  | 'insights' 
  | 'datasets' 
  | 'startups' 
  | 'ai' 
  | 'join';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabID>('research');
  const [searchOpen, setSearchOpen] = useState(false);

  // Nav configuration
  const navItems: { id: TabID; label: string; icon: any }[] = [
    { id: 'about', label: 'About', icon: HelpCircle },
    { id: 'programs', label: 'Programs', icon: Compass },
    { id: 'research', label: 'Research Library', icon: Layers },
    { id: 'ecosystem', label: 'Strategic Cores', icon: Building },
    { id: 'people', label: 'People & Mentors', icon: Users },
    { id: 'alumni', label: 'Alumni Network', icon: GraduationCap },
    { id: 'insights', label: 'Research Stories', icon: BookOpen },
    { id: 'datasets', label: 'Open Datasets', icon: Database },
    { id: 'startups', label: 'Startup Hub', icon: Briefcase },
    { id: 'ai', label: 'Exploratory AI', icon: Brain },
    { id: 'join', label: 'Apply Commons', icon: UserPlus }
  ];

  const renderActiveView = () => {
    switch (activeTab) {
      case 'about': return <AboutView />;
      case 'programs': return <ProgramsView />;
      case 'research': return <ResearchView />;
      case 'ecosystem': return <EcosystemView />;
      case 'people': return <PeopleView />;
      case 'alumni': return <AlumniView />;
      case 'insights': return <InsightsView />;
      case 'datasets': return <DatasetsView />;
      case 'startups': return <StartupHubView />;
      case 'ai': return <AIHubView />;
      case 'join': return <JoinUsView />;
      default: return <ResearchView />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      {/* Editorial Top header */}
      <header className="border-b border-[#DADCE0] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between">
          
          {/* Logo Brand container with perfect spacing and divider */}
          <div className="flex items-center gap-6 shrink-0">
            <div 
              className="flex items-center gap-2.5 cursor-pointer select-none group" 
              onClick={() => setActiveTab('research')}
              id="brand-logo-container"
            >
              <ReLogo className="w-8 h-8 select-none scale-105 transform group-hover:rotate-6 transition-transform duration-500" />
              <span className="font-sans font-bold text-black text-[23px] tracking-tight leading-none">RÉ</span>
            </div>
            
            {/* Elegant spacing-divider separating the Brand from primary navigation tabs */}
            <div className="hidden lg:block w-px h-6 bg-[#DADCE0] shrink-0" />
          </div>

          {/* Quick Navigation Tabs - Spaced identically to Screenshot 1 & 4 */}
          <nav className="hidden lg:flex items-center flex-wrap gap-1.5 ml-1 z-10" id="editorial-main-navigation">
            {navItems.map((item) => (
              <button
                id={`ecosystem-nav-tab-${item.id}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-full text-[12.5px] font-medium font-sans tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                  activeTab === item.id 
                    ? 'border-[#DADCE0] bg-white text-[#202124] shadow-[0_2px_5px_rgba(0,0,0,0.03)] font-semibold' 
                    : 'border-transparent text-[#202124] hover:bg-[#F1F3F4]/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Search trigger & Join Shortcut buttons */}
          <div className="flex items-center gap-3">
            <button
              id="global-search-entry-btn"
              onClick={() => setSearchOpen(true)}
              className="px-5 py-2 border border-[#DADCE0] hover:border-neutral-400 bg-white hover:bg-[#F8F9FA] rounded-full text-xs font-semibold text-[#202124] flex items-center gap-2 transition-all cursor-pointer shadow-2xs"
            >
              <Search className="w-3.5 h-3.5 text-[#5F6368]" /> 
              <span>Search</span>
            </button>

            <button
              id="shortcut-apply-btn"
              onClick={() => setActiveTab('join')}
              className="px-6 py-2 bg-[#1a73e8] hover:bg-[#1557b0] border border-[#1a73e8] hover:border-[#1557b0] text-white text-[13px] font-semibold rounded-full cursor-pointer transition-all duration-200 flex items-center justify-center gap-1.5 shrink-0 shadow-[0_2px_6px_rgba(26,115,232,0.18)] hover:shadow-[0_4px_12px_rgba(26,115,232,0.28)] active:scale-[0.97]"
            >
              Join Cohort
            </button>
          </div>

        </div>

        {/* Double-rail responsive mobile tabs container */}
        <div className="border-t border-[#F1F3F4] bg-white overflow-x-auto select-none no-scrollbar lg:hidden">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex gap-1 min-w-max">
            {navItems.map((item) => (
              <button
                id={`ecosystem-mob-nav-tab-${item.id}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === item.id 
                    ? 'bg-[#e8f0fe] text-[#1967d2] border border-[#d2e3fc]' 
                    : 'text-[#5F6368] hover:bg-[#f1f3f4] hover:text-[#202124]'
                }`}
              >
                <item.icon className="w-3.5 h-3.5 shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Screen canvas */}
      <main className="flex-1 bg-white">
        {renderActiveView()}
      </main>

      {/* Beautiful institutional footer logs */}
      <footer className="border-t border-[#DADCE0] bg-[#F8F9FA] py-12 select-text">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo column info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 select-none">
              <ReLogo className="w-8 h-8 scale-105" />
              <div className="flex items-center gap-1 leading-none">
                <span className="font-sans font-black text-[#202124] text-sm">RÉ</span>
                <span className="font-sans font-medium text-[#5F6368] text-sm">Research</span>
              </div>
            </div>
            <p className="text-[#5F6368] text-xs leading-relaxed font-sans mt-2.5">
              Providing young scholars with structure, stipends, and specialized materials laboratories to convert pure curiosity into regional scientific translations.
            </p>
          </div>

          {/* Quick links shortcuts */}
          <div>
            <span className="text-[10px] uppercase font-mono text-[#202124] font-bold block mb-4">Core Affiliations</span>
            <ul className="space-y-2 text-xs text-[#5F6368]">
              <li><a href="https://www.kct.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Kumaraguru College of Technology</a></li>
              <li><a href="https://kclas.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Kumaraguru College of Liberal Arts &amp; Science</a></li>
              <li><a href="https://www.kct.ac.in/kentrepreneur/" target="_blank" rel="noopener noreferrer" className="hover:text-black">Kumaraguru Incubators</a></li>
              <li><a href="https://kumaraguru.in" target="_blank" rel="noopener noreferrer" className="hover:text-black">Kumaraguru Institutions, Coimbatore</a></li>
            </ul>
          </div>

          {/* Guidelines info */}
          <div>
            <span className="text-[10px] uppercase font-mono text-[#202124] font-bold block mb-4">Contact &amp; Location</span>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              Kumaraguru Institutions Campus,<br />
              Athipalayam Road, Chinnavedampatti,<br />
              Coimbatore, Tamil Nadu 641049,<br />
              India
            </p>
          </div>

          {/* System attributes parameters */}
          <div>
            <span className="text-[10px] uppercase font-mono text-[#202124] font-bold block mb-4">System Identity</span>
            <p className="text-xs text-[#5F6368] leading-relaxed">
              Registered Scopes: KREST Fellowship Schemes, KRIP Internships, NFRC Materials Fabrications research, Vatteluttu Vision OCR registries.
            </p>
          </div>

        </div>

        {/* Outer credit bar */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8 mt-8 border-t border-[#E8EAED] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#5F6368] font-mono select-none">
          <span>&copy; {new Date().getFullYear()} RÉ Centre for Exploratory Research. Coimbatore, Tamil Nadu.</span>
          <span>Designed with absolute minimalist craftsmanship</span>
        </div>
      </footer>

      {/* Global Vector search overlay modal */}
      <GlobalSearch 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onNavigate={(view, detailId) => {
          setActiveTab(view as TabID);
          setSearchOpen(false);
        }}
      />

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  scholarProfiles, 
  facultyProfiles, 
  researchProjects 
} from '../data/researchData';
import { 
  Search, 
  ArrowLeft, 
  Mail, 
  Award, 
  Globe, 
  GraduationCap, 
  ChevronRight, 
  CheckCircle,
  Lightbulb,
  Cpu,
  BookOpen
} from 'lucide-react';
import { ScholarProfile, FacultyProfile } from '../types';

interface PeopleViewProps {
  initialSearchSection?: 'scholars' | 'faculty' | null;
  initialSelectionId?: string | null;
}

export default function PeopleView({ initialSearchSection, initialSelectionId }: PeopleViewProps) {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'scholars' | 'faculty'>('scholars');
  const [selectedScholar, setSelectedScholar] = useState<ScholarProfile | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyProfile | null>(null);

  // Search & Filter state
  const [query, setQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  // Multi-route deep-linking resolver
  useEffect(() => {
    if (initialSearchSection) {
      setActiveTab(initialSearchSection);
      if (initialSelectionId) {
        if (initialSearchSection === 'scholars') {
          const sch = scholarProfiles.find(s => s.id === initialSelectionId);
          if (sch) setSelectedScholar(sch);
        } else {
          const fac = facultyProfiles.find(f => f.id === initialSelectionId);
          if (fac) setSelectedFaculty(fac);
        }
      }
    }
  }, [initialSearchSection, initialSelectionId]);

  const handleBackToPersonnel = () => {
    setSelectedScholar(null);
    setSelectedFaculty(null);
  };

  // Filter scholars
  const filteredScholars = scholarProfiles.filter(s => {
    const matchQuery = s.name.toLowerCase().includes(query.toLowerCase()) || 
                       s.interests.some(i => i.toLowerCase().includes(query.toLowerCase()));
    const matchRole = roleFilter === 'All' || s.role === roleFilter;
    return matchQuery && matchRole;
  });

  // Filter faculty
  const filteredFaculty = facultyProfiles.filter(f => {
    const matchQuery = f.name.toLowerCase().includes(query.toLowerCase()) ||
                       f.interests.some(i => i.toLowerCase().includes(query.toLowerCase()));
    const matchAvail = availabilityFilter === 'All' || f.availability === availabilityFilter;
    return matchQuery && matchAvail;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      
      {/* Core Page Editorial Header with Huge Spacing & Bold Typography */}
      {!selectedScholar && !selectedFaculty && (
        <div className="border-b border-[#DADCE0] pb-12 mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ INVESTIGATOR DIRECTORY</span>
          <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
            Fellows &amp; Mentors
          </h1>
          <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
            Meet the scholars, fellows, and subject specialists pushing boundaries across materials laboratories, digital archaeology systems, and local community development hubs.
          </p>
        </div>
      )}

      {/* ======================================= */}
      {/* SUB-VIEW 1: SCHOLAR EXPANDED PROFILE     */}
      {/* ======================================= */}
      {selectedScholar ? (
        <div id="scholar-profile-container" className="animate-fade-in">
          <button 
            id="back-to-people-from-scholar"
            onClick={handleBackToPersonnel}
            className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-neutral-900 mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO PERSONNEL HOOD
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Block - Avatar Card */}
            <div className="lg:col-span-4 border border-neutral-200 bg-white rounded-xl overflow-hidden p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-green-600 mb-4 bg-neutral-50">
                <img 
                  src={selectedScholar.avatar} 
                  alt={selectedScholar.name} 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="font-display font-extrabold text-[#202124] text-xl leading-tight">
                {selectedScholar.name}
              </h1>
              <p className="text-xs font-mono font-bold text-neutral-500 mt-1 uppercase">
                {selectedScholar.role} • {selectedScholar.year}
              </p>

              {/* Research Interests List */}
              <div className="mt-6 pt-6 border-t border-neutral-100 text-left">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block tracking-widest">Active Interests</span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedScholar.interests.map(i => (
                    <span key={i} className="px-2 py-0.5 bg-neutral-50 text-neutral-600 text-[10px] rounded border font-medium">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Block - Biography and Journey timeline */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-[9px] uppercase font-mono bg-green-50 text-green-800 px-2 py-1 rounded font-bold">SCHOLAR BIOGRAPHY</span>
                <h2 className="font-display font-bold text-2xl text-[#202124] mt-2.5">About {selectedScholar.name}</h2>
                <p className="text-neutral-600 text-sm leading-relaxed mt-3">
                  {selectedScholar.bio}
                </p>
              </div>

              {/* Scholar Research Journey Storytelling */}
              <div className="p-6 bg-green-50/20 border border-green-150 rounded-2xl">
                <h3 className="font-display font-bold text-[#202124] text-base flex items-center gap-1.5">
                  <Lightbulb className="w-5 h-5 text-green-600" /> The Exploratory Journey Narrative
                </h3>
                <p className="text-neutral-600 text-xs leading-relaxed mt-3">
                  {selectedScholar.journey}
                </p>
              </div>

              {/* Achievements Registry */}
              {selectedScholar.achievements && selectedScholar.achievements.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-[#202124] text-sm mb-3 flex items-center gap-1">
                    <Award className="w-4.5 h-4.5 text-amber-500" /> Achievements &amp; Laurels
                  </h3>
                  <div className="space-y-2">
                    {selectedScholar.achievements.map((ach, idx) => (
                      <div key={idx} className="bg-[#F8F9FA] border border-neutral-200 p-3 rounded-lg text-xs font-semibold text-neutral-800 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Index */}
              <div>
                <h3 className="font-display font-bold text-[#202124] text-sm mb-3 flex items-center gap-1">
                  <Cpu className="w-4.5 h-4.5 text-blue-500" /> Technical Skills &amp; Tools Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedScholar.skills.map((sk) => (
                    <span key={sk} className="px-2.5 py-1 bg-white text-xs text-neutral-700 border border-neutral-250 font-mono font-medium rounded-md">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : selectedFaculty ? (
        <div id="faculty-profile-container" className="animate-fade-in">
          <button 
            id="back-to-people-from-faculty"
            onClick={handleBackToPersonnel}
            className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-neutral-900 mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO PERSONNEL DIRECTORY
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Block - Avatar and Stats */}
            <div className="lg:col-span-4 border border-neutral-200 bg-white rounded-xl overflow-hidden p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-2 border-blue-600 mb-4 bg-neutral-50">
                <img 
                  src={selectedFaculty.avatar} 
                  alt={selectedFaculty.name} 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="font-display font-extrabold text-[#202124] text-xl leading-tight">
                {selectedFaculty.name}
              </h1>
              <p className="text-xs font-semibold text-[#5F6368] mt-1">
                {selectedFaculty.designation}
              </p>
              <p className="text-[10px] font-mono font-bold text-blue-600 mt-0.5 tracking-wider uppercase">
                {selectedFaculty.department}
              </p>

              {/* Research Metrics */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-neutral-100">
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <span className="text-[9px] font-mono uppercase text-neutral-400 block pb-1 border-b">H-Index</span>
                  <span className="font-display font-extrabold text-sm text-[#202124] mt-1 block">{selectedFaculty.hIndex}</span>
                </div>
                <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
                  <span className="text-[9px] font-mono uppercase text-neutral-400 block pb-1 border-b">Citations</span>
                  <span className="font-display font-extrabold text-sm text-[#202124] mt-1 block">{selectedFaculty.citations}</span>
                </div>
              </div>

              {/* Availability metrics */}
              <div className="mt-4 p-3 bg-blue-50 text-blue-700 text-xs font-medium font-mono rounded-lg border border-blue-100">
                Status: {selectedFaculty.availability}
              </div>

              {/* Email callout */}
              <a 
                href={`mailto:${selectedFaculty.email}`} 
                className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 bg-[#202124] hover:bg-black text-white text-xs font-mono font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" /> CONTACT MENTOR
              </a>
            </div>

            {/* Right Block - Bio and publications */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-[9px] uppercase font-mono bg-blue-50 text-blue-800 px-2 py-1 rounded font-bold">FACULTY FELLOW BIOGRAPHY</span>
                <h2 className="font-display font-bold text-2xl text-[#202124] mt-2.5">About {selectedFaculty.name}</h2>
                <p className="text-neutral-600 text-sm leading-relaxed mt-3">
                  {selectedFaculty.bio}
                </p>
              </div>

              {/* Active interests */}
              <div>
                <h3 className="font-display font-bold text-[#202124] text-sm mb-3">Key Investigatory Domains</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFaculty.interests.map(i => (
                    <span key={i} className="px-3 py-1 bg-[#F8F9FA] text-xs text-neutral-700 rounded-md border font-normal">
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publications Registry */}
              {selectedFaculty.publications && selectedFaculty.publications.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-[#202124] text-sm mb-3 flex items-center gap-1">
                    <BookOpen className="w-4.5 h-4.5 text-blue-500" /> Selected International Publications
                  </h3>
                  <div className="space-y-2">
                    {selectedFaculty.publications.map((p, idx) => (
                      <div key={idx} className="p-3 bg-white border border-neutral-200. rounded-lg text-xs text-[#5F6368] leading-relaxed font-sans">
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements details */}
              {selectedFaculty.achievements && selectedFaculty.achievements.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-[#202124] text-sm mb-3 flex items-center gap-1">
                    <Award className="w-4.5 h-4.5 text-amber-500" /> Faculty Laurels &amp; Recognition
                  </h3>
                  <div className="space-y-1.5 text-xs text-[#202124]">
                    {selectedFaculty.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-neutral-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0"></span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div id="people-browser" className="animate-fade-in">
          
          {/* Main selection tabs */}
          <div className="flex items-center gap-4 border-b border-neutral-100 pb-1 mb-8">
            <button
              id="personnel-selector-scholars"
              onClick={() => setActiveTab('scholars')}
              className={`pb-3 text-sm font-semibold tracking-tight relative transition-colors cursor-pointer ${
                activeTab === 'scholars' ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Scholars &amp; Fellows ({scholarProfiles.length})
              {activeTab === 'scholars' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 font-bold"></span>}
            </button>
            <button
              id="personnel-selector-faculty"
              onClick={() => setActiveTab('faculty')}
              className={`pb-3 text-sm font-semibold tracking-tight relative transition-colors cursor-pointer ${
                activeTab === 'faculty' ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-600'
              }`}
            >
              Faculty Mentors ({facultyProfiles.length})
              {activeTab === 'faculty' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 font-bold"></span>}
            </button>
          </div>

          <div className="space-y-6">
            
            {/* Filter Headers */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#F8F9FA] p-4 rounded-xl border border-[#DADCE0]">
              {/* Query box */}
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-neutral-400" />
                <input
                  type="text"
                  className="w-full bg-white text-xs text-[#202124] pl-9.5 pr-4 py-2 border border-[#DADCE0] rounded-lg focus:outline-none focus:border-neutral-900"
                  placeholder={activeTab === 'scholars' ? "Search scholars by name or skills..." : "Search faculty by name or interests..."}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              {/* Dynamic contextual categorization filter */}
              {activeTab === 'scholars' ? (
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-[10px] font-mono text-neutral-450 uppercase uppercase font-bold tracking-wider shrink-0">Filter:</span>
                  {['All', 'KREST Fellow', 'Research Assistant'].map((rf) => (
                    <button
                      id={`cohort-filter-btn-${rf.replace(/\s+/g, '-').toLowerCase()}`}
                      key={rf}
                      onClick={() => setRoleFilter(rf)}
                      className={`px-3 py-1 font-mono text-xs rounded-md transition-all cursor-pointer ${
                        roleFilter === rf 
                          ? 'bg-neutral-900 text-white' 
                          : 'bg-white text-neutral-500 border border-neutral-200 hover:text-black'
                      }`}
                    >
                      {rf}s
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  <span className="text-[10px] font-mono text-neutral-450 uppercase uppercase font-bold tracking-wider shrink-0">Availability:</span>
                  {['All', 'Accepting Scholars', 'Consultation Only'].map((af) => (
                    <button
                      id={`avail-filter-btn-${af.replace(/\s+/g, '-').toLowerCase()}`}
                      key={af}
                      onClick={() => setAvailabilityFilter(af)}
                      className={`px-3 py-1 font-mono text-xs rounded-md transition-all cursor-pointer ${
                        availabilityFilter === af 
                          ? 'bg-neutral-900 text-white' 
                          : 'bg-white text-neutral-500 border border-neutral-200 hover:text-black'
                      }`}
                    >
                      {af}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Display list arrays */}
            {activeTab === 'scholars' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScholars.map((s) => (
                  <div
                    id={`scholar-thumb-card-${s.id}`}
                    key={s.id}
                    onClick={() => setSelectedScholar(s)}
                    className="p-5 bg-white border border-[#DADCE0] hover:border-neutral-900 rounded-xl cursor-pointer transition-all hover:shadow-md group flex items-start gap-4 h-48 justify-between"
                  >
                    <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                      <div>
                        <span className="text-[9px] font-mono uppercase bg-green-50 text-green-700 px-1.5 py-0.5 rounded font-bold">
                          {s.role}
                        </span>
                        <h3 className="font-display font-bold text-base text-[#202124] group-hover:text-green-600 transition-colors mt-2 truncate">
                          {s.name}
                        </h3>
                        <p className="text-neutral-500 text-[11px] font-sans leading-relaxed line-clamp-2 mt-1">
                          {s.bio}
                        </p>
                      </div>

                      <div className="flex items-center gap-1 flex-wrap pt-2 border-t border-neutral-100">
                        {s.interests.slice(0, 2).map(i => (
                          <span key={i} className="text-[9px] font-mono bg-neutral-100 text-[#5F6368] px-1 py-0.2 rounded">
                            {i}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-250 bg-neutral-50 shrink-0">
                      <img 
                        src={s.avatar} 
                        alt={s.name} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.map((f) => (
                  <div
                    id={`faculty-thumb-card-${f.id}`}
                    key={f.id}
                    onClick={() => setSelectedFaculty(f)}
                    className="p-5 bg-white border border-[#DADCE0] hover:border-neutral-900 rounded-xl cursor-pointer transition-all hover:shadow-md group flex items-start gap-4 h-48 justify-between"
                  >
                    <div className="flex-1 flex flex-col justify-between h-full min-w-0">
                      <div>
                        <span className="text-[9px] font-mono uppercase bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">
                          Head / Fellow
                        </span>
                        <h3 className="font-display font-bold text-base text-[#202124] group-hover:text-blue-600 transition-colors mt-2 truncate">
                          {f.name}
                        </h3>
                        <span className="text-[10px] block text-neutral-450 font-mono font-medium truncate">{f.designation}</span>
                        <p className="text-neutral-500 text-[11px] leading-relaxed line-clamp-2 mt-1.5">
                          {f.bio}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-100">
                        <span>h-index: <strong className="text-black font-semibold">{f.hIndex}</strong></span>
                        <span className="text-blue-600 font-bold uppercase. flex items-center gap-0.5">Profile <ChevronRight className="w-3 h-3" /></span>
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-250 bg-neutral-50 shrink-0">
                      <img 
                        src={f.avatar} 
                        alt={f.name} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

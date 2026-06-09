import React, { useState, useEffect } from 'react';
import { Search, X, Projector as Project, Users, BookOpen, Database, Sparkles, Building } from 'lucide-react';
import { 
  researchProjects, 
  scholarProfiles, 
  facultyProfiles, 
  insightArticles, 
  researchDatasets, 
  startupPortfolio 
} from '../data/researchData';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, detailId?: string) => void;
}

export default function GlobalSearch({ isOpen, onClose, onNavigate }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'All' | 'Projects' | 'People' | 'Data' | 'Startups' | 'Insights'>('All');
  const [results, setResults] = useState<{
    id: string;
    title: string;
    subtitle: string;
    type: 'Project' | 'Scholar' | 'Faculty' | 'Dataset' | 'Startup' | 'Insight';
    view: string;
    badgeColor: string;
  }[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const tempResults: typeof results = [];

    // Search Projects
    if (activeTab === 'All' || activeTab === 'Projects') {
      researchProjects.forEach(p => {
        if (p.title.toLowerCase().includes(lowerQuery) || p.tagline.toLowerCase().includes(lowerQuery) || p.overview.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: p.id,
            title: p.title,
            subtitle: p.tagline,
            type: 'Project',
            view: 'research',
            badgeColor: 'bg-blue-100 text-blue-800'
          });
        }
      });
    }

    // Search Scholars
    if (activeTab === 'All' || activeTab === 'People') {
      scholarProfiles.forEach(s => {
        if (s.name.toLowerCase().includes(lowerQuery) || s.bio.toLowerCase().includes(lowerQuery) || s.role.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: s.id,
            title: s.name,
            subtitle: s.role + ' • ' + s.year,
            type: 'Scholar',
            view: 'scholars',
            badgeColor: 'bg-green-100 text-green-800'
          });
        }
      });
    }

    // Search Faculty
    if (activeTab === 'All' || activeTab === 'People') {
      facultyProfiles.forEach(f => {
        if (f.name.toLowerCase().includes(lowerQuery) || f.bio.toLowerCase().includes(lowerQuery) || f.department.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: f.id,
            title: f.name,
            subtitle: f.designation + ' • ' + f.department,
            type: 'Faculty',
            view: 'faculty',
            badgeColor: 'bg-red-100 text-red-800'
          });
        }
      });
    }

    // Search Datasets
    if (activeTab === 'All' || activeTab === 'Data') {
      researchDatasets.forEach(d => {
        if (d.title.toLowerCase().includes(lowerQuery) || d.description.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: d.id,
            title: d.title,
            subtitle: d.size + ' • Version ' + d.version,
            type: 'Dataset',
            view: 'datasets',
            badgeColor: 'bg-amber-100 text-amber-800'
          });
        }
      });
    }

    // Search Startups
    if (activeTab === 'All' || activeTab === 'Startups') {
      startupPortfolio.forEach(s => {
        if (s.name.toLowerCase().includes(lowerQuery) || s.tagline.toLowerCase().includes(lowerQuery) || s.description.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: s.id,
            title: s.name,
            subtitle: s.tagline,
            type: 'Startup',
            view: 'startups',
            badgeColor: 'bg-purple-100 text-purple-800'
          });
        }
      });
    }

    // Search Insights
    if (activeTab === 'All' || activeTab === 'Insights') {
      insightArticles.forEach(a => {
        if (a.title.toLowerCase().includes(lowerQuery) || a.summary.toLowerCase().includes(lowerQuery)) {
          tempResults.push({
            id: a.id,
            title: a.title,
            subtitle: a.category + ' • ' + a.date,
            type: 'Insight',
            view: 'insights',
            badgeColor: 'bg-slate-100 text-slate-800'
          });
        }
      });
    }

    setResults(tempResults);
  }, [query, activeTab]);

  if (!isOpen) return null;

  return (
    <div id="search-modal-backdrop" className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] bg-neutral-900/40 backdrop-blur-sm px-4">
      <div id="search-modal-container" className="bg-white w-full max-w-2xl rounded-xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-neutral-100">
          <Search className="w-5 h-5 text-neutral-400 mr-3" />
          <input
            type="text"
            className="w-full text-[#202124] placeholder-neutral-400 text-base focus:outline-none"
            placeholder="Search projects, scholars, faculty, datasets, insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button 
            id="close-search-btn"
            onClick={onClose}
            className="p-1 hover:bg-neutral-100 rounded-lg text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="flex px-4 py-2 bg-neutral-50/50 border-b border-neutral-100 overflow-x-auto gap-1">
          {['All', 'Projects', 'People', 'Data', 'Startups', 'Insights'].map((tab) => (
            <button
              id={`tab-search-${tab}`}
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-neutral-900 text-white' 
                  : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto p-4">
          {!query.trim() ? (
            <div className="text-center py-10">
              <Sparkles className="w-8 h-8 text-neutral-300 mx-auto mb-3" />
              <h4 className="text-neutral-900 font-medium text-sm">Explore RE Research Ecosystem</h4>
              <p className="text-neutral-400 text-xs mt-1 max-w-sm mx-auto">
                Try searching for index keywords like &quot;Tamil&quot;, &quot;Pineapple&quot;, &quot;KCT&quot;, or &quot;Stiffness&quot;.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              No results discovered matching your exploration query in this scope.
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((res) => (
                <div
                  id={`search-result-${res.id}`}
                  key={res.id}
                  onClick={() => {
                    onNavigate(res.view, res.id);
                    onClose();
                  }}
                  className="flex items-start p-3 rounded-lg hover:bg-neutral-50 border border-transparent hover:border-neutral-200 cursor-pointer transition-all duration-200 group"
                >
                  <div className="mr-3.5 mt-0.5 p-1.5 rounded bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200 transition-colors">
                    {res.type === 'Project' && <Project className="w-4 h-4" />}
                    {(res.type === 'Scholar' || res.type === 'Faculty') && <Users className="w-4 h-4" />}
                    {res.type === 'Dataset' && <Database className="w-4 h-4" />}
                    {res.type === 'Startup' && <Building className="w-4 h-4" />}
                    {res.type === 'Insight' && <BookOpen className="w-4 h-4" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-medium text-sm text-neutral-900 group-hover:text-amber-700 transition-colors truncate">
                        {res.title}
                      </span>
                      <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono font-medium ${res.badgeColor}`}>
                        {res.type}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-0.5 line-clamp-1">
                      {res.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { CAREER_OPPORTUNITIES } from '../data';
import { UserCheck, Search, HelpCircle, ArrowRight, ClipboardList, CheckCircle2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from '../components/PageHeader';

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeType, setActiveType] = useState<string>('all');
  const [applyCandidateId, setApplyCandidateId] = useState<string | null>(null);
  
  // Form submission state variables
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidateResume, setCandidateResume] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const filteredRoles = CAREER_OPPORTUNITIES.filter((role) => {
    const matchesSearch = 
      role.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = 
      activeType === 'all' || role.type === activeType;

    return matchesSearch && matchesType;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !candidateResume) return;
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplyCandidateId(null);
      setCandidateName('');
      setCandidateEmail('');
      setCandidateResume('');
    }, 5000);
  };

  return (
    <div className="w-full font-sans text-[#202124]">
      {/* 1:1 Google Research Replica Editorial Title Header */}
      <PageHeader 
        category="SCHOLARLY PURSUITS"
        title="Careers at RÉ"
        description="At RÉ, we believe pure curiosity deserves strategic structure. Search our open research roles, student explorer fellowships, and administrative listings."
        accentColor="green"
        gradientTheme="blue"
        images={[
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=500&auto=format&fit=crop"
        ]}
      />

      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">

      {/* Grid: Search and filter filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        
        {/* Left filter bar */}
        <div className="lg:col-span-3 bg-[#F8F9FA] rounded-xl border border-[#DADCE0] p-5 space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <ClipboardList className="h-4 w-4 text-[#5F6368]" />
            <span className="text-xs font-bold uppercase tracking-wider">Opportunity Clusters</span>
          </div>

          <div className="flex flex-col space-y-1">
            {['all', 'Assistantship', 'Internship', 'Faculty', 'Industry'].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
                  activeType === type 
                    ? 'bg-[#34A853]/5 text-[#34A853]' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {type === 'all' ? 'All Opportunities' : `${type} Roles`}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#DADCE0] text-xs text-[#5F6368] leading-relaxed">
            Select an opportunity to read eligibility requirements and submit an entry. Or find more out about application cycles in the FAQ.
          </div>
        </div>

        {/* Right side: Dynamic results rendering */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Main search bar */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search by role title, technical field, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#DADCE0] rounded-xl pl-11 pr-4 py-3.5 text-[15px] focus:outline-none focus:border-[#34A853] transition-colors shadow-sm"
            />
          </div>

          {/* Render list of roles */}
          <div className="space-y-6">
            {filteredRoles.length === 0 ? (
              <div className="p-16 text-center bg-[#F8F9FA] rounded-xl border border-[#DADCE0]">
                <p className="text-[#5F6368]">No roles match your search options.</p>
              </div>
            ) : (
              filteredRoles.map((role) => (
                <div
                  key={role.id}
                  className="bg-[#FFFFFF] border border-[#DADCE0] rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-xs transition-shadow"
                  id={`role-item-${role.id}`}
                >
                  
                  {/* Title & info box */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DADCE0]">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#34A853]/10 text-[#34A853] text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                          {role.type}
                        </span>
                        {role.stipendOrPackage && (
                          <span className="bg-gray-100 text-[#5F6368] text-[11px] font-semibold px-2.5 py-0.5 rounded">
                            {role.stipendOrPackage}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display text-[20px] md:text-[23px] font-bold text-[#202124]">
                        {role.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => setApplyCandidateId(role.id)}
                      className="inline-flex items-center space-x-1 px-4 py-2 border border-[#34A853] text-xs font-bold text-[#34A853] rounded-lg hover:bg-[#34A853]/5 select-none cursor-pointer"
                    >
                      <span>Draft Application</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Description of responsibilities */}
                  <p className="text-[15px] text-[#5F6368] leading-relaxed">
                    {role.description}
                  </p>

                  {/* Requirements checkboxes and steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-[14px]">
                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Candidate Eligibility Criteria</span>
                      <ul className="space-y-1.5 text-gray-700">
                        {role.requirements.map((req, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#34A853] mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Evaluation & Interview Process</span>
                      <ol className="space-y-1.5 text-gray-700 list-decimal pl-4">
                        {role.process.map((step, i) => (
                          <li key={i} className="leading-tight">
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Apply Drawer Form Expansion */}
                  {applyCandidateId === role.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-6 border-t border-[#DADCE0] bg-[#F8F9FA] p-6 rounded-xl border border-[#DADCE0] space-y-4"
                    >
                      <h3 className="font-display text-[18px] font-bold text-[#202124]">Candidate Application Dossier</h3>
                      <form onSubmit={handleApplySubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Vikramaditya S."
                              value={candidateName}
                              onChange={(e) => setCandidateName(e.target.value)}
                              className="w-full bg-white border border-[#DADCE0] rounded-lg px-3.5 py-2.5 text-sm outline-none"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">University Email ID</label>
                            <input
                              type="email"
                              required
                              placeholder="vikram@kct.ac.in"
                              value={candidateEmail}
                              onChange={(e) => setCandidateEmail(e.target.value)}
                              className="w-full bg-white border border-[#DADCE0] rounded-lg px-3.5 py-2.5 text-sm outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Academic Background & CV link</label>
                          <input
                            type="text"
                            required
                            placeholder="Provide link to your academic CV or Git workspace..."
                            value={candidateResume}
                            onChange={(e) => setCandidateResume(e.target.value)}
                            className="w-full bg-white border border-[#DADCE0] rounded-lg px-3.5 py-2.5 text-sm outline-none"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="submit"
                            className="bg-[#202124] hover:bg-black text-white px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                          >
                            <UserCheck className="h-4 w-4" />
                            <span>Validate & Submit App</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setApplyCandidateId(null)}
                            className="border border-[#DADCE0] hover:bg-gray-100 text-gray-600 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>

                      {appliedSuccess && (
                        <div className="p-3 bg-[#34A853]/10 border border-[#34A853]/30 text-xs font-medium text-green-800 rounded-lg">
                          Congratulations <strong>{candidateName}</strong>! Your application dossier is successfully registered and queued for committee review. An interview notification is sent to <strong>{candidateEmail}</strong>.
                        </div>
                      )}
                    </motion.div>
                  )}

                </div>
              ))
            )}
          </div>

        </div>

      </div>

    </div>
    </div>
  );
}

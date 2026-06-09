import React, { useState } from 'react';
import { 
  CheckCircle, 
  Upload, 
  FileText, 
  Bookmark, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Send,
  Loader2
} from 'lucide-react';

export default function JoinUsView() {
  const [selectedScheme, setSelectedScheme] = useState<'krest' | 'krip' | 'direct'>('krest');
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState('');
  const [dept, setDept] = useState('CSE');
  const [abstract, setAbstract] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Drag handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !abstract) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const schemes = [
    {
      id: 'krest',
      title: 'KREST Fellowship Scheme',
      payload: '₹12,000 / month stipend',
      requirements: 'GPA > 8.0 • 2nd & 3rd Year B.E. / B.Tech',
      desc: 'Our flagship multi-term exploratory research scholarship pairing candidates directly inside state-funded labs.',
      color: 'border-yellow-250 bg-yellow-50/10 text-yellow-800'
    },
    {
      id: 'krip',
      title: 'KRIP Seasonal Internships',
      payload: '₹8,000 / month stipend',
      requirements: 'Open to outside institutions • Summer/Winter Cohorts',
      desc: 'A fast-paced 6-week summer or winter residency working on specific rapid prototype deliverables.',
      color: 'border-blue-250 bg-blue-50/10 text-blue-800'
    },
    {
      id: 'direct',
      title: 'Direct Exploratory Proposal',
      payload: 'Consolidated project seed grants',
      requirements: 'Open for students & industry collaborators',
      desc: 'Submit a novel exploratory research abstract outside our pre-selected labs matrices for potential seed endowments.',
      color: 'border-purple-250 bg-purple-50/10 text-purple-800'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Editorial Header */}
      <div className="border-b border-[#DADCE0] pb-12 mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ INVESTIGATOR COMMONS</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
          Join the Ecosystem
        </h1>
        <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
          Embark on your journey inside India’s most modern grassroots research ecosystem. Select a structured fellowship, seasonal internship, or submit your custom exploratory thesis.
        </p>
      </div>

      {submitted ? (
        <div id="join-success-card" className="max-w-2xl mx-auto bg-green-50/30 border border-green-250 p-8 rounded-2xl text-center space-y-6 animate-fade-in">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
          <div>
            <h3 className="font-sans font-extrabold text-[#202124] text-xl">
              Application Lodged: {schemes.find(s => s.id === selectedScheme)?.title}
            </h3>
            <p className="text-neutral-600 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
              Your inquiry has been cataloged under unique candidate ID <code className="bg-white px-2 py-0.5 border rounded-md font-mono text-xs">RE-2026-{(Math.random() * 10000).toFixed(0)}</code>. The board will inspect your academic credentials, GPA transcripts, and abstract research idea for the <strong className="text-neutral-900">{schemes.find(s => s.id === selectedScheme)?.title}</strong> within 10 days.
            </p>
          </div>
          <button
            id="reset-form-btn"
            onClick={() => {
              setSubmitted(false);
              setFullName('');
              setEmail('');
              setGpa('');
              setAbstract('');
              setFileName(null);
            }}
            className="px-6 py-2 bg-[#202124] hover:bg-black text-white font-mono text-xs font-semibold rounded-lg cursor-pointer transition-all"
          >
            LODGE ANOTHER INQUIRY
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: Core Selection cards */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-mono uppercase text-[#5F6368] font-bold block mb-2">01. Select Scheme Pathway</span>
            {schemes.map((scm) => (
              <div
                id={`scheme-selector-${scm.id}`}
                key={scm.id}
                onClick={() => setSelectedScheme(scm.id as any)}
                className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                  selectedScheme === scm.id 
                    ? 'border-neutral-900 bg-[#F8F9FA] shadow-sm animate-pulse-once' 
                    : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-display font-bold text-sm text-[#202124]">{scm.title}</h4>
                    <span className="text-[9px] font-mono bg-neutral-100 border text-[#5F6368] px-2 py-0.5 rounded-md font-semibold">
                      {scm.payload.replace(' stipend', '')}
                    </span>
                  </div>
                  <p className="text-neutral-510 text-xs leading-normal mt-2.5 font-sans font-normal">{scm.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-neutral-200">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block">Requirements Matrix</span>
                  <span className="text-[10px] font-sans font-bold text-[#202124] mt-0.5 block">{scm.requirements}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Complete Form */}
          <form id="join-form-console" onSubmit={handleSubmit} className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
              <span className="text-[10px] font-mono uppercase text-[#5F6368] font-bold">
                02. Investigator Credentials Portal
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedScheme === 'krest' 
                  ? 'bg-[#E8F0FE] text-[#1A73E8] border border-[#1A73E8]/20' 
                  : selectedScheme === 'krip'
                  ? 'bg-[#E6F4EA] text-[#137333] border border-[#137333]/20'
                  : 'bg-[#F2E8FC] text-[#8631F2] border border-[#8631F2]/20'
              }`}>
                Active Setup: {schemes.find(s => s.id === selectedScheme)?.title.replace(' Fellowship Scheme', '').replace(' Seasonal Internships', '').toUpperCase()}
              </span>
            </div>

            {/* Dynamic Scheme Pathway Status Flag */}
            <div className={`p-4 rounded-xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 ${
              selectedScheme === 'krest' 
                ? 'bg-[#E8F0FE]/30 border-[#1A73E8]/20 text-[#1A73E8]' 
                : selectedScheme === 'krip'
                ? 'bg-[#E6F4EA]/30 border-[#137333]/20 text-[#137333]'
                : 'bg-[#F2E8FC]/30 border-[#8631F2]/20 text-[#8631F2]'
            }`}>
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono uppercase font-bold tracking-widest opacity-75 block">Strategic Pathway Streamed</span>
                <span className="font-sans font-extrabold text-sm text-[#202124] block">
                  {schemes.find(s => s.id === selectedScheme)?.title}
                </span>
                <p className="text-neutral-500 text-[11px] font-normal leading-relaxed max-w-lg">
                  {schemes.find(s => s.id === selectedScheme)?.desc}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end gap-0.5 font-mono text-[9px] bg-white/70 border border-[#DADCE0] p-2.5 rounded-lg">
                <span className="font-extrabold text-neutral-800">STIPEND: {schemes.find(s => s.id === selectedScheme)?.payload.replace(' stipend support', '').replace(' support', '')}</span>
                <span className="text-[#5F6368] text-[8px] uppercase">REQ: {schemes.find(s => s.id === selectedScheme)?.requirements.split(' • ')[0]}</span>
              </div>
            </div>

            {/* Double column inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Full Name *</label>
                <input
                  id="join-form-name"
                  type="text"
                  required
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors bg-white font-sans"
                  placeholder="e.g., Harish Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Institutional Email ID *</label>
                <input
                  id="join-form-email"
                  type="email"
                  required
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors bg-white font-sans"
                  placeholder="e.g., harish.22cse@kct.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Current Cumulative GPA</label>
                <input
                  id="join-form-gpa"
                  type="number"
                  step="0.01"
                  max="10"
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors bg-white font-sans"
                  placeholder="e.g., 8.64"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Academic Department</label>
                <select
                  id="join-form-dept"
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg bg-white"
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                >
                  <option value="CSE">Information Tech / CSE</option>
                  <option value="Mechanical">Mechanical Engineering</option>
                  <option value="Biomedical">Biomedical Science</option>
                  <option value="Textiles">Textiles &amp; Polymer Materials</option>
                </select>
              </div>
            </div>

            {/* Abstract */}
            <div>
              <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Research Abstract Idea * (Min 2 sentences)</label>
              <textarea
                id="join-form-abstract"
                required
                rows={4}
                className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors bg-white font-sans"
                placeholder="Briefly detail what physical phenomenon, material compound, or computational algorithm you want to investigate under our specialists..."
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
              />
            </div>

            {/* Drag & Drop simulated uploader */}
            <div>
              <label className="text-[10px] uppercase font-mono text-[#5F6368] font-bold block mb-1.5">Attach CV / Brief Proposal Briefing (PDF/Doc)</label>
              <div
                id="drag-uploader"
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer relative ${
                  dragActive ? 'border-neutral-800 bg-neutral-50' : 'border-neutral-250 hover:bg-neutral-50/50'
                }`}
              >
                <input
                  id="cv-file-input"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                <span className="text-xs font-semibold text-neutral-700 block">
                  {fileName ? `File Attached: ${fileName}` : 'Drag & Drop your resume or project schematic here'}
                </span>
                <span className="text-[10px] text-neutral-400 block mt-1">or Click to select file on desktop (Max size 10MB)</span>
              </div>
            </div>

            {/* Submit button with spinner simulator */}
            <button
               id="submit-proposal-btn"
               type="submit"
               disabled={isSubmitting}
               className="w-full py-3 bg-black hover:bg-neutral-900 disabled:bg-neutral-400 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  COMPILING APPLICATION PROFILES...
                </>
              ) : (
                <>
                  <Send className="w-4.5 h-4.5" />
                  SUBMIT FORMAL EXPLORATORY DIRECTIVE
                </>
              )}
            </button>

          </form>

        </div>
      )}

    </div>
  );
}

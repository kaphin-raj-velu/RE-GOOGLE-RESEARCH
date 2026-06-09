import React, { useState } from 'react';
import { 
  Brain, 
  Send, 
  Sparkles, 
  Compass, 
  Cpu, 
  Users, 
  ArrowRight, 
  HelpCircle, 
  Dna, 
  Terminal, 
  CheckCircle,
  Clock,
  HeartHandshake,
  Mail
} from 'lucide-react';
import { 
  researchProjects, 
  facultyProfiles, 
  researchDomains 
} from '../data/researchData';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export default function AIHubView() {
  const [activeSubTab, setActiveSubTab] = useState<'assistant' | 'pathfinder' | 'dna' | 'mentor'>('assistant');

  // ----------------------------------------
  // TAB 1: AI Assistant Conversational State
  // ----------------------------------------
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: 'Greetings. I am the RÉ Exploratory Intelligence. Ask me anything regarding KREST fellowships, KRIP internships, NFRC natural fibre fabrication, or Nithilam ancient Dravidian transcription rubbings.',
      timestamp: '12:40 PM'
    }
  ]);
  const [textInput, setTextInput] = useState('');

  // Local semantic index for beautiful conversational simulations
  const handleAssistantSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: textInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, userMsg]);
    const normalizedInput = textInput.toLowerCase();
    setTextInput('');

    // Simulated semantic generator matching topics
    setTimeout(() => {
      let reply = "That is a fascinating area of inquiry. While our computational nodes analyze further, you can explore our active 'Research Matrix' or submit a detailed project proposal in our 'Join Us' channel.";

      if (normalizedInput.includes('krest') || normalizedInput.includes('fellowship') || normalizedInput.includes('stipend')) {
        reply = "Our flagship fellowship, **KREST (Kumaraguru Research Fellowship Scheme)**, is designed specifically for second and third-year scholars with a GPA above 8.0. It provides a monthly stipend of **₹12,000 / month** alongside complete access to our advanced fabrication and computational facilities under dedicated faculty mentors.";
      } else if (normalizedInput.includes('pineapple') || normalizedInput.includes('fibre') || normalizedInput.includes('palf') || normalizedInput.includes('nfrc')) {
        reply = "The **Natural Fibre Research Centre (NFRC)** specializes in converting local agricultural discards like Pineapple Leaf Fibres (PALF) and coconut coir into high-tensile biopolymer composites. We recently registered a provisional patent for our siliconizing chemicals that lower standard water absorption ratings by 80%, suitable for EV automotive panels.";
      } else if (normalizedInput.includes('epigraphy') || normalizedInput.includes('tamil') || normalizedInput.includes('vatteluttu') || normalizedInput.includes('nithilam')) {
        reply = "Our core computational archology division, **Nithilam**, utilizes state-of-the-art **Vision Transformers (ViT)** to segment and transcribe degraded medieval temple rock inscriptions from Western Tamil Nadu. Our dataset has over 8,500 annotated characters with an 89.4% transliteration match index.";
      } else if (normalizedInput.includes('krip') || normalizedInput.includes('internship') || normalizedInput.includes('vacation')) {
        reply = "The **Kumaraguru Research Internship Program (KRIP)** is our seasonal intensive research internship running during summer (May-July) and winter (Dec-Jan). Selected candidates receive a monthly internship stipend of **₹8,000 / month** while working directly inside physical labs alongside active research assistants.";
      } else if (normalizedInput.includes('apply') || normalizedInput.includes('join') || normalizedInput.includes('contact')) {
        reply = "Applying to join RÉ is simple. Head over to our dedicated **'Join Us'** view. Select your preferred scheme (KREST Fellowship, KRIP Internship, or open opportunities), complete our single-screen proposal overview, and our research board will contact you within 10 days.";
      }

      const assistMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, assistMsg]);
    }, 600);
  };

  // ----------------------------------------
  // TAB 2: Pathfinder / Recommendation State
  // ----------------------------------------
  const [selectedDept, setSelectedDept] = useState<string>('CSE');
  const [selectedFocus, setSelectedFocus] = useState<string>('AI & Linguistics');
  const [matchedResource, setMatchedResource] = useState<{
    project: string;
    mentor: string;
    programName: string;
    description: string;
  } | null>(null);

  const handleRunPathfinder = () => {
    // Standard matches
    if (selectedDept === 'CSE' && selectedFocus === 'AI & Linguistics') {
      setMatchedResource({
        project: 'AI-Powered Tamil Epigraphy Translation',
        mentor: 'Dr. S. Ramakrishnan',
        programName: 'KREST Fellowship Scheme',
        description: 'Implement Vision-Language Models to index 8th-century stone declarations.'
      });
    } else if (selectedDept === 'Biomedical' || selectedDept === 'CSE' && selectedFocus === 'Wearables & Health') {
      setMatchedResource({
        project: 'BioKinetic: EMG Stroke Rehabilitation Exoskeleton',
        mentor: 'Dr. Preetha Chandran',
        programName: 'KRIP Seasonal / CORE Challenge',
        description: 'Incorporate RISC-V edge firmware filtering muscle signals for post-stroke grips rehabilitation.'
      });
    } else {
      setMatchedResource({
        project: 'Ananas-Tex PALF Automotive Insulating Fabrics',
        mentor: 'Prof. R. Baskaran',
        programName: 'NFRC Research Assistantship',
        description: 'Explore alkali chemical modifications on coconut polymer layers for structural automotive parts.'
      });
    }
  };

  // ----------------------------------------
  // TAB 4: Mentorship Matcher
  // ----------------------------------------
  const [selectedAdvisorId, setSelectedAdvisorId] = useState<string>(facultyProfiles[0].id);
  const activeAdvisor = facultyProfiles.find(f => f.id === selectedAdvisorId) || facultyProfiles[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Editorial Header */}
      <div className="border-b border-[#DADCE0] pb-12 mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ FLAGSHIP COGNITIVE PORTAL</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
          Exploratory AI Hub
        </h1>
        <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
          Interact with custom localized algorithms routing young investigators to fitting fellowships, projects, matches, and structured milestone tracking pipelines.
        </p>
      </div>

      {/* Selector Subtabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 border-b border-[#DADCE0] pb-8">
        {[
          { id: 'assistant', label: 'Research AI Assistant', desc: 'Siri-like custom guides', icon: Brain },
          { id: 'pathfinder', label: 'Direct Pathfinder', desc: 'Select department matches', icon: Compass },
          { id: 'dna', label: 'Ecosystem DNA Tracker', desc: 'Milestone checkpoints', icon: Dna },
          { id: 'mentor', label: 'Mentorship Matcher', desc: 'Faculty mentor profiles', icon: Users }
        ].map((sub) => (
          <button
            id={`ai-sub-tab-${sub.id}`}
            key={sub.id}
            onClick={() => setActiveSubTab(sub.id as any)}
            className={`p-4 rounded-[1.25rem] border text-left transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
              activeSubTab === sub.id 
                ? 'bg-neutral-900 border-neutral-950 text-white shadow-md' 
                : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold font-sans text-sm">
              <sub.icon className="w-4 h-4 shrink-0" /> {sub.label}
            </div>
            <span className="text-[10px] block opacity-75 mt-1 font-mono">{sub.desc}</span>
          </button>
        ))}
      </div>

      {/* Subtab Content blocks */}
      <div className="bg-neutral-50 rounded-2xl border border-neutral-200 overflow-hidden min-h-[420px] p-6 flex flex-col justify-between">
        
        {/* SUBTAB 1: AI Chat Assistant */}
        {activeSubTab === 'assistant' && (
          <div id="ai-chat-interface" className="flex flex-col justify-between h-[450px] animate-fade-in w-full max-w-3xl mx-auto">
            {/* Messages box list */}
            <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-white rounded-xl border border-neutral-150 mb-4">
              {chatMessages.map((msg) => (
                <div 
                  id={`chat-msg-${msg.id}`}
                  key={msg.id} 
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest">{msg.sender} • {msg.timestamp}</span>
                  <div className={`p-3 rounded-xl text-xs leading-relaxed max-w-md mt-1 border ${
                    msg.sender === 'user' 
                      ? 'bg-neutral-900 text-white border-neutral-950 font-medium' 
                      : 'bg-[#F8F9FA] text-neutral-800 border-neutral-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleAssistantSend} className="flex gap-2 bg-white p-2 rounded-xl border border-neutral-200">
              <input
                id="ai-assistant-input"
                type="text"
                className="flex-1 text-[#202124] text-xs px-3 focus:outline-none"
                placeholder="Ask e.g. 'What is the KREST stipend?' or 'Tell me about pineapple composites'..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
              <button 
                id="ai-assistant-send-btn"
                type="submit" 
                className="p-2.5 bg-black hover:bg-neutral-800 text-white rounded-lg transition-colors cursor-pointer"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </div>
        )}

        {/* SUBTAB 2: Pathfinder matcher */}
        {activeSubTab === 'pathfinder' && (
          <div id="ai-pathfinder" className="animate-fade-in max-w-2xl mx-auto w-full py-4 space-y-6">
            <div className="text-center">
              <Compass className="w-8 h-8 text-blue-600 mx-auto" />
              <h3 className="font-display font-bold text-[#202124] text-lg mt-2">Kumaraguru Research Pathfinder</h3>
              <p className="text-[#5F6368] text-xs mt-1">Select your Department credentials and Curiosity focus below to map direct paths.</p>
            </div>

            {/* Dropdown selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-5 rounded-xl border border-neutral-200">
              <div>
                <label className="text-[10px] font-mono uppercase text-[#5F6368] font-bold block mb-1.5">Department Specialty</label>
                <select 
                  id="pathfinder-dept-select"
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg bg-white"
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                >
                  <option value="CSE">Computer Science &amp; IT</option>
                  <option value="Mechanical">Mechanical &amp; Automobile</option>
                  <option value="Biomedical">Biomedical Engineering</option>
                  <option value="Textiles">Textiles &amp; Materials Science</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-[#5F6368] font-bold block mb-1.5">Area of Scientific Curiosity</label>
                <select 
                  id="pathfinder-focus-select"
                  className="w-full text-xs text-neutral-800 border border-neutral-250 p-2.5 rounded-lg bg-white"
                  value={selectedFocus}
                  onChange={(e) => setSelectedFocus(e.target.value)}
                >
                  <option value="AI & Linguistics">Dravidian NLP / Epigraphy OCR</option>
                  <option value="Organic Composites">Sustainable Cellulose Biopolymers</option>
                  <option value="Wearables & Health">Kinetic MedTech Biosensors</option>
                </select>
              </div>

              <button
                id="run-pathfinder-btn"
                onClick={handleRunPathfinder}
                className="col-span-1 sm:col-span-2 mt-2 py-2.5 bg-[#202124] hover:bg-black text-white text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors"
              >
                RUN MATCHING VECTOR CORES
              </button>
            </div>

            {/* Match output card */}
            {matchedResource && (
              <div id="pathfinder-result-box" className="p-5 bg-blue-50/40 border border-blue-105 rounded-xl animate-fade-in block space-y-3">
                <span className="text-[9px] font-mono uppercase text-blue-800 font-bold tracking-widest block">MATCH SECURED</span>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#202124]">{matchedResource.project}</h4>
                  <p className="text-neutral-500 text-xs mt-1 leading-snug">{matchedResource.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-blue-100 pt-3 text-xs leading-none">
                  <div>
                    <span className="text-[9px] font-mono text-[#5F6368] block">Mentor Match</span>
                    <strong className="text-neutral-[#202124] mt-1 block font-semibold">{matchedResource.mentor}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-[#5F6368] block">Fellowship Scheme</span>
                    <strong className="text-neutral-[#202124] mt-1 block font-semibold">{matchedResource.programName}</strong>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SUBTAB 3: DNA Milestones tracker */}
        {activeSubTab === 'dna' && (
          <div id="ai-dna-tracker" className="animate-fade-in max-w-3xl mx-auto w-full py-4 space-y-6">
            <div className="text-center">
              <Dna className="w-8 h-8 text-purple-600 mx-auto" />
              <h3 className="font-display font-bold text-[#202124] text-lg mt-2">RE Researcher DNA Trajectory</h3>
              <p className="text-[#5F6368] text-xs mt-1">The structured computational roadmap guiding student achievements inside RE.</p>
            </div>

            {/* Steps hierarchy */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {[
                { step: '01', title: 'Conceptualise', list: ['Field-Tours', 'Hypothesis Design', 'Literature Scoping'] },
                { step: '02', title: 'Incubate', list: ['KREST Stipend Allocations', 'HPC / Chemical Labs', 'Model Tuning'] },
                { step: '03', title: 'Publish', list: ['Scopus manuscript submissions', 'Preprints Archive', 'Peer Validation'] },
                { step: '04', title: 'Spin-off', list: ['Provisional Patent filing', 'Seed Incubators', 'Venture Launch'] }
              ].map((s) => (
                <div key={s.step} className="p-4 bg-white border border-neutral-200 rounded-xl">
                  <span className="font-mono text-xs text-purple-600 font-bold block">DNA PHASE {s.step}</span>
                  <h4 className="font-display font-bold text-neutral-900 text-sm mt-1">{s.title}</h4>
                  
                  <ul className="space-y-1 mt-3">
                    {s.list.map((li, i) => (
                      <li key={i} className="text-[10px] text-neutral-510 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-purple-500 shrink-0" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 4: Mentorship Matcher details */}
        {activeSubTab === 'mentor' && (
          <div id="ai-mentor-section" className="animate-fade-in max-w-3xl mx-auto w-full py-4 space-y-6">
            <div className="text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto" />
              <h3 className="font-display font-bold text-neutral-900 text-lg mt-2 font-display">Faculty Mentorship Allocator</h3>
              <p className="text-neutral-500 text-xs mt-1">Match directly with seasoned Kumaraguru Investigators currently accepting fellows.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Mentors Selector list */}
              <div className="md:col-span-4 space-y-2 border-r pr-0 md:pr-4 border-neutral-200">
                <span className="text-[10px] font-mono text-[#5F6368] uppercase block mb-2">Available Investigators</span>
                {facultyProfiles.map((m) => (
                  <button
                    id={`mentor-advisor-btn-${m.id}`}
                    key={m.id}
                    onClick={() => setSelectedAdvisorId(m.id)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold leading-tight transition-all cursor-pointer ${
                      selectedAdvisorId === m.id 
                        ? 'bg-neutral-900 text-white' 
                        : 'bg-white hover:bg-neutral-100 text-neutral-800 border'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>

              {/* Active Mentor Profile details */}
              <div className="md:col-span-8 bg-white border rounded-xl p-5 block space-y-4">
                <div className="flex gap-3 pb-3 border-b border-neutral-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden border bg-neutral-100 shrink-0">
                    <img 
                      src={activeAdvisor.avatar} 
                      alt={activeAdvisor.name} 
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-neutral-900 text-sm leading-tight">{activeAdvisor.name}</h4>
                    <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider block mt-0.5">{activeAdvisor.department}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">Accepting Status</span>
                  <span className="text-xs text-green-700 font-semibold mt-1 block flex items-center gap-1">
                    <Clock className="w-4 h-4 text-green-500" /> {activeAdvisor.availability}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#5F6368] block">Current Focus interest</span>
                  <p className="text-neutral-510 text-xs leading-relaxed mt-1">{activeAdvisor.bio}</p>
                </div>

                <a 
                  href={`mailto:${activeAdvisor.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-bold rounded-lg hover:bg-black transition-colors"
                >
                  <Mail className="w-4 h-4" /> SECURE CONSULTATION MEETING
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

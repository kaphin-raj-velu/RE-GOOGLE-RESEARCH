import React, { useState, useMemo } from 'react';
import { 
  Users, MapPin, Search, Filter, Briefcase, Globe, Award, Shield, CheckCircle2, 
  HelpCircle, UserPlus, Heart, ExternalLink, RefreshCw, Mail, Calendar, Sparkles, Plus, X, GraduationCap, Code
} from 'lucide-react';

// Interface matching components
interface HubConnection {
  from: string;
  to: string;
  type: 'mentorship' | 'networking' | 'referral' | 'collaboration';
}

interface Alumnus {
  id: string;
  name: string;
  batch: string;
  program: string; // "KREST" Fellowship, "KRIP" Internship, etc.
  department: string;
  currentCompany: string;
  currentRole: string;
  location: string;
  country: string;
  industry: string;
  skills: string[];
  coordinates: { x: number; y: number }; // Percentage coordinate on map container
  avatar: string;
  testimonial: string;
  contribution: string;
  story: string;
  isMentor: boolean;
  canRefer: boolean;
  isFounder: boolean;
  email: string;
}

// Global active connections plotted as curves
const INITIAL_CONNECTIONS: HubConnection[] = [
  { from: 'swathi-k', to: 'naveen-k', type: 'mentorship' },
  { from: 'swathi-k', to: 'reka-s', type: 'collaboration' },
  { from: 'david-m', to: 'lena-m', type: 'networking' },
  { from: 'naveen-k', to: 'vignesh-b', type: 'collaboration' },
  { from: 'reka-s', to: 'yuki-t', type: 'collaboration' },
  { from: 'samantha-j', to: 'swathi-k', type: 'networking' },
  { from: 'karthik-r', to: 'naveen-k', type: 'referral' },
  { from: 'preethi-r', to: 'vignesh-b', type: 'referral' },
  { from: 'david-m', to: 'michael-a', type: 'networking' },
  { from: 'reka-s', to: 'vignesh-b', type: 'collaboration' },
  { from: 'samantha-j', to: 'david-m', type: 'collaboration' }
];

export default function AlumniView() {
  // Enriched Alumni database
  const [alumni, setAlumni] = useState<Alumnus[]>([
    {
      id: 'swathi-k',
      name: 'Dr. Swathi Krishnan',
      batch: '2012',
      program: 'KREST Fellow',
      department: 'Computer Science Engineering',
      currentCompany: 'Google AI Lab',
      currentRole: 'Staff Research Scientist',
      location: 'San Francisco, California',
      country: 'USA',
      industry: 'Artificial Intelligence',
      skills: ['Deep Learning', 'Neural Architectures', 'LLMs', 'PyTorch'],
      coordinates: { x: 15, y: 32 },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
      testimonial: 'The intellectual freedom at RÉ allowed me to experiment with multi-agent systems years before they became mainstream. It is the birthplace of my research career.',
      contribution: 'Directly funds the KREST Female-in-AI annual stipend & mentors 3 graduate students.',
      story: 'Swathi arrived at KCT with a passion for robotics. Guided by her faculty mentor, she published 2 IEEE papers inside the RÉ labs before pursuing her PhD from Stanford. Today, she shapes Google\'s core large language models while staying deeply involved with the Coimbatore innovation ecosystem.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'swathi.k@kct-alumni.net'
    },
    {
      id: 'naveen-k',
      name: 'Naveen Kumar',
      batch: '2016',
      program: 'KRIP Intern',
      department: 'Information Technology',
      currentCompany: 'Grab Solutions',
      currentRole: 'Principal Machine Learning Architect',
      location: 'Bengaluru, Karnataka',
      country: 'India',
      industry: 'Software Engineering',
      skills: ['Computer Vision', 'Edge Computing', 'TensorFlow', 'Real-Time Inference'],
      coordinates: { x: 68, y: 55 },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
      testimonial: 'My thesis on real-time embedded traffic modeling in Coimbatore was supported entirely by RÉ resources. That research opened the path to global transport optimization.',
      contribution: 'Provides interview preparation bootcamps for final-year candidates in Coimbatore.',
      story: 'Naveen developed a low-cost computer vision module to detect regional vehicle congestion patterns at RÉ. His study caught the attention of corporate leaders, paving his entry into major logistics tech. He now coordinates referral pools for current KCT scholars.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'naveen.k@kct-alumni.net'
    },
    {
      id: 'lena-m',
      name: 'Dr. Lena Mueller',
      batch: '2014',
      program: 'Research Assistant',
      department: 'Electronics & Instrumentation',
      currentCompany: 'Siemens Healthineers',
      currentRole: 'Senior MedTech Specialist',
      location: 'Munich, Bavaria',
      country: 'Germany',
      industry: 'Healthcare Technology',
      skills: ['Haptic Feedback Systems', 'Bio-Sensors', 'Embedded Firmware', 'C++'],
      coordinates: { x: 50, y: 28 },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
      testimonial: 'In Munich, researchers value hands-on sensory expertise. The time I spent at RÉ soldering customized biometric cuffs gave me a world-class physical foundation.',
      contribution: 'Sponsors direct internship positions for KCT instrumentation scholars in Germany.',
      story: 'Lena joined KCT interested in healthcare hardware. In the cooperative labs, she fabricated surface electromyographical pads to control soft robotic wrist extensions. Her focus in physical biosignals secured her research residency in Munich.',
      isMentor: true,
      canRefer: false,
      isFounder: false,
      email: 'lena.m@kct-alumni.net'
    },
    {
      id: 'vignesh-b',
      name: 'Vignesh Balaji',
      batch: '2018',
      program: 'KREST Fellow',
      department: 'Biotechnology',
      currentCompany: 'AgroSphere Solutions',
      currentRole: 'Technical Co-founder',
      location: 'Coimbatore, Tamil Nadu',
      country: 'India',
      industry: 'Biotechnology',
      skills: ['Bio-Composites', 'Biomaterial Synthesis', 'Circular Economy', 'AgriTech'],
      coordinates: { x: 67, y: 60 },
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
      testimonial: 'AgroSphere was born in KCT\'s Natural Fibre Lab. We didn’t just write research papers; we took natural composites and scaled them to replace polymer packaging.',
      contribution: 'Incubates active college research teams inside his local startup headquarters.',
      story: 'Vignesh spent his fellowship testing pineapple-leaf cellular strands. Seeing the high tensile strength, he engineered organic composite corner guards to protect local motor components in transit. He graduated KCT to seed-fund his own industrial bio-packaging company.',
      isMentor: false,
      canRefer: true,
      isFounder: true,
      email: 'vignesh.b@kct-alumni.net'
    },
    {
      id: 'reka-s',
      name: 'Reka Subramanian',
      batch: '2015',
      program: 'KREST Fellow',
      department: 'Electronics & Communication',
      currentCompany: 'ByteDance Group',
      currentRole: 'Senior Machine Learning Architect',
      location: 'Singapore',
      country: 'Singapore',
      industry: 'Software Engineering',
      skills: ['Computer Vision', 'Classical Script OCR', 'Model Compression', 'C++'],
      coordinates: { x: 76, y: 58 },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      testimonial: 'Decoding 10th-century stone inscriptions using machine learning at KCT taught me how to handle extremely noisy real-world data feeds.',
      contribution: 'Connects the Singapore KCT alumni node to fund technology summits in Asia.',
      story: 'Reka worked closely with the Nithilam Digital Archaeology center to preserve ancient Tamil epigraphy using advanced neural boundary models. Her breakthroughs in compressed edge-models landed her direct recruiting interests from Southeast Asia\'s major consumer conglomerates.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'reka.s@kct-alumni.net'
    },
    {
      id: 'david-m',
      name: 'David Miller',
      batch: '2010',
      program: 'Research Assistant',
      department: 'Computer Science Engineering',
      currentCompany: 'Barclays Capital',
      currentRole: 'VP of FinTech Systems',
      location: 'London, Greater London',
      country: 'UK',
      industry: 'Financial Technology',
      skills: ['Distributed Ledger', 'High-Frequency Systems', 'System Scale', 'Golang'],
      coordinates: { x: 44, y: 24 },
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250',
      testimonial: 'Managing network latency in our academic server stacks back in 2009 was my first exposure to high-frequency engineering. RÉ laid the brickwork.',
      contribution: 'Generously sponsors the annual KCT Deep-Tech Hackathon and student cash awards.',
      story: 'David was among the inaugural batch of researchers at KCT. He led server configurations and designed high-throughput distributed database buffers. He is now based in London, where he monitors the college\'s European alumni relations.',
      isMentor: false,
      canRefer: true,
      isFounder: false,
      email: 'david.m@kct-alumni.net'
    },
    {
      id: 'samantha-j',
      name: 'Samantha Jones',
      batch: '2011',
      program: 'KRIP Intern',
      department: 'Mechanical Engineering',
      currentCompany: 'Tesla Motors',
      currentRole: 'Director, Power Systems Integration',
      location: 'New York, New York',
      country: 'USA',
      industry: 'Robotics',
      skills: ['Micro-Grids', 'Battery Kinematics', 'Thermal Simulation', 'Finite Element Analysis'],
      coordinates: { x: 21, y: 35 },
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=250',
      testimonial: 'The testing rigs we constructed at Kumaraguru taught me how to operate devices under extreme environmental stress. Practical engineering is our greatest strength.',
      contribution: 'Supplies remote modeling licenses and software keys directly to KCT engineering labs.',
      story: 'Samantha was part of KCT\'s solar car project, validating heat sinks for photovoltaic inputs in Coimbatore\'s intense summer weather. Her structural research earned her mechanical fellowships in the US. She now directs power systems validation at Tesla.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'samantha.j@kct-alumni.net'
    },
    {
      id: 'preethi-r',
      name: 'Preethi Ramkumar',
      batch: '2017',
      program: 'KREST Fellow',
      department: 'Textile Technology',
      currentCompany: 'McKinsey & Co',
      currentRole: 'Principal Sourcing Expert',
      location: 'Sydney, New South Wales',
      country: 'Australia',
      industry: 'Management Consulting',
      skills: ['ESG Compliance', 'Supply Chain Circularity', 'Sustainability Metrics', 'Material Audits'],
      coordinates: { x: 88, y: 80 },
      avatar: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=250',
      testimonial: 'Understanding the chemical loop audit of regional dye clusters at KCT gave me concrete environmental analytics that McKinsey partners trust globally.',
      contribution: 'Conducts resume reviews and offers mentorship on management consulting entries.',
      story: 'Preethi designed zero-waste water recycling guidelines for cotton-spinning hubs during her RÉ tenure. Her specialized insights on circular supply operations led to consulting offers from Australia, where she directs ESG compliance portfolios.',
      isMentor: true,
      canRefer: false,
      isFounder: false,
      email: 'preethi.r@kct-alumni.net'
    },
    {
      id: 'karthik-r',
      name: 'Karthik Raja',
      batch: '2019',
      program: 'KRIP Intern',
      department: 'Electronics & Communication',
      currentCompany: 'NVIDIA Corporation',
      currentRole: 'Technical Hardware Engineer',
      location: 'Chennai, Tamil Nadu',
      country: 'India',
      industry: 'Semiconductors & Hardware',
      skills: ['VLSI Design', 'CUDA Programming', 'System-on-Chip (SoC)', 'GPU Kernels'],
      coordinates: { x: 70, y: 56 },
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=250',
      testimonial: 'By compiling GPU accelerator kernels during college projects, I already understood NVIDIA architectures inside-out before graduation.',
      contribution: 'Coordinates recruitment cycles and hardware donation pipelines for KCT fellows.',
      story: 'Karthik designed parallelized graphics computation chips in high-speed hardware during his final-year research internship. His solid foundation in custom electronic systems enabled him to join NVIDIA\'s core hardware optimization teams.',
      isMentor: false,
      canRefer: true,
      isFounder: false,
      email: 'karthik.r@kct-alumni.net'
    },
    {
      id: 'michael-a',
      name: 'Michael Abebe',
      batch: '2013',
      program: 'Research Assistant',
      department: 'Computer Science Engineering',
      currentCompany: 'Standard Bank Group',
      currentRole: 'Principal Solutions Architect',
      location: 'Johannesburg, Gauteng',
      country: 'South Africa',
      industry: 'Enterprise Systems',
      skills: ['Scalable Systems', 'Cloud Security', 'Amazon Web Services', 'High-Throughput APIs'],
      coordinates: { x: 53, y: 72 },
      avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=250',
      testimonial: 'The system latency testing RÉ allowed me to run on local academic servers formed my lifelong respect for clean server structures.',
      contribution: 'Provides advisory guides on AWS compliance schemas to student computer engineers.',
      story: 'Michael was an international scholar at KCT. He developed local grid control nodes that computed dynamic load scheduling. Upon graduating, he relocated to South Africa, scaling core banking infrastructures that bridge standard consumer ledger groups.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'michael.a@kct-alumni.net'
    },
    {
      id: 'yuki-t',
      name: 'Yuki Tanaka',
      batch: '2016',
      program: 'KREST Fellow',
      department: 'Mechatronics Engineering',
      currentCompany: 'Fanuc Robotics',
      currentRole: 'Lead Cybernetics Expert',
      location: 'Tokyo, Kanto',
      country: 'Japan',
      industry: 'Robotics',
      skills: ['Inverse Kinematics', 'Robot Operating System (ROS)', 'Computer Vision', 'PLC Control'],
      coordinates: { x: 84, y: 38 },
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=250',
      testimonial: 'Building tactile grip hands under the guidance of KCT Mechatronics faculty gave me a huge visual advantage in Japan\'s advanced factory automation hubs.',
      contribution: 'Evaluates the college\'s robotic laboratory upgrades and acts as an expert panelist.',
      story: 'Yuki designed dual-axis mechanical actuators with sensory grip loops inside the collaborative labs. Her team secured the gold at a national robotic championship, giving her a direct path to Japan\'s elite automation leaders.',
      isMentor: true,
      canRefer: true,
      isFounder: false,
      email: 'yuki.t@kct-alumni.net'
    }
  ]);

  // Connection data state
  const [connections, setConnections] = useState<HubConnection[]>(INITIAL_CONNECTIONS);

  // Filter conditions
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  // Spotlight Alumnus State
  const [selectedAlumnusId, setSelectedAlumnusId] = useState<string>('swathi-k');
  const [hoveredAlumnusId, setHoveredAlumnusId] = useState<string | null>(null);

  // Story submission state
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [newAlumnus, setNewAlumnus] = useState({
    name: '',
    batch: '2022',
    program: 'KREST Fellow',
    department: 'Computer Science Engineering',
    currentCompany: '',
    currentRole: '',
    location: '',
    country: 'India',
    industry: 'Software Engineering',
    skills: '',
    story: '',
    testimonial: '',
    contribution: '',
    isMentor: true,
    canRefer: true,
    isFounder: false,
    email: '',
    mapRegion: 'India'
  });

  const activeSpotlight = useMemo(() => {
    return alumni.find(al => al.id === selectedAlumnusId) || alumni[0];
  }, [alumni, selectedAlumnusId]);

  // Derive Dynamic Dashboard Statistics
  const stats = useMemo(() => {
    const totalRepresented = alumni.length;
    const mentorsCount = alumni.filter(al => al.isMentor).length;
    const foundersCount = alumni.filter(al => al.isFounder).length;
    const countries = new Set(alumni.map(al => al.country)).size;
    const referrersCount = alumni.filter(al => al.canRefer).length;

    // Simulated total scale for KCT Alumnus Office logs to look SaaS-grade
    return {
      totalAlumni: 14820 + totalRepresented,
      activeMentors: 2450 + mentorsCount,
      countriesRepresented: 24 + countries,
      jobReferrals: 1840 + referrersCount,
      startupFounders: 340 + foundersCount
    };
  }, [alumni]);

  // Extract unique values for filter dropdowns
  const filterOptions = useMemo(() => {
    const batches = Array.from(new Set(alumni.map(al => al.batch))).sort().reverse();
    const depts = Array.from(new Set(alumni.map(al => al.department))).sort();
    const companies = Array.from(new Set(alumni.map(al => al.currentCompany))).sort();
    const countries = Array.from(new Set(alumni.map(al => al.country))).sort();
    const industries = Array.from(new Set(alumni.map(al => al.industry))).sort();
    
    const allSkillsSet = new Set<string>();
    alumni.forEach(al => al.skills.forEach(skill => allSkillsSet.add(skill)));
    const skills = Array.from(allSkillsSet).sort();

    return { batches, depts, companies, countries, industries, skills };
  }, [alumni]);

  // Map Filtered dataset
  const filteredAlumni = useMemo(() => {
    return alumni.filter(al => {
      const matchSearch = 
        al.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        al.currentCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
        al.currentRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
        al.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        al.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
        al.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchBatch = selectedBatch === 'All' || al.batch === selectedBatch;
      const matchDept = selectedDept === 'All' || al.department === selectedDept;
      const matchCompany = selectedCompany === 'All' || al.currentCompany === selectedCompany;
      const matchCountry = selectedCountry === 'All' || al.country === selectedCountry;
      const matchIndustry = selectedIndustry === 'All' || al.industry === selectedIndustry;
      const matchSkill = selectedSkill === 'All' || al.skills.includes(selectedSkill);

      return matchSearch && matchBatch && matchDept && matchCompany && matchCountry && matchIndustry && matchSkill;
    });
  }, [alumni, searchQuery, selectedBatch, selectedDept, selectedCompany, selectedCountry, selectedIndustry, selectedSkill]);

  // Bezier curve calculations for map connection paths
  const getBezierCurvePath = (x1: number, y1: number, x2: number, y2: number) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    // Curved offset upwards - standard mathematical displacement
    const cx = mx;
    const cy = my - Math.abs(x2 - x1) * 0.12 - 4;
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  };

  // Safe submission handler
  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlumnus.name || !newAlumnus.currentCompany || !newAlumnus.currentRole || !newAlumnus.email) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    // Determine custom coordinates based on entered location to place neatly on world Map
    let coords = { x: 45, y: 50 }; // Neutral center
    const upperRegion = newAlumnus.mapRegion.toLowerCase();
    
    if (upperRegion.includes('usa') || upperRegion.includes('america')) {
      coords = { x: 18 + (Math.random() * 6 - 3), y: 35 + (Math.random() * 6 - 3) };
    } else if (upperRegion.includes('europe') || upperRegion.includes('germany') || upperRegion.includes('uk') || upperRegion.includes('london')) {
      coords = { x: 46 + (Math.random() * 4 - 2), y: 26 + (Math.random() * 4 - 2) };
    } else if (upperRegion.includes('singapore')) {
      coords = { x: 75, y: 59 };
    } else if (upperRegion.includes('japan')) {
      coords = { x: 83, y: 39 };
    } else if (upperRegion.includes('australia')) {
      coords = { x: 88, y: 78 };
    } else if (upperRegion.includes('africa')) {
      coords = { x: 53, y: 72 };
    } else {
      // Defaults close to Coimbatore/India hub
      coords = { x: 67 + (Math.random() * 4 - 2), y: 57 + (Math.random() * 4 - 2) };
    }

    const uniqueId = 'user-' + Date.now();
    const skillsList = newAlumnus.skills ? newAlumnus.skills.split(',').map(s => s.trim()) : ['Research', 'Engineering'];

    const submittedAlumnus: Alumnus = {
      id: uniqueId,
      name: newAlumnus.name,
      batch: newAlumnus.batch,
      program: newAlumnus.program,
      department: newAlumnus.department,
      currentCompany: newAlumnus.currentCompany,
      currentRole: newAlumnus.currentRole,
      location: newAlumnus.location || 'Coimbatore, India',
      country: newAlumnus.country,
      industry: newAlumnus.industry,
      skills: skillsList,
      coordinates: coords,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=250', // Premium Default Male/Gender-neutral headshot
      testimonial: newAlumnus.testimonial || 'Kumaraguru Research and RÉ provided me with resources that laid the foundation of my entire professional journey.',
      contribution: newAlumnus.contribution || 'Registered to sponsor future students with reference logs.',
      story: newAlumnus.story || 'A dedicated alumnus from KCT who developed high-impact physical translations during their tenure on campus and remains committed to the Coimbatore hub.',
      isMentor: newAlumnus.isMentor,
      canRefer: newAlumnus.canRefer,
      isFounder: newAlumnus.isFounder,
      email: newAlumnus.email
    };

    // Add to state list
    setAlumni(prev => [submittedAlumnus, ...prev]);

    // Add a connection line back to Coimbatore Hub to show dynamic network update
    const randomTarget = alumni[Math.floor(Math.random() * alumni.length)].id;
    setConnections(prev => [...prev, { from: uniqueId, to: randomTarget, type: 'referral' }]);

    // Select this newly added node
    setSelectedAlumnusId(uniqueId);
    
    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setShowSubmissionForm(false);
      // Reset form fields
      setNewAlumnus({
        name: '',
        batch: '2022',
        program: 'KREST Fellow',
        department: 'Computer Science Engineering',
        currentCompany: '',
        currentRole: '',
        location: '',
        country: 'India',
        industry: 'Software Engineering',
        skills: '',
        story: '',
        testimonial: '',
        contribution: '',
        isMentor: true,
        canRefer: true,
        isFounder: false,
        email: '',
        mapRegion: 'India'
      });
    }, 2500);
  };

  return (
    <div className="w-full bg-slate-50/50 min-h-screen text-slate-900 select-text font-sans">
      
      {/* 1. Header Hero Panel (Visual Breadcrumb and Headline) */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded font-bold">
                  KCT Global Linkages
                </span>
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                <span className="text-xs font-mono text-slate-500 font-medium">Enterprise Hub v2.8</span>
              </div>
              <h1 className="font-sans font-black text-5xl md:text-6xl text-slate-900 mt-4 tracking-tighter leading-[1.05]">
                Alumni Network
              </h1>
              <p className="text-slate-600 font-sans text-base md:text-lg mt-4 max-w-3xl leading-relaxed">
                Empowering the legacy of <strong className="text-blue-600 font-bold">Kumaraguru College of Technology (KCT)</strong>. Plotted nodes connect 14,000+ research fellows, material scientists, software engineers, and founders stretching from Coimbatore to global technology frontlines.
              </p>
            </div>
            
            {/* CTA to Join Network Story */}
            <div className="shrink-0 flex items-center gap-3">
              <button
                id="submit-story-cta-btn"
                onClick={() => setShowSubmissionForm(true)}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs md:text-sm rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all flex items-center gap-2 group transform active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Submit Your Story</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        
        {/* 2. SaaS Style Dashboard Core Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 transition-all hover:border-slate-350">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold">Total Alumni</span>
              <span className="block text-xl md:text-2xl font-black text-slate-900 mt-0.5">{stats.totalAlumni.toLocaleString()}</span>
              <span className="block text-[10px] text-emerald-600 font-bold mt-0.5">↑ 100% Verified</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 transition-all hover:border-slate-350">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold">Active Mentors</span>
              <span className="block text-xl md:text-2xl font-black text-slate-900 mt-0.5">{stats.activeMentors.toLocaleString()}+</span>
              <span className="block text-[10px] text-slate-500 font-medium mt-0.5">Live consultations</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 transition-all hover:border-slate-350">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold">Countries</span>
              <span className="block text-xl md:text-2xl font-black text-slate-900 mt-0.5">{stats.countriesRepresented}+</span>
              <span className="block text-[10px] text-blue-600 font-medium mt-0.5">Global hubs active</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 transition-all hover:border-slate-350">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold">Job Referrals</span>
              <span className="block text-xl md:text-2xl font-black text-slate-900 mt-0.5">{stats.jobReferrals.toLocaleString()}+</span>
              <span className="block text-[10px] text-emerald-600 font-bold mt-0.5">Active postings</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs col-span-2 lg:col-span-1 flex items-center gap-4 transition-all hover:border-slate-350">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider font-mono text-slate-400 font-bold">Startup Founders</span>
              <span className="block text-xl md:text-2xl font-black text-slate-900 mt-0.5">{stats.startupFounders}+</span>
              <span className="block text-[10px] text-amber-600 font-bold mt-0.5">KCT incubated</span>
            </div>
          </div>

        </div>

        {/* 3. Interactive Dotted World Map Network Area */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          <div className="absolute top-6 left-6 z-10 select-none">
            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded">
              INTERACTIVE GLOBAL NETWORK COORDINATOR
            </span>
            <h3 className="font-sans font-extrabold text-slate-900 mt-2 text-lg">Live Connection Mesh Hub</h3>
            <p className="text-slate-500 text-xs mt-0.5">Hover nodes or link trails to discover collaborations.</p>
          </div>

          {/* Controls to reset map */}
          <div className="absolute top-6 right-6 z-10 flex gap-2">
            <button
              onClick={() => { setSelectedAlumnusId('swathi-k'); setHoveredAlumnusId(null); }}
              className="p-2 bg-slate-55 border border-slate-200 rounded-xl hover:bg-slate-100 text-slate-600 transition-all text-xs font-mono font-bold flex items-center gap-1.5"
              title="Reset View"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Reset Map</span>
            </button>
          </div>

          {/* Left Column: Interactive Vector Map Core (7 Cols) */}
          <div className="lg:col-span-8 bg-[#FAFBFD] rounded-2rem border border-slate-200/60 p-4 relative min-h-[460px] flex items-center justify-center overflow-hidden">
            
            {/* High-Fidelity Dotted Abstract Continental Vector Canvas */}
            <svg 
              className="absolute inset-0 w-full h-full text-slate-205 select-none" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Clean dot matrix filling */}
                <pattern id="lightMapDots" x="0" y="0" width="1.6" height="1.6" patternUnits="userSpaceOnUse">
                  <circle cx="0.8" cy="0.8" r="0.45" fill="#E2E8F0" />
                </pattern>
                
                {/* Purple gradient for active connection lines */}
                <linearGradient id="gradient-mentorship" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient-collaboration" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D97706" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Grid guide markings */}
              <g stroke="#F1F5F9" strokeWidth="0.1">
                <line x1="10" y1="0" x2="10" y2="100" />
                <line x1="20" y1="0" x2="20" y2="100" />
                <line x1="30" y1="0" x2="30" y2="100" />
                <line x1="40" y1="0" x2="40" y2="100" />
                <line x1="50" y1="0" x2="50" y2="100" />
                <line x1="60" y1="0" x2="60" y2="100" />
                <line x1="70" y1="0" x2="70" y2="100" />
                <line x1="80" y1="0" x2="80" y2="100" />
                <line x1="90" y1="0" x2="90" y2="100" />
                <line x1="0" y1="20" x2="100" y2="20" />
                <line x1="0" y1="40" x2="100" y2="40" />
                <line x1="0" y1="60" x2="100" y2="60" />
                <line x1="0" y1="80" x2="100" y2="80" />
              </g>

              {/* Dotted Continents Shapes from TFI Map layout style */}
              {/* North America */}
              <path d="M 5 22 L 32 15 L 35 34 L 18 42 L 15 32 Z" fill="url(#lightMapDots)" />
              <path d="M 12 36 Q 22 35 28 42 T 32 55 L 20 54 L 12 40 Z" fill="url(#lightMapDots)" />
              {/* South America */}
              <path d="M 22 55 L 34 58 L 30 75 L 24 92 L 20 70 Z" fill="url(#lightMapDots)" />
              {/* Eurasia / Russia / Europe */}
              <path d="M 38 20 L 52 14 L 68 12 L 85 14 L 92 18 L 88 38 L 74 44 L 62 46 L 46 42 L 38 30 Z" fill="url(#lightMapDots)" />
              {/* Africa */}
              <path d="M 40 46 L 55 45 L 56 56 L 52 75 L 48 78 L 44 65 L 38 52 Z" fill="url(#lightMapDots)" />
              {/* Indian Peninsula / Southern India */}
              <path d="M 64 45 L 72 45 L 74 58 L 68 64 L 65 55 Z" fill="url(#lightMapDots)" />
              {/* East Asia / China / Japan */}
              <path d="M 72 32 L 88 35 L 86 50 L 76 54 L 70 42 Z" fill="url(#lightMapDots)" />
              {/* Australia & Oceania */}
              <path d="M 80 72 L 92 76 L 90 90 L 82 86 Z" fill="url(#lightMapDots)" />

              {/* 4. Dotted Connection Lines Representing Networks */}
              {connections.map((conn, idx) => {
                const source = alumni.find(al => al.id === conn.from);
                const target = alumni.find(al => al.id === conn.to);
                if (!source || !target) return null;

                const isHighlight = 
                  selectedAlumnusId === conn.from || 
                  selectedAlumnusId === conn.to ||
                  hoveredAlumnusId === conn.from || 
                  hoveredAlumnusId === conn.to;

                let strokeColor = '#CBD5E1'; // Light grey default
                let strokeWidth = 1.0;
                let strokeDash = '3,3';

                if (isHighlight) {
                  strokeWidth = 2.0;
                  strokeDash = '0'; // Solid if highlighted
                  if (conn.type === 'mentorship') strokeColor = '#3B82F6'; // Blue
                  if (conn.type === 'networking') strokeColor = '#8B5CF6'; // Purple
                  if (conn.type === 'referral') strokeColor = '#10B981'; // Green
                  if (conn.type === 'collaboration') strokeColor = '#F59E0B'; // Amber
                }

                return (
                  <path
                    key={`conn-${idx}`}
                    d={getBezierCurvePath(source.coordinates.x, source.coordinates.y, target.coordinates.x, target.coordinates.y)}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDash}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Overlaid Active Profile Avatars */}
            {alumni.map((al) => {
              const isSelected = selectedAlumnusId === al.id;
              const isHovered = hoveredAlumnusId === al.id;
              
              // Calculate connecting relations to currently selected nodes
              const isConnected = connections.some(c => 
                (c.from === selectedAlumnusId && c.to === al.id) || 
                (c.to === selectedAlumnusId && c.from === al.id)
              );

              return (
                <div
                  id={`alumni-node-${al.id}`}
                  key={al.id}
                  style={{ left: `${al.coordinates.x}%`, top: `${al.coordinates.y}%` }}
                  onMouseEnter={() => setHoveredAlumnusId(al.id)}
                  onMouseLeave={() => setHoveredAlumnusId(null)}
                  onClick={() => setSelectedAlumnusId(al.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
                >
                  {/* Dynamic pulse background circles when hovered or selected */}
                  {(isSelected || isHovered) && (
                    <span className="absolute animate-ping inset-[-6px] rounded-full bg-blue-500 bg-opacity-20 z-0"></span>
                  )}

                  {/* Outer profile border indicating skills or roles */}
                  <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full p-[2px] transition-all duration-300 shadow-sm relative ${
                    isSelected 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125 ring-4 ring-blue-100 z-30' 
                      : isConnected
                        ? 'bg-[#10B981] scale-110 z-25'
                        : 'bg-white border-2 border-slate-300 hover:border-blue-600 hover:scale-115'
                  }`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <img 
                        src={al.avatar} 
                        alt={al.name} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Mini-Label floating above */}
                  <div className={`absolute bottom-[-22px] left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white rounded-md text-[8px] font-mono px-1.5 py-0.5 tracking-tight pointer-events-none transition-all ${
                    isSelected ? 'opacity-100 font-bold scale-105' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {al.name.split(' ').pop()} ({al.currentCompany})
                  </div>
                </div>
              );
            })}

            {/* Geographical Index Legends */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-slate-400 font-semibold uppercase bg-white/70 backdrop-blur-md border border-slate-200 px-3.5 py-2 rounded-xl">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" /> Mentorship</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" /> Professional Thread</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Job Referral</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Collaboration</span>
            </div>

          </div>

          {/* Right Column: Selected Alumni Focused Sidebar (4 Cols) */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 lg:pl-8 flex flex-col justify-between">
            <div className="space-y-6 py-2">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-200 bg-slate-100 shrink-0 relative">
                  <img 
                    src={activeSpotlight.avatar} 
                    alt={activeSpotlight.name} 
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {activeSpotlight.isFounder && (
                    <span className="absolute bottom-0 right-0 bg-amber-500 text-white text-[8px] font-mono px-1 rounded-tl font-bold" title="Startup Founder">
                      FOUNDER
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-705 px-2 py-0.5 rounded font-bold">
                      Batch {activeSpotlight.batch}
                    </span>
                    <span className="text-[10px] filter saturate-100 font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-bold">
                      {activeSpotlight.program}
                    </span>
                  </div>
                  <h4 className="font-sans font-black text-slate-900 text-lg leading-tight mt-1">{activeSpotlight.name}</h4>
                  <p className="text-slate-500 text-xs font-semibold">{activeSpotlight.department}</p>
                </div>
              </div>

              {/* Current Role Details */}
              <div className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/60 font-sans">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">Current Professional Node</span>
                <span className="block font-black text-slate-905 text-sm mt-1.5 leading-tight">
                  {activeSpotlight.currentRole} at <span className="text-blue-600 font-extrabold block text-base mt-0.5">{activeSpotlight.currentCompany}</span>
                </span>
                <span className="text-xs text-slate-500 font-medium block mt-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeSpotlight.location} ({activeSpotlight.country})
                </span>
                <span className="text-xs text-slate-550 block mt-1 font-mono">
                  Industry: <strong className="text-slate-700">{activeSpotlight.industry}</strong>
                </span>
              </div>

              {/* Testimonial Panel */}
              <div className="space-y-1.5 flex flex-col justify-start">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">Kumaraguru RÉ Legacy Reflection</span>
                <blockquote className="bg-gradient-to-r from-blue-50/40 to-indigo-50/20 p-4 rounded-xl border border-blue-50 text-slate-700 italic text-xs leading-relaxed font-medium">
                  &ldquo;{activeSpotlight.testimonial}&rdquo;
                </blockquote>
              </div>

              {/* Bio Profile */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">KCT Research Journey</span>
                <p className="text-slate-600 text-xs leading-relaxed mt-1 font-sans">
                  {activeSpotlight.story}
                </p>
              </div>

              {/* Skill Badges */}
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">Primary Research Competencies</span>
                <div className="flex flex-wrap gap-1 mt-2">
                  {activeSpotlight.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono tracking-tight bg-white border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social System Re-Investment */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold flex items-center gap-1">
                <Shield className="w-4 h-4" /> RE ECOSYSTEM RE-INVESTMENT
              </span>
              <p className="text-slate-650 text-xs leading-relaxed mt-2 font-sans pl-1">
                {activeSpotlight.contribution}
              </p>
              
              <div className="flex items-center gap-2 mt-4">
                <a 
                  href={`mailto:${activeSpotlight.email}`}
                  className="flex-1 py-2 text-center bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Connect with Alumnus</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 4. Active Alumni Network Directory Filters Panel */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-sans font-extrabold text-slate-900 text-xl tracking-tight">Active Alumni Directory</h3>
              <p className="text-slate-500 text-xs">Search and narrow profiles of KCT scholars representing high impact domains.</p>
            </div>
            
            {/* Filter Results Count */}
            <div className="text-right">
              <span className="font-mono text-xs text-slate-400 font-bold uppercase block">Matches Plotted</span>
              <span className="font-sans font-black text-blue-600 text-2xl">{filteredAlumni.length} profiles</span>
            </div>
          </div>

          {/* Quick Search and Select Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Live Text Search input */}
            <div className="relative col-span-1 sm:col-span-2">
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Search Keywords</span>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Query Name, Role, Company, Skill, Location..."
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Batch selects */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Batch Graduates</span>
              <select 
                value={selectedBatch} 
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Years</option>
                {filterOptions.batches.map(b => (
                  <option key={b} value={b}>Class of {b}</option>
                ))}
              </select>
            </div>

            {/* Department Selects */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Academic Department</span>
              <select 
                value={selectedDept} 
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Departments</option>
                {filterOptions.depts.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            
            {/* Company Filter */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Employer</span>
              <select 
                value={selectedCompany} 
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Employers</option>
                {filterOptions.companies.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Country Filters */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Country Hub</span>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Countries</option>
                {filterOptions.countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Skills Filter */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Skills Competency</span>
              <select 
                value={selectedSkill} 
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-slate-50/50 hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Competencies</option>
                {filterOptions.skills.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block mb-1.5 font-bold">Target Industry</span>
              <select 
                value={selectedIndustry} 
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs bg-[#FBFBFC] hover:bg-slate-50 focus:bg-white focus:outline-none"
              >
                <option value="All">All Industries</option>
                {filterOptions.industries.map(i => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Reset Filters Shortcut */}
          <div className="flex items-center justify-end font-mono text-[10px] text-slate-400 pt-2">
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedBatch('All');
                setSelectedDept('All');
                setSelectedCompany('All');
                setSelectedCountry('All');
                setSelectedSkill('All');
                setSelectedIndustry('All');
              }}
              className="text-blue-600 hover:text-indigo-600 font-bold block bg-blue-50/80 hover:bg-blue-105 border border-blue-100 px-3 py-1 rounded-xl transition-all"
            >
              Clear Active Filters
            </button>
          </div>
        </div>

        {/* 5. Directory Grid Listing of Filtered Alumni */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((al) => {
            const isSelected = selectedAlumnusId === al.id;
            return (
              <div
                id={`alumni-card-thumb-${al.id}`}
                key={al.id}
                onClick={() => {
                  setSelectedAlumnusId(al.id);
                  // Find the map section and scroll smoothly so the user sees the node change
                  const el = document.getElementById('brand-logo-container');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-6 rounded-2xl border bg-white cursor-pointer flex flex-col justify-between hover:shadow-md transition-all h-[245px] hover:border-blue-300 relative ${
                  isSelected 
                    ? 'border-blue-600 ring-2 ring-blue-50' 
                    : 'border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Top line with batch and program badges */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">Class of {al.batch}</span>
                    <span className="text-[9px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded font-bold uppercase">{al.program}</span>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                      <img 
                        src={al.avatar} 
                        alt={al.name} 
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-sans font-extrabold text-sm text-slate-900 truncate leading-tight">{al.name}</h4>
                      <p className="text-slate-500 text-[11px] font-medium block truncate mt-0.5">{al.currentRole}</p>
                      <span className="text-blue-600 text-xs font-bold block truncate mt-0.5">{al.currentCompany}</span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3">
                    {al.testimonial}
                  </p>

                </div>

                <div className="flex items-center justify-between font-mono text-[9px] text-slate-405 border-t border-slate-100 pt-3 mt-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {al.location.split(',')[0]}
                  </span>
                  <span className="text-blue-600 hover:underline font-bold flex items-center gap-0.5">Explore story &rarr;</span>
                </div>
              </div>
            );
          })}

          {filteredAlumni.length === 0 && (
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-3xl border border-slate-200">
              <span className="text-slate-400 text-sm block font-sans">No alumni profiles matched your criteria.</span>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedBatch('All');
                  setSelectedDept('All');
                  setSelectedCompany('All');
                  setSelectedCountry('All');
                  setSelectedSkill('All');
                  setSelectedIndustry('All');
                }}
                className="mt-4 px-5 py-2 border border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-750 font-bold rounded-xl text-xs font-mono"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>


        {/* 6. SAMPLE IMAGE SECT: Custom Connection Mesh zone matching User Request Picture 1 */}
        {/* We recreate the exact photo mesh centering a greeting! */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-12 shadow-sm relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-16 relative z-10">
            <span className="text-xs uppercase tracking-widest font-mono text-purple-600 bg-purple-50 px-2.5 py-1 rounded font-bold">
              THE STORY COMMONS
            </span>
            <h2 className="font-sans font-black text-4xl text-slate-900 tracking-tight">
              SHARE YOUR STORIES
            </h2>
            <p className="text-slate-505 font-sans text-sm block max-w-lg mx-auto leading-relaxed">
              Join the community of awesome people, tell your stories and share with all the world. Discover peers who traveled from Kumaraguru College to lead technology worldwide.
            </p>
          </div>

          {/* Grayscale Aesthetic Story-Network Grid Mesh exactly replicating Image 1 */}
          <div className="w-full relative min-h-[400px] bg-[#FCFCFD]/65 rounded-3xl border border-slate-102 flex items-center justify-center p-4 overflow-hidden mb-12">
            
            {/* Abstract Connections SVG in background */}
            <svg className="absolute inset-0 w-full h-full text-slate-200 select-none opacity-80" xmlns="http://www.w3.org/2000/svg">
              {/* Complex dotted network curves bridging positions */}
              <line x1="15%" y1="20%" x2="30%" y2="25%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="30%" y1="25%" x2="25%" y2="45%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="25%" y1="45%" x2="40%" y2="55%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="40%" y1="55%" x2="52%" y2="45%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="52%" y1="45%" x2="65%" y2="30%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="65%" y1="30%" x2="72%" y2="50%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="72%" y1="50%" x2="88%" y2="35%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="88%" y1="35%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="80%" y1="65%" x2="68%" y2="80%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="68%" y1="80%" x2="52%" y2="70%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="52%" y1="70%" x2="45%" y2="85%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="45%" y1="85%" x2="32%" y2="72%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="32%" y1="72%" x2="15%" y2="60%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />
              <line x1="15%" y1="60%" x2="15%" y2="20%" stroke="currentColor" strokeWidth="1.25" strokeDasharray="3 3" />

              {/* Extra crossed links to look dense */}
              <line x1="15%" y1="20%" x2="25%" y2="45%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="30%" y1="25%" x2="40%" y2="55%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="40%" y1="55%" x2="65%" y2="30%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="52%" y1="45%" x2="72%" y2="50%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="72%" y1="50%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="68%" y1="80%" x2="45%" y2="85%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
              <line x1="32%" y1="72%" x2="15%" y2="20%" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
            </svg>

            {/* Float Bubbles scattered representing the 'Share Your Stories' connection group */}
            {[
              { x: '15%', y: '20%', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', name: 'Samantha, Tesla' },
              { x: '30%', y: '25%', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150', name: 'David, Barclays' },
              { x: '25%', y: '45%', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150', name: 'Swathi, Google' },
              { x: '40%', y: '55%', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150', name: 'Lena, Siemens' },
              { x: '52%', y: '45%', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', name: 'Naveen, Grab' },
              { x: '65%', y: '30%', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', name: 'Alumni Cell' },
              { x: '72%', y: '50%', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', name: 'Reka, ByteDance' },
              { x: '88%', y: '35%', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150', name: 'Yuki, Fanuc' },
              { x: '80%', y: '65%', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&q=80&w=150', name: 'Preethi, McKinsey' },
              { x: '68%', y: '80%', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150', name: 'Karthik, NVIDIA' },
              { x: '52%', y: '70%', img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150', name: 'Michael, Standard' },
              { x: '45%', y: '85%', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', name: 'Vignesh, Agro' },
              { x: '32%', y: '72%', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', name: 'Anushya, K&C' },
              { x: '15%', y: '60%', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', name: 'Pranesh, Founder' }
            ].map((node, i) => (
              <div
                key={i}
                style={{ left: node.x, top: node.y }}
                className="absolute shadow-sm border border-white hover:scale-115 transition-transform cursor-pointer rounded-full p-[2px] bg-slate-200"
                title={node.name}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-white bg-white">
                  <img src={node.img} alt={node.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}

            <div className="absolute z-10 bottom-6 px-5 py-3 bg-white border border-slate-205 rounded-full shadow-sm text-center">
              <span className="font-mono text-[10px] text-slate-500 font-bold block">ACTIVE KCT INTERCONNECTION MESH</span>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => setShowSubmissionForm(true)}
              className="px-8 py-3.5 border-2 border-slate-900 bg-white hover:bg-slate-900 hover:text-white rounded-xl text-xs md:text-sm font-sans font-black tracking-tight cursor-pointer transition-all active:scale-95 shadow-2xs"
            >
              Learn more about Stories
            </button>
          </div>

        </div>


        {/* 7. Additional Sections: Featured Alumni & Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          
          {/* Left Block: Success Stories */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-2xs relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0"></span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Success Stories</h3>
              </div>
              <p className="text-slate-505 text-xs">Major institutional breakthroughs powered by KCT graduates who initiated their studies inside core laboratory complexes.</p>
              
              <div className="space-y-4">
                
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 flex gap-4">
                  <span className="text-xl font-black font-mono text-blue-600 shrink-0 select-none">01</span>
                  <div>
                    <h5 className="font-sans font-black text-slate-900 text-sm">Translational Cellulose Extract Splice</h5>
                    <p className="text-slate-500 text-xs mt-1">Vignesh Balaji (CoClass 2018) co-established a local factory floor with Kumaraguru incubation funding, displacing plastic corners with organic composites across 3 national logistics clients in Coimbatore.</p>
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 font-bold px-2 py-0.5 rounded mt-2.5 inline-block">Active Incubated Case</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 flex gap-4">
                  <span className="text-xl font-black font-mono text-blue-600 shrink-0 select-none">02</span>
                  <div>
                    <h5 className="font-sans font-black text-slate-900 text-sm">The Cognitive OCR Vatteluttu Engine</h5>
                    <p className="text-slate-500 text-xs mt-1">Reka Subramanian (Class of 2015) designed computational historical models inside the Nithilam lab, building robust translation classifiers that now secure ancient historical texts as open digital archives.</p>
                    <span className="text-[10px] bg-blue-50 text-blue-800 font-bold px-2 py-0.5 rounded mt-2.5 inline-block">Published in Digital Humanities</span>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-100 mt-6">
              <button 
                onClick={() => alert('Accessing full historical archive of class success publications from physical library racks.')} 
                className="text-xs font-mono text-blue-600 font-bold flex items-center gap-1 hover:underline"
              >
                Browse all verified archives &rarr;
              </button>
            </div>
          </div>

          {/* Right Block: Mentorship Program circles */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-2xs relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-purple-600 rounded-full shrink-0"></span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Mentorship Circles</h3>
              </div>
              <p className="text-slate-550 text-xs">Active professional matching networks bridging graduates with student research cohorts. Register to secure regular structural reviews.</p>
              
              <div className="space-y-4">
                
                <div className="p-4 bg-purple-50/20 rounded-2xl border border-purple-50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-100 text-purple-700 rounded-xl">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-sans font-black text-slate-900 text-sm">AI, LLMs &amp; Data physical layouts</h5>
                      <p className="text-slate-500 text-[11px] mt-0.5">Anchored by Dr. Swathi Krishnan (Google AI) and Reka Subramanian.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-1 rounded font-bold whitespace-nowrap">8 Fellows Active</span>
                </div>

                <div className="p-4 bg-blue-50/25 rounded-2xl border border-blue-50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-105 text-blue-700 rounded-xl">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-sans font-black text-slate-900 text-sm">AgriTech &amp; organic Bio-materials</h5>
                      <p className="text-slate-500 text-[11px] mt-0.5">Anchored by Vignesh Balaji (AgroSphere) and Preethi Ramkumar.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-1 rounded font-bold whitespace-nowrap">5 Fellows Active</span>
                </div>

              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6 flex-wrap">
              <button 
                onClick={() => {
                  alert('Registered your interest for mentor matching pool! The Alumni Office will review your bio metrics.');
                }}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-semibold cursor-pointer transition-all"
              >
                Apply for Mentorship Node
              </button>
              <button 
                onClick={() => {
                  alert('Thank you! Please fill the "Submit Your Story" details and mark yourself as an Active Mentor.');
                }}
                className="px-5 py-2.5 border border-slate-200 hover:border-slate-400 bg-white text-slate-755 rounded-xl text-xs font-semibold cursor-pointer transition-all"
              >
                Register as Mentor
              </button>
            </div>
          </div>

        </div>


        {/* 8. Career Opportunities & Event Schedule Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          
          {/* Calendar Events (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-[2rem] p-8 shadow-2xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-indigo-600 rounded-full shrink-0"></span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Upcoming Reunions</h3>
              </div>
              <p className="text-slate-500 text-xs">Join global physical meetings and virtual telemetry chats coordinating scholar allocations.</p>

              <div className="space-y-4">
                
                <div className="flex gap-4 items-start pb-4 border-b border-slate-100">
                  <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl text-center min-w-[55px] select-none font-bold">
                    <span className="block text-xs uppercase font-mono tracking-tight font-bold text-indigo-500">Jul</span>
                    <span className="block text-lg font-black leading-none mt-1">18</span>
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-slate-900 text-sm">AI Summit Silicon Valley Hub</h5>
                    <p className="text-slate-500 text-xs mt-0.5">Hosted by Dr. Swathi Krishnan. Collaborative panels on LLM hardware accelerators.</p>
                    <span className="text-[10px] text-indigo-600 font-semibold block mt-1">San Francisco • Virtual Link Injected</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start pb-4">
                  <div className="p-3 bg-blue-50 text-blue-700 rounded-xl text-center min-w-[55px] select-none font-bold">
                    <span className="block text-xs uppercase font-mono tracking-tight font-bold text-blue-500">Oct</span>
                    <span className="block text-lg font-black leading-none mt-1">05</span>
                  </div>
                  <div>
                    <h5 className="font-sans font-black text-slate-900 text-sm">Global Alumni Homecoming 2026</h5>
                    <p className="text-slate-500 text-xs mt-0.5">KCT Coimbatore Campus. Physical laboratory inauguration and research paper reviews.</p>
                    <span className="text-[10px] text-blue-600 font-semibold block mt-1">Coimbatore KCT premises</span>
                  </div>
                </div>

              </div>
            </div>

            <button 
              onClick={() => alert('Accessing Google calendar schedules for regional coordination summits.')} 
              className="text-xs font-mono text-indigo-600 font-bold block pt-4 border-t border-slate-100 mt-6 hover:underline"
            >
              Sync with my Google Calendar &rarr;
            </button>
          </div>

          {/* Career Opportunities Hub (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-205 rounded-[2rem] p-8 shadow-2xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-emerald-600 rounded-full shrink-0"></span>
                <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">Career Opportunities</h3>
              </div>
              <p className="text-slate-550 text-xs">Direct professional routes posted by active KCT graduates working across leading global corporate and research spaces.</p>

              <div className="space-y-4">
                
                <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-201 flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-2 rounded font-bold">REFERRAL ACTIVE</span>
                      <span className="text-xs font-mono text-slate-400 font-medium">Google AI Lab • Remote / SF</span>
                    </div>
                    <h5 className="font-sans font-extrabold text-slate-900 text-sm mt-1.5">Machine Learning Software Engineer</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Design multi-agent inference buffers. Swathi Krishnan coordinates local resumes.</p>
                  </div>
                  <button 
                    onClick={() => alert('Referral request sent to Swathi Krishnan. Ensure your academic CV contains active GitHub repo links.')}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white text-[11px] font-bold rounded-lg cursor-pointer transition-all whitespace-nowrap"
                  >
                    Request Referral
                  </button>
                </div>

                <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-201 flex justify-between items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-2 rounded font-bold">ENTRY ROLE</span>
                      <span className="text-xs font-mono text-slate-400 font-medium">Grab Solutions • Bengaluru / SG</span>
                    </div>
                    <h5 className="font-sans font-extrabold text-slate-900 text-sm mt-1.5">Edge Computer Vision Specialist</h5>
                    <p className="text-slate-500 text-[11px] mt-0.5">Deploy low-latency TensorFlow Lite pipelines. Placed candidates get direct Singapore internships.</p>
                  </div>
                  <button 
                    onClick={() => alert('Referral request sent to Naveen Kumar. Live KCT student metrics are automatically synchronized.')}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-black text-white text-[11px] font-bold rounded-lg cursor-pointer transition-all whitespace-nowrap"
                  >
                    Request Referral
                  </button>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-400 font-mono">24 active positions available</span>
              <button 
                onClick={() => alert('Accessing regional Job Commons networks containing 300+ listings.')} 
                className="text-blue-600 font-bold hover:underline"
              >
                Browse all job boards &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 9. Glassmorphic Slide-Over Alumnus Story Submission Modal */}
      {showSubmissionForm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            <button 
              onClick={() => setShowSubmissionForm(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-105 text-slate-500 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase bg-blue-50 text-blue-600 px-2.5 py-1 rounded font-bold">
                Join KCT Global Commons
              </span>
              <h3 className="font-sans font-black text-slate-900 text-2xl md:text-3xl mt-3 tracking-tight">
                Submit Your Journey Log
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Your submitted details are instantly verified and mapped to the live World Nodes and storytelling commons network.
              </p>
            </div>

            {submissionSuccess ? (
              <div className="p-8 bg-emerald-50 border border-emerald-110 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="font-sans font-black text-emerald-800 text-xl">Journey Successfully Logs Plotted!</h4>
                <p className="text-emerald-700 text-xs max-w-sm mx-auto">
                  Your coordinates have been calibrated regarding regional location inputs. You are now visible across active directories.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmission} className="space-y-4 md:space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Full Name *</label>
                    <input 
                      type="text"
                      required
                      value={newAlumnus.name}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g., Dr. Aishwarya Raj"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Email Address *</label>
                    <input 
                      type="email"
                      required
                      value={newAlumnus.email}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g., aishwarya.r@alumni.kct.ac.in"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Graduation Class *</label>
                    <select 
                      value={newAlumnus.batch}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, batch: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    >
                      {['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'].map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Primary KCT Program</label>
                    <select 
                      value={newAlumnus.program}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, program: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    >
                      <option value="KREST Fellow">KREST Fellow</option>
                      <option value="KRIP Intern">KRIP Intern</option>
                      <option value="Research Assistant">Research Assistant</option>
                      <option value="Alumni Researcher">Alumni Researcher</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Core Department</label>
                    <select 
                      value={newAlumnus.department}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, department: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    >
                      <option value="Computer Science Engineering">Computer Science Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Electronics & Communication">Electronics & Communication</option>
                      <option value="Electronics & Instrumentation">Electronics & Instrumentation</option>
                      <option value="Biotechnology">Biotechnology</option>
                      <option value="Mechatronics Engineering">Mechatronics Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Textile Technology">Textile Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Target Industry</label>
                    <select 
                      value={newAlumnus.industry}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    >
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Semiconductors & Hardware">Semiconductors & Hardware</option>
                      <option value="Biotechnology">Biotechnology</option>
                      <option value="Robotics">Robotics</option>
                      <option value="Healthcare Technology">Healthcare Technology</option>
                      <option value="Management Consulting">Management Consulting</option>
                      <option value="Financial Technology">Financial Technology</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Current Role *</label>
                    <input 
                      type="text"
                      required
                      value={newAlumnus.currentRole}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, currentRole: e.target.value }))}
                      placeholder="e.g., ML Research Lead"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Company *</label>
                    <input 
                      type="text"
                      required
                      value={newAlumnus.currentCompany}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, currentCompany: e.target.value }))}
                      placeholder="e.g., DeepMind Solutions"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Location *</label>
                    <input 
                      type="text"
                      required
                      value={newAlumnus.location}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g., London, UK"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Global Map Calibration Zone</label>
                    <select 
                      value={newAlumnus.mapRegion}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, mapRegion: e.target.value }))}
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    >
                      <option value="India">India / South Asia</option>
                      <option value="USA">USA / Americas</option>
                      <option value="Europe">Europe / Germany / UK</option>
                      <option value="Singapore">Singapore / East Asia</option>
                      <option value="Japan">Japan / Mechatronics hubs</option>
                      <option value="Australia">Australia / Sydney</option>
                      <option value="Africa">South Africa / Gauteng</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Skills (separated by commas)</label>
                    <input 
                      type="text"
                      value={newAlumnus.skills}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, skills: e.target.value }))}
                      placeholder="e.g., PyTorch, VLSI, Supply Chain"
                      className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 font-bold mb-1.5">Your KCT Story (Paragraph)</label>
                  <textarea 
                    rows={2}
                    value={newAlumnus.story}
                    onChange={(e) => setNewAlumnus(prev => ({ ...prev, story: e.target.value }))}
                    placeholder="Describe your research journey at KCT, who mentored you, and how it structured your goals..."
                    className="w-full px-3.5 py-2 border border-slate-200 rounded-xl text-xs bg-slate-50 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer font-sans text-xs text-slate-650">
                    <input 
                      type="checkbox"
                      checked={newAlumnus.isMentor}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, isMentor: e.target.checked }))}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-100 focus:outline-none"
                    />
                    <span>Available for Mentorship</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-sans text-xs text-slate-650">
                    <input 
                      type="checkbox"
                      checked={newAlumnus.canRefer}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, canRefer: e.target.checked }))}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-100 focus:outline-none"
                    />
                    <span>Can Provide Referrals</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-sans text-xs text-slate-650">
                    <input 
                      type="checkbox"
                      checked={newAlumnus.isFounder}
                      onChange={(e) => setNewAlumnus(prev => ({ ...prev, isFounder: e.target.checked }))}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-100 focus:outline-none"
                    />
                    <span>Startup Founder</span>
                  </label>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 justify-end">
                  <button 
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="px-5 py-2.5 border border-slate-200 hover:border-slate-400 bg-white text-slate-705 rounded-xl text-xs font-semibold cursor-pointer transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 bg-slate-900 hover:bg-black text-white font-semibold rounded-xl text-xs cursor-pointer transition-all shadow-md"
                  >
                    Deploy to World Map
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

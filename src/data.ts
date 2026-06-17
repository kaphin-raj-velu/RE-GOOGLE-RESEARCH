import {
  ResearchArea,
  Project,
  Publication,
  Lab,
  Challenge,
  Resource,
  Program,
  CareerOpportunity,
  EventItem,
  Member
} from './types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'ai-data-science',
    title: 'Artificial Intelligence & Data Science',
    iconName: 'Cpu',
    summary: 'Developing advanced machine learning algorithms, natural language processing tools, and computer vision models for regional applications like Dravidian script transcription and agricultural monitoring.',
    overview: 'Our AI & Data Science group focuses on high-impact research, bridging the gap between theoretical machine learning and local, societal requirements. Major initiatives include digitizing ancient Tamil temple scripts (Vatteluttu) and optimizing crop yield predicting systems for Southern Indian farmers.',
    projectsList: ['assistive-communication-device'],
    publicationsList: ['pub-nlp-tamil', 'pub-ai-screening'],
    labsList: ['ai-research-hub'],
    researchersList: ['Dr. A. Karthikeyan', 'Prof. Saravana Kumar'],
    impact: 'Successfully trained OCR algorithms to achieve 92% retrieval accuracy on heritage Vatteluttu stone inscriptions, and deployed localized learning assists to over 25 rural schools in Tamil Nadu.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    iconName: 'HeartPulse',
    summary: 'Leveraging AI-assisted diagnostics, medical electronics, and biomaterials to build affordable, fast, and highly reliable diagnostic screening tools for early disease detection.',
    overview: 'By bringing together clinical experts and engineers, our Healthcare domain focuses on developing translational medical technologies. We create intelligent systems, low-cost screening toolkits, and portable analytical devices tailored for rural clinics where diagnostic facilities are limited.',
    projectsList: [],
    publicationsList: ['pub-ai-screening'],
    labsList: ['bio-medical-diagnostics-lab'],
    researchersList: ['Dr. Meera Krishnan', 'Dr. S. Rajeswari'],
    impact: 'Deployed low-cost pre-screening computer-vision devices deployed at primary healthcare units, helping identify early-stage diabetic retinopathy risk in over 1,500 rural outpatients.'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    iconName: 'TreePine',
    summary: 'Evaluating localized micro-climate variations, circular economy practices, waste-to-energy technologies, and sustainable agricultural techniques designed for regional conservation.',
    overview: 'The sustainability team carries out actionable scientific work in environmental monitoring and regional ecosystems. Focus areas include mapping water tables, developing solar-hybrid agricultural pump systems, and formulating circular models for fabric waste.',
    projectsList: ['battery-energy-storage-system', 'small-scale-wind-turbine'],
    publicationsList: ['pub-natural-fibre-composites'],
    labsList: ['micro-climate-monitoring-station'],
    researchersList: ['Dr. R. Nandhakumar', 'Dr. J. Preethi'],
    impact: 'Established five smart climate monitoring grid systems along the Noyyal river basin and successfully diverted 20 tonnes of industrial textile waste into secondary building materials.'
  },
  {
    id: 'natural-fibres',
    title: 'Natural Fibres & Materials Science',
    iconName: 'Combine',
    summary: 'Re-engineering raw organic materials like coir, banana pseudostem, and pine fibres into high-performance industrial composites, sound insulation, and light structures.',
    overview: 'RÉ is a pioneer in the application of natural fibres to automotive composites, packaging material, and architectural acoustics. Supported by the Natural Fibre Research Centre (NFRC), we study cellulose extraction, chemical modification, and polymer-reinforced structural fabrication.',
    projectsList: [],
    publicationsList: ['pub-natural-fibre-composites'],
    labsList: ['materials-prototyping-lab'],
    researchersList: ['Prof. K. Ramesh', 'Dr. S. Vignesh'],
    impact: 'Collaborated with major electric vehicle startups to prototype bio-composite side panels, achieving a 15% weight reduction compared to traditional fibreglass panels.'
  },
  {
    id: 'social-innovation',
    title: 'Social Innovation & Heritage',
    iconName: 'Compass',
    summary: 'Analyzing historical cultural assets through modern technologies, exploring heritage preservation (Vatteluttu), and delivering scalable sociometric models for rural livelihood.',
    overview: 'Through our dedicated Nithilam initiative and cultural study cohorts, we combine humanities, history, and exact science. We digitize, translate, and archive ancient regional knowledge, supporting cottage crafts with structural scientific tools.',
    projectsList: [],
    publicationsList: ['pub-nlp-tamil'],
    labsList: ['heritage-digitalization-lab'],
    researchersList: ['Dr. S. Dhanalakshmi', 'Prof. Manikandan R.'],
    impact: 'Constructed the open-access Digital Inscription Registry containing 500+ annotated high-definition prints of Vatteluttu characters'
  },
  {
    id: 'emerging-technologies',
    title: 'Emerging Technologies',
    iconName: 'Zap',
    summary: 'Exploring edge computing systems, drone-assisted precision agriculture, and IoT-enabled industrial sensor arrays to support next-generation local enterprises.',
    overview: 'The Emerging Technologies group creates custom embedded systems, sensory networks, and distributed processing environments. The thrust is to deliver robust, fail-safe electronic designs that thrive in challenging tropical agricultural and industrial conditions.',
    projectsList: [],
    publicationsList: ['pub-ai-screening'],
    labsList: ['ai-research-hub', 'materials-prototyping-lab'],
    researchersList: ['Dr. G. Balaji', 'Prof. Arul Prasad'],
    impact: 'Engineered custom low-power IoT transceivers with localized LoRa mesh layout, facilitating real-world, subscription-free soil data propagation over 20 kilometers.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'battery-energy-storage-system',
    title: 'Battery Energy Storage System',
    areaId: 'sustainability',
    areaName: 'Sustainability',
    status: 'completed',
    stage: 'Product',
    leader: 'Battery Research Circle',
    description: 'Battery Energy Storage System (BESS) is an energy management solution that stores excess electrical energy generated from solar photovoltaic systems and supplies power during periods of low generation or high demand. The system enhances energy reliability, improves grid stability, and enables efficient integration of renewable energy sources.',
    outcome: 'Stores excess solar photovoltaic energy and supplies power on demand, enhancing grid stability.',
    details: 'Leveraging smart management systems coupled with high-efficiency power electronics to optimize regional micro-grid distribution networks. Deployed systems have demonstrated reliable peak shaving and load-balancing.',
    tags: ['Battery Storage', 'Renewable Energy', 'Grid Stability', 'Clean Tech']
  },
  {
    id: 'small-scale-wind-turbine',
    title: 'Small Scale Wind Turbine',
    areaId: 'sustainability',
    areaName: 'Sustainability',
    status: 'ongoing',
    stage: 'Prototype',
    leader: 'Team Sulal',
    description: 'This small-scale wind turbine utilizes sustainable and environmentally friendly materials, including eco-conscious composite blades, to efficiently convert wind energy into clean electricity. Its optimized aerodynamic design enhances energy capture while reducing environmental impact, supporting renewable energy adoption and sustainable power generation.',
    outcome: 'Completed initial low-velocity aerodynamic blade trials using eco-conscious composite materials.',
    details: 'Utilizing treated organic fibre composite blends for blade manufacture to ensure biodegradable disposal. Aerodynamic modeling indicates high lift-to-drag performance suited even for moderate geographical wind patterns.',
    tags: ['Wind Turbine', 'Aerodynamics', 'Clean Electricity', 'Eco Materials']
  },
  {
    id: 'assistive-communication-device',
    title: 'Assistive Communication Device for Hard of Hearing Individuals',
    areaId: 'educational',
    areaName: 'Educational Research Circle',
    status: 'ongoing',
    stage: 'Prototype',
    leader: 'Educational Research Circle',
    description: 'A platform that converts live multilingual speech into accessible captions for Deaf and Hard-of-Hearing users. Designed for Indian classrooms and everyday communication, it provides speech recognition, translation, speaker identification, and simplified captions to improve inclusion, comprehension, and accessibility.',
    outcome: 'Live multilingual captioning software tested within test classrooms.',
    details: 'Integrating advanced low-latency automated speech transcription to capture multivariant Indian speaker accents. Simplified caption formatting is formatted dynamically on tablet screens for better engagement.',
    tags: ['Speech Translation', 'Assistive Tech', 'Inclusive Education', 'Accessibility']
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-nlp-tamil',
    title: 'Deep Multi-Scale Attention Networks for Dravidian Epigraphy Character Stroke Re-association',
    authors: ['S. Dhanalakshmi', 'M. R. Manikandan', 'S. Vignesh'],
    journal: 'Journal of Archaeological Computational Science & Linguistics',
    year: 2025,
    doi: '10.1016/j.jacsl.2025.10425',
    abstract: 'Ancient granite stone carvings undergo severe wind and environmental micro-fissuring, causing segment degradation in classical scripts. We present a deep multi-scale architectural network specializing in stroke re-association. Evaluated across 2,000 annotated field samples of Vatteluttu, our model shows superior character segmentation.',
    category: 'AI & Heritage'
  },
  {
    id: 'pub-natural-fibre-composites',
    title: 'Mechanical and Dynamic Mechanical Analysis of Treated Banana Cellulose Bio-Composites for Light-Duty Chassis Applications',
    authors: ['K. Ramesh', 'S. Vignesh', 'R. Nandhakumar'],
    journal: 'Composites Part B: Engineering (Letters)',
    year: 2024,
    doi: '10.1016/j.compositesb.2024.1118',
    abstract: 'This study investigates the modification of banana pseudostem agricultural scrap. Alkali treatments in 5% NaOH solutions led to higher crystallinity index. The resulting bio-composites exhibit superior dampening characteristics, suggesting promising applications for structural vibration minimization in local electric vehicles.',
    category: 'Materials Science'
  },
  {
    id: 'pub-ai-screening',
    title: 'Edge-Optimized CNNs for Diabetic Retinopathy Classification on Low-Cost Handheld Systems',
    authors: ['Meera Krishnan', 'A. Karthikeyan'],
    journal: 'IEEE Transactions on Biophotonics and Medical Systems',
    year: 2025,
    doi: '10.1109/TBMS.2025.341890',
    abstract: 'Deploying robust Deep Learning models in medical facilities is limited by local compute power. We introduce an edge-optimized framework with custom model compression, scaling, and selective feature mappings. The model matches professional ophthalmologist diagnosis in sensitivity while requiring 80% fewer computational parameters.',
    category: 'Healthcare Diagnostics'
  }
];

export const LABS: Lab[] = [
  {
    id: 'materials-prototyping-lab',
    title: 'NFRC Materials Prototyping Laboratory',
    description: 'Equipped with custom extraction assets, advanced polymer mixers, hydraulic hot presses, and universal testing machines to formulate bio-materials.',
    facilities: ['Hydraulic Hot-Press Molding System', 'Alkali Cellulose Extraction Line', 'Universal Tensile Testing machine (UTM-50KN)', 'Vibration Shaking Chamber'],
    coordinator: 'Prof. K. Ramesh',
    contactEmail: 'ramesh.k.res@kumaraguru.edu',
    location: 'Mechanical Sciences Research Wing, Block D'
  },
  {
    id: 'ai-research-hub',
    title: 'RÉ High-Performance AI Research Hub',
    description: 'A GPU-accelerated laboratory environment catering to student explorer cohorts building neural vision models and high-throughput script parsers.',
    facilities: ['Dedicated GPU Compute Node (4x NVIDIA RTX A6000)', 'Virtual Deep Learning Environments', 'High-speed local storage arrays', 'Drone and Mobile hardware workbench'],
    coordinator: 'Dr. A. Karthikeyan',
    contactEmail: 'karthikeyan.aistudio@kumaraguru.edu',
    location: 'Innovation & Research Centre, Block A'
  },
  {
    id: 'heritage-digitalization-lab',
    title: 'Nithilam Heritage Imaging & Digitalization Laboratory',
    description: 'Providing student historians and computer scientists with elite field photogrammetry kits, multispectral imaging, and text classification tools.',
    facilities: ['Multispectral Camera Systems', 'Field Epigraphic Paper Print Scanner', 'High-precision structured 3D scanners', 'Tamil Lexicography Database'],
    coordinator: 'Dr. S. Dhanalakshmi',
    contactEmail: 'dhanalakshmi.s@kumaraguru.edu',
    location: 'Humanities & Social Sciences, Block H'
  }
];

export const CHALLENGES: Challenge[] = [
  {
    id: 'challenge-cotton-weed',
    title: 'Automated Micro-Weeding for Small Cotton Holdings',
    description: 'Manual weeding is labor-intensive and chemical weeding damages soil chemistry. We are seeking lightweight, mechanically automated micro-weeding solutions that can navigate narrow row distances in Western Tamil Nadu cotton farms.',
    targetIndustry: 'AgriTech & Local Cooperatives',
    deadline: 'December 15, 2026',
    scope: 'Prototype must fit within high-resolution crop row parameters and cost under ₹15,000 for local deployment.'
  },
  {
    id: 'challenge-water-noyyal',
    title: 'Real-time Trace Chemical Detection for Noyyal River Basins',
    description: 'Creating low-maintenance sensory nodes that can detect and report localized heavy metal and azo dye discharges in industrial outflows with robust wireless alerts.',
    targetIndustry: 'Environmental Monitoring & Textile Alliances',
    deadline: 'March 20, 2027',
    scope: 'Autonomously powered telemetry platform operational across extreme pH ranges (4.0 to 11.0) with localized GSM transmission.'
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'hpc-cluster',
    title: 'High-Performance Computing Cluster',
    description: 'Shared high-capacity processing instances dedicated to complex simulation, structural molecular dynamics model runs, and spatial environmental analyses.',
    specifications: ['128 Compute Cores', '512GB ECC RAM', 'Dynamic CPU-GPU memory resource allocation', 'Standard Linux Environment with Slurm scheduler.'],
    accessProcedure: 'Open to all KREST fellows and KRIP interns. Submit an exploration computational proposal via the research portal.',
    contactPerson: 'Mr. Vigneshwaran (Systems Administrator)'
  },
  {
    id: 'analytical-characterization',
    title: 'Materials Characterization Core Facility',
    description: 'Supporting researchers across disciplines with advanced chemical, thermal, and microstructural analysis of synthesized fabrics, materials and composites.',
    specifications: ['SEM (Scanning Electron Microscopy)', 'FTIR (Fourier Transform Infrared) Spectroscopy', 'TGA (Thermogravimetric Analysis)', 'Universal Testing Systems.'],
    accessProcedure: 'Book specific slots weekly via the Materials Science coordinator. External student researchers are eligible under regional training access schemes.',
    contactPerson: 'Dr. S. Vignesh (Lab In-Charge)'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'krip',
    title: 'Kumaraguru Research Internship Program (KRIP)',
    tagline: 'Undergraduate Research, Professionalized',
    description: 'Selecting brilliant undergraduate students to spend 6 months working alongside core research mentors on funded local and societal projects with professional stipends.',
    overview: 'KRIP bridges undergraduate classroom learning and formal discovery. Interns receive training in research writing, rigorous methodology, literature analysis, and prototype development, backed by dedicated workspace access.',
    activities: [
      'Comprehensive Literature Survey Sprint',
      'Materials Fabrication & Experimental Design bootcamps',
      'Weekly Research Peer Seminars & critiques',
      'Paper writing development and academic presentation guidance'
    ],
    metrics: [
      { label: 'Active Interns Yearly', value: '75+' },
      { label: 'Co-Authored Papers', value: '45+' },
      { label: 'Graduate Admissions', value: '18%' }
    ],
    stories: [
      {
        author: 'Sanjay Kumar (BE Mechanical Engineering)',
        role: 'Materials Research Intern',
        quote: 'RÉ allowed me to move from theory to actual physical science. I fabricated natural bio-composites that have gone through strict mechanical testing, and eventually co-authored my first paper in a high impact journal.'
      }
    ],
    outcomes: [
      'Guaranteed financial stipends for research excellence',
      'Co-authorship opportunities in international peer-reviewed journals',
      'Exclusive slots inside advanced prototyping laboratories'
    ]
  },
  {
    id: 'krest',
    title: 'Kumaraguru Research Fellowship Scheme (KREST)',
    tagline: 'Empowering Advanced Scholars & Innovators',
    description: 'A prestigious program supporting dedicated postgraduate and doctoral scholars with continuous fellowship funding to model outstanding scientific translations.',
    overview: 'KREST supports researchers who are dedicated to long-term regional development, intellectual asset generation, and complex hardware creation. Our fellows are provided with fully funded resources, advanced cloud tools, and direct connections to regional industries.',
    activities: [
      'Doctoral Fellowship Support & Stipends',
      'Intellectual Property (IP) and Patent Filing Masterclasses',
      'Industry-Consultant Alignment Forums',
      'Postdoctoral mentoring development'
    ],
    metrics: [
      { label: 'Fellows Supported', value: '25+' },
      { label: 'Patents Filed', value: '12' },
      { label: 'Industrial Integrations', value: '8' }
    ],
    stories: [
      {
        author: 'Dr. Senthil Kumar',
        role: 'KREST Senior Fellow',
        quote: 'The academic freedom provided by KREST, coupled with advanced research equipment, has been vital in translating our lab concepts into practical products for electric vehicle fairings.'
      }
    ],
    outcomes: [
      'Substantial monthly stipends for full-time researchers',
      'Full legal and technical assistance during Patent specifications creation',
      'Direct industry-sponsored research pipelines'
    ]
  },
  {
    id: 'core',
    title: 'Centre of Research Excellence (CORE)',
    tagline: 'Strategic Industry-Academia Convergence Platforms',
    description: 'Creating specialized research clusters where corporate organizations and university scholars collaborate to solve actual high-scale challenges.',
    overview: 'CORE builds sustained collaborative groups with multinational and domestic businesses. We set up physical laboratories inside Kumaraguru Institutions focused on target domains like automotive polymer testing and edge computing setups.',
    activities: [
      'Sponsored Research Contracts',
      'Corporate Training Initiatives',
      'Long-term Tech Transfers',
      'Shared Laboratory resources operations'
    ],
    metrics: [
      { label: 'Active Industry Labs', value: '4' },
      { label: 'Funded Research Projects', value: '₹1.2Cr+' },
      { label: 'Corporate Partners', value: '15+' }
    ],
    stories: [
      {
        author: 'Nirmal Gowtham',
        role: 'Tech Lead, Auto-Composites India',
        quote: 'Working with the RÉ CORE framework, we developed light, bio-reinforced components that meet strict functional criteria. The turnaround times and academic rigour are excellent.'
      }
    ],
    outcomes: [
      'Rapid prototype validation and testing pipeline',
      'Paid industrial residency slots for students and faculty',
      'Commercial grade licensing agreements'
    ]
  },
  {
    id: 'reflect',
    title: 'Research Exploration (REFLECT)',
    tagline: 'Sparking Interdisciplinary Synergies',
    description: 'Strategic seed funding allocated to novel exploratory research collaborations bridging diverse branches of science and technology.',
    overview: 'REFLECT rewards bold interdisciplinary research. We fund exciting proposals that combine contrasting fields, such as introducing AI algorithms to Tamil linguistics, or analyzing healthcare outcomes with spatial environmental telemetry.',
    activities: [
      'Annual Exploratory Seed Funding Allocation',
      'Cross-department Ideation Bootcamps',
      'Interdisciplinary research talks and panel setups'
    ],
    metrics: [
      { label: 'Projects Seeded', value: '15' },
      { label: 'Seed Capital Disbursed', value: '₹12L+' },
      { label: 'Departments Involved', value: '8+' }
    ],
    stories: [
      {
        author: 'Dr. S. Dhanalakshmi',
        role: 'Lead Epigraphist, REFLECT Project',
        quote: 'REFLECT gave us the initial seed support to connect historic Dravidian script analysis with vision-science neural networks. Without this support, our OCR registries project wouldn\'t have expanded.'
      }
    ],
    outcomes: [
      'Up to ₹1,50,000 direct exploratory funding check per team',
      'Opportunities to transition into large-scale state research funding proposals',
      'Cross-lab mentoring access'
    ]
  },
  {
    id: 'nfrc',
    title: 'Natural Fibre Research Centre (NFRC)',
    tagline: 'Global Standards in Agricultural Biomaterials',
    description: 'A focused center established to process agricultural materials (coir, banana trunk, pineapple fibre) into fully commercial composite structures.',
    overview: 'NFRC transforms organic waste into valuable industrial components. Backed by state-of-the-art tensile testing, fiber extraction machines, and thermal characterization setups, we pioneer sustainable material substitution.',
    activities: [
      'Farm-residue raw fibre assessment & processing',
      'Bio-resin development and material bonding optimization',
      'Automotive component testing and certifications',
      'Farmer co-operative raw material collection networks'
    ],
    metrics: [
      { label: 'Processed Fibres', value: '8 Types' },
      { label: 'Industry Collaborations', value: '6+' },
      { label: 'Regional Farmers Impacted', value: '300+' }
    ],
    stories: [
      {
        author: 'N. Palanisamy',
        role: 'Agricultural Cooperative Lead',
        quote: 'We used to burn banana pseudostems after harvest, which was an environmental hazard. Today, our co-operative supplies high-grade banana fibers directly to RÉ NFRC, creating secondary livelihood.'
      }
    ],
    outcomes: [
      'Standard physical prototyping for structural vehicle fairings',
      'Sustained supply lines from local agricultural co-operatives',
      'Global publications and ecological impact certifications'
    ]
  },
  {
    id: 'nithilam',
    title: 'Nithilam Heritage Indexing',
    tagline: 'Where Technology Preserves Ancient Memory',
    description: 'A unique heritage digital preservation center, utilizing image processing and epigraphy science to archive and decipher classical South Indian scripts.',
    overview: 'Named after the classical Tamil word for pure pearl, Nithilam catalogs regional cultural records. We focus on in-situ paper-print scanning of ancient stone temples, 3D surface scanning of copper inscriptions, and open machine-learning-friendly digital registries.',
    activities: [
      'Field Epigraphical documentation trips',
      '3D laser mapping of archeological monuments',
      'Optical Character Recognition design and training for ancient scripts',
      'Bilingual translation registries of historical documentation'
    ],
    metrics: [
      { label: 'Deciphered Inscriptions', value: '120+' },
      { label: 'Historical Pages Cataloged', value: '1,500+' },
      { label: 'Trained Machine Models', value: '3' }
    ],
    stories: [
      {
        author: 'Arunmozhi Varman',
        role: 'Student Epigraphist Intern',
        quote: 'Deciphering stone carvings is extremely difficult because they are weathered. At Nithilam, we combine computational visual models with traditional epigraphical methods to read history accurately.'
      }
    ],
    outcomes: [
      'Open-source linguistic and machine training datasets',
      'Bilingual digital archives accessible globally for researchers',
      'Joint field expeditions partnered with archaeological departments'
    ]
  }
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    id: 'career-ra-nlp',
    title: 'Research Assistant — Dravidian NLP & Digitization',
    type: 'Assistantship',
    stipendOrPackage: '₹22,000 - ₹28,000 / month',
    description: 'Join our Nithilam Heritage center to work on modern attention neural architectures for character restoration on damaged regional materials.',
    requirements: [
      'Bachelor’s or Master’s in Computer Science, Information Technology, or Data Science.',
      'Strong proficiency in Python, PyTorch/TensorFlow, and basic Computer Vision libraries.',
      'Strong appreciation or familiarity with historical scripts and epigraphical science is highly valued.'
    ],
    process: [
      'Preliminary evaluation of candidate CV and review of machine learning portfolios on GitHub',
      'A practical remote coding and image model modification test (90 minutes)',
      'Academic panel interview focused on methodology and research writing goals.'
    ],
    deadline: 'July 5, 2026'
  },
  {
    id: 'career-intern-nfrc',
    title: 'Undergraduate Research Intern — Bio-Composite Development',
    type: 'Internship',
    stipendOrPackage: '₹8,000 / month (KREST-subsidized)',
    description: 'Work alongside mechanical science faculty in our Materials Prototyping Lab to chemical treat and fiber-wrap polymer specimens.',
    requirements: [
      'Enrollment in pre-final or final year BE/BTech (Mechanical, Aeronautical, Automobile, or Textile Engineering).',
      'Basic conceptual understanding of material strength, mechanics, and composite material metrics.',
      'Hands-on lab attitude and eagerness to process agricultural fabrics and resins.'
    ],
    process: [
      'Submission of research interest statement detailing curiosity and career direction',
      'In-person basic lab practical test involving chemical compounding or material testing demonstration',
      'Short interview discussing academic alignment.'
    ],
    deadline: 'June 30, 2026'
  },
  {
    id: 'career-faculty-fellow',
    title: 'Postdoctoral Research Fellow — Sustainable Circular Materials',
    type: 'Faculty',
    stipendOrPackage: 'Consolidated competitive pay package up to ₹7.2 Lakhs / annum',
    description: 'Lead research explorations inside the Natural Fibre Research Centre focusing on bio-waste upcycling and commercial polymer composite fabrication.',
    requirements: [
      'PhD in Material Science, Chemistry, Polymeric engineering, or allied mechanical research fields.',
      'At least three published papers in high-quality international journals (Q1/Q2 tier lists).',
      'Demonstrated capacity to write proposals for central and state funding agencies.'
    ],
    process: [
      'Academic CV evaluation by our Board of Advisors',
      'Presentation of past research outcomes and future roadmap to core research cluster',
      'Final discussion with Kumaraguru Institutions scientific leadership board.'
    ],
    deadline: 'August 15, 2026'
  },
  {
    id: 'career-industry-liason',
    title: 'Industry Collaboration Research Executive',
    type: 'Industry',
    stipendOrPackage: 'Commensurate with experience & qualification',
    description: 'Drive high-value technology transfer, sponsored industrial research projects, and corporate alliances across automotive and digital sectors.',
    requirements: [
      'Master’s or MBA with a solid engineering background (Mechanical, Materials, or Electronics).',
      'Minimum of 3 years working in industry-academia technology transfer units, technology incubators, or corporate R&D alliances.',
      'Outstanding communication, legal documentation drafting, and contract closure capacities.'
    ],
    process: [
      'Initial filtering of profiles with verifiable industrial partnerships closed',
      'Case scenario response test analyzing technology licensing agreements',
      'Leadership interaction, evaluating strategic values.'
    ],
    deadline: 'July 20, 2026'
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 'event-icon-2026',
    title: 'ICON 2026 — International Conference on Sustainable Agricultural Materials',
    type: 'Conference',
    date: 'September 18-20, 2026',
    time: '09:00 AM - 05:30 PM (IST)',
    venue: 'Vivekananda Auditorium, Kumaraguru Campus & Live Stream',
    speaker: 'DR. HELENA KÄRKKÄINEN (Aalto University, Finland)',
    description: 'A global stage bringing academic researchers, material scientists, and industrial visionaries together to discuss eco-composite engineering and organic fiber products.',
    agenda: [
      'Keynote Address: Restructuring Agricultural Byproducts for Global Light Transit Industries (Dr. Helena)',
      'Panel Discussion: Replacing Synthetic Composites — Regulatory frameworks, mechanical limits, and cost parameters',
      'Technical Paper presentation sessions (Mechanical, Chemistry, and Industrial Design paths)',
      'Awards Ceremony for top student-explorer prototypes'
    ],
    status: 'upcoming'
  },
  {
    id: 'event-talk-epigraphy',
    title: 'RÉ Research Talk — Computational Epigraphy anddravidian NLP Systems',
    type: 'Talk',
    date: 'June 25, 2026',
    time: '03:00 PM - 04:30 PM (IST)',
    venue: 'Seminar Hall 3, Block B, Kumaraguru Campus',
    speaker: 'PROF. S. SENGUTTUVAN (Archaeology & Heritage Director, State Epigraphical Assembly)',
    description: 'An interactive seminar discussing practical computational approaches towards resolving degraded historical scripts, exploring direct links to regional neural network transcription.',
    agenda: [
      'The Journey of In-situ Paper Prints: Collecting weathered stone script prints (Prof. Senguttuvan)',
      'Computational Visual Processing of stone carving anomalies (Dr. S. Dhanalakshmi)',
      'Open Q&A with student historians and AI engineering cohorts'
    ],
    status: 'upcoming'
  },
  {
    id: 'event-workshop-composites',
    title: 'Practical Hands-on Workshop: Alkali Treatment and Fiber Composite Design',
    type: 'Workshop',
    date: 'April 14, 2026',
    time: '10:00 AM - 04:00 PM',
    venue: 'NFRC Materials Prototyping Laboratory, Block D',
    speaker: 'DR. S. VIGNESH & Lab Technologists',
    description: 'Learners from across departments explored natural banana fiber processing, resin binding, hot-press operational loops, and tensile testing procedures.',
    agenda: [
      'Fibre Extraction: Reclaiming raw agricultural residue',
      'Chemical Scrubbing: Alkali chemical treatment using NaOH Solutions',
      'Molding and Hot pressing composite test plates',
      'Tensile and physical performance testing (UTM)'
    ],
    status: 'past'
  }
];

export const MEMBERS: Member[] = [
  {
    name: 'Dr. S. Dhanalakshmi',
    role: 'Lead Researcher, Nithilam Heritage Centre & Associate Professor',
    designation: 'Department of Computer Applications',
    bio: 'Dedicated to bridging humanity studies with computational sciences, Dr. Dhanalakshmi has cataloged 100+ stone inscriptions and leads our Vatteluttu script AI restoration.',
    publicationsCount: 24
  },
  {
    name: 'Prof. K. Ramesh',
    role: 'Coordinator, Natural Fibre Research Centre & Senior Professor',
    designation: 'Department of Mechanical Engineering',
    bio: 'An expert in polymeric blends and biocomposite materials, Prof. Ramesh works with domestic EV enterprises to scale lightweight bio-composite parts.',
    publicationsCount: 42
  },
  {
    name: 'Dr. Meera Krishnan',
    role: 'Lead Diagnostics Scholar, Biomedical Electronics Wing',
    designation: 'Department of Biotechnology',
    bio: 'Focused on delivering diagnostics tools to local populations, Dr. Krishnan develops affordable screening equipment utilizing localized micro-image classification.',
    publicationsCount: 18
  },
  {
    name: 'Dr. S. Vignesh',
    role: 'Materials Characterization Core Officer & Assistant Professor',
    designation: 'Department of Chemistry',
    bio: 'Dr. Vignesh researches polymer chemistry, raw cellulose cellulose extraction methodologies, and organic starch-based eco-adhesives.',
    publicationsCount: 15
  },
  {
    name: 'Dr. A. Karthikeyan',
    role: 'Lead Scholar, High-Performance AI Research Hub',
    designation: 'Department of Artificial Intelligence & Data Science',
    bio: 'Dr. Karthikeyan specializes in edge-optimized deep learning models, real-time spatial analysis, and localized digital grids.',
    publicationsCount: 31
  }
];

import {
  ResearchDomain,
  ResearchProject,
  ScholarProfile,
  FacultyProfile,
  AlumniProfile,
  InsightArticle,
  ResearchOpportunity,
  ResearchDataset,
  StartupPortfolio,
  KRESTMilestone
} from '../types';

export const researchDomains: ResearchDomain[] = [
  {
    id: 'ai-ds',
    name: 'Artificial Intelligence & Data Science',
    title: 'Cognitive Computing & Regional AI Systems',
    description: 'Decentralized architectures, Dravidian Natural Language Processing, and localized computer vision.',
    longDescription: 'Our AI & Data Science domain focuses on expanding the frontiers of automated cognition with localized impact. By engineering custom neural net models for Low-Resource Regional Languages, building precision vision pipelines for rural agriculture, and modeling municipal traffic flows in Coimbatore, we ground cutting-edge theory in real-world environments.',
    icon: 'Brain',
    color: '#4285F4',
    bgGradient: 'from-blue-50 to-indigo-50 border-blue-100',
    metrics: {
      projectsCount: 14,
      publicationsCount: 22,
      scholarsCount: 45,
      funding: '₹1.2 Cr'
    },
    keyTopics: ['Dravidian NLP', 'Edge Machine Learning', 'Agritech Vision Networks', 'Drones & Spatial Intel'],
    labs: ['RÉ Cognitive Systems Studio', 'Kumaraguru High-Performance Computing Lab']
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    title: 'Circular Systems & Resource Reclamation',
    description: 'Municipal waste bio-reactors, decentralized rainwater capture, and smart grid optimization.',
    longDescription: 'Positioned in the Western Ghats region of South India, this domain pioneers circular resource workflows. We combine bioscience and mechanical engineering to create low-cost water recovery systems for industrial clusters and develop decentralized clean-energy storage options for agricultural farms.',
    icon: 'Leaf',
    color: '#34A853',
    bgGradient: 'from-emerald-50 to-green-50 border-emerald-100',
    metrics: {
      projectsCount: 11,
      publicationsCount: 16,
      scholarsCount: 38,
      funding: '₹85 Lakhs'
    },
    keyTopics: ['Decentralized Rainwater Harvesting', 'Bio-methanation Micro-Plants', 'Smart-Grid Architectures', 'Urban Heat Island Analytics'],
    labs: ['EcoSystemic Engineering Facility', 'Bio-Reclamation Wet Lab']
  },
  {
    id: 'natural-fibres',
    name: 'Natural Fibres & Composites',
    title: 'The Natural Fibres Research Centre (NFRC)',
    description: 'Engineering high-performance structural materials from agricultural waste biomass.',
    longDescription: 'Coimbatore is surrounded by vast coconut, banana, and pineapple cultivation hubs. NFRC leads the world in extracting cellulose and lignified fibres from agricultural waste, converting them into automotive interior composites, soundproofing acoustics panels, and biodegradable packaging.',
    icon: 'Cpu',
    color: '#FBBC05',
    bgGradient: 'from-amber-50 to-yellow-50 border-amber-100',
    metrics: {
      projectsCount: 12,
      publicationsCount: 24,
      scholarsCount: 41,
      funding: '₹1.5 Cr'
    },
    keyTopics: ['Pineapple Leaf Fibre (PALF) Composites', 'Banana Pseudo-Stem Decortication', 'Hybrid Biopolymers', 'Natural Acoustic Sheathing'],
    labs: ['NFRC High-Tensile Compounding Lab', 'Biomaterial Processing Yard']
  },
  {
    id: 'healthcare',
    name: 'Healthcare Innovation',
    title: 'MedTech & Responsive Biokinetic Interfaces',
    description: 'Low-cost kinetic orthotics, connected wearable biosensors, and preventative diagnostics.',
    longDescription: 'Bringing clinical engineering out of high-cost hospitals and into the community. We build smart, telemetry-driven hand orthotics for stroke rehabilitation, wearable non-invasive blood glucose alerts, and computerized audiology diagnostics for rural health outreach camps.',
    icon: 'Activity',
    color: '#EA4335',
    bgGradient: 'from-rose-50 to-red-50 border-rose-100',
    metrics: {
      projectsCount: 9,
      publicationsCount: 15,
      scholarsCount: 29,
      funding: '₹95 Lakhs'
    },
    keyTopics: ['Kinetic Orthotic Splints', 'IoT Wearable Biosensors', 'Acoustic Audiology Frameworks', 'Rural Medical Diagnostic Kits'],
    labs: ['Bio-Kinetic Interfaces Laboratory', ' Kumaraguru Assistive Systems Hub']
  },
  {
    id: 'social-innovation',
    name: 'Social Innovation',
    title: 'Participatory Design & Local Action Networks',
    description: 'Co-designing high-impact physical tools and systems with and for local artisans and labor.',
    longDescription: 'Social Innovation is our commitment to absolute equity in research. Rather than top-down tech, we use participatory action frameworks to co-design customized loom-assist devices for weavers standardizing outputs in Sirumugai, ergonomics rigs for stone carvers, and modular streetcart cooling systems.',
    icon: 'Users',
    color: '#8A3FFC',
    bgGradient: 'from-purple-50 to-fuchsia-50 border-purple-100',
    metrics: {
      projectsCount: 8,
      publicationsCount: 11,
      scholarsCount: 26,
      funding: '₹60 Lakhs'
    },
    keyTopics: ['Artisan Ergonomics', 'Weaving Loom Assist Mechanisms', 'Informal Waste-Picker Safety Systems', 'Local Governance Data Pods'],
    labs: ['REFLECT Social Design Sandbox', 'Kumaraguru Rural Empathy Lab']
  },
  {
    id: 'heritage-culture',
    name: 'Heritage & Culture',
    title: 'Computational Humanities & Archaeological Digitization',
    description: 'Preserving and analyzing regional South Indian architectural acoustics, epigraphy, and history.',
    longDescription: 'Managed under our flagship Nithilam initiative, we apply computational physics and digital humanities to Tamil Nadu\'s rich lineage. Our research spans acoustic simulation of historical stone temples, deep learning classifiers for medieval Chola-era epigraphs, and multispectral analysis of palm-leaf manuscripts.',
    icon: 'Shield',
    color: '#FF7D00',
    bgGradient: 'from-orange-50 to-amber-50 border-orange-100',
    metrics: {
      projectsCount: 6,
      publicationsCount: 8,
      scholarsCount: 15,
      funding: '₹40 Lakhs'
    },
    keyTopics: ['Kovil Acoustic Profiling', 'Grantha & Vatteluttu OCR Systems', '3D Digital Laser Conservancies', 'South Indian Metallurgical Lineage'],
    labs: ['Nithilam Archaeo-Physics Lab', 'Digital Epigraphy Archival Centre']
  },
  {
    id: 'materials-science',
    name: 'Materials Science',
    title: 'Functional Nano-Coatings & Advanced Thin Films',
    description: 'Phase-change cooling textiles, hydrophobic agricultural shields, and sustainable polymers.',
    longDescription: 'Synthesizing novel, high-functional materials from abundant eco-substrates. We engineer thin-film coatings for solar absorbers, organic hydrophobic coatings for farm storage, and smart thermal materials that respond dynamically to relative humidity changes.',
    icon: 'Lightbulb',
    color: '#00B4D8',
    bgGradient: 'from-cyan-50 to-blue-50 border-cyan-100',
    metrics: {
      projectsCount: 10,
      publicationsCount: 18,
      scholarsCount: 30,
      funding: '₹1.1 Cr'
    },
    keyTopics: ['Superhydrophobic Surfaces', 'Organic Thin-Film Solar Cells', 'Phase Change Textiles', 'Graphene-Bio Hybrid Polymer Reinforcements'],
    labs: ['Advanced Nano-Materials Fabrication Suite', 'Kumaraguru Polymer Characterization Lab']
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technologies',
    title: 'Future Systems & Drone-Aided Networks',
    description: 'Swarm drone logistics, sub-Ghz rural connectivity modules, and spatial virtualization.',
    longDescription: 'A playground for pre-market disruption. Our Emerging Tech cohort researches cross-platform drone swarms that coordinate spatial tasks automatically, long-range decentralized networks (LoRaWAN) for irrigation nodes, and mixed-reality spatial maps of educational ecosystems.',
    icon: 'Sparkles',
    color: '#1A1D20',
    bgGradient: 'from-slate-50 to-neutral-100 border-slate-200',
    metrics: {
      projectsCount: 7,
      publicationsCount: 10,
      scholarsCount: 22,
      funding: '₹75 Lakhs'
    },
    keyTopics: ['Swarm Robotics Coordinators', 'Sub-GHz Narrowband Open Networks', 'Urban Mixed-Reality Twins', 'Flexible Perovskite Solar Modules'],
    labs: ['Emerging Systems Sandbox', 'Drone Testing Field']
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: 'tamil-epigraphy-ocr',
    domainId: 'heritage-culture',
    title: 'AI-Powered Tamil Epigraphy & Vatteluttu Translation',
    tagline: 'Deep learning classifiers for 8th-century stone carvings and low-resolution epigraphs.',
    status: 'Active',
    investigator: 'Dr. S. Ramakrishnan',
    scholars: ['Anirudh Srinivasan', 'Meera Jayakumar'],
    overview: 'Centuries of historical records across Tamil Nadu temples are carved in Vatteluttu and early archetypal Tamil scripts, hidden from general public reading. Our project utilizes advanced transformer-based vision architectures to classify and transcribe low-contrast rock rubbings, translating classical epigraphy into contemporary modern Tamil typography and English.',
    problem: 'Stone inscriptions are compromised by structural degradation, erosion, and poor ambient lighting. Ordinary optical character recognition (OCR) fails because characters lack structured typographic baselines and are deeply inconsistent across stone faces.',
    approach: 'We train a localized Vision Transformer (ViT) by cropping glyph lines, normalizing rock shadows, and synthesizing a corpus of historical Tamil letters with noise augmentation. By capturing the unique structural ligatures of Vatteluttu, we map historical glyph sequences directly to modern unicode characters.',
    methodology: '1. Multispectral imagery acquisition in Kongu region temple complexes. 2. Edge-contour extraction using customized Gabor filters. 3. Fine-tuned Vision-Encoder-Decoder models to output transliterations with confidence levels. 4. Validation via archeological epigraph lists.',
    impact: 'Catalyzed the digital registry of over 140 previously untranslated rock inscriptions in Western Tamil Nadu, allowing international computational historians to index local agricultural trade treaties from the 9th century.',
    gallery: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=600'
    ],
    publications: ['TRANS-TACL 2025: Ancient Dravidian Vision Transformer Models', 'IJCH 2024: Computational Mapping of Chola Rock Declarations'],
    datasets: ['Tamil Epigraphic Inscriptions Dataset v1.2'],
    relatedProjects: ['historical-script-ocr', 'acoustics-kovil']
  },
  {
    id: 'ananas-tex-composite',
    domainId: 'natural-fibres',
    title: 'Ananas-Tex: High-Performance Pineapple Leaf Fibre Composites',
    tagline: 'Transforming agricultural pineapple crown discard into functional automotive composite panels.',
    status: 'Translational',
    investigator: 'Prof. R. Baskaran',
    scholars: ['Siddharth Venkat', 'Abinaya Sundar'],
    overview: 'Agriculture-intensive regions surrounding Coimbatore produce vast quantities of pineapple waste. This project extracts Cellulose Nanofibrils from PALF (Pineapple Leaf Fibre) and bonds them with sustainable bio-resins, manufacturing biodegradable, high-tensile parts suitable for automobiles.',
    problem: 'Fossil-fuel based plastic interior panels generate significant lifecycle footprint in automotive manufacturing. Prior attempts to use bio-materials suffered from high moisture absorption, structural decay, and poor flame retardancy.',
    approach: 'Our team engineered an eco-friendly alkali-silanization chemical wash process that alters PALF surface morphology, reducing moisture absorbency while enhancing adhesion with bio-epoxies. We reinforced this composite with nano-silica derived from rice husk ash to achieve V-0 rating in UL-94 fire testing.',
    methodology: 'Mechanical stripping of leaves using NFRC proprietary decorticators. Silane-coupling modification, compression molding of natural matting at 160°C under 12 MPa pressure. Evaluated structural integrity using ASTM standards for tensile and flexural testing.',
    impact: 'Designed and produced structural dashboard panel prototypes for commercial electrical vehicles, resulting in a 40% reduction in weight compared to ABS plastics while saving ₹18 per unit in feedstock costs.',
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600'
    ],
    publications: ['JCM 2025: Functionalized PALF Automotive Insulating Fabrics', 'NF-TECH 2024: Mechanical Sizing of Pineapple Bioresins'],
    datasets: ['Ananas-Tex Tensile Strength Experiments'],
    relatedProjects: ['banana-stem-biowaste', 'hydrophobic-films']
  },
  {
    id: 'stroke-kinetics-wearable',
    domainId: 'healthcare',
    title: 'BioKinetic: Telemetry-Driven Hand Orthotics for Rehabilitation',
    tagline: 'Connected hand-recovery gloves analyzing electromyographical muscle triggers for post-stroke patients.',
    status: 'Translational',
    investigator: 'Dr. Preetha Chandran',
    scholars: ['Karthik Raja', 'Deepak Vignesh'],
    overview: 'Post-stroke motor rehabilitation takes months of precise physiotherapy. This prototype uses low-cost custom flex sensors and tactile feedback actuators within an orthotic skeleton glove, providing live analytics to physical healers while guiding hand grasp recovery.',
    problem: 'Sustained neurological therapies are severely restricted by high rehabilitation costs and geographical separation from city clinics. Patients frequently abandon recovery plans due to lack of immediate qualitative feedback.',
    approach: 'We developed BioKinetic, an active glove that integrates low-power flex parameters with muscle-activity (EMG) signals on the forearm. If a user intends to make a fist (indicated by forearm EMG) but lacks hand strength, a series of micro-stepper motors gently contract synthetic tendons, training motor pathways.',
    methodology: '3D printed custom wrist stabilizers based on patient biometric scans. Integrated ESP32-S3 microcontroller, dual-channel surface EMG pads, and precise tendon-routing cables. Developed Android BLE software visualizing motion progress with Gamified routines.',
    impact: 'Deployed across 4 rural health kiosks in Coimbatore blocks. Enrolled 38 patients showing standard 1.8x faster retrieval of independent hand grasps in comparison to control groups undergoing conventional target stretching.',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?auto=format&fit=crop&q=80&w=600'
    ],
    publications: ['IEEE-TBME 2025: Sensor-Fused Intention Orthotics for Post-Stroke Grasping', 'MedTech-S 2024: Edge-Assisted Kinematic Gloves'],
    datasets: ['EMG-Flex Post-Stroke Grip Database'],
    relatedProjects: ['agritech-vision', 'urban-traffic-ai']
  },
  {
    id: 'kovil-acoustic-arch',
    domainId: 'heritage-culture',
    title: 'Acoustic Profiling of Ancient Temple Assemblies',
    tagline: 'Mapping physical resonance and dispersion in millennia-old architectural stone monoliths.',
    status: 'Completed',
    investigator: 'Dr. S. Ramakrishnan',
    scholars: ['Divya Bharathi', 'Varun Karthik'],
    overview: 'Famous Chola and Pandya stone temples contain pillared halls displaying amazing reverberant properties and vocal clarity without modern audio installations. This research profiles these chambers using computational wave models, revealing old artisan sound secrets.',
    problem: 'Historical architectural structures are undergoing quiet decay. Without systematic physical acoustic recordings, our understanding of ancient structural engineering for mass performance acoustics will be lost.',
    approach: 'We deployed Class-I acoustic impulse sensors to capture sweep echoes in stone halls. We reconstructed multi-column layouts into CAD models inside ray-tracing software to locate structural acoustic filters, resonance cavities, and reflection curves.',
    methodology: 'Impulse dispersion analysis using high-frequency omnidirectional microphones. 3-Dimensional architectural laser mapping. Computed acoustic indices: Clarity ($C_{50}$), Definition ($D_{50}$), and Reverberation Time ($T_{30}$).',
    impact: 'Determined that temple columns act as tuned spatial acoustic scattering arrays, dispersing low frequencies to retain clear high-frequency vocal clarity. Findings are sharing with architectural conservationists.',
    gallery: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600'
    ],
    publications: ['JASA 2024: Acoustic Scattering in Dravidian Stone Architectural Assemblies'],
    datasets: [],
    relatedProjects: ['tamil-epigraphy-ocr']
  },
  {
    id: 'sirumugai-loom-assist',
    domainId: 'social-innovation',
    title: 'Precision Loom Assist for Handloom Silk Weavers',
    tagline: 'Retrofitting pneumatic actuators to traditional handlooms for strain reduction and precision weaving.',
    status: 'Active',
    investigator: 'Prof. M. Saravana Kumar',
    scholars: ['Suresh Kumar', 'Yazhini Elango'],
    overview: 'The Sirumugai silk weaving cluster suffers from severe labor shortage and occupational spinal strain of artisans who operate heavy manual jacquard punchcard pedals. Our project retrofits a smart electronic pneumatic footrest that acts as a power-steering system for looms, keeping pure-handloom integrity intact.',
    problem: 'Pedaling structural jacquard looms requires over 180 N of continuous leg compression, leading to chronic osteoarthritis in weaver communities, triggering youth abandonment of this heritage art form.',
    approach: 'We designed a low-voltage pneumatic assist cylinder controlled by capacitive force pads. When the weaver makes a slight 5 N press on the foot treadle, pressure sensors trigger a proportional pneumatic stroke, effortlessly lifting the heavy 40kg pattern frame.',
    methodology: '1. Ergonomics-mapping of manual weavers. 2. Design of closed pneumatic system using silent compressors. 3. Proportional pressure-regulator tuning. 4. Deployed trial runs under strict weaving guild scrutiny.',
    impact: 'Installed 12 operational assist kits in Sirumugai weaving co-ops. Increased daily production speed by 25% while decreasing reported weaver lower-back strain metrics by 70%.',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    ],
    publications: ['IJDEM 2025: Co-designed Pneumatic Looms: Ergonomics of South Indian Weavers'],
    datasets: ['Weaver Ergonomics Muscle Strain Logs'],
    relatedProjects: ['ananas-tex-composite']
  }
];

export const scholarProfiles: ScholarProfile[] = [
  {
    id: 'anirudh-srinivasan',
    name: 'Anirudh Srinivasan',
    role: 'KREST Fellow',
    year: 'Final Year, CSE',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
    bio: 'Deeply fascinated by historical computational systems. Anirudh joined RÉ in his second year to apply modern neural networks to classical epigraphy, combining his love for language and artificial intelligence.',
    interests: ['Optical Character Recognition', 'Vision Transformers', 'Classical Tamil Linguistics'],
    projects: ['tamil-epigraphy-ocr'],
    achievements: ['Won Top Scholar Award at Kumaraguru Research Day 2024', 'Co-authored paper in TRANS-TACL'],
    journey: 'Starting as a curious freshman in computer science, Anirudh was selected for the Kumaraguru Research Fellowship Scheme (KREST). Guided by Dr. Ramakrishnan, he spent weekends photographing inscriptions at medieval temple sites, bridging field exploration with deep model tuning.',
    skills: ['PyTorch', 'Hugging Face Transformers', 'Computer Vision', 'Ancient Epigraphic Formats'],
    gallery: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400']
  },
  {
    id: 'abinaya-sundar',
    name: 'Abinaya Sundar',
    role: 'Research Assistant',
    year: 'Graduate Scholar',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    bio: 'Abinaya focuses on sustainable polymers and high-performance composites. She spearheads mechanical testing and sizing treatments at NFRC, creating structural items from local agricultural discards.',
    interests: ['Natural Fibre Extraction', 'Bio-Resin Synthesis', 'Dynamic Mechanical Analysis'],
    projects: ['ananas-tex-composite'],
    achievements: ['Awarded INAE Student Grant 2024', 'Successfully filed provisional patent for PALF sizing agent'],
    journey: 'Joined NFRC as a sophomore. Under the mentorship of Prof. Baskaran, Abinaya pioneered the development of natural silanization washes that improved moisture resilience of natural fibres. Her research is now being translated into industrial prototypes.',
    skills: ['Material Characterization', 'Tensile Modulus Testing', 'Differential Scanning Calorimetry', 'CAD/SolidWorks'],
    gallery: ['https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=400']
  },
  {
    id: 'karthik-raja',
    name: 'Karthik Raja',
    role: 'KREST Fellow',
    year: 'Third Year, Mechatronics',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    bio: 'Merging biology and kinetic engineering, Karthik designs mechanical hand systems that restore movement to stroke-affected survivors using connected electronic skeletal controllers.',
    interests: ['Bio-Mechatronics', 'Embedded Firmware', 'Rehabilitation Control Systems'],
    projects: ['stroke-kinetics-wearable'],
    achievements: ['Secured First Place at Coimbatore District Innovation Hackathon', 'Built rehabilitation test setups at Coimbatore Medical Hospital'],
    journey: 'Karthik spent his initial year building standard remote-controlled rovers. Recognizing the potential of robotic exoskeletons to change lives, he proposed KREST \'BioKinetic\', receiving seed funding to manufacture orthotic stabilizer gloves.',
    skills: ['C++', 'Microcontroller Interfaces', '3D Bioprinting', 'Kinematic Loop Tuning'],
    gallery: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400']
  }
];

export const facultyProfiles: FacultyProfile[] = [
  {
    id: 'ramakrishnan-s',
    name: 'Dr. S. Ramakrishnan',
    designation: 'Professor & Head',
    department: 'Computer Science & Humanities Research',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    bio: 'With over two decades of research experience, Dr. Ramakrishnan advocates for Computational Humanities, guiding a group of engineers and archeologists applying Deep Learning to secure regional historical records.',
    interests: ['Computer Vision', 'Computational Linguistics', 'Temple Archaeology', 'Signal Processing'],
    projects: ['tamil-epigraphy-ocr', 'kovil-acoustic-arch'],
    publications: ['Ancient Dravidian Vision-Transformers, TACL 2025', 'Acoustic Scattering in Dravidian Stone Temples, JASA 2024'],
    achievements: ['Recipient of AICTE Visvesvaraya Best Teacher Award', 'Secured ₹45 Lakhs central research grants for Computational Epigraphy'],
    hIndex: 28,
    citations: 3412,
    availability: 'Accepting Scholars',
    email: 'ramakrishnan.s@kct.ac.in'
  },
  {
    id: 'baskaran-r',
    name: 'Prof. R. Baskaran',
    designation: 'Director, NFRC',
    department: 'Textiles and Material Science',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150',
    bio: 'Prof. Baskaran established the Natural Fibre Research Centre (NFRC) at Kumaraguru, bridging rural agricultural processing with polymer composite sciences. He consults for top-tier Indian automotive manufacturers.',
    interests: ['Sustainable Polymers', 'Bio-Composites', 'Dynamic Natural Sizing', 'Agricultural Extruders'],
    projects: ['ananas-tex-composite'],
    publications: ['PALF Automotive Sound Isolating Fibres, JCM 2025', 'Bio-Epoxy Compounding of Local Discards, PolymTech 2024'],
    achievements: ['Developed 4 commercial industrial bio-composite patent structures', 'Established state-funded high-tensile characterization labs'],
    hIndex: 32,
    citations: 4520,
    availability: 'Accepting Scholars',
    email: 'baskaran.r@kct.ac.in'
  },
  {
    id: 'preetha-c',
    name: 'Dr. Preetha Chandran',
    designation: 'Associate Professor',
    department: 'Mechatronics & Assistive Technology',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    bio: 'Dr. Preetha leads the Bio-Kinetic rehabilitation labs, engineering wearable sensors and muscle interface microelectronics that make motor recovery therapies accessible to rural sectors.',
    interests: ['Bio-Signal Processing', 'Wearable Medical Monitors', 'Intention-Driven Rehabilitation'],
    projects: ['stroke-kinetics-wearable'],
    publications: ['Grip Exoskeletons Using Electromyographical Intention, IEEE 2025'],
    achievements: ['Received DST-BIRAC Innovation Grand Grant 2024', 'Deployed 4 bio-kinetic testbeds at rural healthcare blocks'],
    hIndex: 19,
    citations: 1890,
    availability: 'Accepting Scholars',
    email: 'preetha.c@kct.ac.in'
  }
];

export const alumniProfiles: AlumniProfile[] = [
  {
    id: 'sudharshan-m3',
    name: 'Sudharshan Murugesan',
    batch: 'Class of 2022',
    program: 'KREST Alumnus',
    currentCompany: 'BMW Group',
    currentRole: 'Cell Materials Specialist',
    location: 'Munich, Germany',
    coordinates: [48.1351, 11.582],
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&q=80&w=150',
    testimonial: 'RÉ was the birthplace of my research direction. Long nights at the NFRC testing chemical washes taught me how to tackle real engineering roadblocks, taking me from local agricultural waste to modern EV cell materials research.',
    contribution: 'Donates to the Kumaraguru Student Innovation Fund and mentors 2 active organic thin-film projects every year.'
  },
  {
    id: 'swathi-k',
    name: 'Swathi Karunakaran',
    batch: 'Class of 2021',
    program: 'KRIP Intern & Fellow',
    currentCompany: 'Stanford University',
    currentRole: 'PhD Candidate, AI Lab',
    location: 'San Francisco, USA',
    coordinates: [37.7749, -122.4194],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    testimonial: 'At RÉ, I worked on Dravidian OCR when everyone else was doing standard English datasets. That foundational rigor in computational linguistics opened doors for my PhD journey in Low-Resource Linguistic Models.',
    contribution: 'Delivers remote guest modules on Transformer Fine-Tuning for KREST Scholars.'
  },
  {
    id: 'naveen-kumar',
    name: 'Naveen Kumar Siva',
    batch: 'Class of 2020',
    program: 'CORE Alumni Scholar',
    currentCompany: 'IncoFibre Technologies',
    currentRole: 'Co-Founder & CEO',
    location: 'Bengaluru, India',
    coordinates: [12.9716, 77.5946],
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    testimonial: 'NFRC didn\'t just let me publish papers; it let me build real extrusion prototypes. We took that exact structural knowledge to spin off IncoFibre, a startup now manufacturing compostable parcel sleeves.',
    contribution: 'Collaborates with Kumaraguru Startup Hub to offer internships for 4 new students each year.'
  }
];

export const insightArticles: InsightArticle[] = [
  {
    id: 'future-natural-composites',
    title: 'Cellulose and Circular Architectures: Designing Out Automotive Plastic',
    category: 'Research Spotlight',
    author: 'Prof. R. Baskaran',
    authorRole: 'Director, Natural Fibres Research Centre (NFRC)',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
    date: 'May 12, 2026',
    readTime: '6 min read',
    summary: 'How functional sizing of agricultural leaf fibres transforms discarded biomass into structural automotive panels that challenge conventional petroleum-based ABS polymers.',
    content: [
      'The modern automobile is a marvel of kinetic transport, yet its interior remains clogged with petroleum polymer derivatives that take five centuries to decay. Structural plastic dashboards, side panelings, and pillar covers generate immense carbon footprints at manufacturing scales.',
      'Our team at the Natural Fibres Research Centre (NFRC) set out to investigate agricultural waste as a scalable alternative. Coimbatore is flanked by vast coconut, banana, and pineapple plantations. These hubs produce millions of tons of lignocellulosic biomass that farmers routinely burn, creating smoke pollution.',
      'By developing a green chemical silanization wash, we modified the exterior cellulose fibres of Pineapple Leaves (PALF). This treatment creates strong physical cross-linking with plant-based epoxies, making the resulting composite highly resistant to water absorptions.',
      'In cooperation with organic nano-silica derived from rice husks, our green composites achieved superior fire resistance, matching stringent UL-94 specifications for interior commercial elements. This proves that natural composites are ready for standard production lines, changing the automotive circular economy.'
    ],
    tags: ['Circular Economy', 'Natural Composites', 'Automotive Bioresins', 'Materials Engineering'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'deciphering-stone-scripts',
    title: 'Neural Networks in Granite: Applying Vision Transformers to Ancient Temple Inscriptions',
    category: 'Scholar Voice',
    author: 'Anirudh Srinivasan',
    authorRole: 'KREST Fellow, Computer Science',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100',
    date: 'April 28, 2026',
    readTime: '5 min read',
    summary: 'A first-hand chronicle of utilizing localized neural architectures to classify and segment deteriorated medieval rock engravings in the temple complexes of Western Tamil Nadu.',
    content: [
      'Standing inside the centuries-old Avinashi temple complex, holding a high-resolution camera, I stared at a sandstone pillar covered in worn 9th-century Vatteluttu letters. Over a thousand years of wind, rain, and local human footsteps had smoothed the rock surface, leaving shallow, low-contrast shadows.',
      'As a computer science student, I quickly realized standard text scanner apps are completely useless here. Historical rock glyphs are deeply uneven, lack a straight baseline structure, and vary according to the stone artist who carved them centuries ago.',
      'This realization led to my KREST research fellowship project. Under Dr. S. Ramakrishnan, we started looking at advanced Vision Transformers (ViT). Instead of treating characters as single isolated boxes, we fed complete inscription lines into model encoders, allowing the neural net to leverage linguistic context.',
      'After months of training on the Tamil Epigraphic Inscriptions Dataset, our model successfully achieved a transcribing accuracy of 89.4%. Reading these stones does not just yield academic dates; it shows us real records of localized water treaties, tax exemptions, and agricultural distribution systems from a thousand years ago.'
    ],
    tags: ['AI Humanities', 'Dravidian OCR', 'Transformers', 'Epigraphy'],
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=800'
  }
];

export const researchOpportunities: ResearchOpportunity[] = [
  {
    id: 'opp-krest-ai',
    title: 'Vision-Language Transformers for Low-Resource Epigraphy',
    type: 'Research Assistantship',
    program: 'KREST',
    domain: 'Artificial Intelligence / Heritage & Culture',
    mentor: 'Dr. S. Ramakrishnan',
    compensation: '₹12,000 / month Fellowship stipend + Conference support',
    deadline: 'July 15, 2026',
    description: 'We are seeking 2 highly motivated student researchers to join the Nithilam computational history project. The candidates will work on implementing multilingual multimodal language models (MMLMs) to transcribe rock rubbings directly into historical text representations.',
    requirements: [
      'Strong foundations in PyTorch, neural net architectures, and digital image processing.',
      'Conversational familiarity with modern Tamil and basic understanding of historical South Indian script changes.',
      'Willingness to join weekend archaeological field collection drives.'
    ],
    objectives: [
      'Synthesize high-fidelity augmented rock carvings training datasets.',
      'Fine-tune an open-weight Vision Encoder Decoder system (e.g., PaliGemma / Donut architectures).',
      'Publish results in peer-reviewed Computational Humanities journals.'
    ],
    applyLink: '#join'
  },
  {
    id: 'opp-nfrc-composites',
    title: 'Sizing Chemical Modification of Coconut Coir for Acoustic Panels',
    type: 'Open Project',
    program: 'KRIP',
    domain: 'Natural Fibres & Composites',
    mentor: 'Prof. R. Baskaran',
    compensation: '₹8,000 / month internship subsidy',
    deadline: 'June 30, 2026',
    description: 'NFRC is offering an intensive hands-on project exploring chemical modifications on raw coconut coir using green silane alternatives. The goal is to maximize sound absorption metrics for architectural panels.',
    requirements: [
      'Undergoing undergraduate training in Chemistry, Polymer Engineering, or Textile Technology.',
      'Prior exposure to wet laboratory safety protocols.',
      'Familiarity with acoustic impedance tube measurement steps.'
    ],
    objectives: [
      'Extract lignin-rich coir fibers and treat them with non-toxic silane compounds.',
      'Validate sound dispersal ratings across different polymer densities.',
      'Fabricate full-scale structural acoustic insulation samples for testing.'
    ],
    applyLink: '#join'
  },
  {
    id: 'opp-biokinetic-iot',
    title: 'Low-Power EMG Signal Processing on Dual-Core RISC-V',
    type: 'Industry Challenge',
    program: 'CORE',
    domain: 'Healthcare Innovation / Emerging Tech',
    mentor: 'Dr. Preetha Chandran',
    compensation: '₹15,000 absolute project award + component budget support',
    deadline: 'July 10, 2026',
    description: 'An industry collaboration project with BioKinetic Wear to optimize real-time digital filtering of raw muscle electromyography signals on affordable RISC-V dual-core chips without draining wearable battery systems.',
    requirements: [
      'Demonstrable knowledge of digital signal filter configurations (IIR, FIR, Kalman filters).',
      'Expertise in embedded firmware development using FreeRTOS or native ESP-IDF.',
      'Knowledge of biomechanical gait signal structures.'
    ],
    objectives: [
      'Configure localized digital noise filters for 50Hz electrical hum suppression.',
      'Program an active interrupt loop based on deliberate muscle signal thresholds.',
      'Integrate Bluetooth telemetry data streams without dropping sampling rates.'
    ],
    applyLink: '#join'
  }
];

export const researchDatasets: ResearchDataset[] = [
  {
    id: 'tamil-epigraphic-v1',
    title: 'Tamil Epigraphic Inscriptions Dataset v1.2',
    domain: 'Heritage & Culture / Artificial Intelligence',
    version: '1.2 (Revised)',
    size: '14.8 GB',
    downloads: 342,
    description: 'A curated dataset of 8,500 multispectral, localized images of medieval stone inscriptions collected across temple structures in Coimbatore, Erode, and Tiruppur, with expert-verified translations.',
    metadata: {
      'Image Format': 'Uncompressed TIFF (16-bit) and JPEG',
      'Annotation Style': 'Unicode Text translations, character-level bounding arrays',
      'Historical Span': '7th Century CE to 14th Century CE',
      'Geographical Coordinates': 'Kongu Region, South India'
    },
    sampleData: 'Row 0014: \nImage: "INSC_0014_RAW.TIFF" \nBoundingBoxes: [ [120,450,150,480,"vatteluttu_A"], [155,450,180,480,"vatteluttu_KA"] ] \nTranscription: "à®…à®™à¯ à®•à®©à¯ à®…à®¤à®¿à®•à®¾à®° à®šà®ªà¯ˆà®¯à¯‹à®®à¯ " (The regional governing assembly hereby declares...)',
    usageExample: '```python\nimport torch\nfrom datasets import load_dataset\n\n# Load the Dravidian ancient epigraphy corpus\ndataset = load_dataset("kumaraguru-re/tamil-epigraphy-v12")\nprint(dataset["train"][0]["transcription"])\n```',
    license: 'CC BY-NC-SA 4.0 (Creative Commons Non-Commercial Share-Alike)'
  },
  {
    id: 'ananas-tex-tensile',
    title: 'Ananas-Tex Tensile Strength Experiments',
    domain: 'Natural Fibres & Composites',
    version: '2.0',
    size: '42.5 MB',
    downloads: 189,
    description: 'Raw stress-strain data logs of 120 testing sequences analyzing silane-sizing treatments on Pineapple Leaf Fibres (PALF) mixed with bio-epoxy resins under environmental moisture changes.',
    metadata: {
      'Measurement Standards': 'ASTM D3039 (Tensile properties), ASTM D790 (Flexural testing)',
      'Resin Base': 'Eco-epoxy (40% recycled plant carbon substrate)',
      'Fibre Weight Fractions': '15%, 20%, 25%, 30%, 35%',
      'Curing Profile': '160 degrees C compression cure at variable pressures'
    },
    sampleData: 'Sample_ID,Fibre_Pct,Silane_Wash_Sec,Tensile_Strength_MPa,Elastic_Modulus_GPa,Moisture_Gain_Pct\nPALF_042,25,300,84.2,4.8,1.2\nPALF_043,25,300,86.5,4.9,1.1\nPALF_044,30,300,92.1,5.2,1.4',
    usageExample: '```r\n# Plot Stress-Strain curve across different chemical washing timings\nlibrary(ggplot2)\npalf_data <- read.csv("ananas_tex_tensile_v2.csv")\nggplot(palf_data, aes(x=Fibre_Pct, y=Tensile_Strength_MPa, color=factor(Silane_Wash_Sec))) + geom_point() + geom_smooth()\n```',
    license: 'ODbL 1.0 (Open Database License)'
  }
];

export const startupPortfolio: StartupPortfolio[] = [
  {
    id: 'nf-composites',
    name: 'NFRC Composites Ltd.',
    tagline: 'Compostable packaging sleeves and architectural acoustics panels from agro-fibre.',
    founders: ['Naveen Kumar Siva', 'Prof. R. Baskaran'],
    domains: ['Natural Fibres & Composites', 'Sustainability'],
    description: 'NFRC Composites commercializes patented cellulose compounding machinery developed inside the Natural Fibre Research Centre. They supply customized biodegradable shock-absorbing sleeves for consumer electronics shipping, replacing traditional expanded polystyrene (Styrofoam).',
    journey: 'Born as a 2021 KREST research project, Naveen proved that long coir fibers could be extruded using agricultural waste machines. Supported by the Kumaraguru Startup Incubator, they designed a pilot manufacturing unit that now processes 3 tons of agricultural discard daily.',
    impactMetrics: {
      'Plastics Displaced': '12 Tons of expanded polystyrene replaced in 2025',
      'Surrounding Farmers Supported': '80+ local farm clusters earning secondary bio-feedstock wages',
      'Processing Footprint': 'Carbon-neutral, water-recirculating milling process'
    },
    fundingStage: 'Seed Funded (₹35 Lakhs, local impact angel investors)',
    logoText: 'NFC',
    status: 'In-Incubation'
  },
  {
    id: 'tamil-ocr-labs',
    name: 'EpigraTamil AI',
    tagline: 'Linguistic computer vision models for archival transcription and museum digitizations.',
    founders: ['Anirudh Srinivasan', 'Dr. S. Ramakrishnan'],
    domains: ['Artificial Intelligence & Data Science', 'Heritage & Culture'],
    description: 'EpigraTamil AI builds custom API endpoints for regional museums, history publishers, and archeological state boards, automatically transcribing low-contrast digitized archives and old manuscripts into unicode characters.',
    journey: 'Following amazing scholar interest in the Tamil Epigraphy project, the founders designed a pipeline that runs lightweight vision encoders inside portable tablet apps, allowing archaeologists out in remote forest temples to scan stone rock faces in real-time.',
    impactMetrics: {
      'Inscriptions Indexing Speed': 'Reduced manual transcription tracking from weeks to minutes',
      'Active Museums Deployed': '3 Regional museum archives utilizing digital translation engines',
      'Transcribed Character Corpus': 'Over 2.2 Million historical letters transcribed and translated'
    },
    fundingStage: 'Grant-In-Aid (Kumaraguru Student Innovation Venture Grant)',
    logoText: 'ETA',
    status: 'Market-Entry'
  }
];

export const milestones: KRESTMilestone[] = [
  {
    year: '2016',
    title: 'The Inception of RÉ',
    description: 'RÉ was founded at Kumaraguru Institutions as a dedicated student exploration sandbox, encouraging curious engineering students to move past textbooks and engage in original research.'
  },
  {
    year: '2018',
    title: 'KREST Flagship Fellowship Launched',
    description: 'Introduced the Kumaraguru Research Fellowship Scheme (KREST), offering financial month stipends, structured mentor matchings, and dedicated laboratory workspaces for elite student innovators.'
  },
  {
    year: '2020',
    title: 'Founding of the Natural Fibre Centre (NFRC)',
    description: 'Secured critical agricultural-industrial grants to construct a dedicated decortication, compound-mixing, and evaluation facility focusing on native Coimbatore crop wastes.'
  },
  {
    year: '2022',
    title: 'First Venture Spin-off & Patent Issuance',
    description: 'Successfully patented organic cellulose-bonding sizing chemicals. Scholar projects spun-off into active commercial startup entities supported by local incubation funds.'
  },
  {
    year: '2024',
    title: 'The Nithilam Archaeo-Physics Initiative',
    description: 'Launched the Nithilam division, integrating advanced acoustics, computer vision, and computational materials analysis into regional Dravidian structural preservation.'
  },
  {
    year: '2026',
    title: 'World-Class Research Hub Platform',
    description: 'Consolidated KREST, KRIP, REFLECT, and CORE into a unified, high-density digital research network mapping our 10-year research journey toward global collaborative excellence.'
  }
];

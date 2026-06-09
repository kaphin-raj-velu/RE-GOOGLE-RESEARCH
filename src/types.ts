export interface ResearchDomain {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  bgGradient: string;
  metrics: {
    projectsCount: number;
    publicationsCount: number;
    scholarsCount: number;
    funding: string;
  };
  keyTopics: string[];
  labs: string[];
}

export interface ResearchProject {
  id: string;
  domainId: string;
  title: string;
  tagline: string;
  status: 'Active' | 'Completed' | 'Translational';
  investigator: string; // Faculty mentor
  scholars: string[];  // Scholar names
  overview: string;
  problem: string;
  approach: string;
  methodology: string;
  impact: string;
  gallery: string[];
  publications: string[];
  datasets: string[];
  relatedProjects: string[];
}

export interface ScholarProfile {
  id: string;
  name: string;
  role: 'KREST Fellow' | 'Research Fellow' | 'Research Assistant' | 'Alumni Researcher';
  year: string;
  avatar: string;
  bio: string;
  interests: string[];
  projects: string[];
  achievements: string[];
  journey: string;
  skills: string[];
  gallery: string[];
  destination?: string; // For alumni details
}

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  department: string;
  avatar: string;
  bio: string;
  interests: string[];
  projects: string[];
  publications: string[];
  achievements: string[];
  hIndex: number;
  citations: number;
  availability: 'Accepting Scholars' | 'Consultation Only' | 'Fully Committed';
  email: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  batch: string;
  program: string; // KREST, KRIP etc.
  currentCompany: string;
  currentRole: string;
  location: string;
  coordinates: [number, number]; // [lat, lng] for interactive global map
  avatar: string;
  testimonial: string;
  contribution: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: 'Research Spotlight' | 'Scholar Voice' | 'Faculty Perspective' | 'Research Stories';
  author: string;
  authorRole: string;
  avatar: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[]; // Story paragraphs
  tags: string[];
  image: string;
}

export interface ResearchOpportunity {
  id: string;
  title: string;
  type: 'Research Assistantship' | 'Open Project' | 'Industry Challenge' | 'Funding Support';
  program: 'KREST' | 'KRIP' | 'REFLECT' | 'CORE' | 'General';
  domain: string;
  mentor: string;
  compensation: string;
  deadline: string;
  description: string;
  requirements: string[];
  objectives: string[];
  applyLink: string;
}

export interface ResearchDataset {
  id: string;
  title: string;
  domain: string;
  version: string;
  size: string;
  downloads: number;
  description: string;
  metadata: Record<string, string>;
  sampleData: string;
  usageExample: string;
  license: string;
}

export interface StartupPortfolio {
  id: string;
  name: string;
  tagline: string;
  founders: string[];
  domains: string[];
  description: string;
  journey: string;
  impactMetrics: Record<string, string>;
  fundingStage: string;
  logoText: string;
  status: 'In-Incubation' | 'Graduated' | 'Market-Entry';
}

export interface KRESTMilestone {
  year: string;
  title: string;
  description: string;
}

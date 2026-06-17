import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { ToggleLeft, Layers, ArrowRight, User, CheckCircle2, Circle } from 'lucide-react';
import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';

const PROJECT_IMAGES: { [key: string]: string } = {
  'battery-energy-storage-system': 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop',
  'small-scale-wind-turbine': 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
  'assistive-communication-device': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
};

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleExpandProject = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <div className="w-full font-sans text-[#202124]">
      {/* Editorial Title Header Left Aligned & Image Free */}
      <PageHeader 
        category="SCIENTIFIC INITIATIVES"
        title="Research Projects"
        description="Discover detailed ongoing and completed engineering ventures engineered to unlock regional scientific potential and address localized ecological bottlenecks."
        accentColor="yellow"
        gradientTheme="green"
        center={false}
        hideImages={true}
      />

      {/* Main Content Container */}
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-20">

        {/* Projects List Layout - Left-aligned cards with images on the left */}
        <div className="space-y-6">
          {PROJECTS.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className={`border border-[#DADCE0] rounded-2xl bg-white p-6 md:p-8 transition-all hover:shadow-md ${
                  isExpanded ? 'border-l-4 border-l-[#4285F4]' : ''
                }`}
                id={`project-block-${project.id}`}
              >
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                  {/* Aspect Video Image on Left */}
                  <div className="w-full lg:w-[240px] h-[160px] flex-shrink-0 overflow-hidden rounded-xl border border-gray-100 relative">
                    <img 
                      src={PROJECT_IMAGES[project.id] || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"} 
                      alt={project.title}
                      className="w-full h-full object-cover select-none transition-transform duration-300 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/[0.02]" />
                  </div>
                  
                  <div className="flex-1 w-full space-y-3 text-left">
                    {/* Header Information Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold">
                          <span className="text-gray-500 font-medium uppercase tracking-wider">PROJECT OWNER:</span>
                          <span className="text-[#4285F4] uppercase tracking-wider font-bold">{project.leader}</span>
                          <span className="text-gray-300">•</span>
                          <span className="flex items-center space-x-1.5 uppercase text-[#5F6368]">
                            {project.stage === 'Product' ? (
                              <CheckCircle2 className="h-4 w-4 text-[#34A853] fill-[#34A853] text-white" />
                            ) : (
                              <Circle className="h-3 w-3 fill-[#FBBC05] text-[#FBBC05]" />
                            )}
                            <span className="font-bold">STAGE: {project.stage}</span>
                          </span>
                        </div>

                        <h2 
                          onClick={() => toggleExpandProject(project.id)}
                          className="text-[20px] md:text-[22px] font-bold text-[#202124] tracking-tight hover:text-[#4285F4] cursor-pointer transition-colors leading-tight"
                        >
                          <span className="text-gray-400 font-medium font-normal text-sm block md:inline md:mr-1 uppercase tracking-wider select-none">Project Name:</span> {project.title}
                        </h2>
                      </div>

                      <div className="flex items-center space-x-3 text-sm">
                        <button
                          onClick={() => toggleExpandProject(project.id)}
                          className="px-4 py-2 border border-[#DADCE0] font-sans text-xs font-semibold rounded-lg hover:bg-gray-50 text-gray-700 select-none cursor-pointer whitespace-nowrap transition-colors"
                        >
                          {isExpanded ? 'Collapse Details' : 'Read Methodology'}
                        </button>
                      </div>
                    </div>

                    {/* Core description text */}
                    <p className="text-[15px] md:text-[16px] text-[#5F6368] leading-relaxed max-w-4xl font-light">
                      {project.description}
                    </p>

                    {/* Subtag categories */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map(t => (
                        <span key={t} className="bg-gray-100 hover:bg-gray-200 text-[#5F6368] text-[11px] font-semibold px-2.5 py-1 rounded select-none transition-colors">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Rich expansion block with Framer motion style */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-[#DADCE0] grid grid-cols-1 md:grid-cols-12 gap-6 text-[15px]"
                  >
                    <div className="md:col-span-8 space-y-3 text-left">
                      <h4 className="font-bold text-[#202124] uppercase text-xs tracking-wider">Methodology & Experiments</h4>
                      <p className="text-[#5F6368] leading-relaxed font-light">{project.details}</p>
                    </div>

                    <div className="md:col-span-4 bg-[#F8F9FA] rounded-xl p-5 border border-[#DADCE0] space-y-3 text-left">
                      <h4 className="font-bold text-[#202124] uppercase text-xs tracking-wider">Project Outcomes</h4>
                      <div className="p-3 bg-white border border-l-2 border-l-[#34A853] border-gray-200 rounded">
                        <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider">Key Realization</span>
                        <p className="text-gray-900 font-medium text-[14px] leading-tight mt-1">{project.outcome}</p>
                      </div>
                      <div className="pt-2 text-xs text-gray-500">
                        Interested in collaborating? Explore active internship positions in this sector.
                      </div>
                    </div>
                  </motion.div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

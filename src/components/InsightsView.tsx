import React, { useState } from 'react';
import { insightArticles } from '../data/researchData';
import { ArrowLeft, Clock, BookOpen, Share2, Tag, ChevronRight } from 'lucide-react';
import { InsightArticle } from '../types';

export default function InsightsView() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const handleArticleClick = (art: InsightArticle) => {
    setSelectedArticle(art);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  // Filtered insights list
  const filteredArticles = insightArticles.filter(art => {
    return activeCategoryFilter === 'All' || art.category === activeCategoryFilter;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      
      {/* 1. SINGLE ARTICLE READER DETAIL */}
      {selectedArticle ? (
        <article id="article-reader" className="animate-fade-in max-w-3xl mx-auto">
          {/* Action Header */}
          <button 
            id="back-to-insights-btn"
            onClick={handleBackToList}
            className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 hover:text-neutral-900 mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> BACK TO PUBLICATIONS INDEX
          </button>

          {/* Article Editorial Meta Info */}
          <header className="border-b border-neutral-100 pb-8 mb-8 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-600 font-bold block">
              {selectedArticle.category}
            </span>
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#202124] leading-tight">
              {selectedArticle.title}
            </h1>
            <p className="text-neutral-500 font-sans text-sm mt-3 leading-relaxed">
              {selectedArticle.summary}
            </p>

            {/* Author card details */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-50 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-neutral-200">
                  <img 
                    src={selectedArticle.avatar} 
                    alt={selectedArticle.author} 
                    className="w-full h-full object-cover select-none animate-shimmer"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="font-display font-bold text-xs text-neutral-900 block">{selectedArticle.author}</span>
                  <span className="text-[10px] text-[#5F6368] block font-medium">{selectedArticle.authorRole}</span>
                </div>
              </div>

              {/* Time stats */}
              <div className="flex items-center gap-3 text-xs text-neutral-455 font-mono">
                <span>{selectedArticle.date}</span>
                <span className="text-neutral-300">•</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-neutral-400" /> {selectedArticle.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image if any */}
          {selectedArticle.image && (
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-neutral-200 mb-8 bg-neutral-50">
              <img 
                src={selectedArticle.image} 
                alt="article hero" 
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Core Essay Content paragraph loops */}
          <div className="space-y-6 text-[#202124] font-sans text-sm md:text-base leading-relaxed leading-8">
            {selectedArticle.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Display Tags */}
          <footer className="mt-10 pt-6 border-t border-neutral-100 flex flex-wrap gap-2 items-center">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Filed Index:
            </span>
            {selectedArticle.tags.map(t => (
              <span key={t} className="px-2.5 py-0.5 bg-neutral-100 text-neutral-600 text-xs rounded border border-neutral-150 font-medium font-sans">
                {t}
              </span>
            ))}
          </footer>
        </article>

      /* 2. MAIN BLOG PUBLICATIONS DIRECTORY */
      ) : (
        <div id="insights-library" className="animate-fade-in">
          
          {/* Main header block */}
          <div className="border-b border-[#DADCE0] pb-12 mb-16">
            <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ RESEARCH PRESS</span>
            <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
              Research Stories
            </h1>
            <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
              Explore in-depth articles written by our research fellows detailing custom polymer fabrications, rock art excavations, and assistive mechatronics blueprints.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-4 mb-8 border-neutral-100">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368]">Publication Registry</span>
              <h2 className="font-sans font-bold text-xl text-neutral-900 mt-1">Active Insights Feed</h2>
            </div>

            {/* Filter tags panel */}
            <div className="flex gap-1 overflow-x-auto mt-4 md:mt-0">
              {['All', 'Research Spotlight', 'Scholar Voice'].map((cat) => (
                <button
                  id={`cat-filter-btn-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  key={cat}
                  onClick={() => setActiveCategoryFilter(cat)}
                  className={`px-3.5 py-1.5 font-mono text-xs rounded-full transition-all cursor-pointer ${
                    activeCategoryFilter === cat 
                      ? 'bg-neutral-900 text-white shadow-sm' 
                      : 'bg-[#F8F9FA] text-[#5F6368] hover:text-[#202124] hover:bg-[#F1F3F4]'
                  }`}
                >
                  {cat === 'All' ? 'All Publications' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout of blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((art) => (
              <div
                id={`article-card-${art.id}`}
                key={art.id}
                onClick={() => handleArticleClick(art)}
                className="group bg-white rounded-xl border border-neutral-200. overflow-hidden hover:border-neutral-900 cursor-pointer transition-all hover:shadow-md flex flex-col justify-between h-[420px]"
              >
                {/* Thumb design cover */}
                <div className="h-44 bg-neutral-50 overflow-hidden relative border-b">
                  <img 
                    src={art.image} 
                    alt="Article cover" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 select-none"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-[#202124] text-white uppercase backdrop-blur-xs">
                    {art.category}
                  </span>
                </div>

                {/* Content description wrapper */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-400 font-mono block">{art.date} • {art.readTime}</span>
                    <h3 className="font-display font-bold text-base text-[#202124] group-hover:text-blue-600 transition-colors mt-2 line-clamp-2 leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-[#5F6368] text-xs leading-relaxed line-clamp-2 mt-2 font-sans font-normal">
                      {art.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono font-bold pt-3 border-t border-neutral-100 mt-4 text-[#5F6368]">
                    <span>By {art.author.replace('Dr. ', '').replace('Prof. ', '')}</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">Read Essay <ChevronRight className="w-3.5 h-3.5" /></span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

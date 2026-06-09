import React, { useState } from 'react';
import { researchDatasets } from '../data/researchData';
import { Database, FileCode, Check, Download, Layers, ShieldAlert, Award, FileSpreadsheet } from 'lucide-react';
import { ResearchDataset } from '../types';

export default function DatasetsView() {
  const [selectedDataset, setSelectedDataset] = useState<ResearchDataset>(researchDatasets[0]);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);

  // Copy helper
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Download simulation
  const handleDownloadSimulate = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(null), 1500); // Reset
          return 100;
        }
        return prev + 20;
      });
    }, 150);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Narrative Section */}
      <div className="border-b border-[#DADCE0] pb-12 mb-16">
        <span className="text-xs uppercase tracking-widest font-mono text-[#5F6368] font-bold">RÉ COGNITION ENGINES</span>
        <h1 className="font-sans font-extrabold text-5xl md:text-6xl text-[#202124] mt-4 tracking-tighter leading-[1.05]">
          Open Datasets
        </h1>
        <p className="text-[#5F6368] font-sans text-lg mt-6 max-w-3xl leading-relaxed">
          In alignment with our core values of academic accessibility and scientific transparency, RÉ registers all custom empirical metrics, ancient translations, and bio-tensile stress charts as open-source assets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Card - Metadata Sheet */}
        <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 pb-4 border-b">
              <div>
                <span className="text-[9px] uppercase font-mono bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded font-bold">
                  DATABASE DIRECTORY REGISTER
                </span>
                <h3 className="font-display font-bold text-neutral-900 text-xl mt-2.5 leading-tight">
                  {selectedDataset.title}
                </h3>
                <span className="text-xs text-neutral-400 block font-mono mt-0.5">{selectedDataset.domain}</span>
              </div>

              {/* Version info */}
              <div className="text-right shrink-0">
                <span className="text-[10px] font-mono text-[#5F6368] block">Size • Version</span>
                <span className="font-display font-bold text-sm text-[#202124] block mt-0.5">{selectedDataset.size} • v{selectedDataset.version}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block">Abstract Summary</span>
              <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed font-sans">{selectedDataset.description}</p>
            </div>

            {/* Structured Metadata key value grid pairs */}
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-2">Experimental Metadata Schema</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F8F9FA] p-4 rounded-xl border border-neutral-150">
                {Object.entries(selectedDataset.metadata).map(([key, val]) => (
                  <div key={key}>
                    <span className="text-[9px] font-mono text-[#5F6368] uppercase block">{key}</span>
                    <span className="text-xs text-neutral-900 font-medium mt-0.5 block">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample View box */}
            <div>
              <span className="text-[10px] font-mono uppercase text-[#5F6368] block mb-2">Dataset Rows Preview</span>
              <pre className="p-4 bg-neutral-900 text-neutral-200 rounded-xl font-mono text-xs overflow-auto max-h-36 select-all">
                {selectedDataset.sampleData}
              </pre>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono text-[9px] text-[#5F6368] pt-4 border-t mt-6 border-neutral-100">
            <span>Database License: {selectedDataset.license}</span>
            <span className="flex items-center gap-1">Open-Source Registry</span>
          </div>
        </div>

        {/* Right Card - Code integration and download triggers */}
        <div className="lg:col-span-4 flex flex-col justify-between border border-neutral-200 bg-[#F8F9FA] rounded-2xl p-6">
          <div className="space-y-6">
            {/* Copyable integration code */}
            <div>
              <span className="text-[10px] uppercase font-mono text-[#5F6368] block">INTEGRATION SDK CODE SAMPLE</span>
              <p className="text-neutral-400 text-[10px] mt-0.5">Copy snippet to deploy dataset vectors inside Python loops.</p>
              
              <div className="relative mt-3.5 bg-neutral-900 rounded-xl overflow-hidden">
                <button
                  id="copy-code-btn"
                  onClick={() => handleCopyCode(selectedDataset.usageExample)}
                  className="absolute right-2.5 top-2.5 p-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-green-400" /> : <FileCode className="w-3.5 h-3.5 text-neutral-400" />}
                  {copiedSnippet ? 'Copied' : 'Copy'}
                </button>
                <pre className="p-4 pt-10 text-neutral-300 text-[11px] font-mono overflow-auto max-h-48 select-none">
                  {selectedDataset.usageExample}
                </pre>
              </div>
            </div>

            {/* Downloads count */}
            <div className="p-4 bg-white rounded-xl border border-neutral-150">
              <span className="text-[10px] font-mono uppercase text-[#5F6368] block">Download Metrics</span>
              <span className="font-display font-extrabold text-[#202124] text-lg mt-0.5 block">{selectedDataset.downloads} Active Downloads</span>
            </div>
          </div>

          {/* Simulated File Downloader button trigger */}
          <button
            id="download-data-btn"
            onClick={handleDownloadSimulate}
            className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 bg-black hover:bg-neutral-900 text-white font-mono text-xs font-semibold rounded-lg cursor-pointer transition-colors relative overflow-hidden"
          >
            {downloadProgress !== null && (
              <span className="absolute left-0 top-0 bottom-0 bg-blue-600 transition-all duration-150 opacity-40" style={{ width: `${downloadProgress}%` }}></span>
            )}
            <Download className="w-4 h-4 shrink-0" />
            {downloadProgress === null ? 'DOWNLOAD COMPACT ZIP' : downloadProgress === 100 ? 'DOWNLOAD COMPLETED' : `DOWNLOADING DATA v${selectedDataset.version} (${downloadProgress}%)`}
          </button>
        </div>
      </div>

      {/* Directory of other datasets */}
      <div>
        <h3 className="font-display font-bold text-lg text-neutral-900 mb-4 block">Ecosystem Dataset Repositories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {researchDatasets.map((d) => (
            <div
              id={`dataset-card-selector-${d.id}`}
              key={d.id}
              onClick={() => setSelectedDataset(d)}
              className={`p-5 rounded-xl border cursor-pointer transition-all flex items-start gap-4 ${
                selectedDataset.id === d.id 
                  ? 'bg-[#F8F9FA] border-[#202124] shadow-sm' 
                  : 'bg-white border-neutral-200. hover:border-neutral-500'
              }`}
            >
              <div className="p-3 rounded-lg bg-neutral-100 text-neutral-600 shrink-0">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <div className="min-w-0">
                <h4 className="font-display font-bold text-sm text-[#202124] truncate">{d.title}</h4>
                <p className="text-neutral-500 text-xs mt-1 font-mono">{d.size} • Version {d.version}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

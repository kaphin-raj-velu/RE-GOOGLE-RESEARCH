import React from 'react';
import { motion } from 'motion/react';
import SafeImage from '../App'; // Since SafeImage is currently in App.tsx, let's define a clean local version or import it. We can just build a local robust version inside PageHeader for independence!

interface PageHeaderProps {
  category?: string;
  title: string;
  description: string;
  accentColor?: 'green' | 'yellow';
  images?: string[];
  gradientTheme?: 'blue' | 'red' | 'green' | 'yellow' | 'purple';
  center?: boolean;
  hideImages?: boolean;
}

const localFallbackSvgs = [
  <svg className="w-12 h-12 text-[#1A73E8]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
    <circle cx="50" cy="50" r="35" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M35 50 h 30 M50 35 v 30" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  <svg className="w-12 h-12 text-[#34A853]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
    <rect x="30" y="30" width="40" height="40" rx="6" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="10" strokeWidth="1" strokeDasharray="2 2" />
    <path d="M40 50 l 20 0 M50 40 l 0 20" strokeWidth="1.5" />
  </svg>,
  <svg className="w-12 h-12 text-[#EA4335]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
    <path d="M25 50 C 40 25, 60 75, 75 50" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="55" r="5" fill="currentColor" />
  </svg>
];

const LocalSafeImage = ({ src, alt, fallbackGradient, fallbackSvg }: { src: string; alt: string; fallbackGradient: string; fallbackSvg: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    setHasError(false);
    setIsLoading(true);
    if (imgRef.current && imgRef.current.complete) {
      setIsLoading(false);
    }
  }, [src]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#F1F3F4] select-none flex items-center justify-center rounded-2xl border border-gray-100">
      {isLoading && (
        <div className="absolute inset-0 bg-[#E8EAED] animate-pulse flex flex-col items-center justify-center p-4 space-y-2 z-10">
          <div className="w-6 h-6 rounded-full border-2 border-[#DADCE0] border-t-[#4285F4] animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-4`}>
          {fallbackSvg}
          <span className="text-[9px] font-mono font-bold text-gray-500 mt-2">Unavailable</span>
        </div>
      ) : (
        <img 
          ref={imgRef}
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

export default function PageHeader({ 
  category = "RÉ PORTAL", 
  title, 
  description, 
  accentColor = "green", 
  images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=500&auto=format&fit=crop"
  ],
  gradientTheme = "blue",
  center = false,
  hideImages = true
}: PageHeaderProps) {

  const accentDotClasses = accentColor === "green" 
    ? "bg-[#34A853] shadow-[0_0_15px_rgba(52,168,83,0.6)]" 
    : "bg-[#FBBC05] shadow-[0_0_15px_rgba(251,188,5,0.6)]";

  const fallbackGradients = {
    blue: "from-[#E8F0FE] to-[#D2E3FC]",
    red: "from-[#FCE8E6] to-[#FAD2CF]",
    green: "from-[#E6F4EA] to-[#CEEAD6]",
    yellow: "from-[#FEF7E0] to-[#FEEFC3]",
    purple: "from-[#F3E8FF] to-[#E9D5FF]",
  };

  return (
    <div className="w-full border-b border-[#DADCE0] bg-white pt-12 pb-16 relative overflow-hidden select-none" id={`page-header-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Background wireframe grids for technical editorial look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-grid)" />
        </svg>
      </div>

      <div className={`mx-auto max-w-[1440px] px-6 lg:px-20 relative z-10 ${
        center ? 'text-center flex flex-col items-center justify-center' : 'grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'
      }`}>
        
        {/* Left Side: Editorial Typography Column (Giant 80-96px Headline) */}
        <div className={center ? 'space-y-6 max-w-4xl flex flex-col items-center' : hideImages ? 'lg:col-span-12 space-y-6' : 'lg:col-span-7 space-y-6'}>
          <span className="text-[#4285F4] text-xs font-bold uppercase tracking-[0.2em] block">
            {category}
          </span>
          <h1 className="font-display text-[48px] sm:text-[64px] lg:text-[76px] font-extrabold tracking-tight text-[#202124] leading-none mb-4">
            {title}
          </h1>
          <p className={`text-[17px] md:text-[19px] text-[#5F6368] leading-relaxed font-light ${center ? 'text-center max-w-2xl' : 'max-w-2xl text-left'}`}>
            {description}
          </p>
        </div>

        {/* Right Side: Asymmetric overlapping photo collage */}
        {!center && !hideImages && (
          <div className="lg:col-span-5 relative h-[320px] md:h-[360px] flex items-center justify-center">
            
            {/* Main larger card */}
            <div className={`absolute z-10 rounded-[24px] shadow-lg shadow-black/[0.04] transition-all hover:scale-[1.02] group overflow-hidden border border-gray-100 ${
              images[1] 
                ? 'w-[240px] h-[190px] md:w-[280px] md:h-[220px] left-4 md:left-8 top-6' 
                : 'w-[280px] h-[220px] md:w-[320px] md:h-[250px] inset-0 m-auto'
            }`}>
              <LocalSafeImage
                src={images[0]}
                alt={`${title} Primary`}
                fallbackGradient={fallbackGradients[gradientTheme]}
                fallbackSvg={localFallbackSvgs[0]}
              />
            </div>

            {/* Secondary slightly overlapping card */}
            {images[1] && (
              <div className="absolute w-[170px] h-[140px] md:w-[210px] md:h-[160px] right-4 md:right-8 bottom-6 z-20 rounded-[20px] shadow-xl shadow-black/[0.06] transition-all hover:scale-[1.02] group overflow-hidden border border-white">
                <LocalSafeImage
                  src={images[1]}
                  alt={`${title} Secondary`}
                  fallbackGradient={fallbackGradients[gradientTheme]}
                  fallbackSvg={localFallbackSvgs[1]}
                />
              </div>
            )}

            {/* Optional decorative Accent Dot positioned at intersection */}
            {images[1] && (
              <div className="absolute right-1/3 top-1/2 -translate-y-1/2 z-30">
                <div className={`h-4 w-4 rounded-full ${accentDotClasses} animate-ping absolute`} />
                <div className={`h-4 w-4 rounded-full ${accentDotClasses} relative`} />
              </div>
            )}

            {/* Decorative outline sphere lineart */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-gray-900" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="75" strokeWidth="0.8" strokeDasharray="3 3" />
              <ellipse cx="100" cy="100" rx="75" ry="25" strokeWidth="0.6" />
              <ellipse cx="100" cy="100" rx="25" ry="75" strokeWidth="0.6" />
            </svg>

          </div>
        )}

      </div>
    </div>
  );
}

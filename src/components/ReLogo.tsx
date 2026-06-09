import React from 'react';

interface ReLogoProps {
  className?: string;
}

export default function ReLogo({ className = 'w-8 h-8' }: ReLogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      id="re-logo-svg"
    >
      <g transform="rotate(-33 50 50)">
        {/* Top-left Mint Rectangle */}
        <rect 
          x="12" 
          y="18" 
          width="54" 
          height="22" 
          rx="6" 
          fill="#53C9AB" 
        />
        
        {/* Bottom-right Navy Rectangle */}
        <rect 
          x="34" 
          y="47" 
          width="54" 
          height="22" 
          rx="6" 
          fill="#1E2D4E" 
        />
        
        {/* Connection Trace Line */}
        <path 
          d="M 25 29 L 53 29 L 47 58 L 75 58" 
          stroke="white" 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        
        {/* Node Circles (White and filled centers) */}
        {/* Node 1 */}
        <circle cx="25" cy="29" r="6.8" fill="white" />
        <circle cx="25" cy="29" r="3.2" fill="#1E2D4E" />
        
        {/* Node 2 */}
        <circle cx="53" cy="29" r="6.8" fill="white" />
        <circle cx="53" cy="29" r="3.2" fill="#1E2D4E" />
        
        {/* Node 3 */}
        <circle cx="47" cy="58" r="6.8" fill="white" />
        <circle cx="47" cy="58" r="3.2" fill="#53C9AB" />
        
        {/* Node 4 */}
        <circle cx="75" cy="58" r="6.8" fill="white" />
        <circle cx="75" cy="58" r="3.2" fill="#53C9AB" />
      </g>
    </svg>
  );
}

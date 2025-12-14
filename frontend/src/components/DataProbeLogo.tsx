export function DataProbeLogo({ className = "", width = 240, height = 60 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 240 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient for hexagon - cyan to blue to orange */}
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      
      {/* Hexagon outline with gradient */}
      <path 
        d="M30 12 L42 19 L42 33 L30 40 L18 33 L18 19 Z" 
        stroke="url(#hexGradient)" 
        strokeWidth="3" 
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Left bracket in cyan/blue */}
      <path 
        d="M28 21 Q23 26 28 31" 
        stroke="#22D3EE" 
        strokeWidth="4" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right bracket in orange */}
      <path 
        d="M32 21 Q37 26 32 31" 
        stroke="#F97316" 
        strokeWidth="4" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Small rounded rectangles/pills at bracket ends */}
      <rect x="26.5" y="19" width="3" height="6" rx="1.5" fill="#22D3EE"/>
      <rect x="26.5" y="27" width="3" height="6" rx="1.5" fill="#22D3EE"/>
      <rect x="30.5" y="19" width="3" height="6" rx="1.5" fill="#F97316"/>
      <rect x="30.5" y="27" width="3" height="6" rx="1.5" fill="#F97316"/>
      
      {/* Text "dataprobe" */}
      <text 
        x="58" 
        y="37" 
        fontFamily="system-ui, -apple-system, sans-serif" 
        fontSize="26" 
        fontWeight="600"
        fill="#1a1a1a"
        letterSpacing="-0.5"
      >
        dataprobe
      </text>
    </svg>
  );
}

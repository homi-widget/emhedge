
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 32 }: LogoProps) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer coin ring */}
      <circle 
        cx="20" 
        cy="20" 
        r="18" 
        stroke="#475569" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Inner coin ring */}
      <circle 
        cx="20" 
        cy="20" 
        r="14" 
        stroke="#64748b" 
        strokeWidth="1" 
        fill="none"
        opacity="0.6"
      />
      
      {/* Compass needle - North */}
      <path 
        d="M20 6 L22 12 L20 10 L18 12 Z" 
        fill="#475569"
      />
      
      {/* Compass needle - South */}
      <path 
        d="M20 34 L22 28 L20 30 L18 28 Z" 
        fill="#64748b"
        opacity="0.8"
      />
      
      {/* Compass needle - East */}
      <path 
        d="M34 20 L28 22 L30 20 L28 18 Z" 
        fill="#64748b"
        opacity="0.6"
      />
      
      {/* Compass needle - West */}
      <path 
        d="M6 20 L12 22 L10 20 L12 18 Z" 
        fill="#64748b"
        opacity="0.6"
      />
      
      {/* Central coin detail - small circle */}
      <circle 
        cx="20" 
        cy="20" 
        r="3" 
        fill="#475569"
      />
      
      {/* Currency symbol overlay */}
      <text 
        x="20" 
        y="25" 
        textAnchor="middle" 
        fontSize="8" 
        fill="white" 
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        $
      </text>
    </svg>
  );
};

export default Logo;

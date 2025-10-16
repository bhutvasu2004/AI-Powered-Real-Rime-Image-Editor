
import React from 'react';

const MagicWandIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 4V2" />
    <path d="M15 10V8" />
    <path d="M12.3 7.7 11 9" />
    <path d="M5 4v2" />
    <path d="M5 10v2" />
    <path d="M19 4v2" />
    <path d="M19 10v2" />
    <path d="m21.6 12.6-1.6 1.6" />
    <path d="m3 13 18 0" />
    <path d="M22 17H2" />
    <path d="M17 22H7" />
    <path d="m2.4 12.6 1.6 1.6" />
  </svg>
);

export default MagicWandIcon;

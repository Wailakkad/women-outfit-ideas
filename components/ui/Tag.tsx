import React from 'react';

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Tag({ children, active = false, onClick, className = '' }: TagProps) {
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap ${
          active
            ? 'bg-[#1C1917] text-white shadow-xs'
            : 'bg-[#F2EFE9] text-[#44403C] hover:bg-[#E7E2D8] hover:text-[#1C1917]'
        } ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={`text-xs font-medium tracking-wide uppercase text-[#8C4A32] ${className}`}
    >
      {children}
    </span>
  );
}

export default Tag;

'use client';

import React, { useState } from 'react';
import { ListOrdered, ChevronDown, ChevronUp } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  const handleScroll = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 88; // accounts for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav
      className={`bg-[#F5F2EB]/80 border border-[#E5E0D4] rounded-xl p-5 my-8 ${className}`}
      aria-label="Table of contents"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-[#8C4A32]" />
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[#1C1917]">
            In This Guide
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-stone-500 hover:text-stone-900 p-1 transition-colors"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Collapse table of contents' : 'Expand table of contents'}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <ol className="mt-4 space-y-2 border-t border-[#E5E0D4] pt-3 text-sm">
          {items.map((item, index) => (
            <li key={item.id} className="flex items-start gap-2">
              <span className="text-xs text-[#8C4A32] font-mono mt-0.5 w-5 shrink-0">
                0{index + 1}.
              </span>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(item.id, e)}
                className="text-stone-700 hover:text-[#8C4A32] transition-colors leading-snug"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}

export default TableOfContents;

import React from 'react';

interface AdSlotProps {
  type?: 'leaderboard' | 'in-article' | 'sidebar' | 'native';
  className?: string;
}

export function AdSlot({ type = 'in-article', className = '' }: AdSlotProps) {
  // ADSTERRA / GOOGLE ADSENSE INTEGRATION NOTE:
  // Replace the placeholder below with your Adsterra native banner or display ad script snippet:
  // e.g.,
  // <script type="text/javascript">
  //   atOptions = {
  //     'key': 'your-adsterra-key',
  //     'format': 'iframe',
  //     'height': 90,
  //     'width': 728,
  //     'params': {}
  //   };
  // </script>
  // <script type="text/javascript" src="//www.topcreativeformat.com/your-adsterra-key/invoke.js"></script>

  const typeConfig = {
    leaderboard: {
      height: 'min-h-[90px]',
      label: 'Editorial Partner Showcase (728x90 Leaderboard)',
      subtext: 'Curated Fashion Partners & Seasonal Lookbooks',
    },
    'in-article': {
      height: 'min-h-[120px]',
      label: 'Recommended Look / Partner Feature',
      subtext: 'Adsterra In-Article Native Placement',
    },
    sidebar: {
      height: 'min-h-[250px]',
      label: 'Seasonal Shopping Guide (300x250)',
      subtext: 'Wardrobe Essentials & Boutique Deals',
    },
    native: {
      height: 'min-h-[140px]',
      label: 'Sponsored Editorial Note',
      subtext: 'Adsterra 4:1 Native Recommendation Unit',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`my-8 p-4 bg-[#F5F2EB] border border-dashed border-[#D6CFC3] rounded-lg text-center flex flex-col items-center justify-center transition-opacity hover:opacity-95 ${config.height} ${className}`}
      aria-label="Sponsored Content Placeholder"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[10px] uppercase tracking-widest text-[#78716C] font-mono">
          Advertisement
        </span>
        <span className="text-[10px] text-[#A8A29E]">·</span>
        <span className="text-[11px] font-medium text-[#57534E]">
          {config.label}
        </span>
      </div>
      <p className="text-xs text-[#78716C] max-w-md">
        {config.subtext}
      </p>
      {/* Container for dynamic ad script injection */}
      <div id={`ad-container-${type}`} className="w-full flex justify-center mt-2" />
    </div>
  );
}

export default AdSlot;

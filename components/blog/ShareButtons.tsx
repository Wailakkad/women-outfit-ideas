'use client';

import React, { useState } from 'react';
import { Share2, Check, Link2, Bookmark } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
  image?: string;
  description?: string;
  sticky?: boolean;
}

export function ShareButtons({
  title,
  url,
  image,
  description,
  sticky = false,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (url) return url;
    if (typeof window !== 'undefined') return window.location.href;
    return 'https://womensstyle.fashion';
  };

  const getFullImageUrl = () => {
    if (image?.startsWith('http')) return image;
    if (typeof window !== 'undefined' && image) {
      return `${window.location.origin}${image}`;
    }
    return '';
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback
    }
  };

  const sharePinterest = () => {
    const currentUrl = encodeURIComponent(getFullUrl());
    const media = encodeURIComponent(getFullImageUrl());
    const desc = encodeURIComponent(`${title} – Outfit inspiration from Women’s Style`);
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${currentUrl}&media=${media}&description=${desc}`;
    window.open(pinterestUrl, '_blank', 'noopener,noreferrer,width=750,height=600');
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`${title} | Women’s Style Outfit Ideas`);
    const currentUrl = encodeURIComponent(getFullUrl());
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${currentUrl}`,
      '_blank',
      'noopener,noreferrer,width=600,height=400'
    );
  };

  if (sticky) {
    return (
      <aside
        className="hidden lg:flex flex-col gap-3 sticky top-32 z-20 py-2"
        aria-label="Social share actions"
      >
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#78716C] mb-1">
          Share
        </div>
        <button
          type="button"
          onClick={sharePinterest}
          title="Save to Pinterest"
          className="w-10 h-10 rounded-full bg-[#E60023] hover:bg-[#B8001B] text-white flex items-center justify-center transition-transform hover:scale-105 shadow-sm"
          aria-label="Save this look to Pinterest"
        >
          <span className="font-bold text-xs tracking-tighter">P</span>
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          title="Copy post link"
          className="w-10 h-10 rounded-full bg-white border border-[#E5E0D4] hover:border-stone-800 text-stone-700 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
          aria-label="Copy link to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <Link2 className="w-4 h-4" />
          )}
        </button>

        <button
          type="button"
          onClick={shareTwitter}
          title="Share on X"
          className="w-10 h-10 rounded-full bg-white border border-[#E5E0D4] hover:border-stone-800 text-stone-700 flex items-center justify-center transition-all hover:scale-105 shadow-xs"
          aria-label="Share on X"
        >
          <span className="font-bold text-xs">𝕏</span>
        </button>
      </aside>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 my-8 bg-[#F5F2EB] rounded-xl border border-[#EAE6DF]">
      <div className="flex items-center gap-2">
        <Share2 className="w-4 h-4 text-[#8C4A32]" />
        <span className="text-sm font-medium text-stone-800">
          Love these outfit ideas? Save or share:
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={sharePinterest}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E60023] hover:bg-[#BD081C] text-white text-xs font-medium transition-all shadow-xs"
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Save to Pinterest</span>
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D8D2C5] hover:border-stone-900 text-stone-700 text-xs font-medium transition-all"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700">Link Copied!</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              <span>Copy Link</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={shareTwitter}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#D8D2C5] hover:border-stone-900 text-stone-700 text-xs font-medium transition-all"
        >
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;

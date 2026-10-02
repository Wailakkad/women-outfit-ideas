'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Sparkles, Filter, ChevronRight, Info, Check, Copy } from 'lucide-react';
import { OutfitIdea, OutfitCategory } from '@/content/posts';

interface CostumeGalleryProps {
  outfits: OutfitIdea[];
}

const CATEGORIES: ('All' | OutfitCategory)[] = [
  'All',
  'Cute',
  'Chic Witchy',
  'Classic Horror',
  'Villain Vibes',
  'Movie-Inspired (Generic)',
  'DIY / Closet',
];

export function CostumeGallery({ outfits }: CostumeGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | OutfitCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredOutfits = useMemo(() => {
    return outfits.filter((outfit) => {
      const matchesCategory =
        selectedCategory === 'All' || outfit.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        outfit.title.toLowerCase().includes(query) ||
        outfit.description.toLowerCase().includes(query) ||
        outfit.keyPieces.some((piece) => piece.toLowerCase().includes(query)) ||
        outfit.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [outfits, selectedCategory, searchQuery]);

  const handleCopyPrompt = (id: number, prompt: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCardScroll = (id: number) => {
    const el = document.getElementById(`costume-${id}`);
    if (el) {
      const topOffset = 88;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#costume-${id}`);
    }
  };

  return (
    <div id="costume-gallery" className="my-10 space-y-8 scroll-mt-24">
      {/* Gallery Header */}
      <div className="bg-[#F5F2EB] border border-[#E5E0D4] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-[#8C4A32] text-white rounded-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase font-mono tracking-widest text-[#8C4A32] font-semibold">
              Interactive Lookbook
            </span>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            Showing {filteredOutfits.length} of {outfits.length} Outfits
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
          Explore 55 Curated Halloween Costumes
        </h2>
        <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
          Filter by aesthetic, search your favorite pieces, and click any outfit card to jump directly to its complete styling instructions, makeup breakdown, and accessories.
        </p>

        {/* Search Bar + Filter Chips */}
        <div className="space-y-4 pt-2">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by outfit name, piece (e.g. blazer, slip dress, boots)..."
              aria-label="Search costume ideas"
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 bg-white border border-[#D5CFC3] rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-[#D8D2C5] hover:bg-[#EAE5DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer for villain / movie-inspired looks */}
        {(selectedCategory === 'Villain Vibes' ||
          selectedCategory === 'Movie-Inspired (Generic)' ||
          selectedCategory === 'All') && (
          <div className="flex items-start gap-2.5 p-3.5 bg-white/80 rounded-lg border border-[#E5E0D4] text-xs text-stone-600">
            <Info className="w-4 h-4 text-[#8C4A32] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Editorial Notice:</strong> Costumes are original outfit concepts inspired by popular aesthetics. Not affiliated with any brand or franchise.
            </p>
          </div>
        )}
      </div>

      {/* Grid of Costume Cards */}
      {filteredOutfits.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-[#EAE5DC]">
          <p className="text-stone-500 text-sm">No costume concepts match your current filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-3 text-xs text-[#8C4A32] underline font-medium"
          >
            Reset filters to view all 55 costumes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutfits.map((outfit) => (
            <div
              key={outfit.id}
              onClick={() => handleCardScroll(outfit.id)}
              className="group cursor-pointer bg-white border border-[#EAE5DC] rounded-xl overflow-hidden hover:border-[#D0C9BD] hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Container with Fallback Neutral Gradient */}
              <div className="relative aspect-[16/10] bg-gradient-to-tr from-stone-200 via-stone-100 to-[#FAF8F5] overflow-hidden">
                <Image
                  src={outfit.image.src}
                  alt={outfit.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-stone-900/90 text-white rounded-xs backdrop-blur-xs">
                    #{outfit.id < 10 ? `0${outfit.id}` : outfit.id}
                  </span>
                  <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 bg-white/95 text-stone-900 rounded-xs shadow-xs">
                    {outfit.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3">
                <h3 className="font-serif text-lg font-medium text-stone-900 group-hover:text-[#8C4A32] transition-colors leading-snug">
                  {outfit.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed flex-1">
                  {outfit.description}
                </p>

                {/* Key Pieces Chips */}
                <div className="pt-2 border-t border-[#F0ECE4] space-y-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block font-medium">
                    Key Outfit Pieces:
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px] text-stone-700">
                    {outfit.keyPieces.slice(0, 3).map((piece, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-[#F5F2EB] px-2 py-0.5 rounded-xs text-[11px] leading-tight"
                      >
                        {piece}
                      </span>
                    ))}
                    {outfit.keyPieces.length > 3 && (
                      <span className="text-stone-400 text-[10px] self-center">
                        +{outfit.keyPieces.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#8C4A32] font-medium group-hover:underline">
                  <span>View full styling & makeup</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Complete In-Depth Outfits Section (All 55 with ID Anchors) */}
      <div className="pt-12 border-t border-[#EAE5DC] space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8C4A32] font-semibold">
            Complete 55 Outfit Styling Directory
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
            Full Clothing, Accessory & Makeup Guides
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
            Detailed breakdown of every outfit with exact pieces to pull from your wardrobe, hair and makeup instructions, and professional stylist tips.
          </p>
        </div>

        <div className="space-y-6">
          {outfits.map((outfit) => (
            <div
              key={outfit.id}
              id={`costume-${outfit.id}`}
              className="scroll-mt-24 p-6 bg-white border border-[#EAE5DC] rounded-xl hover:border-[#D5CFC3] transition-all space-y-4 shadow-2xs"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F0ECE4]">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold px-2.5 py-1 bg-stone-900 text-white rounded-sm">
                    #{outfit.id < 10 ? `0${outfit.id}` : outfit.id}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-stone-900">
                      {outfit.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-[#8C4A32] font-medium">
                      {outfit.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleCopyPrompt(outfit.id, outfit.imagePrompt, e)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5F2EB] hover:bg-[#EAE5DC] text-stone-700 text-xs font-mono transition-colors"
                    title="Copy ultra-realistic photo prompt"
                  >
                    {copiedId === outfit.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Prompt Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>Copy Image Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-700 leading-relaxed">
                {outfit.description}
              </p>

              {/* Grid of Key Pieces & Accessories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Key Pieces */}
                <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE5DC] space-y-2">
                  <span className="font-mono uppercase font-semibold text-stone-800 tracking-wider text-[11px] block">
                    Core Wardrobe Pieces:
                  </span>
                  <ul className="space-y-1 text-stone-700">
                    {outfit.keyPieces.map((piece, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8C4A32] font-bold">·</span>
                        <span>{piece}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accessories */}
                <div className="p-3.5 bg-[#FAF8F5] rounded-lg border border-[#EAE5DC] space-y-2">
                  <span className="font-mono uppercase font-semibold text-stone-800 tracking-wider text-[11px] block">
                    Essential Accessories:
                  </span>
                  <ul className="space-y-1 text-stone-700">
                    {outfit.accessories.map((acc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#8C4A32] font-bold">·</span>
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hair & Makeup + Stylist Tip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 bg-[#F5F2EB]/60 rounded-md border border-[#E8E2D5]">
                  <strong className="text-stone-900 block mb-0.5">Hair & Makeup:</strong>
                  <span className="text-stone-600 leading-relaxed">{outfit.hairMakeup}</span>
                </div>

                <div className="p-3 bg-[#FAF5F0] rounded-md border border-[#EAD8CA]">
                  <strong className="text-[#8C4A32] block mb-0.5">Stylist Secret:</strong>
                  <span className="text-stone-700 leading-relaxed">{outfit.stylingTip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CostumeGallery;

'use client';

import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { posts } from '@/content/posts';
import Container from '@/components/ui/Container';
import PostCard from '@/components/blog/PostCard';
import AdSlot from '@/components/blog/AdSlot';
import NewsletterBlock from '@/components/blog/NewsletterBlock';

export default function BlogHubPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const categories = ['All', 'Halloween', 'Fall', 'Winter', 'Capsule Wardrobe'];

  const filteredPosts = posts.filter((post) => {
    const matchesTag =
      selectedTag === 'All' ||
      post.tags.includes(selectedTag) ||
      post.category.toLowerCase() === selectedTag.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTag && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 space-y-12">
      <Container size="lg">
        {/* Hub Header */}
        <div className="max-w-2xl space-y-3 mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block font-medium">
            The Lookbook Library
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 tracking-tight">
            Outfit Ideas, Trends & Styling Formulas
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Explore our curated guides for Halloween 2026, warm autumn color palettes, capsule checklists, and cozy Scandi winter layers.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#EAE5DC] flex flex-col md:flex-row items-center justify-between gap-4 mb-10 shadow-2xs">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedTag(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedTag === cat
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-[#F2EFE9] text-stone-700 hover:bg-[#E7E2D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search looks, tags, coats..."
              aria-label="Search outfit ideas"
              className="w-full text-xs pl-9 pr-3 py-2 bg-[#FAF8F5] border border-[#DDD7CC] rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-colors"
            />
          </div>
        </div>

        {/* Posts Grid with native AdSlot */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#EAE5DC]">
            <p className="text-stone-500 text-sm">No outfits found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag('All');
              }}
              className="mt-3 text-xs text-[#8C4A32] underline font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <PostCard key={post.slug} post={post} priority={idx === 0} />
              ))}
            </div>

            {/* Sidebar or Mid-feed AdSlot */}
            <AdSlot type="native" />
          </div>
        )}
      </Container>

      {/* Newsletter signup */}
      <NewsletterBlock />
    </div>
  );
}

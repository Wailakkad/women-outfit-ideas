'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { posts } from '@/content/posts';
import Container from '@/components/ui/Container';
import PostCard from '@/components/blog/PostCard';
import NewsletterBlock from '@/components/blog/NewsletterBlock';

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const categories = ['All', 'Halloween', 'Fall', 'Winter', 'Capsule Wardrobe'];

  const filteredPosts = selectedTag === 'All'
    ? posts
    : posts.filter((post) =>
        post.tags.includes(selectedTag) || post.category.toLowerCase() === selectedTag.toLowerCase()
      );

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-12 pb-12 overflow-hidden">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8C4A32]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A32]" />
                <span>Autumn / Winter 2026 Lookbooks</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 leading-[1.1] tracking-tight text-balance">
                Seasonal Outfit Ideas That Redefine Effortless Elegance.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
                Curated fashion formulas for real life. Explore Pinterest-trending Halloween costumes, rich Fall 2026 color palettes, and warm Scandi-style winter layering you can recreate today.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all shadow-sm hover:translate-y-[-1px]"
                >
                  <span>Explore All Outfit Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/blog/womens-halloween-costume-ideas-2026"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-[#EFECE5] text-stone-800 text-sm font-medium hover:bg-[#E5E0D4] transition-all"
                >
                  <span>55 Halloween Costumes</span>
                </Link>
              </div>

              {/* Social trust metric */}
              <div className="pt-6 border-t border-[#EAE5DC] flex flex-wrap items-center gap-6 text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#8C4A32]" />
                  <span><strong>120K+ Monthly</strong> Pinterest Impressions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8C4A32]" />
                  <span>Real closet pieces, zero fast-fashion filler</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#EAE5DC] bg-stone-100">
                <Image
                  src="/images/hero.jpg"
                  alt="Editorial Autumn Fashion Street Style"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-amber-200 font-medium block mb-1">
                    Editorial Spotlight
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    The Modern Trench & Cashmere Layering Formula
                  </h3>
                  <Link
                    href="/blog/womens-fall-outfits-2026"
                    className="inline-flex items-center gap-1.5 text-xs text-stone-200 hover:text-white mt-2 group"
                  >
                    <span>Read the capsule guide</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Featured Posts & Category Tabs */}
      <section className="py-6">
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#EAE5DC]">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block mb-1">
                Seasonal Inspiration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900">
                Trending Outfit Lookbooks
              </h2>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedTag(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    selectedTag === cat
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'bg-[#EFECE5] text-stone-700 hover:bg-[#E5E0D4]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <PostCard key={post.slug} post={post} priority={idx === 0} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Editorial Philosophy Block */}
      <section className="py-12 bg-[#F5F2EB] border-y border-[#EAE5DC]">
        <Container size="md">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block">
              The Style Code
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
              Fashion That Works From Your Closet First
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We reject micro-trends that disappear after two weeks on TikTok. Our guides focus on timeless color palettes, proportional tailoring rules, and versatile pieces you can mix and match for years.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
              <div className="p-4 bg-white rounded-lg border border-[#EAE5DC]">
                <div className="text-lg font-serif font-semibold text-stone-900 mb-1">
                  1. Proportions
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Balancing oversized knits with slim denim, or wide-leg trousers with fitted baby tees.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#EAE5DC]">
                <div className="text-lg font-serif font-semibold text-stone-900 mb-1">
                  2. Tactile Depth
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Combining soft cashmere, buttery suede, crisp poplin, and structured virgin wool.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg border border-[#EAE5DC]">
                <div className="text-lg font-serif font-semibold text-stone-900 mb-1">
                  3. Wearability
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Outfits designed for real temperatures, public transit, coffee strolls, and 9-to-5 life.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Newsletter Signup */}
      <NewsletterBlock />
    </div>
  );
}

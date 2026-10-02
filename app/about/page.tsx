import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Heart, Compass, CheckCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import NewsletterBlock from '@/components/blog/NewsletterBlock';

export const metadata: Metadata = {
  title: 'About Our Fashion Philosophy | Women’s Style',
  description:
    'Learn about Women’s Style | Outfit Ideas. Our editorial team curates timeless seasonal lookbooks, capsule wardrobes, and Pinterest fashion formulas.',
};

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-14 space-y-16">
      <Container size="md">
        {/* Header */}
        <header className="space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block font-medium">
            About Women’s Style
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 tracking-tight leading-tight">
            Curating Outfits That Make Everyday Dressing Inspiring.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Born out of frustration with disposable fast-fashion and unrealistic runway styling, Women’s Style is your digital editorial moodboard for real-life outfit formulas.
          </p>
        </header>

        {/* Hero Visual */}
        <div className="my-10 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#EAE5DC]">
          <Image
            src="/images/hero.jpg"
            alt="Women’s Style Editorial Moodboard"
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        {/* Editorial Story */}
        <div className="space-y-8 text-stone-700 leading-relaxed text-base">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
              Our Pinterest-First Philosophy
            </h2>
            <p>
              We believe a great outfit starts with intention rather than a shopping spree. When you open Pinterest on a chilly October morning, you don’t need 500 random product links—you need an actionable formula: <em>a tailored wool coat + cream fisherman knit + straight raw denim + pointed kitten boots</em>.
            </p>
            <p>
              By breaking down seasonal trends into clear color palettes, proportional guidelines, and capsule checklists, we give you the tools to look effortlessly put-together every single morning.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC] space-y-2">
              <Sparkles className="w-5 h-5 text-[#8C4A32]" />
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Closet First
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Prioritize staples you already own before purchasing new seasonal pieces.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC] space-y-2">
              <Compass className="w-5 h-5 text-[#8C4A32]" />
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Weather Reality
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Costumes that don’t freeze in October, and winter outfits that survive snowstorms in style.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-[#EAE5DC] space-y-2">
              <Heart className="w-5 h-5 text-[#8C4A32]" />
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Timeless Proportion
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Rules of volume, texture, and silhouette that flatter across body types.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-[#EAE5DC] space-y-4">
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              The Editorial Team
            </h2>
            <p>
              Our contributors include wardrobe stylists, vintage collectors, and fashion editors based in New York, London, and Stockholm. Every lookbook is road-tested for genuine comfort, thermal insulation, and visual balance.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#8C4A32] hover:underline"
              >
                <span>Browse our latest seasonal lookbooks</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Newsletter */}
      <NewsletterBlock />
    </div>
  );
}

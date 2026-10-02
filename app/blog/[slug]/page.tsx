import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Bookmark, CheckSquare, Sparkles } from 'lucide-react';
import { posts, getPostBySlug, getRelatedPosts } from '@/content/posts';
import Container from '@/components/ui/Container';
import PostCard from '@/components/blog/PostCard';
import TableOfContents from '@/components/blog/TableOfContents';
import ShareButtons from '@/components/blog/ShareButtons';
import NativeBanner from '@/components/ads/NativeBanner';
import NewsletterBlock from '@/components/blog/NewsletterBlock';
import CostumeGallery from '@/components/blog/CostumeGallery';

interface PageProps {
  params: {
    slug: string;
  };
}

// 1. Next.js Static Site Generation (SSG)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Next.js Dynamic SEO Metadata per post
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Women’s Style',
      description: 'The requested outfit guide could not be found.',
    };
  }

  const postUrl = `https://womensstyle.fashion/blog/${post.slug}`;

  return {
    title: `${post.title} | Women’s Style`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      siteName: 'Women’s Style | Outfit Ideas',
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 675,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  // Table of Contents headings
  const tocItems = [
    ...(post.outfits && post.outfits.length > 0
      ? [{ id: 'costume-gallery', title: '55 Costume Lookbook Gallery' }]
      : []),
    ...post.sections.map((section) => ({
      id: section.id,
      title: section.title,
    })),
  ];

  // Schema.org BlogPosting Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `https://womensstyle.fashion${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Women’s Style | Outfit Ideas',
      logo: {
        '@type': 'ImageObject',
        url: 'https://womensstyle.fashion/images/hero.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://womensstyle.fashion/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <article className="py-6 sm:py-10">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Container size="lg">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all outfit lookbooks</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="max-w-3xl mx-auto space-y-4 mb-8 text-center sm:text-left">
          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium tracking-wider uppercase text-[#8C4A32] bg-[#F2EDE4] px-2.5 py-1 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 leading-[1.18] tracking-tight">
            {post.title}
          </h1>

          {/* Metadata Row: Date, Reading Time, Author */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-stone-500 pt-2 border-b border-[#EAE5DC] pb-6">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-stone-400" />
              <span className="font-medium text-stone-800">{post.author.name}</span>
              <span className="text-stone-400">({post.author.role})</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>{post.date}</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-[#EAE5DC] bg-stone-100">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
            />
          </div>
          <p className="text-[11px] text-stone-400 italic text-center mt-2 font-serif">
            Editorial curation & photography: Women’s Style seasonal lookbook 2026.
          </p>
        </div>

        {/* Native Banner Ad: Under the Cover Image */}
        <div className="max-w-4xl mx-auto mb-10">
          <NativeBanner />
        </div>

        {/* Main Content Layout with Sticky Share Buttons */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Sticky Share Floating Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <ShareButtons
              sticky
              title={post.title}
              image={post.coverImage}
              description={post.excerpt}
            />
          </div>

          {/* Center Column: Reading Column (Max ~720px) */}
          <div className="lg:col-span-11 max-w-2xl mx-auto w-full">
            {/* Opening Intro Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              {post.intro.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'text-lg sm:text-xl text-stone-800 font-normal leading-relaxed' : ''}>
                  {p}
                </p>
              ))}
            </div>

            {/* Table of Contents */}
            <TableOfContents items={tocItems} />

            {/* 55 Outfits Interactive Costume Gallery */}
            {post.outfits && post.outfits.length > 0 && (
              <CostumeGallery outfits={post.outfits} />
            )}

            {/* Rendered Content Sections */}
            <div className="space-y-14 mt-10">
              {post.sections.map((section, sectionIdx) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-24 space-y-6 pt-4 border-t border-[#EAE5DC]"
                >
                  {/* Section Title with subtle index indicator */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8C4A32] font-semibold">
                      Section 0{sectionIdx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
                      {section.title}
                    </h2>
                    {section.intro && (
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                        {section.intro}
                      </p>
                    )}
                  </div>

                  {/* Optional Paragraphs */}
                  {section.paragraphs && section.paragraphs.length > 0 && (
                    <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  )}

                  {/* Outfit Ideas List */}
                  {section.items && section.items.length > 0 && (
                    <div className="grid grid-cols-1 gap-6 pt-2">
                      {section.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-5 sm:p-6 rounded-xl bg-white border border-[#EAE5DC] hover:border-[#D5CFC3] transition-all space-y-3.5 shadow-2xs group"
                        >
                          {item.image && (
                            <div className="relative aspect-[9/16] w-full max-w-md mx-auto rounded-xl overflow-hidden bg-stone-100 border border-[#EAE5DC] mb-4 shadow-xs">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 640px) 100vw, 448px"
                                className="object-cover transition-transform duration-500 group-hover:scale-102"
                              />
                              <div className="absolute top-3 left-3 px-2.5 py-1 bg-stone-900/90 backdrop-blur-xs text-white text-[11px] font-mono uppercase tracking-wider rounded-xs shadow-xs">
                                {item.name.includes("Formula") ? item.name.split(":")[0] : `Look #${itemIdx + 1}`} · 9:16
                              </div>
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-3">
                            <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 flex items-center gap-2">
                              <span className="text-xs font-mono text-[#8C4A32] font-bold">
                                #{itemIdx + 1}
                              </span>
                              <span>{item.name}</span>
                            </h3>
                          </div>

                          <p className="text-sm text-stone-700 leading-relaxed">
                            {item.description}
                          </p>

                          {item.stylingTip && (
                            <div className="pt-2 border-t border-[#F2EDE4] flex items-start gap-2 text-xs text-stone-600 bg-[#FAF8F5] p-3 rounded-md">
                              <Sparkles className="w-3.5 h-3.5 text-[#8C4A32] shrink-0 mt-0.5" />
                              <div>
                                <strong className="text-stone-800">Stylist Tip: </strong>
                                <span>{item.stylingTip}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Capsule Checklist */}
                  {section.checklist && section.checklist.length > 0 && (
                    <div className="p-6 bg-white rounded-xl border border-[#E0D9CD] shadow-sm space-y-3">
                      <div className="flex items-center gap-2 text-stone-900 font-serif text-lg font-medium mb-1">
                        <CheckSquare className="w-5 h-5 text-[#8C4A32]" />
                        <span>Capsule Checklist Items</span>
                      </div>
                      <ul className="space-y-2.5">
                        {section.checklist.map((item, cIdx) => (
                          <li
                            key={cIdx}
                            className="flex items-start gap-3 text-sm text-stone-700 border-b border-[#F5F2EB] pb-2 last:border-none last:pb-0"
                          >
                            <span className="w-4 h-4 rounded-xs border border-stone-300 flex items-center justify-center shrink-0 mt-0.5 text-[#8C4A32] text-xs font-bold">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Practical Tips */}
                  {section.tips && section.tips.length > 0 && (
                    <div className="space-y-3 p-5 bg-[#F5F2EB] rounded-xl border border-[#E5E0D4]">
                      <h4 className="font-serif text-base font-medium text-stone-900">
                        Stylist Field Rules
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                        {section.tips.map((tip, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="text-[#8C4A32] font-bold">·</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* FAQs */}
                  {section.faqs && section.faqs.length > 0 && (
                    <div className="space-y-4 pt-2">
                      {section.faqs.map((faq, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-5 bg-white rounded-xl border border-[#EAE5DC] space-y-2 shadow-2xs"
                        >
                          <h4 className="font-serif text-base font-medium text-stone-900">
                            Q: {faq.question}
                          </h4>
                          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                </section>
              ))}
            </div>

            {/* Bottom Horizontal Social Share Bar */}
            <ShareButtons
              title={post.title}
              image={post.coverImage}
              description={post.excerpt}
            />

            {/* Author Bio Box */}
            <div className="p-6 bg-white rounded-xl border border-[#EAE5DC] flex flex-col sm:flex-row items-center sm:items-start gap-4 my-10 shadow-2xs">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-stone-200 shrink-0 relative">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] font-medium">
                  Curated By
                </span>
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  {post.author.name}
                </h3>
                <p className="text-xs text-stone-500 font-medium">{post.author.role}</p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  Styling consultant and contributing fashion editor specializing in seasonal wardrobes, vintage aesthetics, and minimalist capsule curation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-[#EAE5DC]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block mb-1">
                  Keep Exploring
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900">
                  Related Seasonal Lookbooks
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-medium text-[#8C4A32] hover:underline"
              >
                View all guides →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </Container>

      {/* Newsletter Block */}
      <NewsletterBlock />
    </article>
  );
}

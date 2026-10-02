/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import RootLayout from '@/app/layout';
import HomePage from '@/app/page';
import BlogHubPage from '@/app/blog/page';
import BlogPostPage from '@/app/blog/[slug]/page';
import AboutPage from '@/app/about/page';
import ContactPage from '@/app/contact/page';
import PrivacyPage from '@/app/privacy/page';
import { getPostBySlug } from '@/content/posts';
import Link from 'next/link';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handleNavigate = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigate);
    window.addEventListener('applet-navigate', handleNavigate);
    return () => {
      window.removeEventListener('popstate', handleNavigate);
      window.removeEventListener('applet-navigate', handleNavigate);
    };
  }, []);

  // Update dynamic page title in browser tab
  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'Women’s Style | Outfit Ideas – Seasonal Fashion & Trends 2026';
    } else if (currentPath === '/blog') {
      document.title = 'Lookbook Library & Outfit Ideas | Women’s Style';
    } else if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '').replace(/\/$/, '');
      const post = getPostBySlug(slug);
      if (post) {
        document.title = `${post.title} | Women’s Style`;
      } else {
        document.title = 'Post Not Found | Women’s Style';
      }
    } else if (currentPath === '/about') {
      document.title = 'About Our Editorial | Women’s Style';
    } else if (currentPath === '/contact') {
      document.title = 'Contact the Editorial Desk | Women’s Style';
    } else if (currentPath === '/privacy') {
      document.title = 'Privacy Policy | Women’s Style';
    }
  }, [currentPath]);

  // Route dispatcher
  const renderPage = () => {
    const normalized = currentPath.replace(/\/$/, '') || '/';

    if (normalized === '/') {
      return <HomePage />;
    }

    if (normalized === '/blog') {
      return <BlogHubPage />;
    }

    if (normalized.startsWith('/blog/')) {
      const slug = normalized.replace('/blog/', '');
      const post = getPostBySlug(slug);

      if (!post) {
        return (
          <div className="py-24 text-center max-w-lg mx-auto px-4 space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] font-semibold">
              404 Error
            </span>
            <h1 className="font-serif text-3xl font-medium text-stone-900">
              Outfit Guide Not Found
            </h1>
            <p className="text-sm text-stone-600 leading-relaxed">
              The lookbook or outfit article you are searching for might have moved or is being updated for the next season.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-md text-xs font-medium hover:bg-stone-800 transition-colors"
              >
                <span>Browse all outfit guides</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        );
      }

      return <BlogPostPage params={{ slug }} />;
    }

    if (normalized === '/about') {
      return <AboutPage />;
    }

    if (normalized === '/contact') {
      return <ContactPage />;
    }

    if (normalized === '/privacy') {
      return <PrivacyPage />;
    }

    // Default 404
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4 space-y-4">
        <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] font-semibold">
          404
        </span>
        <h1 className="font-serif text-3xl font-medium text-stone-900">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          We couldn&apos;t find the page you were looking for. Explore our latest seasonal fashion inspirations below.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-md text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <span>Return to Homepage</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    );
  };

  return <RootLayout>{renderPage()}</RootLayout>;
}

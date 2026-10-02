'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import Container from '../ui/Container';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DC] transition-all">
      <Container size="lg">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Zone 1: Brand Wordmark (Single text element in editorial font) */}
          <Link
            href="/"
            className="group flex flex-col justify-center"
            aria-label="Women’s Style Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#8C4A32] transition-colors leading-none">
              Women’s Style
            </span>
            <span className="text-[10px] tracking-widest uppercase font-sans text-stone-500 mt-1 font-medium">
              Outfit Ideas & Inspiration
            </span>
          </Link>

          {/* Zone 2: Navigation Links (Text with subtle active/hover underlines) */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive(link.href)
                    ? 'text-stone-900 font-semibold'
                    : 'hover:text-stone-900'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8C4A32] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide uppercase text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors shadow-xs whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Explore Outfits</span>
            </Link>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 rounded-md"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#EAE5DC] space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href)
                    ? 'bg-[#EFECE5] text-stone-900 font-semibold'
                    : 'text-stone-700 hover:bg-[#F5F2EB]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-md hover:bg-stone-800 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Explore All Outfits</span>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;

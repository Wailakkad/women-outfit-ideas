import React from 'react';
import Link from 'next/link';
import Container from '../ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] border-t border-stone-800 pt-16 pb-12 mt-20">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              Women’s Style | Outfit Ideas
            </span>
            <p className="text-stone-400 text-sm max-w-md leading-relaxed">
              Curated seasonal wardrobe formulas, chic capsule checklists, and outfit inspiration designed for effortless everyday elegance. Pin your favorite looks and wear what makes you feel exceptional.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-400">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E60023] text-white font-bold text-[10px]">
                P
              </span>
              <span>Find us on Pinterest: <strong>@womensstyleideas</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  All Blog Posts
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Editorial
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Guides */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-mono text-stone-400">
              Trending Guides
            </h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li>
                <Link
                  href="/blog/womens-halloween-costume-ideas-2026"
                  className="hover:text-white transition-colors"
                >
                  55 Halloween Costumes 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/womens-fall-outfits-2026"
                  className="hover:text-white transition-colors"
                >
                  Fall 2026 Capsule Wardrobe
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/cute-winter-outfits-for-women"
                  className="hover:text-white transition-colors"
                >
                  30 Cute Winter Outfits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Women’s Style | Outfit Ideas. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Editorial Contact
            </Link>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noreferrer"
              className="hover:text-stone-300 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

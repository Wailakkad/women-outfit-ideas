import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Women’s Style',
  description: 'Privacy Policy and advertising disclosure for Women’s Style | Outfit Ideas.',
};

export default function PrivacyPage() {
  return (
    <div className="py-8 sm:py-14">
      <Container size="prose">
        <article className="space-y-6 text-stone-700 leading-relaxed text-sm sm:text-base">
          <header className="space-y-2 pb-6 border-b border-[#EAE5DC]">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block font-medium">
              Legal & Disclosures
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
              Privacy Policy & Advertising Disclosure
            </h1>
            <p className="text-xs text-stone-500">
              Last updated: October 1, 2026
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-stone-900">
              1. Information We Collect
            </h2>
            <p>
              Women’s Style (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. When you visit our website, subscribe to our newsletter, or fill out our contact form, we collect information you voluntarily provide, such as your email address and name.
            </p>
            <p>
              Like most blogs, we also automatically collect non-personally identifiable log data, including browser types, referring pages, and device information to optimize site performance and Pinterest sharing features.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-stone-900">
              2. Cookies & Advertising Partners
            </h2>
            <p>
              We may partner with third-party advertising networks (such as Adsterra, Google AdSense, and affiliate fashion platforms) to serve relevant advertisements. These partners may use cookies, web beacons, and similar technologies to measure ad effectiveness and personalize commercial content.
            </p>
            <p>
              You may manage or disable cookies via your personal browser settings at any time without impacting your ability to browse our style lookbooks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-stone-900">
              3. Affiliate Disclosure
            </h2>
            <p>
              Some editorial articles may contain affiliate links. If you click a link and make a purchase, we may receive a modest commission at zero additional cost to you. Our editorial recommendations remain completely independent—we only feature pieces that meet our quality, aesthetic, and durability standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-stone-900">
              4. Contact
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our team via our{' '}
              <a href="/contact" className="text-[#8C4A32] underline">
                contact page
              </a>.
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
}

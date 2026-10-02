'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';

interface NewsletterBlockProps {
  className?: string;
  compact?: boolean;
}

export function NewsletterBlock({ className = '', compact = false }: NewsletterBlockProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  if (compact) {
    return (
      <div className={`p-6 bg-[#F5F2EB] border border-[#E8E2D5] rounded-xl ${className}`}>
        <h3 className="font-serif text-xl font-medium text-stone-900 mb-1">
          Weekly Style Edits
        </h3>
        <p className="text-xs text-stone-600 mb-4 leading-relaxed">
          The top 5 Pinterest trending outfit formulas delivered every Sunday morning. No spam.
        </p>

        {status === 'success' ? (
          <div className="flex items-center gap-2 p-3 bg-white rounded-md border border-emerald-200 text-emerald-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>You’re subscribed! Watch your inbox this Sunday.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="w-full text-xs px-3.5 py-2.5 bg-white border border-[#D8D2C5] rounded-md focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-colors"
              />
            </div>
            <Button
              type="submit"
              size="sm"
              variant="primary"
              className="w-full justify-center"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining...' : 'Get Weekly Looks'}
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className={`py-14 my-12 bg-[#F2EDE4] border-y border-[#E2DBD0] ${className}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C4A32] block mb-2">
          The Sunday Style Edit
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3 tracking-tight">
          Never Wonder What To Wear Again
        </h2>
        <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Join 42,000+ stylish women receiving our weekly breakdown of seasonal lookbooks, capsule wardrobes, and affordable pieces you can shop or recreate from your closet.
        </p>

        {status === 'success' ? (
          <div className="max-w-md mx-auto p-4 bg-white rounded-lg border border-emerald-200 text-emerald-800 text-sm flex items-center justify-center gap-2.5 shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Welcome! We’ve sent your Fall 2026 Starter Capsule PDF.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                aria-label="Email address"
                className="w-full text-sm pl-10 pr-4 py-2.5 bg-white border border-[#D5CFC3] rounded-md focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-colors"
              />
            </div>
            <Button
              type="submit"
              size="md"
              variant="primary"
              disabled={status === 'loading'}
              className="w-full sm:w-auto"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}

        <p className="text-[11px] text-stone-500 mt-3">
          Zero spam. Unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}

export default NewsletterBlock;

'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Editorial Inquiry');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }, 700);
  };

  return (
    <div className="py-8 sm:py-14">
      <Container size="md">
        <div className="max-w-2xl mx-auto space-y-8">
          <header className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#8C4A32] block font-medium">
              Get In Touch
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
              Contact the Editorial Desk
            </h1>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Have an outfit styling question, capsule collaboration, or brand partnership inquiry? We’d love to hear from you.
            </p>
          </header>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE5DC] shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-2xl font-medium text-stone-900">
                  Message Received
                </h3>
                <p className="text-stone-600 text-sm max-w-sm mx-auto">
                  Thank you for reaching out. Our editorial team reviews messages daily and will reply within 24–48 hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setStatus('idle')}
                  className="mt-4"
                >
                  Send another note
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-stone-700 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Lauren Miller"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD7CC] rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-stone-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="lauren@example.com"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD7CC] rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 block">
                    Subject / Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD7CC] rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900"
                  >
                    <option value="Editorial Inquiry">Editorial & Styling Advice</option>
                    <option value="Pinterest Collaboration">Pinterest / Social Collaboration</option>
                    <option value="Brand Partnership">Brand Sponsorship / Ad Inquiry</option>
                    <option value="General Question">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-700 block">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your outfit question, lookbook submission, or proposal..."
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD7CC] rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="md"
                  variant="primary"
                  disabled={status === 'loading'}
                  className="w-full justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

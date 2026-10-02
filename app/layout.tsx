import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/src/index.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Women’s Style | Outfit Ideas – Seasonal Fashion & Trends 2026',
    template: '%s | Women’s Style',
  },
  description:
    'Curated seasonal fashion inspiration, cute Halloween costume guides, trendy Fall 2026 outfit formulas, and cozy winter styling for women.',
  keywords: [
    'womens fashion',
    'outfit ideas',
    'fall outfits 2026',
    'halloween costume ideas',
    'cute winter outfits',
    'capsule wardrobe',
    'pinterest fashion',
  ],
  authors: [{ name: 'Women’s Style Editorial' }],
  creator: 'Women’s Style',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://womensstyle.fashion',
    siteName: 'Women’s Style | Outfit Ideas',
    title: 'Women’s Style | Outfit Ideas – Seasonal Fashion & Trends 2026',
    description:
      'Curated seasonal fashion inspiration, cute Halloween costume guides, trendy Fall 2026 outfit formulas, and cozy winter styling for women.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Women’s Style Fashion Lookbook',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women’s Style | Outfit Ideas – Seasonal Fashion & Trends 2026',
    description:
      'Curated seasonal fashion inspiration, cute Halloween costume guides, trendy Fall 2026 outfit formulas, and cozy winter styling for women.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

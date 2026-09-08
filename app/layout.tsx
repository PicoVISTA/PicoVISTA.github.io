import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://picovista.github.io'),
  title: 'PicoVISTA — Small Policy, Selective Reasoning',
  description: 'An ultra-lightweight on-device framework for robust robot manipulation, with selective reasoning for risky decisions.',
  keywords: ['robot manipulation', 'vision-language-action', 'on-device AI', 'world model', 'edge robotics'],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'PicoVISTA — Small Policy, Selective Reasoning',
    description: 'Distill for routine control. Reason on demand.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'PicoVISTA project preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PicoVISTA — Small Policy, Selective Reasoning',
    description: 'Distill for routine control. Reason on demand.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

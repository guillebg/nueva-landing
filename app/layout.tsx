import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MailSense - AI-Powered Email Management',
  description:
    'Save up to 2 hours daily with AI-powered email management. Automate tasks, prioritize important emails, and respond faster.',
  icons: {
    icon: [
      {
        url: '/images/idevibelogo.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/idevibelogo.png',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    apple: [
      {
        url: '/images/idevibelogo.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
    shortcut: [{ url: '/images/idevibelogo.png' }],
    other: [
      {
        rel: 'icon',
        url: '/images/idevibelogo.png',
      },
    ],
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/idevibelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/idevibelogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/idevibelogo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-black bg-dotted-grid`}>{children}</body>
    </html>
  );
}

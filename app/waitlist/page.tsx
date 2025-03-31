'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';
import { useState } from 'react';

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

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', { email, privacyAccepted });
  };

  return (
    <div className={`min-h-screen bg-black text-foreground ${inter.className}`}>
      <header className="flex items-center justify-between py-6 px-8 border-b border-neutral-800/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          MailSense
        </Link>
      </header>

      <main className="max-w-[600px] mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${playfair.className}`}>
            Join the Waitlist
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Be the first to know about our launch. Join our exclusive waitlist for early access.
          </p>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <p className="text-lg text-blue-400">
              ✨ Early Bird Bonus: The first 50 waitlist members will get a FREE premium account for
              3 months!
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30"
              required
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              checked={privacyAccepted}
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
              className="mt-1"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-400">
              I accept the{' '}
              <Link href="/privacidad" className="text-blue-400 hover:text-blue-300">
                privacy policy
              </Link>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full text-lg py-6"
            disabled={!privacyAccepted || !email}
          >
            Join Waitlist
          </Button>
        </form>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800/50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 MailSense. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terminos" className="text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacidad" className="text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/contacto" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

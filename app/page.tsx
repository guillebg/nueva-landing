'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';

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

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector(
        'script[src="https://tally.so/widgets/embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-black text-foreground ${inter.className}`}>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }

        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }

        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }

        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(52, 144, 220, 0.15) 0%,
            rgba(101, 116, 205, 0.1) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 {
          transition-delay: 0.1s;
        }
        .scroll-delay-2 {
          transition-delay: 0.2s;
        }
        .scroll-delay-3 {
          transition-delay: 0.3s;
        }

        .gradient-text {
          background: linear-gradient(45deg, #3490dc, #6574cd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-8 border-b border-neutral-800/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          MailSense
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-gray-300 hover:text-white">
            Features
          </Link>
          <Link href="#faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
          <Link href="/waitlist">
            <Button variant="outline">Join Waitlist</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 px-8 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${playfair.className}`}>
              Transform Your Inbox into a<span className="gradient-text"> Productivity Engine</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              We analyze your emails 24/7 to prioritize what matters, automate repetitive tasks, and
              help you respond faster with AI.
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="text-lg px-8 py-6">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-8 bg-neutral-900/50">
          <div className="max-w-[1200px] mx-auto">
            <h2 className={`text-3xl md:text-4xl text-center mb-16 ${playfair.className}`}>
              Tired of Getting Lost in Your Email?
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Old Way */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-red-400 mb-4">The Traditional Way</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✖</span>
                    <span>Wasting 2+ hours daily managing emails manually</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✖</span>
                    <span>Important emails buried in spam and newsletters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✖</span>
                    <span>Writing repetitive responses over and over</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500">✖</span>
                    <span>Stress from keeping inbox under control</span>
                  </li>
                </ul>
              </div>

              {/* MailSense Way */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">With MailSense</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    <span>AI that prioritizes and categorizes your emails automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    <span>Smart responses personalized to your style</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    <span>Automation of repetitive tasks and classification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500">✓</span>
                    <span>Trend analysis and productivity suggestions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-8">
          <div className="max-w-[800px] mx-auto">
            <h2 className={`text-3xl md:text-4xl text-center mb-16 ${playfair.className}`}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div className="scroll-animation">
                <h3 className="text-xl font-semibold mb-3">How does MailSense work?</h3>
                <p className="text-gray-400">
                  MailSense uses advanced AI to analyze your email patterns, prioritize important
                  messages, and suggest personalized responses based on your communication style.
                </p>
              </div>

              <div className="scroll-animation">
                <h3 className="text-xl font-semibold mb-3">Is MailSense safe to use?</h3>
                <p className="text-gray-400">
                  Security is our top priority. We use military-grade encryption and never store
                  sensitive content from your emails.
                </p>
              </div>

              <div className="scroll-animation">
                <h3 className="text-xl font-semibold mb-3">Which email clients are supported?</h3>
                <p className="text-gray-400">MailSense is compatible with Gmail</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-b from-neutral-900 to-black">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl mb-8 ${playfair.className}`}>
              Let AI Handle Your Email
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Save up to 2 hours daily and keep your inbox under control
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="text-lg px-8 py-6">
                Join Waitlist ►
              </Button>
            </Link>
          </div>
        </section>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

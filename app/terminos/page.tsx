'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import Link from 'next/link'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function TermsPage() {
  return (
    <div className={`min-h-screen bg-black text-foreground ${inter.className}`}>
      <header className="flex items-center justify-between py-6 px-8 border-b border-neutral-800/50">
        <Link href="/" className={`text-2xl md:text-3xl font-medium ${playfair.className}`}>
          MailSense
        </Link>
      </header>

      <main className="max-w-[800px] mx-auto px-8 py-12">
        <h1 className={`text-3xl md:text-4xl font-bold mb-8 ${playfair.className}`}>
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Last updated: 02/25/2025</p>

        <div className="prose prose-invert max-w-none">
          <p className="mb-6">
            Welcome to MailSense (the "Service"), operated by MailSense (the "Company," "we," "us," or "our"). 
            By accessing or using our Service, you agree to these Terms of Service (the "Terms"). 
            If you do not accept them, do not use the Service.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Use of the Service</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">1.1. Eligibility</h3>
          <p className="mb-4">
            You must be at least 18 years old and legally capable of entering into contracts to use our Service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1.2. License</h3>
          <p className="mb-4">
            We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service 
            for the purpose of automating email management in Gmail through artificial intelligence.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">1.3. Prohibited Activities</h3>
          <p className="mb-4">You may not:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Use the Service for illegal purposes.</li>
            <li>Attempt to reverse engineer, copy, or modify our software.</li>
            <li>Interfere with or disrupt the Service.</li>
            <li>Use the Service to send spam, impersonate others, or engage in fraudulent activities.</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Waitlist and Data Collection</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">2.1. Waitlist Registration</h3>
          <p className="mb-4">
            By joining the waitlist, you provide your email address and agree to receive updates about the Service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2.2. Data Usage</h3>
          <p className="mb-4">
            We collect and store your email address to send you notifications and improve the user experience. 
            We do not sell or share your email with third parties without your consent.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">2.3. Opt-out</h3>
          <p className="mb-4">
            You can unsubscribe at any time by clicking the "unsubscribe" link in our emails.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">3.1. Ownership</h3>
          <p className="mb-4">
            All rights, titles, and interests in the Service, including trademarks, content, and software, remain ours.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">3.2. Restrictions</h3>
          <p className="mb-4">
            You may not use our brand, logos, or other proprietary materials without written permission.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Disclaimers and Liability Limitations</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">4.1. No Warranty</h3>
          <p className="mb-4">
            The Service is provided "as is" without any warranties, express or implied.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">4.2. Limitation of Liability</h3>
          <p className="mb-4">
            We will not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Termination</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">5.1. Breach</h3>
          <p className="mb-4">
            We reserve the right to cancel or suspend your access if you violate these Terms.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">5.2. Effect of Termination</h3>
          <p className="mb-4">
            Upon termination, your right to use the Service immediately ceases.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Changes to These Terms</h2>
          <p className="mb-4">
            We may update these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Governing Law and Disputes</h2>
          <p className="mb-4">
            These Terms are governed by the laws of California, United States. Any disputes will be resolved in the courts of California.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 ${playfair.className}`}>Contact Information</h2>
          <p className="mb-4">
            If you have any questions, contact us at: <a href="mailto:hello@mailsense.com" className="text-blue-400 hover:text-blue-300">hello@mailsense.com</a>
          </p>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800/50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2024 MailSense. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-gray-400 hover:text-white">
              Privacidad
            </Link>
            <Link href="/contacto" className="text-gray-400 hover:text-white">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 
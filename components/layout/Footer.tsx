'use client'

import Link from 'next/link'
import { Youtube, Instagram, Mail } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    company: [
      { name: t.nav.aboutUs, href: '/ueber-uns' },
      { name: t.nav.channels, href: '/kanaele' },
      { name: t.nav.becomeCreator, href: '/creator' },
    ],
    legal: [
      { name: t.footer.imprint, href: '/impressum' },
      { name: t.footer.privacy, href: '/datenschutz' },
    ],
    social: [
      { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
      { name: 'Instagram', href: 'https://instagram.com', icon: Instagram },
      { name: 'Email', href: 'mailto:hello@jessemedia.de', icon: Mail },
    ],
  }

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JM</span>
              </div>
              <span className="text-xl font-bold text-white">Jesse Media</span>
            </Link>
            <p className="text-white/50 max-w-md mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 
                           flex items-center justify-center text-white/60 
                           hover:text-white hover:border-white/20 transition-all"
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Jesse Media. {t.footer.copyright}
          </p>
          <p className="text-white/40 text-sm">
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  )
}

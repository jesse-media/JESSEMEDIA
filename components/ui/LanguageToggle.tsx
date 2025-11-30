'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10">
      <button
        onClick={() => setLanguage('de')}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'de' ? 'text-white' : 'text-white/50 hover:text-white/70'
        }`}
      >
        {language === 'de' && (
          <motion.div
            layoutId="language-toggle"
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">DE</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'en' ? 'text-white' : 'text-white/50 hover:text-white/70'
        }`}
      >
        {language === 'en' && (
          <motion.div
            layoutId="language-toggle"
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  )
}



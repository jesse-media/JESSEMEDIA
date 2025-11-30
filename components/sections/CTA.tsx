'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="section-padding px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0f] to-[#050505]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="glow-orb glow-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="glow-orb glow-orb-purple absolute top-1/4 right-1/4"
      />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-16 text-center max-w-4xl mx-auto"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderColor: 'rgba(59, 130, 246, 0.2)',
          }}
        >
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.cta.title}{' '}
            <span className="text-gradient">{t.cta.titleHighlight}</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10"
          >
            {t.cta.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/kooperationen" className="btn-glow group">
              {t.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/creator" className="btn-ghost group">
              <Users className="w-5 h-5" />
              {t.cta.secondary}
            </Link>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-sm text-white/40"
          >
            {t.cta.trustIndicators}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

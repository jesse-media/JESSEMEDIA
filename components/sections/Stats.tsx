'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Youtube, Instagram, Eye, Handshake } from 'lucide-react'
import { formatNumber } from '@/lib/utils'
import { totalStats } from '@/data/channels'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let step = 0

      const timer = setInterval(() => {
        step++
        setCurrent(Math.min(increment * step, value))
        if (step >= steps) clearInterval(timer)
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-gradient text-4xl md:text-5xl font-bold">
      {formatNumber(Math.floor(current))}{suffix}
    </span>
  )
}

export default function Stats() {
  const { t } = useLanguage()

  const stats = [
    { value: totalStats.subscribers, suffix: '+', label: t.stats.subscribers, icon: Youtube },
    { value: totalStats.instagramFollowers, suffix: '+', label: t.stats.followers, icon: Instagram },
    { value: totalStats.totalViews, suffix: '+', label: t.stats.views, icon: Eye },
    { value: totalStats.cooperations, suffix: '+', label: t.stats.cooperations, icon: Handshake },
  ]

  return (
    <section className="section-padding px-6">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.stats.title}</h2>
          <p className="text-lg text-white/60">
            {t.stats.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-interactive p-6 md:p-8 text-center"
            >
              <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white/40 mx-auto mb-4" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 mt-2 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

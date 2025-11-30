'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Youtube, Instagram } from 'lucide-react'
import { channels } from '@/data/channels'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const PlatformIcon = ({ platform }: { platform: string }) => {
  const icons: Record<string, React.ReactNode> = {
    youtube: <Youtube className="w-4 h-4" />,
    instagram: <Instagram className="w-4 h-4" />,
    tiktok: <span className="text-xs font-bold">TT</span>,
  }
  return (
    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70">
      {icons[platform]}
    </div>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <section className="section-padding px-6 relative">
      {/* Background Glow */}
      <div className="glow-orb glow-orb-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.portfolio.title}</h2>
          <p className="text-lg text-white/60">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Channel Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={`/kanaele/${channel.slug}`}>
                <div className="glass-card glass-card-interactive group overflow-hidden">
                  {/* Thumbnail */}
                  <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${channel.bannerColor} opacity-80`}>
                    {/* Placeholder gradient until real images are added */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Youtube className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 
                                    group-hover:opacity-100 transition-opacity duration-300
                                    flex items-center justify-center">
                      <span className="text-lg font-semibold">{t.portfolio.learnMore}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-bold">{channel.name}</h3>
                      <div className="flex gap-2">
                        {channel.platforms.map((p) => (
                          <PlatformIcon key={p} platform={p} />
                        ))}
                      </div>
                    </div>

                    <p className="text-white/60 mb-6 line-clamp-2">{channel.description}</p>

                    {/* Stats */}
                    <div className="flex gap-6">
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-gradient">
                          {channel.stats.subscribers}
                        </div>
                        <div className="text-sm text-white/40">{t.portfolio.subscribers}</div>
                      </div>
                      <div>
                        <div className="text-xl md:text-2xl font-bold text-gradient">
                          {channel.stats.avgViews}
                        </div>
                        <div className="text-sm text-white/40">{t.portfolio.avgViews}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/kanaele" className="btn-ghost">
            {t.portfolio.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

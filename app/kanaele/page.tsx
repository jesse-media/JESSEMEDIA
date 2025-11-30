'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Youtube, Instagram, ExternalLink } from 'lucide-react'
import { channels, totalStats } from '@/data/channels'
import { formatNumber } from '@/lib/utils'
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

export default function KanaelePage() {
  const { t } = useLanguage()

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding px-6 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue absolute -top-32 left-1/2 -translate-x-1/2 opacity-20" />
        
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.channelsPage.title}{' '}
              <span className="text-gradient">{t.channelsPage.titleHighlight}</span>
            </h1>
            <p className="text-xl text-white/60 mb-12">
              {t.channelsPage.subtitle}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">
                  {formatNumber(totalStats.subscribers)}+
                </div>
                <div className="text-sm text-white/50">{t.channelsPage.totalSubscribers}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">
                  {formatNumber(totalStats.totalViews)}+
                </div>
                <div className="text-sm text-white/50">{t.channelsPage.lifetimeViews}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">
                  {channels.length}
                </div>
                <div className="text-sm text-white/50">{t.channelsPage.activeChannels}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="section-padding px-6">
        <div className="container-main">
          <div className="grid gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-interactive overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <Link href={`/kanaele/${channel.slug}`} className="block">
                    <div className={`relative aspect-video md:aspect-auto md:h-full bg-gradient-to-br ${channel.bannerColor} opacity-80 group cursor-pointer`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Youtube className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">{t.channelsPage.viewDetails}</span>
                      </div>
                    </div>
                  </Link>

                  {/* Content Side */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{channel.name}</h2>
                        <div className="flex gap-2">
                          {channel.platforms.map((p) => (
                            <PlatformIcon key={p} platform={p} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/60 mb-6">
                      {channel.longDescription || channel.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-xl md:text-2xl font-bold text-gradient">
                          {channel.stats.subscribers}
                        </div>
                        <div className="text-xs text-white/40">{t.portfolio.subscribers}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-xl md:text-2xl font-bold text-gradient">
                          {channel.stats.avgViews}
                        </div>
                        <div className="text-xs text-white/40">{t.portfolio.avgViews}</div>
                      </div>
                      <div className="text-center p-4 rounded-xl bg-white/5">
                        <div className="text-xl md:text-2xl font-bold text-gradient">
                          {channel.stats.totalViews}
                        </div>
                        <div className="text-xs text-white/40">{t.channelsPage.totalViews}</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {channel.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      <Link href={`/kanaele/${channel.slug}`} className="btn-glow !py-2 !px-4 text-sm">
                        {t.channelsPage.details}
                      </Link>
                      {channel.youtubeUrl && (
                        <a
                          href={channel.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost !py-2 !px-4 text-sm"
                        >
                          <Youtube className="w-4 h-4" />
                          YouTube
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              {t.channelsPage.cooperationInterest}
            </h2>
            <p className="text-white/60 mb-8">
              {t.channelsPage.cooperationText}
            </p>
            <Link href="/kooperationen" className="btn-glow">
              {t.channelsPage.requestNow}
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

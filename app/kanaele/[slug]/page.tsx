'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { 
  Youtube, Instagram, ExternalLink, Users, Eye, Video, 
  TrendingUp, Heart, MessageCircle, Calendar, Target,
  Play, ArrowRight, CheckCircle, Globe, BarChart3
} from 'lucide-react'
import { getChannelBySlug } from '@/data/channels'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const PlatformButton = ({ platform, url }: { platform: string; url?: string }) => {
  if (!url) return null
  
  const config: Record<string, { icon: React.ReactNode; label: string; color: string }> = {
    youtube: { 
      icon: <Youtube className="w-5 h-5" />, 
      label: 'YouTube',
      color: 'hover:bg-red-500/20 hover:border-red-500/50'
    },
    instagram: { 
      icon: <Instagram className="w-5 h-5" />, 
      label: 'Instagram',
      color: 'hover:bg-pink-500/20 hover:border-pink-500/50'
    },
    tiktok: { 
      icon: <span className="text-sm font-bold">TT</span>, 
      label: 'TikTok',
      color: 'hover:bg-cyan-500/20 hover:border-cyan-500/50'
    },
  }

  const { icon, label, color } = config[platform] || {}

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 
                 bg-white/5 transition-all ${color}`}
    >
      {icon}
      <span className="font-medium">{label}</span>
      <ExternalLink className="w-4 h-4 opacity-50" />
    </a>
  )
}

const StatCard = ({ icon: Icon, value, label, gradient }: { 
  icon: React.ElementType; value: string; label: string; gradient?: boolean 
}) => (
  <div className="glass-card p-5 md:p-6 text-center">
    <Icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-2 text-white/40" />
    <div className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 ${gradient ? 'text-gradient' : 'text-white'}`}>
      {value}
    </div>
    <div className="text-xs md:text-sm text-white/50">{label}</div>
  </div>
)

const DemographicsBar = ({ label, percentage, color }: { label: string; percentage: number; color: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-white/70">{label}</span>
      <span className="text-white/50">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  </div>
)

export default function ChannelDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const channel = getChannelBySlug(slug)
  const { t } = useLanguage()

  if (!channel) {
    notFound()
  }

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${channel.bannerColor} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        
        {/* Glow Effects */}
        <div className="glow-orb glow-orb-blue absolute -top-32 -left-32 opacity-30" />
        <div className="glow-orb glow-orb-purple absolute top-0 right-0 opacity-20" />

        <div className="container-main relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            {/* Back Link */}
            <Link 
              href="/kanaele" 
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-10 md:mb-12"
            >
              {t.channelDetail.backToChannels}
            </Link>

            {/* Channel Logo Placeholder */}
            <div className={`w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br ${channel.bannerColor} 
                          flex items-center justify-center mb-8 shadow-2xl`}>
              <Youtube className="w-10 h-10 md:w-14 md:h-14 text-white" />
            </div>

            {/* Channel Name & Tagline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {channel.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-8">
              {channel.tagline}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {channel.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 text-sm text-white/70"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Platform Links */}
            <div className="flex flex-wrap gap-4 mb-10">
              <PlatformButton platform="youtube" url={channel.youtubeUrl} />
              <PlatformButton platform="instagram" url={channel.instagramUrl} />
              <PlatformButton platform="tiktok" url={channel.tiktokUrl} />
            </div>

            {/* Quick Stats Row */}
            <div className="flex flex-wrap gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{t.channelDetail.founded} {channel.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{channel.stats.videos} {t.channelDetail.videos}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-white/40" />
                <span className="text-white/60">{channel.stats.uploadFrequency}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Stats Grid */}
      <section className="py-12 md:py-16 px-6 relative z-20">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
              <StatCard icon={Users} value={channel.stats.subscribers} label={t.portfolio.subscribers} gradient />
              <StatCard icon={Eye} value={channel.stats.avgViews} label={t.portfolio.avgViews} gradient />
              <StatCard icon={Play} value={channel.stats.totalViews} label={t.channelsPage.totalViews} gradient />
              <StatCard icon={BarChart3} value={channel.stats.engagementRate || 'N/A'} label={t.channelDetail.engagement} />
              <StatCard icon={Heart} value={channel.stats.avgLikes || 'N/A'} label={t.channelDetail.avgLikes} />
              <StatCard icon={MessageCircle} value={channel.stats.avgComments || 'N/A'} label={t.channelDetail.avgComments} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">{t.channelDetail.aboutChannel}</h2>
              <p className="text-base md:text-lg text-white/70 mb-6 leading-relaxed">
                {channel.longDescription}
              </p>
              <p className="text-white/60 leading-relaxed">
                {channel.story}
              </p>
            </motion.div>

            {/* Unique Selling Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                {t.channelDetail.whyThisChannel}
              </h3>
              <ul className="space-y-4">
                {channel.uniqueSellingPoints.map((usp, index) => (
                  <motion.li
                    key={usp}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{usp}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Types & Target Audience */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Content Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Video className="w-5 h-5 text-cyan-400" />
                {t.channelDetail.contentFormats}
              </h3>
              <div className="flex flex-wrap gap-3">
                {channel.contentTypes.map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Target Audience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                {t.channelDetail.targetAudience}
              </h3>
              <ul className="space-y-3">
                {channel.targetAudience.map((audience) => (
                  <li key={audience} className="flex items-center gap-2 text-white/70">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    {audience}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="section-padding px-6">
        <div className="container-main">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.channelDetail.audienceDemographics}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Age Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                {t.channelDetail.ageGroups}
              </h3>
              <div className="space-y-4">
                {channel.demographics.ageGroups.map((group) => (
                  <DemographicsBar
                    key={group.range}
                    label={group.range}
                    percentage={group.percentage}
                    color="bg-gradient-to-r from-blue-500 to-cyan-500"
                  />
                ))}
              </div>
            </motion.div>

            {/* Gender */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                {t.channelDetail.gender}
              </h3>
              <div className="space-y-4">
                <DemographicsBar
                  label={t.channelDetail.male}
                  percentage={channel.demographics.gender.male}
                  color="bg-gradient-to-r from-blue-500 to-blue-600"
                />
                <DemographicsBar
                  label={t.channelDetail.female}
                  percentage={channel.demographics.gender.female}
                  color="bg-gradient-to-r from-pink-500 to-pink-600"
                />
                <DemographicsBar
                  label={t.channelDetail.diverse}
                  percentage={channel.demographics.gender.other}
                  color="bg-gradient-to-r from-purple-500 to-purple-600"
                />
              </div>
            </motion.div>

            {/* Countries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-400" />
                {t.channelDetail.topCountries}
              </h3>
              <div className="space-y-4">
                {channel.demographics.topCountries.map((country) => (
                  <DemographicsBar
                    key={country.country}
                    label={country.country}
                    percentage={country.percentage}
                    color="bg-gradient-to-r from-green-500 to-emerald-500"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Videos */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.channelDetail.topVideos}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channel.highlights.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card glass-card-interactive overflow-hidden group"
              >
                {/* Video Thumbnail Placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${channel.bannerColor} opacity-30 
                              relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center
                                  group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 line-clamp-2">{video.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-white/50">
                    <Eye className="w-4 h-4" />
                    {video.views} Views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Formats */}
      <section className="section-padding px-6">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.channelDetail.cooperationFormats}</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t.channelDetail.cooperationFormatsSubtitle} {channel.name}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {channel.cooperationFormats.map((format, index) => (
              <motion.div
                key={format}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/80">{format}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden`}
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${channel.bannerColor} opacity-10`} />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.channelDetail.cooperationCta} {channel.name}?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                {t.channelDetail.cooperationCtaText} {channel.stats.subscribers} {t.channelDetail.cooperationCtaText2}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/kooperationen" className="btn-glow group">
                  {t.channelDetail.requestCooperation}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/kanaele" className="btn-ghost">
                  {t.channelDetail.otherChannels}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

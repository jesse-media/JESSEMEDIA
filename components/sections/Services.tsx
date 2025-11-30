'use client'

import { motion } from 'framer-motion'
import { Play, Handshake, Rocket, TrendingUp, Users, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Play,
      title: t.services.ownChannels.title,
      description: t.services.ownChannels.description,
      features: t.services.ownChannels.features,
    },
    {
      icon: Handshake,
      title: t.services.cooperations.title,
      description: t.services.cooperations.description,
      features: t.services.cooperations.features,
    },
    {
      icon: Rocket,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      features: t.services.consulting.features,
    },
  ]

  return (
    <section className="section-padding px-6 bg-[#0a0a0f]">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card glass-card-interactive p-8 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 
                            border border-white/10 flex items-center justify-center mb-6
                            group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                <service.icon className="w-7 h-7 text-blue-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-white/60 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          <div className="text-center p-6">
            <TrendingUp className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gradient">95%</div>
            <div className="text-sm text-white/40">{t.services.satisfaction}</div>
          </div>
          <div className="text-center p-6">
            <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gradient">10+</div>
            <div className="text-sm text-white/40">{t.services.teamMembers}</div>
          </div>
          <div className="text-center p-6">
            <Zap className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gradient">24h</div>
            <div className="text-sm text-white/40">{t.services.responseTime}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

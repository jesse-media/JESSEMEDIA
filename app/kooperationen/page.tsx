'use client'

import { motion } from 'framer-motion'
import { Check, TrendingUp, Users, Zap, BarChart3, ChevronDown } from 'lucide-react'
import CooperationForm from '@/components/forms/CooperationForm'
import { channels } from '@/data/channels'
import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/60">{answer}</p>
      </motion.div>
    </div>
  )
}

export default function KooperationenPage() {
  const { t } = useLanguage()

  const usps = [
    {
      icon: TrendingUp,
      title: t.cooperationsPage.usps.reach.title,
      description: t.cooperationsPage.usps.reach.description,
    },
    {
      icon: BarChart3,
      title: t.cooperationsPage.usps.performance.title,
      description: t.cooperationsPage.usps.performance.description,
    },
    {
      icon: Zap,
      title: t.cooperationsPage.usps.formats.title,
      description: t.cooperationsPage.usps.formats.description,
    },
    {
      icon: Users,
      title: t.cooperationsPage.usps.process.title,
      description: t.cooperationsPage.usps.process.description,
    },
  ]

  const faqs = [
    { question: t.cooperationsPage.faqs.process.question, answer: t.cooperationsPage.faqs.process.answer },
    { question: t.cooperationsPage.faqs.cost.question, answer: t.cooperationsPage.faqs.cost.answer },
    { question: t.cooperationsPage.faqs.duration.question, answer: t.cooperationsPage.faqs.duration.answer },
    { question: t.cooperationsPage.faqs.formats.question, answer: t.cooperationsPage.faqs.formats.answer },
    { question: t.cooperationsPage.faqs.experience.question, answer: t.cooperationsPage.faqs.experience.answer },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding px-6 relative overflow-hidden">
        <div className="glow-orb glow-orb-blue absolute -top-32 -right-32 opacity-20" />
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="badge mb-6">
              ✨ {t.cooperationsPage.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.cooperationsPage.title}{' '}
              <span className="text-gradient">{t.cooperationsPage.titleHighlight}</span>
            </h1>
            <p className="text-xl text-white/60">
              {t.cooperationsPage.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.cooperationsPage.whyUs}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <usp.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
                <p className="text-white/60">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Overview */}
      <section className="section-padding px-6">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{t.cooperationsPage.ourChannels}</h2>
            <p className="text-white/60">
              {t.cooperationsPage.channelsSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{channel.name}</h3>
                    <p className="text-white/50 text-sm">{channel.description}</p>
                  </div>
                </div>
                <div className="flex gap-6 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gradient">{channel.stats.subscribers}</div>
                    <div className="text-xs text-white/40">{t.portfolio.subscribers}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">{channel.stats.avgViews}</div>
                    <div className="text-xs text-white/40">{t.portfolio.avgViews}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {channel.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.cooperationsPage.formTitle}
              </h2>
              <p className="text-white/60 mb-8">
                {t.cooperationsPage.formSubtitle}
              </p>
              <ul className="space-y-4">
                {t.cooperationsPage.formBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <CooperationForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding px-6">
        <div className="container-main max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            {t.cooperationsPage.faq}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}

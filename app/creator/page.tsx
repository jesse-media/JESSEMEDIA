'use client'

import { motion } from 'framer-motion'
import { Video, Brain, Users, BarChart3, Zap, Globe, Laptop, Heart, Rocket } from 'lucide-react'
import ApplicationForm from '@/components/forms/ApplicationForm'

const skills = [
  { icon: Video, title: 'Video Editing', description: 'Premiere, DaVinci, CapCut – du kennst die Tools' },
  { icon: Brain, title: 'Content Strategy', description: 'Du denkst in Formaten und viralen Hooks' },
  { icon: Users, title: 'Community', description: 'Du verstehst, was Communities bewegt' },
  { icon: BarChart3, title: 'Analytics', description: 'Daten sind dein Freund, nicht dein Feind' },
  { icon: Zap, title: 'AI & Automation', description: 'Du nutzt AI-Tools, um effizienter zu sein' },
  { icon: Globe, title: 'Social Native', description: 'Du lebst und atmest Social Media' },
]

const culture = [
  { icon: Laptop, title: 'Remote First', description: 'Arbeite von wo du willst. Hauptsache die Ergebnisse stimmen.' },
  { icon: Zap, title: 'AI-Powered', description: 'Wir nutzen AI und Automation für alles, was automatisierbar ist.' },
  { icon: BarChart3, title: 'Performance-Driven', description: 'Zahlen lügen nicht. Wir messen, was zählt.' },
  { icon: Heart, title: 'Team Culture', description: 'Flache Hierarchien, direktes Feedback, echte Wertschätzung.' },
  { icon: Rocket, title: 'Direct Impact', description: 'Deine Arbeit erreicht Millionen. Vom ersten Tag an.' },
]

export default function CreatorPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding px-6 relative overflow-hidden">
        <div className="glow-orb glow-orb-purple absolute -top-32 -left-32 opacity-20" />
        <div className="glow-orb glow-orb-cyan absolute bottom-0 right-0 opacity-10" />
        
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="badge mb-6">
              🚀 Wir suchen A-Player
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Werde Teil von{' '}
              <span className="text-gradient">Jesse Media</span>
            </h1>
            <p className="text-xl text-white/60">
              Wir bauen Kanäle mit Millionen Reichweite. Dafür brauchen wir die Besten. 
              Kreative Köpfe, die nicht nur mitmachen, sondern mitdenken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Was wir suchen</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Skills kann man lernen. Mindset nicht. Wir suchen Menschen, 
              die Social Media nicht nur verstehen, sondern leben.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:border-white/20 transition-all"
              >
                <skill.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                <p className="text-white/50 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding px-6">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Wie wir arbeiten</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Kein klassisches Büro-Setup. Wir arbeiten remote, async und 
              mit den besten Tools. Ergebnisse zählen, nicht Stunden.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                              flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Zeig uns, was du drauf hast
              </h2>
              <p className="text-white/60 mb-8">
                Kein klassisches Anschreiben. Kein Lebenslauf im PDF-Format. 
                Zeig uns deine Arbeit, deine Kanäle, deine Projekte. Das sagt mehr als 1000 Worte.
              </p>
              <div className="glass-card p-6 mb-6">
                <h4 className="font-bold mb-4">Der Prozess</h4>
                <ol className="space-y-3">
                  {[
                    'Bewerbung absenden',
                    'Wir checken dein Portfolio',
                    'Video-Call zum Kennenlernen',
                    'Test-Projekt (bezahlt)',
                    'Welcome to the team! 🎉',
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 
                                     flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-white/70">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ApplicationForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}


'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Users, Rocket, Heart, Target, Zap } from 'lucide-react'
import { totalStats } from '@/data/channels'
import { formatNumber } from '@/lib/utils'

const values = [
  {
    icon: Heart,
    title: 'Authentizität',
    description: 'Wir machen Content, den wir selbst schauen würden. Keine Fake-Personas, keine gekauften Follower.',
  },
  {
    icon: Target,
    title: 'Qualität vor Quantität',
    description: 'Lieber ein Video, das viral geht, als zehn, die niemand sieht. Wir fokussieren uns auf das, was funktioniert.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Wir nutzen AI und Automation, um effizienter zu sein. Nicht um Abkürzungen zu nehmen, sondern um besser zu werden.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Unsere Zuschauer sind keine Zahlen. Sie sind eine Community, die wir respektieren und wertschätzen.',
  },
]

const milestones = [
  { year: '2021', title: 'Gründung', description: 'Jesse Media wird in Berlin gegründet' },
  { year: '2022', title: '100K', description: 'Erster Kanal erreicht 100.000 Abonnenten' },
  { year: '2023', title: '500K', description: 'Gesamtreichweite überschreitet 500.000' },
  { year: '2024', title: '1M+', description: 'Über 1 Million Abonnenten erreicht' },
]

export default function UeberUnsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding px-6 relative overflow-hidden">
        <div className="glow-orb glow-orb-purple absolute -top-32 -right-32 opacity-20" />
        
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="badge mb-6">
              <MapPin className="w-4 h-4" />
              Made in Berlin
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Wir sind{' '}
              <span className="text-gradient">Jesse Media</span>
            </h1>
            <p className="text-xl text-white/60">
              Eine Digital Media Company mit der Mission, Social Media Kanäle 
              zu bauen, die Millionen Menschen unterhalten und verbinden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {formatNumber(totalStats.subscribers)}+
              </div>
              <div className="text-sm text-white/50">Abonnenten</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {formatNumber(totalStats.totalViews)}+
              </div>
              <div className="text-sm text-white/50">Views</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {totalStats.cooperations}+
              </div>
              <div className="text-sm text-white/50">Kooperationen</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                Berlin
              </div>
              <div className="text-sm text-white/50">Standort</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Jesse Media wurde 2021 in Berlin mit einer einfachen Idee gegründet: 
                  Social Media Content zu produzieren, der nicht nur Klicks generiert, 
                  sondern echte Communities aufbaut.
                </p>
                <p>
                  Was als Ein-Mann-Projekt begann, ist heute eine wachsende Media Company 
                  mit mehreren Kanälen und einer kombinierten Reichweite von über 1,1 Millionen 
                  Abonnenten.
                </p>
                <p>
                  Unser Erfolgsrezept? Authentizität, Konsistenz und ein tiefes Verständnis 
                  dafür, was unsere Communities bewegt. Wir machen keinen Content "für den 
                  Algorithmus" – wir machen Content, der Menschen unterhält.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6">Meilensteine</h3>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="w-16 flex-shrink-0">
                      <span className="text-gradient font-bold">{milestone.year}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{milestone.title}</div>
                      <div className="text-sm text-white/50">{milestone.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding px-6 bg-[#0a0a0f]">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Werte
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Das sind die Prinzipien, nach denen wir arbeiten und Entscheidungen treffen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8"
              >
                <value.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-6">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            }}
          >
            <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Werde Teil unserer Reise
            </h2>
            <p className="text-white/60 mb-8">
              Ob als Partner oder als Teil unseres Teams – wir freuen uns auf dich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kooperationen" className="btn-glow">
                Kooperation anfragen
              </Link>
              <Link href="/creator" className="btn-ghost">
                Creator werden
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}


'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { applicationSchema, type ApplicationFormData } from '@/lib/validations'

const skillOptions = [
  { id: 'video-editing', label: 'Video Editing (Premiere, DaVinci, CapCut)' },
  { id: 'content-strategy', label: 'Content Strategy & Ideation' },
  { id: 'community-management', label: 'Community Management' },
  { id: 'social-analytics', label: 'Social Media Analytics' },
  { id: 'thumbnail-design', label: 'Thumbnail & Grafik Design' },
  { id: 'scripting', label: 'Scripting & Storytelling' },
  { id: 'ai-automation', label: 'AI & Automation Tools' },
  { id: 'camera-production', label: 'Kamera & Produktion' },
]

const availabilityOptions = [
  { value: 'fulltime', label: 'Vollzeit' },
  { value: 'parttime', label: 'Teilzeit' },
  { value: 'freelance', label: 'Freelance / Projekt' },
  { value: 'intern', label: 'Praktikum' },
]

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      skills: [],
    },
  })

  const selectedSkills = watch('skills') || []

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
      } else {
        setError('Es gab einen Fehler. Bitte versuche es erneut.')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setError('Es gab einen Fehler. Bitte versuche es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="glass-card p-8 md:p-12">
      <h3 className="text-2xl font-bold mb-2">Jetzt bewerben</h3>
      <p className="text-white/60 mb-8">
        Zeig uns, was du drauf hast. Wir melden uns bei dir.
      </p>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Bewerbung erhalten!</h4>
            <p className="text-white/60">
              Wir schauen uns dein Profil an und melden uns, wenn es passt.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Dein Name *
                </label>
                <input
                  {...register('name')}
                  className="input-field"
                  placeholder="Max Mustermann"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="input-field"
                  placeholder="max@beispiel.de"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Portfolio Links */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">
                Portfolio Links (mindestens einen)
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  {...register('portfolioYouTube')}
                  className="input-field"
                  placeholder="YouTube Kanal URL"
                />
                <input
                  {...register('portfolioTikTok')}
                  className="input-field"
                  placeholder="TikTok Profil URL"
                />
                <input
                  {...register('portfolioInstagram')}
                  className="input-field"
                  placeholder="Instagram Profil URL"
                />
                <input
                  {...register('portfolioWebsite')}
                  className="input-field"
                  placeholder="Website / Portfolio URL"
                />
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Deine Skills *
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {skillOptions.map((skill) => (
                  <label
                    key={skill.id}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl
                               bg-white/5 border cursor-pointer
                               transition-all duration-200
                               ${
                                 selectedSkills.includes(skill.id)
                                   ? 'border-blue-500 bg-blue-500/10'
                                   : 'border-white/10 hover:border-white/20'
                               }`}
                  >
                    <input
                      type="checkbox"
                      value={skill.id}
                      {...register('skills')}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center
                                ${
                                  selectedSkills.includes(skill.id)
                                    ? 'bg-blue-500 border-blue-500'
                                    : 'border-white/30'
                                }`}
                    >
                      {selectedSkills.includes(skill.id) && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm">{skill.label}</span>
                  </label>
                ))}
              </div>
              {errors.skills && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Verfügbarkeit
              </label>
              <select {...register('availability')} className="input-field">
                <option value="">Bitte wählen...</option>
                {availabilityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Why You */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Warum du? *
              </label>
              <textarea
                {...register('whyYou')}
                rows={5}
                className="input-field resize-none"
                placeholder="Erzähl uns, warum du perfekt zu Jesse Media passt. Was treibt dich an? Was sind deine Stärken?"
              />
              {errors.whyYou && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.whyYou.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-glow w-full flex items-center justify-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Bewerbung absenden
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}


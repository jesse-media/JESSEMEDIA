'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { cooperationSchema, type CooperationFormData } from '@/lib/validations'
import { channels } from '@/data/channels'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CooperationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()

  const budgetOptions = [
    { value: '<5k', label: t.cooperationForm.budgetOptions.under5k },
    { value: '5-10k', label: t.cooperationForm.budgetOptions['5to10k'] },
    { value: '10-25k', label: t.cooperationForm.budgetOptions['10to25k'] },
    { value: '25k+', label: t.cooperationForm.budgetOptions.over25k },
  ]

  const goalOptions = [
    { value: 'awareness', label: t.cooperationForm.goalOptions.awareness },
    { value: 'sales', label: t.cooperationForm.goalOptions.sales },
    { value: 'launch', label: t.cooperationForm.goalOptions.launch },
    { value: 'other', label: t.cooperationForm.goalOptions.other },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<CooperationFormData>({
    resolver: zodResolver(cooperationSchema),
    defaultValues: {
      channels: [],
    },
  })

  const selectedChannels = watch('channels') || []

  const onSubmit = async (data: CooperationFormData) => {
    setIsSubmitting(true)
    setError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
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
      <h3 className="text-2xl font-bold mb-2">{t.cooperationForm.title}</h3>
      <p className="text-white/60 mb-8">
        {t.cooperationForm.subtitle}
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
            <h4 className="text-xl font-semibold mb-2">{t.cooperationForm.successTitle}</h4>
            <p className="text-white/60">
              {t.cooperationForm.successMessage}
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Company & Contact - 2 Column */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.cooperationForm.company} {t.cooperationForm.required}
                </label>
                <input
                  {...register('company')}
                  className="input-field"
                  placeholder={t.cooperationForm.companyPlaceholder}
                />
                {errors.company && (
                  <p className="text-red-400 text-sm mt-1">
                    {t.cooperationForm.errors.company}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.cooperationForm.contact} {t.cooperationForm.required}
                </label>
                <input
                  {...register('contact')}
                  className="input-field"
                  placeholder={t.cooperationForm.contactPlaceholder}
                />
                {errors.contact && (
                  <p className="text-red-400 text-sm mt-1">
                    {t.cooperationForm.errors.contact}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.cooperationForm.email} {t.cooperationForm.required}
              </label>
              <input
                {...register('email')}
                type="email"
                className="input-field"
                placeholder={t.cooperationForm.emailPlaceholder}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {t.cooperationForm.errors.email}
                </p>
              )}
            </div>

            {/* Budget & Goal - 2 Column */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.cooperationForm.budget} {t.cooperationForm.required}
                </label>
                <select {...register('budget')} className="input-field">
                  <option value="">{t.cooperationForm.budgetPlaceholder}</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-sm mt-1">
                    {t.cooperationForm.errors.budget}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.cooperationForm.goal}
                </label>
                <select {...register('goal')} className="input-field">
                  <option value="">{t.cooperationForm.goalPlaceholder}</option>
                  {goalOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Channel Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                {t.cooperationForm.channels} {t.cooperationForm.required}
              </label>
              <div className="flex flex-wrap gap-3">
                {channels.map((channel) => (
                  <label
                    key={channel.slug}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl
                               bg-white/5 border cursor-pointer
                               transition-all duration-200
                               ${
                                 selectedChannels.includes(channel.slug)
                                   ? 'border-blue-500 bg-blue-500/10'
                                   : 'border-white/10 hover:border-white/20'
                               }`}
                  >
                    <input
                      type="checkbox"
                      value={channel.slug}
                      {...register('channels')}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{channel.name}</span>
                    <span className="text-xs text-white/50">{channel.stats.subscribers}</span>
                  </label>
                ))}
              </div>
              {errors.channels && (
                <p className="text-red-400 text-sm mt-1">
                  {t.cooperationForm.errors.channels}
                </p>
              )}
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.cooperationForm.targetAudience}
              </label>
              <input
                {...register('targetAudience')}
                className="input-field"
                placeholder={t.cooperationForm.targetAudiencePlaceholder}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {t.cooperationForm.message} {t.cooperationForm.required}
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="input-field resize-none"
                placeholder={t.cooperationForm.messagePlaceholder}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {t.cooperationForm.errors.message}
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
                  {t.cooperationForm.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t.cooperationForm.submit}
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

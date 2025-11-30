import { z } from 'zod'

export const cooperationSchema = z.object({
  company: z.string().min(2, 'Bitte Firmennamen angeben'),
  contact: z.string().min(2, 'Bitte Ansprechpartner angeben'),
  email: z.string().email('Bitte gültige Email angeben'),
  budget: z.enum(['<5k', '5-10k', '10-25k', '25k+'], {
    required_error: 'Bitte Budget-Range wählen',
  }),
  channels: z.array(z.string()).min(1, 'Bitte mindestens einen Kanal wählen'),
  targetAudience: z.string().optional(),
  goal: z.string().optional(),
  message: z.string().min(10, 'Bitte kurze Nachricht schreiben'),
})

export type CooperationFormData = z.infer<typeof cooperationSchema>

export const applicationSchema = z.object({
  name: z.string().min(2, 'Bitte Namen angeben'),
  email: z.string().email('Bitte gültige Email angeben'),
  portfolioYouTube: z.string().url('Bitte gültigen Link angeben').optional().or(z.literal('')),
  portfolioTikTok: z.string().url('Bitte gültigen Link angeben').optional().or(z.literal('')),
  portfolioInstagram: z.string().url('Bitte gültigen Link angeben').optional().or(z.literal('')),
  portfolioWebsite: z.string().url('Bitte gültigen Link angeben').optional().or(z.literal('')),
  skills: z.array(z.string()).min(1, 'Bitte mindestens einen Skill auswählen'),
  whyYou: z.string().min(50, 'Bitte etwas mehr über dich erzählen (mind. 50 Zeichen)'),
  availability: z.string().optional(),
})

export type ApplicationFormData = z.infer<typeof applicationSchema>


import { NextRequest, NextResponse } from 'next/server'
import { applicationSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = applicationSchema.parse(body)

    // N8N Webhook aufrufen (wenn konfiguriert)
    const n8nWebhookUrl = process.env.N8N_APPLICATION_WEBHOOK_URL

    if (n8nWebhookUrl) {
      await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: 'website',
        }),
      })
    }

    // Log für Development
    console.log('Neue Bewerbung:', {
      name: data.name,
      email: data.email,
      skills: data.skills,
      portfolioYouTube: data.portfolioYouTube,
      portfolioInstagram: data.portfolioInstagram,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true,
      message: 'Bewerbung erfolgreich gesendet' 
    })
  } catch (error) {
    console.error('Application form error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Ungültige Eingabe', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    )
  }
}


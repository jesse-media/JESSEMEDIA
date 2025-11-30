import { NextRequest, NextResponse } from 'next/server'
import { cooperationSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = cooperationSchema.parse(body)

    // N8N Webhook aufrufen (wenn konfiguriert)
    const n8nWebhookUrl = process.env.N8N_COOPERATION_WEBHOOK_URL

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
    console.log('Neue Kooperationsanfrage:', {
      company: data.company,
      contact: data.contact,
      email: data.email,
      budget: data.budget,
      channels: data.channels,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true,
      message: 'Anfrage erfolgreich gesendet' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    
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


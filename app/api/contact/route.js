import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, budget, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Post to Slack/WhatsApp webhook
    // 4. Send auto-reply email

    // For now, just log the submission
    console.log('Contact form submission:', { name, company, email, phone, budget, message })

    // Simulate email/webhook sending (replace with actual implementation)
    // Example: await sendEmail({ to: 'serasakreatif.id@gmail.com', subject: `New Contact: ${name}`, body: message })
    // Example: await sendToSlack(webhookUrl, { name, email, message })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, date, message, isEmergency } = body

    // Validate required fields
    const missing: string[] = []
    if (!name?.trim()) missing.push('name')
    if (!phone?.trim()) missing.push('phone')
    if (!email?.trim()) missing.push('email')
    if (!service?.trim()) missing.push('service')
    if (!date?.trim()) missing.push('date')

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(', ')}` },
        { status: 400 }
      )
    }

    const subject = `[${isEmergency ? '🚨 EMERGENCY' : 'New Lead'}] Quote Request from ${name}`

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Arial, sans-serif; color: #1a1a2e; background: #f9fafb; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb; }
    .header { background: ${isEmergency ? '#dc2626' : '#1a1a2e'}; padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; }
    .header p { color: ${isEmergency ? '#fecaca' : '#d4af37'}; margin: 6px 0 0; font-size: 14px; }
    .body { padding: 32px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; }
    .field:last-child { border-bottom: none; margin-bottom: 0; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111827; font-weight: 500; }
    .emergency-banner { background: #fef2f2; border: 1px solid #fca5a5; border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; color: #991b1b; font-weight: 700; font-size: 15px; }
    .footer { background: #f9fafb; padding: 18px 32px; font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #e5e7eb; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>${isEmergency ? '🚨 Emergency ' : ''}Quote Request</h1>
      <p>Boston Plumbing Pro — Contact Form Submission</p>
    </div>
    <div class="body">
      ${isEmergency ? '<div class="emergency-banner">🚨 EMERGENCY — Customer needs immediate assistance. Please call back ASAP.</div>' : ''}
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value"><a href="tel:${phone.replace(/\D/g, '')}" style="color:#1a1a2e;">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color:#1a1a2e;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Service Requested</div>
        <div class="value">${service}</div>
      </div>
      <div class="field">
        <div class="label">Preferred Date</div>
        <div class="value">${new Date(date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>
      ${
        message?.trim()
          ? `<div class="field">
        <div class="label">Message</div>
        <div class="value" style="white-space:pre-wrap;">${message.trim()}</div>
      </div>`
          : ''
      }
    </div>
    <div class="footer">
      Sent from bostonplumbingpro.com contact form &mdash; ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
    </div>
  </div>
</body>
</html>
`

    // Graceful fallback when API key is not configured (local dev)
    if (!process.env.RESEND_API_KEY) {
      console.log('=== CONTACT FORM SUBMISSION (no RESEND_API_KEY set) ===')
      console.log({ name, phone, email, service, date, message, isEmergency })
      console.log('Subject:', subject)
      console.log('======================================================')
      return NextResponse.json({ success: true })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'noreply@bostonplumbing.com',
      to: 'info@bostonplumbing.com',
      subject,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 })
  }
}

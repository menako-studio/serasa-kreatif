import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Simple in-memory rate limiter using Token Bucket algorithm
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = process.env.NODE_ENV === 'production' ? 3 : 20
const clientBuckets = new Map()

// Safe initialization of Resend client
let resend = null
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim() !== '') {
  try {
    resend = new Resend(process.env.RESEND_API_KEY)
  } catch (err) {
    console.error('Failed to initialize Resend client:', err)
  }
}

const destEmail = process.env.CONTACT_EMAIL || 'serasakreatif.id@gmail.com'

function checkRateLimit(ip) {
  const now = Date.now()

  // Lazy cleanup of expired client buckets to prevent memory leaks in serverless warm containers
  for (const [key, bucket] of clientBuckets.entries()) {
    if (now - bucket.lastRefill > RATE_LIMIT_WINDOW) {
      clientBuckets.delete(key)
    }
  }

  if (!clientBuckets.has(ip)) {
    clientBuckets.set(ip, {
      tokens: MAX_REQUESTS_PER_WINDOW - 1,
      lastRefill: now,
    })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 }
  }

  const bucket = clientBuckets.get(ip)
  const timePassed = now - bucket.lastRefill
  const tokensToAdd = Math.floor(timePassed / (RATE_LIMIT_WINDOW / MAX_REQUESTS_PER_WINDOW))

  if (tokensToAdd > 0) {
    bucket.tokens = Math.min(MAX_REQUESTS_PER_WINDOW, bucket.tokens + tokensToAdd)
    bucket.lastRefill = now
  }

  if (bucket.tokens > 0) {
    bucket.tokens -= 1
    clientBuckets.set(ip, bucket)
    return { allowed: true, remaining: bucket.tokens }
  }

  return { allowed: false, remaining: 0 }
}

export async function POST(request) {
  try {
    const isTest =
      process.env.NODE_ENV === 'test' ||
      process.env.PLAYWRIGHT_TEST === 'true' ||
      process.env.CI === 'true'

    // Get client IP address
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1'

    let remaining = MAX_REQUESTS_PER_WINDOW

    // Apply rate limiting (bypass in test/CI)
    if (!isTest) {
      const rateLimitResult = checkRateLimit(ip)
      if (!rateLimitResult.allowed) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again in a minute.' },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
              'X-RateLimit-Remaining': '0',
              'Retry-After': '60',
            },
          }
        )
      }
      remaining = rateLimitResult.remaining
    }

    const body = await request.json()
    const { name, company, email, phone, budget, message } = body

    // Verify Cloudflare Turnstile Captcha if secret key is configured
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret && !isTest) {
      const turnstileToken = request.headers.get('x-turnstile-token') || body.turnstileToken
      if (!turnstileToken) {
        return NextResponse.json({ error: 'Verification token is missing' }, { status: 400 })
      }

      try {
        const verifyResponse = await fetch(
          'https://challenges.cloudflare.com/turnstile/v0/siteverify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${encodeURIComponent(turnstileSecret)}&response=${encodeURIComponent(
              turnstileToken
            )}&remoteip=${encodeURIComponent(ip)}`,
          }
        )
        const verifyData = await verifyResponse.json()
        if (!verifyData.success) {
          return NextResponse.json({ error: 'Failed captcha verification' }, { status: 400 })
        }
      } catch (err) {
        console.error('Turnstile verification error:', err)
        return NextResponse.json({ error: 'Verification system error' }, { status: 500 })
      }
    }

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Try sending email via Resend (bypass in test/CI)
    if (resend && !isTest) {
      try {
        const emailData = await resend.emails.send({
          // Note: If you haven't verified a domain in Resend, you must send from 'onboarding@resend.dev'
          from: 'Serasa Contact Form <onboarding@resend.dev>',
          to: destEmail,
          subject: `New B2B Lead: ${name} (${company || 'No Company'})`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #0B2545; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="border-bottom: 2px solid #00D9FF; padding-bottom: 10px; margin-top: 0;">New Contact Submission</h2>
              <p>You received a new message from the Serasa Kreatif website contact form.</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 6px 0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 6px 0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Company:</td>
                  <td style="padding: 6px 0;">${company || '-'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 6px 0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-weight: bold;">Budget:</td>
                  <td style="padding: 6px 0;">${budget || '-'}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #FFA500; border-radius: 4px;">
                <h4 style="margin: 0 0 8px 0; color: #2B2D42;">Message:</h4>
                <p style="margin: 0; line-height: 1.5; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        })

        if (emailData.error) {
          console.error('Resend API error:', emailData.error)
          return NextResponse.json(
            { error: 'Failed to send message via email provider' },
            { status: 502 }
          )
        }
      } catch (err) {
        console.error('Resend execution error:', err)
        return NextResponse.json({ error: 'Mail dispatch server error' }, { status: 500 })
      }
    } else {
      // Graceful fallback for local development when credentials are not configured yet
      console.warn('Resend API Key is missing. Message logged locally:', {
        name,
        company,
        email,
        phone,
        budget,
        message,
      })
    }

    const response = NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )

    // Set rate limiter headers
    response.headers.set('X-RateLimit-Limit', MAX_REQUESTS_PER_WINDOW.toString())
    response.headers.set('X-RateLimit-Remaining', remaining.toString())

    return response
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

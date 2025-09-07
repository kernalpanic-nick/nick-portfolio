interface Env {
  SENDGRID_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL?: string;
}

interface Context {
  request: Request;
  env: Env;
}

export const onRequestPost = async (context: Context) => {
  try {
    const formData = await context.request.formData()
    const name = String(formData.get('name') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const message = String(formData.get('message') || '').trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 })
    }

    // Basic spam guard
    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Message too long' }), { status: 400 })
    }

    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY
    const TO_EMAIL = context.env.TO_EMAIL
    const FROM_EMAIL = context.env.FROM_EMAIL || `no-reply@${new URL(context.request.url).hostname}`

    if (!SENDGRID_API_KEY || !TO_EMAIL) {
      return new Response(JSON.stringify({ error: 'Server not configured' }), { status: 500 })
    }

    const payload = {
      personalizations: [{ to: [{ email: TO_EMAIL }], subject: `Portfolio contact from ${name}` }],
      from: { email: FROM_EMAIL },
      reply_to: { email: email },
      content: [{ type: 'text/plain', value: `From: ${name} <${email}>\n\n\n${message}` }]
    }

    const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!resp.ok) {
      const text = await resp.text()
      return new Response(JSON.stringify({ error: 'Email failed', details: text }), { status: 502 })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Unexpected error' }), { status: 500 })
  }
}

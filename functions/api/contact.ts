interface Env {
  // Option 1: Free email service (Resend, EmailJS, etc.)
  RESEND_API_KEY?: string;
  EMAILJS_SERVICE_ID?: string;
  EMAILJS_TEMPLATE_ID?: string;
  EMAILJS_PUBLIC_KEY?: string;
  
  // Option 2: SMTP (Gmail, Outlook, etc.)
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  
  // Option 3: Webhook/Discord/Slack notification
  DISCORD_WEBHOOK_URL?: string;
  SLACK_WEBHOOK_URL?: string;
  
  // Common settings
  TO_EMAIL: string;
  FROM_EMAIL?: string;
}

interface Context {
  request: Request;
  env: Env;
}

// Option 1: Resend (Free tier: 3,000 emails/month)
async function sendWithResend(context: Context, name: string, email: string, message: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: context.env.FROM_EMAIL || `portfolio@${new URL(context.request.url).hostname}`,
      to: [context.env.TO_EMAIL],
      subject: `Portfolio Contact from ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
      reply_to: email,
    }),
  });
  
  return response.ok;
}

// Option 2: Discord Webhook (Completely free)
async function sendToDiscord(context: Context, name: string, email: string, message: string) {
  const embed = {
    title: "📧 New Portfolio Contact",
    color: 0x5865F2,
    fields: [
      { name: "Name", value: name, inline: true },
      { name: "Email", value: email, inline: true },
      { name: "Message", value: message.length > 1000 ? message.substring(0, 1000) + "..." : message }
    ],
    timestamp: new Date().toISOString()
  };

  const response = await fetch(context.env.DISCORD_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  });
  
  return response.ok;
}

// Option 3: Slack Webhook (Free)
async function sendToSlack(context: Context, name: string, email: string, message: string) {
  const payload = {
    text: "📧 New Portfolio Contact",
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*New contact form submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:*\n${message}`
        }
      }
    ]
  };

  const response = await fetch(context.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  return response.ok;
}

// Option 4: Simple SMTP (Gmail App Password, Outlook, etc.)
async function sendWithSMTP(context: Context, name: string, email: string, message: string) {
  // Note: This would require a more complex SMTP implementation
  // For now, we'll return false to indicate it's not implemented
  // You could use a service like Cloudflare Email Workers or implement SMTP
  return false;
}

export const onRequestPost = async (context: Context) => {
  try {
    const formData = await context.request.formData();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    // Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Basic spam protection
    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: 'Message too long (max 5000 characters)' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!context.env.TO_EMAIL) {
      return new Response(JSON.stringify({ error: 'Server not configured - missing TO_EMAIL' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let success = false;
    let method = 'none';

    // Try different methods in order of preference
    
    // 1. Try Resend (free tier available)
    if (context.env.RESEND_API_KEY) {
      try {
        success = await sendWithResend(context, name, email, message);
        method = 'resend';
      } catch (error) {
        console.error('Resend failed:', error);
      }
    }

    // 2. Try Discord webhook (completely free)
    if (!success && context.env.DISCORD_WEBHOOK_URL) {
      try {
        success = await sendToDiscord(context, name, email, message);
        method = 'discord';
      } catch (error) {
        console.error('Discord webhook failed:', error);
      }
    }

    // 3. Try Slack webhook (free)
    if (!success && context.env.SLACK_WEBHOOK_URL) {
      try {
        success = await sendToSlack(context, name, email, message);
        method = 'slack';
      } catch (error) {
        console.error('Slack webhook failed:', error);
      }
    }

    // 4. Try SMTP (if configured)
    if (!success && context.env.SMTP_HOST && context.env.SMTP_USER && context.env.SMTP_PASS) {
      try {
        success = await sendWithSMTP(context, name, email, message);
        method = 'smtp';
      } catch (error) {
        console.error('SMTP failed:', error);
      }
    }

    if (success) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully',
        method: method 
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      return new Response(JSON.stringify({ 
        error: 'No email service configured. Please set up RESEND_API_KEY, DISCORD_WEBHOOK_URL, or SLACK_WEBHOOK_URL in environment variables.',
        availableMethods: {
          resend: 'Set RESEND_API_KEY (3,000 free emails/month)',
          discord: 'Set DISCORD_WEBHOOK_URL (completely free)',
          slack: 'Set SLACK_WEBHOOK_URL (free)',
          smtp: 'Set SMTP_HOST, SMTP_USER, SMTP_PASS (use Gmail app password)'
        }
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ 
      error: 'Unexpected server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

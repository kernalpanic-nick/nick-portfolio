# Free Email Setup Guide for Contact Form

This guide shows you how to set up completely free email notifications for your portfolio contact form. No paid services required!

## 🆓 Free Options Available

### Option 1: Discord Webhook (Recommended - Completely Free)
### Option 2: Slack Webhook (Free)
### Option 3: Resend (3,000 free emails/month)
### Option 4: Gmail SMTP (Free with app password)

---

## 🎮 Option 1: Discord Webhook (100% Free)

**Best for**: Personal portfolios, simple notifications
**Cost**: Completely free forever
**Setup time**: 2 minutes

### Step 1: Create Discord Server
1. Open Discord and create a new server (or use existing)
2. Create a channel called `#portfolio-contacts`

### Step 2: Create Webhook
1. Right-click the `#portfolio-contacts` channel
2. Select **Edit Channel** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Name it "Portfolio Contact Form"
5. Copy the **Webhook URL**

### Step 3: Configure Cloudflare Pages
1. Go to your Cloudflare Pages dashboard
2. Select your project → **Settings** → **Environment variables**
3. Add these variables:
   ```
   TO_EMAIL = your-email@example.com
   DISCORD_WEBHOOK_URL = https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
   ```

### Step 4: Test
Deploy your site and test the contact form. You'll receive formatted messages in Discord!

**Example Discord notification:**
```
📧 New Portfolio Contact
Name: John Doe
Email: john@example.com
Message: Hi, I'd like to discuss a project...
```

---

## 💬 Option 2: Slack Webhook (Free)

**Best for**: Professional portfolios, team notifications
**Cost**: Free Slack workspace
**Setup time**: 3 minutes

### Step 1: Create Slack App
1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Click **Create New App** → **From scratch**
3. Name: "Portfolio Contact Form"
4. Select your workspace

### Step 2: Enable Webhooks
1. In your app settings, go to **Incoming Webhooks**
2. Toggle **Activate Incoming Webhooks** to On
3. Click **Add New Webhook to Workspace**
4. Select a channel (e.g., `#general` or create `#portfolio`)
5. Copy the **Webhook URL**

### Step 3: Configure Environment Variables
```
TO_EMAIL = your-email@example.com
SLACK_WEBHOOK_URL = https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

---

## 📧 Option 3: Resend (3,000 Free Emails/Month)

**Best for**: Professional email delivery
**Cost**: Free tier with 3,000 emails/month
**Setup time**: 5 minutes

### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for free account
3. Verify your email

### Step 2: Get API Key
1. Go to **API Keys** in dashboard
2. Click **Create API Key**
3. Name: "Portfolio Contact Form"
4. Copy the API key

### Step 3: Add Domain (Optional)
1. Go to **Domains** → **Add Domain**
2. Add your domain (e.g., `yourdomain.com`)
3. Add DNS records as shown
4. Or use their free domain: `onboarding.resend.dev`

### Step 4: Configure Environment Variables
```
TO_EMAIL = your-email@example.com
FROM_EMAIL = portfolio@yourdomain.com
RESEND_API_KEY = re_your_api_key_here
```

---

## 📮 Option 4: Gmail SMTP (Free)

**Best for**: Using your existing Gmail account
**Cost**: Free
**Setup time**: 5 minutes

### Step 1: Enable 2-Factor Authentication
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. **Security** → **2-Step Verification** → Enable

### Step 2: Create App Password
1. **Security** → **App passwords**
2. Select app: **Mail**
3. Select device: **Other** → "Portfolio Contact Form"
4. Copy the 16-character password

### Step 3: Configure Environment Variables
```
TO_EMAIL = your-email@gmail.com
FROM_EMAIL = your-email@gmail.com
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your-email@gmail.com
SMTP_PASS = your_16_character_app_password
```

**Note**: SMTP implementation is basic in current version. Discord/Slack webhooks are recommended for immediate use.

---

## 🚀 Quick Setup (Discord - Easiest)

For the fastest setup, use Discord:

1. **Create Discord webhook** (2 minutes)
2. **Add to Cloudflare Pages environment variables**:
   ```
   TO_EMAIL = your-email@example.com
   DISCORD_WEBHOOK_URL = your_webhook_url
   ```
3. **Deploy and test!**

---

## 🔧 Environment Variables Setup

### Cloudflare Pages
1. Dashboard → Your Project → **Settings** → **Environment variables**
2. Add variables for **Production** environment
3. Redeploy your site

### Local Development
Create `.env` file in project root:
```env
TO_EMAIL=your-email@example.com
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
```

---

## 🎯 Recommended Setup by Use Case

### Personal Portfolio
- **Discord Webhook** - Simple, free, instant notifications

### Professional Portfolio
- **Resend** - Professional email delivery
- **Slack Webhook** - Team notifications

### High Volume
- **Resend** - 3,000 free emails/month
- **Multiple webhooks** - Discord + Slack for redundancy

---

## 🔍 Testing Your Setup

1. Deploy your site with environment variables
2. Fill out the contact form
3. Check for notifications in Discord/Slack/Email
4. Check Cloudflare Pages **Functions** logs for any errors

### Troubleshooting
- **No notifications**: Check environment variable names and values
- **Discord not working**: Verify webhook URL is correct
- **Resend failing**: Check API key and domain setup
- **Check logs**: Cloudflare Pages → Functions → View logs

---

## 💡 Pro Tips

1. **Use Discord for development** - Instant feedback, easy setup
2. **Add multiple methods** - Set both Discord and email for redundancy
3. **Monitor usage** - Check Resend dashboard for email limits
4. **Customize messages** - Edit the webhook format in `contact.ts`
5. **Add spam protection** - The form includes basic validation

---

## 🔒 Security Notes

- Environment variables are secure in Cloudflare Pages
- Webhook URLs should be kept private
- API keys are encrypted in Cloudflare
- Form includes spam protection and validation
- No sensitive data is logged or stored

---

## 📱 Mobile Notifications

### Discord
- Install Discord mobile app
- Enable push notifications for your server
- Get instant contact form notifications on your phone

### Slack
- Install Slack mobile app
- Configure notification preferences
- Receive professional notifications anywhere

---

Your contact form will now work completely free with any of these methods! Discord webhook is recommended for the quickest setup.

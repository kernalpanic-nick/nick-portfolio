# Cloudflare Pages Deployment Guide

This guide will walk you through deploying your portfolio to Cloudflare Pages, which provides free hosting with excellent performance and global CDN.

## 🚀 Quick Deployment Steps

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio updates with GitHub integration"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** in the sidebar
   - Click **Create a project**
   - Select **Connect to Git**
   - Choose your GitHub repository

3. **Configure Build Settings**
   ```
   Framework preset: None (or select "React" if available)
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave empty)
   ```

4. **Environment Variables** (if needed)
   - No environment variables required for basic deployment

5. **Deploy**
   - Click **Save and Deploy**
   - Your site will be available at `https://your-project-name.pages.dev`

### Method 2: Direct Upload

1. **Build the Project Locally**
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages**
   - Go to Cloudflare Pages dashboard
   - Click **Create a project**
   - Select **Upload assets**
   - Upload the `dist` folder contents
   - Your site will be deployed instantly

## 📋 Detailed Setup Instructions

### Prerequisites

- Cloudflare account (free)
- GitHub account (for Method 1)
- Node.js and npm installed locally (for Method 2)

### Step-by-Step GitHub Integration

1. **Prepare Your Repository**
   ```bash
   # Initialize git if not already done
   git init
   
   # Add all files
   git add .
   
   # Commit changes
   git commit -m "Initial portfolio commit"
   
   # Add GitHub remote (replace with your repo URL)
   git remote add origin https://github.com/yourusername/your-portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

2. **Cloudflare Pages Setup**
   - Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Click **Pages** in the left sidebar
   - Click **Create a project**
   - Select **Connect to Git**
   - Authorize Cloudflare to access your GitHub account
   - Select your portfolio repository

3. **Build Configuration**
   ```
   Project name: your-portfolio (or any name you prefer)
   Production branch: main
   Framework preset: None (or select "React" if available)
   Build command: npm run build
   Build output directory: dist
   Root directory: (leave blank)
   ```

4. **Advanced Settings** (Optional)
   ```
   Node.js version: 18 (or latest)
   Environment variables: (none needed for basic setup)
   ```

5. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.pages.dev`

## 🌐 Custom Domain Setup

### Using Cloudflare Domain

1. **Add Domain to Cloudflare**
   - Go to **Websites** in Cloudflare dashboard
   - Click **Add a site**
   - Enter your domain name
   - Follow DNS setup instructions

2. **Connect to Pages**
   - Go to your Pages project
   - Click **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain (e.g., `portfolio.yourdomain.com`)
   - Cloudflare will automatically configure DNS

### Using External Domain

1. **Add Custom Domain**
   - In your Pages project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain name

2. **Update DNS Records**
   - Add a CNAME record pointing to your Pages URL:
   ```
   Type: CNAME
   Name: @ (or subdomain like 'portfolio')
   Value: your-project-name.pages.dev
   ```

## 🔄 Automatic Deployments

Once connected to GitHub, Cloudflare Pages will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build logs and deployment status

### Triggering Deployments

```bash
# Make changes to your portfolio
# Edit src/data/portfolio.ts or other files

# Commit and push
git add .
git commit -m "Updated projects and experience"
git push origin main

# Cloudflare will automatically build and deploy
```

## 📊 Performance Optimizations

### Build Optimizations

Your `vite.config.ts` should include:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react']
        }
      }
    }
  }
})
```

### Cloudflare Optimizations

Cloudflare Pages automatically provides:
- Global CDN distribution
- Automatic HTTPS/SSL
- HTTP/2 and HTTP/3 support
- Brotli compression
- Image optimization (Pro plan)

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Check build locally first
   npm install
   npm run build
   
   # If successful locally, check Cloudflare build logs
   ```

2. **404 Errors on Refresh**
   - The `_redirects` file in the public folder handles this automatically

3. **Environment Variables**
   - Set in Cloudflare Pages dashboard under **Settings** > **Environment variables**
   - Prefix with `VITE_` for client-side access

4. **Node.js Version Issues**
   - Set Node.js version in Pages settings
   - Use Node.js 18 or later

### Build Logs

Access build logs in:
- Cloudflare Pages dashboard
- **Deployments** tab
- Click on any deployment to see logs

## 📈 Analytics and Monitoring

### Cloudflare Analytics

- Go to your Pages project
- Click **Analytics** tab
- View traffic, performance, and error metrics

### Web Analytics (Optional)

Add Cloudflare Web Analytics:
```html
<!-- Add to index.html -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "your-token"}'></script>
```

## 💰 Pricing

Cloudflare Pages Free Tier includes:
- Unlimited static requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time
- Custom domains
- Global CDN

Pro features ($20/month):
- Advanced image optimization
- More concurrent builds
- Enhanced analytics

## 🔄 Updating Your Portfolio

### Regular Updates

```bash
# 1. Edit your portfolio data
# Edit src/data/portfolio.ts

# 2. Test locally (if possible)
npm run dev

# 3. Commit and push
git add .
git commit -m "Added new project: Docker Monitoring Stack"
git push origin main

# 4. Cloudflare automatically deploys
# Check deployment status in Cloudflare dashboard
```

### Rollback if Needed

- Go to Cloudflare Pages dashboard
- Click **Deployments**
- Find a previous successful deployment
- Click **Rollback to this deployment**

## 🎯 Next Steps

After deployment:
1. Test all links and functionality
2. Set up custom domain (optional)
3. Configure analytics
4. Share your portfolio URL
5. Set up monitoring for uptime

Your portfolio will be live at `https://your-project-name.pages.dev` and automatically update whenever you push changes to GitHub!

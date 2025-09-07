# Deploy to Cloudflare Pages

## 1) Create repo
```bash
mkdir nick-portfolio && cd nick-portfolio
# paste files from this scaffold
npm i
npm run dev  # local run at http://localhost:5173
```

Commit & push:

```bash
git init
git add .
git commit -m "init: portfolio scaffold"
gh repo create nick-portfolio --public --source=. --remote=origin --push
```

## 2) Cloudflare Pages setup

* Go to **Cloudflare Dashboard → Pages → Create project → Connect to Git**.
* Select your `nick-portfolio` repo.
* Build settings:

  * **Framework preset**: None
  * **Build command**: `npm run build`
  * **Build output directory**: `dist`
* **Add `headers.json`** (already in repo) → security headers auto-apply.

## 3) Environment variables (Pages Functions)

In the same project → **Settings → Environment variables** (Production & Preview):

* `SENDGRID_API_KEY` = your SendGrid API key
* `TO_EMAIL` = your destination inbox (e.g., [you@domain.com](mailto:you@domain.com))
* `FROM_EMAIL` = `contact@yourdomain.com` (must be a verified sender in SendGrid)

> In SendGrid, add and verify the sender domain or single sender.

## 4) Domain

* In Pages → **Custom domains** → add `portfolio.yourdomain.com` or root domain.
* Update DNS in Cloudflare to point the CNAME to your Pages project.

## 5) Test contact form

* Submit the Contact form.
* Check Cloudflare Pages Functions logs in **Pages → Functions** if needed.

## 6) Optional: Email Routing

* Cloudflare **Email Routing** can forward `contact@yourdomain.com` to your real inbox for replies.
* This is separate from outbound SendGrid, but helpful.

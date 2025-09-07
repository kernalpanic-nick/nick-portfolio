# Nick S. — Portfolio

This repo contains a personal portfolio site built with **Vite**, **React**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It features:

- A search‑filterable projects section.
- A dark/light mode toggle.
- A contact form stub (integrated using a serverless function and SendGrid by default; you can swap to your own email service).
- Responsive design and accessible components.

## Getting Started

Install dependencies and start a local development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser to see the site.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled files will be output to the `dist` directory. You can deploy this directory to any static hosting provider, such as GitHub Pages, Vercel, Netlify, or Cloudflare Pages.

## Contact Form

The contact form submits to `/api/contact`, which is implemented in `functions/api/contact.ts`. This function uses SendGrid to send messages. To enable it, configure the following environment variables in your deployment platform:

- `SENDGRID_API_KEY` – your SendGrid API key.
- `TO_EMAIL` – the email address where messages should be delivered.
- `FROM_EMAIL` – the sender address (must be verified in SendGrid).

You can replace this function or integrate with any other backend or form service if you prefer.

## Dark Mode

A dark mode toggle is included in the navigation bar. Clicking the toggle switches between light and dark themes by toggling the `dark` class on the document root. The CSS variables for background and text colors are defined in `src/styles.css`.

## Project Structure

```
.
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
├── tailwind.config.ts
├── index.html
├── headers.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── Section.tsx
│   │   └── ui.tsx
│   └── styles.css
└── functions/
    └── api/
        └── contact.ts
```

Feel free to extend this project with additional pages, components, or data.

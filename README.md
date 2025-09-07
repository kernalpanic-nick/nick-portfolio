# Nick's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with dark/light theme support
- **Responsive**: Optimized for all device sizes
- **Type Safety**: Full TypeScript implementation with proper type definitions
- **Performance**: Optimized React components with proper state management
- **Contact Form**: Integrated contact form with SendGrid email delivery
- **Project Filtering**: Dynamic project filtering and search functionality

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Cloudflare Pages
- **Email**: SendGrid API
- **Icons**: Lucide React
- **Animations**: Framer Motion

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Section.tsx     # Layout section wrapper
│   ├── ContactForm.tsx # Contact form with validation
│   └── ProjectCard.tsx # Project display card
├── data/               # Static data and content
│   └── portfolio.ts    # Portfolio data (profile, projects, etc.)
├── hooks/              # Custom React hooks
│   └── useTheme.ts     # Theme management hook
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared interfaces and types
├── ui.tsx              # Base UI components (Button, Pill)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── styles.css          # Global styles and Tailwind imports

functions/
└── api/
    └── contact.ts      # Serverless contact form handler
```

## Code Improvements Made

### 1. **Type Safety & Organization**
- Added comprehensive TypeScript interfaces for all data structures
- Separated data from components into dedicated files
- Improved type definitions for better IDE support and error catching

### 2. **Component Architecture**
- Extracted reusable components (ContactForm, ProjectCard)
- Implemented proper component composition
- Added proper prop typing for all components

### 3. **State Management**
- Created custom `useTheme` hook for theme management
- Added localStorage persistence for theme preference
- Improved form state management with proper validation

### 4. **Performance Optimizations**
- Used `useMemo` for expensive filtering operations
- Proper component memoization where beneficial
- Optimized re-renders through better state structure

### 5. **User Experience**
- Enhanced button states with hover effects and transitions
- Added loading states for form submission
- Improved accessibility with proper semantic HTML
- Better error handling and user feedback

### 6. **Code Quality**
- Consistent code formatting and structure
- Proper separation of concerns
- Improved maintainability through modular architecture
- Better error handling in API functions

### 7. **Styling Improvements**
- Enhanced button component with better states
- Added hover effects and transitions
- Improved dark mode support
- Better responsive design patterns

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

For the contact form to work, set these environment variables in your deployment:

- `SENDGRID_API_KEY`: Your SendGrid API key
- `TO_EMAIL`: Email address to receive contact form submissions
- `FROM_EMAIL`: (Optional) From email address for notifications

## Deployment

This project is optimized for deployment on Cloudflare Pages with the included serverless function for contact form handling.

## License

MIT License - feel free to use this code for your own portfolio!

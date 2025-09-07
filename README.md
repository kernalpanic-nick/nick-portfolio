# Nick's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features easy content management, GitHub integration, and optimized deployment on Cloudflare Pages.

## ✨ Features

### 🎨 Modern Design
- Clean, professional interface with dark/light mode toggle
- Responsive design that works on all devices
- Smooth animations and transitions
- Tailwind CSS for styling

### 📊 Enhanced Project Management
- **GitHub Integration**: Direct links to repositories with visual GitHub buttons
- **Status Tracking**: Color-coded project status badges (active, completed, in-progress, archived)
- **Featured Projects**: Highlight your most important work
- **Multiple Link Types**: Support for GitHub, demo, docs, and website links
- **Easy Editing**: Structured data with helper functions and templates

### 💼 Work Experience
- Detailed experience entries with bullet points
- Technology tags for each role
- Company information and job types
- Easy-to-edit structured format

### 🚀 Developer Experience
- **TypeScript**: Full type safety and IntelliSense
- **Helper Functions**: Utilities for creating and validating data
- **Comprehensive Documentation**: Step-by-step guides for editing and deployment
- **Validation**: Built-in data validation to prevent errors

### 🌐 Deployment Ready
- **Cloudflare Pages**: Optimized for free, fast global deployment
- **Automatic Deployments**: Deploy on every GitHub push
- **Security Headers**: Built-in security and performance optimizations
- **SPA Routing**: Proper single-page application routing

## 📁 Project Structure

```
nick-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── ProjectCard.tsx  # Enhanced project display with links
│   │   ├── ContactForm.tsx  # Contact form component
│   │   └── Section.tsx      # Reusable section component
│   ├── data/
│   │   └── portfolio.ts     # Main data file (easy to edit)
│   ├── hooks/
│   │   └── useTheme.ts      # Dark/light mode hook
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── utils/
│   │   └── portfolioHelpers.ts  # Helper functions for data management
│   ├── App.tsx              # Main application component
│   ├── main.tsx            # Application entry point
│   └── styles.css          # Global styles
├── public/
│   ├── _redirects          # SPA routing configuration
│   ├── _headers            # Security and performance headers
│   └── favicon.svg         # Site favicon
├── functions/
│   └── api/
│       └── contact.ts      # Serverless contact form handler
├── PORTFOLIO_EDITING_GUIDE.md     # Comprehensive editing guide
├── CLOUDFLARE_DEPLOYMENT_GUIDE.md # Deployment instructions
└── package.json            # Dependencies and scripts
```

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd nick-portfolio
npm install
```

### 2. Edit Your Content
Edit `src/data/portfolio.ts` to add your information:

```typescript
// Add a new project with GitHub link
{
  id: 'my-awesome-project',
  title: 'My Awesome Project',
  category: 'homelab',
  description: 'A brief description of what this project does.',
  tech: ['Docker', 'Python', 'React'],
  status: 'active',
  featured: true,
  links: {
    github: 'https://github.com/yourusername/project-repo',
    demo: 'https://your-demo-site.com'
  }
}
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Deploy to Cloudflare Pages
Follow the [Cloudflare Deployment Guide](CLOUDFLARE_DEPLOYMENT_GUIDE.md) for step-by-step instructions.

## 📝 Editing Your Portfolio

### Adding Projects
See [Portfolio Editing Guide](PORTFOLIO_EDITING_GUIDE.md) for detailed instructions on:
- Adding new projects with GitHub links
- Managing project status and categories
- Using helper functions for consistent data
- Best practices for descriptions and tech stacks

### Quick Project Addition
```typescript
import { addHomelabProject } from './src/utils/portfolioHelpers';

const newProject = addHomelabProject(
  'Docker Monitoring Stack',
  'Complete monitoring solution with Prometheus and Grafana',
  'https://github.com/yourusername/docker-monitoring',
  ['Docker', 'Prometheus', 'Grafana']
);
```

## 🎨 Project Features

### Enhanced Project Cards
- **Status Badges**: Visual indicators for project status
- **GitHub Integration**: Direct repository links with GitHub icon
- **Multiple Links**: Support for demos, documentation, and websites
- **Featured Highlighting**: Blue ring around important projects
- **Technology Tags**: Clean display of tech stack

### Work Experience
- **Structured Format**: Consistent experience entries
- **Technology Lists**: Visual tech tags for each role
- **Company Information**: Links and job type details
- **Easy Editing**: Simple array-based data structure

## 🛠 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Helper Functions
The project includes utility functions in `src/utils/portfolioHelpers.ts`:
- `createProjectTemplate()` - Generate new project templates
- `addHomelabProject()` - Quick homelab project creation
- `validateProject()` - Data validation
- `addGitHubLink()` - Add GitHub links to existing projects

### Type Safety
Full TypeScript support with interfaces for:
- `Project` - Project data structure
- `Experience` - Work experience entries
- `Profile` - Personal information
- `Category` - Project categories

## 🚀 Deployment

### Cloudflare Pages (Recommended)
1. Push your code to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   ```
   Framework preset: Vite (or "None" if build fails)
   Build command: npm run build
   Build output directory: dist
   ```
4. Deploy automatically on every push

See [CLOUDFLARE_DEPLOYMENT_GUIDE.md](CLOUDFLARE_DEPLOYMENT_GUIDE.md) for complete instructions.

### Build Configuration
The project includes optimized Vite configuration:
- Terser minification for smaller bundles
- Manual chunk splitting for better caching
- Vendor and UI library separation

## 📚 Documentation

- **[Portfolio Editing Guide](PORTFOLIO_EDITING_GUIDE.md)** - How to edit projects and experiences
- **[Cloudflare Deployment Guide](CLOUDFLARE_DEPLOYMENT_GUIDE.md)** - Complete deployment instructions

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `public/_redirects` - SPA routing for Cloudflare Pages
- `public/_headers` - Security and performance headers

## 🎯 Key Improvements

### From Original
- ✅ GitHub repository integration
- ✅ Enhanced project status tracking
- ✅ Featured project highlighting
- ✅ Multiple link types (GitHub, demo, docs, website)
- ✅ Comprehensive editing documentation
- ✅ Helper functions for data management
- ✅ Type-safe data structures
- ✅ Optimized Cloudflare Pages deployment
- ✅ Security headers and performance optimization
- ✅ Validation and error prevention

### Developer Experience
- ✅ Easy content editing with structured data
- ✅ Helper functions and templates
- ✅ Comprehensive documentation
- ✅ Type safety and validation
- ✅ Automated deployment pipeline

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. The modular structure and comprehensive documentation make it easy to extend and modify.

---

**Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS**

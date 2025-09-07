# Portfolio Editing Guide

This guide explains how to easily edit projects and work experience in your portfolio, including how to add GitHub repository links and manage your data effectively.

## 📁 File Structure

- `src/data/portfolio.ts` - Main data file containing all portfolio information
- `src/types/index.ts` - Type definitions for projects and experiences
- `src/utils/portfolioHelpers.ts` - Helper functions for creating and managing data
- `src/components/ProjectCard.tsx` - Component that displays project cards with links

## 🚀 Quick Start

### Adding a New Project

1. **Open** `src/data/portfolio.ts`
2. **Add** a new project to the `projects` array:

```typescript
{
  id: 'my-awesome-project',
  title: 'My Awesome Project',
  category: 'homelab',
  description: 'A brief description of what this project does.',
  tech: ['Docker', 'Python', 'React'],
  status: 'active',
  featured: true,
  startDate: '2024-01',
  links: {
    github: 'https://github.com/yourusername/project-repo',
    demo: 'https://your-demo-site.com',
    docs: 'https://docs.your-project.com'
  }
}
```

### Adding Work Experience

1. **Open** `src/data/portfolio.ts`
2. **Add** a new experience to the `experiences` array:

```typescript
{
  id: 'company-role-2024',
  company: 'Amazing Tech Corp',
  title: 'Senior Developer',
  start: '2024',
  end: 'Present',
  location: 'Remote',
  type: 'full-time',
  bullets: [
    'Led development of microservices architecture serving 1M+ users',
    'Implemented CI/CD pipelines reducing deployment time by 80%',
    'Mentored junior developers and conducted code reviews'
  ],
  tech: ['Node.js', 'Docker', 'AWS', 'PostgreSQL'],
  companyUrl: 'https://amazingtech.com'
}
```

## 📋 Field Reference

### Project Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `id` | ✅ | string | Unique identifier (use kebab-case) |
| `title` | ✅ | string | Project name |
| `category` | ✅ | string | Category: 'work', 'homelab', 'networking', 'security', 'media', 'docs' |
| `description` | ✅ | string | Brief project description |
| `tech` | ✅ | string[] | Array of technologies used |
| `status` | ❌ | string | 'active', 'completed', 'archived', 'in-progress' |
| `featured` | ❌ | boolean | Highlight important projects |
| `startDate` | ❌ | string | Start date (YYYY-MM format) |
| `endDate` | ❌ | string | End date (YYYY-MM format) |
| `links` | ❌ | object | Project links (see below) |

### Project Links

```typescript
links: {
  github?: string;    // GitHub repository URL
  demo?: string;      // Live demo URL
  docs?: string;      // Documentation URL
  website?: string;   // Project website URL
}
```

### Experience Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `id` | ✅ | string | Unique identifier |
| `company` | ✅ | string | Company name |
| `title` | ✅ | string | Job title |
| `start` | ✅ | string | Start date |
| `end` | ✅ | string | End date or 'Present' |
| `bullets` | ✅ | string[] | Key achievements/responsibilities |
| `tech` | ✅ | string[] | Technologies used |
| `location` | ❌ | string | Work location |
| `type` | ❌ | string | 'full-time', 'part-time', 'contract', 'internship' |
| `companyUrl` | ❌ | string | Company website URL |

## 🛠 Using Helper Functions

The `src/utils/portfolioHelpers.ts` file provides utility functions to make editing easier:

### Quick Project Creation

```typescript
import { addHomelabProject, addWorkProject } from '../utils/portfolioHelpers';

// Add a homelab project with GitHub
const newProject = addHomelabProject(
  'Docker Monitoring Stack',
  'Complete monitoring solution with Prometheus, Grafana, and AlertManager',
  'https://github.com/yourusername/docker-monitoring',
  ['Docker', 'Prometheus', 'Grafana', 'AlertManager']
);

// Add a work project
const workProject = addWorkProject(
  'Enterprise API Gateway',
  'Scalable API gateway handling 10M+ requests daily',
  ['Node.js', 'Redis', 'Docker', 'AWS'],
  '2023-01',
  '2023-12'
);
```

### Project Templates

```typescript
import { projectTemplates } from '../utils/portfolioHelpers';

// Use pre-configured templates
const homelabProject = {
  ...projectTemplates.homelab,
  id: 'my-homelab-project',
  title: 'My Homelab Project',
  description: 'Description here...'
};
```

## 🎨 Project Display Features

Projects now display with enhanced visual features:

- **Status badges** - Color-coded status indicators
- **Featured highlighting** - Blue ring around important projects
- **Link buttons** - Clickable GitHub, demo, docs, and website links
- **Technology tags** - Visual pills showing tech stack

## 📝 Best Practices

### Project IDs
- Use kebab-case: `my-awesome-project`
- Be descriptive but concise
- Include year for work projects: `windows-rollout-2023`

### Descriptions
- Keep under 100 characters
- Focus on key outcomes or features
- Use active voice

### Technology Arrays
- Use consistent naming (e.g., 'Node.js' not 'nodejs')
- Order by importance/relevance
- Include frameworks, languages, and tools

### GitHub Links
- Always use HTTPS URLs
- Link to the main repository
- Ensure repositories are public or accessible

## 🔧 Categories

Available project categories:
- `work` - Professional/work projects
- `homelab` - Personal infrastructure projects
- `networking` - Network-related projects
- `security` - Security and compliance projects
- `media` - Media automation projects
- `docs` - Documentation and guides

## 📊 Status Options

Project status options:
- `active` - Currently working on (green badge)
- `completed` - Finished project (blue badge)
- `in-progress` - Work in progress (yellow badge)
- `archived` - No longer maintained (gray badge)

## 🚨 Validation

The helper functions include validation to ensure data integrity:

```typescript
import { validateProject, validateExperience } from '../utils/portfolioHelpers';

const errors = validateProject(myProject);
if (errors.length > 0) {
  console.log('Project validation errors:', errors);
}
```

## 🔄 Making Changes

1. **Edit** `src/data/portfolio.ts`
2. **Save** the file
3. **Refresh** your browser to see changes
4. **Check** the browser console for any TypeScript errors

## 💡 Tips

- Use the browser's developer tools to test link functionality
- Keep descriptions concise but informative
- Regularly update project statuses
- Use featured projects to highlight your best work
- Include diverse project types to show range of skills

## 🐛 Troubleshooting

### Common Issues

1. **TypeScript errors**: Ensure all required fields are present
2. **Links not working**: Check URL format (include https://)
3. **Projects not displaying**: Verify JSON syntax in portfolio.ts
4. **Status badges not showing**: Check status field spelling

### Getting Help

- Check the browser console for error messages
- Validate your JSON syntax
- Ensure all required fields are present
- Use the helper functions for consistent data structure

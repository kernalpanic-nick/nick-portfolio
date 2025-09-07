import type { Project, Experience } from '../types';

/**
 * Portfolio Data Management Utilities
 * 
 * This file provides helper functions and templates to make editing
 * projects and work experience easier and more consistent.
 */

// ============================================================================
// PROJECT HELPERS
// ============================================================================

/**
 * Creates a new project template with all required fields
 */
export function createProjectTemplate(overrides: Partial<Project> = {}): Project {
  return {
    id: generateId(),
    title: '',
    category: 'homelab',
    description: '',
    tech: [],
    status: 'in-progress',
    featured: false,
    startDate: new Date().toISOString().slice(0, 7), // YYYY-MM format
    links: {},
    ...overrides
  };
}

/**
 * Creates a project with GitHub repository link
 */
export function createProjectWithGitHub(
  title: string,
  description: string,
  githubUrl: string,
  tech: string[],
  category: string = 'homelab',
  overrides: Partial<Project> = {}
): Project {
  return createProjectTemplate({
    title,
    description,
    tech,
    category,
    links: {
      github: githubUrl
    },
    ...overrides
  });
}

/**
 * Adds or updates a GitHub link for an existing project
 */
export function addGitHubLink(project: Project, githubUrl: string): Project {
  return {
    ...project,
    links: {
      ...project.links,
      github: githubUrl
    }
  };
}

/**
 * Validates a project object
 */
export function validateProject(project: Partial<Project>): string[] {
  const errors: string[] = [];
  
  if (!project.id) errors.push('Project ID is required');
  if (!project.title) errors.push('Project title is required');
  if (!project.category) errors.push('Project category is required');
  if (!project.description) errors.push('Project description is required');
  if (!project.tech || project.tech.length === 0) errors.push('At least one technology is required');
  
  return errors;
}

// ============================================================================
// EXPERIENCE HELPERS
// ============================================================================

/**
 * Creates a new experience template with all required fields
 */
export function createExperienceTemplate(overrides: Partial<Experience> = {}): Experience {
  return {
    id: generateId(),
    company: '',
    title: '',
    start: '',
    end: 'Present',
    bullets: [],
    tech: [],
    type: 'full-time',
    ...overrides
  };
}

/**
 * Validates an experience object
 */
export function validateExperience(experience: Partial<Experience>): string[] {
  const errors: string[] = [];
  
  if (!experience.id) errors.push('Experience ID is required');
  if (!experience.company) errors.push('Company name is required');
  if (!experience.title) errors.push('Job title is required');
  if (!experience.start) errors.push('Start date is required');
  if (!experience.end) errors.push('End date is required');
  if (!experience.bullets || experience.bullets.length === 0) errors.push('At least one bullet point is required');
  if (!experience.tech || experience.tech.length === 0) errors.push('At least one technology is required');
  
  return errors;
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generates a unique ID for projects and experiences
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Formats a date string for display
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  } catch {
    return dateString;
  }
}

/**
 * Creates a slug from a title (useful for IDs)
 */
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ============================================================================
// EXAMPLE TEMPLATES
// ============================================================================

/**
 * Example project templates for common project types
 */
export const projectTemplates = {
  homelab: createProjectTemplate({
    category: 'homelab',
    tech: ['Docker', 'Linux'],
    status: 'active'
  }),
  
  work: createProjectTemplate({
    category: 'work',
    status: 'completed',
    featured: true
  }),
  
  networking: createProjectTemplate({
    category: 'networking',
    tech: ['Python', 'Ansible'],
    status: 'in-progress'
  }),
  
  security: createProjectTemplate({
    category: 'security',
    tech: ['PowerShell', 'GPO'],
    status: 'active'
  })
};

/**
 * Example experience template
 */
export const experienceTemplate = createExperienceTemplate({
  bullets: [
    'Key achievement or responsibility',
    'Another important accomplishment',
    'Technical implementation or improvement'
  ],
  tech: ['Technology1', 'Technology2', 'Technology3']
});

// ============================================================================
// QUICK ADD FUNCTIONS
// ============================================================================

/**
 * Quick function to add a new homelab project with GitHub
 */
export function addHomelabProject(
  title: string,
  description: string,
  githubUrl: string,
  tech: string[]
): Project {
  return createProjectWithGitHub(title, description, githubUrl, tech, 'homelab', {
    id: createSlug(title),
    status: 'active'
  });
}

/**
 * Quick function to add a work project
 */
export function addWorkProject(
  title: string,
  description: string,
  tech: string[],
  startDate?: string,
  endDate?: string
): Project {
  return createProjectTemplate({
    id: createSlug(title),
    title,
    description,
    tech,
    category: 'work',
    status: 'completed',
    featured: true,
    startDate,
    endDate
  });
}

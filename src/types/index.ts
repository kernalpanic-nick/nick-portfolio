export interface Profile {
  name: string;
  role: string;
  location: string;
  highlights: string[];
  links: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export interface Experience {
  id: string; // Unique identifier for easier editing
  company: string;
  title: string;
  start: string;
  end: string;
  bullets: string[];
  tech: string[];
  location?: string;
  type?: 'full-time' | 'part-time' | 'contract' | 'internship';
  companyUrl?: string;
}

export interface Project {
  id: string; // Unique identifier for easier editing
  title: string;
  category: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
    website?: string;
  };
  status?: 'active' | 'completed' | 'archived' | 'in-progress';
  featured?: boolean; // For highlighting important projects
  startDate?: string;
  endDate?: string;
}

export interface Category {
  key: string;
  label: string;
}

export type TabType = 'all' | string;

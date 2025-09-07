import { Profile, Experience, Project, Category } from '../types';

export const profile: Profile = {
  name: 'John Developer',
  role: 'Full Stack Developer → Senior Software Engineer',
  location: 'San Francisco, CA',
  highlights: [
    'Led team of 5 developers on React migration',
    'Built microservices architecture serving 1M+ users',
    'Implemented CI/CD pipelines reducing deployment time by 80%',
    'Expert in React, Node.js, Python, and AWS',
    'Open source contributor with 500+ GitHub stars'
  ],
  links: {
    email: 'mailto:john@example.com',
    github: 'https://github.com/johndeveloper',
    linkedin: 'https://www.linkedin.com/in/johndeveloper/'
  }
};

export const experiences: Experience[] = [
  {
    id: 'techcorp-senior-2023',
    company: 'TechCorp Inc.',
    title: 'Senior Software Engineer',
    start: '2023',
    end: 'Present',
    location: 'San Francisco, CA',
    type: 'full-time',
    bullets: [
      'Led migration from legacy PHP system to modern React/Node.js stack, improving performance by 60%',
      'Architected microservices infrastructure using Docker and Kubernetes on AWS',
      'Mentored 3 junior developers and established code review best practices',
      'Implemented automated testing suite increasing code coverage from 40% to 95%'
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis']
  },
  {
    id: 'startup-fullstack-2021',
    company: 'InnovateLab Startup',
    title: 'Full Stack Developer',
    start: '2021',
    end: '2023',
    location: 'Remote',
    type: 'full-time',
    bullets: [
      'Built MVP from scratch using React, Express.js, and MongoDB serving 10K+ users',
      'Designed and implemented RESTful APIs with comprehensive documentation',
      'Set up CI/CD pipelines using GitHub Actions and deployed to AWS EC2',
      'Collaborated with design team to create responsive, mobile-first interfaces'
    ],
    tech: ['React', 'Express.js', 'MongoDB', 'JavaScript', 'AWS', 'GitHub Actions', 'Figma']
  },
  {
    id: 'webagency-junior-2020',
    company: 'Creative Web Agency',
    title: 'Junior Developer',
    start: '2020',
    end: '2021',
    location: 'Austin, TX',
    type: 'full-time',
    bullets: [
      'Developed custom WordPress themes and plugins for 20+ client websites',
      'Optimized website performance achieving 90+ Google PageSpeed scores',
      'Collaborated with designers to implement pixel-perfect responsive designs',
      'Maintained and updated existing client websites using PHP and MySQL'
    ],
    tech: ['WordPress', 'PHP', 'MySQL', 'JavaScript', 'CSS', 'HTML', 'jQuery']
  }
];

export const categories: Category[] = [
  { key: 'web', label: 'Web Development' },
  { key: 'mobile', label: 'Mobile Apps' },
  { key: 'devops', label: 'DevOps & Infrastructure' },
  { key: 'opensource', label: 'Open Source' },
  { key: 'ai', label: 'AI & Machine Learning' },
  { key: 'tools', label: 'Developer Tools' }
];

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform with Microservices',
    category: 'web',
    description: 'Full-stack e-commerce platform built with React, Node.js, and microservices architecture. Features include user authentication, payment processing, inventory management, and real-time notifications.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Stripe API'],
    status: 'completed',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-08',
    links: {
      github: 'https://github.com/johndeveloper/ecommerce-platform',
      demo: 'https://ecommerce-demo.example.com',
      docs: 'https://docs.example.com/ecommerce-platform'
    }
  },
  {
    id: 'task-management-app',
    title: 'Collaborative Task Management App',
    category: 'web',
    description: 'Real-time collaborative task management application with drag-and-drop interface, team workspaces, and advanced filtering. Built with modern React patterns and WebSocket integration.',
    tech: ['React', 'TypeScript', 'Socket.io', 'Express.js', 'MongoDB', 'Material-UI'],
    status: 'active',
    featured: true,
    startDate: '2023-09',
    links: {
      github: 'https://github.com/johndeveloper/task-manager',
      demo: 'https://taskmanager-demo.example.com'
    }
  },
  {
    id: 'react-native-fitness',
    title: 'Fitness Tracking Mobile App',
    category: 'mobile',
    description: 'Cross-platform mobile app for fitness tracking with workout plans, progress analytics, and social features. Integrates with health APIs and wearable devices.',
    tech: ['React Native', 'TypeScript', 'Firebase', 'HealthKit', 'Google Fit', 'Redux'],
    status: 'completed',
    startDate: '2022-06',
    endDate: '2023-02',
    links: {
      github: 'https://github.com/johndeveloper/fitness-tracker',
      website: 'https://fitnessapp.example.com'
    }
  },
  {
    id: 'kubernetes-deployment',
    title: 'Kubernetes CI/CD Pipeline',
    category: 'devops',
    description: 'Automated deployment pipeline using Kubernetes, Helm charts, and GitOps principles. Includes monitoring, logging, and auto-scaling configurations.',
    tech: ['Kubernetes', 'Helm', 'GitLab CI', 'Prometheus', 'Grafana', 'ArgoCD'],
    status: 'active',
    startDate: '2023-03',
    links: {
      github: 'https://github.com/johndeveloper/k8s-pipeline',
      docs: 'https://docs.example.com/k8s-deployment'
    }
  },
  {
    id: 'open-source-ui-library',
    title: 'React Component Library',
    category: 'opensource',
    description: 'Open-source React component library with TypeScript support, comprehensive documentation, and automated testing. Used by 100+ projects on GitHub.',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'CSS-in-JS'],
    status: 'active',
    featured: true,
    startDate: '2022-01',
    links: {
      github: 'https://github.com/johndeveloper/react-ui-components',
      website: 'https://ui-components.example.com',
      docs: 'https://storybook.example.com'
    }
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support Chatbot',
    category: 'ai',
    description: 'Intelligent chatbot using natural language processing to handle customer inquiries. Integrates with existing support systems and learns from interactions.',
    tech: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL', 'Docker'],
    status: 'in-progress',
    startDate: '2024-01',
    links: {
      github: 'https://github.com/johndeveloper/ai-chatbot'
    }
  },
  {
    id: 'developer-productivity-tool',
    title: 'VS Code Extension for API Testing',
    category: 'tools',
    description: 'Visual Studio Code extension that simplifies API testing and documentation. Features include request collections, environment variables, and response visualization.',
    tech: ['TypeScript', 'VS Code API', 'Node.js', 'Webpack'],
    status: 'completed',
    startDate: '2023-10',
    endDate: '2023-12',
    links: {
      github: 'https://github.com/johndeveloper/vscode-api-tester',
      website: 'https://marketplace.visualstudio.com/items?itemName=johndeveloper.api-tester'
    }
  },
  {
    id: 'blockchain-voting-system',
    title: 'Decentralized Voting Platform',
    category: 'web',
    description: 'Blockchain-based voting system ensuring transparency and security. Built with Ethereum smart contracts and React frontend.',
    tech: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Truffle', 'MetaMask'],
    status: 'archived',
    startDate: '2022-03',
    endDate: '2022-08',
    links: {
      github: 'https://github.com/johndeveloper/blockchain-voting',
      docs: 'https://docs.example.com/blockchain-voting'
    }
  }
];

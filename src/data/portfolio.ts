import { Profile, Experience, Project, Category } from '../types';

export const profile: Profile = {
  name: 'Nick S.',
  role: 'Systems Administrator → Infrastructure Engineer',
  location: 'Oregon, USA',
  highlights: [
    'Windows 11 rollout (350+ endpoints)',
    'AD/GPO, DHCP/DNS, O365, Exchange',
    'Proxmox/Hyper‑V | ZFS/Ceph',
    'OPNsense/SonicWall | Brocade/UniFi/Aruba',
    'Docker + Traefik v3 | LDAP | Elasticsearch'
  ],
  links: {
    email: 'mailto:nick@example.com',
    github: 'https://github.com/yourhandle',
    linkedin: 'https://www.linkedin.com/in/yourhandle/'
  }
};

export const experiences: Experience[] = [
  {
    id: 'meriplex-copa-2023',
    company: 'Meriplex → COPA',
    title: 'Systems Admin / Infra Lead',
    start: '2023',
    end: 'Present',
    location: 'Oregon, USA',
    type: 'full-time',
    bullets: [
      'Windows 10 → 11 migration; standardized imaging (MDT/SmartDeploy/OS Deployer).',
      'Multi‑site VLANs, DHCP relay/PXE, OPNsense/SonicWall.',
      'Proxmox & Hyper‑V; ZFS & Ceph; 25GbE Mellanox.',
      'Docker + Traefik v3; Elasticsearch ILM; LDAP/Authelia.'
    ],
    tech: ['AD/GPO', 'Hyper‑V', 'Proxmox', 'ZFS', 'Ceph', 'OPNsense', 'Brocade', 'Docker', 'Traefik', 'Elasticsearch']
  }
];

export const categories: Category[] = [
  { key: 'work', label: 'Work' },
  { key: 'homelab', label: 'Homelab' },
  { key: 'networking', label: 'Networking' },
  { key: 'security', label: 'Security' },
  { key: 'media', label: 'Media Automation' },
  { key: 'docs', label: 'Docs & Guides' }
];

export const projects: Project[] = [
  {
    id: 'windows-11-rollout',
    title: 'Windows 11 Enterprise Rollout (350+)',
    category: 'work',
    description: 'Gold image, driver injection, task sequences, rollback plan, comms templates.',
    tech: ['MDT', 'SmartDeploy', 'OS Deployer', 'GPO', 'BitLocker', 'PowerShell'],
    status: 'completed',
    featured: true,
    startDate: '2023-01',
    endDate: '2023-06',
    links: {
      docs: 'https://docs.example.com/windows-11-rollout'
    }
  },
  {
    id: 'proxmox-ceph-cluster',
    title: 'Proxmox Cluster + Ceph (Quincy)',
    category: 'homelab',
    description: '3‑node, GPU passthrough (Arc A380), 25GbE Mellanox fabric.',
    tech: ['Proxmox', 'Ceph', 'GPU', '25GbE', 'Mellanox'],
    status: 'active',
    featured: true,
    startDate: '2023-03',
    links: {
      github: 'https://github.com/yourhandle/proxmox-homelab',
      docs: 'https://docs.example.com/proxmox-setup'
    }
  },
  {
    id: 'docker-traefik-stack',
    title: 'Docker + Traefik v3 Infrastructure',
    category: 'homelab',
    description: 'Containerized services with automatic SSL, load balancing, and service discovery.',
    tech: ['Docker', 'Traefik', 'Docker Compose', 'Let\'s Encrypt', 'LDAP'],
    status: 'active',
    startDate: '2023-08',
    links: {
      github: 'https://github.com/yourhandle/docker-traefik-stack'
    }
  },
  {
    id: 'network-automation',
    title: 'Network Configuration Automation',
    category: 'networking',
    description: 'Automated VLAN provisioning, DHCP management, and firewall rule deployment.',
    tech: ['Python', 'Ansible', 'SNMP', 'REST APIs', 'PowerShell'],
    status: 'in-progress',
    startDate: '2024-01',
    links: {
      github: 'https://github.com/yourhandle/network-automation'
    }
  }
];

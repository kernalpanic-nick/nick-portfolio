import { useMemo, useState, useEffect } from 'react'
import Section from './components/Section'
import { Pill, Button } from './components/ui'

const profile = {
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
}

const experiences = [
  {
    company: 'Meriplex → COPA',
    title: 'Systems Admin / Infra Lead',
    start: '2023',
    end: 'Present',
    bullets: [
      'Windows 10 → 11 migration; standardized imaging (MDT/SmartDeploy/OS Deployer).',
      'Multi‑site VLANs, DHCP relay/PXE, OPNsense/SonicWall.',
      'Proxmox & Hyper‑V; ZFS & Ceph; 25GbE Mellanox.',
      'Docker + Traefik v3; Elasticsearch ILM; LDAP/Authelia.'
    ],
    tech: ['AD/GPO', 'Hyper‑V', 'Proxmox', 'ZFS', 'Ceph', 'OPNsense', 'Brocade', 'Docker', 'Traefik', 'Elasticsearch']
  }
]

const categories = [
  { key: 'work', label: 'Work' },
  { key: 'homelab', label: 'Homelab' },
  { key: 'networking', label: 'Networking' },
  { key: 'security', label: 'Security' },
  { key: 'media', label: 'Media Automation' },
  { key: 'docs', label: 'Docs & Guides' }
]

const projects = [
  {
    title: 'Windows 11 Enterprise Rollout (350+)',
    category: 'work',
    description: 'Gold image, driver injection, task sequences, rollback plan, comms templates.',
    tech: ['MDT', 'SmartDeploy', 'OS Deployer', 'GPO', 'BitLocker', 'PowerShell']
  },
  {
    title: 'Proxmox Cluster + Ceph (Quincy)',
    category: 'homelab',
    description: '3‑node, GPU passthrough (Arc A380), 25GbE Mellanox fabric.',
    tech: ['Proxmox', 'Ceph', 'GPU', '25GbE', 'Mellanox']
  }
]

export default function App() {
  const [tab, setTab] = useState<'all' | string>('all')
  const [query, setQuery] = useState('')
  const [dark, setDark] = useState(false)

  useEffect(() => {
    // Toggle the `dark` class on the root element
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const inTab = tab === 'all' ? true : p.category === tab
      if (!q) return inTab
      const hay = `${p.title} ${p.description} ${p.tech.join(' ')}`.toLowerCase()
      return inTab && hay.includes(q)
    })
  }, [query, tab])

  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 border-b bg-white/70 backdrop-blur dark:bg-gray-900/70">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#home" className="font-semibold">{profile.name}</a>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-4 text-sm">
              <a href="#experience" className="hover:underline">Experience</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
            <Button variant="outline" onClick={() => setDark(!dark)}>
              {dark ? 'Light' : 'Dark'}
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section id="home" title="">
        <div className="max-w-5xl mx-auto grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 border rounded-2xl p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl">{profile.role}</h1>
              <span className="text-sm text-neutral-500">{profile.location}</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.highlights.map((h, i) => (<Pill key={i}>{h}</Pill>))}
            </div>
          </div>
          <div className="border rounded-2xl p-4 dark:border-gray-700">
            <h3 className="font-semibold mb-2">Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a className="underline" href={profile.links.github}>GitHub</a>
              <a className="underline" href={profile.links.linkedin}>LinkedIn</a>
              <a className="underline" href={profile.links.email}>Email</a>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experiences.map((e, idx) => (
            <div key={idx} className="border rounded-2xl p-4 dark:border-gray-700">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{e.title}</h3>
                  <p className="text-sm text-neutral-500">{e.company}</p>
                </div>
                <div className="text-sm text-neutral-500">{e.start} — {e.end}</div>
              </div>
              <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
                {e.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tech.map((t, i) => (<Pill key={i}>{t}</Pill>))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="border rounded-2xl p-4 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-2">
            <input className="border rounded-xl px-3 py-2 text-sm flex-1 dark:border-gray-700 dark:bg-gray-800 dark:text-white" placeholder="Search projects…" value={query} onChange={(e) => setQuery(e.target.value)} />
            <select className="border rounded-xl px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white" value={tab} onChange={(e) => setTab(e.target.value)}>
              <option value="all">All</option>
              {categories.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {filtered.map((p, i) => (
              <div key={i} className="border rounded-2xl p-4 dark:border-gray-700">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-neutral-600 mt-1 dark:text-neutral-300">{p.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t, j) => <Pill key={j}>{t}</Pill>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <form className="max-w-md border rounded-2xl p-4 dark:border-gray-700" method="post" action="/api/contact">
          <div className="space-y-3">
            <input required name="name" placeholder="Your name" className="w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            <input required type="email" name="email" placeholder="Your email" className="w-full border rounded-xl px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
            <textarea required name="message" placeholder="Your message" className="w-full border rounded-xl px-3 py-2 text-sm min-h-[120px] dark:border-gray-700 dark:bg-gray-800 dark:text-white"></textarea>
            <Button type="submit">Send</Button>
          </div>
        </form>
        <p className="text-xs text-neutral-500 mt-2 dark:text-neutral-400">This form sends via the Pages Function → SendGrid.</p>
      </Section>

      <footer className="py-8">
        <div className="max-w-5xl mx-auto px-4 text-xs text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </div>
  )
}

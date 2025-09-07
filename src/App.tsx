import { useMemo, useState } from 'react'
import Section from './components/Section'
import ContactForm from './components/ContactForm'
import { Pill, Button } from './ui'
import { useTheme } from './hooks/useTheme'
import { profile, experiences, categories, projects } from './data/portfolio'
import type { TabType } from './types'

export default function App() {
  const [tab, setTab] = useState<TabType>('all')
  const [query, setQuery] = useState('')
  const { dark, toggleTheme } = useTheme()

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
            <Button variant="outline" onClick={toggleTheme}>
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
        <ContactForm />
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

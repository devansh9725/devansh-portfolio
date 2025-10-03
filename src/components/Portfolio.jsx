import React from 'react'
import { motion } from 'framer-motion'
import {Github, Linkedin, Mail, Globe, ExternalLink, ArrowRight, Code2, Rocket, Briefcase, Award, FileDown, Link as LinkIcon} from 'lucide-react'

// =========================
// Quick personalization guide
// 1) Search for TODO tags and replace placeholders with your details
// 2) Update social links in SOCIALS
// 3) Add real projects/experience in the data arrays below
// 4) Run `npm run dev` locally to preview, then deploy
// =========================
// Competitive programming profiles
const COMPETITIVE = [
  {
    platform: 'Codeforces',
    handle: 'devansh9725',
    href: 'https://codeforces.com/profile/devansh9725',
    blurb: 'Active in rated contests; improving speed & accuracy.',
  },
  {
    platform: 'LeetCode',
    handle: 'Devansh9725',
    href: 'https://leetcode.com/u/Devansh9725/',
    blurb: 'Daily practice across arrays, DP, and graphs.',
  },
  {
    platform: 'CodeChef',
    handle: 'devansh9725',
    href: 'https://www.codechef.com/users/devansh9725',
    blurb: 'Long & Lunchtime contests; strong problem solving.',
  },
];


const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/devansh9725', Icon: Github }, // TODO: update if needed
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/', Icon: Linkedin }, // TODO
  { name: 'Email', href: 'mailto:devansh@example.com', Icon: Mail }, // TODO
  { name: 'Website', href: 'https://your-domain.dev', Icon: Globe }, // TODO
]

const SKILLS = [
  {
    group: 'Core',
    items: [
      { name: 'OOP', level: 90 },
      { name: 'Data Structures', level: 85 },
      { name: 'Algorithms', level: 80 },
      { name: 'Design Patterns', level: 75 },
    ],
  },
  {
    group: 'Web',
    items: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'WebSockets', level: 70 },
    ],
  },
  {
    group: 'DevOps & Tools',
    items: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 75 },
      { name: 'Postman', level: 80 },
    ],
  },
]

const PROJECTS = [
  {
    title: 'Multi-Threaded HTTP Proxy Server',
    description: 'High-performance proxy with caching and concurrency controls. Achieved low-latency request handling and robust logging.',
    tags: ['Java', 'Networking', 'Concurrency'],
    links: [{ label: 'Repo', href: 'https://github.com/devansh9725/Multi-Threaded-HTTP-Proxy-Server' }],
  },
  {
    title: 'High Concurrency Java Systems',
    description: 'Patterns for scalable Java services including thread pools, reactive pipelines, and backpressure handling.',
    tags: ['Java', 'Systems', 'Performance'],
    links: [{ label: 'Repo', href: 'https://github.com/devansh9725/High-Concurrency-Java-Systems' }],
  },
  {
    title: "Rubik's Cube Solver",
    description: 'Algorithmic solver implementing efficient cube-state search and heuristic pruning for near-optimal solutions.',
    tags: ['Algorithms', 'Heuristics', 'Search'],
    links: [{ label: 'Repo', href: 'https://github.com/devansh9725/Rubik-s-Cube-Solver' }],
  },
]

const EXPERIENCE = [
  {
    company: 'Your Company / Internship', // TODO
    role: 'Software Engineer Intern',
    period: 'May 2025 – Jul 2025',
    bullets: [
      'Built REST APIs used by 10k+ users; improved P95 latency by 30% via query optimization.',
      'Designed a WebSocket service for realtime updates; cut message lag from 400ms → 120ms.',
    ],
  },
  {
    company: 'Open-Source',
    role: 'Contributor',
    period: '2024 – Present',
    bullets: [
      'Contributed features and bugfixes to community projects; wrote clean, tested code.',
      'Reviewed PRs and improved documentation for onboarding developers.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Your University', // TODO
    program: 'B.Tech in Computer Science',
    period: '2022 – 2026',
    bullets: ['Coursework: DSA, Operating Systems, DBMS, Computer Networks, OOP'],
  },
]

const ACHIEVEMENTS = [
  'Top 5% on coding platforms (DSA)',
  'Built 10+ projects across systems & web',
  'Hackathon finalist (x2)',
]

const Section = ({ id, icon: Icon, title, children }) => (
  <section id={id} className="py-16 sm:py-20" aria-labelledby={`${id}-title`}>
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-5 h-5 text-gray-300" aria-hidden="true" />
        <h2 id={`${id}-title`} className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
)

function SocialButton({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur border border-white/10 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label={label}
    >
      <Icon className="w-4 h-4" aria-hidden="true" />
      <span className="hidden sm:inline text-sm">{label}</span>
    </a>
  )
}

function SkillBar({ name, level }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-300"><span>{name}</span><span>{level}%</span></div>
      <div className="w-full h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
          style={{ width: `${level}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
        <span className="text-xs text-gray-400">{project.tags.join(' · ')}</span>
      </div>
      <p className="text-gray-300 mt-3 leading-relaxed">{project.description}</p>
      <div className="flex gap-3 mt-5">
        {project.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-400/20"
          >
            <ExternalLink className="w-4 h-4" /> {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-indigo-400" />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-white font-semibold">{item.role} · <span className="text-gray-300">{item.company}</span></h3>
          <span className="text-xs text-gray-400">{item.period}</span>
        </div>
        <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-gray-200 relative">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/60 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 grid place-items-center text-white font-bold">DW</div>
            <span className="text-sm text-white/90">Devansh Wadhvana</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIALS.map((s) => (
              <SocialButton key={s.name} href={s.href} Icon={s.Icon} label={s.name} />
            ))}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              <ArrowRight className="w-4 h-4" /> Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <main id="home" className="relative">
        <section className="max-w-6xl mx-auto px-6 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-sm tracking-wider text-indigo-300 uppercase">Available for opportunities</p>
              <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white leading-tight">
                Software Engineer • Backend & Web
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                I build reliable, scalable systems and polished web apps. Passionate about performance, clean architecture, and developer experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
                >
                  <Code2 className="w-4 h-4" /> View Projects
                </a>
                <a
                  href="/Devansh_Wadhvana_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  <FileDown className="w-4 h-4" /> Download CV
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-2"><Rocket className="w-4 h-4" /> 10+ projects</div>
                <div className="flex items-center gap-2"><Briefcase className="w-4 h-4" /> Open to SDE roles</div>
                <div className="flex items-center gap-2"><Award className="w-4 h-4" /> Always learning</div>
              </div>
            </div>
            <div className="justify-self-center">
              {/* Avatar */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full rounded-3xl bg-[#0b0d12] grid place-items-center">
                  <div className="text-5xl sm:text-6xl font-bold text-white">DW</div>
                </div>
                <div className="absolute -z-10 -inset-6 blur-3xl opacity-50 bg-indigo-500/20 rounded-[2rem]" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <Section id="skills" icon={Code2} title="Skills & Expertise">
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((g) => (
              <div key={g.group} className="rounded-2xl p-6 border border-white/10 bg-white/5">
                <h3 className="text-white font-semibold mb-4">{g.group}</h3>
                <div className="space-y-4">
                  {g.items.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Competitive Programming */}
<Section id="competitive" icon={Rocket} title="Competitive Programming">
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {COMPETITIVE.map((p) => (
      <div key={p.platform} className="rounded-2xl p-6 border border-white/10 bg-white/5">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{p.platform}</h3>
          <a href={p.href} target="_blank" rel="noreferrer noopener" className="text-indigo-300 text-sm inline-flex items-center gap-1">
            <ExternalLink className="w-4 h-4" /> Visit
          </a>
        </div>
        <p className="text-gray-300 mt-2">{p.blurb}</p>
        <div className="mt-3 text-xs text-gray-400">Handle: <span className="text-gray-200">{p.handle}</span></div>
      </div>
    ))}
  </div>
</Section>

{/* Projects */}
        <Section id="projects" icon={ExternalLink} title="Featured Projects">
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" icon={Briefcase} title="Experience">
          <div className="space-y-6 border-l border-white/10 pl-3">
            {EXPERIENCE.map((e, i) => (
              <TimelineItem key={i} item={e} />
            ))}
          </div>
        </Section>

        {/* Education & Achievements */}
        <Section id="education" icon={Award} title="Education & Achievements">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold">Education</h3>
              <div className="mt-3 space-y-4">
                {EDUCATION.map((ed, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/90 font-medium">{ed.school}</span>
                      <span className="text-gray-400">{ed.period}</span>
                    </div>
                    <div className="text-gray-300">{ed.program}</div>
                    <ul className="list-disc list-inside text-gray-300 mt-2">
                      {ed.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold">Achievements</h3>
              <ul className="mt-3 space-y-2 text-gray-300 list-disc list-inside">
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" icon={Mail} title="Contact">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold">Let’s work together</h3>
              <p className="text-gray-300 mt-2">
                Have a role, freelance gig, or project in mind? I’m always open to building useful, delightful products.
              </p>
              <a
                href="mailto:devansh@example.com"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Mail className="w-4 h-4" /> Email Me
              </a>
            </div>
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
              <h3 className="text-white font-semibold">Links</h3>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    <s.Icon className="w-4 h-4" /> {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-10 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Devansh Wadhvana. Built with React & Tailwind.
          </div>
        </footer>
      </main>
    </div>
  )
}

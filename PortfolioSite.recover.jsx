import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Twitter, Download, ArrowUp, Sun, Moon,
  ExternalLink, X, ChevronLeft, ChevronRight, MapPin, Phone, Send,
  Code2, Palette, Server, Smartphone, Search, Award, Briefcase, GraduationCap,
} from "lucide-react";

/* ============================================================
   EDITABLE CONTENT — change everything in this block to match
   your own name, links, projects, and details.
   ============================================================ */
const PROFILE = {
  name: "vipin kumar",
  title: "Full Stack Developer",
  intro:
    "I build fast, accessible web applications end to end — from React interfaces to Node.js APIs. Currently focused on developer tools and clean, maintainable systems.",
  location: "uttar pradesh, India",
  email: "vipinsingh798@gmail.com",
  phone: "+91 95284 49525",
  resumeUrl: "#", // put a real .pdf link or file path here
  social: {
    github: "https://github.com/vipinsingh785898-commits",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://x.com/yourusername",
    email: "vipinsingh798@gmail.com",
  },
};

const ABOUT = {
  summary:
    "I'm a full stack developer with three years of experience shipping production web apps — from customer-facing dashboards to internal tooling. I care most about code that's easy to change six months later, and interfaces that feel obvious to use.",
  education: [
    { degree: "BCA (CNCS)", school: "Galgotias University", year: "2025 – 2029" },
  ],
  experience: "1+ years",
  interests: ["Open source", "Chess", "Cycling", "Reading sci-fi"],
};

const SKILLS = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
    ],
  },
  {
    category: "Databases",
    icon: Award,
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Tools",
    icon: Palette,
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
    ],
  },
];

const PROJECTS = [
  {
    title: "TaskFlow",
    category: "Full Stack",
    description: "A team task manager with real-time updates, role-based permissions, and drag-and-drop boards.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    demo: "#",
    repo: "#",
  },
  {
    title: "MetricsBoard",
    category: "Frontend",
    description: "An analytics dashboard with animated charts and a fully custom design system.",
    tech: ["Next.js", "Tailwind CSS", "Recharts"],
    demo: "#",
    repo: "#",
  },
  {
    title: "OrderAPI",
    category: "Backend",
    description: "A REST API for order management with JWT auth, rate limiting, and full test coverage.",
    tech: ["Express", "MySQL", "Jest"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Portfolio CMS",
    category: "Full Stack",
    description: "A headless CMS for portfolio sites, with a drag-and-drop page builder.",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    repo: "#",
  },
];

const SERVICES = [
  { icon: Code2, title: "Web Development", body: "End-to-end web apps built with modern frameworks, from prototype to production." },
  { icon: Palette, title: "UI/UX Design", body: "Interfaces designed around how people actually use them, not just how they look." },
  { icon: Server, title: "API Development", body: "REST and GraphQL APIs that are documented, tested, and built to last." },
  { icon: Smartphone, title: "Responsive Design", body: "Every project works the same whether it's opened on a phone or a desktop." },
];

const EXPERIENCE = [
  {
    company: "Nimbus Technologies",
    role: "Full Stack Developer",
    duration: "2025 — Present",
    achievements: ["Led migration of legacy app to Next.js, cutting load times by 40%", "Built internal design system used across 4 products"],
  },
  {
    company: "Brightloop Labs",
    role: "Frontend Developer",
    duration: "2025 — 2026",
    achievements: ["Shipped customer dashboard used by 10,000+ monthly users", "Reduced bundle size by 35% through code-splitting"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2025 — 2026",
    achievements: ["Delivered 12 client websites across e-commerce and services", "Maintained 100% on-time delivery record"],
  },
];

const CERTIFICATES = [
  { title: "Meta Front-End Developer", issuer: "Meta / Coursera", year: "2026" },
  { title: "AWS Certified Developer — Associate", issuer: "Amazon Web Services", year: "2026" },
  { title: "MongoDB Node.js Developer Path", issuer: "MongoDB University", year: "2026" },
];

const TESTIMONIALS = [
  { name: "Priya Nair", role: "Product Manager, Nimbus", quote: "Arjun turned a vague brief into a working product in under two weeks, and the code was clean enough that the next hire could pick it up immediately." },
  { name: "Rohan Mehta", role: "Founder, Brightloop", quote: "One of the few developers I've worked with who pushes back on scope when it doesn't serve the user. That instinct saved us months." },
  { name: "Sara Iqbal", role: "Design Lead", quote: "Pixel-accurate implementation every time, and he catches accessibility issues before I even flag them." },
];
/* ============================================================
   END EDITABLE CONTENT
   ============================================================ */

const ThemeContext = createContext(null);
const useTheme = () => useContext(ThemeContext);

function useTypingEffect(words, speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const duration = 1300;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);
  return value;
}

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-purple-500 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      />
    </motion.div>
  );
}

function useThemeClasses() {
  const { dark } = useTheme();
  return {
    bg: dark ? "bg-black" : "bg-white",
    bgAlt: dark ? "bg-gray-900" : "bg-gray-50",
    text: dark ? "text-white" : "text-gray-900",
    textMuted: dark ? "text-gray-400" : "text-gray-600",
    border: dark ? "border-gray-800" : "border-gray-200",
    card: dark ? "bg-gray-900/60 border-gray-800" : "bg-white border-gray-200",
  };
}

function Nav({ onToggleTheme }) {
  const { dark } = useTheme();
  const t = useThemeClasses();
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Services", "Experience", "Certificates", "Testimonials", "Contact"];

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-md ${dark ? "bg-black/70" : "bg-white/70"} border-b ${t.border}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {PROFILE.name.split(" ")[0]}.dev
        </button>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className={`text-sm ${t.textMuted} hover:text-purple-500 transition-colors`}>
              {l}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-full border ${t.border} hover:border-purple-500 transition-colors`}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>
      {open && (
        <div className={`md:hidden flex flex-col gap-1 px-6 pb-4 border-t ${t.border}`}>
          {links.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className={`text-left py-2 text-sm ${t.textMuted}`}>
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  const t = useThemeClasses();
  const typed = useTypingEffect(["Full Stack Developer", "React Engineer", "API Builder", "UI Craftsman"]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-center"
      >
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
          <div className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${t.bg} ${t.text}`}>
            {PROFILE.name.split(" ").map((n) => n[0]).join("")}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-3">{PROFILE.name}</h1>
        <div className="h-8 mb-6">
          <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {typed}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        <p className={`text-base md:text-lg ${t.textMuted} mb-8 max-w-xl mx-auto`}>{PROFILE.intro}</p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a href={PROFILE.resumeUrl} download className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
            <Download size={16} /> Download Resume
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className={`px-6 py-3 rounded-full border ${t.border} font-medium hover:border-purple-500 transition-colors`}>
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-500 transition-colors"><Github size={20} /></a>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-purple-500 transition-colors"><Linkedin size={20} /></a>
          <a href={PROFILE.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:text-purple-500 transition-colors"><Twitter size={20} /></a>
          <a href={PROFILE.social.email} aria-label="Email" className="hover:text-purple-500 transition-colors"><Mail size={20} /></a>
        </div>
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  const t = useThemeClasses();
  return (
    <Reveal>
      <div className="text-center mb-14">
        {eyebrow && <div className="text-xs font-semibold tracking-widest uppercase text-purple-500 mb-2">{eyebrow}</div>}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        {sub && <p className={`${t.textMuted} max-w-xl mx-auto`}>{sub}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  const t = useThemeClasses();
  const stats = [
    { label: "Years experience", value: 3 },
    { label: "Projects shipped", value: 24 },
    { label: "Happy clients", value: 18 },
  ];
  return (
    <section id="about" className={`py-24 px-6 ${t.bgAlt}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="About" title="About Me" />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className={`${t.textMuted} leading-relaxed mb-6`}>{ABOUT.summary}</p>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 font-semibold"><GraduationCap size={18} className="text-purple-500" /> Education</div>
              {ABOUT.education.map((e) => (
                <div key={e.degree} className={`text-sm ${t.textMuted} pl-6`}>{e.degree} — {e.school} ({e.year})</div>
              ))}
            </div>
            <div className="mb-6">
              <div className="font-semibold mb-2">Interests</div>
              <div className="flex flex-wrap gap-2">
                {ABOUT.interests.map((i) => (
                  <span key={i} className={`text-xs px-3 py-1 rounded-full border ${t.border}`}>{i}</span>
                ))}
              </div>
            </div>
            <a href={PROFILE.resumeUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity">
              <Download size={14} /> Download CV
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={`grid grid-cols-3 gap-4 rounded-2xl border ${t.card} p-6`}>
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCounter({ label, value }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(value, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{count}+</div>
      <div className="text-xs opacity-70 mt-1">{label}</div>
    </div>
  );
}

function Skills() {
  const t = useThemeClasses();
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Skills" title="What I Work With" sub="Tools and technologies I use day to day." />
        <div className="grid sm:grid-cols-2 gap-6">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.1}>
              <div className={`rounded-2xl border ${t.card} p-6`}>
                <div className="flex items-center gap-2 mb-5 font-semibold">
                  <group.icon size={18} className="text-purple-500" /> {group.category}
                </div>
                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }) {
  const t = useThemeClasses();
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span>{name}</span>
        <span className={t.textMuted}>{level}%</span>
      </div>
      <div className={`h-1.5 rounded-full ${t.bgAlt} overflow-hidden`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Projects() {
  const t = useThemeClasses();
  const categories = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = PROJECTS.filter(
    (p) => (filter === "All" || p.category === filter) && p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="projects" className={`py-24 px-6 ${t.bgAlt}`}>
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Work" title="Projects" sub="A selection of things I've built recently." />

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                  filter === c ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent" : `${t.border} ${t.textMuted}`
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${t.border}`}>
            <Search size={14} className="opacity-50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="bg-transparent outline-none text-sm w-32"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={`rounded-2xl border ${t.card} overflow-hidden group`}>
                <div className="h-40 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                  <Code2 size={36} className="opacity-40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-500">{p.category}</span>
                  </div>
                  <p className={`text-sm ${t.textMuted} mb-4`}>{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((tech) => (
                      <span key={tech} className={`text-xs px-2 py-1 rounded border ${t.border}`}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={p.demo} className="flex items-center gap-1.5 text-sm font-medium text-purple-500 hover:underline">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href={p.repo} className={`flex items-center gap-1.5 text-sm font-medium ${t.textMuted} hover:underline`}>
                      <Github size={14} /> Repository
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className={`col-span-2 text-center py-12 ${t.textMuted}`}>No projects match that search.</div>
          )}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const t = useThemeClasses();
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Services" title="What I Can Help With" />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className={`rounded-2xl border ${t.card} p-6 h-full hover:border-purple-500/50 transition-colors`}>
                <s.icon size={22} className="text-purple-500 mb-4" />
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className={`text-sm ${t.textMuted}`}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  const t = useThemeClasses();
  return (
    <section id="experience" className={`py-24 px-6 ${t.bgAlt}`}>
      <div className="max-w-3xl mx-auto">
        <SectionTitle eyebrow="Career" title="Experience" />
        <div className={`relative pl-8 border-l ${t.border}`}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={i * 0.1}>
              <div className="mb-10 relative">
                <div className="absolute -left-[35px] top-1 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={15} className="text-purple-500" />
                  <span className="font-semibold">{e.role}</span>
                </div>
                <div className={`text-sm ${t.textMuted} mb-2`}>{e.company} · {e.duration}</div>
                <ul className={`text-sm ${t.textMuted} list-disc list-inside space-y-1`}>
                  {e.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const t = useThemeClasses();
  const [active, setActive] = useState(null);
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Credentials" title="Certificates" sub="Click a card to preview." />
        <div className="grid sm:grid-cols-3 gap-6">
          {CERTIFICATES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <button
                onClick={() => setActive(c)}
                className={`w-full text-left rounded-2xl border ${t.card} p-6 hover:border-purple-500/50 transition-colors`}
              >
                <Award size={22} className="text-purple-500 mb-3" />
                <div className="font-semibold text-sm mb-1">{c.title}</div>
                <div className={`text-xs ${t.textMuted}`}>{c.issuer} · {c.year}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className={`max-w-md w-full rounded-2xl border ${t.card} p-8 relative`}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 opacity-60 hover:opacity-100" aria-label="Close">
                <X size={18} />
              </button>
              <Award size={32} className="text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-1">{active.title}</h3>
              <p className={t.textMuted}>{active.issuer} · {active.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Testimonials() {
  const t = useThemeClasses();
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  const item = TESTIMONIALS[index];
  return (
    <section id="testimonials" className={`py-24 px-6 ${t.bgAlt}`}>
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle eyebrow="Testimonials" title="What Clients Say" />
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
            <p className="text-lg mb-6 leading-relaxed">"{item.quote}"</p>
            <div className="font-semibold">{item.name}</div>
            <div className={`text-sm ${t.textMuted}`}>{item.role}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} aria-label="Previous testimonial" className={`p-2 rounded-full border ${t.border} hover:border-purple-500`}><ChevronLeft size={16} /></button>
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <span key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? "bg-purple-500" : t.border}`} />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial" className={`p-2 rounded-full border ${t.border} hover:border-purple-500`}><ChevronRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const t = useThemeClasses();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to EmailJS: emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    // See https://www.emailjs.com/docs/ for setup — you'll need a free account and these 3 IDs.
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle eyebrow="Get in Touch" title="Contact" sub="Have a project in mind? Send a message." />
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name" className={`w-full px-4 py-3 rounded-lg border ${t.border} bg-transparent outline-none focus:border-purple-500`}
              />
              <input
                required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email" className={`w-full px-4 py-3 rounded-lg border ${t.border} bg-transparent outline-none focus:border-purple-500`}
              />
              <textarea
                required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message" className={`w-full px-4 py-3 rounded-lg border ${t.border} bg-transparent outline-none focus:border-purple-500 resize-none`}
              />
              <button type="submit" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
                <Send size={15} /> Send Message
              </button>
              {sent && <p className="text-sm text-green-500">Message sent — I'll get back to you soon.</p>}
            </form>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3"><Mail size={16} className="text-purple-500" /> {PROFILE.email}</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-purple-500" /> {PROFILE.phone}</div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-purple-500" /> {PROFILE.location}</div>
            </div>
            <div className={`rounded-2xl overflow-hidden border ${t.border} h-56`}>
              <iframe
                title="Location map"
                width="100%" height="100%" loading="lazy"
                style={{ border: 0, filter: "grayscale(1) invert(0.9)" }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(PROFILE.location)}&z=12&output=embed`}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useThemeClasses();
  const links = ["About", "Skills", "Projects", "Contact"];
  return (
    <footer className={`py-10 px-6 border-t ${t.border}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex gap-5">
          <a href={PROFILE.social.github} aria-label="GitHub"><Github size={16} /></a>
          <a href={PROFILE.social.linkedin} aria-label="LinkedIn"><Linkedin size={16} /></a>
          <a href={PROFILE.social.twitter} aria-label="Twitter"><Twitter size={16} /></a>
          <a href={PROFILE.social.email} aria-label="Email"><Mail size={16} /></a>
        </div>
        <nav className="flex gap-5 text-sm opacity-70">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>
          ))}
        </nav>
        <div className="text-xs opacity-50">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioSite() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);
  const t = { bg: dark ? "bg-black" : "bg-white", text: dark ? "text-white" : "text-gray-900" };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeContext.Provider value={{ dark }}>
      <div className={`${t.bg} ${t.text} min-h-screen transition-colors duration-300`}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
          * { font-family: 'Inter', sans-serif; }
          h1, h2, h3, button { font-family: 'Poppins', sans-serif; }
          html { scroll-behavior: smooth; }
        `}</style>

        <AnimatePresence>{loading && <Loader />}</AnimatePresence>

        <Nav onToggleTheme={() => setDark(!dark)} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <ExperienceTimeline />
        <Certificates />
        <Testimonials />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </ThemeContext.Provider>
  );
}

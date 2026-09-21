"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const summaryHighlights = [
  "AI Engineer focused on agentic AI, RAG systems, and fine-tuning LLMs (PEFT, LoRA, QLoRA).",
  "Designs resilient backend and data flows with Docker, Nginx, ActiveMQ, LangChain, and Python.",
  "Builds production-grade automations using n8n, REST, and orchestration for high-availability stacks.",
];

const experience = [
  {
    role: "AI Engineer",
    company: "myOnsite Healthcare, LLC.",
    period: "Jun 2025 – Present",
    location: "Vadodara · On-site",
    bullets: [
      "Lead agentic AI initiatives for patient engagement with voice-driven systems.",
      "Own RAG pipelines using LangChain, Elastic Stack, and fine-tuned LLMs.",
      "Harden asynchronous infrastructure with Docker, Nginx, and ActiveMQ.",
    ],
  },
  {
    role: "Software Developer — AI/ML",
    company: "myOnsite Healthcare, LLC.",
    period: "Dec 2024 – May 2025",
    location: "Vadodara · On-site",
    bullets: [
      "Built and maintained real-time notification systems integrated with LIS.",
      "Automated document processing (fax data extraction) with Python + Flask.",
      "Deployed microservices and orchestrated AI workloads across systems.",
    ],
  },
];

const projects = [
  {
    name: "LLM Fine-Tuning",
    year: "2025",
    details: [
      "Fine-tuned LLaMA 3, LLaMA 2 (7B/13B), and Mistral with PEFT on custom reasoning datasets.",
      "Leveraged HuggingFace + BitsAndBytes quantization for efficient training.",
    ],
  },
  {
    name: "Multi-Agent ETA Prediction & Image Intelligence",
    year: "2025",
    details: [
      "Unified multi-agent stack for ETA prediction with real-time context and OCR/vision (Llama 3.2).",
      "Handles structured data extraction, intelligent captioning, and natural-language Q&A.",
    ],
  },
  {
    name: "n8n Automation for Query Optimization",
    year: "2025",
    details: [
      "Automated query analysis and optimization flows in n8n for large analytics workloads.",
      "Combined Python scripts, SQL parsing, and feedback loops for continuous improvement.",
    ],
  },
  {
    name: "Real-Time Notification System",
    year: "2024",
    details: [
      "End-to-end real-time notifications using Flask, ActiveMQ, and serverless triggers.",
      "Delivers instant updates to users and systems with high scalability.",
    ],
  },
  {
    name: "AI-Powered Profanity Detection",
    year: "2024",
    details: [
      "Fine-tuned BERT-based model to detect and flag offensive language in social media streams.",
      "Integrated into moderation tooling with automated filtering and reporting.",
    ],
  },
];

const skills = [
  {
    title: "AI & ML",
    items: ["Transformers", "RAG", "PEFT", "LoRA", "QLoRA", "Neural Networks", "Claude", "OpenCV", "TensorFlow", "scikit-learn"],
  },
  {
    title: "Frameworks & Tools",
    items: ["LangChain", "HuggingFace", "Flask", "FastAPI", "OpenAI API", "Cursor", "Firebase", "Airflow"],
  },
  {
    title: "Automation & Infra",
    items: ["n8n", "Agentic AI", "Python scripting", "Docker", "Nginx", "ActiveMQ", "Elastic Stack", "REST APIs", "Git/GitLab", "Linux", "NumPy", "Pandas"],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Bash", "SQL"],
  },
];

const education = [
  { school: "Parul University, Vadodara — B.Tech CSE", period: "2021 – 2025", detail: "CGPA: 7.3" },
  { school: "Sri Chaitanya Junior Kalasala, Hyderabad", period: "2019 – 2021", detail: "Intermediate (MPC) · 95.6%" },
  { school: "Sai Genius High School, Hyderabad", period: "2018 – 2019", detail: "SSC · CGPA 9.7" },
];

const languages = ["English (Professional)", "Hindi (Fluent)", "Telugu (Native)", "Gujarati (Moderate)"];

const links = {
  github: "https://github.com/VIKRAMNETHA",
  linkedin: "https://linkedin.com/in/VIKRAMNETHA",
  mail: "mailto:vikramnetha27@gmail.com",
};

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-bg">
          <Image
            src="/hero.png"
            alt="Vikram Guntuka"
            fill
            className="hero-img"
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero-veil" />

        <div className="hero-top">
          <span className="hero-mark">AI Engineer</span>
          <nav className="top-links">
            <a href={links.mail}>Mail</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
        </div>

        <div className="hero-body">
          <div>
            <h1 className="hero-name">
              <span><i>Vikram</i></span>
              <span><i>Guntuka</i></span>
            </h1>
            <p className="hero-sub">
              Building production-grade agentic AI, retrieval systems, and
              automation for healthcare and enterprise.
            </p>
          </div>

          <nav className="side-nav">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>
        </div>

        <div className="hero-foot">
          <span><i className="status-dot" /> Available for opportunities</span>
          <span>Hyderabad, India</span>
          <span>+91 87121 63880</span>
        </div>
      </header>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <div className="page">
        <section id="about" className="section reveal">
          <SectionHeader num="01" title="About" />
          <div className="about-grid">
            {summaryHighlights.map((text) => (
              <div key={text} className="about-cell">
                <p className="about-text">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── SKILLS ──────────────────────────────────────── */}
      <div className="page">
        <section id="skills" className="section reveal">
          <SectionHeader num="02" title="Skills" />
          <div className="skills-rows">
            {skills.map((s) => (
              <div key={s.title} className="skill-row">
                <p className="skill-cat">{s.title}</p>
                <div className="skill-tags">
                  {s.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="skill-row">
              <p className="skill-cat">Languages</p>
              <div className="skill-tags">
                {languages.map((l) => (
                  <span key={l} className="skill-tag">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── WORK ────────────────────────────────────────── */}
      <div className="page">
        <section id="work" className="section reveal">
          <SectionHeader num="03" title="Work" />
          {experience.map((role) => (
            <div key={`${role.company}-${role.period}`} className="exp-item">
              <div>
                <p className="exp-period">{role.period}</p>
                <p className="exp-loc">{role.location}</p>
              </div>
              <div>
                <p className="exp-co">{role.company}</p>
                <h3 className="exp-role">{role.role}</h3>
                <ul className="exp-bullets">
                  {role.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>

      <hr className="rule" />

      {/* ── PROJECTS ────────────────────────────────────── */}
      <div className="page">
        <section id="projects" className="section reveal">
          <SectionHeader num="04" title="Projects" />
          <div className="proj-grid">
            {projects.map((p) => (
              <div key={p.name} className="proj-card">
                <p className="proj-yr">{p.year}</p>
                <h3 className="proj-name">{p.name}</h3>
                <ul className="proj-detail">
                  {p.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── EDUCATION ───────────────────────────────────── */}
      <div className="page">
        <section id="education" className="section reveal">
          <SectionHeader num="05" title="Education" />
          <div className="edu-rows">
            {education.map((e) => (
              <div key={e.school} className="edu-row">
                <p className="edu-period">{e.period}</p>
                <div>
                  <p className="edu-school">{e.school}</p>
                  <p className="edu-detail">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── CONTACT ─────────────────────────────────────── */}
      <div className="page">
        <section id="contact" className="cta-section reveal">
          <div className="cta-grid">
            <div>
              <p className="cta-eye">The next chapter</p>
              <h2 className="cta-head">
                Open to AI Engineer,<br />
                <em>Generative AI &amp;</em><br />
                Agentic AI roles.
              </h2>
              <p className="cta-sub">
                Ready to build reliable, production-grade AI systems with measurable impact.
              </p>
              <div className="cta-btns">
                <a href={links.mail} className="btn-line">vikramnetha27@gmail.com</a>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-line">
                  LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </div>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <div className="page">
        <footer className="footer">
          <span>© 2025 Vikram Guntuka</span>
          <div className="footer-links">
            <span>vikramnetha27@gmail.com</span>
            <span>+91 87121 63880</span>
          </div>
          <div className="footer-links">
            <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </>
  );
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS.serviceId!,
        EMAILJS.templateId!,
        formRef.current,
        { publicKey: EMAILJS.publicKey! }
      );
      formRef.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
      <p className="form-eye">Send a message</p>

      <label className="field">
        <span>Name</span>
        <input type="text" name="from_name" required autoComplete="name" />
      </label>

      <label className="field">
        <span>Email</span>
        <input type="email" name="reply_to" required autoComplete="email" />
      </label>

      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" className="btn-solid" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="form-note">Thanks — your message is on its way.</p>
      )}
      {status === "error" && (
        <p className="form-note form-note-err">
          Couldn&apos;t send. Email me directly at{" "}
          <a href={links.mail}>vikramnetha27@gmail.com</a>.
        </p>
      )}
    </form>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="sec-head">
      <span className="sec-num">{num}</span>
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}

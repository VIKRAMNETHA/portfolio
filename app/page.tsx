"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.1 + 0.2,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      a: Math.random() * 0.35 + 0.04,
    }));

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243,243,243,${p.a})`;
        ctx.fill();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", onResize); };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="pcvs" aria-hidden="true" />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-left">
          <div className="pill h-pill">
            <span className="pill-dot" />
            Available for opportunities
          </div>

          <div className="hero-name">
            <span className="name-solid h-line1">VIKRAM</span>
            <span className="name-outline h-line2">GUNTUKA</span>
            <div className="name-rule" />
          </div>

          <p className="hero-sub h-sub">
            AI Engineer crafting production-grade agentic AI, retrieval systems,
            and automation for healthcare and enterprise.
          </p>

          <div className="cta-row h-cta">
            <a href="mailto:vikramnetha27@gmail.com" className="btn-red">
              <Mail size={14} /> Get in Touch
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              <Linkedin size={14} /> LinkedIn <ArrowUpRight size={11} />
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github size={14} /> GitHub <ArrowUpRight size={11} />
            </a>
          </div>

          <div className="hero-meta h-meta">
            <span><MapPin size={11} /> Ahmedabad, Gujarat, India</span>
            <span><Phone size={11} /> +91 87121 63880</span>
            <span>he / him</span>
          </div>
        </div>

        <div className="portrait-col">
          <Image
            src="/hero.png"
            alt="Vikram Guntuka — AI Engineer"
            fill
            className="portrait-img"
            sizes="(max-width: 900px) 100vw, 44vw"
            priority
          />
          <div className="portrait-fade" />
          <div className="portrait-bottom" />
          <div className="portrait-glow" />
          <div className="scan-line" />
          <span className="portrait-tag">AI · ENGINEER · 2025</span>
        </div>
      </section>

      <hr className="rule" />

      {/* ── ABOUT ───────────────────────────────────────── */}
      <div className="page">
        <section className="section reveal">
          <SectionHeader title="About" />
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

      {/* ── EXPERIENCE ──────────────────────────────────── */}
      <div className="page">
        <section className="section reveal">
          <SectionHeader title="Experience" />
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
        <section className="section reveal">
          <SectionHeader title="Projects" />
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

      {/* ── SKILLS ──────────────────────────────────────── */}
      <div className="page">
        <section className="section reveal">
          <SectionHeader title="Skills" />
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
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── EDUCATION ───────────────────────────────────── */}
      <div className="page">
        <section className="section reveal">
          <SectionHeader title="Education" />
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

      {/* ── LANGUAGES ───────────────────────────────────── */}
      <div className="page">
        <section className="section reveal" style={{ paddingBlock: "52px" }}>
          <SectionHeader title="Languages" />
          <div className="lang-tags skill-tags">
            {languages.map((l) => (
              <span key={l} className="skill-tag" style={{ color: "rgba(243,243,243,0.52)" }}>{l}</span>
            ))}
          </div>
        </section>
      </div>

      <hr className="rule" />

      {/* ── CTA ─────────────────────────────────────────── */}
      <div className="page">
        <section className="cta-section reveal">
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
            <a href="mailto:vikramnetha27@gmail.com" className="btn-red">Schedule a Call</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn-ghost">
              View LinkedIn <ArrowUpRight size={11} />
            </a>
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

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="sec-head">
      <span className="sec-mark" aria-hidden="true" />
      <h2 className="sec-title">{title}</h2>
    </div>
  );
}

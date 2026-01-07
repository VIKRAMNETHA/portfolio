import Image from "next/image";
import {
  ArrowUpRight,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      "Built a unified multi-agent stack for ETA prediction with real-time context and OCR/vision (Llama 3.2 vision).",
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
    items: [
      "Transformers",
      "RAG",
      "PEFT",
      "LoRA",
      "QLoRA",
      "Neural Networks",
      "Claude",
      "OpenCV",
      "TensorFlow",
      "scikit-learn",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "LangChain",
      "HuggingFace",
      "Flask",
      "FastAPI",
      "OpenAI API",
      "Cursor",
      "Firebase",
      "Airflow",
    ],
  },
  {
    title: "Automation & Infra",
    items: [
      "n8n",
      "Agentic AI",
      "Python scripting",
      "Docker",
      "Nginx",
      "ActiveMQ",
      "Elastic Stack",
      "REST APIs",
      "Git/GitLab",
      "Linux",
      "NumPy",
      "Pandas",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "JavaScript", "Bash", "SQL"],
  },
];

const education = [
  {
    school: "Parul University, Vadodara — B.Tech CSE",
    period: "2021 – 2025",
    detail: "CGPA: 7.3",
  },
  {
    school: "Sri Chaitanya Junior Kalasala, Hyderabad",
    period: "2019 – 2021",
    detail: "Intermediate (MPC), Percentage: 95.6",
  },
  {
    school: "Sai Genius High School, Hyderabad",
    period: "2018 – 2019",
    detail: "SSC, CGPA: 9.7",
  },
];

const languages = [
  "English (Professional)",
  "Hindi (Fluent)",
  "Telugu (Native)",
  "Gujarati (Moderate)",
];

const links = {
  github: "https://github.com/VIKRAMNETHA",
  linkedin: "https://linkedin.com/in/VIKRAMNETHA",
};

export default function Home() {
  return (
    <div className="min-h-screen pb-14">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pt-12 md:px-10">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-10 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute right-10 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          </div>
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="soft">Open to work</Badge>
                <Badge variant="default">AI Engineer</Badge>
                <Badge variant="outline">
                  <MapPin size={14} />
                  Ahmedabad, Gujarat, India
                </Badge>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-slate-400">He / Him</p>
                <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
                  Vikram Guntuka
                </h1>
                <p className="max-w-2xl text-lg text-slate-300">
                  AI Engineer crafting production-grade agentic AI, retrieval
                  systems, and automation for healthcare and enterprise use
                  cases.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="mailto:vikramnetha27@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-400" />
                  <span>+91 87121 63880</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 size={14} className="text-slate-400" />
                  <span>Building with LangChain, n8n, and agentic AI</span>
                </div>
              </div>
            </div>
            <div className="relative h-44 w-44 shrink-0 self-start overflow-hidden rounded-full border border-white/15 bg-slate-900 shadow-2xl shadow-sky-500/25 md:self-auto">
              <div className="absolute inset-[-12%] rounded-full bg-gradient-to-br from-sky-500/25 via-slate-900 to-indigo-500/25 blur-2xl" />
              <Image
                src="/profile.png"
                alt="Vikram Guntuka portrait"
                fill
                className="object-cover"
                sizes="176px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {summaryHighlights.map((item) => (
            <Card key={item}>
              <CardHeader className="flex items-start gap-3">
                <div className="rounded-full bg-sky-500/10 p-2 text-sky-300">
                  <Sparkles size={18} />
                </div>
                <CardTitle className="text-base font-semibold leading-6 text-slate-100">
                  {item}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-2xl">Experience</CardTitle>
                <CardDescription>
                  AI leadership across healthcare automation and intelligent
                  systems.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-5 md:grid-cols-2">
              {experience.map((role) => (
                <div
                  key={`${role.company}-${role.period}`}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-5 shadow-inner shadow-black/30"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-sm text-sky-300">{role.company}</p>
                      <h3 className="text-lg font-semibold text-slate-50">
                        {role.role}
                      </h3>
                    </div>
                    <Badge variant="soft">{role.period}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{role.location}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Projects</CardTitle>
              <CardDescription>
                Production-grade builds across LLM fine-tuning, multi-agent
                systems, and safety tooling.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-white/5 bg-white/[0.01] p-4 shadow-inner shadow-black/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {project.name}
                    </h3>
                    <Badge variant="soft">{project.year}</Badge>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {project.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Skills</CardTitle>
              <CardDescription>
                A balanced stack across AI/ML, automation, and infra.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.title} className="rounded-xl bg-white/[0.03] p-3">
                  <p className="text-sm font-semibold text-sky-200">
                    {skill.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {skill.items.join(" · ")}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
              <CardDescription>
                Strong academic foundation with consistent performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="rounded-xl bg-white/[0.03] p-3 leading-relaxed"
                >
                  <p className="text-sm font-semibold text-slate-100">
                    {item.school}
                  </p>
                  <p className="text-sm text-slate-400">{item.period}</p>
                  <p className="text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Languages & Profile</CardTitle>
              <CardDescription>
                Fluent communication and active professional presence.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl bg-white/[0.03] p-3 text-sm text-slate-300">
                <p className="mb-2 text-sm font-semibold text-sky-200">
                  Spoken Languages
                </p>
                <p>{languages.join(" · ")}</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] p-3 text-sm text-slate-300 space-y-2">
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-slate-400" />
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-200"
                  >
                    {links.github}
                  </a>
                  <ArrowUpRight size={14} />
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-slate-400" />
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-sky-200"
                  >
                    {links.linkedin}
                  </a>
                  <ArrowUpRight size={14} />
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-slate-400" />
                  <span>vikramnetha27@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 px-6 py-8 shadow-xl shadow-black/30 md:flex md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Availability
            </p>
            <h3 className="text-2xl font-semibold text-slate-50">
              Open to AI Engineer, Generative AI, and Agentic AI roles.
            </h3>
            <p className="text-sm text-slate-300">
              Ready to build reliable, production-grade AI systems with
              measurable impact.
            </p>
          </div>
          <div className="mt-4 flex gap-3 md:mt-0">
            <Button asChild size="lg">
              <a href="mailto:vikramnetha27@gmail.com">Schedule a call</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                View LinkedIn
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

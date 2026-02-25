import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  FileText,
  GraduationCap,
  Home,
  Mail,
  Shield,
} from "lucide-react";

export type SectionId =
  | "home"
  | "about"
  | "journey"
  | "skills"
  | "projects"
  | "certifications"
  | "experience"
  | "resume"
  | "contact";

export type NavItem = { id: SectionId; label: string; icon: LucideIcon };

export const NAV: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: BookOpen },
  { id: "journey", label: "Journey", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: ArrowUpRight },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export const SECTION_VIDEOS: Record<SectionId, string> = {
  home: "https://cdn.dribbble.com/userupload/43522911/file/original-716386c3f619ce8f33105de366118684.mp4",
  about: "https://cdn.dribbble.com/userupload/44175322/file/original-be34cab0a701bc4fc65c4f8cd6f2be17.mp4",
  journey: "https://cdn.dribbble.com/userupload/43521635/file/original-82e6dd08d6a9b64f2dae66e264acba62.mp4",
  skills: "https://cdn.dribbble.com/userupload/7593327/file/original-04c2467893264aa3ab4132326f428cb2.mp4",
  projects: "https://cdn.dribbble.com/userupload/7564825/file/original-4c36b25a485d559c52271e011ec25e0a.mp4",
  certifications: "https://cdn.dribbble.com/userupload/6930026/file/original-c381e6a4396b08869a8a254438c3b6ee.mp4",
  experience: "https://cdn.dribbble.com/userupload/7441541/file/original-abca2b5148ac90b238457394af5d6fbd.mp4",
  resume: "https://cdn.dribbble.com/userupload/15045687/file/original-7ad92bef0f958005d8756f5e1333e678.mp4",
  contact: "https://cdn.dribbble.com/userupload/43806181/file/original-238737ff2fb77fefe3aeb0477e50c88e.mp4",
};

export const PROFILE = {
  name: "Mohammad Ibtesam Ahmed",
  roleLine: "Software Developer · AI Systems Explorer · Data Scientist · Systems Thinker · AI Technologist",
  mainMessage: "Transforming Ideas into Intelligent Systems with the Power of AI, Data, and Code",
  headline: "Shaping the Future with AI, Data Science, and Seamless Automation",
  subtext:
    "I am a Software Developer, AI Systems Explorer, and Data Scientist — also a Systems Thinker and AI Technologist — combining technical expertise with creative problem-solving to build transformative solutions. With certifications spanning from advanced AI applications to business automation and cybersecurity, I specialize in crafting intelligent systems that drive efficiency and growth. My journey is powered by a passion for learning and pushing the boundaries of technology, from mastering generative AI tools to automating business workflows. Whether you need cutting-edge AI-driven applications or robust, scalable data systems, I am dedicated to building solutions that are both powerful and sustainable.",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D5603AQHhfa6kUpr3wA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679304965763?e=1770854400&v=beta&t=weZoC00yNZBIVUe5RX-c3OMQ4kT2Xwgi7vFHwusp2W8",
};

export const ABOUT = {
  title: "I build intelligent, scalable systems that convert complexity into reliable value.",
  body: [
    "My name is Mohammad Ibtesam Ahmed. I blend software engineering, data science, and generative AI to design and deliver AI-driven products and automated workflows that increase efficiency, reduce risk, and create measurable business impact.",
    "I approach every problem with a systems mindset, starting from first principles to understand the real constraints before designing solutions that are simple, secure, and maintainable. My work prioritizes production readiness over experimentation, ensuring that each system performs reliably under real-world conditions while remaining adaptable as requirements evolve. By combining thoughtful engineering with practical AI application, I focus on building solutions that last—technically, operationally, and strategically.",
    "I am guided by principles that emphasize long-term thinking, disciplined execution, and responsibility at scale. Rather than optimizing for short-term gains, I focus on building systems that compound in value over time—systems that are trustworthy, transparent, and aligned with real human and organizational needs. This perspective shapes how I evaluate technology, make design decisions, and measure success, ensuring that what I build remains useful, resilient, and relevant well beyond its initial deployment.",
    "Ultimately, my work is driven by a commitment to clarity, responsibility, and long-term impact. I aim to build technology that earns trust through consistent performance and thoughtful design, and that continues to deliver value as systems, organizations, and environments evolve. I see every project as an opportunity to create something meaningful, enduring, and genuinely useful.",
  ],
  quotes: [
    {
      text: "“The best systems are not the most complex ones, but the ones that fail gracefully.”",
      author: "— Don Norman",
    },
    {
      text: "“A complex system that works is invariably found to have evolved from a simple system that worked.”",
      author: "— John Gall",
    },
  ],
  blocks: [
    {
      title: "How I think",
      text: "I solve problems from first principles. I start by defining the real need, then design systems that are simple, maintainable, and secure. I balance speed with correctness—prototype fast, validate with data, and harden for production. The result is thoughtful engineering that lasts.",
      icon: Shield,
    },
    {
      title: "What I do",
      text:
        "System Architecture & Engineering — design and build reliable, scalable backends and services.\n\nGenerative AI & Multimodal Systems — apply image, video, audio, and text models to create practical features and products.\n\nData Engineering & ML Pipelines — build robust data flows, feature stores, and training/inference infrastructure.\n\nAutomation & Workflow Integration — automate business processes end-to-end to save time and reduce operational friction.\n\nSecurity & Reliability — embed cybersecurity and observability practices so systems remain safe and dependable.",
      icon: Code2,
    },
    {
      title: "My process",
      text:
        "Understand → Prototype → Build → Validate → Scale.\nEvery project follows this loop, with clear metrics at each step and frequent, transparent communication.",
      icon: ArrowUpRight,
    },
    {
      title: "Why this matters",
      text:
        "I combine deep technical execution with systems-level thinking. That means not just shipping features, but building resilient solutions that scale, reduce operational cost, and deliver measurable outcomes.",
      icon: Shield,
    },
    {
      title: "Credibility & growth",
      text:
        "Certifications in advanced AI applications, business automation, and cybersecurity. Hands-on experience applying generative AI tools and deploying production systems that solve real problems.",
      icon: Award,
    },
    {
      title: "Where I’m heading",
      text:
        "I’m focused on building AI-driven products that drive efficiency and growth—tools that empower teams and create long-term value.\nIf you’re designing a product, automating processes, or exploring generative AI in production, let’s collaborate.",
      icon: ArrowUpRight,
    },
  ],
};

export const JOURNEY = [
  {
    title: "Nursery to UKG (Foundation Years)",
    org: "St. Peter Central Public School",
    duration: "~2007 – 2010",
    highlights: [
      "Age: ~3 to 6 years",
      "Focus: Basic literacy, numeracy, discipline, and learning habits",
    ],
    logoUrl: "https://www.stpeterscentralpublicschool.com/assets/img/Slogo.jpg",
  },
  {
    title: "Primary to Secondary School (Class 1–10)",
    org: "St. Peter Central Public School",
    duration: "~2010 – 2019",
    highlights: [
      "Age: ~6 to 16 years",
      "Completed 10th standard (Board Examination)",
      "Long-term consistency in one institution",
      "Strong academic foundation, values, and discipline",
      "I spent around 12 years total (Nursery–10th) in the same school, which shows stability, perseverance, and deep-rooted learning.",
    ],
    logoUrl: "https://www.stpeterscentralpublicschool.com/assets/img/Slogo.jpg",
  },
  {
    title: "Higher Secondary Education (MPC)",
    org: "Delhi Public School, Warangal",
    duration: "2019 – 2021",
    highlights: [
      "Age: ~16 to 18 years",
      "Stream: Mathematics, Physics, Chemistry (MPC)",
      "Completed 12th standard (Intermediate)",
      "This phase marked a transition from school comfort to competitive academics and future-focused thinking.",
    ],
    // Provided by user (URL)
    logoUrl:
      "https://play-lh.googleusercontent.com/9I2dG93nisD9xdT6ZeE0ol0OEJKQyvSOJ38g2MI1CpBGaVypHDm8N050eKLLWjs3c14=w600-h300-pc0xffffff-pd",
  },
  {
    title: "B.Tech — Bachelor of Technology",
    org: "SR University",
    duration: "2022 – 2026",
    highlights: [
      "Age: ~18 to 22 years",
      "Degree: Bachelor of Technology",
      "Technical skill development",
      "Career clarity",
      "Personal growth",
      "Exposure to real-world problem solving.",
    ],
    // Provided by user (updated base64)
    logoUrl:
      "data:image/png;base64,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",
  },
];

export const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  {
    title: "Technical",
    items: [
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
      "API Integration",
      "Git & GitHub",
    ],
  },
  {
    title: "AI & Automation",
    items: [
      "Workflow Automation (n8n)",
      "Generative AI & Prompt Engineering",
      "Chatbot Development & NLP",
      "LLM-based Applications",
      "AI-Driven Productivity Systems",
    ],
  },
  { title: "Problem Solving", items: ["Critical Thinking", "Logical Reasoning", "DSA-based Problem Solving"] },
  {
    title: "Product & Business",
    items: ["Business Analysis", "Requirements Engineering", "AI-Enhanced Decision Making", "Process & Metrics Automation"],
  },
  { title: "Communication", items: ["Clear Technical Communication", "Personal Branding & Content Creation"] },
];

// ---- Data moved out to keep this file from growing further ----
export { PROJECTS } from "@/components/portfolio/data/projects";
export { CERTIFICATIONS } from "@/components/portfolio/data/certifications";

export const EXPERIENCE = {
  title: "Network Security Associate Intern",
  org: "Fortinet",
  meta: "Jul 2024 – Sep 2024 (10 weeks) · Remote | Hyderabad, Telangana, India",
  logoUrl:
    "https://media.licdn.com/dms/image/v2/D560BAQFIQ_eNe9b1jg/company-logo_100_100/company-logo_100_100/0/1688016806462/fortinet_logo?e=1770854400&v=beta&t=W-bWRWv_aCa0mWISY3z3jYyVI4P9Vi_JnZfHb5p76w8",
  body:
    "Completed a 10-week Network Security Associate Internship certified by AICTE–EduSkills and supported by Fortinet. Gained hands-on exposure to core cybersecurity concepts, real-world security challenges, and industry-standard tools within a structured, mentor-led program.",
  bullets: [
    "Developed a solid foundation in network security principles and threat mitigation",
    "Worked on practical cybersecurity scenarios aligned with industry needs",
    "Applied problem-solving and analytical skills in a collaborative environment",
    "Gained exposure to modern security tools used in enterprise settings",
  ],
  credential:
    "https://media.licdn.com/dms/image/v2/D562DAQHUKGiBX_ooQQ/profile-treasury-image-shrink_1280_1280/B56Zby7VUYGsAQ-/0/1747832362866?e=1769936400&v=beta&t=U1LQ_If7SV_FJp315iUPfZ0fkHz7Wr08WafG2uM4t6M",
};

export const CONTACT = {
  email: "ibtesama964@gmail.com",
  github: "https://github.com/ibtesamahmed2004",
  linkedin: "https://www.linkedin.com/in/mohammad-ibtesam-ahmed-538b37266/",
  x: "https://x.com/ibtesam_ahmed20?s=21",
  instagram: "https://www.instagram.com/_whoisibtesam_?igsh=MWhxM2tmZW53ZXI0Zg%3D%3D&autm_source=qr",
  snapchat: "https://snapchat.com/t/IOQKlonF",
  facebook:
    "https://www.facebook.com/rabbani.sani.54?mibextid=wwXlfr&rdid=iDJNYIU49dJT5VAx&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CGRKgk2bk%2F%3Fmibextid%3DwwXlfr#",
};

/**
 * Single source of truth — every word here comes from
 * AMALJITH_U_K_RESUME (7).pdf. If the résumé changes, change it here once.
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string[];
  quip: string;
  accent: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  score: string;
  scoreLabel: string;
  blurb: string;
};

export type Project = {
  id: string;
  issue: string;
  title: string;
  subtitle: string;
  category: "AI Security" | "AI / RAG" | "Full-Stack" | "Machine Learning";
  accent: string;
  summary: string;
  bullets: string[];
  stack: string[];
  quip: string;
};

export type Badge = {
  title: string;
  detail: string;
  year: string;
  emoji: string;
  accent: string;
};

export const profile = {
  name: "Amaljith U K",
  first: "Amaljith",
  last: "U K",
  alias: "The Full-Stack Workhorse",
  issue: "Issue #01",
  edition: "Newsprint Edition · Kochi, Kerala",
  headline: "MCA grad who ships full-stack products and teaches AI agents to attack themselves.",
  tagline: "Full-Stack Developer · AI / ML Engineer · Professional Debugger",
  roles: ["Full-Stack Developer", "AI / ML Engineer", "NLP Tinkerer", "Agent Wrangler"],
  phone: "+91 97783 69357",
  phoneHref: "tel:+919778369357",
  email: "jith94245@gmail.com",
  emailHref: "mailto:jith94245@gmail.com",
  linkedin: "https://linkedin.com/in/amaljithuk2003",
  linkedinLabel: "linkedin.com/in/amaljithuk2003",
  github: "https://github.com/Amaljithuk",
  githubLabel: "github.com/Amaljithuk",
  location: "Kochi, Kerala, India",
  summary:
    "MCA Graduate from CUSAT with hands-on experience as a Software Engineering Intern at HashedIn by Deloitte, Remap Intelligence, and DataiX3. Proficient in Python, Java, Spring Boot, FastAPI, React, and LangGraph, with expertise in AI agent orchestration, data engineering, and full-stack web architectures.",
  shortSummary:
    "I build full-stack apps that don't fall over, and AI agents that get tested before they get shipped.",
};

export const stats = [
  { value: "3", label: "Internships", sub: "Deloitte · Remap · DataiX3" },
  { value: "4", label: "Shipped Projects", sub: "all with plot twists" },
  { value: "9.4", label: "MCA CGPA", sub: "CUSAT, no curve needed" },
  { value: "96.36", label: "UGC NET %ile", sub: "Dec 2024 session" },
  { value: "#6", label: "ML Hackathon", sub: "ModelQuest · NIT Trichy" },
];

export const experience: Experience[] = [
  {
    company: "HashedIn by Deloitte",
    role: "Software Engineer Intern",
    period: "Apr 2026 – Aug 2026",
    location: "Bengaluru, Karnataka",
    bullets: [
      "Developed full-stack enterprise applications across front-end interfaces and back-end microservices utilizing Python, Java (Spring Boot), FastAPI, Angular, and .NET.",
      "Applied Object-Oriented Programming (OOP) principles to design maintainable backend APIs, troubleshoot complex code issues, and continuously optimize application performance.",
      "Built real-time data streaming and distributed processing workflows using Apache Kafka and PySpark.",
    ],
    stack: ["Python", "Java", "Spring Boot", "FastAPI", "Angular", ".NET", "Kafka", "PySpark"],
    quip: "Enterprise software: where a semicolon becomes a ticket.",
    accent: "var(--red)",
  },
  {
    company: "Remap Intelligence Solutions",
    role: "AI Software Developer Intern",
    period: "Dec 2025 – Apr 2026",
    location: "Kochi, Kerala",
    bullets: [
      "Developed computer vision algorithms for medical rehabilitation and patient joint/pose movement tracking.",
      "Engineered automated assessment systems to analyze physical therapy exercises and measure real-time recovery metrics.",
      "Implemented OpenCV and pose estimation models to assist clinical feedback and movement evaluation.",
    ],
    stack: ["Computer Vision", "OpenCV", "Pose Estimation", "Python", "Rehab Tech"],
    quip: "Taught a camera to spot a sloppy squat. Physios approved. Knees everywhere, nervous.",
    accent: "var(--blue)",
  },
  {
    company: "DataiX3 (TransEduverse LLP)",
    role: "Software Developer Intern",
    period: "Dec 2025 – Apr 2026",
    location: "Kochi, Kerala",
    bullets: [
      "Contributed to internal and client-facing ERP platform developments and LMS platform UI/UX design.",
      "Conducted systematic website performance analysis, feature benchmarking, and usability audits.",
    ],
    stack: ["ERP", "LMS", "UI/UX", "Performance Audits", "Benchmarking"],
    quip: "Audited websites until they confessed which button was lying.",
    accent: "var(--purple)",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Cochin University of Science and Technology (CUSAT), Kochi, Kerala",
    period: "2024 – 2026",
    score: "9.4",
    scoreLabel: "CGPA",
    blurb: "Two years of advanced CS, three internships, and one unhealthy relationship with the build pipeline.",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Government College Kasaragod, Kerala",
    period: "2021 – 2024",
    score: "83.13%",
    scoreLabel: "Marks",
    blurb: "The origin story. Learned loops, recursion, and how to survive a Kerala power cut mid-commit.",
  },
];

export const skillGroups: { title: string; emoji: string; accent: string; skills: string[] }[] = [
  {
    title: "Languages",
    emoji: "🗣️",
    accent: "var(--red)",
    skills: ["Python", "Java", "JavaScript", "C", "SQL", "C#"],
  },
  {
    title: "Frameworks & Tools",
    emoji: "🧰",
    accent: "var(--blue)",
    skills: ["FastAPI", "Spring Boot", "HTML", "CSS", "ReactJS", "Angular", ".NET", "LangGraph", "Kafka"],
  },
  {
    title: "AI Security & ML",
    emoji: "🛡️",
    accent: "var(--purple)",
    skills: ["PyRIT", "Garak", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Databases & Platforms",
    emoji: "🗄️",
    accent: "var(--green)",
    skills: ["MySQL", "Docker", "Git", "Weaviate", "Pinecone"],
  },
];

export const powerStats = [
  { label: "Python", level: 96, note: "first language, still the favourite child" },
  { label: "Java / Spring Boot", level: 88, note: "enterprise-grade, beans included" },
  { label: "React / Frontend", level: 90, note: "will argue about spacing" },
  { label: "FastAPI & Python APIs", level: 92, note: "async and emotionally available" },
  { label: "LangGraph & Agents", level: 85, note: "agents that argue with themselves" },
  { label: "AI Red Teaming (PyRIT, Garak)", level: 82, note: "the villain in the AI story" },
  { label: "Computer Vision (OpenCV)", level: 80, note: "sees you. judges your posture." },
  { label: "Kafka & Streaming", level: 78, note: "messages in, chaos out (neatly)" },
];

export const projects: Project[] = [
  {
    id: "aegis",
    issue: "#01",
    title: "Aegis",
    subtitle: "Red Teaming Framework for AI Agents",
    category: "AI Security",
    accent: "var(--red)",
    summary:
      "A red-team in a box: it writes the attack playbooks, fires them at LLM agents, and scores how badly they break.",
    bullets: [
      "Engineered an automated AI red-teaming framework designed to attack and evaluate security robustness in LLM agents.",
      "Automated playbook generation and evaluated safety scores by leveraging PyRIT and Garak tools.",
    ],
    stack: ["PyRIT", "Garak", "LLM Security", "Python", "AI Agents"],
    quip: "It attacks AI agents for a living. Completely legal. Mostly.",
  },
  {
    id: "agentic-rag",
    issue: "#02",
    title: "Agentic RAG",
    subtitle: "Document QA System",
    category: "AI / RAG",
    accent: "var(--blue)",
    summary:
      "Ask your own documents a question, get a cited answer, then let Ragas decide whether the answer was actually any good.",
    bullets: [
      "Engineered a containerized AI application for semantic document retrieval using LangChain, Weaviate, and LlamaIndex.",
      "Implemented HyDe (Hypothetical Document Embeddings) and evaluated accuracy via Ragas (78.5% answer relevancy).",
    ],
    stack: ["LangChain", "Weaviate", "LlamaIndex", "HyDe", "Ragas", "Docker"],
    quip: "Answers your questions, then grades itself. 78.5% relevant — 100% smug.",
  },
  {
    id: "smart-health-connect",
    issue: "#03",
    title: "Smart Health Connect",
    subtitle: "Full-Stack Telemedicine System",
    category: "Full-Stack",
    accent: "var(--green)",
    summary:
      "Video consultations, role-based access and a hybrid database — a clinic that fits in a pocket.",
    bullets: [
      "Built a scalable telemedicine platform featuring real-time video consultations and role-based access control using React Native, FastAPI, WebRTC, Docker, and hybrid database architecture.",
    ],
    stack: ["React Native", "FastAPI", "WebRTC", "Docker", "Hybrid DB", "RBAC"],
    quip: "A doctor in your pocket. Bandwidth permitting. Please sit still.",
  },
  {
    id: "fi-res",
    issue: "#04",
    title: "Fi-Res",
    subtitle: "Wildfire Monitoring System",
    category: "Machine Learning",
    accent: "var(--orange)",
    summary:
      "Satellite images in, wildfire alerts out. The Telegram bot handles the screaming.",
    bullets: [
      "Developed a deep learning model to detect wildfires from satellite imagery using TensorFlow and OpenCV, integrating Telegram API for automated real-time alerts with 90% accuracy.",
    ],
    stack: ["TensorFlow", "OpenCV", "Telegram API", "Deep Learning", "Remote Sensing"],
    quip: "90% accuracy at spotting fires — and 100% at ruining my relaxed view of summer.",
  },
];

export const achievements = [
  {
    title: "UGC NET Qualified",
    subtitle: "Assistant Professor eligibility",
    detail: "December 2024 session · 96.36 percentile",
    note: "I studied. The exam blinked first.",
    emoji: "🎓",
    accent: "var(--yellow)",
  },
  {
    title: "Rank 6 — ModelQuest",
    subtitle: "ML Hackathon, NIT Trichy",
    detail: "Machine learning & model-tuning competition",
    note: "Sixth out of a lot. Models were tuned, sleep was not.",
    emoji: "🏆",
    accent: "var(--red)",
  },
];

export const certifications: Badge[] = [
  {
    title: "IBM SkillBuild Winter Certification",
    detail: "Data Analytics",
    year: "2024",
    emoji: "📊",
    accent: "var(--blue)",
  },
  {
    title: "NPTEL Certification",
    detail: "Social Network Analysis",
    year: "2024",
    emoji: "🕸️",
    accent: "var(--purple)",
  },
  {
    title: "Kaggle",
    detail: "Intro to Machine Learning",
    year: "2025",
    emoji: "🤖",
    accent: "var(--green)",
  },
  {
    title: "IBM Professional Certification",
    detail: "RAG and Agentic AI",
    year: "2026",
    emoji: "🧠",
    accent: "var(--pink)",
  },
];

export const leadership = [
  {
    role: "University Union Councillor",
    org: "Cochin University of Science and Technology (CUSAT), Kochi",
    year: "2024",
    emoji: "🗳️",
    note: "Elected. Somehow still had time for deadlines.",
  },
  {
    role: "University Union Councillor",
    org: "Government College Kasaragod, Kerala",
    year: "2023",
    emoji: "📣",
    note: "Learned that consensus is harder than concurrency.",
  },
  {
    role: "NSS Volunteer",
    org: "Cochin University of Science and Technology (CUSAT), Kochi",
    year: "2024 – 2026",
    emoji: "🤝",
    note: "Service before syntax.",
  },
];

export const sports = {
  title: "South Zone Inter-University Volleyball",
  detail: "Participated · 2024",
  note: "Proof I can spike things that aren't bugs.",
  emoji: "🏐",
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Conversational" },
];

export const marqueeSkills = [
  "Python", "Java", "Spring Boot", "FastAPI", "React", "Angular", "LangGraph",
  "Kafka", "PySpark", "PyRIT", "Garak", "TensorFlow", "OpenCV", "Docker",
  "Weaviate", "Pinecone", "MySQL", "Git", ".NET", "C#",
];

export const funFacts = [
  "Speaks three human languages — English, Malayalam, Hindi — plus six that machines prefer.",
  "South Zone Inter-University volleyball: spiking things is now a transferable skill.",
  "Won two student elections. Still loses every argument with a merge conflict.",
  "Believes every bug is just an undocumented feature with anxiety.",
];

// All site content lives here. Edit this file to update the portfolio —
// components only handle layout and presentation.

export const profile = {
  name: "Prabal Kumar Dwivedi",
  shortName: "Prabal Dwivedi",
  firstName: "Prabal",
  initials: "PD",
  role: "Full-Stack Engineer",
  location: "Indore, India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  // Shown as the green pill in the hero. Set to null to hide it.
  status: "Open to new opportunities",
  email: "prabal19999@gmail.com",
  resume: "https://drive.google.com/file/d/1vwIMk0rUtqFl8wnqvtdBOdTA7oY2dkVG/view?usp=sharing",
  githubUser: "RationalPrabal",
  // Shows the GitHub contribution graph under Skills. Turn on once the graph
  // looks healthy (enable "Private contributions" in GitHub profile settings).
  showGitHubActivity: false,
  // getform.io endpoint used by the contact form
  formEndpoint: "https://getform.io/f/31c00949-3d40-4cf3-a7fa-5196ce0b8891",
};

export const socials = [
  { id: "github", label: "GitHub", handle: "@RationalPrabal", href: "https://github.com/RationalPrabal" },
  { id: "linkedin", label: "LinkedIn", handle: "in/prabal-sde", href: "https://www.linkedin.com/in/prabal-sde" },
  { id: "whatsapp", label: "WhatsApp", handle: "Message me", href: "https://wa.me/918463891744" },
  { id: "email", label: "Email", handle: profile.email, href: `mailto:${profile.email}` },
];

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm Prabal, a full-stack engineer based in Indore, India, with 3+ years of building cloud-native web applications. I studied civil engineering, fell for software along the way, and retrained through Masai School's intensive full-stack program.",
    "Since then I've shipped production systems across the stack — React and Next.js on the front, Node.js, Express and NestJS behind it, PostgreSQL and MongoDB underneath, and AWS serverless tying it together. I care about fast APIs, well-indexed databases, and backends that stay resilient under load.",
    "Lately I've been building with generative AI: retrieval pipelines that cite their sources and admit when they don't know, wrapped in interfaces that make them easy to trust.",
  ],
  stats: [
    { value: "3+", label: "years shipping production software" },
    { value: "40–60%", label: "faster business reports after query & index tuning" },
    { value: "25%", label: "lower response times on critical API endpoints" },
    { value: "21%", label: "drop in student churn from an async feedback pipeline" },
  ],
};

export const experience = [
  {
    role: "Software Engineer",
    org: "Bestpeers Infosystem Pvt. Ltd.",
    period: "Mar 2026 — Present",
    place: "Indore",
    summary:
      "Building and deploying enterprise web applications on the MERN stack with AWS Amplify. Architected serverless, event-driven workflows on Lambda, S3, Aurora RDS and CloudWatch for background processing, and tuned critical endpoints and queries to cut response times by 25%.",
    tags: ["React", "Node.js", "AWS Lambda", "Aurora RDS", "Amplify"],
  },
  {
    role: "Backend Developer",
    org: "Regenesys Institute of Management",
    period: "Nov 2024 — Mar 2026",
    place: "Remote",
    summary:
      "Refactored execution plans and added indexing to legacy daily and weekly reporting queries, cutting generation time by 40–60%. Designed an asynchronous feedback and notification pipeline with AWS SQS, background workers and Postmark that reduced student churn by 21%.",
    tags: ["Node.js", "SQL", "AWS SQS", "Postmark"],
  },
  {
    role: "Full Stack Web Developer",
    org: "Threat Guardians Pvt. Ltd.",
    period: "Aug 2023 — Sep 2024",
    place: "Remote",
    summary:
      "Led full-cycle development of an enterprise Learning Management System for cybersecurity education and student assessments — responsive React interfaces, a Node.js and MongoDB backend, and schema and index design for fast data retrieval.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    role: "Full Stack Web Development",
    org: "Masai School",
    period: "Sep 2022 — Apr 2023",
    place: "Bengaluru",
    summary:
      "An intensive, project-driven program: 1,200+ hours of coding and 500+ hours of data structures and algorithms, with projects built solo and in teams.",
    tags: ["Education", "MERN"],
  },
  {
    role: "B.Tech",
    org: "Govt. Engineering College, Nowgong",
    period: "2016 — 2020",
    place: "Nowgong",
    summary: "Where the problem-solving habit started — long before the first line of JavaScript.",
    tags: ["Education"],
  },
];

export const projects = [
  {
    id: "documind",
    title: "DocuMind AI",
    year: "2026",
    kind: "AI · RAG",
    tagline: "Chat with any PDF — and see exactly where each answer came from.",
    description:
      "Upload a document, ask questions, and get streamed answers grounded in page-level citations. When the PDF doesn't contain the answer, it says so instead of inventing one.",
    stack: ["React", "Vite", "Express 5", "MongoDB Vector Search", "OpenAI"],
    links: { code: "https://github.com/RationalPrabal/Documind-AI" },
    featured: true,
  },
  {
    id: "workflow",
    title: "Workflow Builder",
    year: "2024",
    kind: "Tooling · Full stack",
    tagline: "Visual data pipelines, built by dragging boxes.",
    description:
      "A node editor on React Flow for composing workflows — filter data, convert formats, wait, POST to an endpoint — then saving them and running them against uploaded CSVs.",
    stack: ["React Flow", "Node.js", "MongoDB", "AWS Lambda"],
    links: { code: "https://github.com/RationalPrabal/Workflow" },
  },
  {
    id: "returnjourney",
    title: "The Return Journey",
    year: "2024",
    kind: "API · Backend",
    tagline: "A calendar and events API with docs you can try live.",
    description:
      "Calendars, events and attendees behind JWT auth — create, update, delete and filter events by day. Fully documented with Swagger and deployed with interactive API docs.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    links: {
      live: "https://the-return-journey-dgzl.onrender.com/api-docs/",
      code: "https://github.com/RationalPrabal/The-Return-Journey",
    },
  },
  {
    id: "crework",
    title: "Crework",
    year: "2024",
    kind: "Productivity · Full stack",
    tagline: "A Trello-style board that stays out of your way.",
    description:
      "Personal task boards with drag-and-drop columns, priorities and deadlines, search and filters, and a calendar view — every user's data isolated and secured.",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB"],
    links: {
      live: "https://crework-beige.vercel.app/",
      code: "https://github.com/RationalPrabal/Crework",
    },
  },
  {
    id: "babybliss",
    title: "BabyBliss",
    year: "2023",
    kind: "E-commerce · Team lead",
    tagline: "A kids' storefront built by five developers in four days.",
    description:
      "1,000+ products with filtering by colour, pattern, brand and price, plus cart, wishlist and Firebase auth. I led the team and built every product page and the filter engine.",
    stack: ["Next.js", "Firebase", "Chakra UI"],
    links: {
      live: "https://baby-bliss.vercel.app/",
      code: "https://github.com/RationalPrabal/Baby-Bliss",
    },
  },
];

export const archive = [
  {
    title: "Book Management API",
    year: "2024",
    note: "Role-based access for admins, authors and readers",
    stack: "Node · Express · Cloudinary",
    href: "https://github.com/RationalPrabal/Book-Management-App",
  },
  {
    title: "GoodCluck",
    year: "2023",
    note: "Fast-food ordering site — solo build in four days",
    stack: "React · Chakra UI",
    href: "https://goodcluck.netlify.app/",
  },
  {
    title: "Social Media App",
    year: "2023",
    note: "A Twitter-style feed with posts and profiles",
    stack: "React · Node · MongoDB",
    href: "https://github.com/RationalPrabal/Social-Media-App",
  },
  {
    title: "CronoFit",
    year: "2023",
    note: "Diet, exercise and health tracker",
    stack: "HTML · CSS · JavaScript",
    href: "https://github.com/RationalPrabal/CronoFit",
  },
];

// `icon` keys map to react-icons in Icons.jsx
export const skills = [
  {
    group: "Frontend",
    blurb: "Responsive interfaces that feel fast and stay accessible.",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "next" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
      { name: "Redux & Context", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Ant Design", icon: "antd" },
    ],
  },
  {
    group: "Backend & APIs",
    blurb: "High-throughput APIs with clear contracts and sensible failure modes.",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nest" },
      { name: "REST APIs", icon: "rest" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    group: "Data & AI",
    blurb: "Relational and NoSQL stores, tuned — plus retrieval for LLM features.",
    items: [
      { name: "SQL", icon: "sql" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Amazon Aurora / RDS", icon: "database" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Mongoose & TypeORM", icon: "typeorm" },
      { name: "LLM APIs & RAG", icon: "openai" },
      { name: "Vector search", icon: "vector" },
    ],
  },
  {
    group: "Cloud & DevOps",
    blurb: "Serverless, event-driven infrastructure that keeps releases boring.",
    items: [
      { name: "AWS Lambda & S3", icon: "aws" },
      { name: "SQS & CloudWatch", icon: "queue" },
      { name: "AWS Amplify", icon: "amplify" },
      { name: "Serverless Framework", icon: "serverless" },
      { name: "CI/CD", icon: "cicd" },
      { name: "Git & GitHub", icon: "github" },
    ],
  },
];

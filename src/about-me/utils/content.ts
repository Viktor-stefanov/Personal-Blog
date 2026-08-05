export type RoleEntry = {
  dates: string;
  role: string;
  company: string;
  place: string;
  line: string;
  stack: string[];
};

export type OngoingEntry = {
  period: string;
  title: string;
  description: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export const ABOUT = {
  whoami: {
    name: "viktor stefanov",
    rest: "— software engineer, varna (utc+3)",
  },
  now: "cs @ technical university of varna · teaching · freelancing",
  headline: ["Twelve years of", "art school, then", "a compiler."],
  paragraphs: [
    "I spent 2009 to 2021 at the National School of Arts in Varna, then went straight into computer science at the Technical University. The overlap is larger than people expect — both are about noticing when a thing is nearly right and refusing to leave it there.",
    "Since then: smart contracts and AMMs at Quanterall, React and Vue at DXC, an OCR pipeline in Python and Rust with a Spring Boot kernel behind it, and most recently generative-AI tooling at Mylantech — architecture through to Azure DevOps pipelines and the Next.js interfaces on top. Frontend is where I'm fastest, but I've never managed to stay on one side of the stack.",
  ],
  actions: {
    primary: { label: "mail --to viktor", href: "mailto:viktor.stefanov02@gmail.com" },
    secondary: { label: "github ↗", href: "https://github.com/Viktor-stefanov" },
  },
  portrait: {
    src: "/ascii-art.png",
    alt: "ASCII-art portrait of the author",
    caption: "viktor · varna",
  },
  reading: {
    label: "currently reading",
    value: "The Soul of a New Machine",
    sub: "Tracy Kidder · p. 148",
  },
  quote: {
    text: '// "Simplicity is prerequisite for reliability."',
    cite: "— Dijkstra",
  },
  roles: [
    {
      dates: "01/2026 — 06/2026",
      role: "AI Engineer",
      company: "Mylantech GmbH",
      place: "remote",
      line: "End-to-end generative-AI applications alongside data scientists, architects and product owners — architecture, model integration, deployment, and the Azure DevOps pipelines that made iteration survivable.",
      stack: ["next.js", "react", "streamlit", "azure devops"],
    },
    {
      dates: "11/2024 — 10/2025",
      role: "Software Engineer",
      company: "Digital and Software Solutions",
      place: "varna",
      line: "An OCR pipeline end to end: preprocessing, classification, detection and recognition in Python and Rust, a Spring Boot kernel with PostgreSQL behind it, and the React interface in front.",
      stack: ["python", "rust", "java spring", "postgresql", "react"],
    },
    {
      dates: "11/2023 — 04/2024",
      role: "Frontend Developer",
      company: "DXC Technology",
      place: "varna",
      line: "Shipping web applications on a scrum cadence in React and Vue, plus a long training detour through clusters, non-blocking IO and profiling.",
      stack: ["react", "vue", "scrum"],
    },
    {
      dates: "07/2022 — 03/2023",
      role: "Application Developer",
      company: "Quanterall",
      place: "varna",
      line: "A fork of the AAVE protocol — the React front end for it, and a share of the Java REST APIs underneath.",
      stack: ["react", "java", "web3"],
    },
    {
      dates: "11/2021 — 06/2022",
      role: "Developer Intern",
      company: "Quanterall",
      place: "varna",
      line: "Built an AMM algorithm in Solidity with a React view on top, took projects from mockup to MVP, and added guard checks that cut contract security incidents by a fifth.",
      stack: ["solidity", "react", "node"],
    },
  ] satisfies RoleEntry[],
  ongoing: [
    {
      period: "2020 — present",
      title: "Teaching software engineering",
      description:
        "A separate curriculum per student — school kids, undergrads, and people switching careers. Scripting, data structures, or web, depending on where they actually want to end up. Six years of this has done more for how I explain a system than any code review.",
    },
    {
      period: "2021 — present",
      title: "Freelance builds",
      description:
        "Requirements, build, feedback, ship — usually on Vercel or Railway. Small enough projects that I own every layer, which is the part I like.",
    },
  ] satisfies OngoingEntry[],
  stacks: [
    {
      label: "frontend",
      items: [
        "typescript",
        "react",
        "next.js",
        "vue",
        "redux",
        "tanstack query",
        "tailwind",
        "vite",
        "jest",
      ],
    },
    {
      label: "backend",
      items: [
        "java spring",
        "node",
        "express",
        "rust",
        "postgresql",
        "rest design",
        "oauth2 / jwt",
        "microservices",
      ],
    },
    {
      label: "ai & data",
      items: [
        "python",
        "model integration",
        "ocr pipelines",
        "azure devops",
        "streamlit",
      ],
    },
  ] satisfies StackGroup[],
  contact: {
    email: "viktor.stefanov02@gmail.com",
    github: { label: "github.com/Viktor-stefanov", href: "https://github.com/Viktor-stefanov" },
    location: "varna, bulgaria — remote-friendly",
    availability: "// teaching slots and freelance work: just ask",
  },
};

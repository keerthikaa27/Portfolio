
export const Profile = {
  name: "Keerthika Nimmagadda",
  title: "CSE Undergrad at VIT AP University",
  location: "Andhra Pradesh, India",
  email: "keerthikanimmagadda@gmail.com",
  phone: "+91-9347664937",
  links: {
    github: "https://github.com/keerthikaa27/",
    linkedin: "http://www.linkedin.com/in/keerthika-nimmagadda",
  },
  summary:
    "B.Tech CSE Undergrad (2022–2026), passionate about building practical full-stack systems. Hands-on experience in Full-stack development using React.js, Node.js and databases.",
};

export const Education = [
  {
    school: "Vellore Institute of Technology (VIT), Amaravati",
    degree: "B.Tech in Computer Science and Engineering",
    meta: "CGPA: 8.04",
    period: "2022 — 2026",
  },
  {
    school: "Narayana Junior College",
    degree: "Board of Intermediate Education, Andhra Pradesh",
    meta: "Percentage: 91.2",
    period: "2020 — 2022",
  },
  {
    school: "Swarna Bharati Educational Institution",
    degree: "Board of Secondary Education, Andhra Pradesh",
    meta: "Percentage: 96.12",
    period: "2019 — 2020",
  },
];

export const experience = [
  {
    org: "AI Tensors Corp (AITCare)",
    role: "Full Stack Developer Intern",
    period: "06/2026 – Present | Visakhapatnam",
    points: [
      "Built and maintained FallVision, a healthcare platform that helps caregivers track elderly residents' activity, gait, sleep, and fall risk, using Python, FastAPI, React.js, TypeScript, AWS, and DynamoDB.",
      "Built core modules — ADL tracking, gait analysis, sleep diary, fall events, patient profiles, and risk analytics — connected through REST APIs to real-time data in DynamoDB.",
      "Managed backend deployments on AWS EC2 with Nginx, Uvicorn, and Gunicorn, and fixed production issues to keep the platform reliable and fast.",
      "Tested the platform end to end — API, regression, load, and performance testing — using Postman, Pytest, Playwright, and JMeter/Locust to catch issues before they reached users.",
      "Built a multi-role SaaS platform for AgeTech using Next.js, TypeScript, and AWS Cognito, with secure login, role-based access, and dashboards for each user type.",
      "Building AI agents with AWS Bedrock and Claude that automatically evaluate startup applications and generate final reports.",
      "Building a document evaluation pipeline with AWS Textract, S3, and Bedrock Knowledge Bases to analyze pitch decks and startup applications.",
    ],
  },
  {
    org: "WebeDigital",
    role: "Full Stack Developer Intern",
    period: "03/2026 – 06/2026 | Remote",
    points: [
      "Developed a responsive multi-page agency website using Next.js 14, TypeScript, and Tailwind CSS with reusable, mobile-friendly components.",
      "Built a reusable booking and quote workflow featuring scheduling, email verification, frontend-backend integration, and the Resend Email API.",
      "Implemented dynamic routing, custom animations, third-party integrations, and API routes to improve responsiveness and overall user experience.",
    ],
  },
  {
    org: "JD Jones & Co. Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "04/12/25 - 04/03/26",
    points: [
      "Designed and built a production-grade full-stack analytics dashboard to track orders, overdue risks, and sales across 1000+ customers, handling daily automated data ingestion and normalization from multiple raw data sources.",
      "Implemented various advanced features to manage orders using React.js, Postgres and Supabase",
      "Automated daily data refresh and weekly snapshot reporting via Google Apps Script, generating customer-specific Excel reports; owned system reliability, query optimization, and debugging",
    ],
  },
  {
    org: "Intrain Tech (with SkillCepha)",
    role: "Intern – Healthy Lifestyle Project",
    period: "22/01/24 - 24/03/24",
    points: [
      "Contributed to data analytics workflows for personalized well-being insights",
      "Recognized for adaptability, proactive learning, and teamwork",
    ],
  },
  {
    org: "Corizo",
    role: "Web Development Trainee",
    period: "2024",
    points: [
      "Hands-on training across HTML, CSS, JS and modern web practices",
      "Built mini projects and iterated through feedback cycles",
    ],
  },
];

export const projects = [
  {
    title: "Interactome-AI - Multi-Drug Interaction Analysis Platform",
    period: "01/2026 – 05/2026",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Cytoscape.js"],
    description:
      "A Full Stack Healthcare Analytics Platform for Drug Interaction Prediction.",
    highlights: [
      "Analyzes complex medication combinations to identify potential adverse drug interactions using large-scale biomedical datasets",
      "Data pipelines with preprocessing, feature engineering, and graph-based relationship modeling",
      "REST APIs, PostgreSQL schemas, and backend services for risk analysis and report generation",
    ],
    link: "https://interactome-ai-frontend.onrender.com/",
  },
  {
    title: "Online Book Store",
    period: "Jan 2024",
    stack: ["Java", "Data Structures", "Database"],
    description:
      "A console-based bookstore focusing on data structures and algorithms with persistent storage abstractions.",
    highlights: [
      "Customer & admin flows",
      "CRUD operations and search",
      "Menu-driven UX, robust input handling",
    ],
    link: "https://github.com/keerthikaa27/keerthika/tree/main/Inventory%20management%20system",
  },
  {
    title: "Inventory Management System",
    period: "Jan 2024",
    stack: ["Java", "Data Structures"],
    description:
      "A console based app to manage products, stock levels, and transactions using efficient DS patterns.",
    highlights: [
      "Modular business logic",
      "Basic reporting",
      "Separation of concerns",
    ],
    link: "https://github.com/keerthikaa27/keerthika/blob/main/OnlineBookStore.java",
  },
  {
    title: "Healthy Lifestyle with Data Analytics",
    period: "Mar 2024",
    stack: ["Python", "Pandas", "APIs", "ETL"],
    description:
      "Integrates data from wearables, health apps, and surveys to deliver personalized recommendations.",
    highlights: [
      "Data ingestion + cleaning",
      "Feature engineering",
      "Recommendation baseline",
    ],
    link: null,
  },
];

export const skills = {
  ProgrammingLanguages: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  BackendDevelopment: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "Supabase (BaaS)"],
  FrontendDevelopment: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Shadcn UI"],
  AIML: [
    "AWS Bedrock",
    "AI Agents",
    "LLMs",
    "AWS Textract",
    "RAG",
    "Embeddings",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Feature Engineering",
    "Model Training",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Amazon DynamoDB", "ChromaDB", "Redis"],
  CloudTools: ["AWS EC2", "DynamoDB", "S3", "Cognito", "Docker", "Git", "GitHub", "CI/CD"],
  SoftwareEngineering: [
    "Data Structures & Algorithms",
    "Computer Networks",
    "Object-Oriented Programming",
    "Operating Systems",
    "SDLC",
    "Debugging",
    "Testing",
  ],
  Testing: [
    "Software Testing",
    "API Testing",
    "Regression Testing",
    "Performance Testing",
    "Load Testing",
    "Pytest",
    "Postman",
    "Playwright",
    "JMeter",
    "Locust",
  ],
  Softskills: [
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Time management",
    "Critical thinking",
  ],
  Languages: ["Telugu", "Hindi", "English"],
};

export const achievements = [
  "Presented Interactome-AI, a predictive framework for detecting higher-order adverse drug reactions in multi-medication regimens, at the 4th International Conference on Recent Advancements in Artificial Intelligence, Quantum Intelligence, and Inclusive Technologies (ICRAIQ2IT-2026), published by M/s Taylor & Francis, UK",
  "Qualified for the International Programming League at VIT",
  "3-hour Speed Code Global event (NGC, MSC, BRAC University) participant",
  "Recognized for contributions during Intrain Tech internship in Data Analytics",
  "Gained hands-on experience in web development during a 2 month training in Corizo company",
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    link: "https://www.credly.com/badges/e12ad764-3249-4b93-a090-70790a8bd0bd",
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=32B92DE3AB57CADEDE29B5FC8254F034B5661CA3875F9D7BB5B9BD9B3FF2736C",
  },
];

export const liveSites = [
  {
    name: "Precrux",
    domain: "precrux.com",
    url: "https://precrux.com",
    favicon: "favicons/precrux.png",
    description: "Operator-led growth systems for founder-led brands ready to scale.",
  },
  {
    name: "i4i Sciences",
    domain: "i4isciences.com",
    url: "https://i4isciences.com",
    favicon: "favicons/i4isciences.png",
    description: "An AI-powered education ecosystem where human mentorship meets intelligent tools.",
  },
];

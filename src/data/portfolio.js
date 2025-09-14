
// --- file: src/data/portfolio.js ---
export const Profile = {
  name: "Nimmagadda Keerthika",
  title: "CSE Undergrad at VIT AP University",
  location: "Andhra Pradesh, India",
  email: "keerthikanimmagadda@gmail.com",
  phone: "+91-9347664937",
  links: {
    github: "https://github.com/keerthikaa27/",
    linkedin: "http://www.linkedin.com/in/keerthika-nimmagadda",
  },
  summary:
    "B.Tech CSE Undergrad (2022–2026), passionate about building clean web apps and data-driven solutions. Interested in Software development, Web Technologies, Full-stack development and Data analytics.",
};

export const Education = [
  {
    school: "Vellore Institute of Technology (VIT), Amaravati",
    degree: "B.Tech in Computer Science and Engineering",
    meta: "CGPA: 7.96",
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
    org: "Intrain Tech (with SkillCepha)",
    role: "Intern – Healthy Lifestyle Project",
    period: "2024 (2 months)",
    points: [
      "Contributed to data analytics workflows for personalized well-being insights",
      "Recognized for adaptability, proactive learning, and teamwork",
    ],
  },
  {
    org: "Corizo",
    role: "Web Development Trainee",
    period: "2024 (2 months)",
    points: [
      "Hands-on training across HTML, CSS, JS and modern web practices",
      "Built mini projects and iterated through feedback cycles",
    ],
  },
];

export const projects = [
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
  ProgrammingLanguages: ["Python", "Java", "JavaScript", "TypeScript"],
  Frameworks: ["Angular", "Spring Boot", "React.js", "Next.js", "Node.js","TailwindCSS", "NumPy", "Pandas"],
  WebTechnologies: ["HTML", "CSS"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  Tools: ["Git"],
  Cloud: ["AWS"],
  CS_Fundamentals: ["Data Structures & Algorithms", "Object Oriented Programming", "Operating Systems", "Computer Network"],
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
  "Qualified for the International Programming League at VIT",
  "3-hour Speed Code Global event (NGC, MSC, BRAC University) participant",
  "Recognized for contributions during Intrain Tech internship in Data Analytics",
  "Gained hands-on experience in web development during a 2 month training in Corizo company",
];

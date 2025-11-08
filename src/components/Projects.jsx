import ProjectCard from "./ProjectCard";


export const projects = [
  {
  title: "Newsify – RAG-Powered News Chatbot",
  period: "2025",
  description: "A Full-Stack AI chatbot that answers queries over news articles using Retrieval-Augmented Generation (RAG).",
  stack: ["React.js", "SCSS", "Node.js", "Express", "Redis", "ChromaDB", "Jina Embeddings", "Google Gemini API"],
  highlights: [
    "Built a RAG pipeline with embeddings stored in ChromaDB and integrated with Google Gemini for contextual responses.",
    "Developed an interactive React frontend with session management, chat history, reset functionality, and typing animations.",
    "Implemented Redis caching for efficient session-based history retrieval and smooth real-time conversations."
  ],
  link: "https://newsify-newschatbot.netlify.app/"
  },

  {
    title: "Fraudulent Transactions Detection Website",
    period: "2025",
    description: "An interactive dashboard to detect and analyze fraudulent transactions in real-time.",
    stack: ["React", "Danfo.js", "Plotly.js", "TailwindCSS"],
    highlights: [
      "Fraud inspector with rule-based detection",
      "Interactive dark-themed charts and KPIs",
      "Allows filtering for deeper analysis"
    ],
    link: "https://keerthikaa27.github.io/Fraud-Detection/",
  },
  {
    title: "Energy Forecasting Web Application",
    period: "2025",
    description: "A Full-Stack AI-powered web application to predicts real-time energy usage.",
    stack: ["React.js", "Flask", "Python", "LSTM", "NumPy", "Pandas","REST APIs"],
    highlights: [
      "Uses LSTM neural networks to predict future energy consumption based on historical data.",
      "Dynamic charts and graphs built with React and Chart.js for clear, responsive data insights.",
      "Real-time backend communication via Flask APIs"
    ],
    link: "https://energyforecast.netlify.app/",
  },
  {
    title: "Portfolio Website",
    period: "2025",
    description: "A personal portfolio site built with React, Tailwind, and Framer Motion.",
    stack: ["React", "TailwindCSS", "Framer Motion"],
    highlights: [
      "Smooth animations with Framer Motion",
      "Responsive design",
      "Dynamic project data"
    ],
    link: "https://keerthikaa27.github.io/Portfolio",
  },
  {
    title: "Inventory Management System",
    period: "2025",
    description: "A console based app to manage products, stock levels, and transactions using efficient DS patterns.",
    stack: ["Java", "Data Structures"],
    highlights: ["Modular business logic", "Basic reporting", "Separation of Concerns"],
    link: "https://github.com/keerthikaa27/keerthika/tree/main/Inventory%20management%20system",
  },
  {
    title: "Online Book Store",
    period: "2025",
    description: "A console-based bookstore focusing on data structures and algorithms with persistent storage abstractions.",
    stack: ["Java", "Data Structures", "Database"],
    highlights: ["Customer & admin flows", "CRUD operations and search", "Robust input handling"],
    link: "https://github.com/keerthikaa27/keerthika/blob/main/OnlineBookStore.java",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

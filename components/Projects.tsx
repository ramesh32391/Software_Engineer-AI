"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "Content Intelligence & RAG-Powered AI Services",
    description: "Built production FastAPI microservices with RAG pipelines (vector search + embeddings).",
    highlights: [
      "Production FastAPI microservices",
      "RAG pipelines with vector search",
      "Embeddings integration",
      "Observability and anomaly detection",
    ],
    tags: ["FastAPI", "RAG", "Vector Search", "Python", "MLOps"],
    color: "neon-cyan",
  },
  {
    title: "Agentic AI Workflows & LLM Deployment",
    description: "Built real-time agentic workflow systems for inference & automation.",
    highlights: [
      "Real-time agentic workflows",
      "LLM deployment and optimization",
      "Quantization and pruning",
      "Secure deployment practices",
    ],
    tags: ["LLMs", "AI Agents", "MLOps", "Python", "AWS"],
    color: "neon-pink",
  },
  {
    title: "Medical Supply Forecasting Engine",
    description: "Developed forecasting features using ARIMA, XGBoost, LSTM.",
    highlights: [
      "Multi-model forecasting (ARIMA, XGBoost, LSTM)",
      "Improved stability and accuracy",
      "Hospital department optimization",
      "EHR data processing (500k+ records)",
    ],
    tags: ["Time Series", "XGBoost", "LSTM", "PySpark", "AWS Lambda"],
    color: "neon-green",
  },
  {
    title: "Enterprise Analytics Platform Modernization",
    description: "Broke monolithic Flask services into modular APIs.",
    highlights: [
      "Microservices architecture",
      "API optimization",
      "SQL query optimization",
      "Caching and validation middleware",
    ],
    tags: ["Flask", "React", "SQL", "Docker", "CI/CD"],
    color: "neon-blue",
  },
];

export default function Projects() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; text: string; hover: string }> = {
      "neon-cyan": {
        border: "border-neon-cyan/30",
        text: "text-neon-cyan",
        hover: "hover:border-neon-cyan/60 hover:bg-neon-cyan/5",
      },
      "neon-pink": {
        border: "border-neon-pink/30",
        text: "text-neon-pink",
        hover: "hover:border-neon-pink/60 hover:bg-neon-pink/5",
      },
      "neon-green": {
        border: "border-neon-green/30",
        text: "text-neon-green",
        hover: "hover:border-neon-green/60 hover:bg-neon-green/5",
      },
      "neon-blue": {
        border: "border-neon-blue/30",
        text: "text-neon-blue",
        hover: "hover:border-neon-blue/60 hover:bg-neon-blue/5",
      },
    };
    return colorMap[color] || colorMap["neon-cyan"];
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Innovative solutions built with cutting-edge technologies
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                className={`glass-effect rounded-xl p-6 border ${colors.border} ${colors.hover} transition-all`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${colors.text} flex-1`}>
                    {project.title}
                  </h3>
                  <ExternalLink className={`w-5 h-5 ${colors.text} flex-shrink-0 ml-2`} />
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className={`${colors.text} mt-1`}>▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-neon-cyan/10">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${colors.border} ${colors.text} bg-dark-card/50`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


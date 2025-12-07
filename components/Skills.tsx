"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Generative AI & LLMs",
    color: "neon-cyan",
    skills: [
      "LLM APIs",
      "Llama",
      "GPT-4/4o",
      "RAG",
      "Vector Databases (FAISS, Pinecone)",
      "LangChain",
      "LoRA",
      "PEFT",
      "Tokenizers",
      "Prompt Engineering",
      "Hugging Face",
    ],
  },
  {
    title: "Machine Learning",
    color: "neon-pink",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-Learn",
      "XGBoost",
      "Autoencoders",
      "CNN/RNN/LSTM",
      "Transformers",
      "NLP",
    ],
  },
  {
    title: "Data Engineering",
    color: "neon-green",
    skills: [
      "PySpark",
      "Pandas",
      "NumPy",
      "SQL",
      "ETL Pipelines",
      "Data Warehousing (Redshift, Snowflake)",
      "Airflow",
    ],
  },
  {
    title: "Backend & Cloud",
    color: "neon-blue",
    skills: [
      "Python (Flask/FastAPI)",
      "JavaScript",
      "SQL",
      "AWS (SageMaker, Lambda, S3, Redshift, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    title: "MLOps & DevOps",
    color: "neon-purple",
    skills: [
      "CI/CD (GitHub Actions, Jenkins)",
      "Model Deployment",
      "Feature Stores",
      "Monitoring",
      "API Optimization",
    ],
  },
  {
    title: "Other",
    color: "neon-cyan",
    skills: [
      "Tableau",
      "Power BI",
      "Git",
      "Jira",
      "Metrics-Driven Development",
      "VS Code",
      "PyCharm",
      "Colab",
      "A/B Testing",
    ],
  },
];

export default function Skills() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { border: string; text: string; hover: string }> = {
      "neon-cyan": {
        border: "border-neon-cyan/30",
        text: "text-neon-cyan",
        hover: "hover:bg-neon-cyan/10 hover:border-neon-cyan/60",
      },
      "neon-pink": {
        border: "border-neon-pink/30",
        text: "text-neon-pink",
        hover: "hover:bg-neon-pink/10 hover:border-neon-pink/60",
      },
      "neon-green": {
        border: "border-neon-green/30",
        text: "text-neon-green",
        hover: "hover:bg-neon-green/10 hover:border-neon-green/60",
      },
      "neon-blue": {
        border: "border-neon-blue/30",
        text: "text-neon-blue",
        hover: "hover:bg-neon-blue/10 hover:border-neon-blue/60",
      },
      "neon-purple": {
        border: "border-neon-purple/30",
        text: "text-neon-purple",
        hover: "hover:bg-neon-purple/10 hover:border-neon-purple/60",
      },
    };
    return colorMap[color] || colorMap["neon-cyan"];
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive toolkit for building intelligent, scalable systems
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass-effect p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  category.color === "neon-cyan"
                    ? "text-neon-cyan"
                    : category.color === "neon-pink"
                    ? "text-neon-pink"
                    : category.color === "neon-green"
                    ? "text-neon-green"
                    : category.color === "neon-blue"
                    ? "text-neon-blue"
                    : "text-neon-purple"
                }`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const colors = getColorClasses(category.color);
                  return (
                    <motion.span
                      key={skillIndex}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all ${colors.border} ${colors.text} ${colors.hover}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


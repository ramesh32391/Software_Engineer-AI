"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, Code } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Specialized in LLMs, RAG systems, and intelligent agent workflows",
    },
    {
      icon: Cloud,
      title: "MLOps & Cloud",
      description: "Expert in deploying scalable ML pipelines on AWS with CI/CD",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust ETL pipelines and data warehousing solutions",
    },
    {
      icon: Code,
      title: "Backend APIs",
      description: "Creating high-performance microservices with FastAPI and Flask",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate AI-Driven Software Engineer with a strong foundation in machine learning,
            large language models, and cloud infrastructure. Currently building cutting-edge AI solutions
            at Adobe, I specialize in developing end-to-end ML pipelines, integrating LLMs with RAG systems,
            and deploying scalable agentic workflows for real-time inference.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My expertise spans across AI engineering, ML pipeline development, cloud deployments, and
            MLOps practices. I have hands-on experience with vector databases, embeddings, model optimization
            techniques like quantization and pruning, and building production-ready microservices. I'm
            passionate about converting ML prototypes into robust, observable, and scalable production systems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With a background in data engineering and backend development, I bring a holistic approach to
            building intelligent systems that are not just accurate, but also reliable, maintainable, and
            performant at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-xl hover:border-neon-cyan/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Icon className="w-10 h-10 text-neon-cyan mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


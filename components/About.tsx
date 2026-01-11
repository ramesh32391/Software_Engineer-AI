"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Database, Code } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "API & Backend Engineering",
      description: "Building scalable APIs with Flask/FastAPI, SQL, and production-ready web systems",
    },
    {
      icon: Database,
      title: "Data & ETL",
      description: "Designing robust ETL workflows with Airflow, Spark, and data warehousing solutions",
    },
    {
      icon: Brain,
      title: "ML/NLP",
      description: "Integrating ML models, NLP solutions, and predictive analytics with scikit-learn, TF/Keras, spaCy/NLTK",
    },
    {
      icon: Cloud,
      title: "Cloud/MLOps",
      description: "Deploying scalable ML pipelines on AWS with Docker, K8s, and CI/CD automation",
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
            I'm an AI-driven Senior Software Engineer with 5+ years of experience building production-ready web systems,
            scalable APIs, and ETL workflows. I specialize in integrating machine learning, NLP, and predictive models
            into platforms that drive real business value. My work focuses on creating robust systems using Flask, SQL,
            and modern ML integrations that are both powerful and maintainable.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I excel at developing scalable APIs and ETL workflows that handle complex data transformations efficiently.
            My expertise includes building ML and NLP solutions that enhance platform capabilities, from predictive analytics
            to intelligent automation. I'm passionate about implementing CI/CD automation, ensuring secure deployments,
            and leveraging analytics and automation to deliver measurable improvements.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            With a strong focus on business intelligence and analytics, I design systems that not only perform well
            technically but also provide actionable insights. I bring a comprehensive approach to building intelligent
            platforms that combine robust engineering practices with cutting-edge ML capabilities.
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


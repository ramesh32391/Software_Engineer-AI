"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer – Artificial Intelligence",
    company: "Adobe",
    period: "Aug 2024 – Present",
    location: "Texas, USA",
    bullets: [
      "Built and deployed end-to-end ML pipelines.",
      "Integrated LLMs and AI agents with RAG, vector search, embeddings.",
      "Designed scalable agentic workflows enabling real-time inference.",
      "Optimized models with quantization/pruning.",
      "Automated CI/CD with containerization and monitoring.",
      "Added observability: logging, tracing, metrics, drift detection.",
      "Converted ML prototypes into production microservices using FastAPI/Flask.",
      "Improved data validation using schema checks and anomaly detection.",
      "Documented APIs and deployment workflows.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Anblicks",
    period: "Apr 2022 – Jul 2023",
    location: "Hyderabad",
    bullets: [
      "Built forecasting pipelines using ARIMA, RF, XGBoost, LSTMs.",
      "Processed 500k+ EHR records using PySpark, SQL, Pandas, NumPy.",
      "Experimented with LoRA/PEFT tuning for personalization.",
      "Built APIs integrating predictions with hospital ERP (97% uptime).",
      "Deployed models to AWS Lambda with reduced cold-start latency.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Genpact",
    period: "Jun 2019 – Apr 2022",
    location: "Hyderabad",
    bullets: [
      "Built scalable web apps with Flask, React, SQL, Docker.",
      "Built and optimized REST APIs (-32% latency).",
      "Created integration layers for data pipelines.",
      "Automated backend workflows and standardized components.",
      "Built CI/CD pipelines via Docker + GitHub Actions (60% deployment time reduction).",
      "Performed DB query optimizations improving reporting speed.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Building intelligent systems and scalable solutions
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleExperience(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-dark-card/50 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                  <p className="text-neon-cyan font-medium mb-2">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-neon-cyan" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-neon-cyan/20">
                      <ul className="space-y-2 mt-4">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bulletIndex}
                            className="flex items-start gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: bulletIndex * 0.05 }}
                          >
                            <span className="text-neon-cyan mt-1.5">▹</span>
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


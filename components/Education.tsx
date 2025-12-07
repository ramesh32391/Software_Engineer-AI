"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <motion.div
            className="glass-effect p-6 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-neon-cyan/20 rounded-lg">
                <GraduationCap className="w-8 h-8 text-neon-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
            </div>
            <div className="ml-16">
              <h4 className="text-lg font-medium text-neon-cyan mb-1">
                MS Computer Science
              </h4>
              <p className="text-gray-300 mb-2">Southern Arkansas University</p>
              <p className="text-sm text-gray-400">2023 – 2025</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="glass-effect p-6 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-neon-pink/20 rounded-lg">
                <Award className="w-8 h-8 text-neon-pink" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Certifications</h3>
              </div>
            </div>
            <div className="ml-16 space-y-3">
              <motion.a
                href="https://drive.google.com/file/d/10zS-0BeCxfLJmAo06GdjWEkvICy_MeWD/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-dark-card/50 rounded-lg hover:bg-dark-card transition-colors border border-transparent hover:border-neon-pink/30"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm font-medium text-neon-pink">Infosys</p>
                <p className="text-sm text-gray-300">Power Programmer Virtual Experience Program</p>
              </motion.a>

              <motion.a
                href="https://courses.cognitiveclass.ai/certificates/c46b9c1da1074f35a3381319cd83709e"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-dark-card/50 rounded-lg hover:bg-dark-card transition-colors border border-transparent hover:border-neon-pink/30"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm font-medium text-neon-pink">IBM</p>
                <p className="text-sm text-gray-300">Machine Learning with Python</p>
              </motion.a>

              <motion.a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_s33s2imC2sMSohnYj_1663149167691_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-dark-card/50 rounded-lg hover:bg-dark-card transition-colors border border-transparent hover:border-neon-pink/30"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm font-medium text-neon-pink">Cognizant</p>
                <p className="text-sm text-gray-300">Artificial Intelligence Job Simulation</p>
              </motion.a>

              <motion.a
                href="https://courses.cognitiveclass.ai/certificates/a9f091d5e4f549778878ce4d3ea45b93"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 bg-dark-card/50 rounded-lg hover:bg-dark-card transition-colors border border-transparent hover:border-neon-pink/30"
                whileHover={{ x: 5 }}
              >
                <p className="text-sm font-medium text-neon-pink">IBM</p>
                <p className="text-sm text-gray-300">SQL and Relational Database</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


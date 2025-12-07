"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, Github, ExternalLink } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            variants={itemVariants}
          >
            Ramesh Polisetti
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            variants={itemVariants}
          >
            AI-Driven Software Engineer
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-neon-cyan mb-8 font-medium"
            variants={itemVariants}
          >
            LLMs • ML Engineering • Data Engineering • Cloud & MLOps
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-400 mb-12 flex items-center justify-center gap-2"
            variants={itemVariants}
          >
            <span>📍</span> Austin, Texas
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            variants={itemVariants}
          >
            <motion.a
              href="/Ramesh_Polisetti_Resume.pdf"
              download
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-neon-cyan text-dark-bg font-semibold rounded-lg flex items-center gap-2 hover:bg-neon-cyan/80 transition-colors shadow-lg shadow-neon-cyan/50 text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Resume</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/rameshnaidux/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-dark-card border border-neon-cyan/30 text-neon-cyan font-semibold rounded-lg flex items-center gap-2 hover:bg-neon-cyan/10 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 240, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/rameshpolisetti"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-dark-card border border-neon-pink/30 text-neon-pink font-semibold rounded-lg flex items-center gap-2 hover:bg-neon-pink/10 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05, borderColor: "rgba(255, 0, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              GitHub
            </motion.a>

            <motion.a
              href="#projects"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-dark-card border border-neon-green/30 text-neon-green font-semibold rounded-lg flex items-center gap-2 hover:bg-neon-green/10 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 255, 136, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              Portfolio
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neon-cyan/20 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} Ramesh Naidu. All rights reserved.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/rameshnaidux/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neon-cyan hover:bg-neon-cyan/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/ramesh32391"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neon-pink hover:bg-neon-pink/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="mailto:rameshn@myjobemails.com"
              className="p-2 text-neon-green hover:bg-neon-green/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.p
          className="text-center text-gray-500 text-xs mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Built with Next.js, React, TailwindCSS, and Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}


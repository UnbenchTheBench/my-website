"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Tailwind CSS.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Data Visualizer",
    description: "An interactive data visualization tool using D3.js.",
    link: "https://github.com/yourusername/dataviz",
  },
  {
    title: "Chat App",
    description: "A real-time chat application powered by Socket.io.",
    link: "https://github.com/yourusername/chatapp",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-8"
      >
        Projects
      </motion.h1>
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.2 }}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <Link
              href={project.link}
              target="_blank"
              className="mt-auto px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
            >
              View on GitHub
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6">
      {/* Particle / background effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,200,255,0.3),transparent),radial-gradient(circle_at_bottom_right,rgba(180,0,255,0.3),transparent)]" />

      {/* Hero Content */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 mb-4 sm:mb-6">
        <Image
          src="/profile.JPG"
          alt="Profile photo"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 192px"
        />
      </div>
      
      <section className="text-center space-y-4 sm:space-y-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight px-2"
        >
          Hi, I'm <span className="text-cyan-400">Benchy Dutreuil</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
        >
           CS student @ CSB/SJU • Researcher • Exploring the
          intersection of technology, economics, and human impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a
            href="Resume_Benchy_Dutreuil.pdf"
            target="_blank"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30 text-sm sm:text-base"
          >
            Resume
          </a>
          <a
            href="https://github.com/unbenchthebench"
            target="_blank"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/30 text-sm sm:text-base"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/benchydutreuil"
            target="_blank"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-pink-600 text-white font-semibold hover:bg-pink-500 transition-all shadow-lg shadow-pink-600/30 text-sm sm:text-base"
          >
            LinkedIn
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-red-600 text-white font-semibold hover:bg-red-500 transition-all shadow-lg shadow-red-600/30 text-sm sm:text-base"
          >
            Contact
          </a>
        </motion.div>
      </section>
    </main>
  );
}

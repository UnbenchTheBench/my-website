// app/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Particle / background effect */}
      <div className={styles.backgroundEffect} />

      {/* Hero Content */}
      <div className={styles.profileImage}>
        <Image
          src="/profile.JPG"
          alt="Profile photo"
          fill
          className="object-cover rounded-full"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 192px"
        />
      </div>
      
      <section className={styles.heroContent}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span>Benchy Dutreuil</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          CS student @ CSB/SJU • Researcher • Exploring the<br />
          intersection of technology, economics, and human impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className={styles.buttonContainer}
        >
          <a
            href="Resume_Benchy_Dutreuil.pdf"
            target="_blank"
            className={`${styles.button} ${styles.resumeButton}`}
          >
            Resume
          </a>
          <a
            href="https://github.com/unbenchthebench"
            target="_blank"
            className={`${styles.button} ${styles.githubButton}`}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/benchydutreuil"
            target="_blank"
            className={`${styles.button} ${styles.linkedinButton}`}
          >
            LinkedIn
          </a>

          <a
            href="/contact"
            className={`${styles.button} ${styles.contactButton}`}
          >
            Contact
          </a>
        </motion.div>
      </section>
    </main>
  );
}

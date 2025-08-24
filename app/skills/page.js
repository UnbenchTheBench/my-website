'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./page.module.css";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = {
    'Frontend': [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Next.js', level: 85, icon: '⚡' },
      { name: 'JavaScript', level: 88, icon: '🟨' },
      { name: 'TypeScript', level: 75, icon: '🔷' },
      { name: 'HTML/CSS', level: 92, icon: '🌐' },
      { name: 'Tailwind CSS', level: 80, icon: '🎨' },
    ],
    'Backend': [
      { name: 'Node.js', level: 82, icon: '🟢' },
      { name: 'Express.js', level: 78, icon: '🚂' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'PostgreSQL', level: 70, icon: '🐘' },
      { name: 'MongoDB', level: 72, icon: '🍃' },
      { name: 'REST APIs', level: 85, icon: '🔌' },
    ],
    'Tools & Others': [
      { name: 'Git', level: 88, icon: '📚' },
      { name: 'Docker', level: 65, icon: '🐳' },
      { name: 'AWS', level: 60, icon: '☁️' },
      { name: 'Figma', level: 70, icon: '🎯' },
      { name: 'VS Code', level: 90, icon: '💻' },
      { name: 'Postman', level: 75, icon: '📮' },
    ]
  };

  const categories = ['all', ...Object.keys(skills)];

  const filteredSkills = activeCategory === 'all' 
    ? Object.values(skills).flat()
    : skills[activeCategory] || [];

  return (
    <main className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        Skills & Expertise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.subtitle}
      >
        A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
      </motion.p>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className={styles.categoryFilter}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${styles.categoryButton} ${
              activeCategory === category
                ? styles.categoryButtonActive
                : styles.categoryButtonInactive
            }`}
          >
            {category === 'all' ? 'All Skills' : category}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className={styles.skillsGrid}>
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className={styles.skillCard}
          >
            <div className={styles.skillHeader}>
              <span className={styles.skillIcon}>{skill.icon}</span>
              <h3 className={styles.skillName}>{skill.name}</h3>
            </div>
            
            {/* Progress Bar */}
            <div className={styles.progressBarContainer}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                className={styles.progressBar}
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-gray-400">Proficiency</span>
              <span className="text-cyan-400 font-bold text-sm sm:text-base">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 sm:mt-16 text-center max-w-4xl px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyan-400">Continuous Learning</h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
          My approach combines deep expertise in core technologies with a passion for learning new tools and frameworks.
        </p>
      </motion.div>
    </main>
  );
}

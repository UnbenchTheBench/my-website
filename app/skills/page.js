'use client';

import { motion } from "framer-motion";
import { useState } from "react";

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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-8 text-center"
      >
        Skills & Expertise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-300 mb-12 text-center max-w-3xl px-4"
      >
        A comprehensive overview of my technical skills and proficiency levels across various technologies and tools.
      </motion.p>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === category
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category === 'all' ? 'All Skills' : category}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-4">
        {filteredSkills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{skill.icon}</span>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-3 mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Proficiency</span>
              <span className="text-cyan-400 font-bold">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center max-w-4xl px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Continuous Learning</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
          My approach combines deep expertise in core technologies with a passion for learning new tools and frameworks.
        </p>
      </motion.div>
    </main>
  );
}

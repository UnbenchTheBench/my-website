'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filepath] = useState('app/projects/ProjectsTracker.xlsx');

  useEffect(() => {
    fetchProjects();
  }, [filepath]);

  async function fetchProjects() {
    setLoading(true);
    try {
      const response = await fetch(`/api/getExcelData?filepath=${encodeURIComponent(filepath)}`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        // Fallback to sample data if API fails
        setProjects([]);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to sample data
      setProjects([]);
    } finally {
      setLoading(false);
    }
  }
  
  // Color palette for unique skill colors
  const skillColors = [
    "bg-red-500", "bg-blue-500", "bg-green-500",
    "bg-yellow-400", "bg-purple-500", "bg-pink-500",
    "bg-indigo-500", "bg-cyan-500", "bg-orange-500",
    "bg-teal-500", "bg-emerald-500", "bg-rose-500",
    "bg-violet-500", "bg-sky-500", "bg-amber-500"
  ];

  // Global skill color mapping that persists across all projects
  const globalSkillColors = useRef(new Map());
  const nextColorIndex = useRef(0);

  // Function to get or assign color for a skill globally
  function getGlobalSkillColor(skillName) {
    // If we already have a color for this skill, return it
    if (globalSkillColors.current.has(skillName)) {
      return globalSkillColors.current.get(skillName);
    }
    
    // Assign a new color to this skill
    const color = skillColors[nextColorIndex.current % skillColors.length];
    globalSkillColors.current.set(skillName, color);
    nextColorIndex.current += 1;
    
    return color;
  }

  // Function to split skills string and assign consistent colors
  function processSkills(skillsString) {
    if (!skillsString) return [];
    
    // Split by comma and space, then trim each skill
    const skillsArray = skillsString.split(', ').map(skill => skill.trim());
    
    // Assign consistent color to each skill using global mapping
    return skillsArray.map(skill => ({
      name: skill,
      color: getGlobalSkillColor(skill)
    }));
  }


  if (loading) {
    return (
      <main className={styles.loading}>
        <div className={styles.loadingText}>
          Loading projects...
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        Projects
      </motion.h1>
      

      <section className={styles.container}>
        {projects.length === 0 ? (
          <div className={styles.noProjects}>
            No projects found.
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.2 }}
                className={styles.projectCard}
              >
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                
                {/* Spacer to push skills and link to absolute bottom */}
                <div className="flex-grow"></div>
                
                {/* Skills and GitHub link container - positioned at absolute bottom */}
                <div className="mt-auto space-y-4">
                  {/* Display skills if they exist */}
                  {project.skills && (
                    <div className="mb-3">
                      <h3 className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">Skills Used:</h3>
                      <div className={styles.projectSkills}>
                        {processSkills(project.skills).map((skill, index) => (
                          <div
                            key={index}
                            className={`${styles.skillTag} ${skill.color}`}
                          >
                            {skill.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* GitHub link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className={styles.projectLink}
                  >
                    {project.location}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}



'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

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
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-16">
        <div className="text-center text-gray-400 text-xl">
          Loading projects...
        </div>
      </main>
    );
  }

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
        {projects.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 text-xl">
            No projects found.
          </div>
        ) : (
          projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.2 }}
              className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              {/* Spacer to push skills and link to absolute bottom */}
              <div className="flex-grow"></div>
              
              {/* Skills and GitHub link container - positioned at absolute bottom */}
              <div className="mt-auto">
                {/* Display skills if they exist */}
                {project.skills && (
                  <div className="mb-3">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">Skills Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {processSkills(project.skills).map((skill, index) => (
                        <div
                          key={index}
                          className={`text-xs px-3 py-2 text-center rounded-lg shadow border border-gray-600 hover:scale-105 transition-transform ${skill.color} text-white font-medium`}
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
                  className="block w-full text-center px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  {project.location}
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </section>
    </main>
  );
}



'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filepath, setFilepath] = useState('app/projects/ProjectsTracker.xlsx');

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
        setProjects([
          {
            title: "Sample Project 1",
            description: "This is a sample project description. Your Excel file couldn't be read.",
            link: "#"
          },
          {
            title: "Sample Project 2", 
            description: "Another sample project. Check that your Excel file exists and has the correct format.",
            link: "#"
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to sample data
      setProjects([
        {
          title: "Sample Project 1",
          description: "This is a sample project description. Your Excel file couldn't be read.",
          link: "#"
        },
        {
          title: "Sample Project 2", 
          description: "Another sample project. Check that your Excel file exists and has the correct format.",
          link: "#"
        }
      ]);
    } finally {
      setLoading(false);
    }
  }

  const handleFilepathChange = (e) => {
    setFilepath(e.target.value);
  };

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
                    <div className="grid grid-cols-3 gap-2">
                      {Array.isArray(project.skills) ? (
                        project.skills.map((skill, skillIdx) => (
                          <div key={skillIdx} className="bg-gray-700 text-xs p-2 text-center text-gray-300 border border-gray-600 hover:border-cyan-500/50 transition-colors">
                            {skill}
                          </div>
                        ))
                      ) : (
                        <div className="bg-gray-700 text-xs p-2 text-center text-gray-300 border border-gray-600 hover:border-cyan-500/50 transition-colors">
                          {project.skills}
                        </div>
                      )}
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



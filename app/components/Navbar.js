"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
        : 'bg-black/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
        >
          Benchy Dutreuil
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-gray-300">
          <Link 
            href="#about" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            Skills
          </Link>
          <Link 
            href="/contact" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Tablet Menu (simplified) */}
        <div className="hidden md:flex lg:hidden gap-4 text-gray-300">
          <Link 
            href="/projects" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            className="px-3 py-2 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200"
          >
            Skills
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/95 backdrop-blur-md px-4 py-4 space-y-2 border-t border-gray-800">
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          >
            About
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setIsOpen(false)} 
            className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/skills" 
            onClick={() => setIsOpen(false)} 
            className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          >
            Skills
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

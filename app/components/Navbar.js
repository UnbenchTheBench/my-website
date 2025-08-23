"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition">
          Benchy Dutreuil
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="#about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projects</Link>
          <Link href="#skills" className="hover:text-cyan-400 transition">Skills</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-black/90 px-6 py-4 space-y-4 text-gray-300">
          <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">About</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Projects</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Skills</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

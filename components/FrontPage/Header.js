"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
          Jeremy Goolsby
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-blue-600">Home</Link>
          <Link href="#about" className="hover:text-blue-600">About</Link>
          {/* <Link href="#projects" className="hover:text-blue-600">Projects</Link> */}
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-2">
          <Link href="#home" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
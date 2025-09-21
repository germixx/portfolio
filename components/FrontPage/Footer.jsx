"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-600">
          <p>© {year} Jeremy Goolsby All rights reserved.</p>
          <p className="mt-1">
            <Link href="/sitemap.xml" className="hover:underline">Sitemap</Link>{" · "}
            {/* <Link href="/robots.txt" className="hover:underline">Robots.txt</Link> */}
          </p>
        </div>

        <nav className="text-sm text-gray-700">
          <ul className="flex flex-wrap gap-4">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            {/* <li><Link href="#projects" className="hover:underline">Projects</Link></li> */}
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    
      {/* Back-to-top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 rounded-full shadow-lg border bg-white px-4 py-2 text-sm hover:bg-gray-50"
        >
          ↑ Top
        </button>
      )}
    </footer>
  );
}
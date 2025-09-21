"use client";

import Link from "next/link";
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen flex items-center scroll-mt-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <p className="uppercase tracking-wider text-sm text-gray-500 mb-3">
            Portfolio of
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Jeremy Goolsby
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            Developer • Entrepreneur • Builder of lean, fast, SEO-friendly products.
            I design and ship full-stack apps with Next.js and modern tooling.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* <Link
              href="#projects"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              View Projects
            </Link> */}
            <Link
              href="#contact"
              className="inline-flex items-center px-5 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition"
            >
              Contact Me
            </Link>
          </div>

          {/* Quick badges */}
          <ul className="mt-8 flex flex-wrap gap-3 text-sm text-gray-600">
            <li className="px-3 py-1 rounded-full bg-gray-100">Next.js (App Router)</li>
            <li className="px-3 py-1 rounded-full bg-gray-100">Tailwind CSS</li>
            <li className="px-3 py-1 rounded-full bg-gray-100">Node & MySQL</li>
          </ul>
        </div>

        {/* (Optional) Image / Illustration */}
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 flex items-center justify-center">
            {/* Replace with your photo or logo */}
            <div className="h-full w-full rounded-xl border border-dashed border-gray-300 flex items-center justify-center">
            <Image
              src="/jeremy-goolsby.png"   // <-- place your photo in /public/profile.jpg
              alt="Jeremy Goolsby"
              fill
              className="object-cover"
              priority   // loads immediately for better LCP
            />
            </div>
          </div>

          {/* Decorative blob */}
          <div className="pointer-events-none absolute -z-10 -top-10 -right-10 h-40 w-40 rounded-full bg-blue-100 blur-2xl opacity-60" />
        </div>
      </div>
    </section>
  );
}
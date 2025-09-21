"use client";

import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Lightweight, SEO-first portfolio site using Next.js App Router and Tailwind. Green CWV and instant nav.",
    tags: ["Next.js", "Tailwind", "SEO"],
    href: "#", // replace with your repo or live link
    imageAlt: "Screenshot of personal portfolio",
  },
  {
    title: "SaaS Starter",
    description:
      "Auth, billing placeholders, and a clean dashboard shell to go from idea to MVP in a weekend.",
    tags: ["Next.js", "Node", "MySQL"],
    href: "#",
    imageAlt: "SaaS starter dashboard preview",
  },
  {
    title: "Local Directory",
    description:
      "Directory + reviews with search, filters, and server actions. Built for local SEO and fast listings.",
    tags: ["Next.js", "Server Actions", "Postgres"],
    href: "#",
    imageAlt: "Local directory search page",
  },
];

function ProjectCard({ p }) {
  return (
    <article className="group rounded-2xl border bg-white overflow-hidden hover:shadow-xl transition">
      {/* placeholder visual block — swap for next/image when you have screenshots */}
      <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm">{p.imageAlt}</span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
        <p className="mt-2 text-gray-700">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-gray-100 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <Link
            href={p.href}
            className="inline-flex items-center gap-1 text-gray-900 hover:underline"
          >
            View project <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Projects
            </h2>
            <p className="mt-3 text-gray-700">
              A few builds that show my approach to speed, simplicity, and clean UX.
            </p>
          </div>
          {/* optional CTA to GitHub */}
          <Link
            href="https://github.com/your-username"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl border border-gray-300 hover:bg-white"
          >
            GitHub
          </Link>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
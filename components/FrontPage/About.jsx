"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          About
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          I’m <strong>Jeremy</strong>, a builder who ships fast, SEO-friendly web products.
          I focus on clean UX, performance, and pragmatic engineering. I enjoy turning rough ideas
          into live products and iterating with real user feedback.
        </p>

        {/* quick stats / highlights */}
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <li className="p-5 rounded-xl border bg-gray-50">
            <p className="text-3xl font-bold">5+</p>
            <p className="text-gray-600 text-sm">Shipped projects</p>
          </li>
          <li className="p-5 rounded-xl border bg-gray-50">
            <p className="text-3xl font-bold">~100ms</p>
            <p className="text-gray-600 text-sm">TTFB targets</p>
          </li>
          <li className="p-5 rounded-xl border bg-gray-50">
            <p className="text-3xl font-bold">Core Web Vitals</p>
            <p className="text-gray-600 text-sm"></p>
          </li>
          <li className="p-5 rounded-xl border bg-gray-50">
            <p className="text-3xl font-bold">Next.js</p>
            <p className="text-gray-600 text-sm">App Router + Edge</p>
          </li>
        </ul>

        {/* skills */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900">Core stack</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Tailwind CSS",
              "Node.js",
              "MySQL / MongoDB",
              "Redis",
              "PHP",
              "Javascript",
              "Python",
              "WordPress (plugin dev)",
              "SEO & schema"
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
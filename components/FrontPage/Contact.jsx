"use client";

import { useState, useMemo } from "react";
import Script from "next/script";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Spam-safe email assembly
  const email = useMemo(() => {
    const user = "hello";
    const domain = "jeremygoolsby";
    const tld = "com";
    return `${user}@${domain}.${tld}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Firstname Lastname",
    url: "https://firstnameLastname.com",
    email: `mailto:${email}`,
    jobTitle: "Developer & Entrepreneur",
    sameAs: [
      "https://github.com/your-username",
      "https://www.linkedin.com/in/your-username/",
      "https://twitter.com/your-handle"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jacksonville",
      addressRegion: "FL",
      addressCountry: "US"
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      {/* JSON-LD for SEO */}
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Contact
        </h2>
        <p className="mt-3 text-gray-700">
          Want to collaborate or chat? Reach out via email or connect on socials.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Email Card */}
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Email</h3>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
              >
                {email}
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex items-center px-4 py-2 rounded-xl border border-gray-300 hover:bg-white transition"
                aria-live="polite"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              I typically reply within 24–48 hours.
            </p>
            <div className="mt-5">
                <h4 className="text-sm font-semibold text-gray-800">Instagram</h4>
                <a
                href="https://instagram.com/esoteric_enum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-gray-700 hover:underline"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-pink-500"
                >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 4.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.5-.88a1.13 1.13 0 1 1-2.26 0 1.13 1.13 0 0 1 2.26 0z" />
                </svg>
                @esoteric_enum
                </a>
            </div>
          </div>


          {/* Socials Card */}
          {/* <div className="p-6 rounded-2xl border bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Social</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/your-username/"
                  className="inline-flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span> <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username"
                  className="inline-flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>GitHub</span> <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/your-handle"
                  className="inline-flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Twitter / X</span> <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Prefer DM? Ping me on LinkedIn.
            </p>
          </div> */}
        </div>

        {/* Optional: Availability block */}
        <div className="mt-8 p-6 rounded-2xl border">
          <h3 className="text-lg font-semibold text-gray-900">Availability</h3>
          <p className="mt-2 text-gray-700">
            Open to consulting, rapid MVP builds, and SEO-friendly site performance audits.
          </p>
        </div>
      </div>
    </section>
  );
}
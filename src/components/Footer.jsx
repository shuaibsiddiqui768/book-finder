// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 mt-10 overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-transparent to-indigo-800/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-2xl font-extrabold text-white tracking-wide">
            📚 Book Finder
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover books, explore authors, and find your next favorite read
            with ease using the Open Library API.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3 animate-fade-in delay-100">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              {
                name: "Open Library",
                href: "https://openlibrary.org/",
                external: true,
              },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noreferrer" : ""}
                  className="relative text-gray-400 hover:text-white transition group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Socials */}
        <div className="space-y-3 animate-fade-in delay-200">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:support@bookfinder.com"
              className="text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              support@bookfinder.com
            </a>
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 text-gray-300 hover:text-white transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              🌐 GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 text-gray-300 hover:text-white transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              🐦 Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-10 text-center border-t border-gray-700 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Book Finder</span>. All rights reserved.
      </div>
    </footer>
  );
}

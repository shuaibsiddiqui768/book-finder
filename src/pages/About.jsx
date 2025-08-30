// pages/About.jsx
import React from "react";
import aboutImg from "../assets/book_coll2.jpg"; 
export default function About() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-100 py-16 px-6 rounded-2xl shadow-xl">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center md:text-left">
            About Book Finder
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">
            <span className="font-semibold">Book Finder</span> is a simple yet
            powerful app built for <span className="italic">Alex 🎓</span>, a
            college student who loves discovering books.  
            With the power of the{" "}
            <span className="text-indigo-600 font-semibold">
              Open Library API
            </span>
            , you can search for books by title and explore details like
            author, publication year, and cover images.
          </p>
          <p className="text-gray-600 leading-relaxed text-center md:text-left">
            This project is crafted with{" "}
            <span className="font-semibold text-purple-600">React + Vite</span>{" "}
            and styled using{" "}
            <span className="font-semibold text-indigo-600">
              Tailwind CSS
            </span>
            , with smooth navigation powered by{" "}
            <span className="font-semibold text-purple-600">React Router</span>.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end animate-fade-in delay-150">
          <img
            src={aboutImg}
            alt="Books illustration"
            className="w-80 h-auto rounded-2xl shadow-lg transform hover:scale-105 hover:rotate-1 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}

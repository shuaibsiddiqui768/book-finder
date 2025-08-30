import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import React from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  // Focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Debounced auto search
  useEffect(() => {
    if (!input.trim()) return;

    const delayDebounce = setTimeout(() => {
      onSearch(input);
    }, 600);

    return () => clearTimeout(delayDebounce);
  }, [input, onSearch]);

  // Manual search with button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <section
      className="relative h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Search form centered */}
      <form
        onSubmit={handleSubmit}
        className="search-form-elem flex items-center justify-between bg-white shadow-lg rounded-full px-6 py-3 w-full max-w-xl"
      >
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search books by title..."
          className="form-control flex-1 text-lg outline-none bg-transparent"
        />
        <button
          type="submit"
          className="flex items-center justify-center text-purple-600 hover:text-purple-800 transition-colors"
        >
          <FaSearch size={24} />
        </button>
      </form>
    </section>
  );
}

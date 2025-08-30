import { Link } from "react-router-dom";
import React from "react";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { wishlist } = useWishlist();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
        >
          <span role="img" aria-label="book">
            📖
          </span>
          <span>Book Finder</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="relative group transition duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group transition duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="relative group transition duration-300 flex items-center"
            >
              Wishlist
              {wishlist.length > 0 && (
                <span className="ml-2 bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded-full group-hover:scale-110 transition-transform">
                  {wishlist.length}
                </span>
              )}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

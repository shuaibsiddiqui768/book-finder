import { Link } from "react-router-dom";
import fallbackCover from "../assets/img2.webp"; 
import { useWishlist } from "../context/WishlistContext"; 
import toast from "react-hot-toast"; 
import React from "react";

export default function BookCard({ book }) {
  const { addToWishlist } = useWishlist();

  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : fallbackCover;

  // Extract book key properly
  const bookId = book.key?.replace("/works/", "");

  function handleAddWishlist() {
    addToWishlist(book);
    toast.success(`${book.title} added to wishlist! ✅`);
  }

  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 flex flex-col 
      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
      hover:-translate-y-2 relative group"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

      {/* Clickable Cover */}
      <Link to={`/book/${bookId}`} className="relative z-10">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-72 object-contain rounded-lg mb-4 bg-gray-100 transition-transform duration-500 group-hover:scale-105"
          onError={(e) => (e.currentTarget.src = fallbackCover)}
        />
      </Link>

      {/* Book Info */}
      <div className="relative z-10">
        <h2 className="font-bold text-lg mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {book.title}
        </h2>
        <p className="text-gray-600 mb-1">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-sm text-gray-500 mb-3">
          First Published: {book.first_publish_year || "N/A"}
        </p>

        {/* Wishlist Button */}
        <button
          onClick={handleAddWishlist}
          className="mt-auto w-full bg-gradient-to-r from-blue-600 to-indigo-600 
          text-white py-2 rounded-lg shadow-md 
          hover:from-indigo-600 hover:to-blue-700 
          transition-all duration-300 transform hover:scale-105 
          active:scale-95 relative overflow-hidden"
        >
          <span className="relative z-10">+ Add to Wishlist</span>

          {/* Ripple animation effect */}
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></span>
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { useWishlist } from "../context/WishlistContext";
import fallbackCover from "../assets/img2.webp";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center drop-shadow-sm">
        💖 My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">
          You haven’t added any books yet. Start exploring! 📚
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((book) => {
            const coverUrl = book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : fallbackCover;

            return (
              <div
                key={book.key}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col 
                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl 
                hover:-translate-y-2 relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

                {/* Book Cover */}
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="w-full h-64 object-contain rounded-lg mb-4 bg-gray-100 transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => (e.currentTarget.src = fallbackCover)}
                />

                {/* Book Info */}
                <h2 className="font-bold text-lg mb-1 text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-3 text-sm italic">
                  {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
                </p>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(book.key)}
                  className="mt-auto bg-gradient-to-r from-red-500 to-pink-600 
                  text-white py-2 rounded-lg shadow-md 
                  hover:from-red-600 hover:to-pink-700 
                  transition-all duration-300 transform hover:scale-105 
                  active:scale-95 relative overflow-hidden"
                >
                  <span className="relative z-10">❌ Remove</span>
                  {/* Ripple overlay */}
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition"></span>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

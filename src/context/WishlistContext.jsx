import React, { createContext, useContext, useState, useEffect } from "react";
// Create Context first
const WishlistContext = createContext();

// ✅ Custom hook for using context
export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}


//Provider Component
export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(book) {
    if (!wishlist.some((b) => b.key === book.key)) {
      setWishlist([...wishlist, book]);
    }
  }

  function removeFromWishlist(bookId) {
    setWishlist(wishlist.filter((b) => b.key !== bookId));
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

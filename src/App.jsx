import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import BookDetails from "./pages/BookDetails";
import Wishlist from "./pages/Wishlist"; 
import { WishlistProvider } from "./context/WishlistContext"; 
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <WishlistProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />


        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/wishlist" element={<Wishlist />} /> 
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>


        <Footer />


        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </WishlistProvider>
  );
}

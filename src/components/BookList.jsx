import React from "react";
import BookCard from "./BookCard";
export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {" "}
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}{" "}
    </div>
  );
}

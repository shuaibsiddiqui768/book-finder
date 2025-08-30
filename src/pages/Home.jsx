import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const [query, setQuery] = useState("harry potter");
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0); // store total results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError("");

    fetch(`https://openlibrary.org/search.json?title=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.docs.length === 0) {
          setError("No books found. Try another search.");
        }

        setBooks(data.docs);
        setTotalResults(data.numFound); // store result count
      })
      .catch(() => setError("Something went wrong. Please try again."))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <section>
      <SearchBar onSearch={setQuery} />

      {/* Show result count just below navbar */}
      {!loading && !error && (
        <p className="text-center text-gray-600 mt-4">
          {totalResults.toLocaleString()} results found
        </p>
      )}

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && <BookList books={books} />}
    </section>
  );
}

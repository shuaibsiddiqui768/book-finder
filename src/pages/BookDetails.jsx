import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [coverUrl, setCoverUrl] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await res.json();

        if (data.covers && data.covers.length > 0) {
          setCoverUrl(
            `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
          );
        } else {
          setCoverUrl("/no-image.png");
        }

        setBook(data);
      } catch (err) {
        console.error("Failed to fetch book details:", err);
      }
    }
    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading book details...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 hover:shadow-2xl transition-shadow duration-300">
        {/* Book Cover */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
          <img
            src={coverUrl}
            alt={book.title}
            className="rounded-lg w-full h-auto max-w-md object-contain shadow-md border"
            onError={(e) => (e.target.src = "/no-image.png")}
          />
        </div>

        {/* Book Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
              {book.title}
            </h1>

            {/* Markdown description */}
            <div className="prose prose-blue max-w-none mb-4 text-gray-700">
              <ReactMarkdown>
                {book.description?.value ||
                  book.description ||
                  "No description available."}
              </ReactMarkdown>
            </div>

            <p className="text-gray-600 mb-2">
              <span className="font-semibold">First Published:</span>{" "}
              {book.first_publish_date || "N/A"}
            </p>

            {book.subjects && (
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Subjects:</span>{" "}
                {book.subjects.slice(0, 10).join(", ")}
              </p>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

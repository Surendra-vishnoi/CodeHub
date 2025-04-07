import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState(""); // State to hold the search query

  // Function to handle search
  const handleSearch = () => {
    if (!query.trim()) {
      return; // Don't search if query is empty
    }

    setLoading(true);
    axios
      .get(`https://openlibrary.org/search.json?q=${query}`)
      .then((response) => {
        setBooks(response.data.docs.slice(0, 10)); // Show 10 books
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  };

  // Optional: Fetch initial data with a default query
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=harry+potter")
      .then((response) => {
        setBooks(response.data.docs.slice(0, 10)); // Show 10 books
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#2C2C2C", color: "#ffffff", minHeight: "100vh", paddingBottom: "40px" }}>
      <h2 
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "10px",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        Explore the Code of Knowledge
      </h2>
      <p 
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "40px",
          animation: "fadeIn 1s ease-in-out 0.5s",
          color: "#b0b0b0",
        }}
      >
       Discover a world of must-read books for every coder—coding, tech, and beyond!
      </p>

      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Update query state
          style={{
            padding: "12px",
            width: "400px", // Wider input
            marginRight: "10px",
            borderRadius: "25px", // Rounded corners
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "25px", 
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Search
        </button>
      </div>

      {loading ? <h2 style={{ textAlign: "center", fontSize: "18px" }}>Loading...</h2> : null}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          animation: "fadeIn 1s ease-in-out 1s", 
        }}
      >
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;

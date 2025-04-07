import { useState } from "react";

function BookCard({ book }) {
  const [flipped, setFlipped] = useState(false);

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <div 
      className="book-card" 
      onClick={() => setFlipped(!flipped)}
      style={{ 
        width: "230px", 
        height: "360px", 
        perspective: "1000px", 
        cursor: "pointer", 
        margin: "15px" // Add margin for spacing
      }}
    >
      <div 
        className="book-inner" 
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0)",
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front Side (Book Cover) */}
        <div 
          className="book-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
          }}
        >
          <img 
            src={coverUrl} 
            alt={book.title} 
            style={{
              width: "100%", 
              height: "65%", 
              objectFit: "cover", 
              borderRadius: "8px",
            }} 
          />
          <h4 
            style={{ 
              fontSize: "16px", 
              margin: "8px 0", 
              color: "#333" 
            }}
          >
            {book.title}
          </h4>
          <p 
            style={{ 
              fontSize: "12px", 
              color: "#555", 
              marginBottom: "10px" 
            }}
          >
            {book.author_name?.join(", ") || "Unknown Author"}
          </p>
          <button 
            style={{
              padding: "8px 12px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontSize: "12px",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#007BFF"}
          >
            View Details
          </button>
        </div>

        {/* Back Side (Book Details) */}
        <div 
          className="book-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#333",
            color: "#fff",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px",
          }}
        >
          <h4 
            style={{
              fontSize: "16px", 
              marginBottom: "5px", 
              color: "#fff" 
            }}
          >
            {book.title}
          </h4>
          <p 
            style={{
              fontSize: "12px", 
              marginBottom: "5px",
              color: "#ddd" 
            }}
          >
            📖 Author: {book.author_name?.join(", ") || "Unknown"}
          </p>
          <p 
            style={{
              fontSize: "12px", 
              marginBottom: "5px",
              color: "#ddd" 
            }}
          >
            📅 Published: {book.first_publish_year || "N/A"}
          </p>
          <p 
            style={{
              fontSize: "12px", 
              marginBottom: "5px",
              color: "#ddd" 
            }}
          >
            🏷 Genre: {book.subject ? book.subject.slice(0, 3).join(", ") : "N/A"}
          </p>
          <p 
            style={{
              fontSize: "12px", 
              marginBottom: "10px",
              color: "#ddd" 
            }}
          >
            ⭐ Rating: {book.ratings_average ? `${book.ratings_average}/5` : "No ratings"}
          </p>
          <button 
            style={{
              padding: "8px 12px",
              backgroundColor: "#fff",
              color: "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              fontSize: "12px",
            }}
            onClick={() => setFlipped(false)} // Flip back to front on button click
          >
            Flip Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

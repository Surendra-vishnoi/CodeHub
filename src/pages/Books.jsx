import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BookList from "../components/BookList"; // Importing BookList

function Books() {
  return (
    <>
      <Navbar />
      
      <BookList /> {/* Displaying fetched books */}
      <Footer />
    </>
  );
}

export default Books;

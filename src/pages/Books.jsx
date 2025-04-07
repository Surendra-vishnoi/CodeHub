import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import BookList from "../components/BookList"; 

function Books() {
  return (
    <>
      <Navbar />
      
      <BookList />
      <Footer />
    </>
  );
}

export default Books;

import React, { useEffect } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="books" className="py-10">
      <h1 className="text-center pb-10 text-xl font-semibold">Books</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div className="py-10">
      <h1 className="text-center pb-10 text-xl font-semibold">Book</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

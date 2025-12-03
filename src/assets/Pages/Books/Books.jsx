import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  return (
    <div>
      <h1 className="text-center py-10">Book</h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;

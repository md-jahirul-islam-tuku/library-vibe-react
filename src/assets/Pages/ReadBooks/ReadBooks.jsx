import React, { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import { getIds } from "../../Utilities/addToDB";
import { toast } from "react-toastify";

const ReadBooks = ({ sortBy }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedIds = getIds();
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          storedIds.includes(book.bookId)
        );
        setBooks(filteredBooks);
      });
  }, []);

  const sortedBooks = [...books].sort((a, b) => b[sortBy] - a[sortBy]);

  const removeId = (id) => {
    const currentIds = getIds();
    const updatedIds = currentIds.filter((i) => i !== id);
    localStorage.setItem("id", JSON.stringify(updatedIds));
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          updatedIds.includes(book.bookId)
        );
        setBooks(filteredBooks);
        toast.success("Book removed ✅");
      });
  };

  return (
    <div>
      {sortedBooks.map((book) => (
        <ReadBook key={book.bookId} removeId={removeId} book={book} />
      ))}
    </div>
  );
};

export default ReadBooks;

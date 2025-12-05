import React, { useEffect, useState } from "react";
import WishlistBook from "../WishlistBook/WishlistBook";
import { toast } from "react-toastify";
import { wishGetIds } from "../../Utilities/wishlistAddToDB";

const WishlistBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedIds = wishGetIds();
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          storedIds.includes(book.bookId)
        );
        setBooks(filteredBooks);
      });
  }, []);

  const removeId = (id) => {
    const currentIds = wishGetIds();
    const updatedIds = currentIds.filter((i) => i !== id);
    localStorage.setItem("item", JSON.stringify(updatedIds));
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBooks = data.filter((book) =>
          updatedIds.includes(book.bookId)
        );
        setBooks(filteredBooks);
        toast.success("Book removed from wishlist ✅");
      });
  };
  return (
    <div>
      {books.map((book) => (
        <WishlistBook key={book.bookId} book={book} removeId={removeId} />
      ))}
    </div>
  );
};

export default WishlistBooks;

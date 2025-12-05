import React from "react";
import ReadBooks from "../ReadBooks/ReadBooks";
import { ToastContainer } from "react-toastify";

const ListedBooks = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="bg-base-200 py-10 my-5 rounded-xl">
        <h1 className="text-3xl text-center font-bold">Books</h1>
      </div>
      <ReadBooks />
      <ToastContainer autoClose={1000} position="top-center" />
    </div>
  );
};

export default ListedBooks;

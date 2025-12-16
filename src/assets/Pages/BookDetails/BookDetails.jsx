import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addId } from "../../Utilities/addToDB";
import { toast, ToastContainer } from "react-toastify";
import { wishAddId } from "../../Utilities/wishlistAddToDB";

const BookDetails = () => {
  const handleAdd = (id) => {
    const result = addId(id);

    if (result === "ID_ADDED") {
      toast.success("Book added to Read list ✅");
    } else if (result === "ID_EXISTS") {
      toast.error("Book already exists ⚠️");
    } else {
      toast.error("Invalid book ID ❌");
    }
  };

  const handleWish = (id) => {
    const result = wishAddId(id);

    if (result === "ID_ADDED") {
      toast.success("Book added to Wishlist ✅");
    } else if (result === "ID_EXISTS") {
      toast.error("Book already exists ⚠️");
    } else {
      toast.error("Invalid book ID ❌");
    }
  };

  const { id } = useParams();
  const books = useLoaderData();
  const bookDetails = books.find((book) => book.bookId === Number(id));

  const {
    bookId,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
    image,
  } = bookDetails;
  return (
    <div className="hero my-10 max-w-[1170px] mx-auto mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <figure className="w-1/2 flex justify-center bg-base-200 rounded-2xl">
          <img src={image} className="rounded-lg shadow-xl h-[65vh]  m-20" />
        </figure>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-3 font-bold">By: {author}</p>
          <hr className="border border-base-300" />
          <p className="py-3 font-bold">{category}</p>
          <hr className="border border-base-300" />
          <p className="py-3">
            <span className="font-bold">Review :</span> {review}
          </p>
          <div className="flex gap-4 pb-4">
            <p className="font-bold">Tag :</p>
            <p className="bg-green-50 px-4 rounded-full text-green-500">
              {tags[0]}
            </p>
            <p className="bg-green-50 px-4 rounded-full text-green-500">
              {tags[1]}
            </p>
          </div>
          <hr className="border border-base-300" />
          <div className="overflow-x-auto py-4">
            <table className="table-auto w-full text-start">
              <tbody>
                <tr>
                  <td className="py-1">Number of Pages :</td>
                  <td className="py-1 font-bold">{totalPages}</td>
                </tr>

                <tr>
                  <td className="py-1">Publisher :</td>
                  <td className="py-1 font-bold">{publisher}</td>
                </tr>

                <tr>
                  <td className="py-1">Year of Publishing :</td>
                  <td className="py-1 font-bold">{yearOfPublishing}</td>
                </tr>

                <tr>
                  <td className="py-1">Rating :</td>
                  <td className="py-1 font-bold">{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4">
            <button
              onClick={() => handleAdd(bookId)}
              className="btn btn-success btn-outline mr-2 hover:text-white"
            >
              Read
            </button>
            <button
              onClick={() => handleWish(bookId)}
              className="btn btn-accent text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

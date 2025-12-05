import React from "react";

import { SlLocationPin } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from "react-router";

const WishlistBook = ({ book, removeId }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="card md:card-side shadow-sm mb-8">
      <figure className="h-66 md:h-40 bg-base-300 m-4 rounded-lg">
        <img className="p-4 rounded-lg h-full" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{bookName}</h2>
          <button
            onClick={() => removeId(bookId)}
            className="font-bold cursor-pointer bg-base-300 px-2 rounded-full hover:bg-red-200 hover:text-red-500"
          >
            X
          </button>
        </div>
        <p>By : {author}</p>
        <p className="flex items-center">
          <span className="font-bold mr-8">Tag :</span>
          <span className="bg-green-50 px-4 rounded-full text-green-500 mr-5">
            {tags[0]}
          </span>
          <span className="bg-green-50 px-4 rounded-full text-green-500 mr-5">
            {tags[1]}
          </span>
          <span className="flex items-center">
            <SlLocationPin className="mr-1" /> Year of Publishing:{" "}
            {yearOfPublishing}
          </span>
        </p>
        <p className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <GoPeople /> Publisher : {publisher}
          </span>{" "}
          <span className="flex items-center gap-2">
            <MdLibraryBooks /> Pages : {totalPages}
          </span>
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-sm btn-info btn-soft rounded-full">
            Category : {category}
          </button>
          <button className="btn btn-sm btn-warning btn-soft rounded-full">
            Rating : {rating}
          </button>
          <Link to={`/bookDetails/${bookId}`} className="btn btn-sm btn-success rounded-full text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistBook;

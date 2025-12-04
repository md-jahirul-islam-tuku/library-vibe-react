import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 border-2 border-base-300 cursor-pointer hover:shadow-xl">
        <figure className="p-8 bg-base-200 m-3 rounded-b-lg">
          <img src={image} alt="Shoes" className="rounded h-36 shadow-lg" />
        </figure>
        <div className="card-body">
          <div className="flex gap-2">
            <h2 className="bg-green-50 px-4 rounded-full text-green-500 font-semibold">
              {tags[0]}
            </h2>
            <h2 className="bg-green-50 px-4 rounded-full text-green-500 font-semibold">
              {tags[1]}
            </h2>
          </div>
          <h1 className="card-title">{bookName}</h1>
          <p>By: {author}</p>
          <hr className="border border-dashed border-base-300" />
          <div className="flex">
            <p>{category}</p>
            <p className="flex items-center text-md">
              {rating} <FaRegStar className="ml-1 mb-0.5" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

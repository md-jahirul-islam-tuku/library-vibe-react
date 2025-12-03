import React from "react";
import { RiStarLine } from "react-icons/ri";

const Book = ({ book }) => {
  const { image, tags, bookName, author, category,rating } = book;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="p-8 bg-base-200 m-3 rounded-b-lg">
        <img src={image} alt="Shoes" className="rounded-xl h-36" />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          <h2 className="bg-green-50 px-4 rounded-full text-green-700 font-semibold">
            {tags[0]}
          </h2>
          <h2 className="bg-green-50 px-4 rounded-full text-green-700 font-semibold">
            {tags[1]}
          </h2>
        </div>
        <h1 className="card-title">{bookName}</h1>
        <p>By: {author}</p>
        <hr className="border border-dashed border-base-300" />
        <div className="flex">
          <p>{category}</p>
          <p className="flex items-center">{rating} <RiStarLine /> </p>
        </div>
      </div>
    </div>
  );
};

export default Book;

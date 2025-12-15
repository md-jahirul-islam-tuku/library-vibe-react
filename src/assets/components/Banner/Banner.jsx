import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

const Banner = () => {
  const { user } = use(AuthContext);
  return (
    <div className="hero bg-base-200 rounded-lg mt-18">
      <div className="hero-content flex-col lg:flex-row-reverse py-14">
        <img
          src="https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
          className="max-w-sm h-88 rounded-lg shadow-xl"
        />
        <div className="w-2/3 px-8 text-center lg:text-start">
          <h1 className="text-5xl font-bold pb-6">
            Books to freshen up your bookshelf
          </h1>
          <Link to={user ? "/" : "/warning"} className="btn btn-success">
            View The List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

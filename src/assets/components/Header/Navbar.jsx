import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../../contexts/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to={"/listed-books"}>Listed Books</NavLink>
          </li>
          <li>
            <NavLink to={"/pages-to-read"}>Pages to Read</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 w-full z-10">
      <div className="navbar max-w-[1170px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl pl-0">
            LibraryVibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <>
              <Link to={"/signIn"} className="btn btn-success mr-2 shadow-none">
                Sign In
              </Link>
              <Link to={"/signUp"} className="btn btn-accent shadow-none">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

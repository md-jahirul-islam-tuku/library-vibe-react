import React from "react";
import { Link } from "react-router";

const Warning = () => {
  return (
    <div className="min-h-screen max-w-[1170px] flex items-center justify-center bg-gray-100 px-4 mx-auto rounded-lg mb-2">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-5xl mb-4">⚠️</h1>
        <h2 className="text-3xl font-bold text-red-600 mb-3">
          Access Restricted!
        </h2>
        <p className="text-gray-600 mb-6">
          You must sign in or create an account to access this page.
        </p>

        <div className="flex gap-4 justify-center">
          <Link to="/signIn" className="btn btn-success">
            Sign In
          </Link>

          <Link to="/signUp" className="btn btn-accent">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Warning;

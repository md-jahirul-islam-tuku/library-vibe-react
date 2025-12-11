import React, { useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        error.code === "auth/email-already-in-use"
          ? setErrorMessage("* Email already in use")
          : setErrorMessage(error.code);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-108 flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                className="input w-full"
                required
              />
              <label className="label font-bold">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <button className="btn btn-neutral mt-4">Sign up</button>
              <button className="btn btn-ghost mt-1" type="reset">
                Reset
              </button>
              <div className="flex items-center">
                <p className="text-red-500">{errorMessage}</p>
                {errorMessage ? (
                  <Link
                    className="btn btn-sm text-lg btn-success"
                    to={"/signIn"}
                  >
                    Sign in
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;

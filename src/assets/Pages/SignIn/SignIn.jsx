import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { Link } from "react-router";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => {
        error.code === "auth/operation-not-allowed"
          ? setErrorMessage("* Please Sign up")
          : setErrorMessage(error.code);
      });
  };
  return (
    <form onSubmit={handleSignIn} className="hero bg-base-200 min-h-screen">
      <div className="hero-content w-108 flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign in!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="mail@site.com"
                className="input w-full"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign in</button>
              <button className="btn btn-ghost mt-1" type="reset">
                Reset
              </button>
              <div className="flex items-center mt-3">
                <p className="text-red-500">{errorMessage}</p>
                {errorMessage ? (
                  <Link
                    className="btn btn-sm text-lg btn-accent"
                    to={"/signUp"}
                  >
                    Sign up
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

export default SignIn;

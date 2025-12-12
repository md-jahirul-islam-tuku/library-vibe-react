import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { Link } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const SignIn = () => {
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setMessage(false);
        setShow(false);
        toast.success("Sign in successful 👌", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        e.target.reset();
      })
      .catch((error) => {
        error.code === "auth/invalid-credential"
          ? setMessage("* Please Sign up")
          : setMessage(error.code);
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
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-3 right-3 text-lg cursor-pointer z-10"
                >
                  {show ? <PiEyeClosedBold /> : <PiEyeBold />}
                </span>
              </div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-success mt-4">Sign in</button>
              <button className="btn btn-ghost mt-1" type="reset">
                Reset
              </button>
              <div className="flex items-center mt-3">
                <p className="text-red-500">{message}</p>
                {message ? (
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
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </form>
  );
};

export default SignIn;

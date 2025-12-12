import React, { useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const SignUp = () => {
  const [message, setMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (!/.{6,}/.test(password)) {
      setMessage("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setMessage("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setMessage("Password must contain at least one number.");
      return;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setMessage("Password must contain at least one special character.");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setShowPassword(false);
        setMessage(false);
        toast.success("Sign up successful 👌", {
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
        error.code === "auth/email-already-in-use"
          ? setMessage("* Email already in use")
          : setMessage(error.code || error.message);
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-lg cursor-pointer z-10"
                >
                  {showPassword ? <PiEyeClosedBold /> : <PiEyeBold />}
                </span>
              </div>
              <button className="btn btn-success mt-4">Sign up</button>
              <button className="btn btn-ghost mt-1" type="reset">
                Reset
              </button>
              <div className="flex items-center">
                <p className="text-red-500">{message}</p>
                {message ? (
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

export default SignUp;

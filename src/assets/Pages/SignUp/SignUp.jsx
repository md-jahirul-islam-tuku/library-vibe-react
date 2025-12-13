import React, { useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
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
    const terms = e.target.terms.checked;
    if (terms === false) {
      setMessage("Please accept the terms and conditions");
      return;
    }
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
        sendEmailVerification(auth.currentUser).then(() => {
          setMessage("* Please check your inbox and verify");
          toast.success("Successful. Please Check your inbox and verify 👌", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
        setShowPassword(false);
        e.target.reset();
      })
      .catch((error) => {
        error.code === "auth/email-already-in-use"
          ? (setMessage("* Email already in use"),
            toast.info("Email already in use!", {
              position: "top-center",
              autoClose: 2000,
            }))
          : setMessage(error.code || error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="hero max-w-[1170px] mx-auto mt-20 mb-14">
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
              <label className="label mt-2 font-semibold text-primary">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox checkbox-xs checkbox-primary"
                />
                Accept Terms and Conditions
              </label>
              <button className="btn btn-success mt-2">Sign up</button>
              <button className="btn btn-ghost" type="reset">
                Reset
              </button>
              <div className="text-center font-bold">
                Already have an account?
                <Link className="ml-2 text-green-600 underline" to={"/signIn"}>
                  Sign In
                </Link>
              </div>
              <div className="flex items-center">
                <p className="text-red-500">{message}</p>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
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

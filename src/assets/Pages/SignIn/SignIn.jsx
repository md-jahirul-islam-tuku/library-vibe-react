import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { Link } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const SignIn = () => {
  const [message, setMessage] = useState(false);
  const [show, setShow] = useState(false);
  const [unverifiedUser, setUnverifiedUser] = useState(null); // store user for resend
  const emailRef = useRef();

  // resend verification email
  const resendEmail = async () => {
    if (unverifiedUser) {
      await sendEmailVerification(unverifiedUser);
      toast.info("Verification email resent!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  // const handleForgotPassword = async (email) => {
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //     toast.success("Password reset email sent! Check your inbox.");
  //   } catch (error) {
  //     console.log(error.message);

  //     if (error.code === "auth/user-not-found") {
  //       setMessage("No account found with this email.");
  //     } else {
  //       setMessage(error.message);
  //     }
  //   }
  // };

  const handleForgotPassword = async () => {
    const email = emailRef.current.value;
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.log(error.message);

      if (error.code === "auth/user-not-found") {
        setMessage("* This email is not registered. Please sign up first.");
      } else if (error.code === "auth/missing-email") {
        setMessage("* Please enter your email first.");
      } else {
        setMessage(error.message);
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // block unverified account
      if (!user.emailVerified) {
        setUnverifiedUser(user);
        setMessage("* Please verify your email! Check your inbox.");

        toast.warning("Please verify your email before logging in.", {
          position: "top-center",
          autoClose: 2000,
        });

        return;
      }

      // login success
      toast.success("Sign in successful 👌", {
        position: "top-center",
        autoClose: 2000,
      });

      setMessage(false);
      setShow(false);
      e.target.reset();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setMessage("* Invalid email or password.");
      } else {
        setMessage(error.message);
      }
    }
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
                ref={emailRef}
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
                <a
                  onClick={() => {
                    handleForgotPassword();
                  }}
                  className="link link-hover"
                >
                  Forgot password?
                </a>
              </div>

              <button className="btn btn-success mt-4">Sign in</button>

              <button className="btn btn-ghost" type="reset">
                Reset
              </button>

              <div className="text-center font-bold">
                Don’t you have an account?
                <Link className="ml-2 text-green-600 underline" to={"/signUp"}>
                  Sign up
                </Link>
              </div>

              {/* error + resend email */}
              <div>
                {message === "* Please verify your email." ? (
                  <p className="text-red-500 mt-1 text-center">
                    {message}{" "}
                    <button
                      onClick={resendEmail}
                      type="button"
                      className="text-green-600 font-semibold cursor-pointer underline"
                    >
                      Resend Verification Email
                    </button>
                  </p>
                ) : (
                  <p className="text-red-500 mt-1 text-center">{message}</p>
                )}
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover
        draggable
        theme="light"
        transition={Bounce}
      />
    </form>
  );
};

export default SignIn;

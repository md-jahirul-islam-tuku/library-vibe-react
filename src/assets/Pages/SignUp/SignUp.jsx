import React, { use, useState } from "react";
import { auth } from "../../components/Root/firebase.init";
import { sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { AuthContext } from "../../../contexts/AuthContext";

const SignUp = () => {
  const [message, setMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, signInGoogle } = use(AuthContext);
  const navigate = useNavigate();
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
    createUser(email, password)
      .then(() => {
        sendEmailVerification(auth.currentUser).then(() => {
          setMessage("* Please check your inbox and verify");
          toast.success("Successful. Please Check your inbox and verify 👌");
        });
        setTimeout(() => {
          navigate("/signIn");
        }, 2000);
      })
      .catch((error) => {
        error.code === "auth/email-already-in-use"
          ? (setMessage("* Email already in use"),
            toast.info("Email already in use!"))
          : setMessage(error.code || error.message);
      });
  };
  const handleGoogleSign = () => {
    signInGoogle()
      .then(() => {})
      .catch((err) => {
        setMessage(err.message);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="hero max-w-[1170px] mx-auto mt-20 mb-14 caret-current"
    >
      <div className="hero-content w-108 flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Please Sign up!</h1>
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
              <button
                type="button"
                onClick={() => handleGoogleSign()}
                className="btn bg-white text-black border-[#e5e5e5] mt-2"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Continue with Google
              </button>
              <button className="btn btn-ghost" type="reset">
                Form reset
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
    </form>
  );
};

export default SignUp;
